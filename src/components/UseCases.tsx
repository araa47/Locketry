import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Key, FileText, Image, Timer } from 'lucide-react'

const useCases = [
  {
    icon: Key,
    title: 'Private Keys',
    description: 'Safeguard your cryptocurrency private keys. Ensure your family can access your digital wealth when they need to.',
    color: 'from-violet-500 to-purple-600',
    shadowColor: 'shadow-violet-500/20',
  },
  {
    icon: FileText,
    title: 'Digital Wills',
    description: 'Store your will and important documents. Time-locked to be revealed only at the right moment.',
    color: 'from-amber-400 to-orange-500',
    shadowColor: 'shadow-amber-500/20',
  },
  {
    icon: Image,
    title: 'Precious Memories',
    description: 'Encrypt photos, videos, and letters. Create time capsules for future generations.',
    color: 'from-cyan-400 to-blue-500',
    shadowColor: 'shadow-cyan-500/20',
  },
  {
    icon: Timer,
    title: "Dead Man's Switch",
    description: 'Set up automatic release of sensitive information to trusted parties if something happens to you.',
    color: 'from-rose-400 to-pink-600',
    shadowColor: 'shadow-rose-500/20',
  },
]

export function UseCases() {
  return (
    <section id="use-cases" className="py-24 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Protect What Matters Most
          </h2>
          <p className="text-lg text-muted-foreground">
            From cryptocurrency keys to cherished memories, Locketry safeguards your digital life
            with time-locked encryption you can trust.
          </p>
        </div>

        {/* Use case cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {useCases.map((useCase, index) => (
            <Card
              key={useCase.title}
              className={`group relative overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 ${useCase.shadowColor} hover:shadow-xl`}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${useCase.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              <CardHeader>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${useCase.color} flex items-center justify-center mb-4 shadow-lg ${useCase.shadowColor}`}>
                  <useCase.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl">{useCase.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {useCase.description}
                </CardDescription>
              </CardContent>

              {/* Index number */}
              <div className="absolute top-6 right-6 text-6xl font-display font-bold text-muted/10 group-hover:text-primary/10 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
