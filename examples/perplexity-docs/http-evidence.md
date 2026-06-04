# Perplexity Docs HTTP Evidence

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
- [perplexity-crawlers.sample.html.txt.status.json](./perplexity-crawlers.sample.html.txt.status.json)

## Endpoint Summary

| Endpoint           | Status | Content Type              | Body Bytes | Saved Body                                                                   | Notes                |
| ------------------ | -----: | ------------------------- | ---------: | ---------------------------------------------------------------------------- | -------------------- |
| robots.txt         |    200 | text/plain                |        174 | [robots.txt](./robots.txt)                                                   | Artifact body saved. |
| sitemap.xml        |    200 | text/xml                  |     21,104 | [sitemap.xml](./sitemap.xml)                                                 | Artifact body saved. |
| llms.txt           |    200 | text/plain; charset=utf-8 |     30,236 | [llms.txt](./llms.txt)                                                       | Artifact body saved. |
| llms-full.txt      |    200 | text/plain; charset=utf-8 |  1,495,113 | [llms-full.sample.txt](./llms-full.sample.txt)                               | Artifact body saved. |
| agent skills index |    200 | application/json          |        560 | [.well-known/agent-skills/index.json](./.well-known/agent-skills/index.json) | Artifact body saved. |
| crawler docs page  |    200 | text/html; charset=utf-8  |    524,139 | [perplexity-crawlers.sample.html.txt](./perplexity-crawlers.sample.html.txt) | Artifact body saved. |

## robots.txt

| Field         | Value                                   |
| ------------- | --------------------------------------- |
| Source URL    | https://docs.perplexity.ai/robots.txt   |
| Effective URL | https://docs.perplexity.ai/robots.txt   |
| Status        | 200                                     |
| Content-Type  | text/plain                              |
| Body bytes    | 174                                     |
| Duration      | 638 ms                                  |
| Saved body    | [robots.txt](./robots.txt)              |
| Raw metadata  | [status JSON](./robots.txt.status.json) |

High-signal response headers:

```http
HTTP/2 200
cache-control: public, max-age=0, must-revalidate
cf-cache-status: EXPIRED
content-encoding: gzip
content-type: text/plain
last-modified: Thu, 04 Jun 2026 21:48:19 GMT
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
  https://docs.perplexity.ai/robots.txt
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://docs.perplexity.ai/robots.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

HTTP/2 200
cache-control: public, max-age=0, must-revalidate
cf-cache-status: EXPIRED
cf-ray: a06a241c0ed2d945-CMH
content-encoding: gzip
content-security-policy: worker-src * blob: data: 'unsafe-eval' 'unsafe-inline'; object-src data: ; base-uri 'self'; upgrade-insecure-requests; frame-ancestors 'self' https://dashboard.mintlify.com https://app.mintlify.com; form-action 'self' https://codesandbox.io;
content-type: text/plain
date: Thu, 04 Jun 2026 21:48:19 GMT
last-modified: Thu, 04 Jun 2026 21:48:19 GMT
server: Vercel
strict-transport-security: max-age=63072000
vary: rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch, accept-encoding
x-frame-options: DENY
x-matched-path: /_sites/[subdomain]/robots.txt
x-vercel-cache: MISS
x-vercel-id: cle1:cle1:iad1::iad1::wkv24-1780609699170-3c192d393bb9
```

</details>

## sitemap.xml

| Field         | Value                                    |
| ------------- | ---------------------------------------- |
| Source URL    | https://docs.perplexity.ai/sitemap.xml   |
| Effective URL | https://docs.perplexity.ai/sitemap.xml   |
| Status        | 200                                      |
| Content-Type  | text/xml                                 |
| Body bytes    | 21,104                                   |
| Duration      | 415 ms                                   |
| Saved body    | [sitemap.xml](./sitemap.xml)             |
| Raw metadata  | [status JSON](./sitemap.xml.status.json) |

High-signal response headers:

```http
HTTP/2 200
cache-control: public, max-age=0, must-revalidate
cf-cache-status: EXPIRED
content-encoding: gzip
content-type: text/xml
last-modified: Thu, 04 Jun 2026 21:48:19 GMT
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
  https://docs.perplexity.ai/sitemap.xml
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://docs.perplexity.ai/sitemap.xml HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

HTTP/2 200
cache-control: public, max-age=0, must-revalidate
cf-cache-status: EXPIRED
cf-ray: a06a241f8ea8984a-CMH
content-encoding: gzip
content-security-policy: worker-src * blob: data: 'unsafe-eval' 'unsafe-inline'; object-src data: ; base-uri 'self'; upgrade-insecure-requests; frame-ancestors 'self' https://dashboard.mintlify.com https://app.mintlify.com; form-action 'self' https://codesandbox.io;
content-type: text/xml
date: Thu, 04 Jun 2026 21:48:19 GMT
last-modified: Thu, 04 Jun 2026 21:48:19 GMT
server: Vercel
strict-transport-security: max-age=63072000
vary: rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch, accept-encoding
x-frame-options: DENY
x-matched-path: /_sites/[subdomain]/sitemap.xml
x-vercel-cache: MISS
x-vercel-id: cle1:cle1:iad1::iad1::zl2dl-1780609699724-e9b326ada3b0
```

