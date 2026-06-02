# Agent Ready Example Site Candidates

## SBC4

- `Tease:` Pull examples from docs platforms first, not famous homepages.
- `Lede:` The best fixture sources are Cloudflare Developers, Perplexity Docs, Model Context Protocol, Claude Platform, Vercel, OpenAI API docs, GitHub Docs, Stripe Docs, and LangChain Docs. Their docs roots expose concrete machine-readable artifacts that can be sampled and refreshed.
- `Why it matters:`
  - Good examples need live evidence: `robots.txt`, `sitemap.xml`, `llms.txt`, headers, DNS, and optional agent indexes.
  - Corporate root domains often show useful contrast cases because their docs sites are more agent-readable than their marketing sites.
  - Pulling from a ranked list keeps the examples directory focused instead of turning it into a broad mirror.
- `Go deeper:` Refresh every endpoint before adding or presenting a snapshot; this memo was checked on 2026-06-02.

**Date:** 2026-06-02

**Scope:** Public sites worth sampling for the Agent Ready examples directory. Evidence came from live `curl -L` checks of the listed endpoints plus the official source links below.

## Short Answer

Start the next example batch with these:

1. Cloudflare Developers
2. Perplexity Docs
3. Model Context Protocol
4. Claude Platform
5. Vercel
6. OpenAI API docs
7. GitHub Docs
8. Stripe Docs
9. LangChain Docs

Keep Google Developers, Google AI, Supabase Docs, and the OpenAI/Anthropic/Perplexity corporate roots as contrast examples. They are useful because they show that traditional crawl readiness and agent-readable docs readiness are not the same thing.

## Candidate List

