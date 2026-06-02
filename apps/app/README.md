# Agent Ready App

Single-page scorecard app built with React 19, TanStack Router, shadcn/ui,
lucide-react, and Tailwind CSS v4.

The app renders the Agent Ready readiness scorecard from
[`lib/scorecard.ts`](lib/scorecard.ts).

## Development

```bash
bun app:dev       # Start dev server (http://localhost:5173)
bun app:build     # Build for production
bun app:deploy    # Deploy to Cloudflare Workers
```

## Structure

```bash
routes/           # File-based routes (TanStack Router)
components/       # Shared app components
lib/              # Scorecard data, clients, state, and utilities
styles/           # Global CSS and theme variables
```

Route tree is auto-generated in `lib/routeTree.gen.ts` -- do not edit manually.
