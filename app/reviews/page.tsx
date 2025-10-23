import Reviews from "@/components/reviews"
import GlassBackground from "@/components/glass-background"

export default function ReviewsPage() {
  return (
    <main className="min-h-screen relative">
      <GlassBackground />
      <div className="pt-20">
        <Reviews />
      </div>
    </main>
  )
}
