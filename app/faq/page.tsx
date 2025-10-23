import FAQ from "@/components/faq"
import GlassBackground from "@/components/glass-background"

export default function FAQPage() {
  return (
    <main className="min-h-screen relative">
      <GlassBackground />
      <div className="pt-20">
        <FAQ />
      </div>
    </main>
  )
}
