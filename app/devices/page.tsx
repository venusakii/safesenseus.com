import FeaturedDevices from "@/components/featured-devices"
import GlassBackground from "@/components/glass-background"

export default function DevicesPage() {
  return (
    <main className="min-h-screen relative">
      <GlassBackground />
      <div className="pt-20">
        <FeaturedDevices />
      </div>
    </main>
  )
}
