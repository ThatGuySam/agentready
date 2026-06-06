---
title: AgentReady Examples
description: Search and browse captured examples of agent-facing website surfaces.
---

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
- [Use starter resources](./resources/)

## Snapshot caveat

The examples are dated captures. Public sites change often, so use these pages
as examples of evidence shape and audit interpretation, not as guaranteed-current
statements about the target sites.
