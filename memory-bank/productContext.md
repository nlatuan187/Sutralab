## Product Context

### Problem Space
Marketing teams at SutraLabs need to showcase multiple AI automation suites without spinning up entirely separate codebases. Each experience must feel tailored to its audience (enterprise ops, marketing, fashion, etc.) while sharing the same technical backbone and design language.

### Users & Needs
- **Enterprise buyers** want instant clarity on security, governance, and integration points (`components/security-section.tsx`, `enterprise-section.tsx`).
- **Growth marketers** require eye-catching hero moments (`components/hero-section.tsx`, `aurora-background.tsx`) plus proof via customer stories and stats.
- **Founders/Product leads** need confidence that the site can scale, is performant, and ties directly into automation workflows highlighted in imagery (`public/images/*.png/jpeg`).

### Experience Goals
1. Convey premium AI automation branding with immersive visuals (gradient backgrounds, glassmorphism cards).
2. Provide modular sections that can be rearranged per vertical (see `components/products-section.tsx`, `use-cases-section.tsx`).
3. Maintain frictionless navigation with a sticky header/footer and clear CTAs.

### Constraints & Considerations
- Performance budgets favor static assets and minimal blocking scripts.
- Maintain accessibility (ARIA, focus states, semantic structure) across duplicated UI primitives (`components/ui`, `client/components/ui`).
- The site must remain deployable on Vercel/Netlify without additional backend services unless absolutely necessary.

