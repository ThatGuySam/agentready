# Model Context Protocol HTTP Evidence

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

## Endpoint Summary

| Endpoint           | Status | Content Type              | Body Bytes | Saved Body                                                                   | Notes                |
| ------------------ | -----: | ------------------------- | ---------: | ---------------------------------------------------------------------------- | -------------------- |
| robots.txt         |    200 | text/plain                |        179 | [robots.txt](./robots.txt)                                                   | Artifact body saved. |
| sitemap.xml        |    200 | text/xml                  |     32,142 | [sitemap.xml](./sitemap.xml)                                                 | Artifact body saved. |
| llms.txt           |    200 | text/plain; charset=utf-8 |     18,477 | [llms.txt](./llms.txt)                                                       | Artifact body saved. |
| llms-full.txt      |    200 | text/plain; charset=utf-8 |  1,900,265 | [llms-full.sample.txt](./llms-full.sample.txt)                               | Artifact body saved. |
| agent skills index |    200 | application/json          |        661 | [.well-known/agent-skills/index.json](./.well-known/agent-skills/index.json) | Artifact body saved. |

## robots.txt

| Field         | Value                                      |
| ------------- | ------------------------------------------ |
| Source URL    | https://modelcontextprotocol.io/robots.txt |
| Effective URL | https://modelcontextprotocol.io/robots.txt |
| Status        | 200                                        |
| Content-Type  | text/plain                                 |
| Body bytes    | 179                                        |
| Duration      | 362 ms                                     |
| Saved body    | [robots.txt](./robots.txt)                 |
| Raw metadata  | [status JSON](./robots.txt.status.json)    |

High-signal response headers:

```http
HTTP/2 200
cache-control: public, max-age=0, must-revalidate
cf-cache-status: EXPIRED
content-encoding: gzip
content-type: text/plain
last-modified: Thu, 04 Jun 2026 21:48:22 GMT
server: Vercel
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
  https://modelcontextprotocol.io/robots.txt
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://modelcontextprotocol.io/robots.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

HTTP/2 200
cache-control: public, max-age=0, must-revalidate
cf-cache-status: EXPIRED
cf-ray: a06a242db8688cc1-CMH
content-encoding: gzip
content-security-policy: worker-src * blob: data: 'unsafe-eval' 'unsafe-inline'; object-src data: ; base-uri 'self'; upgrade-insecure-requests; frame-ancestors 'self' https://dashboard.mintlify.com https://app.mintlify.com; form-action 'self' https://codesandbox.io;
content-type: text/plain
date: Thu, 04 Jun 2026 21:48:22 GMT
last-modified: Thu, 04 Jun 2026 21:48:22 GMT
server: Vercel
strict-transport-security: max-age=63072000
vary: rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch, accept-encoding
x-frame-options: DENY
x-matched-path: /_sites/[subdomain]/robots.txt
x-vercel-cache: MISS
x-vercel-id: cle1:cle1:iad1::iad1::czfnd-1780609702005-97a59adcd3df
```

</details>

## sitemap.xml

| Field         | Value                                       |
| ------------- | ------------------------------------------- |
| Source URL    | https://modelcontextprotocol.io/sitemap.xml |
| Effective URL | https://modelcontextprotocol.io/sitemap.xml |
| Status        | 200                                         |
| Content-Type  | text/xml                                    |
| Body bytes    | 32,142                                      |
| Duration      | 471 ms                                      |
| Saved body    | [sitemap.xml](./sitemap.xml)                |
| Raw metadata  | [status JSON](./sitemap.xml.status.json)    |

High-signal response headers:

```http
HTTP/2 200
cache-control: public, max-age=0, must-revalidate
cf-cache-status: EXPIRED
content-encoding: gzip
content-type: text/xml
last-modified: Thu, 04 Jun 2026 21:48:22 GMT
server: Vercel
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
  https://modelcontextprotocol.io/sitemap.xml
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://modelcontextprotocol.io/sitemap.xml HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

HTTP/2 200
cache-control: public, max-age=0, must-revalidate
cf-cache-status: EXPIRED
cf-ray: a06a24302beaf689-CMH
content-encoding: gzip
content-security-policy: worker-src * blob: data: 'unsafe-eval' 'unsafe-inline'; object-src data: ; base-uri 'self'; upgrade-insecure-requests; frame-ancestors 'self' https://dashboard.mintlify.com https://app.mintlify.com; form-action 'self' https://codesandbox.io;
content-type: text/xml
date: Thu, 04 Jun 2026 21:48:22 GMT
last-modified: Thu, 04 Jun 2026 21:48:22 GMT
server: Vercel
strict-transport-security: max-age=63072000
vary: rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch, accept-encoding
x-frame-options: DENY
x-matched-path: /_sites/[subdomain]/sitemap.xml
x-vercel-cache: MISS
x-vercel-id: cle1:cle1:iad1::iad1::l296j-1780609702396-24cc43d1a3a2
```

</details>

## llms.txt

| Field         | Value                                    |
| ------------- | ---------------------------------------- |
| Source URL    | https://modelcontextprotocol.io/llms.txt |
| Effective URL | https://modelcontextprotocol.io/llms.txt |
| Status        | 200                                      |
| Content-Type  | text/plain; charset=utf-8                |
| Body bytes    | 18,477                                   |
| Duration      | 397 ms                                   |
| Saved body    | [llms.txt](./llms.txt)                   |
| Raw metadata  | [status JSON](./llms.txt.status.json)    |

