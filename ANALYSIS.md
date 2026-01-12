# Locketry Codebase Analysis

## Overview
Locketry is a **time-encrypted digital asset sharing platform** that uses Ethereum smart contracts to enable secure, time-locked encryption. The concept is similar to a "dead man's switch" - users can share encrypted sensitive data that only becomes accessible after a timer expires (e.g., when the user stops resetting it).

## Current Tech Stack
| Component | Technology |
|-----------|------------|
| Backend | Python Flask (dev) / Gunicorn (prod) |
| Frontend | Static HTML + jQuery |
| Styling | SCSS with Bootstrap 4.1.3 |
| Build | Prepros for JS bundling, SCSS compilation |
| Hosting | Heroku (based on Procfile/runtime.txt) |

## Project Structure
```
locketry/
├── app.py              # Flask server (simple static file serving)
├── templates/
│   └── index.html      # Single-page landing site
├── static/
│   ├── css/
│   │   ├── main.scss   # Entry point
│   │   ├── abstracts/  # Variables, mixins
│   │   ├── base/       # Base styles, typography, utilities
│   │   ├── components/ # Hero, cases, CTA, how, buttons
│   │   └── layout/     # Header, footer, grid
│   ├── js/
│   │   ├── app.js      # Entry point
│   │   └── modules/    # Header scroll, scroll manager
│   ├── images/         # SVG icons, logos
│   └── fonts/          # Avenir font files
├── Pipfile             # Python dependencies
├── Procfile            # Heroku deployment config
└── runtime.txt         # Python version for Heroku
```

## Core Features & Sections

### 1. Hero Section
- Main value proposition: "A Locket For Your Loved Ones"
- Email subscription form (Mailchimp integration)
- "Coming Soon" status indicator
- Hero illustration (computer SVG)

### 2. Use Cases Section
Four key use cases presented:
1. **Private Keys** - Backup cryptocurrency keys for family access
2. **Wills** - Time-locked will documents
3. **Digital Assets** - Encrypt large files (videos, pictures)
4. **Dead Man's Switch** - Trigger information passing to trusted parties

### 3. How It Works Section
Three-step process:
1. **Create A Locket** - Deploy smart contract with timer
2. **Encrypt Files** - Add assets and set password
3. **Give Locket** - Pass encrypted device to loved one

### 4. CTA Section
- Reference to Whalefolio (sister project)

### 5. Footer
- Social links (Medium, Facebook, Twitter, Reddit)
- Contact email

## Design System

### Colors
```scss
$color-primary: #448AFF;    // Blue (hero background)
$color-secondary: #F3EC1B;  // Yellow (accents)
$color-gray: #75849A;       // Text gray
$color-gray-drk: #979797;   // Border gray
```

### Typography
- Primary font: Avenir (Heavy 800, Book 400)
- Fallback: Helvetica, Arial, sans-serif

### Responsive Breakpoints
- Mobile-first with `@include atMedium` for tablet/desktop

## JavaScript Functionality
1. **Header** - Adds scrolled class after 50px scroll
2. **ScrollManager** - Smooth scroll to sections via `data-scroll-to` attributes

## Third-Party Dependencies
- jQuery 2.2.4
- jQuery ScrollTo plugin
- Bootstrap 4.1.3 CSS (grid only)
- Mailchimp for email subscriptions

## Current Issues & Limitations

1. **Tech Debt**
   - jQuery-based, dated architecture
   - No component reusability
   - Bootstrap dependency for just grid
   - Prepros build tool (proprietary)

2. **UX/Design Issues**
   - "Coming Soon" status (product never launched)
   - Limited interactivity
   - No dark mode
   - Dated visual design

3. **Missing Features**
   - No actual encryption functionality
   - No smart contract integration UI
   - No user authentication
   - No dashboard or app interface

4. **SEO/Performance**
   - Missing meta tags
   - No Open Graph
   - CDN dependencies (jQuery, Bootstrap)

## Opportunities for Redesign

1. **Modern Stack** - React 19 + TypeScript + Vite
2. **Better Styling** - Tailwind CSS v4 + shadcn/ui
3. **Type-safe Routing** - TanStack Router
4. **State Management** - TanStack Query
5. **Modern Design** - Glassmorphism, gradients, animations
6. **Dark Mode** - System preference + toggle
7. **Performance** - Code splitting, lazy loading
8. **Accessibility** - ARIA labels, keyboard navigation
9. **Mobile-First** - Responsive design throughout
10. **SEO** - Meta tags, Open Graph, semantic HTML
