import { useEffect, useState, useRef } from 'react'
import styles from './AsciiLogo.module.css'

const LOGO = `    ███     ▄██   ▄   ███▄▄▄▄   ████████▄     ▄████████  ▄████████ ████████▄
▀█████████▄ ███   ██▄ ███▀▀▀██▄ ███   ▀███   ███    ███ ███    ███ ███   ▀███
   ▀███▀▀██ ███▄▄▄███ ███   ███ ███    ███   ███    █▀  ███    █▀  ███    ███
    ███   ▀ ▀▀▀▀▀▀███ ███   ███ ███    ███  ▄███▄▄▄    ▄███▄▄▄     ███    ███
    ███     ▄██   ███ ███   ███ ███    ███ ▀▀███▀▀▀   ▀▀███▀▀▀     ███    ███
    ███     ███   ███ ███   ███ ███    ███   ███        ███    █▄  ███    ███
    ███     ███   ███ ███   ███ ███   ▄███   ███        ███    ███ ███   ▄███
   ▄████▀    ▀█████▀   ▀█   █▀  ████████▀    ███        ██████████ ████████▀`

const GLITCH_CHARS = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`░▒▓█▀▄'

export function AsciiLogo() {
  const [displayText, setDisplayText] = useState(LOGO)
  const [isGlitching, setIsGlitching] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Continuous glitch loop
  useEffect(() => {
    const runGlitchCycle = () => {
      setIsGlitching(true)
      let glitchCount = 0
      const maxGlitches = 6

      const glitchInterval = setInterval(() => {
        if (glitchCount >= maxGlitches) {
          setDisplayText(LOGO)
          setIsGlitching(false)
          clearInterval(glitchInterval)
          // Schedule next glitch cycle (3-6 seconds pause)
          timeoutRef.current = setTimeout(runGlitchCycle, 3000 + Math.random() * 3000)
          return
        }

        // Create glitched version
        const glitched = LOGO.split('').map((char) => {
          if (char === ' ' || char === '\n') return char
          if (Math.random() < 0.1) {
            return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
          }
          return char
        }).join('')

        setDisplayText(glitched)
        glitchCount++
      }, 50)
    }

    // Start first cycle after a short delay
    timeoutRef.current = setTimeout(runGlitchCycle, 1000)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <pre className={`${styles.art} ${isGlitching ? styles.glitching : ''}`}>
          {displayText}
        </pre>
        <div className={styles.glow} aria-hidden="true" />
      </div>
    </section>
  )
}