High-signal response headers:

```http
HTTP/2 200
cache-control: public, max-age=0, must-revalidate
cf-cache-status: EXPIRED
content-encoding: gzip
content-type: text/plain; charset=utf-8
last-modified: Thu, 04 Jun 2026 21:48:23 GMT
server: Vercel
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
  https://modelcontextprotocol.io/llms.txt
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://modelcontextprotocol.io/llms.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

HTTP/2 200
cache-control: public, max-age=0, must-revalidate
cf-cache-status: EXPIRED
cf-ray: a06a24332ac6cf70-CMH
content-encoding: gzip
content-security-policy: worker-src * blob: data: 'unsafe-eval' 'unsafe-inline'; object-src data: ; base-uri 'self'; upgrade-insecure-requests; frame-ancestors 'self' https://dashboard.mintlify.com https://app.mintlify.com; form-action 'self' https://codesandbox.io;
content-type: text/plain; charset=utf-8
date: Thu, 04 Jun 2026 21:48:22 GMT
last-modified: Thu, 04 Jun 2026 21:48:23 GMT
server: Vercel
strict-transport-security: max-age=63072000
vary: rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch, accept-encoding
x-frame-options: DENY
x-matched-path: /_sites/[subdomain]/llms.txt
x-vercel-cache: MISS
x-vercel-id: cle1:cle1:iad1::iad1::rdj59-1780609702881-57f1ab140c6f
```

</details>

## llms-full.txt

| Field         | Value                                             |
| ------------- | ------------------------------------------------- |
| Source URL    | https://modelcontextprotocol.io/llms-full.txt     |
| Effective URL | https://modelcontextprotocol.io/llms-full.txt     |
| Status        | 200                                               |
| Content-Type  | text/plain; charset=utf-8                         |
| Body bytes    | 1,900,265                                         |
| Duration      | 504 ms                                            |
| Saved body    | [llms-full.sample.txt](./llms-full.sample.txt)    |
| Raw metadata  | [status JSON](./llms-full.sample.txt.status.json) |

High-signal response headers:

```http
HTTP/2 200
cache-control: public, max-age=86400
cf-cache-status: HIT
content-encoding: gzip
content-type: text/plain; charset=utf-8
last-modified: Thu, 04 Jun 2026 17:43:07 GMT
server: Vercel
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
  https://modelcontextprotocol.io/llms-full.txt
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://modelcontextprotocol.io/llms-full.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

HTTP/2 200
age: 15239
cache-control: public, max-age=86400
cf-cache-status: HIT
cf-ray: a06a24365f570bf5-CMH
content-encoding: gzip
content-security-policy: worker-src * blob: data: 'unsafe-eval' 'unsafe-inline'; object-src data: ; base-uri 'self'; upgrade-insecure-requests; frame-ancestors 'self' https://dashboard.mintlify.com https://app.mintlify.com; form-action 'self' https://codesandbox.io;
content-type: text/plain; charset=utf-8
date: Thu, 04 Jun 2026 21:48:23 GMT
last-modified: Thu, 04 Jun 2026 17:43:07 GMT
server: Vercel
strict-transport-security: max-age=63072000
vary: rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch, accept-encoding
x-frame-options: DENY
x-matched-path: /_sites/[subdomain]/llms-full.txt
x-vercel-cache: MISS
x-vercel-id: cle1:syd1:iad1::iad1::qlv9j-1780609703361-c52c8bab45ab
```

</details>

## agent skills index

| Field         | Value                                                                        |
| ------------- | ---------------------------------------------------------------------------- |
| Source URL    | https://modelcontextprotocol.io/.well-known/agent-skills/index.json          |
| Effective URL | https://modelcontextprotocol.io/.well-known/agent-skills/index.json          |
| Status        | 200                                                                          |
| Content-Type  | application/json                                                             |
| Body bytes    | 661                                                                          |
| Duration      | 315 ms                                                                       |
| Saved body    | [.well-known/agent-skills/index.json](./.well-known/agent-skills/index.json) |
| Raw metadata  | [status JSON](./.well-known/agent-skills/index.json.status.json)             |

High-signal response headers:

```http
HTTP/2 200
cache-control: public, max-age=86400
cf-cache-status: HIT
content-encoding: gzip
content-type: application/json
last-modified: Thu, 04 Jun 2026 21:44:00 GMT
server: Vercel
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
  https://modelcontextprotocol.io/.well-known/agent-skills/index.json
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://modelcontextprotocol.io/.well-known/agent-skills/index.json HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

HTTP/2 200
age: 45521
cache-control: public, max-age=86400
cf-cache-status: HIT
cf-ray: a06a24397c161330-CMH
content-encoding: gzip
content-security-policy: worker-src * blob: data: 'unsafe-eval' 'unsafe-inline'; object-src data: ; base-uri 'self'; upgrade-insecure-requests; frame-ancestors 'self' https://dashboard.mintlify.com https://app.mintlify.com; form-action 'self' https://codesandbox.io;
content-type: application/json
date: Thu, 04 Jun 2026 21:48:23 GMT
last-modified: Thu, 04 Jun 2026 21:44:00 GMT
server: Vercel
strict-transport-security: max-age=63072000
vary: rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch, accept-encoding
x-frame-options: DENY
x-matched-path: /_sites/[subdomain]/.well-known/agent-skills/index.json
x-vercel-cache: MISS
x-vercel-id: cle1:fra1:iad1::iad1::lncvb-1780609703889-3765db07cf81
```

</details>