</details>

## llms.txt

| Field         | Value                                 |
| ------------- | ------------------------------------- |
| Source URL    | https://docs.perplexity.ai/llms.txt   |
| Effective URL | https://docs.perplexity.ai/llms.txt   |
| Status        | 200                                   |
| Content-Type  | text/plain; charset=utf-8             |
| Body bytes    | 30,236                                |
| Duration      | 606 ms                                |
| Saved body    | [llms.txt](./llms.txt)                |
| Raw metadata  | [status JSON](./llms.txt.status.json) |

High-signal response headers:

```http
HTTP/2 200
cache-control: public, max-age=0, must-revalidate
cf-cache-status: EXPIRED
content-encoding: gzip
content-type: text/plain; charset=utf-8
last-modified: Thu, 04 Jun 2026 21:48:20 GMT
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
  https://docs.perplexity.ai/llms.txt
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://docs.perplexity.ai/llms.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

HTTP/2 200
cache-control: public, max-age=0, must-revalidate
cf-cache-status: EXPIRED
cf-ray: a06a2422ac833401-CMH
content-encoding: gzip
content-security-policy: worker-src * blob: data: 'unsafe-eval' 'unsafe-inline'; object-src data: ; base-uri 'self'; upgrade-insecure-requests; frame-ancestors 'self' https://dashboard.mintlify.com https://app.mintlify.com; form-action 'self' https://codesandbox.io;
content-type: text/plain; charset=utf-8
date: Thu, 04 Jun 2026 21:48:20 GMT
last-modified: Thu, 04 Jun 2026 21:48:20 GMT
server: Vercel
strict-transport-security: max-age=63072000
vary: rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch, accept-encoding
x-frame-options: DENY
x-matched-path: /_sites/[subdomain]/llms.txt
x-vercel-cache: MISS
x-vercel-id: cle1:cle1:iad1::iad1::n2cb7-1780609700230-1bb0830edc0b
```

</details>

## llms-full.txt

| Field         | Value                                             |
| ------------- | ------------------------------------------------- |
| Source URL    | https://docs.perplexity.ai/llms-full.txt          |
| Effective URL | https://docs.perplexity.ai/llms-full.txt          |
| Status        | 200                                               |
| Content-Type  | text/plain; charset=utf-8                         |
| Body bytes    | 1,495,113                                         |
| Duration      | 400 ms                                            |
| Saved body    | [llms-full.sample.txt](./llms-full.sample.txt)    |
| Raw metadata  | [status JSON](./llms-full.sample.txt.status.json) |

High-signal response headers:

```http
HTTP/2 200
cache-control: public, max-age=86400
cf-cache-status: HIT
content-encoding: gzip
content-type: text/plain; charset=utf-8
last-modified: Thu, 04 Jun 2026 19:14:17 GMT
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
  https://docs.perplexity.ai/llms-full.txt
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://docs.perplexity.ai/llms-full.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

HTTP/2 200
age: 13644
cache-control: public, max-age=86400
cf-cache-status: HIT
cf-ray: a06a24261e7cc20a-CMH
content-encoding: gzip
content-security-policy: worker-src * blob: data: 'unsafe-eval' 'unsafe-inline'; object-src data: ; base-uri 'self'; upgrade-insecure-requests; frame-ancestors 'self' https://dashboard.mintlify.com https://app.mintlify.com; form-action 'self' https://codesandbox.io;
content-type: text/plain; charset=utf-8
date: Thu, 04 Jun 2026 21:48:20 GMT
last-modified: Thu, 04 Jun 2026 19:14:17 GMT
server: Vercel
strict-transport-security: max-age=63072000
vary: rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch, accept-encoding
x-frame-options: DENY
x-matched-path: /_sites/[subdomain]/llms-full.txt
x-vercel-cache: MISS
x-vercel-id: cle1:iad1:iad1::iad1::q6jr4-1780609700789-9c99197590db
```

</details>

## agent skills index

| Field         | Value                                                                        |
| ------------- | ---------------------------------------------------------------------------- |
| Source URL    | https://docs.perplexity.ai/.well-known/agent-skills/index.json               |
| Effective URL | https://docs.perplexity.ai/.well-known/agent-skills/index.json               |
| Status        | 200                                                                          |
| Content-Type  | application/json                                                             |
| Body bytes    | 560                                                                          |
| Duration      | 309 ms                                                                       |
| Saved body    | [.well-known/agent-skills/index.json](./.well-known/agent-skills/index.json) |
| Raw metadata  | [status JSON](./.well-known/agent-skills/index.json.status.json)             |

