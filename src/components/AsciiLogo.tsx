import { useEffect, useState, useRef, useMemo } from 'react'
import styles from './AsciiLogo.module.css'

const LOGO = `    ███     ▄██   ▄   ███▄▄▄▄   ████████▄     ▄████████  ▄████████ ████████▄
▀█████████▄ ███   ██▄ ███▀▀▀██▄ ███   ▀███   ███    ███ ███    ███ ███   ▀███
   ▀███▀▀██ ███▄▄▄███ ███   ███ ███    ███   ███    █▀  ███    █▀  ███    ███
    ███   ▀ ▀▀▀▀▀▀███ ███   ███ ███    ███  ▄███▄▄▄    ▄███▄▄▄     ███    ███
    ███     ▄██   ███ ███   ███ ███    ███ ▀▀███▀▀▀   ▀▀███▀▀▀     ███    ███
    ███     ███   ███ ███   ███ ███    ███   ███        ███    █▄  ███    ███
    ███     ███   ███ ███   ███ ███   ▄███   ███        ███    ███ ███   ▄███
   ▄████▀    ▀█████▀   ▀█   █▀  ████████▀    ███        ██████████ ████████▀`

const GLITCH_CHARS = '░▒▓█▀▄╔╗╚╝║═╬├┤┬┴┼'

type GlitchType = 'none' | 'corrupt' | 'shift' | 'wave' | 'flicker'

export function AsciiLogo() {
  const [displayText, setDisplayText] = useState('')
  const [glitchType, setGlitchType] = useState<GlitchType>('none')
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const isInitialRevealDone = useRef(false)

  const lines = useMemo(() => LOGO.split('\n'), [])

  // Initial setup - show logo immediately, start glitch cycle after delay
  useEffect(() => {
    if (isInitialRevealDone.current) return

    setDisplayText(LOGO)
    isInitialRevealDone.current = true
    // Start glitch cycle after delay
    timeoutRef.current = setTimeout(startGlitchCycle, 3000)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  const startGlitchCycle = () => {
    // Random glitch type
    const types: GlitchType[] = ['corrupt', 'shift', 'wave', 'flicker']
    const type = types[Math.floor(Math.random() * types.length)]
    setGlitchType(type)

    let frame = 0
    const maxFrames = type === 'wave' ? 20 : 8

    intervalRef.current = setInterval(() => {
      if (frame >= maxFrames) {
        clearInterval(intervalRef.current!)
        setDisplayText(LOGO)
        setGlitchType('none')
        setOffset({ x: 0, y: 0 })
        // Schedule next glitch
        timeoutRef.current = setTimeout(startGlitchCycle, 4000 + Math.random() * 4000)
        return
      }

      switch (type) {
        case 'corrupt':
          applyCorruptGlitch(frame / maxFrames)
          break
        case 'shift':
          applyShiftGlitch()
          break
        case 'wave':
          applyWaveGlitch(frame)
          break
        case 'flicker':
          applyFlickerGlitch(frame)
          break
      }

      frame++
    }, 50)
  }

  const applyCorruptGlitch = (progress: number) => {
    const intensity = Math.sin(progress * Math.PI) * 0.15
    const glitched = LOGO.split('').map((char) => {
      if (char === ' ' || char === '\n') return char
      if (Math.random() < intensity) {
        return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
      }
      return char
    }).join('')
    setDisplayText(glitched)
    setOffset({
      x: (Math.random() - 0.5) * 4,
      y: (Math.random() - 0.5) * 2
    })
  }

  const applyShiftGlitch = () => {
    const glitchedLines = lines.map((line) => {
      if (Math.random() < 0.3) {
        const shift = Math.floor(Math.random() * 6) - 3
        if (shift > 0) {
          return ' '.repeat(shift) + line.slice(0, -shift)
        } else if (shift < 0) {
          return line.slice(-shift) + ' '.repeat(-shift)
        }
      }
      return line
    })
    setDisplayText(glitchedLines.join('\n'))
    setOffset({ x: (Math.random() - 0.5) * 6, y: 0 })
  }

  const applyWaveGlitch = (frame: number) => {
    const glitched = lines.map((line, lineIdx) => {
      return line.split('').map((char, charIdx) => {
        if (char === ' ') return char
        const wave = Math.sin((charIdx + frame * 2) * 0.3 + lineIdx * 0.5)
        if (wave > 0.7) {
          return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
        }
        return char
      }).join('')
    }).join('\n')
    setDisplayText(glitched)
  }

  const applyFlickerGlitch = (frame: number) => {
    // Simple flicker - just toggle visibility of random sections
    if (frame % 2 === 0) {
      setDisplayText(LOGO)
    } else {
      const glitched = lines.map((line) => {
        if (Math.random() < 0.2) {
          return line.split('').map(c => c === ' ' ? ' ' : '█').join('')
        }
        return line
      }).join('\n')
      setDisplayText(glitched)
    }
    setOffset({ x: (Math.random() - 0.5) * 3, y: 0 })
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  const isGlitching = glitchType !== 'none'

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.scanlines} aria-hidden="true" />
        <pre
          className={`${styles.art} ${isGlitching ? styles.glitching : ''} ${glitchType === 'shift' ? styles.shifting : ''}`}
          style={{
            transform: isGlitching ? `translate(${offset.x}px, ${offset.y}px)` : undefined
          }}
          data-text={displayText}
        >
          {displayText}
        </pre>
        {isGlitching && (
          <>
            <pre className={`${styles.art} ${styles.chromaR}`} aria-hidden="true">{displayText}</pre>
            <pre className={`${styles.art} ${styles.chromaB}`} aria-hidden="true">{displayText}</pre>
          </>
        )}
        <div className={styles.glow} aria-hidden="true" />
      </div>
    </section>
  )
}
