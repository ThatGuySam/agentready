# Cloudflare Developers HTTP Evidence

**Captured:** 2026-06-04T21:48:12.668Z

This is a GitHub-readable alternative to the raw curl transcript. It puts the
decision-grade evidence first, then hides reproduction commands and header
details behind collapsible sections.

Machine-readable sidecars:

- [http.har.json](./http.har.json)
- [robots.txt.status.json](./robots.txt.status.json)
- [sitemap.xml.status.json](./sitemap.xml.status.json)
- [llms.txt.status.json](./llms.txt.status.json)
- [llms-full.sample.txt.status.json](./llms-full.sample.txt.status.json)
- [.well-known/agent-skills/index.json.status.json](./.well-known/agent-skills/index.json.status.json)
- [markdown-for-agents.md.txt.status.json](./markdown-for-agents.md.txt.status.json)

## Endpoint Summary

| Endpoint                 | Status | Content Type                    | Body Bytes | Saved Body                                                                   | Notes                                                         |
| ------------------------ | -----: | ------------------------------- | ---------: | ---------------------------------------------------------------------------- | ------------------------------------------------------------- |
| robots.txt               |    200 | text/plain                      |      1,460 | [robots.txt](./robots.txt)                                                   | Artifact body saved.                                          |
| sitemap.xml              |    200 | application/xml                 |        239 | [sitemap.xml](./sitemap.xml)                                                 | Artifact body saved.                                          |
| llms.txt                 |    200 | text/plain                      |     15,538 | [llms.txt](./llms.txt)                                                       | Artifact body saved.                                          |
| llms-full.txt            |    200 | text/markdown; charset=utf-8    | 50,005,369 | [llms-full.sample.txt](./llms-full.sample.txt)                               | Artifact body saved.                                          |
| agent skills index       |    200 | application/json; charset=utf-8 |      5,271 | [.well-known/agent-skills/index.json](./.well-known/agent-skills/index.json) | Artifact body saved.                                          |
| Markdown for Agents page |    200 | text/markdown; charset=utf-8    |     14,330 | [markdown-for-agents.md.txt](./markdown-for-agents.md.txt)                   | Uses content negotiation to request Markdown instead of HTML. |

## robots.txt

| Field         | Value                                        |
| ------------- | -------------------------------------------- |
| Source URL    | https://developers.cloudflare.com/robots.txt |
| Effective URL | https://developers.cloudflare.com/robots.txt |
| Status        | 200                                          |
| Content-Type  | text/plain                                   |
| Body bytes    | 1,460                                        |
| Duration      | 119 ms                                       |
| Saved body    | [robots.txt](./robots.txt)                   |
| Raw metadata  | [status JSON](./robots.txt.status.json)      |

High-signal response headers:

```http
HTTP/2 200
content-type: text/plain
cf-cache-status: HIT
cache-control: public, max-age=0, must-revalidate
etag: W/"6a8d893cad3560c1aeef4d7ec0cbcd8c"
content-encoding: gzip
server: cloudflare
```

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
  https://developers.cloudflare.com/robots.txt
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://developers.cloudflare.com/robots.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

HTTP/2 200
date: Thu, 04 Jun 2026 21:48:13 GMT
content-type: text/plain
cf-cache-status: HIT
access-control-allow-origin: *
cache-control: public, max-age=0, must-revalidate
strict-transport-security: max-age=15552000; preload
x-content-type-options: nosniff
speculation-rules: "/cdn-cgi/speculation"
vary: accept-encoding
set-cookie: [redacted]
content-security-policy: form-action 'self'; frame-src 'self' company-target.com *.company-target.com cloudflarestream.com *.cloudflarestream.com youtube-nocookie.com *.youtube-nocookie.com videodelivery.net *.videodelivery.net cloudflare.com *.cloudflare.com; frame-ancestors 'self' cloudflare.com *.cloudflare.com; script-src 'self' cloudflare ... [truncated]
report-to: [redacted]
etag: W/"6a8d893cad3560c1aeef4d7ec0cbcd8c"
content-encoding: gzip
server: cloudflare
cf-ray: a06a23f59ee51214-DFW
alt-svc: h3=":443"; ma=86400
```

</details>

## sitemap.xml

| Field         | Value                                               |
| ------------- | --------------------------------------------------- |
| Source URL    | https://developers.cloudflare.com/sitemap.xml       |
| Effective URL | https://developers.cloudflare.com/sitemap-index.xml |
| Status        | 200                                                 |
| Content-Type  | application/xml                                     |
| Body bytes    | 239                                                 |
| Duration      | 271 ms                                              |
| Saved body    | [sitemap.xml](./sitemap.xml)                        |
| Raw metadata  | [status JSON](./sitemap.xml.status.json)            |

High-signal response headers:

```http
HTTP/2 200
content-type: application/xml
cf-cache-status: HIT
cache-control: public, max-age=0, must-revalidate
etag: W/"e5ca2c074a50e33a7ba7bb594c0c120f"
content-encoding: gzip
server: cloudflare
```

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
  --output sitemap.xml \
  --write-out '<curl-metadata>' \
  https://developers.cloudflare.com/sitemap.xml
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://developers.cloudflare.com/sitemap.xml HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

HTTP/2 200
date: Thu, 04 Jun 2026 21:48:13 GMT
content-type: application/xml
cf-cache-status: HIT
access-control-allow-origin: *
cache-control: public, max-age=0, must-revalidate
strict-transport-security: max-age=15552000; preload
x-content-type-options: nosniff
speculation-rules: "/cdn-cgi/speculation"
vary: accept-encoding
set-cookie: [redacted]
content-security-policy: form-action 'self'; frame-src 'self' company-target.com *.company-target.com cloudflarestream.com *.cloudflarestream.com youtube-nocookie.com *.youtube-nocookie.com videodelivery.net *.videodelivery.net cloudflare.com *.cloudflare.com; frame-ancestors 'self' cloudflare.com *.cloudflare.com; script-src 'self' cloudflare ... [truncated]
report-to: [redacted]
etag: W/"e5ca2c074a50e33a7ba7bb594c0c120f"
content-encoding: gzip
server: cloudflare
cf-ray: a06a23f75a867dce-DFW
alt-svc: h3=":443"; ma=86400
```

