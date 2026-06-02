# GitHub Docs

**Captured:** 2026-06-02T19:28:00.989Z

**Homepage:** [https://docs.github.com/](https://docs.github.com/)

**Category:** positive

Docs fixture with llms.txt and API-shaped article body access.

## Files

- [metadata.json](./metadata.json) - full machine-readable capture metadata.
- [dns.txt](./dns.txt) and [dns.json](./dns.json) - DNS records for `docs.github.com`.
- [http-transcript.md](./http-transcript.md) - readable curl-style request/response evidence.
- [http.har.json](./http.har.json) - HAR-style request/response metadata.

## Endpoint Artifacts

| Endpoint         | Source URL                                                                                                       | Status | Content Type                 | Saved Body                                       | Truncated |
| ---------------- | ---------------------------------------------------------------------------------------------------------------- | ------ | ---------------------------- | ------------------------------------------------ | --------- |
| robots.txt       | [URL](https://docs.github.com/robots.txt)                                                                        | 200    | text/plain; charset=utf-8    | [robots.txt](./robots.txt)                       | no        |
| sitemap.xml      | [URL](https://docs.github.com/sitemap.xml)                                                                       | 404    | text/html; charset=utf-8     | status only                                      | no        |
| llms.txt         | [URL](https://docs.github.com/llms.txt)                                                                          | 200    | text/markdown; charset=utf-8 | [llms.txt](./llms.txt)                           | no        |
| article body API | [URL](https://docs.github.com/api/article/body?pathname=/en/get-started/start-your-journey/about-github-and-git) | 200    | text/markdown; charset=utf-8 | [article-body-api.json](./article-body-api.json) | no        |

## DNS Summary

- `A`: 4 record(s)
- `AAAA`: 4 record(s)
- `CNAME`: 0 record(s)
- `HTTPS`: 4 record(s)
- `TXT`: 0 record(s)
