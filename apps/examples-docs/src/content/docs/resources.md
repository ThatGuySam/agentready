---
title: Resources
description: Starter links for agent readiness, AEO, AI search visibility, and Lighthouse agentic browsing audits.
---

<section class="bluf-summary" role="radiogroup" aria-label="Page summary">
  <div class="bluf-summary__item">
    <input class="bluf-summary__control" type="radio" name="resources-bluf" id="resources-bluf-bottom-line" checked />
    <label class="bluf-summary__summary" for="resources-bluf-bottom-line">Bottom line</label>
    <div class="bluf-summary__panel">
      <div class="bluf-summary__panel-inner">
        <p>This page collects the starter references for Agent Ready strategy, audit practice, crawler policy, implementation checklists, capability protocols, and Lighthouse agentic-browsing checks.</p>
      </div>
    </div>
  </div>
  <div class="bluf-summary__item">
    <input class="bluf-summary__control" type="radio" name="resources-bluf" id="resources-bluf-relevance" />
    <label class="bluf-summary__summary" for="resources-bluf-relevance">Is this relevant?</label>
    <div class="bluf-summary__panel">
      <div class="bluf-summary__panel-inner">
        <p>Use it when you want source links behind the examples site or need a fast handoff after the Codeable Skill Chat deck.</p>
      </div>
    </div>
  </div>
</section>

Use these as starter references for the Agent Ready examples site and the
Codeable Skill Chat deck.

## Slides

