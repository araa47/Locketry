import { useState, useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Menu, X, Lock } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass py-3" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-pink-500 to-accent flex items-center justify-center shadow-lg group-hover:shadow-primary/40 transition-shadow">
                <Lock className="w-5 h-5 text-white" />
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary via-pink-500 to-accent opacity-0 group-hover:opacity-50 blur-xl transition-opacity" />
            </div>
            <span className="font-display text-xl font-bold tracking-tight">
              Locketry
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#use-cases" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Use Cases
            </a>
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#security" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Security
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button variant="gradient" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 space-y-4">
            <a href="#use-cases" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
              Use Cases
            </a>
            <a href="#how-it-works" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#security" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
              Security
            </a>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="ghost" className="justify-start">
                Sign In
              </Button>
              <Button variant="gradient">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
