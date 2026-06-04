# Cloudflare Developers

**Captured:** 2026-06-04T21:48:12.668Z

**Homepage:** [https://developers.cloudflare.com/](https://developers.cloudflare.com/)

**Category:** positive

Gold-standard docs fixture with robots Content Signals, llms files, agent skills JSON, and Markdown negotiation.

## Files

- [metadata.json](./metadata.json) - full machine-readable capture metadata.
- [dns.txt](./dns.txt) and [dns.json](./dns.json) - DNS records for `developers.cloudflare.com`.
- [http-evidence.md](./http-evidence.md) - summary-first GitHub-readable HTTP evidence.
- [http-transcript.md](./http-transcript.md) - readable curl-style request/response evidence.
- [http.har.json](./http.har.json) - HAR-style request/response metadata.

## Endpoint Artifacts

| Endpoint                 | Source URL                                                                           | Status | Content Type                    | Saved Body                                                                   | Truncated |
| ------------------------ | ------------------------------------------------------------------------------------ | ------ | ------------------------------- | ---------------------------------------------------------------------------- | --------- |
| robots.txt               | [URL](https://developers.cloudflare.com/robots.txt)                                  | 200    | text/plain                      | [robots.txt](./robots.txt)                                                   | no        |
| sitemap.xml              | [URL](https://developers.cloudflare.com/sitemap.xml)                                 | 200    | application/xml                 | [sitemap.xml](./sitemap.xml)                                                 | no        |
| llms.txt                 | [URL](https://developers.cloudflare.com/llms.txt)                                    | 200    | text/plain                      | [llms.txt](./llms.txt)                                                       | no        |
| llms-full.txt            | [URL](https://developers.cloudflare.com/llms-full.txt)                               | 200    | text/markdown; charset=utf-8    | [llms-full.sample.txt](./llms-full.sample.txt)                               | yes       |
| agent skills index       | [URL](https://developers.cloudflare.com/.well-known/agent-skills/index.json)         | 200    | application/json; charset=utf-8 | [.well-known/agent-skills/index.json](./.well-known/agent-skills/index.json) | no        |
| Markdown for Agents page | [URL](https://developers.cloudflare.com/fundamentals/reference/markdown-for-agents/) | 200    | text/markdown; charset=utf-8    | [markdown-for-agents.md.txt](./markdown-for-agents.md.txt)                   | no        |

## DNS Summary

- `A`: 5 record(s)
- `AAAA`: 5 record(s)
- `CNAME`: 0 record(s)
- `HTTPS`: 5 record(s)
- `TXT`: 2 record(s)
