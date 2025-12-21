import { useEffect, useState, useCallback } from 'react'
import styles from './AsciiLogo.module.css'

const LOGO = `    ███     ▄██   ▄   ███▄▄▄▄   ████████▄     ▄████████  ▄████████ ████████▄
▀█████████▄ ███   ██▄ ███▀▀▀██▄ ███   ▀███   ███    ███ ███    ███ ███   ▀███
   ▀███▀▀██ ███▄▄▄███ ███   ███ ███    ███   ███    █▀  ███    █▀  ███    ███
    ███   ▀ ▀▀▀▀▀▀███ ███   ███ ███    ███  ▄███▄▄▄    ▄███▄▄▄     ███    ███
    ███     ▄██   ███ ███   ███ ███    ███ ▀▀███▀▀▀   ▀▀███▀▀▀     ███    ███
    ███     ███   ███ ███   ███ ███    ███   ███        ███    █▄  ███    ███
    ███     ███   ███ ███   ███ ███   ▄███   ███        ███    ███ ███   ▄███
   ▄████▀    ▀█████▀   ▀█   █▀  ████████▀    ███        ██████████ ████████▀`

export function AsciiLogo() {
  const [displayedChars, setDisplayedChars] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  const getTypeDelay = useCallback((char: string, index: number) => {
    if (char === '\n') return 20
    if (char === ' ') return 1
    const burst = Math.sin(index * 0.1) > 0.7
    return burst ? 0.5 : 2
  }, [])

  useEffect(() => {
    if (displayedChars >= LOGO.length) {
      setIsComplete(true)
      const timer = setTimeout(() => setShowCursor(false), 1500)
      return () => clearTimeout(timer)
    }

    const char = LOGO[displayedChars]
    const delay = getTypeDelay(char, displayedChars)

    const timer = setTimeout(() => {
      setDisplayedChars(d => d + 1)
    }, delay)

    return () => clearTimeout(timer)
  }, [displayedChars, getTypeDelay])

  const content = LOGO.slice(0, displayedChars)

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <pre className={styles.art}>
          {content}
          <span className={`${styles.cursor} ${isComplete && !showCursor ? styles.hidden : ''}`} />
        </pre>
      </div>
    </section>
  )
}
