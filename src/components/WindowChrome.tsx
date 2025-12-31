import type { ReactNode } from 'react'
import styles from './WindowChrome.module.css'

interface WindowChromeProps {
  children: ReactNode
}

export function WindowChrome({ children }: WindowChromeProps) {
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
              <path d="M1 1h8v8H1z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </header>
      {children}
    </main>
  )
}