</details>

## llms.txt

| Field         | Value                                      |
| ------------- | ------------------------------------------ |
| Source URL    | https://developers.cloudflare.com/llms.txt |
| Effective URL | https://developers.cloudflare.com/llms.txt |
| Status        | 200                                        |
| Content-Type  | text/plain                                 |
| Body bytes    | 15,538                                     |
| Duration      | 68 ms                                      |
| Saved body    | [llms.txt](./llms.txt)                     |
| Raw metadata  | [status JSON](./llms.txt.status.json)      |

High-signal response headers:

```http
HTTP/2 200
content-type: text/plain
cf-cache-status: HIT
cache-control: public, max-age=0, must-revalidate
etag: W/"9cc286089043fa56d09f4b5444119f79"
content-encoding: gzip
server: cloudflare
```

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
  --output llms.txt \
  --write-out '<curl-metadata>' \
  https://developers.cloudflare.com/llms.txt
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://developers.cloudflare.com/llms.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

HTTP/2 200
date: Thu, 04 Jun 2026 21:48:13 GMT
content-type: text/plain
cf-cache-status: HIT
access-control-allow-origin: *
cache-control: public, max-age=0, must-revalidate
strict-transport-security: max-age=15552000; preload
x-content-type-options: nosniff
speculation-rules: "/cdn-cgi/speculation"
vary: accept-encoding
set-cookie: [redacted]
content-security-policy: form-action 'self'; frame-src 'self' company-target.com *.company-target.com cloudflarestream.com *.cloudflarestream.com youtube-nocookie.com *.youtube-nocookie.com videodelivery.net *.videodelivery.net cloudflare.com *.cloudflare.com; frame-ancestors 'self' cloudflare.com *.cloudflare.com; script-src 'self' cloudflare ... [truncated]
report-to: [redacted]
etag: W/"9cc286089043fa56d09f4b5444119f79"
content-encoding: gzip
server: cloudflare
cf-ray: a06a23f82db6ae15-MCI
alt-svc: h3=":443"; ma=86400
```

</details>

## llms-full.txt

| Field         | Value                                             |
| ------------- | ------------------------------------------------- |
| Source URL    | https://developers.cloudflare.com/llms-full.txt   |
| Effective URL | https://developers.cloudflare.com/llms-full.txt   |
| Status        | 200                                               |
| Content-Type  | text/markdown; charset=utf-8                      |
| Body bytes    | 50,005,369                                        |
| Duration      | 4,908 ms                                          |
| Saved body    | [llms-full.sample.txt](./llms-full.sample.txt)    |
| Raw metadata  | [status JSON](./llms-full.sample.txt.status.json) |

High-signal response headers:

```http
HTTP/2 200
content-type: text/markdown; charset=utf-8
content-length: 50005369
server: cloudflare
```

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
  --output llms-full.sample.txt \
  --write-out '<curl-metadata>' \
  https://developers.cloudflare.com/llms-full.txt
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://developers.cloudflare.com/llms-full.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

HTTP/2 200
date: Thu, 04 Jun 2026 21:48:13 GMT
content-type: text/markdown; charset=utf-8
content-length: 50005369
strict-transport-security: max-age=15552000; preload
x-content-type-options: nosniff
speculation-rules: "/cdn-cgi/speculation"
vary: accept-encoding
set-cookie: [redacted]
content-security-policy: form-action 'self'; frame-src 'self' company-target.com *.company-target.com cloudflarestream.com *.cloudflarestream.com youtube-nocookie.com *.youtube-nocookie.com videodelivery.net *.videodelivery.net cloudflare.com *.cloudflare.com; frame-ancestors 'self' cloudflare.com *.cloudflare.com; script-src 'self' cloudflare ... [truncated]
report-to: [redacted]
server: cloudflare
cf-ray: a06a23f8a941d306-MCI
alt-svc: h3=":443"; ma=86400
```