- [Open the Codeable Skill Chat deck](https://agentready.samcarlton.com/slides/) -
  live slides for the Agent Ready audit model.

## Strategy and positioning

- [Agent Led Growth](https://www.youtube.com/watch?v=RyTwRCKeDo4) - Sequoia
  and Profound on the shift from SEO to agent-led discovery and demand capture.
- [AEO is the New SEO](https://www.listennotes.com/podcasts/always-be-testing/saas-class-ep-1-aeo-is-the-7UyGvP1j8sf/) -
  Always Be Testing / SaaS Class episode on answer engine optimization.
- [Visibility in AI Search](https://www.youtube.com/watch?v=ukpU-EfRtV4) -
  iPullRank session on how brands earn and measure AI search visibility.

## Audit reference

- [Practical Agent Readiness Audit Priority](/reference/practical-audit-priority/) -
  weighted 80/20 implementation checklist with audit commands, guidance, and
  best-practice links.
- [Agentic Empathy](/reference/agentic-empathy/) - source-backed examples for
  reducing uncertainty for constrained, tool-using agents.
- [WordPress Agent-Ready Tooling](/reference/wordpress-tooling/) - practical
  WordPress admin, SEO plugin, theme, page-builder, and audit-tool guidance for
  keeping agent-readiness work boring.
- [Cloudflare Agent Readiness](https://blog.cloudflare.com/agent-readiness/) -
  reference implementation for the current scanner model and emerging
  protocol categories.
- [Google Lighthouse agentic browsing scoring](https://developer.chrome.com/docs/lighthouse/agentic-browsing/scoring) -
  official scoring reference for Lighthouse's `agentic-browsing` category.

## Online checker tools

- [Is It Agent Ready](https://isitagentready.com/) - broad public scanner for
  emerging agent-readiness protocol surfaces.
- [Cloudflare URL Scanner](https://radar.cloudflare.com/scan) - HTTP,
  rendering, and security scan evidence to pair with protocol checks.
- [Agent Ready scanner](https://agent-ready.dev/) - comparison scanner for
  content and readability-oriented checks.
- [IsAgentReady methodology](https://isagentready.com/en/about) - companion
  methodology reference for agent-readiness scans.
- [Vercel Agent Readability](https://vercel.com/kb/guide/agent-readability-spec) -
  practical site and docs readability checklist.
- [Agent-Friendly Documentation Spec](https://agentdocsspec.com/) and
  [AFDocs CI integration](https://www.afdocs.dev/ci-integration) - docs-specific
  agent-readability checks and CI guidance.
- [AgentCheck AI bot posture leaderboard](https://www.agentcheck.com/leaderboard/ai-bots) -
  declared `robots.txt` and public interface-file posture; useful signal, not a
  full readiness audit.

## Implementation checklists

- [Cloudflare AI consumability](https://developers.cloudflare.com/style-guide/how-we-docs/ai-consumability/) -
  practical docs guidance for making content easier for AI systems to consume.
- [Cloudflare Markdown for Agents](https://developers.cloudflare.com/fundamentals/reference/markdown-for-agents/) -
  reference for Markdown endpoints, `llms.txt`, and `llms-full.txt` on a large
  documentation site.
- [`llms.txt` proposal](https://llmstxt.org/) - original proposal for a
  curated Markdown entrypoint for LLM-friendly site context.
- [Google AI features and your website](https://developers.google.com/search/docs/appearance/ai-features) -
  baseline Google guidance for AI Overviews and AI Mode; useful for avoiding
  claims that Google requires special AI-only files or schema.

## Crawler policy

- [OpenAI crawlers](https://platform.openai.com/docs/bots) - official bot names
  and controls for search, user-triggered fetch, training, and related agents.
- [Anthropic crawler controls](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler) -
  official Claude crawler and user-fetch controls.
- [Perplexity crawlers](https://docs.perplexity.ai/docs/resources/perplexity-crawlers) -
  official Perplexity crawler and user-agent reference.
- [Bing grounding on the AI web](https://blogs.bing.com/search/February-2026/Elevating-the-Role-of-Grounding-on-the-AI-Web) -
  Microsoft/Bing framing for source grounding in AI-generated experiences.

## Capability protocols

Use these only when the site has real APIs, tools, auth flows, agent services,
or commerce surfaces to expose.

- [RFC 9727 API Catalog](https://www.rfc-editor.org/rfc/rfc9727.html) -
  well-known API discovery standard.
- [RFC 9728 OAuth Protected Resource Metadata](https://www.rfc-editor.org/rfc/rfc9728.html) -
  metadata for OAuth-protected resources.
- [Model Context Protocol](https://modelcontextprotocol.io/docs/getting-started/intro) -
  standard for connecting AI applications to tools, data, and workflows.
- [A2A specification](https://github.com/a2aproject/A2A/blob/main/docs/specification.md) -
  agent-card-based discovery and inter-agent communication.
- [Chrome WebMCP early preview](https://developer.chrome.com/blog/webmcp-epp)
  and [WebMCP explainer](https://github.com/webmachinelearning/webmcp) -
  browser-page tool discovery for human-in-the-loop agent interactions.

## Reality checks and safety

- [Dries Buytaert on Markdown, `llms.txt`, and AI crawlers](https://dri.es/markdown-llms-txt-and-ai-crawlers) -
  crawler-log counterweight to treating Markdown or `llms.txt` as a ranking
  switch.
- [Simon Willison on the lethal trifecta](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/) -
  safety framing for agents that combine private data, untrusted content, and
  external communication.

## Operator playbooks

- [HubSpot AEO playbook](https://unbound.hubspot.com/blog/how-to-show-up-in-ai-search-hubspots-winning-aeo-playbook) -
  operator-facing playbook for showing up in AI search.
- [iPullRank AI Search Manual walkthrough](https://ipullrank.com/ai-search-manual-webinar) -
  technical walkthrough for AI search visibility, relevance engineering, and
  measurement.
- [Similarweb agentic search optimization checklist](https://www.similarweb.com/blog/marketing/geo/agentic-search-optimization/) -
  practitioner checklist that separates citation visibility from agent task
  completion.
- [Graphite AEO](https://graphite.io/aeo) - agency/operator framing for answer
  engine optimization; useful market language, but validate tactical claims
  against primary sources.

## Lighthouse command

Run the agentic browsing category against a public URL and open the generated
HTML report:

```bash
npx lighthouse@latest https://agentready.samcarlton.com \
  --only-categories=agentic-browsing \
  --output=html \
  --output-path=./lighthouse-agentic.html \
  --view
```
