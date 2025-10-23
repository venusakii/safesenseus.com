import { Check, X } from "lucide-react"

const products = [
  {
    name: "First Alert CO615",
    type: "CO",
    batteryBackup: true,
    appSupport: false,
    rating: 5,
  },
  {
    name: "Kidde Smoke/CO Combo",
    type: "Combo",
    batteryBackup: true,
    appSupport: true,
    rating: 4,
  },
  {
    name: "Google Nest Protect",
    type: "Smart",
    batteryBackup: true,
    appSupport: true,
    rating: 5,
  },
]

export default function ComparisonMatrix() {
  return (
    <section className="py-24">
      <div className="container px-4 mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">Compare Solutions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Find the perfect detector for your home
          </p>
        </div>

        <div className="max-w-5xl mx-auto overflow-x-auto">
          <div className="glass-strong rounded-3xl overflow-hidden">
            <div className="grid grid-cols-5 gap-4 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 font-bold text-center text-sm">
              <div>Product</div>
              <div>Type</div>
              <div>Battery Backup</div>
              <div>App Support</div>
              <div>Rating</div>
            </div>

            {products.map((product, index) => (
              <div
                key={index}
                className="grid grid-cols-5 gap-4 p-6 border-t border-white/20 items-center text-center text-sm hover:bg-white/5 transition-colors"
              >
                <div className="font-medium">{product.name}</div>
                <div className="text-muted-foreground">{product.type}</div>
                <div className="flex justify-center">
                  {product.batteryBackup ? (
                    <Check className="w-5 h-5 text-primary" />
                  ) : (
                    <X className="w-5 h-5 text-muted-foreground" />
                  )}
                </div>
                <div className="flex justify-center">
                  {product.appSupport ? (
                    <Check className="w-5 h-5 text-primary" />
                  ) : (
                    <X className="w-5 h-5 text-muted-foreground" />
                  )}
                </div>
                <div className="text-secondary font-medium">{"⭐".repeat(product.rating)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
