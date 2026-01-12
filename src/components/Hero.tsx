import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Shield, Clock, Heart, Zap } from 'lucide-react'

export function Hero() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email submitted:', email)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12">
      {/* Animated background */}
      <div className="absolute inset-0 animated-gradient" />

      {/* Gradient orbs - teal/coral theme */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[80px] animate-float" style={{ animationDelay: '4s' }} />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge variant="gradient" className="mb-8 px-5 py-2.5 text-sm font-medium">
            <Zap className="w-4 h-4 mr-2" />
            Powered by Ethereum Smart Contracts
          </Badge>

          {/* Main headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            Secure Your{' '}
            <span className="gradient-text">Digital Legacy</span>
            <br />
            <span className="text-muted-foreground">For Those You Love</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Time-locked encryption that releases your most precious digital assets—private keys,
            memories, and messages—only when the moment is right.
          </p>

          {/* CTA Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-14 text-base"
              required
            />
            <Button type="submit" variant="gradient" size="xl" className="group whitespace-nowrap">
              Join Waitlist
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          <p className="text-sm text-muted-foreground mb-16">
            Be first in line. No spam, just launch updates.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-secondary/50 border border-border">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <span className="text-sm font-medium block">AES-256</span>
                <span className="text-xs text-muted-foreground">Encryption</span>
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-secondary/50 border border-border">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-cyan-500" />
              </div>
              <div className="text-left">
                <span className="text-sm font-medium block">Time-Locked</span>
                <span className="text-xs text-muted-foreground">Release</span>
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-secondary/50 border border-border">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Heart className="w-5 h-5 text-accent" />
              </div>
              <div className="text-left">
                <span className="text-sm font-medium block">For Family</span>
                <span className="text-xs text-muted-foreground">& Loved Ones</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
