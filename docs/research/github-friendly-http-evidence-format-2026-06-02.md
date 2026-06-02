# GitHub-Friendly HTTP Evidence Format

- `Tease:` Replace raw terminal-style curl logs with scannable HTTP evidence cards.
- `Lede:` The current `http-transcript.md` files are technically complete, but GitHub readers have to wade through long curl commands and giant header blocks before seeing the useful evidence. A better default is a Markdown-first inspection report with summary tables, collapsible details, and structured JSON/HAR sidecars.
- `Why it matters:`
  - Agent-readiness examples are audit evidence; readers need fast answers before raw detail.
  - GitHub renders Markdown tables, fenced code blocks, and collapsed sections well without extra assets.
  - Keeping HAR/status JSON sidecars preserves machine readability while the Markdown view optimizes for human review.
- `Go deeper:`
  - Keep `http.har.json` for structured request/response metadata.
  - Generate `http-evidence.md` or refactor `http-transcript.md` into endpoint cards.
  - Use `details` blocks for reproduction commands and full headers.

**Date:** 2026-06-02

## Scope

Question: Is there an alternate way to display the curl command-line evidence
that is easier to read on GitHub?

Local context: `examples/<site>/http-transcript.md` currently writes each
endpoint as:

- a long one-line `curl` command
- request headers in an `http` fence
- full response headers in an `http` fence
- a small bullet summary after the large blocks

This is complete but backwards for GitHub scanning: the summary comes after the
noisiest parts.

## Short Answer

Use a Markdown-first "HTTP evidence card" format, not raw terminal logs.

Recommended shape per endpoint:

````md
## robots.txt

| Field         | Value                                |
| ------------- | ------------------------------------ |
| Status        | 200                                  |
| Effective URL | https://www.anthropic.com/robots.txt |
| Content-Type  | text/plain                           |
| Body bytes    | 71                                   |
| Saved body    | robots.txt                           |

<details>
<summary>Reproduce with curl</summary>

```bash
curl \
  --location \
  --silent \
  --show-error \
  --compressed \
  --max-time 30 \
  --connect-timeout 10 \
  --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' \
  --dump-header '<response-headers>' \
  --output robots.txt \
  --write-out '<curl-metadata>' \
  https://www.anthropic.com/robots.txt
```

</details>

<details>
<summary>Response headers</summary>

```http
HTTP/2 200
content-type: text/plain
cache-control: public, max-age=14400
server: cloudflare
```

</details>
````

Keep `http.har.json` as the canonical structured artifact. The Markdown report
should be the human-friendly projection.

## What The Evidence Says

GitHub supports fenced code blocks for readable command and protocol snippets,
and supports collapsed sections with Markdown and code blocks inside them. This
makes summary-first reports with expandable raw detail a native fit.

Curl can emit structured transfer metadata with `--write-out`; current curl docs
also document `%{json}` for available write-out variables and `header_json` for
response headers as a JSON object. That supports generating cleaner structured
sidecars instead of treating terminal output as the main artifact.

HAR remains useful as a machine-readable archive format. The HAR 1.2 spec
describes an HTTP archive as JSON with request/response entries and timings,
which maps closely to the existing `http.har.json` files.

Hurl is a strong adjacent option if we want executable request specs. It uses a
plain text HTTP-like file format, can include response status/header assertions,
and is powered by libcurl. It is better as an optional `requests.hurl` fixture
than as the primary evidence display, because the current repo already captures
real response metadata and HAR.

HTTPie is useful for pretty terminal/API output, especially JSON/XML formatting,
but switching capture tooling away from curl would add a dependency without
improving the GitHub-rendered evidence as much as changing the Markdown output.

Asciinema/SVG terminal recordings are good for demos, not audit evidence. They
are less diffable and harder to skim than Markdown tables plus collapsible raw
blocks.

## Options

| Option                              | GitHub readability                   | Audit value | Tradeoff                          |
| ----------------------------------- | ------------------------------------ | ----------- | --------------------------------- |
| Summary-first Markdown cards        | High                                 | High        | Requires generator refactor       |
| Collapsible raw curl/header details | High                                 | High        | Needs careful nesting in Markdown |
| HAR JSON sidecar                    | Medium for humans, high for machines | High        | Large files are harder to scan    |
| Hurl request files                  | Medium-high                          | Medium-high | Adds new tool/convention          |
| Mermaid sequence diagrams           | Medium                               | Low-medium  | Good overview, weak raw evidence  |
| Asciinema/SVG terminal recording    | Medium for demos                     | Low         | Not diff-friendly                 |

## Recommendation

Refactor `http-transcript.md` into `http-evidence.md` or keep the filename and
change its structure:

1. Put a per-endpoint summary table first.
2. Show one short `http` response excerpt with only high-signal headers.
3. Put the full curl command in a collapsed `details` block.
4. Put full request and response headers in collapsed `details` blocks.
5. Keep `http.har.json` and status JSON files linked from the report.
6. Optionally generate `requests.hurl` later for executable request specs.

For this repo, do not replace curl with HTTPie or Hurl for capture. Curl is
already wired and gives the right evidence. Change the display layer first.

## Source Links

- GitHub Docs: Basic writing and formatting syntax, fenced code blocks:
  https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax
- GitHub Docs: Collapsed sections with Markdown/code blocks:
  https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/organizing-information-with-collapsed-sections
- GitHub Docs: Mermaid diagrams in Markdown:
  https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams
- Everything curl: `--write-out` overview:
  https://everything.curl.dev/usingcurl/verbose/writeout.html
- Everything curl: available `--write-out` variables including `json` and
  `header_json`:
  https://everything.curl.dev/usingcurl/verbose/all-variables.html
- curl man page: `--json`, `header_json`, and `json` write-out details:
  https://curl.se/docs/manpage.html
- HAR 1.2 specification:
  https://www.softwareishard.com/blog/har-12-spec/
- Hurl manual:
  https://hurl.dev/docs/manual.html
- Hurl request format:
  https://hurl.dev/docs/request.html
- Hurl response/assertion format:
  https://hurl.dev/docs/asserting-response.html
- HTTPie formatting options:
  https://httpie.io/docs/cli/configurable-options
- asciinema embedding guidance:
  https://docs.asciinema.org/manual/server/embedding/
