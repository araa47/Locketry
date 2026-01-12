import { Shield, Lock, Eye, Server, Check } from 'lucide-react'

const securityFeatures = [
  {
    icon: Shield,
    title: 'AES-256 Encryption',
    description: 'Military-grade encryption protects your data at rest and in transit.',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: Lock,
    title: 'Smart Contract Security',
    description: 'Immutable Ethereum contracts ensure trustless, tamper-proof execution.',
    color: 'text-cyan-500',
    bg: 'bg-cyan-500/10',
  },
  {
    icon: Eye,
    title: 'Zero-Knowledge',
    description: 'We never see your data. Encryption happens locally on your device.',
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
  },
  {
    icon: Server,
    title: 'Decentralized Storage',
    description: 'No single point of failure. Your data is distributed and redundant.',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
]

const trustIndicators = [
  'Open Source Audited',
  'No Vendor Lock-in',
  'GDPR Compliant',
  'Self-Custody Option',
]

export function Security() {
  return (
    <section id="security" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left side - Content */}
          <div>
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Security
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Security You Can{' '}
              <span className="gradient-text">Trust</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Built from the ground up with security as the foundation. Your data never leaves
              your device unencrypted, and smart contracts ensure no one—not even us—can access
              your secrets until the time is right.
            </p>

            {/* Security features */}
            <div className="grid sm:grid-cols-2 gap-6">
              {securityFeatures.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center flex-shrink-0`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative">
            {/* Main card */}
            <div className="relative glass rounded-3xl p-8 md:p-10">
              {/* Glow effect */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-primary via-cyan-500 to-accent opacity-20 blur-sm" />

              <div className="relative">
                {/* Lock icon */}
                <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center glow-primary">
                  <Lock className="w-10 h-10 text-white" />
                </div>

                <h3 className="font-display text-2xl font-bold text-center mb-8">
                  Your Data, Your Control
                </h3>

                {/* Trust indicators */}
                <div className="space-y-3">
                  {trustIndicators.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-accent/15 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
