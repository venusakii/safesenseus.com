import GlassBackground from "@/components/glass-background"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen relative">
      <GlassBackground />

      <div className="relative z-10 pt-32 pb-24">
        <div className="container px-4 mx-auto max-w-4xl">
          <div className="glass-strong rounded-3xl p-8 md:p-12 space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-balance bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Privacy Policy
              </h1>
              <p className="text-sm text-muted-foreground font-light">Last updated: January 2025</p>
            </div>

            <div className="space-y-6 text-left">
              <section className="glass-subtle rounded-2xl p-6">
                <h2 className="font-semibold text-2xl mb-4">Information We Collect</h2>
                <p className="text-muted-foreground font-light leading-relaxed">
                  We collect information you provide directly to us, including name, email address, and any other
                  information you choose to provide when contacting us or subscribing to our newsletter.
                </p>
              </section>

              <section className="glass-subtle rounded-2xl p-6">
                <h2 className="font-semibold text-2xl mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground font-light leading-relaxed">
                  We use the information we collect to provide, maintain, and improve our services, send you technical
                  notices and support messages, and respond to your comments and questions.
                </p>
              </section>

              <section className="glass-subtle rounded-2xl p-6">
                <h2 className="font-semibold text-2xl mb-4">Amazon Affiliate Disclosure</h2>
                <p className="text-muted-foreground font-light leading-relaxed">
                  As an Amazon Associate, we earn from qualifying purchases. This means we may receive a commission when
                  you click on or make purchases via our Amazon affiliate links.
                </p>
              </section>

              <section className="glass-subtle rounded-2xl p-6">
                <h2 className="font-semibold text-2xl mb-4">Cookies</h2>
                <p className="text-muted-foreground font-light leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our website and hold certain
                  information to improve your browsing experience.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
