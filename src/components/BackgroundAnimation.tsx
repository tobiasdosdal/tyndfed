import { useEffect, useRef, useState } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  hue: number
  life: number
  maxLife: number
}

interface FlowField {
  angle: number
  strength: number
}

const PARTICLE_COUNT = 80
const FLOW_SCALE = 0.003
const MOUSE_INFLUENCE = 150
const CONNECTION_DISTANCE = 120

export const BackgroundAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -1000, y: -1000, active: false })
  const particlesRef = useRef<Particle[]>([])
  const flowFieldRef = useRef<FlowField[][]>([])
  const timeRef = useRef(0)
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

    let width = 0
    let height = 0
    let cols = 0
    let rows = 0

    const initFlowField = () => {
      cols = Math.ceil(width / 20)
      rows = Math.ceil(height / 20)
      flowFieldRef.current = []

      for (let y = 0; y < rows; y++) {
        flowFieldRef.current[y] = []
        for (let x = 0; x < cols; x++) {
          flowFieldRef.current[y][x] = { angle: 0, strength: 0.5 }
        }
      }
    }

    const updateFlowField = (time: number) => {
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const noise1 = Math.sin(x * FLOW_SCALE * 50 + time * 0.0005) *
                        Math.cos(y * FLOW_SCALE * 50 + time * 0.0003)
          const noise2 = Math.sin((x + y) * FLOW_SCALE * 30 + time * 0.0002)

          flowFieldRef.current[y][x].angle = (noise1 + noise2) * Math.PI * 2
          flowFieldRef.current[y][x].strength = 0.3 + Math.abs(noise1) * 0.4
        }
      }
    }

    const createParticle = (): Particle => {
      const maxLife = 300 + Math.random() * 400
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: 0,
        vy: 0,
        size: 1 + Math.random() * 2,
        opacity: 0,
        hue: 180 + Math.random() * 30, // Cyan range
        life: 0,
        maxLife,
      }
    }

    const initParticles = () => {
      particlesRef.current = []
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const particle = createParticle()
        particle.life = Math.random() * particle.maxLife
        particlesRef.current.push(particle)
      }
    }

    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
      initFlowField()
      initParticles()
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, active: true }
    }

    const handleMouseLeave = () => {
      mouseRef.current.active = false
    }

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

      timeRef.current++
      updateFlowField(timeRef.current)

      // Fade trail effect
      ctx.fillStyle = 'rgba(12, 12, 15, 0.15)'
      ctx.fillRect(0, 0, width, height)

      const { x: mouseX, y: mouseY, active: mouseActive } = mouseRef.current

      // Draw connections between nearby particles
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.03)'
      ctx.lineWidth = 0.5

      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i]
          const p2 = particlesRef.current[j]
          const dx = p2.x - p1.x
          const dy = p2.y - p1.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < CONNECTION_DISTANCE) {
            const opacity = (1 - dist / CONNECTION_DISTANCE) * 0.08 * Math.min(p1.opacity, p2.opacity)
            ctx.strokeStyle = `rgba(0, 240, 255, ${opacity})`
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      }

      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        particle.life++

        // Fade in/out based on life
        const lifeRatio = particle.life / particle.maxLife
        if (lifeRatio < 0.1) {
          particle.opacity = lifeRatio / 0.1
        } else if (lifeRatio > 0.9) {
          particle.opacity = (1 - lifeRatio) / 0.1
        } else {
          particle.opacity = 1
        }

        // Reset particle when life ends
        if (particle.life >= particle.maxLife) {
          Object.assign(particle, createParticle())
        }

        // Get flow field influence
        const col = Math.floor(particle.x / 20)
        const row = Math.floor(particle.y / 20)
        if (col >= 0 && col < cols && row >= 0 && row < rows) {
          const flow = flowFieldRef.current[row][col]
          particle.vx += Math.cos(flow.angle) * flow.strength * 0.1
          particle.vy += Math.sin(flow.angle) * flow.strength * 0.1
        }

        // Mouse influence
        if (mouseActive) {
          const dx = mouseX - particle.x
          const dy = mouseY - particle.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < MOUSE_INFLUENCE) {
            const force = (1 - dist / MOUSE_INFLUENCE) * 0.5
            particle.vx += (dx / dist) * force
            particle.vy += (dy / dist) * force
          }
        }

        // Apply velocity with damping
        particle.vx *= 0.98
        particle.vy *= 0.98
        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around edges
        if (particle.x < 0) particle.x = width
        if (particle.x > width) particle.x = 0
        if (particle.y < 0) particle.y = height
        if (particle.y > height) particle.y = 0

        // Draw particle with glow
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        )
        gradient.addColorStop(0, `hsla(${particle.hue}, 100%, 60%, ${particle.opacity * 0.6})`)
        gradient.addColorStop(0.5, `hsla(${particle.hue}, 100%, 50%, ${particle.opacity * 0.2})`)
        gradient.addColorStop(1, 'transparent')

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Core of particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 0.5, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${particle.hue}, 100%, 80%, ${particle.opacity * 0.8})`
        ctx.fill()
      })

      animationId = requestAnimationFrame(animate)
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    handleResize()
    animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
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
        zIndex: -2,
      }}
    />
  )
}
