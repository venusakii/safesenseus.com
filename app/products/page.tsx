import FeaturedDevices from "@/components/featured-devices"
import ComparisonMatrix from "@/components/comparison-matrix"
import GlassBackground from "@/components/glass-background"
import Reviews from "@/components/reviews"
import ProductGrid from "@/components/product-grid"

export default function ProductsPage() {
  return (
    <main className="relative min-h-screen">
      <GlassBackground />
      <div className="relative z-10 pt-24">
        <FeaturedDevices />
        <ProductGrid />
        <ComparisonMatrix />
        <Reviews />
      </div>
    </main>
  )
}
