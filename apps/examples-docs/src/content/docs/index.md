---
title: AgentReady Examples
description: Search and browse captured examples of agent-facing website surfaces.
---

<section class="bluf-summary" aria-label="Page summary">
  <details class="bluf-summary__item" open>
    <summary>Bottom line</summary>
    <p>AgentReady Examples is a searchable evidence library for agent-facing web surfaces, not a live scanner result.</p>
  </details>
  <details class="bluf-summary__item">
    <summary>Is this relevant?</summary>
    <p>Use this site when you need to understand what real captured evidence looks like for crawler policy, sitemaps, LLM files, Markdown alternatives, agent skills, and redirect traps.</p>
  </details>
  <details class="bluf-summary__item">
    <summary>Evidence</summary>
    <p>Each generated example links back to raw GitHub evidence and records dated endpoint captures.</p>
  </details>
  <details class="bluf-summary__item">
    <summary>Next action</summary>
    <p>Start with the practical audit checklist or browse by surface if you already know which artifact you want to compare.</p>
  </details>
  <details class="bluf-summary__item">
    <summary>Caveat</summary>
    <p>Public sites change often, so use these pages as examples of evidence shape and audit interpretation rather than guaranteed-current target-site claims.</p>
  </details>
</section>

AgentReady Examples turns the generated `examples/` evidence directory into a
searchable reference site.

The site is built from dated snapshots, not live claims. Each example page
summarizes what was captured, links back to raw evidence in GitHub, and calls out
common agent-facing surfaces:

- crawl policy with `robots.txt`
- discovery with `sitemap.xml`
- LLM and agent text surfaces such as `llms.txt` and `llms-full.txt`
- readable Markdown alternatives
- capability discovery such as `.well-known/agent-skills/index.json`
- redirect and status traps that can fool shallow checks

## Start browsing

- [Browse all examples](./examples/)
- [Browse positive examples](./examples/positive/)
- [Browse contrast examples](./examples/contrast/)
- [Browse redirect traps](./examples/redirect-traps/)
- [Browse by surface](./patterns/)
- [Understand evidence files](./reference/evidence-files/)
- [Use the weighted practical audit checklist](./reference/practical-audit-priority/)
- [Use the WordPress agent-ready tooling guide](./reference/wordpress-tooling/)
- [Use starter resources](./resources/)
- [View the Codeable Skill Chat slides](https://agentready.samcarlton.com/slides/)

## Snapshot caveat

The examples are dated captures. Public sites change often, so use these pages
as examples of evidence shape and audit interpretation, not as guaranteed-current
statements about the target sites.
