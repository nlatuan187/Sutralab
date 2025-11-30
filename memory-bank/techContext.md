## Tech Context

### Core Stack
- **Runtime**: Node 18+ (per Next.js requirements) managed via `pnpm`.
- **Frontend**: Next.js App Router + React 18 + TypeScript, TailwindCSS, Radix UI (shadcn).
- **Legacy Starter**: Fusion template (React Router 6 + Express + Vite) retained under `client/` for reference or future hybrid needs.
- **Styling**: Tailwind utility-first classes, CSS variables in `globals.css`, Lucide icons.

### Tooling
- **Build/Serve**: `pnpm dev` (Next dev server), `pnpm build`, `pnpm start`.
- **Lint/Format**: ESLint + Prettier (config inherited from starter).
- **Testing**: Vitest (mostly referenced in Fusion starter; Next side has minimal coverage).

### Dependencies of Note
- `next`, `react`, `react-dom`, `tailwindcss`, `autoprefixer`, `postcss`.
- UI: `@radix-ui/react-*`, `lucide-react`, shadcn component patterns under `components/ui`.
- Utility: `clsx`, `tailwind-merge`, `zod` (Fusion). Toast + Mobile hooks duplicated across stacks.

### Environments
- **Dev**: run locally via `pnpm dev`.
- **Preview/Prod**: Deploy to Vercel or Netlify using provided deployment guides. No serverless functions required beyond Next defaults.

### Constraints
- Keep bundle lean; prefer static content.
- Avoid server-side secrets—no dedicated backend pending new requirements.

