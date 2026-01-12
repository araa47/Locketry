import { Shield, Lock, Eye, Server, Check } from 'lucide-react'

const securityFeatures = [
  {
    icon: Shield,
    title: 'AES-256 Encryption',
    description: 'Military-grade encryption protects your data at rest and in transit.',
  },
  {
    icon: Lock,
    title: 'Smart Contract Security',
    description: 'Immutable Ethereum contracts ensure trustless, tamper-proof execution.',
  },
  {
    icon: Eye,
    title: 'Zero-Knowledge',
    description: 'We never see your data. Encryption happens locally on your device.',
  },
  {
    icon: Server,
    title: 'Decentralized Storage',
    description: 'No single point of failure. Your data is distributed and redundant.',
  },
]

const trustedBy = [
  'Open Source Audited',
  'No Vendor Lock-in',
  'GDPR Compliant',
  'Self-Custody Option',
]

export function Security() {
  return (
    <section id="security" className="py-24 md:py-32 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left side - Content */}
          <div>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              Security You Can{' '}
              <span className="gradient-text">Trust</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Built from the ground up with security as the foundation. Your data never leaves
              your device unencrypted, and smart contracts ensure no one—not even us—can access
              your secrets until the time is right.
            </p>

            {/* Security features */}
            <div className="grid sm:grid-cols-2 gap-6">
              {securityFeatures.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative">
            {/* Main card */}
            <div className="relative glass rounded-3xl p-8 md:p-12">
              {/* Glow effect */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-primary via-pink-500 to-accent opacity-20 blur-sm" />

              <div className="relative">
                {/* Lock icon */}
                <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-primary to-pink-500 flex items-center justify-center glow-primary">
                  <Lock className="w-10 h-10 text-white" />
                </div>

                <h3 className="font-display text-2xl font-bold text-center mb-6">
                  Your Data, Your Control
                </h3>

                {/* Trust indicators */}
                <div className="space-y-4">
                  {trustedBy.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50"
                    >
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                        <Check className="w-4 h-4 text-green-500" />
                      </div>
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-500/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
