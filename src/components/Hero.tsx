import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Shield, Clock, Heart, Sparkles } from 'lucide-react'

export function Hero() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission
    console.log('Email submitted:', email)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background */}
      <div className="absolute inset-0 animated-gradient" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '64px 64px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge variant="gradient" className="mb-8 px-4 py-2 text-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Secured by Ethereum Smart Contracts
          </Badge>

          {/* Main headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            A Locket For Your{' '}
            <span className="gradient-text">Loved Ones</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Share your most precious digital assets with a time-locked encryption system.
            Only when the moment is right will your secrets be revealed.
          </p>

          {/* CTA Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              required
            />
            <Button type="submit" variant="gradient" size="lg" className="group">
              Join Waitlist
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          <p className="text-sm text-muted-foreground mb-12">
            Be the first to know when we launch. No spam, ever.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm">End-to-End Encrypted</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Clock className="w-5 h-5 text-pink-500" />
              </div>
              <span className="text-sm">Time-Locked Release</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Heart className="w-5 h-5 text-accent" />
              </div>
              <span className="text-sm">Built for Loved Ones</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
