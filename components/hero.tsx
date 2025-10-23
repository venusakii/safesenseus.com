"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Brain } from "lucide-react"
import { useEffect, useRef } from "react"
import Link from "next/link"

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return
      const scrolled = window.scrollY
      const parallaxSpeed = 0.3
      heroRef.current.style.transform = `translateY(${scrolled * parallaxSpeed}px)`
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-16 h-16 rounded-full animate-bubble-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${
                Math.random() > 0.5 ? "rgba(71, 202, 204, 0.15)" : "rgba(122, 96, 255, 0.15)"
              }, transparent)`,
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div ref={heroRef} className="container px-4 py-32 md:py-40 relative z-10 mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-sm font-medium text-primary mb-4 soft-glow-hover">
            <Brain className="w-4 h-4" />
            <span>Breathe Safe</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              See the Invisible.
            </span>
            <br />
            <span className="text-foreground">Detect the Danger.</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed font-light">
            Advanced CO, smoke, and gas detection for a safer home. Pure technology meets elegant design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link href="/products">
              <Button
                size="lg"
                className="text-lg px-8 py-6 group bg-primary text-primary-foreground hover:bg-primary/90 hover:soft-glow transition-all"
              >
                Explore Products
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-16 max-w-2xl mx-auto">
            <div className="glass rounded-2xl p-6 space-y-2 hover:glass-strong transition-all animate-breathe">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                99.9%
              </div>
              <div className="text-sm text-muted-foreground font-light">Detection Rate</div>
            </div>
            <div
              className="glass rounded-2xl p-6 space-y-2 hover:glass-strong transition-all animate-breathe"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                24/7
              </div>
              <div className="text-sm text-muted-foreground font-light">Protection</div>
            </div>
            <div
              className="glass rounded-2xl p-6 space-y-2 hover:glass-strong transition-all animate-breathe"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                10K+
              </div>
              <div className="text-sm text-muted-foreground font-light">Homes Protected</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/20 pointer-events-none" />
    </section>
  )
}
