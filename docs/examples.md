# Agent Ready Examples

## SBC4

- `Tease:` The examples directory is now a refreshable evidence set, not a one-off snapshot.
- `Lede:` The generated examples capture dated artifacts from major docs platforms and contrast sites for `robots.txt`, `sitemap.xml`, `llms.txt`, DNS, summary-first HTTP evidence, request/response transcripts, HAR-style metadata, and optional agent-facing files.
- `Why it matters:`
  - Agent-readiness audits need concrete network evidence, not claims.
  - Large public files should be sampled and marked, not copied wholesale into the repo.
  - Missing files are useful findings when the site is otherwise high quality.
- `Go deeper:` Refresh snapshots with `bun run examples:capture` before using them in a live talk or product recommendation.

**Captured:** See [examples/README.md](https://github.com/ThatGuySam/agentready/tree/main/examples) for the latest generated timestamp.

For the ranked list of future fixture sources, see
[Agent Ready Example Site Candidates](./example-site-candidates-2026-06-02.md).

## Refresh

```bash
bun run examples:capture
```

The script writes each site to `examples/<site-slug>/` with:

- `README.md`
- `metadata.json`
- `dns.txt` and `dns.json`
- `http-evidence.md`
- `http-transcript.md`
- `http.har.json`
- endpoint files such as `robots.txt`, `sitemap.xml`, `llms.txt`, `llms-full.sample.txt`, and `.well-known/agent-skills/index.json`

## Site Groups

| Group                           | Directories                                                                                                                                                                   | What They Show                                                                                                                      |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Positive docs/platform fixtures | `cloudflare-developers/`, `perplexity-docs/`, `model-context-protocol/`, `claude-platform/`, `vercel/`, `openai-api-docs/`, `github-docs/`, `stripe-docs/`, `langchain-docs/` | Good current examples of agent-readable docs, generated Markdown, docs APIs, `llms.txt`, `llms-full.txt`, and agent skills indexes. |
| Root-domain contrasts           | `cloudflare-root/`, `openai-root/`, `anthropic-root/`, `perplexity-root/`                                                                                                     | Shows how corporate roots can differ from docs/platform subdomains.                                                                 |
| Traditional docs contrasts      | `google-developers/`, `google-ai/`, `supabase-docs/`                                                                                                                          | Strong crawl and sitemap basics without checked `llms.txt` support.                                                                 |
| Redirect-trap examples          | `llamaindex-docs/`, `cursor-docs/`                                                                                                                                            | Endpoints that can return HTML instead of clean artifact files, useful for false-positive detection.                                |

## Refresh Pattern

```bash
curl -fsS -L https://example.com/robots.txt
curl -fsSI -L https://example.com/robots.txt
curl -fsS -L https://example.com/sitemap.xml
curl -fsS -L https://example.com/llms.txt
dig +short example.com A
```

Record the date, URL, and command. Redact dynamic cookies or one-time request IDs.
