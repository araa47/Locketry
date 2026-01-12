# Deployment Guide

## Overview
Locketry is deployed to Cloudflare Pages for fast, global edge delivery.

## Tech Stack
- **Runtime**: Bun
- **Framework**: Vite + React 19
- **Styling**: Tailwind CSS v4
- **Routing**: TanStack Router
- **Data Fetching**: TanStack Query
- **Hosting**: Cloudflare Pages

## Local Development

```bash
# Install dependencies
bun install

# Start dev server
bun dev

# Build for production
bun run build

# Preview production build
bun run preview
```

## Deployment

### Cloudflare Pages

The site is deployed to Cloudflare Pages using Wrangler.

#### Manual Deployment
```bash
bun run build
bunx wrangler pages deploy dist --project-name=locketry
```

#### CI/CD Setup (Optional)
For automatic deployments, connect your GitHub repository to Cloudflare Pages:

1. Go to Cloudflare Dashboard > Pages
2. Create a new project
3. Connect your GitHub repository
4. Configure build settings:
   - **Build command**: `bun run build`
   - **Build output directory**: `dist`
   - **Node version**: 20.x (Bun will be used automatically)

## Environment Variables

Currently, no environment variables are required for the landing page.

Future integrations may require:
- `VITE_API_URL` - Backend API URL
- `VITE_WALLET_CONNECT_PROJECT_ID` - WalletConnect project ID

## Production URLs

The site is live at:
- **Production**: https://locketry.pages.dev
- **Branch Preview**: https://redesign-modern-stack.locketry.pages.dev

Custom domains can be configured in Cloudflare Pages settings.

## Performance Optimizations

- **Code Splitting**: TanStack Router handles lazy loading automatically
- **CSS**: Tailwind CSS v4 with CSS-in-JS for minimal bundle size
- **Assets**: Vite handles asset optimization and hashing
- **Fonts**: Google Fonts with preconnect for fast loading

## Build Output

After running `bun run build`, the `dist/` directory contains:
- `index.html` - Entry point with SEO meta tags
- `assets/` - Bundled JS and CSS with content hashes
- `locket.svg` - Favicon

## Troubleshooting

### Build Failures
1. Ensure all dependencies are installed: `bun install`
2. Clear cache: `rm -rf node_modules && bun install`
3. Check TypeScript errors: `bun run build`

### Deployment Failures
1. Ensure you're authenticated: `bunx wrangler login`
2. Check project exists in Cloudflare dashboard
3. Verify build output exists in `dist/`
