import GlassBackground from "@/components/glass-background"

export default function ContactPage() {
  return (
    <main className="min-h-screen relative">
      <GlassBackground />

      <div className="relative z-10 pt-32 pb-24">
        <div className="container px-4 mx-auto max-w-4xl">
          <div className="glass-strong rounded-3xl p-8 md:p-12 space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-balance bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Contact Us
              </h1>
              <p className="text-lg text-muted-foreground font-light">Get in touch with our safety experts</p>
            </div>

            <div className="space-y-6 text-center">
              <div className="glass-subtle rounded-2xl p-6">
                <h3 className="font-semibold text-xl mb-2">Email</h3>
                <p className="text-muted-foreground font-light">support@safesenseus.com</p>
              </div>

              <div className="glass-subtle rounded-2xl p-6">
                <h3 className="font-semibold text-xl mb-2">Phone</h3>
                <p className="text-muted-foreground font-light">1-800-SAFE-SENSE</p>
              </div>

              <div className="glass-subtle rounded-2xl p-6">
                <h3 className="font-semibold text-xl mb-2">Business Hours</h3>
                <p className="text-muted-foreground font-light">Monday - Friday: 9AM - 6PM EST</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
