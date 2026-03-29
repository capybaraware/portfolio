# Architecture Decision Records

## ADR-001: Next.js App Router

**Decision:** Use Next.js 14 with App Router (not Pages Router).

**Why:** App Router is the recommended approach for new Next.js projects. Server components by default reduce client-side JavaScript. Layout nesting and metadata API are cleaner.

## ADR-002: Tailwind CSS for Styling

**Decision:** Use Tailwind CSS utility classes exclusively — no CSS modules, no inline styles.

**Why:** Utility-first approach keeps styles colocated with markup, eliminates naming overhead, and produces consistent responsive design with built-in breakpoints and dark mode variants.

## ADR-003: No Backend (Yet)

**Decision:** Contact form is client-side only. No API routes, database, or auth.

**Why:** Portfolio is primarily a static showcase. Adding a backend for just the contact form isn't worth the complexity yet. Can revisit when there's a concrete need (e.g., email integration, CMS).

## ADR-004: Server Components by Default

**Decision:** Only use `'use client'` when the component requires browser APIs or interactivity (scroll listeners, form state).

**Why:** Reduces client-side JavaScript bundle. Currently only Navigation (scroll detection) and Contact (form state) are client components.
