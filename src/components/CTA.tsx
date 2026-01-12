import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowRight, Sparkles, Check } from 'lucide-react'

export function CTA() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    setEmail('')
  }

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      {/* Animated orbs */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px] animate-float" style={{ animationDelay: '3s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Card */}
          <div className="glass rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary via-cyan-500 to-accent opacity-10" />

            <div className="relative">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-cyan-500 mb-8 glow-primary">
                <Sparkles className="w-8 h-8 text-white" />
              </div>

              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Secure Your{' '}
                <span className="gradient-text">Digital Legacy</span>?
              </h2>

              <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
                Join thousands waiting for launch. Be among the first to protect what matters most.
              </p>

              {/* Email form */}
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-14"
                  required
                  disabled={isSubmitted}
                />
                <Button
                  type="submit"
                  variant="gradient"
                  size="lg"
                  className="group min-w-[160px] h-14"
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    <>
                      <Check className="w-5 h-5" />
                      Subscribed!
                    </>
                  ) : (
                    <>
                      Join Waitlist
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>

              <p className="text-sm text-muted-foreground">
                Free forever for early supporters. No credit card required.
              </p>
            </div>
          </div>

          {/* Social proof */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">Trusted by forward-thinking individuals</p>
            <div className="flex items-center justify-center gap-2">
              {/* Avatar stack */}
              <div className="flex -space-x-3">
                {['A', 'J', 'M', 'S', 'K'].map((letter, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/60 to-cyan-500/60 border-2 border-background flex items-center justify-center text-xs font-bold text-white"
                    style={{ zIndex: 5 - i }}
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <span className="text-sm text-muted-foreground ml-3">
                +2,500 on waitlist
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
