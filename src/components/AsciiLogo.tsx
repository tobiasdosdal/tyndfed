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
  const [isHovered, setIsHovered] = useState(false)
  const glitchIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Glitch effect on hover
  useEffect(() => {
    if (isHovered) {
      let glitchCount = 0
      const maxGlitches = 6

      glitchIntervalRef.current = setInterval(() => {
        if (glitchCount >= maxGlitches) {
          setDisplayText(LOGO)
          if (glitchIntervalRef.current) {
            clearInterval(glitchIntervalRef.current)
          }
          return
        }

        // Create glitched version
        const glitched = LOGO.split('').map((char) => {
          if (char === ' ' || char === '\n') return char
          // Random chance to glitch each character
          if (Math.random() < 0.1) {
            return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
          }
          return char
        }).join('')

        setDisplayText(glitched)
        glitchCount++
      }, 50)
    } else {
      if (glitchIntervalRef.current) {
        clearInterval(glitchIntervalRef.current)
      }
      setDisplayText(LOGO)
    }

    return () => {
      if (glitchIntervalRef.current) {
        clearInterval(glitchIntervalRef.current)
      }
    }
  }, [isHovered])

  return (
    <section
      className={styles.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.wrapper}>
        <pre className={`${styles.art} ${isHovered ? styles.hovered : ''}`}>
          {displayText}
        </pre>
        <div className={styles.glow} aria-hidden="true" />
        <div className={styles.scanline} aria-hidden="true" />
      </div>
    </section>
  )
}