| Priority | Site                                                                                                                   | Use For                                      | Live Signals Checked                                                                                                    | Why It Is Useful                                                                                                                     | Caveats                                                                                                                                                |
| -------- | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1        | [Cloudflare Developers](https://developers.cloudflare.com/)                                                            | Gold-standard positive fixture               | `robots.txt` 200, `sitemap.xml` -> `sitemap-index.xml` 200, `llms.txt` 200, `llms-full.txt` 200, agent skills index 200 | Shows Content Signals, docs-wide `llms` files, full Markdown docs, agent skills JSON, and Markdown content negotiation headers.      | Very Cloudflare-specific; do not treat every feature as a universal baseline.                                                                          |
| 2        | [Perplexity Docs](https://docs.perplexity.ai/)                                                                         | AI-search docs positive fixture              | `robots.txt` 200, `sitemap.xml` 200, `llms.txt` 200, `llms-full.txt` 200, agent skills index 200                        | Strong fit for the talk because Perplexity has crawler docs plus current agent-readable docs artifacts.                              | The corporate root has `llms.txt` blocked, so snapshot docs and root separately.                                                                       |
| 3        | [Model Context Protocol](https://modelcontextprotocol.io/)                                                             | Protocol/tooling fixture                     | `robots.txt` 200, `sitemap.xml` 200, `llms.txt` 200, `llms-full.txt` 200, agent skills index 200                        | Best example for a site whose subject matter is agent tooling and machine-readable capability discovery.                             | Protocol docs are not representative of ordinary content sites.                                                                                        |
| 4        | [Claude Platform](https://platform.claude.com/)                                                                        | Anthropic docs positive fixture              | `robots.txt` 200, `sitemap.xml` 200, `llms.txt` 200, `llms-full.txt` 200                                                | Strong docs root for agent, tool, and API material from a major model vendor.                                                        | [anthropic.com](https://www.anthropic.com/) has traditional crawl files but no root `llms.txt`; keep the distinction explicit.                         |
| 5        | [Vercel](https://vercel.com/) and [Vercel Docs](https://vercel.com/docs)                                               | Agent-readability and framework docs fixture | root `llms.txt` 200, docs `llms-full.txt` 200, docs robots served as Markdown                                           | Vercel has official agent resources and an Agent Readability Spec, so it is good for docs structure and generated Markdown examples. | `/docs/AGENTS.md` returned a page-not-found Markdown page during checks; do not count it as a real `AGENTS.md` fixture.                                |
| 6        | [OpenAI API docs](https://developers.openai.com/api/docs/)                                                             | Major AI API docs fixture                    | `llms.txt` 200, `llms-full.txt` 200                                                                                     | Strong curated docs map with Markdown twins for docs pages and a full combined docs file.                                            | The checked API docs path did not expose `robots.txt` or `sitemap.xml`; [openai.com](https://openai.com/) root has crawl files but blocked `llms.txt`. |
| 7        | [GitHub Docs](https://docs.github.com/)                                                                                | Docs API plus Markdown fixture               | `llms.txt` 200                                                                                                          | Useful because GitHub Docs exposes a docs-oriented `llms.txt` and API surfaces for article bodies and search.                        | No `llms-full.txt` in the checked path; docs sitemap check returned 404.                                                                               |
| 8        | [Stripe Docs](https://docs.stripe.com/)                                                                                | API docs fixture                             | `robots.txt` 200, `sitemap.xml` 200, `llms.txt` 200                                                                     | Good conventional API-docs example with versioning, API reference, webhook, security, and integration material.                      | No `llms-full.txt` or agent skills index in the checked path.                                                                                          |
| 9        | [LangChain Docs](https://docs.langchain.com/)                                                                          | Agent-framework docs fixture                 | `robots.txt` 200, `sitemap.xml` 200, `llms.txt` 200, `llms-full.txt` 200, agent skills index 200                        | Strong positive fixture for an agent-framework ecosystem where docs and procedures matter to coding agents.                          | Framework-vendor examples can look more agent-ready than ordinary product docs.                                                                        |
| 10       | [Cloudflare root](https://www.cloudflare.com/)                                                                         | Root-domain positive contrast                | root `robots.txt` 200, `sitemap.xml` 200, `llms.txt` 200, `llms-full.txt` 200                                           | Useful contrast because both root and developer docs have current agent-readable artifacts.                                          | Developer docs remain the better fixture for detailed examples.                                                                                        |
| 11       | [Google Developers](https://developers.google.com/) and [Google AI](https://ai.google.dev/)                            | Traditional discovery contrast               | `robots.txt` 200, `sitemap.xml` 200, `llms.txt` 404                                                                     | Good negative case: excellent traditional crawl infrastructure without checked `llms` files.                                         | Do not frame absence of `llms.txt` as poor documentation quality; it is an agent-readiness gap only for this scorecard.                                |
| 12       | [OpenAI](https://openai.com/), [Anthropic](https://www.anthropic.com/), [Perplexity](https://www.perplexity.ai/) roots | Corporate-root contrast                      | root `robots.txt` and `sitemap.xml` present; root `llms.txt` blocked or absent in checks                                | Useful for showing that the agent-readable surface may live on docs/platform subdomains rather than the marketing homepage.          | Keep snapshots small; these roots are less useful than their docs sites for positive examples.                                                         |
| 13       | [Supabase Docs](https://supabase.com/docs)                                                                             | Traditional docs contrast                    | `robots.txt` 200, `sitemap.xml` 200, `llms.txt` 404                                                                     | Good non-AI developer-platform contrast that still has solid crawl/discovery basics.                                                 | Lower priority unless the talk needs more non-AI docs examples.                                                                                        |
| 14       | LlamaIndex and Cursor docs                                                                                             | Avoid or low-priority fixtures               | Checked agent paths returned HTML redirects/pages instead of clean artifact endpoints                                   | Useful only as redirect-trap examples if the scanner needs to catch false positives.                                                 | Do not pull as positive fixtures without a narrower current endpoint audit.                                                                            |

## Pull Plan

First snapshot batch:

- Cloudflare Developers: `robots.txt`, `sitemap-index.xml`, `llms.txt`, `llms-full.txt`, agent skills JSON, Markdown negotiation request/response headers.
- Perplexity Docs: `robots.txt`, `sitemap.xml`, `llms.txt`, `llms-full.txt`, agent skills JSON, crawler docs headers.
- Claude Platform: `robots.txt`, `sitemap.xml`, `llms.txt`, `llms-full.txt`.
- Vercel: root `llms.txt`, docs `llms-full.txt`, docs robots Markdown, agent resources/spec pages.
- OpenAI API docs: `llms.txt`, `llms-full.txt`, one `.md` docs page if exposed, root-domain contrast for blocked `llms.txt`.
- GitHub Docs: `llms.txt`, one article body API response, request/response headers.
- Stripe Docs: `robots.txt`, `sitemap.xml`, `llms.txt`, API docs headers.
- Model Context Protocol: `llms.txt`, `llms-full.txt`, agent skills JSON.

Contrast batch:

- Google Developers and Google AI for `robots.txt` plus `sitemap.xml` without `llms.txt`.
- OpenAI, Anthropic, and Perplexity corporate roots for crawl files with blocked or absent root `llms.txt`.
- Supabase Docs for a non-AI developer-platform negative `llms.txt` case.

## Artifact Checklist Per Site

- DNS: `dig +short <host> A` and, when relevant, `AAAA`.
- Request and response headers: `curl -fsSI -L <url>`.
- Crawl policy: `robots.txt`, including sitemap references and AI bot rules when present.
- Discovery: `sitemap.xml` or `sitemap-index.xml`.
- Agent-readable docs: `llms.txt`, `llms-full.txt`, and any `.md` docs page.
- Agent procedures: `/.well-known/agent-skills/index.json` when real JSON is returned.
- Markdown negotiation: `curl -H "Accept: text/markdown" <url>` where supported.
- Contrast note: whether the root domain differs from the docs or platform subdomain.

## Source Links

Cloudflare:

- [Cloudflare Developers `robots.txt`](https://developers.cloudflare.com/robots.txt)
- [Cloudflare Developers `llms.txt`](https://developers.cloudflare.com/llms.txt)
- [Cloudflare Developers `llms-full.txt`](https://developers.cloudflare.com/llms-full.txt)
- [Cloudflare Developers agent skills index](https://developers.cloudflare.com/.well-known/agent-skills/index.json)
- [Cloudflare Markdown for Agents](https://developers.cloudflare.com/fundamentals/reference/markdown-for-agents/)

Perplexity:

- [Perplexity Docs `robots.txt`](https://docs.perplexity.ai/robots.txt)
- [Perplexity Docs `llms.txt`](https://docs.perplexity.ai/llms.txt)
- [Perplexity Docs `llms-full.txt`](https://docs.perplexity.ai/llms-full.txt)
- [Perplexity Docs agent skills index](https://docs.perplexity.ai/.well-known/agent-skills/index.json)
- [Perplexity crawler docs](https://docs.perplexity.ai/docs/resources/perplexity-crawlers)

Anthropic:

- [Claude Platform `robots.txt`](https://platform.claude.com/robots.txt)
- [Claude Platform `sitemap.xml`](https://platform.claude.com/sitemap.xml)
- [Claude Platform `llms.txt`](https://platform.claude.com/llms.txt)
- [Claude Platform `llms-full.txt`](https://platform.claude.com/llms-full.txt)
- [Anthropic root `robots.txt`](https://www.anthropic.com/robots.txt)

OpenAI:

- [OpenAI API docs `llms.txt`](https://developers.openai.com/api/docs/llms.txt)
- [OpenAI API docs `llms-full.txt`](https://developers.openai.com/api/docs/llms-full.txt)
- [OpenAI root `robots.txt`](https://openai.com/robots.txt)
- [OpenAI root `sitemap.xml`](https://openai.com/sitemap.xml)

Vercel:

- [Vercel `llms.txt`](https://vercel.com/llms.txt)
- [Vercel Docs `llms-full.txt`](https://vercel.com/docs/llms-full.txt)
- [Vercel agent resources](https://vercel.com/docs/agent-resources)
- [Vercel Agent Readability Spec](https://vercel.com/kb/guide/agent-readability-spec)

Other strong candidates:

- [GitHub Docs `llms.txt`](https://docs.github.com/llms.txt)
- [Stripe Docs `llms.txt`](https://docs.stripe.com/llms.txt)
- [Stripe Docs `sitemap.xml`](https://docs.stripe.com/sitemap.xml)
- [Model Context Protocol `llms.txt`](https://modelcontextprotocol.io/llms.txt)
- [Model Context Protocol agent skills index](https://modelcontextprotocol.io/.well-known/agent-skills/index.json)
- [LangChain Docs `llms.txt`](https://docs.langchain.com/llms.txt)
- [LangChain Docs agent skills index](https://docs.langchain.com/.well-known/agent-skills/index.json)

Contrast sources:

- [Google Developers `robots.txt`](https://developers.google.com/robots.txt)
- [Google Developers `sitemap.xml`](https://developers.google.com/sitemap.xml)
- [Google AI `robots.txt`](https://ai.google.dev/robots.txt)
- [Supabase Docs `robots.txt`](https://supabase.com/docs/robots.txt)
- [Supabase Docs `sitemap.xml`](https://supabase.com/docs/sitemap.xml)
