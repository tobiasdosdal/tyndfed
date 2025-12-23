import React from 'react'
import { Link, createFileRoute } from '@tanstack/react-router'
import { WindowChrome } from '~/components/WindowChrome'
import { formatRelativeTime } from '~/utils/github'

export const Route = createFileRoute('/projects')({
  component: Projects,
  head: () => ({
    meta: [
      { title: 'Tyndfed - Projects' },
      { name: 'description', content: 'View Tyndfed\'s portfolio of innovative projects including Border Genius, Bodegalisten, HabitHero, and more.' },
    ],
  }),
})

const PROJECTS = [
  {
    name: 'PL Showet',
    description: 'Komplet videoproduktion for Premier League-podcast med ugentlige episoder, grafik og distribution på Youtube og Spotify.',
    icon: '/images/pllogo.png',
    links: [{ label: 'Youtube', url: 'https://www.youtube.com/@PLShowet' }],
  },
  {
    name: 'Bodegalisten',
    description: 'Fællesskabsdrevet platform med over 500 danske bodegaer. Brugerratings, anmeldelser og kortfunktion på tværs af iOS-app og responsive webapp.',
    icon: '/images/Icon-83.5@2x.png',
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
    links: [{ label: 'App Store', url: 'https://apps.apple.com/dk/app/habithero/id6479268020' }],
    github: { owner: 'tobiasdosdal', repo: 'HabitHero' },
  },
  {
    name: 'Baobab-kommunikation.dk',
    description: 'Skræddersyet hjemmeside til kommunikationsbureau med fokus på hurtig indlæsning, tilgængelighed og en visuel identitet der afspejler deres brand.',
    icon: '/images/baobab-logo.jpg',
    links: [{ label: 'Web', url: 'https://web.archive.org/web/20250403102638/https://www.baobab-kommunikation.dk/' }],
  },
]

function Projects() {
  const [githubDates, setGithubDates] = React.useState<Record<string, string>>({})

  React.useEffect(() => {
    fetch('/data/github-dates.json')
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
      <section className="projects">
        {PROJECTS.map((project) => {
          const lastUpdated = getLastUpdated(project)
          return (
            <article key={project.name} className="project">
              <header className="project-header">
                <img src={project.icon} alt={project.name} className="project-icon" loading="lazy" />
                <div className="project-header-content">
                  <h3 className="project-title">{project.name}</h3>
                  {lastUpdated && (
                    <p className="project-updated">Updated {lastUpdated}</p>
                  )}
                </div>
              </header>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    → {link.label}
                  </a>
                ))}
              </div>
            </article>
          )
        })}
      </section>
      <style>{`
        .back-nav {
          padding: 16px 20px;
          border-bottom: 1px solid var(--chrome-border, rgba(255, 255, 255, 0.08));
        }
        
        .back-link {
          color: var(--text-muted, #5c5c5c);
          font-size: 12px;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          min-height: 44px;
          padding: 8px 12px;
          margin: -8px -12px;
          border-radius: 6px;
          transition: 
            color 150ms ease,
            background 150ms ease;
        }
        
        .back-link:hover {
          color: var(--text-primary, #e8e8e8);
          background: var(--bg-hover, rgba(255, 255, 255, 0.05));
          text-decoration: none;
        }
        
        .projects {
          padding: 24px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 16px;
        }
        
        .project {
          padding: 16px;
          border-radius: 8px;
          background: var(--bg-elevated, #141414);
          border: 1px solid var(--chrome-border, rgba(255, 255, 255, 0.08));
          transition: 
            border-color 150ms ease,
            transform 150ms ease;
          display: flex;
          flex-direction: column;
        }
        
        .project:hover {
          border-color: var(--chrome-border-strong, rgba(255, 255, 255, 0.12));
          transform: translateY(-2px);
        }
        
        .project-header {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 10px;
        }

        .project-header-content {
          flex: 1;
        }
        
        .project-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          object-fit: cover;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }
        
        .project-title {
          color: var(--accent-green, #5af78e);
          margin: 0;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: -0.01em;
        }

        .project-updated {
          color: var(--text-muted, #5c5c5c);
          margin: 4px 0 0 0;
          font-size: 11px;
          font-weight: 400;
        }
        
        .project-description {
          color: var(--text-secondary, #8c8c8c);
          margin: 0 0 12px;
          font-size: 12px;
          line-height: 1.5;
          flex: 1;
        }
        
        .project-links {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        
        .project-link {
          color: var(--accent-blue, #5eafff);
          font-size: 11px;
          font-weight: 500;
          padding: 6px 10px;
          min-height: 32px;
          display: flex;
          align-items: center;
          gap: 4px;
          background: var(--accent-blue-dim, rgba(94, 175, 255, 0.08));
          border-radius: 4px;
          transition: 
            background 150ms ease,
            color 150ms ease;
        }
        
        .project-link:hover {
          background: rgba(94, 175, 255, 0.15);
          color: #7ec4ff;
          text-decoration: none;
        }
        
        @media (max-width: 768px) {
          .projects {
            padding: 16px;
            gap: 12px;
          }
        }
        
        @media (max-width: 480px) {
          .projects {
            padding: 12px;
            grid-template-columns: 1fr;
          }
          
          .back-nav {
            padding: 12px 16px;
          }
          
          .project {
            padding: 14px;
          }
          
          .project-icon {
            width: 28px;
            height: 28px;
          }
        }
      `}</style>
    </WindowChrome>
  )
}
