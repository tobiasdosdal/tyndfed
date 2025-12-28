import type { ReactNode } from 'react'
import styles from './WindowChrome.module.css'

interface WindowChromeProps {
  children: ReactNode
  title?: string
}

export function WindowChrome({ children, title }: WindowChromeProps) {
  return (
    <main className={styles.window}>
      <header className={styles.titleBar}>
        <div className={styles.controls}>
          <span className={`${styles.controlBtn} ${styles.close}`} aria-label="Close">
            <svg viewBox="0 0 10 10" className={styles.controlIcon}>
              <path d="M1 1L9 9M9 1L1 9" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </span>
          <span className={`${styles.controlBtn} ${styles.minimize}`} aria-label="Minimize">
            <svg viewBox="0 0 10 10" className={styles.controlIcon}>
              <path d="M1 5H9" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </span>
          <span className={`${styles.controlBtn} ${styles.maximize}`} aria-label="Maximize">
            <svg viewBox="0 0 10 10" className={styles.controlIcon}>
              <path d="M1 1L5 5L9 1M1 9L5 5L9 9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
        {title && (
          <div className={styles.titleWrapper}>
            <span className={styles.windowTitle}>{title}</span>
            <span className={styles.statusDot} />
          </div>
        )}
      </header>
      {children}
    </main>
  )
}
