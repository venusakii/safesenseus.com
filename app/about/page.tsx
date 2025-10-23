import About from "@/components/about"
import GlassBackground from "@/components/glass-background"

export default function AboutPage() {
  return (
    <main className="min-h-screen relative">
      <GlassBackground />
      <div className="pt-20">
        <About />
      </div>
    </main>
  )
}
