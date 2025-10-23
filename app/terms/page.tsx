import GlassBackground from "@/components/glass-background"

export default function TermsPage() {
  return (
    <main className="min-h-screen relative">
      <GlassBackground />

      <div className="relative z-10 pt-32 pb-24">
        <div className="container px-4 mx-auto max-w-4xl">
          <div className="glass-strong rounded-3xl p-8 md:p-12 space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-balance bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Terms of Service
              </h1>
              <p className="text-sm text-muted-foreground font-light">Last updated: January 2025</p>
            </div>

            <div className="space-y-6 text-left">
              <section className="glass-subtle rounded-2xl p-6">
                <h2 className="font-semibold text-2xl mb-4">Acceptance of Terms</h2>
                <p className="text-muted-foreground font-light leading-relaxed">
                  By accessing and using safesenseus.com, you accept and agree to be bound by the terms and provision of
                  this agreement.
                </p>
              </section>

              <section className="glass-subtle rounded-2xl p-6">
                <h2 className="font-semibold text-2xl mb-4">Use License</h2>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Permission is granted to temporarily access the materials on safesenseus.com for personal,
                  non-commercial transitory viewing only.
                </p>
              </section>

              <section className="glass-subtle rounded-2xl p-6">
                <h2 className="font-semibold text-2xl mb-4">Affiliate Disclaimer</h2>
                <p className="text-muted-foreground font-light leading-relaxed">
                  safesenseus.com is a participant in the Amazon Services LLC Associates Program. We provide links to
                  products on Amazon.com and may earn commissions from qualifying purchases.
                </p>
              </section>

              <section className="glass-subtle rounded-2xl p-6">
                <h2 className="font-semibold text-2xl mb-4">Product Information</h2>
                <p className="text-muted-foreground font-light leading-relaxed">
                  While we strive to provide accurate product information, manufacturers may change their product
                  specifications. We recommend verifying product details on the manufacturer's website before purchase.
                </p>
              </section>

              <section className="glass-subtle rounded-2xl p-6">
                <h2 className="font-semibold text-2xl mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground font-light leading-relaxed">
                  safesenseus.com shall not be held liable for any damages arising from the use of products purchased
                  through our affiliate links or from information provided on this website.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
