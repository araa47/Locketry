import { useState, useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Menu, X, Heart } from 'lucide-react'
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
        isScrolled ? "glass py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center shadow-lg group-hover:shadow-primary/40 transition-all duration-300 group-hover:scale-105">
                <Heart className="w-6 h-6 text-white fill-accent" />
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-cyan-500 opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold tracking-tight">
                Locketry
              </span>
              <span className="text-[10px] text-muted-foreground tracking-widest uppercase">
                Digital Time Capsules
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#use-cases" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Use Cases
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#security" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Security
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button variant="gradient" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              className="p-2 hover:bg-secondary rounded-xl transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 space-y-4 animate-in slide-in-from-top-2 duration-200">
            <a href="#use-cases" className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2">
              Use Cases
            </a>
            <a href="#how-it-works" className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2">
              How It Works
            </a>
            <a href="#security" className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2">
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
