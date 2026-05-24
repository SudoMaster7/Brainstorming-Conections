'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Create particles
    const particles: Particle[] = []
    const particleCount = 30

    const createParticle = (width: number, height: number): Particle => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2,
    })

    const updateParticle = (p: Particle, width: number, height: number) => {
      p.x += p.vx
      p.y += p.vy

      if (p.x < 0) p.x = width
      if (p.x > width) p.x = 0
      if (p.y < 0) p.y = height
      if (p.y > height) p.y = 0
    }

    const drawParticle = (p: Particle, context: CanvasRenderingContext2D) => {
      context.fillStyle = `rgba(201, 168, 76, ${p.opacity})`
      context.beginPath()
      context.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
      context.fill()
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle(canvas.width, canvas.height))
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(245, 239, 224, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        updateParticle(p, canvas.width, canvas.height)
        drawParticle(p, ctx)
      })

      requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      if (canvas) {
        canvas.width = canvas.offsetWidth
        canvas.height = canvas.offsetHeight
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.6 }}
    />
  )
}
