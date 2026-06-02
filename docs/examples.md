# Agent Ready Examples

## SBC4

- `Tease:` The examples directory shows what evidence looks like, not a permanent truth source.
- `Lede:` The snapshots capture small, dated examples from OpenAI, Anthropic, Google, and Cloudflare for `robots.txt`, `sitemap.xml`, `llms.txt`, DNS, and request/response headers.
- `Why it matters:`
  - Agent-readiness audits need concrete network evidence, not claims.
  - Large public files should be sampled, not copied wholesale into the repo.
  - Missing files are useful findings when the site is otherwise high quality.
- `Go deeper:` Refresh snapshots before using them in a live talk or product recommendation.

**Captured:** 2026-06-02

For the ranked list of future fixture sources, see
[Agent Ready Example Site Candidates](./example-site-candidates-2026-06-02.md).

| Site                           | Directory              | What It Shows                                                                                          |
| ------------------------------ | ---------------------- | ------------------------------------------------------------------------------------------------------ |
| OpenAI                         | `examples/openai/`     | Simple `robots.txt`, sitemap index, DNS, response headers, and a blocked `llms.txt` check.             |
| Anthropic                      | `examples/anthropic/`  | Simple `robots.txt`, sitemap URL set, DNS, response headers, and absent `llms.txt`.                    |
| Google / developers.google.com | `examples/google/`     | Large-scale robots policy, developer-docs sitemap index, DNS, response headers, and absent `llms.txt`. |
| Cloudflare Developers          | `examples/cloudflare/` | Content Signals in `robots.txt`, sitemap index, `llms.txt`, DNS, and response headers.                 |

## Refresh Pattern

```bash
curl -fsS -L https://example.com/robots.txt
curl -fsSI -L https://example.com/robots.txt
curl -fsS -L https://example.com/sitemap.xml
curl -fsS -L https://example.com/llms.txt
dig +short example.com A
```

Record the date, URL, and command. Redact dynamic cookies or one-time request IDs.
