# LangChain Docs HTTP Evidence

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
| robots.txt         |    200 | text/plain                |        174 | [robots.txt](./robots.txt)                                                   | Artifact body saved. |
| sitemap.xml        |    200 | text/xml                  |    204,665 | [sitemap.xml](./sitemap.xml)                                                 | Artifact body saved. |
| llms.txt           |    200 | text/plain; charset=utf-8 |     99,987 | [llms.txt](./llms.txt)                                                       | Artifact body saved. |
| llms-full.txt      |    200 | text/plain; charset=utf-8 | 11,494,496 | [llms-full.sample.txt](./llms-full.sample.txt)                               | Artifact body saved. |
| agent skills index |    200 | application/json          |        620 | [.well-known/agent-skills/index.json](./.well-known/agent-skills/index.json) | Artifact body saved. |

## robots.txt

| Field         | Value                                   |
| ------------- | --------------------------------------- |
| Source URL    | https://docs.langchain.com/robots.txt   |
| Effective URL | https://docs.langchain.com/robots.txt   |
| Status        | 200                                     |
| Content-Type  | text/plain                              |
| Body bytes    | 174                                     |
| Duration      | 467 ms                                  |
| Saved body    | [robots.txt](./robots.txt)              |
| Raw metadata  | [status JSON](./robots.txt.status.json) |

High-signal response headers:

```http
HTTP/2 200
content-type: text/plain
cf-cache-status: EXPIRED
cache-control: public, max-age=0, must-revalidate
last-modified: Thu, 04 Jun 2026 21:48:34 GMT
server: cloudflare
content-encoding: gzip
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
  https://docs.langchain.com/robots.txt
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://docs.langchain.com/robots.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

HTTP/2 200
date: Thu, 04 Jun 2026 21:48:34 GMT
content-type: text/plain
cf-ray: a06a247a5c6369f8-DFW
cf-cache-status: EXPIRED
cache-control: public, max-age=0, must-revalidate
x-vercel-id: iad1::iad1::68lm6-1780609714397-d54e1f091155
last-modified: Thu, 04 Jun 2026 21:48:34 GMT
server: cloudflare
strict-transport-security: max-age=63072000
vary: rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch, accept-encoding
content-security-policy: worker-src * blob: data: 'unsafe-eval' 'unsafe-inline'; object-src data: ; base-uri 'self'; upgrade-insecure-requests; frame-ancestors 'self' https://dashboard.mintlify.com https://app.mintlify.com; form-action 'self' https://codesandbox.io;
x-frame-options: DENY
x-matched-path: /_sites/[subdomain]/robots.txt
x-vercel-cache: MISS
content-encoding: gzip
```

</details>

## sitemap.xml

| Field         | Value                                    |
| ------------- | ---------------------------------------- |
| Source URL    | https://docs.langchain.com/sitemap.xml   |
| Effective URL | https://docs.langchain.com/sitemap.xml   |
| Status        | 200                                      |
| Content-Type  | text/xml                                 |
| Body bytes    | 204,665                                  |
| Duration      | 533 ms                                   |
| Saved body    | [sitemap.xml](./sitemap.xml)             |
| Raw metadata  | [status JSON](./sitemap.xml.status.json) |

High-signal response headers:

```http
HTTP/2 200
content-type: text/xml
cf-cache-status: EXPIRED
cache-control: public, max-age=0, must-revalidate
last-modified: Thu, 04 Jun 2026 21:48:35 GMT
server: cloudflare
content-encoding: gzip
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
  https://docs.langchain.com/sitemap.xml
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://docs.langchain.com/sitemap.xml HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

HTTP/2 200
date: Thu, 04 Jun 2026 21:48:35 GMT
content-type: text/xml
cf-ray: a06a247d5c35e946-DFW
cf-cache-status: EXPIRED
cache-control: public, max-age=0, must-revalidate
x-vercel-id: iad1::iad1::dtlm4-1780609714900-ae5b1c8b3135
last-modified: Thu, 04 Jun 2026 21:48:35 GMT
server: cloudflare
strict-transport-security: max-age=63072000
vary: rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch, accept-encoding
content-security-policy: worker-src * blob: data: 'unsafe-eval' 'unsafe-inline'; object-src data: ; base-uri 'self'; upgrade-insecure-requests; frame-ancestors 'self' https://dashboard.mintlify.com https://app.mintlify.com; form-action 'self' https://codesandbox.io;
x-frame-options: DENY
x-matched-path: /_sites/[subdomain]/sitemap.xml
x-vercel-cache: MISS
content-encoding: gzip
```

</details>

## llms.txt

| Field         | Value                                 |
| ------------- | ------------------------------------- |
| Source URL    | https://docs.langchain.com/llms.txt   |
| Effective URL | https://docs.langchain.com/llms.txt   |
| Status        | 200                                   |
| Content-Type  | text/plain; charset=utf-8             |
| Body bytes    | 99,987                                |
| Duration      | 801 ms                                |
| Saved body    | [llms.txt](./llms.txt)                |
| Raw metadata  | [status JSON](./llms.txt.status.json) |

High-signal response headers:

