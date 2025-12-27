import { Link, createFileRoute } from '@tanstack/react-router'
import { WindowChrome } from '~/components/WindowChrome'

export const Route = createFileRoute('/$')({
  component: NotFound,
  head: () => ({
    meta: [
      { title: '404 - Page Not Found | Tyndfed' },
      { name: 'robots', content: 'noindex, follow' },
    ],
  }),
})

function NotFound() {
  return (
    <WindowChrome title="error.exe">
      <section className="error-content">
        <div className="error-code">404</div>
        <h1 className="error-message">Page Not Found</h1>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        
        <nav>
          <Link to="/" className="home-link">← Back to Home</Link>
        </nav>
      </section>

      <style>{`
        .error-content {
          text-align: center;
          padding: 40px 20px;
        }
        .error-code {
          font-size: 72px;
          font-weight: bold;
          color: var(--traffic-close, #ff5f57);
          margin-bottom: 20px;
          text-shadow: 0 0 10px rgba(255, 95, 87, 0.4);
        }
        .error-message {
          font-size: 18px;
          margin-bottom: 10px;
          color: var(--text-primary, #e8e8e8);
          font-weight: 500;
        }
        .error-content > p {
          color: var(--text-secondary, #8c8c8c);
          margin-bottom: 24px;
          font-size: 13px;
        }
        .home-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--accent-blue, #5eafff);
          font-size: 13px;
          font-weight: 500;
          padding: 12px 24px;
          border-radius: 6px;
          background: var(--accent-blue-dim, rgba(94, 175, 255, 0.08));
          border: 1px solid rgba(94, 175, 255, 0.15);
          transition: background 150ms ease, border-color 150ms ease;
        }
        .home-link:hover {
          background: rgba(94, 175, 255, 0.15);
          border-color: rgba(94, 175, 255, 0.25);
          text-decoration: none;
        }
        @media (max-width: 600px) {
          .error-code { font-size: 48px; }
          .error-message { font-size: 16px; }
          .home-link { font-size: 12px; padding: 10px 20px; }
        }
      `}</style>
    </WindowChrome>
  )
}
