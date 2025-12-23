import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

function loadEnv() {
  const envPath = path.join(__dirname, '..', '.env.local')
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf-8')
    envContent.split('\n').forEach((line) => {
      const trimmed = line.trim()
      if (trimmed && !trimmed.startsWith('#')) {
        const [key, ...valueParts] = trimmed.split('=')
        const value = valueParts.join('=').replace(/^["']|["']$/g, '')
        if (key && value) {
          process.env[key] = value
        }
      }
    })
  }
}

loadEnv()

const GITHUB_PROJECTS = [
  { owner: 'tobiasdosdal', repo: 'Bodegalisten' },
  { owner: 'tobiasdosdal', repo: 'HabitHero' },
]

async function fetchLastCommitDate(owner, repo) {
  try {
    const url = `https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`
    const headers = {
      Accept: 'application/vnd.github.v3+json',
    }

    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `token ${process.env.GITHUB_TOKEN}`
    }

    const response = await fetch(url, { headers })

    if (!response.ok) {
      console.warn(`Failed to fetch ${owner}/${repo}: ${response.status}`)
      return null
    }

    const commits = await response.json()
    if (!commits.length) {
      return null
    }

    return commits[0].commit.author.date
  } catch (error) {
    console.warn(`Error fetching ${owner}/${repo}:`, error.message)
    return null
  }
}

async function main() {
  console.log('Fetching GitHub commit dates...')

  const dates = {}

  for (const { owner, repo } of GITHUB_PROJECTS) {
    console.log(`  Fetching ${owner}/${repo}...`)
    const date = await fetchLastCommitDate(owner, repo)
    if (date) {
      dates[`${owner}/${repo}`] = date
      console.log(`    → ${date}`)
    } else {
      console.log(`    → (failed, will use fallback)`)
    }
  }

  const outputPath = path.join(__dirname, '..', 'public', 'github-dates.json')
  const outputDir = path.dirname(outputPath)

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  fs.writeFileSync(outputPath, JSON.stringify(dates, null, 2))
  console.log(`\nGitHub dates saved to ${outputPath}`)
}

main().catch((error) => {
  console.error('Fatal error:', error)
  process.exit(1)
})
