# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Tyndfed is a portfolio website built with TanStack Start, React 19, and TypeScript. It uses server-side rendering via Nitro and deploys to Vercel.

## Commands

```bash
bun install          # Install dependencies
bun dev              # Start dev server (port 3000)
bun run build        # Build for production (fetches GitHub dates, then Vite build)
bun run start        # Run production server (self-hosted)
```

## Architecture

**Stack:** React 19 + TanStack Start + Vite 7 + TypeScript + Nitro (Vercel preset)

**Routing:** File-based routing in `src/routes/`. Route tree is auto-generated in `src/routeTree.gen.ts`. The `$.tsx` file is the 404 catch-all route.

**Entry Points:**
- `src/entry-client.tsx` - Client hydration
- `src/entry-server.tsx` - SSR handler

**Key Patterns:**
- SEO/meta tags handled via TanStack Router's `head()` function in route files
- `WindowChrome` component provides macOS-style window wrapper used throughout
- `BackgroundAnimation` is a canvas-based animation with mouse interaction and visibility API integration

**Styling:**
- CSS modules for components and routes (e.g., `Component.module.css`)
- `src/styles/app.css` for global styles only (variables, reset, body)
- Use camelCase for class names in modules (e.g., `.projectLink` not `.project-link`)
- Dark theme only - CSS variables defined in `:root`

**Build-time GitHub Integration:**
- `scripts/fetch-github-dates.mjs` runs before build to fetch last commit dates
- Outputs to `public/github-dates.json`
- Uses optional `GITHUB_TOKEN` from `.env.local` for higher rate limits

**Path Aliases:** `~/` maps to `src/`

## Design Review Workflow

Use `/design-review` command for comprehensive UI/UX review of front-end changes.

**When to trigger design review:**
- After completing significant UI changes
- Before creating PRs with visual components
- When accessibility or responsiveness testing is needed

**Design resources:**
- `.claude/design-principles.md` - Design tokens, patterns, and checklist
- `src/styles/app.css` - CSS variables and global styles

**Review process uses Playwright MCP to:**
1. Navigate to affected pages on localhost:3000
2. Test at multiple viewports (1440px, 768px, 375px)
3. Verify hover states and interactions
4. Check for console errors
5. Capture screenshots as evidence

**Post-implementation checklist:**
- [ ] Changes match design tokens (colors, spacing, typography)
- [ ] Responsive at all breakpoints
- [ ] Hover/focus states implemented
- [ ] No console errors
- [ ] Accessibility basics (contrast, focus visible, touch targets)
