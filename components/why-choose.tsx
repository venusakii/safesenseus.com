import { Brain, Wind, Sparkles } from "lucide-react"

const benefits = [
  {
    icon: Brain,
    title: "Smart Alerts",
    description: "Instant app & sound notifications keep you informed wherever you are",
  },
  {
    icon: Wind,
    title: "Air Purity Sensors",
    description: "Beyond detection—monitor air quality and environmental conditions",
  },
  {
    icon: Sparkles,
    title: "Elegant Design",
    description: "Premium aesthetics that blend seamlessly with your interior",
  },
]

export default function WhyChoose() {
  return (
    <section className="py-24 relative">
      <div className="container px-4 mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">Why Choose SafeSense</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Technology and design working together for your peace of mind
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="glass rounded-3xl p-8 text-center space-y-4 hover:glass-strong transition-all animate-breathe neon-outline-hover"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-20 h-20 rounded-full glass-subtle flex items-center justify-center mx-auto soft-glow">
                  <Icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
