/**
 * Fetch the last commit timestamp from a GitHub repository
 * @param owner - GitHub username
 * @param repo - Repository name
 * @returns ISO date string of the last commit, or null if fetch fails
 */
export async function getLastCommitDate(
  owner: string,
  repo: string
): Promise<string | null> {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
          ...(import.meta.env.VITE_GITHUB_TOKEN && {
            Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
          }),
        },
      }
    )

    if (!response.ok) {
      console.warn(`Failed to fetch commits for ${owner}/${repo}`)
      return null
    }

    const commits = await response.json()
    if (commits.length === 0) {
      return null
    }

    return commits[0].commit.author.date
  } catch (error) {
    console.warn(`Error fetching GitHub data for ${owner}/${repo}:`, error)
    return null
  }
}

/**
 * Format a date as relative time (e.g., "2 months ago")
 * @param dateString - ISO date string
 * @returns Formatted relative time string
 */
export function formatRelativeTime(dateString: string | null): string | null {
  if (!dateString) return null

  const date = new Date(dateString)
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffSecs = Math.floor(diffMs / 1000)
  const diffMins = Math.floor(diffSecs / 60)
  const diffHours = Math.floor(diffMins / 60)
  const diffDays = Math.floor(diffHours / 24)
  const diffWeeks = Math.floor(diffDays / 7)
  const diffMonths = Math.floor(diffDays / 30)
  const diffYears = Math.floor(diffDays / 365)

  if (diffSecs < 60) return 'just now'
  if (diffMins < 60) return `${diffMins} minute${diffMins > 1 ? 's' : ''} ago`
  if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`
  if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`
  if (diffWeeks < 4) return `${diffWeeks} week${diffWeeks > 1 ? 's' : ''} ago`
  if (diffMonths < 12) return `${diffMonths} month${diffMonths > 1 ? 's' : ''} ago`
  return `${diffYears} year${diffYears > 1 ? 's' : ''} ago`
}
