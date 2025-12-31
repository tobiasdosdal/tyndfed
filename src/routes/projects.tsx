import { Link, createFileRoute } from '@tanstack/react-router'
import { WindowChrome } from '~/components/WindowChrome'
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
  },
  {
    name: 'HabitHero',
    description: 'Motiverende todo-app med leaderboard til at konkurrere med vennerne.',
    icon: '/images/HH.jpg',
    links: [{ label: 'App Store', url: 'https://apps.apple.com/dk/app/habithero/id6479268020' }],
  },
  {
    name: 'Baobab-kommunikation.dk',
    description: 'Skræddersyet hjemmeside til kommunikationsbureau med fokus på hurtig indlæsning, tilgængelighed og en visuel identitet der afspejler deres brand.',
    icon: '/images/baobab-logo.jpg',
    links: [{ label: 'Web', url: 'https://web.archive.org/web/20250403102638/https://www.baobab-kommunikation.dk/' }],
  },
]

function Projects() {
  return (
    <WindowChrome>
      <nav className="back-nav">
        <Link to="/" className="back-link">← Back to main</Link>
      </nav>
      <section className={styles.projects}>
        {PROJECTS.map((project) => (
          <article key={project.name} className={styles.project}>
            <header className={styles.projectHeader}>
              <img src={project.icon} alt={project.name} className={styles.projectIcon} loading="lazy" />
              <h3 className={styles.projectTitle}>{project.name}</h3>
            </header>
            <p className={styles.projectDescription}>{project.description}</p>
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
        ))}
      </section>
    </WindowChrome>
  )
}
