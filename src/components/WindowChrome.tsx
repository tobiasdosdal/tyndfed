import type { ReactNode } from 'react'

interface WindowChromeProps {
  children: ReactNode
  title?: string
}

export function WindowChrome({ children, title }: WindowChromeProps) {
  return (
    <main className="window">
      <header className="title-bar">
        <div className="controls">
          <span className="control-btn close" />
          <span className="control-btn minimize" />
          <span className="control-btn maximize" />
        </div>
        {title && <span className="window-title">{title}</span>}
      </header>
      {children}
    </main>
  )
}
