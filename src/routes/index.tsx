import { Link, createFileRoute } from '@tanstack/react-router'
import { WindowChrome } from '~/components/WindowChrome'
import { AsciiLogo } from '~/components/AsciiLogo'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <WindowChrome>
      <AsciiLogo />
      <footer className="description">
        <nav>
          <Link to="/projects" className="project-link">
            → View Projects
          </Link>
        </nav>
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
        .description {
          text-align: center;
          padding: 24px 20px 32px;
          border-top: 1px solid var(--chrome-border, rgba(255, 255, 255, 0.08));
          background: linear-gradient(180deg, 
            transparent 0%, 
            rgba(20, 20, 20, 0.3) 100%
          );
        }
        
        .description nav {
          margin-bottom: 20px;
        }
        
        .project-link {
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
        
        .project-link:hover {
          background: rgba(94, 175, 255, 0.15);
          border-color: rgba(94, 175, 255, 0.25);
          transform: translateY(-1px);
          text-decoration: none;
        }
        
        .project-link:active {
          transform: translateY(0);
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
        
        @media (max-width: 480px) {
          .description {
            padding: 20px 16px 24px;
          }
          
          .project-link {
            font-size: 12px;
            padding: 10px 20px;
          }
          
          .contact-info {
            font-size: 11px;
          }
        }
      `}</style>
    </WindowChrome>
  )
}
