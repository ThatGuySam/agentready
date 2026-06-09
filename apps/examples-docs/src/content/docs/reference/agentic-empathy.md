---
title: Agentic Empathy
description: Source-backed examples for treating agent readiness as reducing uncertainty for constrained, tool-using agents.
---

# Agentic Empathy

<section class="bluf-summary" role="radiogroup" aria-label="Page summary">
  <div class="bluf-summary__item">
    <input class="bluf-summary__control" type="radio" name="agentic-empathy-bluf" id="agentic-empathy-bluf-bottom-line" checked />
    <label class="bluf-summary__summary" for="agentic-empathy-bluf-bottom-line">Bottom line</label>
    <div class="bluf-summary__panel">
      <div class="bluf-summary__panel-inner">
        <p>Agentic empathy means reducing uncertainty for constrained, tool-using agents that fetch, parse, compare, cite, and sometimes act on behalf of a human.</p>
      </div>
    </div>
  </div>
  <div class="bluf-summary__item">
    <input class="bluf-summary__control" type="radio" name="agentic-empathy-bluf" id="agentic-empathy-bluf-relevance" />
    <label class="bluf-summary__summary" for="agentic-empathy-bluf-relevance">Is this relevant?</label>
    <div class="bluf-summary__panel">
      <div class="bluf-summary__panel-inner">
        <p>Use this page when you need the source-backed expansion behind the Agentic Empathy slide in the Codeable Skill Chat deck.</p>
      </div>
    </div>
  </div>
  <div class="bluf-summary__item">
    <input class="bluf-summary__control" type="radio" name="agentic-empathy-bluf" id="agentic-empathy-bluf-caveat" />
    <label class="bluf-summary__summary" for="agentic-empathy-bluf-caveat">Caveat</label>
    <div class="bluf-summary__panel">
      <div class="bluf-summary__panel-inner">
        <p>This is not anthropomorphism. The useful move is to respect agent constraints: entry path, context budget, fetch loss, provenance, and action boundaries.</p>
      </div>
    </div>
  </div>
</section>

Agentic empathy is the habit of asking:

> If an agent lands here with a task, a tool budget, and an imperfect fetch
> pipeline, what can it find, understand, trust, cite, and safely do?

The Codeable deck now treats this as a two-step explanation:

1. **What it is and why it matters:** design for what an agent can actually
   perceive, preserve, verify, and safely do on a human's behalf.
2. **What it looks like:** source-backed examples of structure, fetch quality,
   crawler lanes, and bounded actions.

## What it is

Agentic empathy is not anthropomorphism. It is a practical design habit:
respect the agent's entry path, context budget, fetch loss, source uncertainty,
and action risk.

That makes it close to familiar UX empathy, but aimed at a different immediate
reader. Human UX empathy asks what the visitor is trying to do and where the
experience creates friction. Agentic empathy asks what a constrained,
tool-using agent can perceive and carry forward while acting for a human.

## Why it matters

Agents increasingly mediate discovery, citation, comparison, and actions. If a
site's truth does not survive fetch, parsing, citation, and action boundaries,
the agent may guess, skip the site, cite a competitor, or follow an unsafe
affordance.

Microsoft's [Design Foundations for Agents](https://learn.microsoft.com/en-us/agents/design-guidelines/design-foundations)
is useful general support for this framing: trusted agent experiences require
more than visual polish, including reliability, safety, privacy, transparency,
accountability, human-centered scope, and error recovery.

This page expands the source-linked examples from the slide deck.

## Source examples

| Example                                                                                                                                                                                                                                                                                                           | What it teaches                                                                                                                         | Why it matters                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| [Vercel Agent Readability](https://vercel.com/kb/guide/agent-readability-spec)                                                                                                                                                                                                                                    | Agent-readable pages need discoverable structure, metadata, context, Markdown-friendly content, and validation.                         | Structure is empathy: it gives agents a predictable path through the page.                                     |
| [Cloudflare AI consumability](https://developers.cloudflare.com/style-guide/how-we-docs/ai-consumability/) and [Markdown for Agents](https://developers.cloudflare.com/fundamentals/reference/markdown-for-agents/)                                                                                               | A large docs site can expose `index.md`, `llms.txt`, `llms-full.txt`, page-level Markdown, and content negotiation.                     | Markdown and source maps are useful affordances, but they should point back to maintained source content.      |
| [Agent-Friendly Documentation Spec](https://www.agentdocsspec.com/spec/)                                                                                                                                                                                                                                          | Coding agents can lose content through truncation, tabbed docs, redirects, soft 404s, auth gates, broken Markdown, and oversized pages. | Fetch loss is real. If the important answer disappears in serialization, the agent may never see it.           |
| [OpenAI crawlers](https://platform.openai.com/docs/bots), [Anthropic crawler controls](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler), and [Perplexity crawlers](https://docs.perplexity.ai/docs/resources/perplexity-crawlers) | Search/index crawlers, user-directed fetchers, and training/model-development crawlers are separate policy lanes.                       | Entry path matters. "Block AI bots" is too blunt when the site still wants AI-search or user-fetch visibility. |
| [Microsoft agentic risk guidance](https://learn.microsoft.com/en-us/security/zero-trust/sfi/manage-agentic-risk) and [Simon Willison on the lethal trifecta](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/)                                                                                          | Tool-using agents need boundaries around permissions, approvals, logs, private data, untrusted content, and external communication.     | Actions need boundaries. A capability signal should describe something real, scoped, and monitored.            |

## Empathy map

| Agent question    | Website signal                                                                   |
| ----------------- | -------------------------------------------------------------------------------- |
| Can I find it?    | Sitemap, internal links, `llms.txt`, and search crawler access.                  |
| Can I fetch it?   | Clean `200` responses, low redirects, WAF allowlists, and user-fetch bot access. |
| Can I parse it?   | Semantic HTML, clear headings, low boilerplate, and Markdown alternatives.       |
| Can I trust it?   | Dates, authorship, visible sources, methodology, and schema parity.              |
| Can I cite it?    | Short answer passages, named entities, stable URLs, and visible facts.           |
| Can I act safely? | Real APIs or tools, explicit auth, scoped permissions, approvals, and logs.      |

## Talk wording

- "Empathy here does not mean the agent has emotions. It means we respect its constraints."
- "The agent may be reading a compressed, converted, truncated version of the page."
- "A pretty accordion can be a hostile document if the answer disappears in serialization."
- "Dates, sources, and direct answer passages are not SEO tricks. They are how an agent knows what it can responsibly quote."
- "Do not make fake doors for agents. If a manifest says there is a tool, auth flow, or API, it needs to be real."

## Related reference pages

- [Practical Agent Readiness Audit Priority](/reference/practical-audit-priority/)
- [WordPress Agent-Ready Tooling](/reference/wordpress-tooling/)
- [Resources](/resources/)
