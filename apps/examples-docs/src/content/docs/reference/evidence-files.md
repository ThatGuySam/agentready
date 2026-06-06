---
title: Evidence Files
description: What each generated AgentReady example file means.
---

<section class="bluf-summary" aria-label="Page summary">
  <details class="bluf-summary__item" open>
    <summary>Bottom line</summary>
    <p>Generated pages are summaries; the raw evidence files remain the source of truth.</p>
  </details>
  <details class="bluf-summary__item">
    <summary>Is this relevant?</summary>
    <p>Use this page when you need to know which file proves endpoint status, headers, redirects, truncation, DNS, or saved body content.</p>
  </details>
  <details class="bluf-summary__item">
    <summary>Evidence</summary>
    <p>The file table explains metadata JSON, DNS files, HTTP transcripts, HAR metadata, endpoint status files, and saved endpoint bodies.</p>
  </details>
  <details class="bluf-summary__item">
    <summary>Next action</summary>
    <p>Use the generated example first, then open raw files when a status, redirect, truncation flag, or body sample affects the recommendation.</p>
  </details>
</section>

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