</details>

## agent skills index

| Field         | Value                                                                        |
| ------------- | ---------------------------------------------------------------------------- |
| Source URL    | https://developers.cloudflare.com/.well-known/agent-skills/index.json        |
| Effective URL | https://developers.cloudflare.com/.well-known/agent-skills/index.json        |
| Status        | 200                                                                          |
| Content-Type  | application/json; charset=utf-8                                              |
| Body bytes    | 5,271                                                                        |
| Duration      | 124 ms                                                                       |
| Saved body    | [.well-known/agent-skills/index.json](./.well-known/agent-skills/index.json) |
| Raw metadata  | [status JSON](./.well-known/agent-skills/index.json.status.json)             |

High-signal response headers:

```http
HTTP/2 200
content-type: application/json; charset=utf-8
cf-cache-status: HIT
cache-control: public, max-age=0, must-revalidate
etag: W/"bf31596755081e10201ce5d70e5c6373"
content-encoding: gzip
server: cloudflare
```

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
  --output .well-known/agent-skills/index.json \
  --write-out '<curl-metadata>' \
  https://developers.cloudflare.com/.well-known/agent-skills/index.json
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://developers.cloudflare.com/.well-known/agent-skills/index.json HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

HTTP/2 200
date: Thu, 04 Jun 2026 21:48:18 GMT
content-type: application/json; charset=utf-8
cf-cache-status: HIT
access-control-allow-origin: *
cache-control: public, max-age=0, must-revalidate
strict-transport-security: max-age=15552000; preload
x-content-type-options: nosniff
speculation-rules: "/cdn-cgi/speculation"
vary: accept-encoding
set-cookie: [redacted]
content-security-policy: form-action 'self'; frame-src 'self' company-target.com *.company-target.com cloudflarestream.com *.cloudflarestream.com youtube-nocookie.com *.youtube-nocookie.com videodelivery.net *.videodelivery.net cloudflare.com *.cloudflare.com; frame-ancestors 'self' cloudflare.com *.cloudflare.com; script-src 'self' cloudflare ... [truncated]
report-to: [redacted]
etag: W/"bf31596755081e10201ce5d70e5c6373"
content-encoding: gzip
server: cloudflare
cf-ray: a06a2417eb85e135-MCI
alt-svc: h3=":443"; ma=86400
```

</details>

## Markdown for Agents page

| Field         | Value                                                                         |
| ------------- | ----------------------------------------------------------------------------- |
| Source URL    | https://developers.cloudflare.com/fundamentals/reference/markdown-for-agents/ |
| Effective URL | https://developers.cloudflare.com/fundamentals/reference/markdown-for-agents/ |
| Status        | 200                                                                           |
| Content-Type  | text/markdown; charset=utf-8                                                  |
| Body bytes    | 14,330                                                                        |
| Duration      | 127 ms                                                                        |
| Saved body    | [markdown-for-agents.md.txt](./markdown-for-agents.md.txt)                    |
| Raw metadata  | [status JSON](./markdown-for-agents.md.txt.status.json)                       |

High-signal response headers:

```http
HTTP/2 200
content-type: text/markdown; charset=utf-8
content-length: 14330
cache-control: public, max-age=0, must-revalidate
server: cloudflare
```

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
  --output markdown-for-agents.md.txt \
  --write-out '<curl-metadata>' \
  --header 'Accept: text/markdown' \
  https://developers.cloudflare.com/fundamentals/reference/markdown-for-agents/
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://developers.cloudflare.com/fundamentals/reference/markdown-for-agents/ HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
> Accept: text/markdown

HTTP/2 200
date: Thu, 04 Jun 2026 21:48:18 GMT
content-type: text/markdown; charset=utf-8
content-length: 14330
vary: accept
x-markdown-tokens: 3575
content-signal: ai-train=yes, search=yes, ai-input=yes
x-original-tokens: 61331
cache-control: public, max-age=0, must-revalidate
server: cloudflare
cf-ray: a06a24188b0f6d82-DFW
```

</details>
