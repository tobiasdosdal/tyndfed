import { useState, useEffect } from 'react'
import { Link, createFileRoute } from '@tanstack/react-router'
import { WindowChrome } from '~/components/WindowChrome'
import { formatRelativeTime } from '~/utils/github'
import styles from './projects.module.css'

export const Route = createFileRoute('/projects')({
  component: Projects,
  head: () => ({
    meta: [
      { title: 'Tyndfed - Projects' },
      { name: 'description', content: 'View Tyndfed\'s portfolio of innovative projects including Border Genius, Bodegalisten, HabitHero, and more.' },
    ],
    links: [
      { rel: 'canonical', href: 'https://tyndfed.dk/projects' },
    ],
  }),
})

const PROJECTS = [
  {
    name: 'PL Showet',
    description: 'Komplet videoproduktion for Premier League-podcast med ugentlige episoder, grafik og distribution på Youtube og Spotify.',
    icon: '/images/pllogo.png',
    tech: ['Premiere Pro', 'After Effects', 'Photoshop'],
    links: [{ label: 'Youtube', url: 'https://www.youtube.com/@PLShowet' }],
  },
  {
    name: 'Bodegalisten',
    description: 'Fællesskabsdrevet platform med over 500 danske bodegaer. Brugerratings, anmeldelser og kortfunktion på tværs af iOS-app og responsive webapp.',
    icon: '/images/Icon-83.5@2x.png',
    tech: ['Swift', 'SwiftUI', 'React', 'Next.js', 'Supabase', 'MapKit'],
    links: [
      { label: 'App Store', url: 'https://apps.apple.com/dk/app/bodegalisten/id6476145936' },
      { label: 'Web', url: 'https://bodegalisten.dk' },
    ],
    github: { owner: 'tobiasdosdal', repo: 'Bodegalisten' },
  },
  {
    name: 'HabitHero',
    description: 'Motiverende todo-app med leaderboard til at konkurrere med vennerne.',
    icon: '/images/HH.jpg',
    tech: ['Swift', 'SwiftUI', 'CloudKit', 'WidgetKit'],
    links: [{ label: 'App Store', url: 'https://apps.apple.com/dk/app/habithero/id6479268020' }],
    github: { owner: 'tobiasdosdal', repo: 'HabitHero' },
  },
  {
    name: 'Baobab-kommunikation.dk',
    description: 'Skræddersyet hjemmeside til kommunikationsbureau med fokus på hurtig indlæsning, tilgængelighed og en visuel identitet der afspejler deres brand.',
    icon: '/images/baobab-logo.jpg',
    tech: ['React', 'Gatsby', 'Styled Components', 'Contentful'],
    links: [{ label: 'Web', url: 'https://web.archive.org/web/20250403102638/https://www.baobab-kommunikation.dk/' }],
  },
]

function Projects() {
  const [githubDates, setGithubDates] = useState<Record<string, string>>({})

  useEffect(() => {
    fetch('/github-dates.json')
      .then(res => res.json())
      .catch(() => ({}))
      .then(data => setGithubDates(data || {}))
  }, [])

  const getLastUpdated = (project: typeof PROJECTS[0]) => {
    if (!project.github) return null
    const key = `${project.github.owner}/${project.github.repo}`
    const date = githubDates[key]
    return date ? formatRelativeTime(date) : null
  }

  return (
    <WindowChrome title="projects.exe">
      <nav className="back-nav">
        <Link to="/" className="back-link">← Back to main</Link>
      </nav>
      <section className={styles.projects}>
        {PROJECTS.map((project) => {
          const lastUpdated = getLastUpdated(project)
          return (
            <article key={project.name} className={styles.project}>
              <header className={styles.projectHeader}>
                <img src={project.icon} alt={project.name} className={styles.projectIcon} loading="lazy" />
                <div className={styles.projectHeaderContent}>
                  <h3 className={styles.projectTitle}>{project.name}</h3>
                  {lastUpdated && (
                    <p className={styles.projectUpdated}>Updated {lastUpdated}</p>
                  )}
                </div>
              </header>
              <p className={styles.projectDescription}>{project.description}</p>
              {project.tech && (
                <div className={styles.techStack}>
                  {project.tech.map((tech) => (
                    <span key={tech} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
              )}
              <div className={styles.projectLinks}>
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    → {link.label}
                  </a>
                ))}
              </div>
            </article>
          )
        })}
      </section>
    </WindowChrome>
  )
}
