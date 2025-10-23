"use client"

import { useEffect, useRef } from "react"

export default function GlassBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    interface Bubble {
      x: number
      y: number
      radius: number
      speedY: number
      opacity: number
      hue: number
    }

    const bubbles: Bubble[] = []
    const bubbleCount = 20

    // Create floating glass bubbles
    for (let i = 0; i < bubbleCount; i++) {
      bubbles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 60 + 40,
        speedY: Math.random() * 0.5 + 0.2,
        opacity: Math.random() * 0.3 + 0.2,
        hue: Math.random() > 0.5 ? 180 : 270, // Turquoise or purple
      })
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      bubbles.forEach((bubble) => {
        // Draw glass bubble with gradient
        const gradient = ctx.createRadialGradient(bubble.x, bubble.y, 0, bubble.x, bubble.y, bubble.radius)
        gradient.addColorStop(0, `hsla(${bubble.hue}, 70%, 70%, ${bubble.opacity})`)
        gradient.addColorStop(0.7, `hsla(${bubble.hue}, 60%, 60%, ${bubble.opacity * 0.5})`)
        gradient.addColorStop(1, `hsla(${bubble.hue}, 50%, 50%, 0)`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2)
        ctx.fill()

        // Add glass rim
        ctx.strokeStyle = `hsla(${bubble.hue}, 80%, 80%, ${bubble.opacity * 0.6})`
        ctx.lineWidth = 2
        ctx.stroke()

        // Move bubble up
        bubble.y -= bubble.speedY

        // Reset bubble when it goes off screen
        if (bubble.y + bubble.radius < 0) {
          bubble.y = canvas.height + bubble.radius
          bubble.x = Math.random() * canvas.width
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-60" />
}
