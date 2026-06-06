# Codeable Agent Readiness Skill Chat

Source deck for the public `/slides/` page on `agentready.samcarlton.com`.

Render the deployable HTML from the repo root:

```bash
npx --yes @marp-team/marp-cli@latest slides/codeable-agent-readiness-skill-chat/slides.md --theme slides/codeable-agent-readiness-skill-chat/theme.css --html --output apps/examples-docs/public/slides/index.html
```

The generated HTML is committed under `apps/examples-docs/public/slides/` so the Starlight static Worker can serve it at `/slides/`.
