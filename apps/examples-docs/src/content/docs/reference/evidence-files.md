---
title: Evidence Files
description: What each generated AgentReady example file means.
---

Each example page is generated from the AgentReady `examples/` directory. The
raw files remain the source of truth.

## Files

| File                 | Purpose                                                                                                                           |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `metadata.json`      | Site metadata, endpoint statuses, effective URLs, content types, byte counts, and truncation flags.                               |
| `dns.txt`            | Human-readable DNS lookup output.                                                                                                 |
| `dns.json`           | Machine-readable DNS lookup evidence.                                                                                             |
| `http-transcript.md` | Human-readable curl-style request and response evidence.                                                                          |
| `http.har.json`      | HAR-style request and response metadata.                                                                                          |
| `*.status.json`      | Status metadata for a specific endpoint body.                                                                                     |
| Endpoint bodies      | Saved bodies such as `robots.txt`, `sitemap.xml`, `llms.txt`, `llms-full.sample.txt`, Markdown samples, and agent skills indexes. |

## Reading a generated page

Use the generated page first for a concise summary. Follow raw evidence links
when you need to inspect headers, redirects, truncation, or body content.

Large bodies are sampled in the examples directory and marked with
`truncated: true` in the matching status file. Missing endpoint bodies can still
be useful evidence when a request returned a status-only result.
