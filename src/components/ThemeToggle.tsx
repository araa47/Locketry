import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/lib/theme'
import { cn } from '@/lib/utils'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative w-14 h-8 rounded-full p-1 transition-all duration-300",
        "bg-secondary border border-border",
        "hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
      )}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {/* Track icons */}
      <Sun className="absolute left-1.5 top-1.5 w-5 h-5 text-amber-400 transition-opacity duration-300 opacity-100 dark:opacity-30" />
      <Moon className="absolute right-1.5 top-1.5 w-5 h-5 text-blue-400 transition-opacity duration-300 opacity-30 dark:opacity-100" />

      {/* Sliding circle */}
      <div
        className={cn(
          "w-6 h-6 rounded-full bg-primary shadow-lg transition-transform duration-300",
          theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
        )}
      />
    </button>
  )
}
