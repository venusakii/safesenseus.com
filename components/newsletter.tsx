"use client"

import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Newsletter signup:", email)
    setEmail("")
  }

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/modern-white-room-with-detector.jpg"
          alt="Modern room with SafeSense detector"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90 backdrop-blur-sm" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold text-white text-balance">Peace of Mind in Every Room.</h2>
          <p className="text-xl md:text-2xl text-white/90 font-light">
            Stay calm. Stay Safe.
            <br />
            Order your smart detector today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/products">
              <Button
                size="lg"
                className="text-lg px-10 py-7 bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all font-semibold"
              >
                Shop Now
              </Button>
            </Link>
            <Link href="/products">
              
            </Link>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto pt-8">
            <Input
              type="email"
              placeholder="Enter your email for updates"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="glass border-white/30 text-white placeholder:text-white/60 h-12"
            />
            <Button type="submit" variant="secondary" className="whitespace-nowrap h-12 px-8">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
