import { Shield } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Glass bar with neon line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />

      <div className="glass-strong border-t border-white/20">
        <div className="container px-4 py-12 mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 text-center">
            {/* Logo and tagline */}
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2">
                <div className="w-10 h-10 rounded-full glass-subtle flex items-center justify-center soft-glow">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-xl">safesenseus.com</h3>
              </div>
              <p className="text-sm text-muted-foreground font-light">Clean safety technology for modern homes.</p>
            </div>

            {/* Products */}

            {/* Legal */}
            <div className="space-y-4">
              <h4 className="font-bold">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground font-light">
                <li>
                  <Link href="/about" className="hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li></li>
                <li>
                  <Link href="/contact" className="hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
                <li></li>
                <li>
                  <Link href="/privacy" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-primary transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 space-y-4 text-center">
            <p className="text-sm text-muted-foreground font-light">
              &copy; 2025 safesenseus.com — All Rights Reserved. Amazon Affiliate Partner.
            </p>
            <p className="text-xs text-muted-foreground font-light">
              As an Amazon Associate, we earn from qualifying purchases.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