```http
HTTP/2 200
content-type: text/plain; charset=utf-8
cf-cache-status: EXPIRED
cache-control: public, max-age=0, must-revalidate
last-modified: Thu, 04 Jun 2026 21:48:35 GMT
server: cloudflare
content-encoding: gzip
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
  https://docs.langchain.com/llms.txt
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://docs.langchain.com/llms.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

HTTP/2 200
date: Thu, 04 Jun 2026 21:48:35 GMT
content-type: text/plain; charset=utf-8
cf-ray: a06a2480d81cc872-DFW
cf-cache-status: EXPIRED
cache-control: public, max-age=0, must-revalidate
x-vercel-id: iad1::iad1::fdlvk-1780609715418-c47a8100a49e
last-modified: Thu, 04 Jun 2026 21:48:35 GMT
server: cloudflare
strict-transport-security: max-age=63072000
vary: rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch, accept-encoding
content-security-policy: worker-src * blob: data: 'unsafe-eval' 'unsafe-inline'; object-src data: ; base-uri 'self'; upgrade-insecure-requests; frame-ancestors 'self' https://dashboard.mintlify.com https://app.mintlify.com; form-action 'self' https://codesandbox.io;
x-frame-options: DENY
x-matched-path: /_sites/[subdomain]/llms.txt
x-vercel-cache: MISS
content-encoding: gzip
```

</details>

## llms-full.txt

| Field         | Value                                             |
| ------------- | ------------------------------------------------- |
| Source URL    | https://docs.langchain.com/llms-full.txt          |
| Effective URL | https://docs.langchain.com/llms-full.txt          |
| Status        | 200                                               |
| Content-Type  | text/plain; charset=utf-8                         |
| Body bytes    | 11,494,496                                        |
| Duration      | 1,014 ms                                          |
| Saved body    | [llms-full.sample.txt](./llms-full.sample.txt)    |
| Raw metadata  | [status JSON](./llms-full.sample.txt.status.json) |

High-signal response headers:

```http
HTTP/2 200
content-type: text/plain; charset=utf-8
cf-cache-status: HIT
cache-control: public, max-age=86400
last-modified: Thu, 04 Jun 2026 01:26:24 GMT
server: cloudflare
content-encoding: gzip
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
  https://docs.langchain.com/llms-full.txt
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://docs.langchain.com/llms-full.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

HTTP/2 200
date: Thu, 04 Jun 2026 21:48:36 GMT
content-type: text/plain; charset=utf-8
cf-ray: a06a24856f0d6c35-DFW
cf-cache-status: HIT
age: 73331
cache-control: public, max-age=86400
x-vercel-id: iad1::iad1::7c8b5-1780536383505-1de54fcd8491
last-modified: Thu, 04 Jun 2026 01:26:24 GMT
server: cloudflare
strict-transport-security: max-age=63072000
vary: rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch, accept-encoding
content-security-policy: worker-src * blob: data: 'unsafe-eval' 'unsafe-inline'; object-src data: ; base-uri 'self'; upgrade-insecure-requests; frame-ancestors 'self' https://dashboard.mintlify.com https://app.mintlify.com; form-action 'self' https://codesandbox.io;
x-frame-options: DENY
x-matched-path: /_sites/[subdomain]/llms-full.txt
x-vercel-cache: MISS
content-encoding: gzip
```

</details>

## agent skills index

| Field         | Value                                                                        |
| ------------- | ---------------------------------------------------------------------------- |
| Source URL    | https://docs.langchain.com/.well-known/agent-skills/index.json               |
| Effective URL | https://docs.langchain.com/.well-known/agent-skills/index.json               |
| Status        | 200                                                                          |
| Content-Type  | application/json                                                             |
| Body bytes    | 620                                                                          |
| Duration      | 94 ms                                                                        |
| Saved body    | [.well-known/agent-skills/index.json](./.well-known/agent-skills/index.json) |
| Raw metadata  | [status JSON](./.well-known/agent-skills/index.json.status.json)             |

High-signal response headers:

```http
HTTP/2 200
content-type: application/json
cf-cache-status: HIT
cache-control: public, max-age=86400
last-modified: Thu, 04 Jun 2026 21:44:14 GMT
server: cloudflare
content-encoding: gzip
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
  https://docs.langchain.com/.well-known/agent-skills/index.json
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://docs.langchain.com/.well-known/agent-skills/index.json HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

HTTP/2 200
date: Thu, 04 Jun 2026 21:48:37 GMT
content-type: application/json
cf-ray: a06a248bce892cd9-DFW
cf-cache-status: HIT
age: 4610
cache-control: public, max-age=86400
x-vercel-id: iad1::iad1::l2bsj-1780605105940-70440744169d
last-modified: Thu, 04 Jun 2026 21:44:14 GMT
server: cloudflare
strict-transport-security: max-age=63072000
vary: rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch, accept-encoding
content-security-policy: worker-src * blob: data: 'unsafe-eval' 'unsafe-inline'; object-src data: ; base-uri 'self'; upgrade-insecure-requests; frame-ancestors 'self' https://dashboard.mintlify.com https://app.mintlify.com; form-action 'self' https://codesandbox.io;
x-frame-options: DENY
x-matched-path: /_sites/[subdomain]/.well-known/agent-skills/index.json
x-vercel-cache: MISS
content-encoding: gzip
```

</details>
