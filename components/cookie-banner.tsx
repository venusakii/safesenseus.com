"use client"

import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { useState, useEffect } from "react"

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="container max-w-4xl mx-auto">
        <div className="glass-strong rounded-3xl p-6 shadow-2xl border border-white/30 animate-fade-in-up">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex-1 text-sm text-foreground font-light">
              <p>
                This website uses cookies to enhance your experience and analyze usage. By continuing, you consent to
                our use of cookies.{" "}
                <a href="#" className="text-primary hover:text-secondary transition-colors font-medium">
                  Learn more
                </a>
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Button
                variant="outline"
                size="sm"
                onClick={handleDecline}
                className="glass-subtle hover:glass transition-all bg-transparent"
              >
                Decline
              </Button>
              <Button
                size="sm"
                onClick={handleAccept}
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-medium"
              >
                Accept & Continue
              </Button>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 sm:relative sm:top-0 sm:right-0 hover:bg-white/10"
              onClick={handleDecline}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
