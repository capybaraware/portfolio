# Architecture

## Overview

Simple single-page Next.js application with no backend services, database, or authentication.

## Rendering Strategy

- **Server Components** by default (About, Skills, Projects)
- **Client Components** only when interactivity is needed: Navigation (scroll detection), Contact (form state)
- No API routes currently — contact form logs to console

## Deployment

- **Hosting:** Vercel (Next.js optimized)
- **Build:** `next build` produces static/SSR output
- **Domain:** TBD

## Component Flow

```
app/page.tsx (Home)
├── Navigation    (client — scroll listener, smooth-scroll nav)
├── Hero          (server — static landing content)
├── About         (server — static bio)
├── Skills        (server — static skill tags)
├── Projects      (server — static project cards)
└── Contact       (client — form state management)
```

## Styling

- Tailwind CSS utility classes exclusively
- Dark mode via `dark:` variants (CSS `prefers-color-scheme`)
- No CSS modules, no inline styles
- Global styles in `app/globals.css` (Tailwind directives, CSS variables, smooth scroll)
