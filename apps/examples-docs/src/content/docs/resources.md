---
title: Resources
description: Starter links for agent readiness, AEO, AI search visibility, and Lighthouse agentic browsing audits.
---

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
- [WordPress Agent-Ready Tooling](/reference/wordpress-tooling/) - practical
  WordPress admin, SEO plugin, theme, page-builder, and audit-tool guidance for
  keeping agent-readiness work boring.
- [Google Lighthouse agentic browsing scoring](https://developer.chrome.com/docs/lighthouse/agentic-browsing/scoring) -
  official scoring reference for Lighthouse's `agentic-browsing` category.

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
