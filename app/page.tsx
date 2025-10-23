import Hero from "@/components/hero"
import About from "@/components/about"
import FeaturedDevices from "@/components/featured-devices"
import HowItWorks from "@/components/how-it-works"
import WhyChoose from "@/components/why-choose"
import Gallery from "@/components/gallery"
import ComparisonMatrix from "@/components/comparison-matrix"
import Reviews from "@/components/reviews"
import EcoTech from "@/components/eco-tech"
import Newsletter from "@/components/newsletter"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"
import GlassBackground from "@/components/glass-background"

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <GlassBackground />
      <Hero />
      <About />
      <FeaturedDevices />
      <HowItWorks />
      <WhyChoose />
      <Gallery />
      <ComparisonMatrix />
      <Reviews />
      <EcoTech />
      <Newsletter />
      <FAQ />
      <Footer />
      <CookieBanner />
    </main>
  )
}
