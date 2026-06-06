---
title: Practical Agent Readiness Audit Priority
description: The highest-leverage implementation checks for agent-readable sites, with weights, audit tools, guidance, and reference links.
---

# Practical Agent Readiness Audit Priority

This is the practical 80/20 checklist for making a site easier for agents and
AI search systems to find, fetch, parse, cite, and use.

The weights split the high-leverage 80% into 100 points. A 10% item below means
roughly 8 points of total value in this model. Treat the numbers as a planning
heuristic, not a universal score. Site type still matters: brochure sites,
documentation sites, API products, SaaS apps, and commerce flows should not be
audited against the same capability expectations.

## Priority chart

![Pie chart showing the relative weight of each practical agent readiness audit item](/assets/agent-readiness-priority-pie.svg)

## Priority table

|   # | Item                                          | Weight of the 80% | Audit tool or command                                                                                                                                                              | Interactive guidance                                                                                                                                                   | Best resource                                                                                                                                                                                                                                                                                                                                                          |
| --: | --------------------------------------------- | ----------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   1 | Raw fetchability of key pages                 |               18% | `curl -sSIL https://example.com/page` and `curl -sSL https://example.com/page \| head -80`; also run [Cloudflare URL Scanner](https://radar.cloudflare.com/scan).                  | Pass when key pages return clean `200` HTML, sane redirects, no WAF or bot block, and useful main content without login or app interaction.                            | [Cloudflare Agent Readiness](https://blog.cloudflare.com/agent-readiness/)                                                                                                                                                                                                                                                                                             |
|   2 | `robots.txt` with crawler lanes               |               14% | `curl -sS https://example.com/robots.txt`                                                                                                                                          | Separate search/index, user-triggered fetch, and training crawler policy. Do not block search or user-fetch bots when AI-search visibility is the goal.                | [RFC 9309](https://www.rfc-editor.org/rfc/rfc9309.html), [OpenAI crawlers](https://platform.openai.com/docs/bots), [Anthropic crawler controls](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler), [Perplexity crawlers](https://docs.perplexity.ai/docs/resources/perplexity-crawlers) |
|   3 | Passage extractability                        |               14% | Manual source review, browser inspection, and `npx lighthouse@latest https://example.com --only-categories=seo,accessibility`                                                      | Pass when important pages have direct-answer sections, clean heading hierarchy, short focused paragraphs, concrete facts, dates, sources, and low ambiguity.           | [Vercel Agent Readability](https://vercel.com/kb/guide/agent-readability-spec)                                                                                                                                                                                                                                                                                         |
|   4 | Sitemap quality                               |               10% | `curl -sS https://example.com/sitemap.xml`; `xmllint --noout sitemap.xml` for local files.                                                                                         | Pass when the sitemap lists canonical high-value URLs, removes redirects and junk pages, includes accurate `lastmod`, and is linked from `robots.txt`.                 | [Sitemaps protocol](https://www.sitemaps.org/protocol.html)                                                                                                                                                                                                                                                                                                            |
|   5 | `/llms.txt` curated map                       |               10% | `curl -sS https://example.com/llms.txt`; for docs sites, also run `npx afdocs check https://docs.example.com`.                                                                     | Pass when it is short, Markdown, root-hosted, maintained, and points to canonical useful pages with descriptions. Fail giant dumps and stale link lists.               | [`llms.txt` proposal](https://llmstxt.org/), [Agent-Friendly Documentation Spec](https://agentdocsspec.com/)                                                                                                                                                                                                                                                           |
|   6 | Markdown alternatives for high-value pages    |               10% | `curl -sSI -H 'Accept: text/markdown' https://example.com/page`; also test `/page/index.md` or `/page.md`.                                                                         | Pass when important docs, service, product, policy, or reference pages have clean Markdown preserving headings, links, dates, examples, and source references.         | [Cloudflare Markdown for Agents](https://developers.cloudflare.com/fundamentals/reference/markdown-for-agents/), [Cloudflare AI consumability](https://developers.cloudflare.com/style-guide/how-we-docs/ai-consumability/)                                                                                                                                            |
|   7 | Schema, canonical, and visible-content parity |                8% | Google Rich Results Test, Schema Markup Validator, and source checks with `curl`.                                                                                                  | Pass when schema matches visible content, canonical URLs are stable, and dates, authors, methods, source links, and business facts are visible to humans too.          | [Google AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)                                                                                                                                                                                                                                                                |
|   8 | Real capability surfaces only                 |                7% | `isitagentready.com`, Cloudflare URL Scanner, OpenAPI validators, `curl https://example.com/.well-known/api-catalog`, `curl https://example.com/.well-known/mcp/server-card.json`. | Mark as `not applicable` unless there is a real API, tool, auth, agent, or commerce flow. Never publish fake MCP, API, OAuth, WebMCP, or commerce metadata for points. | [RFC 9727 API Catalog](https://www.rfc-editor.org/rfc/rfc9727.html), [RFC 9728 OAuth Protected Resource Metadata](https://www.rfc-editor.org/rfc/rfc9728.html), [Lighthouse agentic browsing scoring](https://developer.chrome.com/docs/lighthouse/agentic-browsing/scoring)                                                                                           |
|   9 | `/llms-full.txt` or segmented context files   |                5% | `curl -sS https://example.com/llms-full.txt \| wc -c`; check generation source and freshness.                                                                                      | Use for docs, product knowledge bases, API docs, or evergreen reference corpora. Prefer generated and segmented files over one huge hand-maintained file.              | [Cloudflare Agent Readiness](https://blog.cloudflare.com/agent-readiness/), [`llms.txt` proposal](https://llmstxt.org/)                                                                                                                                                                                                                                                |
|  10 | HTTP `Link` headers for machine discovery     |                4% | `curl -sSI https://example.com/ \| rg -i '^link:'`                                                                                                                                 | Useful when real resources exist: sitemap, `llms.txt`, API catalog, MCP card, agent skills, or docs. Nice-to-have for simple sites, not a substitute for clean pages.  | [Cloudflare Agent Readiness](https://blog.cloudflare.com/agent-readiness/)                                                                                                                                                                                                                                                                                             |

## Audit flow

Use the same interaction for every line item:

1. **Does this apply?** `yes`, `no`, or `unsure`.
2. **What evidence exists?** URL, status, headers, body excerpt, scanner output,
   or validation result.
3. **What should we do?** `fix now`, `defer`, `not applicable`, or
   `do not implement`.
4. **How is it maintained?** manual edit, generated artifact, CI check, scanner,
   or log monitor.

## Cut line

If time is short, do only these first:

1. Raw fetchable HTML for key pages.
2. `robots.txt` with sitemap and crawler-lane policy.
3. Clean sitemap.
4. Extractable, citable page content.
5. Curated `llms.txt`.
6. Markdown alternatives for the pages agents are most likely to need.

That bundle captures most of the practical value without creating fake protocol
surfaces or overfitting to one scanner.
