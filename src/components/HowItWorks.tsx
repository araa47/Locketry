import { Lock, FileKey, Gift, Sparkles } from 'lucide-react'

const steps = [
  {
    icon: Lock,
    title: 'Create a Locket',
    description: 'Deploy your personal smart contract with a timer. Keep it active with periodic check-ins. When the timer reaches zero, your assets become accessible.',
    details: ['Set your timer duration', 'Configure beneficiaries', 'Powered by Ethereum'],
  },
  {
    icon: FileKey,
    title: 'Encrypt Your Assets',
    description: 'Add any digital assets you want to protect. Everything is encrypted with military-grade AES-256 encryption before leaving your device.',
    details: ['End-to-end encryption', 'Local-first security', 'Zero-knowledge architecture'],
  },
  {
    icon: Gift,
    title: 'Share with Loved Ones',
    description: 'Pass your encrypted locket to trusted recipients. They can only unlock it when your smart contract allows—giving you complete control.',
    details: ['Trustless release', 'No intermediaries', 'Guaranteed delivery'],
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-primary rounded-full animate-float opacity-60" />
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-pink-500 rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-accent rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-secondary/50 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Simple & Secure</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Three simple steps to secure your digital legacy
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-16 last:mb-0 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Icon */}
              <div className="relative flex-shrink-0">
                {/* Glow ring */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-pink-500 to-accent rounded-3xl blur-2xl opacity-30" />

                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-gradient-to-br from-primary/10 to-pink-500/10 border border-primary/20 flex items-center justify-center">
                  {/* Step number */}
                  <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-pink-500 flex items-center justify-center text-lg font-display font-bold shadow-lg">
                    {index + 1}
                  </div>
                  <step.icon className="w-16 h-16 md:w-20 md:h-20 text-primary" strokeWidth={1.5} />
                </div>
              </div>

              {/* Content */}
              <div className={`flex-1 text-center md:text-left ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {step.description}
                </p>

                {/* Detail pills */}
                <div className={`flex flex-wrap gap-3 justify-center ${index % 2 === 1 ? 'md:justify-end' : 'md:justify-start'}`}>
                  {step.details.map((detail) => (
                    <span
                      key={detail}
                      className="px-4 py-2 rounded-full bg-secondary/50 text-sm text-muted-foreground border border-border"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
