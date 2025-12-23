import { Link, createFileRoute } from '@tanstack/react-router'
import { WindowChrome } from '~/components/WindowChrome'
import { AsciiLogo } from '~/components/AsciiLogo'

export const Route = createFileRoute('/')({
  component: Home,
})

const featuredProjects = [
  {
    name: 'Bodegalisten',
    icon: '/images/Icon-83.5@2x.png',
    description: 'Community-driven platform with 500+ Danish bodegaer',
    linkUrl: 'https://bodegalisten.dk',
    linkLabel: 'Web',
  },
  {
    name: 'PL Showet',
    icon: '/images/pllogo.png',
    description: 'Weekly Premier League podcast with video production',
    linkUrl: 'https://www.youtube.com/@PLShowet',
    linkLabel: 'Youtube',
  },
]

function Home() {
  return (
    <WindowChrome>
      <AsciiLogo />
      
      <section className="featured-section" aria-labelledby="featured-heading">
        <h2 id="featured-heading" className="featured-heading">Selected Work</h2>
        <div className="featured-grid">
          {featuredProjects.map((project) => (
            <article key={project.name} className="featured-project">
              <div className="featured-project-header">
                <img 
                  src={project.icon} 
                  alt={`${project.name} icon`} 
                  className="featured-project-icon"
                />
                <h3 className="featured-project-title">{project.name}</h3>
              </div>
              <p className="featured-project-description">{project.description}</p>
              <a 
                href={project.linkUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="featured-project-link"
              >
                {project.linkLabel} →
              </a>
            </article>
          ))}
        </div>
        <Link to="/projects" className="view-all-link">
          → View all projects
        </Link>
      </section>

      <footer className="description">
        <div className="social-links">
          <a href="https://github.com/tobiasdosdal" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
          <a href="https://linkedin.com/in/tobiasdosdal" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="https://instagram.com/tobiasdosdal" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
        </div>
        <div className="contact-info">
          <p>© 2025 Tyndfed. All rights reserved.</p>
          <p>CVR: 39125307</p>
          <p>
            <a href="mailto:kontakt@tyndfed.dk">kontakt@tyndfed.dk</a>
          </p>
          <p>
            <Link to="/privacy" className="privacy-link">Privacy & Terms</Link>
          </p>
        </div>
      </footer>
      <style>{`
        .featured-section {
          padding: 32px 24px;
          border-top: 1px solid var(--chrome-border, rgba(255, 255, 255, 0.08));
          text-align: center;
        }
        
        .featured-heading {
          color: var(--text-muted, #5c5c5c);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }
        
        .featured-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 16px;
          margin-bottom: 24px;
        }
        
        .featured-project {
          padding: 16px;
          border-radius: 8px;
          background: var(--bg-elevated, #141414);
          border: 1px solid var(--chrome-border, rgba(255, 255, 255, 0.08));
          text-align: left;
          transition: 
            border-color 150ms ease,
            transform 150ms ease;
          display: flex;
          flex-direction: column;
        }
        
        .featured-project:hover {
          border-color: var(--chrome-border-strong, rgba(255, 255, 255, 0.12));
          transform: translateY(-2px);
        }
        
        .featured-project-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 10px;
        }
        
        .featured-project-icon {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          object-fit: cover;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }
        
        .featured-project-title {
          color: var(--accent-green, #5af78e);
          margin: 0;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: -0.01em;
        }
        
        .featured-project-description {
          color: var(--text-secondary, #8c8c8c);
          margin: 0 0 12px;
          font-size: 12px;
          line-height: 1.5;
          flex: 1;
        }
        
        .featured-project-link {
          color: var(--accent-blue, #5eafff);
          font-size: 11px;
          font-weight: 500;
          padding: 6px 10px;
          min-height: 32px;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: var(--accent-blue-dim, rgba(94, 175, 255, 0.08));
          border-radius: 4px;
          align-self: flex-start;
          transition: 
            background 150ms ease,
            color 150ms ease;
        }
        
        .featured-project-link:hover {
          background: rgba(94, 175, 255, 0.15);
          color: #7ec4ff;
          text-decoration: none;
        }
        
        .view-all-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          color: var(--accent-blue, #5eafff);
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.01em;
          padding: 12px 24px;
          border-radius: 6px;
          min-height: 44px;
          background: var(--accent-blue-dim, rgba(94, 175, 255, 0.08));
          border: 1px solid rgba(94, 175, 255, 0.15);
          transition: 
            background 150ms ease,
            border-color 150ms ease,
            transform 150ms ease;
        }
        
        .view-all-link:hover {
          background: rgba(94, 175, 255, 0.15);
          border-color: rgba(94, 175, 255, 0.25);
          transform: translateY(-1px);
          text-decoration: none;
        }
        
        .view-all-link:active {
          transform: translateY(0);
        }
        
        .description {
          text-align: center;
          padding: 24px 20px 32px;
          border-top: 1px solid var(--chrome-border, rgba(255, 255, 255, 0.08));
        }
        
        .contact-info {
          color: var(--text-muted, #5c5c5c);
          font-size: 12px;
          line-height: 1.8;
        }
        
        .contact-info p {
          margin: 0;
        }
        
        .contact-info a {
          color: var(--text-secondary, #8c8c8c);
          transition: color 150ms ease;
        }
        
        .contact-info a:hover,
        .privacy-link:hover {
          color: var(--accent-blue, #5eafff);
        }
        
        .privacy-link {
          color: var(--text-muted, #5c5c5c);
          font-size: 11px;
        }
        
        .social-links {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-bottom: 16px;
        }
        
        .social-links a {
          color: var(--text-muted, #5c5c5c);
          transition: color 150ms ease, transform 150ms ease;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
        }
        
        .social-links a:hover {
          color: var(--accent-blue, #5eafff);
          transform: translateY(-2px);
        }
        
        .social-links svg {
          width: 20px;
          height: 20px;
        }
        
        @media (max-width: 480px) {
          .featured-section {
            padding: 24px 16px;
          }
          
          .featured-grid {
            gap: 12px;
          }
          
          .view-all-link {
            font-size: 12px;
            padding: 10px 20px;
          }
          
          .description {
            padding: 20px 16px 24px;
          }
          
          .contact-info {
            font-size: 11px;
          }
        }
      `}</style>
    </WindowChrome>
  )
}
