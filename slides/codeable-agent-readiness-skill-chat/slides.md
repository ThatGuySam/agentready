---
marp: true
html: true
theme: scc
size: 16:9
paginate: true
title: "Is Your Site Agent-Ready?"
description: "A practical Codeable Skill Chat deck for auditing AI discovery and agent readability"
author: "Sam Carlton"
---

<!-- _class: title -->
<!-- _paginate: false -->

# Is Your Site Agent-Ready?

A practical audit toolkit for AI discovery, readability, and honest capability signals

Sam Carlton

<!--
Speaker note:
Frame this as a practical Codeable Skill Chat for WordPress experts and client-facing developers. The goal is not to sell AI magic. The goal is to make "Can ChatGPT find us?" auditable.
-->

---

<!-- _class: claim -->

## The client question is already here: "Can ChatGPT understand my site?"

The better first answer is: which agent, doing what job?

<!--
Speaker note:
Clients may say ChatGPT, Perplexity, Claude, Gemini, "AI search," or "agents." The first useful move is not to answer yes/no. It is to clarify which system and which task.
-->

---

<!-- _class: claim -->

## Agent readiness is not one score

It is part technical hygiene, part content strategy, and part trust-boundary design.

<!--
Speaker note:
A scanner score can start the conversation, but the service is the interpretation and fix plan. This is the bridge from familiar performance/SEO audits to agent readiness.
-->

---

<!-- _class: stack -->

## Useful audits separate four jobs

<div class="steps">
  <div class="step"><strong>Crawlability</strong>Can agents find and fetch the public pages?</div>
  <div class="step"><strong>Readability</strong>Can they extract the useful answer without a full browser?</div>
  <div class="step"><strong>Trust</strong>Can they cite claims, dates, methods, and sources?</div>
  <div class="step"><strong>Capabilities</strong>Can they safely use real APIs, tools, or commerce flows?</div>
</div>

<!--
Speaker note:
This is the mental model for the rest of the talk. It also prevents overbuilding. A normal brochure site usually needs the first three more than it needs MCP, OAuth metadata, or an API catalog.
-->

---

<!-- _class: comparison -->

## The stack keeps SEO, agent readability, and protocols from blurring together

| Bucket             | Looks like                         | Common mistake                |
| ------------------ | ---------------------------------- | ----------------------------- |
| SEO hygiene        | sitemaps, canonicals, schema       | calling this "agent-ready"    |
| Agent readability  | clean source, Markdown, `llms.txt` | hiding answers in UI chrome   |
| Protocol readiness | API catalog, MCP, OAuth, A2A       | advertising fake capabilities |
| Answer visibility  | monitoring cited answers           | promising rankings too early  |

<!--
Speaker note:
The audience already understands SEO and performance audits. This slide positions agent readiness as adjacent, not identical. Source anchors: Cloudflare Agent Readiness, llms.txt proposal, Vercel Agent Readability guidance, MCP specification.
-->

---

<!-- _class: decision -->

## The expert service is interpreting what applies

<div class="decision-grid">
  <div class="decision-card good"><strong>Good audit language</strong><br><br>Fix this now.<br>Defer this.<br>This is not applicable.<br>Do not implement this unless the capability is real.</div>
  <div class="decision-card bad"><strong>Risky audit language</strong><br><br>Install whatever raises the score.<br>Add fake metadata.<br>Promise AI rankings.<br>Treat every protocol as mandatory.</div>
</div>

<!--
Speaker note:
This is where Codeable expertise matters. The client is buying judgment: what to fix, what to ignore, and what not to fake. Cloudflare's scanner is useful because it catches gaps normal SEO tools miss, but some checks are not applicable to ordinary content sites.
-->

---

<!-- _class: workflow -->

## The live audit should show what agents actually receive

<div class="steps">
  <div class="step"><strong>Fetch</strong>HTTP status, redirects, raw HTML, robots, sitemap</div>
  <div class="step"><strong>Parse</strong>Main content, schema, titles, dates, author/source signals</div>
  <div class="step"><strong>Scan</strong>`isitagentready.com`, Lighthouse, schema validators</div>
  <div class="step"><strong>Classify</strong>Fix now, defer, not applicable, do not implement</div>
</div>

<!--
Speaker note:
This keeps the demo from becoming tool theater. The important proof is whether public source material is reachable, parseable, and honest.
-->

