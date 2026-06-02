---
marp: true
theme: scc
paginate: true
size: 16:9
title: Agent Ready Is Not A Score
description: A practical talk deck for deciding which agent-readiness checks matter.
---

<!-- _class: title -->

# Agent Ready Is Not A Score

What actually helps websites work better with agents.

<span class="source">Sam Carlton Code / Agent Ready / 2026-06-02</span>

---

<!-- _class: claim -->

## A scanner can find signals.

It cannot decide whether the signal belongs on your site.

---

<!-- _class: matrix -->

## The scorecard changes the question

| Ask                               | Not                              |
| --------------------------------- | -------------------------------- |
| Does this help this site type?    | Can I make the checker green?    |
| Is the capability real?           | Can I publish metadata for it?   |
| Can agents cite or use it safely? | Did I add another protocol file? |

---

<!-- _class: evidence -->

## Highest-value baseline

<div class="cards">
  <div class="card"><strong>robots.txt</strong>9/10. Crawl policy is still the base layer.</div>
  <div class="card"><strong>AI bot lanes</strong>9/10. Search, user-fetch, and training are different policies.</div>
  <div class="card"><strong>sitemap.xml</strong>8/10. Discovery still matters.</div>
</div>

---

<!-- _class: workflow -->

## Docs and developer platforms

<div class="steps four">
  <div class="step"><strong>Readable pages</strong>Do not hide the answer behind client-only UI.</div>
  <div class="step"><strong>Markdown</strong>Prefer generated `.md` views where cheap.</div>
  <div class="step"><strong>llms.txt</strong>Useful as a curated map, not a ranking switch.</div>
  <div class="step"><strong>Examples</strong>Show headers, DNS, and source files.</div>
</div>

---

<!-- _class: comparison -->

## Capability metadata has a truth problem

| Check       | Helps when               | Fails when              |
| ----------- | ------------------------ | ----------------------- |
| API Catalog | A real API exists        | Static site with no API |
| OAuth/OIDC  | Auth is delegated        | Public content site     |
| MCP Card    | Tools are callable       | Metadata is decorative  |
| A2A Card    | You run an agent service | Normal website          |

---

<!-- _class: quote -->

> Metadata is useful only when it points to a real capability.

---

<!-- _class: evidence -->

## What the examples show

<div class="cards">
  <div class="card"><strong>OpenAI</strong>Simple robots and sitemap. `llms.txt` check is blocked.</div>
  <div class="card"><strong>Anthropic</strong>Simple robots and sitemap. `llms.txt` is absent.</div>
  <div class="card"><strong>Google</strong>Large robots policy and developers sitemap. `llms.txt` is absent.</div>
</div>

---

<!-- _class: evidence -->

## Cloudflare is the rich example

`developers.cloudflare.com` exposes:

- Content Signals in `robots.txt`
- A sitemap index
- A top-level `llms.txt`
- Product-specific `llms.txt` files
- Strong response-header evidence

---

<!-- _class: workflow -->

## Recommended audit order

<div class="steps">
  <div class="step"><strong>1. Crawl policy</strong>robots, sitemap, AI crawler lanes.</div>
  <div class="step"><strong>2. Readability</strong>Text, dates, authorship, citations, canonical URLs.</div>
  <div class="step"><strong>3. Capability proof</strong>Only add API, auth, MCP, A2A, or commerce when real.</div>
</div>

---

<!-- _class: claim -->

## Agent-ready means legible, governed, and usable.

Not merely protocol-dense.

---

<!-- _class: appendix -->

## Source stack

- Is It Agent Ready
- Cloudflare Agent Readiness
- Vercel Agent Readability
- Agent-Friendly Documentation Spec
- Google AI features and your website
- OpenAI, Anthropic, and Perplexity crawler docs
- Dries Buytaert on `llms.txt`
- Simon Willison on tool risk

<span class="source">See docs/scorecard.md for links.</span>
