# Portfolio Site

Personal portfolio website for Richard O — a software engineer.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3
- **Deployment:** Vercel

## Project Structure

```
app/
  layout.tsx          Root layout with metadata
  page.tsx            Home page — renders all sections
  globals.css         Global styles, CSS variables, dark mode
components/
  Navigation.tsx      Fixed header with scroll-aware styling
  Hero.tsx            Landing section with CTAs
  About.tsx           About me section
  Skills.tsx          Skills & technologies grid
  Projects.tsx        Featured projects cards
  Contact.tsx         Contact info + form (client-side only)
```

## Development

```bash
npm run dev       # Start dev server
npm run build     # Production build
npm run lint      # ESLint
```

## Conventions

- Components are one-per-file in `components/`
- Server components by default; `'use client'` only when needed (Navigation, Contact)
- Tailwind utility classes for all styling — no CSS modules
- Dark mode via `dark:` variants (follows system preference)
- Responsive: mobile-first with `sm:`/`md:`/`lg:` breakpoints

## Notes

- Contact form is client-side only (no backend integration yet)
- See `docs/context/` for detailed project documentation
- See `docs/planning/ROADMAP.md` for current priorities
