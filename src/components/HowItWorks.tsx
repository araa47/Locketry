import { Lock, FileKey, Gift } from 'lucide-react'

const steps = [
  {
    icon: Lock,
    title: 'Create Your Locket',
    description: 'Deploy a personal smart contract with your timer. Keep it active with periodic check-ins—when the timer reaches zero, your assets unlock.',
    details: ['Set timer duration', 'Add beneficiaries', 'Ethereum-powered'],
    color: 'text-primary',
    bg: 'bg-primary/10',
    ring: 'ring-primary/20',
  },
  {
    icon: FileKey,
    title: 'Encrypt Your Assets',
    description: 'Add any digital assets you want to protect. Everything is encrypted with military-grade AES-256 before leaving your device.',
    details: ['End-to-end encryption', 'Local-first security', 'Zero-knowledge'],
    color: 'text-cyan-500',
    bg: 'bg-cyan-500/10',
    ring: 'ring-cyan-500/20',
  },
  {
    icon: Gift,
    title: 'Share With Loved Ones',
    description: 'Pass your encrypted locket to trusted recipients. They can only unlock it when your smart contract allows—complete control.',
    details: ['Trustless release', 'No intermediaries', 'Guaranteed delivery'],
    color: 'text-accent',
    bg: 'bg-accent/10',
    ring: 'ring-accent/20',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            How It Works
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Three Simple Steps to{' '}
            <span className="gradient-text">Secure Your Legacy</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto space-y-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="group relative"
            >
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="absolute left-[39px] top-[100px] w-0.5 h-[calc(100%-60px)] bg-gradient-to-b from-border to-transparent hidden md:block" />
              )}

              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Step number and icon */}
                <div className="flex-shrink-0 relative">
                  <div className={`w-20 h-20 rounded-3xl ${step.bg} ring-2 ${step.ring} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                    <step.icon className={`w-10 h-10 ${step.color}`} strokeWidth={1.5} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-card border-2 border-border flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="font-display text-2xl font-bold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mb-5 leading-relaxed max-w-xl">
                    {step.description}
                  </p>

                  {/* Detail pills */}
                  <div className="flex flex-wrap gap-2">
                    {step.details.map((detail) => (
                      <span
                        key={detail}
                        className="px-4 py-1.5 rounded-full bg-secondary text-sm text-muted-foreground border border-border"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
