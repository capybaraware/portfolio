# File Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout — metadata, HTML wrapper
│   ├── page.tsx            # Home page — imports and renders all sections
│   └── globals.css         # Tailwind directives, CSS variables, dark mode
├── components/
│   ├── Navigation.tsx      # Fixed header, scroll-aware background, smooth-scroll links
│   ├── Hero.tsx            # Landing section — name, title, CTAs
│   ├── About.tsx           # Bio and experience badge
│   ├── Skills.tsx          # Skills grouped by category (Frontend, Backend, Tools)
│   ├── Projects.tsx        # Featured project cards with tech tags
│   └── Contact.tsx         # Contact info + form
├── docs/
│   ├── context/            # Project documentation for agents/contributors
│   └── planning/           # Roadmap and planning conventions
├── .claude/
│   ├── agents/             # Specialist agent definitions
│   ├── commands/           # Custom Claude Code commands
│   └── settings.json       # Permission and MCP configuration
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── next.config.js
├── CLAUDE.md               # AI assistant project instructions
└── README.md
```

## Conventions

- **Components:** One per file in `components/`, PascalCase filenames
- **Pages:** App Router convention — `app/page.tsx` for routes
- **Styles:** Tailwind utilities only, no CSS modules
- **Server vs Client:** Server components by default; add `'use client'` only when needed
