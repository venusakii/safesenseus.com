export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Product visual */}
            <div className="relative">
              <div className="glass-strong rounded-3xl p-12 aspect-square flex items-center justify-center soft-glow animate-breathe">
                <div className="relative w-48 h-48">
                  {/* 3D-style detector illustration */}
                  <div className="absolute inset-0 rounded-full glass-strong border-4 border-primary/30 animate-pulse" />
                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-xl" />
                  <div className="absolute inset-8 rounded-full glass flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary soft-glow" />
                  </div>
                  {/* Sensor rays */}
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                    <div
                      key={angle}
                      className="absolute top-1/2 left-1/2 w-1 h-24 bg-gradient-to-t from-primary/50 to-transparent origin-bottom"
                      style={{
                        transform: `translate(-50%, -100%) rotate(${angle}deg)`,
                        animation: "pulse 2s ease-in-out infinite",
                        animationDelay: `${angle / 360}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-balance">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Pure Technology.
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                SafeSense combines modern design and intelligent sensors to bring safety and calm into your space. Our
                detectors don't just alert you—they blend seamlessly with your interior while providing advanced
                protection against invisible dangers.
              </p>
              <div className="glass rounded-2xl p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary soft-glow" />
                  <span className="text-sm font-light">Real-time air quality monitoring</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary soft-glow" />
                  <span className="text-sm font-light">Instant app & sound notifications</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent soft-glow" />
                  <span className="text-sm font-light">Elegant, minimalist design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
