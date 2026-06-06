---
marp: true
html: true
theme: scc
size: 16:9
paginate: true
title: "The Agent Readable Website"
description: "A practical Codeable Skill Chat deck for auditing AI discovery, readability, and honest capability signals"
author: "Sam Carlton"
footer: "[agentready.samcarlton.com/slides](https://agentready.samcarlton.com/slides)"
---

<!-- _class: title -->
<!-- _paginate: false -->

# The Agent Readable Website

A practical audit model for discovery, readability, citation, and real capabilities

Sam Carlton

<!--
Speaker note:
This title avoids the Cloudflare scanner's question-style phrasing and connects the talk to the Agent Readable Web direction. Frame the session for WordPress experts and client-facing developers who need a safer way to answer AI-search questions.
-->

---

<!-- _class: claim -->

## Start with the question behind the question

When a client asks, "Can ChatGPT see us?", they are really asking whether AI systems can find, read, trust, and use their source material.

<!--
Speaker note:
This is the intro slide. Do not make it a personal "Hey, I'm Sam" reset like the OBA deck. Use it to orient the room around the actual client concern and the audit promise.
-->

---

<!-- _class: comparison -->

## What this talk is not

- SEO guide or SEO for LLMs
- There's plenty of existing content for that

<!--
Speaker note:
Use this to narrow the promise early. The room does not need another generic SEO checklist.
-->

---

<!-- _class: claim -->

## What this talk is

The parts of agentic discovery that you need to know if your SEO is already good enough.

<!--
Speaker note:
Position this as the next layer after baseline SEO: discovery mechanics, source legibility, and audit language.
-->

---

<!-- _class: compact -->

## Landscape of terms

<div class="tag-row">
  <span class="tag"><strong>GEO</strong> - Bing</span>
  <span class="tag"><strong>AEO</strong></span>
</div>

<!--
Speaker note:
Name the terminology without letting the acronyms take over the talk. The useful move is translating them into client-safe audit work.
-->

---

<!-- _class: section -->

# Agentic Empathy

<!--
Speaker note:
Shift from acronym vocabulary to the practical habit: imagine what an agent can fetch, parse, compare, and cite when it lands on the site.
-->

---

<!-- _class: comparison -->

## Agentic search landscape

| Searcher |   Typical link depth |
| -------- | -------------------: |
| Human    |    1-5 links checked |
| Agent    | 50-500 links checked |

<!--
Speaker note:
The long tail with value is going to start winning over classic spammy Google techniques.
-->

---

<!-- _class: evidence -->

## Live demo

```bash
npx lighthouse@latest https://agentready.samcarlton.com \
  --only-categories=agentic-browsing \
  --output=html \
  --output-path=./lighthouse-agentic.html \
  --view
```

<!--
Speaker note:
Use this as the concrete audit bridge: a familiar Lighthouse workflow pointed at the experimental agentic-browsing category.
-->

---

<!-- _class: appendix compact -->

## Agent auditing tools

| Tool             | URL                          |
| ---------------- | ---------------------------- |
| Cloudflare       | <https://isitagentready.com> |
| Bart Waardenburg | <https://isagentready.com>   |
| Mark Lavercombe  | <https://agent-ready.dev/>   |

<!--
Speaker note:
Keep this practical. Show that the category is becoming real enough to audit, while still requiring judgment about what applies to a specific site.
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

## Keep WordPress tooling boring

- **WordPress core:** `Settings -> Reading`, `Settings -> Permalinks`, `Appearance -> Editor/Customize`, clean pages and posts
- **Yoast, if it is already installed:** `Yoast SEO -> Settings -> Site features -> llms.txt`, `Yoast SEO -> Tools -> File editor`, one sitemap/schema owner
- **Agentic discovery in theme or plugin:** block theme, child theme, mu-plugin, or small focused plugin; no fake MCP/API/OAuth files
- **Audit outside WordPress:** `curl`, WP-CLI, schema validators, `isitagentready.com`, logs, repeated prompt/source checks

<!--
Speaker note:
Define WordPress core in admin terms: Reading controls public indexability, Permalinks controls stable URL shape, Editor or Customizer controls templates/navigation, and Pages/Posts control source text. Root files like robots.txt and llms.txt need one deliberate owner, usually Yoast if it is already installed or a tiny custom plugin/mu-plugin if not.
-->

---

<!-- _class: appendix compact -->

## Appendix: resources

- [Practical audit checklist](https://agentready.samcarlton.com/reference/practical-audit-priority/) - 80/20 checklist for fetchability, crawler lanes, extractability, `llms.txt`, Markdown, parity, and real capabilities.
- [AgentReady resource site](https://agentready.samcarlton.com/resources/) - public handout page for the starter links, so attendees have one durable URL to revisit.
- [Live slide deck](https://agentready.samcarlton.com/slides/) - published version of this Codeable Skill Chat deck for follow-up review.
- [Agent Led Growth](https://www.youtube.com/watch?v=RyTwRCKeDo4) - Sequoia and Profound on agents becoming a discovery and purchase interface for brands.
- [AEO is the New SEO](https://www.listennotes.com/podcasts/always-be-testing/saas-class-ep-1-aeo-is-the-7UyGvP1j8sf/) - HubSpot and Webflow operator framing around content, technical, authority, and measurement work.
- [Visibility in AI Search](https://www.youtube.com/watch?v=ukpU-EfRtV4) - iPullRank session on query fan-out, extractable passages, omnimedia coverage, and AI-search measurement.
- [Lighthouse agentic browsing scoring](https://developer.chrome.com/docs/lighthouse/agentic-browsing/scoring) - official Chrome reference for experimental agentic-browsing audit signals.

<!--
Speaker note:
Use these as the short follow-up list. The practitioner links are useful for strategy and measurement framing; the checklist and Lighthouse docs are useful for implementation.
-->
