# Perplexity Docs

**Captured:** 2026-06-02T19:28:00.989Z

**Homepage:** [https://docs.perplexity.ai/](https://docs.perplexity.ai/)

**Category:** positive

AI-search docs fixture with crawler docs, llms files, and agent skills JSON.

## Files

- [metadata.json](./metadata.json) - full machine-readable capture metadata.
- [dns.txt](./dns.txt) and [dns.json](./dns.json) - DNS records for `docs.perplexity.ai`.
- [http-transcript.md](./http-transcript.md) - readable curl-style request/response evidence.
- [http.har.json](./http.har.json) - HAR-style request/response metadata.

## Endpoint Artifacts

| Endpoint           | Source URL                                                            | Status | Content Type              | Saved Body                                                                   | Truncated |
| ------------------ | --------------------------------------------------------------------- | ------ | ------------------------- | ---------------------------------------------------------------------------- | --------- |
| robots.txt         | [URL](https://docs.perplexity.ai/robots.txt)                          | 200    | text/plain                | [robots.txt](./robots.txt)                                                   | no        |
| sitemap.xml        | [URL](https://docs.perplexity.ai/sitemap.xml)                         | 200    | text/xml                  | [sitemap.xml](./sitemap.xml)                                                 | no        |
| llms.txt           | [URL](https://docs.perplexity.ai/llms.txt)                            | 200    | text/plain; charset=utf-8 | [llms.txt](./llms.txt)                                                       | no        |
| llms-full.txt      | [URL](https://docs.perplexity.ai/llms-full.txt)                       | 200    | text/plain; charset=utf-8 | [llms-full.sample.txt](./llms-full.sample.txt)                               | yes       |
| agent skills index | [URL](https://docs.perplexity.ai/.well-known/agent-skills/index.json) | 200    | application/json          | [.well-known/agent-skills/index.json](./.well-known/agent-skills/index.json) | no        |
| crawler docs page  | [URL](https://docs.perplexity.ai/docs/resources/perplexity-crawlers)  | 200    | text/html; charset=utf-8  | [perplexity-crawlers.sample.html.txt](./perplexity-crawlers.sample.html.txt) | yes       |

## DNS Summary

- `A`: 3 record(s)
- `AAAA`: 1 record(s)
- `CNAME`: 1 record(s)
- `HTTPS`: 3 record(s)
- `TXT`: 1 record(s)
