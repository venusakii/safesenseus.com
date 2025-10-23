import HowItWorks from "@/components/how-it-works"
import GlassBackground from "@/components/glass-background"

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen relative">
      <GlassBackground />
      <div className="pt-20">
        <HowItWorks />
      </div>
    </main>
  )
}
