# Planning Doc Conventions

## When to Write a Planning Doc

Write a planning doc when a change involves:
- Multiple components or new sections
- New dependencies or infrastructure changes
- Design decisions that affect the site's architecture

Small changes (copy updates, style tweaks, adding a project card) don't need a planning doc.

## Structure

Planning docs go in `docs/planning/` with kebab-case filenames (e.g., `contact-form-backend.md`).

### Recommended Sections

1. **Overview** — One paragraph: what and why
2. **Requirements** — Bulleted list of what the feature must do
3. **Design** — How it will work (component structure, data flow, wireframes if UI)
4. **Implementation Steps** — Ordered steps to build it
5. **Open Questions** — Anything needing discussion before starting
