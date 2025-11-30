## Project Brief

### Vision
Create a premium, AI-focused marketing experience that can quickly adapt to multiple branded microsites (e.g., ExecuMate, FlowHub, Markify) while sharing a consistent design system and infrastructure. The site should highlight automation capabilities, enterprise readiness, and product storytelling for SutraLabs.

### Objectives
1. Deliver a high-performance marketing site that feels bespoke per vertical while reusing shared sections and UI primitives.
2. Provide an extensible Next.js App Router foundation paired with a component library (shadcn/Radix) for rapid iteration.
3. Support future integrations with Zapier-style automation demos and lead capture flows.

### Deliverables
- Multi-section landing layouts for each AI product line under SutraLabs.
- Centralized theming (`app/globals.css`, `styles/globals.css`) and shared components (`components`, `client/components`).
- Deployment-ready configuration for Vercel/Netlify with clear documentation (`DEPLOYMENT.md`, `VERCEL_DEPLOY.md`).

### Success Criteria
- Lighthouse 90+ for Performance/Accessibility/Best Practices/SEO.
- Easy authoring of new sections/pages without code duplication.
- Stable preview pipeline via `pnpm dev` and production via `pnpm build && pnpm start`.

