import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Key, FileText, Image, Timer } from 'lucide-react'

const useCases = [
  {
    icon: Key,
    title: 'Crypto Private Keys',
    description: 'Ensure your family can access your cryptocurrency holdings. Time-locked keys released only when needed.',
    gradient: 'from-primary to-cyan-500',
    iconBg: 'bg-primary/10',
    iconColor: 'text-primary',
  },
  {
    icon: FileText,
    title: 'Digital Wills',
    description: 'Store your will and important documents securely. Automatically released at the right moment.',
    gradient: 'from-amber-400 to-orange-500',
    iconBg: 'bg-amber-500/10',
    iconColor: 'text-amber-500',
  },
  {
    icon: Image,
    title: 'Precious Memories',
    description: 'Create time capsules with photos, videos, and letters for future generations to discover.',
    gradient: 'from-cyan-400 to-blue-500',
    iconBg: 'bg-cyan-500/10',
    iconColor: 'text-cyan-500',
  },
  {
    icon: Timer,
    title: "Dead Man's Switch",
    description: 'Automatic release of sensitive information to trusted parties if you stop checking in.',
    gradient: 'from-accent to-rose-600',
    iconBg: 'bg-accent/10',
    iconColor: 'text-accent',
  },
]

export function UseCases() {
  return (
    <section id="use-cases" className="py-24 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Use Cases
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Protect What{' '}
            <span className="gradient-text">Matters Most</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From cryptocurrency keys to cherished memories, Locketry safeguards your digital life
            with time-locked encryption you can trust.
          </p>
        </div>

        {/* Use case cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {useCases.map((useCase, index) => (
            <Card
              key={useCase.title}
              className="group relative overflow-hidden card-hover border-border/50 hover:border-primary/30"
            >
              {/* Gradient line at top */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${useCase.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <CardHeader className="pb-4">
                <div className={`w-14 h-14 rounded-2xl ${useCase.iconBg} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
                  <useCase.icon className={`w-7 h-7 ${useCase.iconColor}`} />
                </div>
                <CardTitle className="text-xl font-display">{useCase.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {useCase.description}
                </CardDescription>
              </CardContent>

              {/* Index number */}
              <div className="absolute top-6 right-6 text-7xl font-display font-bold text-muted/5 group-hover:text-primary/10 transition-colors duration-300">
                {String(index + 1).padStart(2, '0')}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
