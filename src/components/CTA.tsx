import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowRight, Mail, Check } from 'lucide-react'

export function CTA() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    setEmail('')
  }

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-pink-500/10" />

      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-pink-500 mb-8 glow-primary">
            <Mail className="w-8 h-8 text-white" />
          </div>

          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to Secure Your{' '}
            <span className="gradient-text">Digital Legacy</span>?
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
            Join thousands waiting for launch. Be among the first to protect what matters most.
          </p>

          {/* Email form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <div className="relative flex-1">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pr-4"
                required
                disabled={isSubmitted}
              />
            </div>
            <Button
              type="submit"
              variant="gradient"
              size="lg"
              className="group min-w-[160px]"
              disabled={isSubmitted}
            >
              {isSubmitted ? (
                <>
                  <Check className="w-4 h-4" />
                  Subscribed!
                </>
              ) : (
                <>
                  Join Waitlist
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
          </form>

          <p className="text-sm text-muted-foreground mt-4">
            Free forever for early supporters. No credit card required.
          </p>

          {/* Social proof */}
          <div className="mt-12 pt-12 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">Trusted by forward-thinking individuals</p>
            <div className="flex items-center justify-center gap-2">
              {/* Avatar stack */}
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/50 to-pink-500/50 border-2 border-background flex items-center justify-center text-xs font-bold"
                    style={{ zIndex: 6 - i }}
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span className="text-sm text-muted-foreground ml-2">
                +2,500 on waitlist
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