High-signal response headers:

```http
HTTP/2 200
cache-control: public, max-age=86400
cf-cache-status: HIT
content-encoding: gzip
content-type: application/json
last-modified: Thu, 04 Jun 2026 21:43:57 GMT
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
  https://docs.perplexity.ai/.well-known/agent-skills/index.json
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://docs.perplexity.ai/.well-known/agent-skills/index.json HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

HTTP/2 200
age: 263
cache-control: public, max-age=86400
cf-cache-status: HIT
cf-ray: a06a24292e96984a-CMH
content-encoding: gzip
content-security-policy: worker-src * blob: data: 'unsafe-eval' 'unsafe-inline'; object-src data: ; base-uri 'self'; upgrade-insecure-requests; frame-ancestors 'self' https://dashboard.mintlify.com https://app.mintlify.com; form-action 'self' https://codesandbox.io;
content-type: application/json
date: Thu, 04 Jun 2026 21:48:21 GMT
last-modified: Thu, 04 Jun 2026 21:43:57 GMT
server: Vercel
strict-transport-security: max-age=63072000
vary: rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch, accept-encoding
x-frame-options: DENY
x-matched-path: /_sites/[subdomain]/.well-known/agent-skills/index.json
x-vercel-cache: MISS
x-vercel-id: cle1:cle1:iad1::iad1::q6jzq-1780609701278-3d0cb30aca60
```

</details>

## crawler docs page

| Field         | Value                                                                        |
| ------------- | ---------------------------------------------------------------------------- |
| Source URL    | https://docs.perplexity.ai/docs/resources/perplexity-crawlers                |
| Effective URL | https://docs.perplexity.ai/docs/resources/perplexity-crawlers                |
| Status        | 200                                                                          |
| Content-Type  | text/html; charset=utf-8                                                     |
| Body bytes    | 524,139                                                                      |
| Duration      | 315 ms                                                                       |
| Saved body    | [perplexity-crawlers.sample.html.txt](./perplexity-crawlers.sample.html.txt) |
| Raw metadata  | [status JSON](./perplexity-crawlers.sample.html.txt.status.json)             |

High-signal response headers:

```http
HTTP/2 200
cache-control: no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0
cf-cache-status: HIT
content-encoding: gzip
content-type: text/html; charset=utf-8
last-modified: Thu, 04 Jun 2026 19:32:50 GMT
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
  --output perplexity-crawlers.sample.html.txt \
  --write-out '<curl-metadata>' \
  https://docs.perplexity.ai/docs/resources/perplexity-crawlers
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://docs.perplexity.ai/docs/resources/perplexity-crawlers HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

HTTP/2 200
age: 12879
cache-control: no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0
cf-cache-status: HIT
cf-ray: a06a242a8da2f43c-CMH
content-encoding: gzip
content-security-policy: worker-src * blob: data: 'unsafe-eval' 'unsafe-inline'; object-src data: ; base-uri 'self'; upgrade-insecure-requests; frame-ancestors 'self' https://dashboard.mintlify.com https://app.mintlify.com; form-action 'self' https://codesandbox.io;
content-type: text/html; charset=utf-8
date: Thu, 04 Jun 2026 21:48:21 GMT
expires: 0
last-modified: Thu, 04 Jun 2026 19:32:50 GMT
link: </llms.txt>; rel="llms-txt", </llms-full.txt>; rel="llms-full-txt", </.well-known/api-catalog>; rel="api-catalog", </.well-known/mcp/server-card.json>; rel="mcp-server-card", </.well-known/agent-card.json>; rel="agent-card", </.well-known/oauth-protected-resource>; rel="oauth-protected-resource", </.well-known/agent-sk ... [truncated]
pragma: no-cache
server: Vercel
strict-transport-security: max-age=63072000
vary: rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch, accept-encoding
x-frame-options: DENY
x-llms-txt: /llms.txt
x-matched-path: /_sites/[subdomain]/[[...slug]]
x-mint-proxy-version: 1.0.0-prod
x-mintlify-client-version: 0.0.3020
x-served-version: dpl_7exBNnC3CGWkHjTFkbtXvy4UWkHf
x-vercel-cache: BYPASS
x-vercel-id: cle1:iad1::iad1::f9t4l-1780609701507-06fb6ebdf71d
x-vercel-project-id: prj_NdMUpHpUIb41Po1H8c6hrChv2bgr
x-version: dpl_7exBNnC3CGWkHjTFkbtXvy4UWkHf
```

</details>
