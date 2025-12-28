import { Link, createFileRoute } from '@tanstack/react-router'
import { WindowChrome } from '~/components/WindowChrome'
import styles from './$.module.css'

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
      <section className={styles.errorContent}>
        <div className={styles.errorCode} data-text="404">
          <span>4</span>
          <span className={styles.errorZero}>0</span>
          <span>4</span>
        </div>
        <h1 className={styles.errorMessage}>Page Not Found</h1>
        <p className={styles.errorDescription}>
          The page you're looking for doesn't exist or has been moved.
        </p>

        <nav>
          <Link to="/" className={styles.homeLink}>
            <span className={styles.homeLinkArrow}>←</span>
            Back to Home
          </Link>
        </nav>
      </section>
    </WindowChrome>
  )
}
