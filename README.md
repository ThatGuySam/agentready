# Agent Ready

## SBC4

- `Tease:` A practical scorecard and example library for agent-ready websites.
- `Lede:` Agent Ready turns the current agent-readiness conversation into a React app, a markdown scorecard, captured examples, and a Marp talk deck.
- `Why it matters:`
  - Most readiness checks are useful only for the right site type.
  - Public sites should start with crawl policy, sitemap discovery, readable content, and clear AI crawler policy.
  - API, MCP, auth, A2A, and commerce metadata should come after the underlying capability exists.
- `Go deeper:` The app is built on Kriasoft's React Starter Kit. The core artifacts live in `apps/app`, `docs/scorecard.md`, `examples/`, and `slides/agent-ready-talk/`.

Agent Ready is a project scaffold for a talk and tool about whether websites are actually ready for AI agents. It uses [kriasoft/react-starter-kit](https://github.com/kriasoft/react-starter-kit) as the application boilerplate and replaces the starter app surface with a public scorecard workspace.

## Project Contents

- `apps/app/` - React 19 + TanStack Router scorecard app.
- `apps/app/lib/scorecard.ts` - Typed source of truth for the scorecard UI.
- `docs/scorecard.md` - Markdown table version of the scorecard with reference links.
- `docs/examples.md` - Guide to the captured example snapshots.
- `examples/` - Small live snapshots from OpenAI, Anthropic, Google, and Cloudflare.
- `slides/agent-ready-talk/` - Marp deck using the SCC theme.

## Quick Start

```bash
bun install
bun app:dev
```

The app runs at `http://localhost:5173`.

Useful checks:

```bash
bun app:build
bun --cwd apps/app typecheck
bun docs:build
```

Render the slides with the local Marp helper:

```bash
/Users/athena/.codex/skills/marp/scripts/render_marp.sh slides/agent-ready-talk/slides.md
```

## Scorecard Position

The scorecard is not a pass/fail checklist. It ranks each scanner item by how much expert and practitioner sources say it helps in practice:

- **9-10:** worth doing for almost every public site.
- **7-8:** strong when applicable, especially for docs, APIs, auth, or real tools.
- **5-6:** useful affordance, but adoption or evidence is mixed.
- **1-4:** early, niche, or only useful for a specific product ecosystem.

## Example Scope

The example snapshots are intentionally bounded. They show what good evidence looks like for:

- `robots.txt`
- `sitemap.xml`
- `llms.txt`
- DNS lookups
- request and response headers

The files are dated `2026-06-02` because these public surfaces change.

## Sources

- [Is It Agent Ready](https://isitagentready.com/)
- [Cloudflare Agent Readiness](https://blog.cloudflare.com/agent-readiness/)
- [Vercel Agent Readability Spec](https://vercel.com/kb/guide/agent-readability-spec)
- [Agent-Friendly Documentation Spec](https://agentdocsspec.com/)
- [Google AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [OpenAI crawler docs](https://platform.openai.com/docs/bots)
- [Anthropic crawler controls](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler)
- [Perplexity crawler docs](https://docs.perplexity.ai/docs/resources/perplexity-crawlers)
- [Dries Buytaert on `llms.txt`](https://dri.es/markdown-llms-txt-and-ai-crawlers)
- [Simon Willison on the lethal trifecta](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/)

## Starter Kit Attribution

This repo was bootstrapped from [Kriasoft React Starter Kit](https://github.com/kriasoft/react-starter-kit), preserving its Bun workspace, React app, UI package, VitePress docs, Cloudflare-oriented app structure, and tooling conventions.
