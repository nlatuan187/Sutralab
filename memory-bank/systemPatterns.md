## System Patterns

### Architecture
- **Next.js App Router** in `app/` powers the primary marketing experience, with individual directories (`ai-fashion`, `execumate`, `flowhub`, `markify`) for brand-specific routes.
- A **legacy/secondary Fusion Starter** exists under `client/` (React Router + Express). Keep files intact for reference but preference is the Next.js stack unless requirements change.
- Shared UI primitives live in both `components/ui/` (Next) and `client/components/ui/` (Fusion). Each mirrors shadcn/Radix patterns with Tailwind classes.

### Styling & Theming
- Global styles split between `app/globals.css` (Next) and `styles/globals.css` (shared legacy). Tailwind config (root `tailwind.config.*`) feeds both.
- `components/aurora-background.tsx` and gradient utility sections establish visual identity.

### Data & Content Flow
- Content is component-driven (no CMS). Each section component exports props-free JSX with embedded copy/images imported from `public/`.
- Repeated sections (hero, stats, products) are composed on pages located either in `app/page.tsx` or brand directories.

### State & Hooks
- Lightweight hooks (`hooks/use-mobile.ts`, `hooks/use-toast.ts`) abstract responsive checks and notifications.
- There is no global state manager; React context is used sparingly (`components/theme-provider.tsx`).

### Tooling & Automation
- `pnpm` manages monorepo dependencies.
- Vitest configured through Fusion starter but primary testing story still pending.

