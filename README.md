# Software Engineer Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive layout
- 🌙 Dark mode support
- ⚡ Fast and optimized with Next.js
- 🎯 Smooth scrolling navigation
- 📧 Contact form

## Sections

- **Hero**: Introduction and call-to-action
- **About**: Personal information and experience
- **Skills**: Technical skills and technologies
- **Projects**: Featured projects showcase
- **Contact**: Contact form and social links

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

Update the following files with your information:

- `components/Hero.tsx` - Name and title
- `components/About.tsx` - About section content
- `components/Skills.tsx` - Skills and technologies
- `components/Projects.tsx` - Your projects
- `components/Contact.tsx` - Contact information and social links

### Styling

The project uses Tailwind CSS. You can customize colors, fonts, and styles in:
- `tailwind.config.ts` - Tailwind configuration
- `app/globals.css` - Global styles

## Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Ready for Vercel, Netlify, or any Node.js hosting