import { useEffect, useRef, useState } from 'react'

const CHARACTER_SET = '010101010101010101010101010101010101010101010101' // Binary-heavy
const HEX_CHARS = '0123456789ABCDEF'
const GRID_SIZE = 35
const MOUSE_RADIUS = 250
const CHARACTER_CHANGE_CHANCE = 0.005

interface Point {
  x: number
  y: number
  char: string
  opacity: number
  targetOpacity: number
}

export const BackgroundAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const pointsRef = useRef<Point[]>([])
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initPoints()
    }

    const initPoints = () => {
      const points: Point[] = []
      const rows = Math.ceil(canvas.height / GRID_SIZE)
      const cols = Math.ceil(canvas.width / GRID_SIZE)

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const opacity = 0.02 + Math.random() * 0.04
          points.push({
            x: j * GRID_SIZE,
            y: i * GRID_SIZE,
            char: Math.random() > 0.8 ? HEX_CHARS[Math.floor(Math.random() * HEX_CHARS.length)] : (Math.random() > 0.5 ? '0' : '1'),
            opacity: opacity,
            targetOpacity: opacity,
          })
        }
      }
      pointsRef.current = points
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    let frame = 0
    let animationId: number
    let isVisible = true

    const handleVisibilityChange = () => {
      isVisible = !document.hidden
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)

    const animate = () => {
      if (!ctx || !canvas) return
      
      if (!isVisible) {
        animationId = requestAnimationFrame(animate)
        return
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.font = '9px JetBrains Mono, monospace'
      ctx.textBaseline = 'middle'
      ctx.textAlign = 'center'
      
      const { x: mouseX, y: mouseY } = mouseRef.current
      frame++

      pointsRef.current.forEach((point) => {
        // Randomly change character
        if (Math.random() < CHARACTER_CHANGE_CHANCE) {
          point.char = Math.random() > 0.8 ? HEX_CHARS[Math.floor(Math.random() * HEX_CHARS.length)] : (Math.random() > 0.5 ? '0' : '1')
        }

        const dx = mouseX - point.x
        const dy = mouseY - point.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        let displayOpacity = point.opacity
        let moveX = 0
        let moveY = 0

        if (distance < MOUSE_RADIUS) {
          const factor = 1 - distance / MOUSE_RADIUS
          // Ease in the opacity increase
          displayOpacity = point.opacity + factor * factor * 0.35
          
          // Subtle movement away from mouse (repulsion)
          const angle = Math.atan2(dy, dx)
          const repulsion = factor * 4
          moveX = -Math.cos(angle) * repulsion
          moveY = -Math.sin(angle) * repulsion
        }

        // Add a very subtle "breathing" or "glitch" effect to some characters
        if ((frame + point.x + point.y) % 200 < 5) {
          displayOpacity *= 1.5
        }

        ctx.fillStyle = `rgba(94, 175, 255, ${displayOpacity})`
        ctx.fillText(point.char, point.x + moveX, point.y + moveY)
      })

      animationId = requestAnimationFrame(animate)
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    handleResize()
    animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      cancelAnimationFrame(animationId)
    }
  }, [isMounted])

  if (!isMounted) return null

  return (
    <canvas
      ref={canvasRef}
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        filter: 'blur(0.5px)',
        zIndex: -2 
      }}
    />
  )
}

