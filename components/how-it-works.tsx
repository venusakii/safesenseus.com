"use client"

import { useEffect, useRef } from "react"
import { Scan, Bell, Shield } from "lucide-react"

const steps = [
  {
    icon: Scan,
    title: "Continuous Monitoring",
    description: "Advanced sensors detect CO, smoke, and gas particles in real-time, 24/7",
  },
  {
    icon: Bell,
    title: "Instant Alerts",
    description: "Immediate notifications via sound, light, and smartphone app when danger is detected",
  },
  {
    icon: Shield,
    title: "Stay Protected",
    description: "Peace of mind knowing your home and family are constantly safeguarded",
  },
]

export default function HowItWorks() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    interface Particle {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      color: string
    }

    const particles: Particle[] = []

    // Create smoke/gas particles rising upward
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * 200,
        vx: (Math.random() - 0.5) * 0.5,
        vy: -0.5 - Math.random() * 0.5,
        size: 2 + Math.random() * 4,
        opacity: 0.3 + Math.random() * 0.4,
        color: Math.random() > 0.5 ? "71, 202, 204" : "122, 96, 255",
      })
    }

    // Sensor position (center)
    const sensorX = canvas.width / 2
    const sensorY = canvas.height / 3

    function animate() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw sensor glow
      const sensorGradient = ctx.createRadialGradient(sensorX, sensorY, 0, sensorX, sensorY, 80)
      sensorGradient.addColorStop(0, "rgba(71, 202, 204, 0.3)")
      sensorGradient.addColorStop(0.5, "rgba(122, 96, 255, 0.15)")
      sensorGradient.addColorStop(1, "rgba(71, 202, 204, 0)")
      ctx.fillStyle = sensorGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw and update particles
      particles.forEach((p) => {
        // Draw particle
        ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()

        // Draw detection line to sensor if close
        const dx = sensorX - p.x
        const dy = sensorY - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < 150) {
          ctx.strokeStyle = `rgba(${p.color}, ${(1 - dist / 150) * 0.4})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(sensorX, sensorY)
          ctx.stroke()
        }

        // Update position
        p.x += p.vx
        p.y += p.vy

        // Reset particle when it goes off screen
        if (p.y < -20) {
          p.y = canvas.height + 20
          p.x = Math.random() * canvas.width
        }

        // Wrap horizontally
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-50" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              How Detection Works
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Intelligent sensors working silently to keep you safe
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                <div
                  className="glass rounded-3xl p-8 space-y-4 hover:glass-strong transition-all hover:scale-105 animate-breathe text-center neon-outline-hover"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <div className="w-20 h-20 rounded-full glass-subtle flex items-center justify-center soft-glow mx-auto">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-light">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary via-secondary to-transparent opacity-40" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