---

<!-- _class: evidence -->

## The simplest demo commands are still powerful

```bash
curl -i https://example.com/
curl -sS https://example.com/robots.txt
curl -sS https://example.com/sitemap.xml
curl -sS https://example.com/llms.txt
curl -sSI -H 'Accept: text/markdown' https://example.com/
```

<!--
Speaker note:
Keep the code short and explain what each command proves. This is not about being fancy. It is about showing what a non-browser fetch receives.
-->

---

<!-- _class: comparison -->

## Familiar tools help, but they do not answer the whole question

| Tool               | Helps with                                    | Does not prove                  |
| ------------------ | --------------------------------------------- | ------------------------------- |
| Lighthouse         | performance, accessibility, semantic controls | `llms.txt`, MCP, crawler policy |
| `llms.txt`         | curated entrypoints                           | ranking or citation             |
| Schema validators  | structured data correctness                   | agent task completion           |
| AI answer monitors | visibility snapshots                          | root-cause readiness            |

<!--
Speaker note:
Keep running familiar tools. Just do not pretend they answer the entire agent-readiness question.
-->

---

<!-- _class: evidence -->

## Real agents often need plain source material

- direct answer blocks
- clear service and location pages
- visible dates, authorship, methods, and sources
- clean text alternatives for high-value pages
- stable internal links through the corpus

<!--
Speaker note:
This is the highest-leverage advice for many WordPress client sites. Improve the page as a source before chasing advanced protocol surfaces.
-->

---

<!-- _class: compact comparison -->

## AI search is not one search engine

| Surface              | Publicly visible path                           | Audit implication               |
| -------------------- | ----------------------------------------------- | ------------------------------- |
| ChatGPT / OpenAI API | `web_search`, crawlers, citations               | crawler lane policy matters     |
| Codex                | cached/live search, shell network, browser      | record which mode was used      |
| Claude API           | search, fetch, dynamic filtering                | domains and tool version matter |
| Claude Code          | `WebSearch` then `WebFetch` Markdown conversion | search is not ingestion         |
| Gemini / Vertex      | Google Search grounding metadata                | Google substrate is explicit    |
| Perplexity           | Sonar plus Search API                           | product path matters            |
| OpenCode / OpenClaw  | provider-configured search                      | inspect config before claims    |

<!--
Speaker note:
The point is not to memorize every provider. The point is to stop saying "AI search" as if it is a single SERP. Source anchors: OpenAI web search docs, Codex CLI features, Anthropic web search and web fetch docs, Claude Code tools reference, Gemini grounding docs, Perplexity Search API, OpenCode tools, OpenClaw web tools.
-->

---

<!-- _class: lanes -->

## Crawler policy needs separate lanes

<div class="lane-grid">
  <div class="lane search"><strong>Search / index</strong><code>OAI-SearchBot</code><br><code>Claude-SearchBot</code><br><code>PerplexityBot</code></div>
  <div class="lane fetch"><strong>User fetch</strong><code>ChatGPT-User</code><br><code>Claude-User</code><br><code>Perplexity-User</code></div>
  <div class="lane train"><strong>Training / model development</strong><code>GPTBot</code><br><code>ClaudeBot</code><br>separate policy choice</div>
</div>

<!--
Speaker note:
This is one of the most client-useful distinctions. Blocking training and appearing in AI search answers are not the same policy. Check each vendor's crawler docs before changing robots rules.
-->

---

<!-- _class: service -->

## A useful WordPress offer has three deliverables

<div class="service-grid">
  <div class="service"><strong>Readiness report</strong>What agents can find, fetch, parse, and cite today.</div>
  <div class="service"><strong>Fix plan</strong>Low-risk changes, deferred items, and not-applicable standards.</div>
  <div class="service"><strong>Visibility measurement</strong>Optional answer-engine tracking after basics are correct.</div>
</div>

<!--
Speaker note:
This keeps the scope clean. The first sale is not "we will make you rank in ChatGPT." It is a discovery audit and prioritized fix plan.
-->

---

<!-- _class: evidence -->

## Most client fixes look familiar, but the justification changes

- robots, sitemap, canonicals, schema
- clearer service and location pages
- `llms.txt` that points to canonical pages
- Markdown mirrors for high-value content
- source, methodology, and correction paths

