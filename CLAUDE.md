# Locketry

Time-locked encryption platform for digital assets, secured by Ethereum smart contracts.

## Tech Stack

- **Runtime**: Bun
- **Framework**: Vite + React 19 + TypeScript
- **Routing**: TanStack Router (file-based routing)
- **Data Fetching**: TanStack Query
- **UI Components**: Custom (shadcn/ui inspired) + Tailwind CSS v4
- **Deployment**: Cloudflare Pages

## Commands

```bash
bun dev              # Start dev server (localhost:5173)
bun run build        # Build for production
bun run preview      # Preview production build
bun run lint         # Run ESLint
```

## Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI primitives (Button, Card, Input, Badge)
│   ├── Header.tsx    # Navigation header
│   ├── Hero.tsx      # Landing hero section
│   ├── UseCases.tsx  # Use cases grid
│   ├── HowItWorks.tsx # 3-step process
│   ├── Security.tsx  # Security features
│   ├── CTA.tsx       # Call-to-action section
│   └── Footer.tsx    # Site footer
├── routes/           # TanStack Router file-based routes
│   ├── __root.tsx    # Root layout with Header/Footer
│   └── index.tsx     # Home page (/)
├── lib/
│   └── utils.ts      # cn() helper
├── main.tsx          # Entry point with Router + Query providers
├── index.css         # Tailwind CSS v4 + custom styles + theme
└── routeTree.gen.ts  # Auto-generated route tree
public/
└── locket.svg        # Favicon
```

## Adding Routes

Create a new file in `src/routes/`:

```tsx
// src/routes/about.tsx -> /about
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return <div>About</div>
}
```

## Design System

### Colors (defined in src/index.css)
- **Background**: #0f0f23 (deep space)
- **Primary**: #8b5cf6 (purple)
- **Accent**: #f59e0b (gold)
- **Gradients**: purple → pink → gold

### Typography
- **Display**: Space Grotesk (headings)
- **Body**: Inter (everything else)

### Effects
- Glassmorphism (`.glass` utility)
- Gradient text (`.gradient-text` utility)
- Floating animations (`.animate-float`)
- Glow effects (`.glow-primary`, `.glow-accent`)

## Deployment

```bash
bun run build
bunx wrangler pages deploy dist --project-name=locketry
```

Live at: https://locketry.pages.dev

## Environment

- Node version specified in `.nvmrc` (Node 22)
- Use direnv with `.envrc` for automatic nvm setup
- Run `direnv allow` after cloning

## Import Aliases

Use `@/` to import from `src/`:

```tsx
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
```

## Documentation

- [ANALYSIS.md](./ANALYSIS.md) - Original codebase analysis
- [COMPETITION.md](./COMPETITION.md) - Competitor research
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment guide
