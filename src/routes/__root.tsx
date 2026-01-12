import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  ),
})
