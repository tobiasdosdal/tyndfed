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
          <span className={`${styles.controlBtn} ${styles.close}`} />
          <span className={`${styles.controlBtn} ${styles.minimize}`} />
          <span className={`${styles.controlBtn} ${styles.maximize}`} />
        </div>
        {title && <span className={styles.windowTitle}>{title}</span>}
      </header>
      {children}
    </main>
  )
}
