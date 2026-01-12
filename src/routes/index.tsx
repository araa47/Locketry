import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '@/components/Hero'
import { UseCases } from '@/components/UseCases'
import { HowItWorks } from '@/components/HowItWorks'
import { Security } from '@/components/Security'
import { CTA } from '@/components/CTA'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <>
      <Hero />
      <UseCases />
      <HowItWorks />
      <Security />
      <CTA />
    </>
  )
}
