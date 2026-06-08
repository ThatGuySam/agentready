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

<!-- _class: section -->

# Intro

<!--
Speaker note:
Reset the room before introducing yourself. This mirrors the OBA 2026 intro rhythm.
-->

---

<!-- _class: claim -->

## Hey, I'm Sam.

<!--
Speaker note:
- Sam Carlton
- Tulsa native
- Been building and consulting on software for over 15 years
- VP of Techlahoma
- Built products used by NFL, Virgin Brands, Samsung, Aston Martin
- Maintain many open source projects for the community helping thousands of developers.
- Love grilling, Wagyu, and grandMA lighting consoles.
-->

---

<!-- _class: quote -->

## Disclaimer

> AI facts are perishable. Model behavior, vendor terms, crawler behavior, and search surfaces can change faster than an Elementor layout after someone finds the Custom CSS box.

<!--
Speaker note:
Use this to set the evidence standard. The talk is about durable audit habits, not permanent claims about any one provider.
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

<!-- _class: terms appendix compact -->

## Landscape of terms

| Term                 | Who uses it                           | Useful translation                             |
| -------------------- | ------------------------------------- | ---------------------------------------------- |
| GEO                  | Bing, iPullRank, a16z, SEO vendors    | Generative answer grounding and citations      |
| AEO                  | HubSpot, Profound, marketing teams    | Brand presence in answer engines               |
| AI search visibility | Profound, iPullRank, enterprise tools | Mentions, citations, share of voice, sentiment |
| Agent readiness      | Cloudflare, checker tools             | Can agents fetch, read, and use the site?      |
| Agent readability    | Vercel, docs tooling                  | Is the page easy for agents to parse?          |
| AI features          | Google Search Central                 | Google-specific AI Overview / AI Mode guidance |

<!--
Speaker note:
Name the terminology without letting the acronyms take over the talk. Source anchors: Bing uses GEO in Webmaster Guidelines and AI Performance reporting; HubSpot and Profound use AEO/answer-engine language; Ahrefs treats GEO/AEO/LLMO as overlapping SEO trade labels; Semrush uses AIO as product/category language; Cloudflare and Vercel split readiness/readability; Google avoids special "AI SEO" files and frames this under AI features in Search. If LLMO or AIO comes up, treat them as terms to recognize, not client-facing labels to lead with.
-->

---

<!-- _class: evidence empathy -->

## Agentic empathy = reduce uncertainty

<div class="source-grid">
  <a class="source-card" href="https://vercel.com/kb/guide/agent-readability-spec"><strong>Structure is empathy.</strong><span>Clean metadata, headings, and context make pages easier for agents to parse.</span><em>Vercel Agent Readability</em></a>
  <a class="source-card" href="https://www.agentdocsspec.com/spec/"><strong>Fetch loss is real.</strong><span>Tabs, truncation, redirects, auth gates, and broken Markdown can hide the answer.</span><em>Agent-Friendly Documentation Spec</em></a>
  <a class="source-card" href="https://platform.openai.com/docs/bots"><strong>Entry path matters.</strong><span>Search crawlers, user fetchers, and training crawlers are different policy lanes.</span><em>OpenAI crawler docs</em></a>
  <a class="source-card" href="https://learn.microsoft.com/en-us/security/zero-trust/sfi/manage-agentic-risk"><strong>Actions need boundaries.</strong><span>Tools need permissions, approvals, logs, and honest capability signals.</span><em>Microsoft agentic risk</em></a>
</div>

<p class="takeaway">Design for what an agent can find, fetch, parse, cite, and safely do.</p>

<!--
Speaker note:
Shift from acronym vocabulary to the practical habit: imagine what an agent can fetch, parse, compare, cite, and safely do when it lands on the site. The slide links are expandable source paths for Vercel/Cloudflare-style readability, AFDocs fetch-loss checks, crawler-lane policy, and bounded agent actions.
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

| Job                  | Tools                                                                               |
| -------------------- | ----------------------------------------------------------------------------------- |
| Protocol scan        | `isitagentready.com`, Cloudflare URL Scanner, `isagentready.com`, `agent-ready.dev` |
| Docs/readability     | `afdocs`, Vercel Agent Readability                                                  |
| Basic hygiene        | Lighthouse, PageSpeed Insights, devtools                                            |
| Structured data      | Rich Results Test, Schema Markup Validator                                          |
| Deterministic probes | `curl`, `jq`, raw HTML inspection                                                   |
| Search evidence      | Google Search Console, Bing Webmaster Tools                                         |

<!--
Speaker note:
Keep this practical. Show that the category is becoming real enough to audit, while still requiring judgment about what applies to a specific site. This slide absorbs the old "useful tool stack by job" appendix.
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

<!-- _class: appendix compact -->

## Keep WordPress tooling boring

- **WordPress core:** `Settings -> Reading`, `Settings -> Permalinks`, `Appearance -> Editor/Customize`, clean pages and posts
- **Yoast, if it is already installed:** `Yoast SEO -> Settings -> Site features -> llms.txt`, `Yoast SEO -> Tools -> File editor`, one sitemap/schema owner
- **Agentic discovery in theme or plugin:** block theme, child theme, mu-plugin, or small focused plugin; no fake MCP/API/OAuth files
- **Custom plugins:** roll exactly what you need using official [WP Agent Skills](https://github.com/WordPress/agent-skills) and Codeable Agent Coding standards
- **Audit outside WordPress:** `curl`, WP-CLI, schema validators, `isitagentready.com`, logs, repeated prompt/source checks
- Full Starlight version: [agentready.samcarlton.com/reference/wordpress-tooling](https://agentready.samcarlton.com/reference/wordpress-tooling/)

<!--
Speaker note:
Define WordPress core in admin terms: Reading controls public indexability, Permalinks controls stable URL shape, Editor or Customizer controls templates/navigation, and Pages/Posts control source text. Root files like robots.txt and llms.txt need one deliberate owner, usually Yoast if it is already installed or a tiny custom plugin/mu-plugin if not.
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

<!-- _class: section -->

# Questions?

<!--
Speaker note:
Pause here for room questions before moving into appendix resources.
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
