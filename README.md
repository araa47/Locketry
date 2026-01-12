# Locketry

> A Locket For Your Loved Ones

Time-locked encryption for your most precious digital assets. Share private keys, wills, and memories with loved ones, secured by Ethereum smart contracts.

**Live Demo**: https://locketry.pages.dev

## Features

- **Time-Locked Encryption** - Assets unlock only when your smart contract allows
- **End-to-End Encrypted** - Military-grade AES-256 encryption
- **Zero-Knowledge Architecture** - We never see your data
- **Dead Man's Switch** - Automatic release if you go silent
- **Beautiful Modern UI** - Glassmorphism design with dark mode

## Tech Stack

| Layer | Technology |
|-------|------------|
| Runtime | [Bun](https://bun.sh) |
| Framework | [React 19](https://react.dev) |
| Build | [Vite 6](https://vitejs.dev) |
| Language | [TypeScript](https://typescriptlang.org) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Routing | [TanStack Router](https://tanstack.com/router) |
| Data | [TanStack Query](https://tanstack.com/query) |
| Components | Custom (shadcn/ui inspired) |
| Hosting | [Cloudflare Pages](https://pages.cloudflare.com) |

## Quick Start

```bash
# Clone the repository
git clone https://github.com/araa47/locketry.git
cd locketry

# Install dependencies
bun install

# Start development server
bun dev

# Build for production
bun run build

# Preview production build
bun run preview
```

## Project Structure

```
locketry/
├── src/
│   ├── components/     # React components
│   │   ├── ui/        # Reusable UI primitives
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── UseCases.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Security.tsx
│   │   ├── CTA.tsx
│   │   └── Footer.tsx
│   ├── routes/        # TanStack Router file-based routes
│   ├── lib/           # Utilities
│   ├── index.css      # Tailwind + custom styles
│   └── main.tsx       # App entry point
├── public/            # Static assets
├── ANALYSIS.md        # Original codebase analysis
├── COMPETITION.md     # Competitor analysis
└── DEPLOYMENT.md      # Deployment guide
```

## Design System

### Colors
- **Background**: Deep space (#0f0f23)
- **Primary**: Vibrant purple (#8b5cf6)
- **Accent**: Warm gold (#f59e0b)
- **Gradients**: Purple → Pink → Gold

### Typography
- **Display**: Space Grotesk (headings)
- **Body**: Inter (everything else)

### Effects
- Glassmorphism cards
- Gradient text
- Floating animations
- Glow effects

## Deployment

Deploy to Cloudflare Pages:

```bash
bun run build
bunx wrangler pages deploy dist --project-name=locketry
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for full deployment guide.

## Documentation

- [ANALYSIS.md](./ANALYSIS.md) - Analysis of the original Flask codebase
- [COMPETITION.md](./COMPETITION.md) - Competitor research and opportunities
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment and hosting guide

## Use Cases

1. **Private Keys** - Backup cryptocurrency keys for family access
2. **Digital Wills** - Time-locked documents revealed when needed
3. **Precious Memories** - Time capsules for future generations
4. **Dead Man's Switch** - Automatic release to trusted parties

## License

MIT
