# Testing Conventions

## Current State

No test framework is currently configured. The portfolio is a simple static site with minimal logic.

## When to Add Tests

Add tests when:
- Interactive logic is introduced (form validation, API calls, dynamic filtering)
- A backend is added (API route handlers)
- Complex client-side state management appears

## Recommended Setup (When Needed)

- **Unit/Integration:** Vitest + React Testing Library
- **E2E:** Playwright
- **Test location:** Colocate test files next to source (e.g., `Contact.test.tsx` next to `Contact.tsx`)

## What to Test

- **High value:** Form validation, API route handlers, data transformations
- **Low value:** Static presentational components that just render props/markup