<!--
Speaker note:
WordPress experts already know many of these mechanics. The new angle is making pages useful to retrieval and answer systems, not only browser users and search crawlers.
-->

---

<!-- _class: decision -->

## Do not publish fake capability surfaces

<div class="decision-grid">
  <div class="decision-card bad"><strong>Do not fake</strong><br><br>API catalogs<br>OAuth metadata<br>MCP server cards<br>A2A / WebMCP<br>commerce metadata</div>
  <div class="decision-card good"><strong>Publish only when real</strong><br><br>If a client would expect to call it, initialize it, authenticate with it, or buy through it, it needs to work.</div>
</div>

<!--
Speaker note:
This is a trust boundary. Placeholder protocol surfaces create worse client risk than a lower scanner score.
-->

---

<!-- _class: comparison -->

## Use safer claims when talking to clients

| Avoid saying                       | Say instead                                        |
| ---------------------------------- | -------------------------------------------------- |
| "This will make ChatGPT rank you." | "This improves findability and readability."       |
| "Every site needs MCP."            | "Protocols apply only when capabilities are real." |
| "`llms.txt` is AI SEO."            | "`llms.txt` is a curated entrypoint."              |
| "The score is the strategy."       | "The score starts the audit."                      |

<!--
Speaker note:
The short client script: "I can audit whether AI systems can find, fetch, understand, and cite your site. Then we can fix the real gaps."
-->

---

<!-- _class: workflow -->

## The practical checklist is short enough to run

<div class="steps">
  <div class="step"><strong>Find</strong>robots, sitemap, canonical URLs, indexed public pages</div>
  <div class="step"><strong>Read</strong>clean HTML, Markdown, direct answer sections</div>
  <div class="step"><strong>Trust</strong>dates, sources, schema consistency, correction path</div>
  <div class="step"><strong>Decide</strong>fix now, defer, not applicable, do not implement</div>
</div>

<!--
Speaker note:
The full checklist is in the research draft. This slide is the talk-level version.
-->

---

<!-- _class: claim -->

## Final takeaway: sell legibility

The best agent-ready sites are usually the clearest sites.

<!--
Speaker note:
Close with the thesis. Clear for people, clear for crawlers, clear for agents, clear about real capabilities.
-->

---

<!-- _class: appendix compact -->

## Appendix: useful tool stack by job

| Job                  | Tools                                                 |
| -------------------- | ----------------------------------------------------- |
| Protocol scan        | `isitagentready.com`, Cloudflare URL Scanner          |
| Docs/readability     | `afdocs`, Vercel Agent Readability, `agent-ready.dev` |
| Basic hygiene        | Lighthouse, PageSpeed Insights, devtools              |
| Structured data      | Rich Results Test, Schema Markup Validator            |
| Deterministic probes | `curl`, `jq`, raw HTML inspection                     |
| Search evidence      | Google Search Console, Bing Webmaster Tools           |

<!--
Speaker note:
Keep this as a backup slide or handout material. The main talk should stay on the audit model, not the tool list.
-->

---

<!-- _class: appendix compact -->

## Appendix: confirmed versus inferred

**Confirmed:** public docs expose different tools, crawler identities, filtering knobs, and fetch behavior.

**Inferred:** internal ranking, upstream providers, and product-UI orchestration are not fully disclosed.

**Recommended wording:** "We can make your site easier for agent systems to fetch and cite; we cannot guarantee a specific model's answer ranking."

<!--
Speaker note:
Use this if someone asks how certain we can be about ChatGPT, Claude, Gemini, or Perplexity internals. Keep the distinction crisp.
-->

---

<!-- _class: appendix compact -->

## Appendix: source trail

- Cloudflare Agent Readiness and `isitagentready.com`
- `llms.txt`, Vercel Agent Readability, Agent-Friendly Documentation Spec
- OpenAI web search, crawlers, and Codex search docs
- Anthropic web search/fetch, crawler controls, Claude Code tools
- Gemini/Vertex grounding, Perplexity Sonar/Search, Microsoft Bing grounding
- OpenCode and OpenClaw web tool docs

<!--
Speaker note:
The full direct URL list lives in docs/agentready/research/codeable-agent-readiness-skill-chat-draft-2026-05-26.md.
-->
