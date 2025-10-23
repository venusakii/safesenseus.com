"use client"
import { Wind, Home, Shield, Heart } from "lucide-react"
import { useEffect, useRef } from "react"

const stats = [
  {
    icon: Shield,
    value: "10K+",
    label: "Homes Protected",
    color: "text-primary",
  },
  {
    icon: Heart,
    value: "99.9%",
    label: "Detection Accuracy",
    color: "text-secondary",
  },
  {
    icon: Wind,
    value: "24/7",
    label: "Air Monitoring",
    color: "text-accent",
  },
  {
    icon: Home,
    value: "100%",
    label: "Peace of Mind",
    color: "text-primary",
  },
]

export default function EcoTech() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    interface Wave {
      y: number
      amplitude: number
      frequency: number
      phase: number
      speed: number
      color: string
    }

    const waves: Wave[] = [
      { y: canvas.height * 0.3, amplitude: 30, frequency: 0.02, phase: 0, speed: 0.02, color: "71, 202, 204" },
      { y: canvas.height * 0.5, amplitude: 40, frequency: 0.015, phase: Math.PI, speed: 0.015, color: "122, 96, 255" },
      {
        y: canvas.height * 0.7,
        amplitude: 35,
        frequency: 0.018,
        phase: Math.PI / 2,
        speed: 0.018,
        color: "20, 184, 166",
      },
    ]

    function animate() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      waves.forEach((wave) => {
        ctx.beginPath()
        ctx.moveTo(0, wave.y)

        for (let x = 0; x < canvas.width; x++) {
          const y = wave.y + Math.sin(x * wave.frequency + wave.phase) * wave.amplitude
          ctx.lineTo(x, y)
        }

        ctx.strokeStyle = `rgba(${wave.color}, 0.3)`
        ctx.lineWidth = 2
        ctx.stroke()

        // Fill below wave
        ctx.lineTo(canvas.width, canvas.height)
        ctx.lineTo(0, canvas.height)
        ctx.closePath()
        ctx.fillStyle = `rgba(${wave.color}, 0.05)`
        ctx.fill()

        wave.phase += wave.speed
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
    <section className="py-24 relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-40" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Invisible Heroes.
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            A clean home is not only about what you see, but what you breathe
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="text-center space-y-4 glass rounded-3xl p-8 hover:glass-strong transition-all animate-breathe"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div
                  className={`w-16 h-16 rounded-full glass-subtle flex items-center justify-center mx-auto soft-glow ${stat.color}`}
                >
                  <Icon className="w-8 h-8" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-light">{stat.label}</div>
              </div>
            )
          })}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="glass-strong rounded-3xl p-12 text-center space-y-6">
            <img
              src="/modern-minimalist-living-room-clean-air.jpg"
              alt="Modern minimalist interior"
              className="w-full h-64 object-cover rounded-2xl"
            />
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              SafeSense detectors work silently in the background, monitoring air quality and detecting invisible
              dangers so you can focus on what matters—living your life with confidence and peace of mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
