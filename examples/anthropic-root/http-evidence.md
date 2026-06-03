# Anthropic Root HTTP Evidence

**Captured:** 2026-06-02T19:28:00.989Z

This is a GitHub-readable alternative to the raw curl transcript. It puts the
decision-grade evidence first, then hides reproduction commands and header
details behind collapsible sections.

Machine-readable sidecars:

- [http.har.json](./http.har.json)
- [robots.txt.status.json](./robots.txt.status.json)
- [sitemap.xml.status.json](./sitemap.xml.status.json)
- [llms.txt.status.json](./llms.txt.status.json)

## Endpoint Summary

| Endpoint    | Status | Content Type             | Body Bytes | Saved Body                   | Notes                         |
| ----------- | -----: | ------------------------ | ---------: | ---------------------------- | ----------------------------- |
| robots.txt  |    200 | text/plain               |         71 | [robots.txt](./robots.txt)   | Crawl policy file is present. |
| sitemap.xml |    200 | application/xml          |     57,483 | [sitemap.xml](./sitemap.xml) | Sitemap is present.           |
| llms.txt    |    404 | text/html; charset=utf-8 |     61,067 | status only                  | Root site has no `llms.txt`.  |

## robots.txt

| Field         | Value                                   |
| ------------- | --------------------------------------- |
| Source URL    | https://www.anthropic.com/robots.txt    |
| Effective URL | https://www.anthropic.com/robots.txt    |
| Status        | 200                                     |
| Content-Type  | text/plain                              |
| Body bytes    | 71                                      |
| Duration      | 2,057 ms                                |
| Saved body    | [robots.txt](./robots.txt)              |
| Raw metadata  | [status JSON](./robots.txt.status.json) |

High-signal response headers:

```http
HTTP/2 200
content-type: text/plain
cache-control: public, max-age=14400
cf-cache-status: MISS
server: cloudflare
x-nextjs-cache: HIT
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
  https://www.anthropic.com/robots.txt
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://www.anthropic.com/robots.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

HTTP/2 200
date: Tue, 02 Jun 2026 19:28:33 GMT
content-type: text/plain
cf-ray: a058dc973d20d1a1-MCI
cf-cache-status: MISS
cache-control: public, max-age=14400
expires: Tue, 02 Jun 2026 23:28:33 GMT
server: cloudflare
strict-transport-security: max-age=3600
vary: rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch, Accept-Encoding
via: 1.1 google
content-security-policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.intellimize.co https://cdnjs.cloudflare.com https://d3e54v103j8qbb.cloudfront.net https://cdn.prod.website-files.com https://hubspotonwebflow.com https://www.googletagmanager.com https://a-cdn.anthropic.com https://connect.facebook.net https://www.youtub ... [truncated]
alt-svc: h3=":443"; ma=86400
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
x-nextjs-cache: HIT
x-xss-protection: 1; mode=block
set-cookie: [redacted]
content-encoding: gzip
```

</details>

## sitemap.xml

| Field         | Value                                    |
| ------------- | ---------------------------------------- |
| Source URL    | https://www.anthropic.com/sitemap.xml    |
| Effective URL | https://www.anthropic.com/sitemap.xml    |
| Status        | 200                                      |
| Content-Type  | application/xml                          |
| Body bytes    | 57,483                                   |
| Duration      | 2,552 ms                                 |
| Saved body    | [sitemap.xml](./sitemap.xml)             |
| Raw metadata  | [status JSON](./sitemap.xml.status.json) |

High-signal response headers:

```http
HTTP/2 200
content-type: application/xml
cache-control: public, max-age=0, must-revalidate
cf-cache-status: DYNAMIC
server: cloudflare
x-nextjs-cache: HIT
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
  https://www.anthropic.com/sitemap.xml
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://www.anthropic.com/sitemap.xml HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

HTTP/2 200
date: Tue, 02 Jun 2026 19:28:36 GMT
content-type: application/xml
set-cookie: [redacted]
set-cookie: [redacted]
cf-ray: a058dca43d9fd316-MCI
cf-cache-status: DYNAMIC
cache-control: public, max-age=0, must-revalidate
server: cloudflare
strict-transport-security: max-age=3600
vary: rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch, accept-encoding
via: 1.1 google
content-security-policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.intellimize.co https://cdnjs.cloudflare.com https://d3e54v103j8qbb.cloudfront.net https://cdn.prod.website-files.com https://hubspotonwebflow.com https://www.googletagmanager.com https://a-cdn.anthropic.com https://connect.facebook.net https://www.youtub ... [truncated]
alt-svc: h3=":443"; ma=86400
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
x-nextjs-cache: HIT
x-xss-protection: 1; mode=block
content-encoding: gzip
```

</details>

## llms.txt

| Field         | Value                                 |
| ------------- | ------------------------------------- |
| Source URL    | https://www.anthropic.com/llms.txt    |
| Effective URL | https://www.anthropic.com/llms.txt    |
| Status        | 404                                   |
| Content-Type  | text/html; charset=utf-8              |
| Body bytes    | 61,067                                |
| Duration      | 4,189 ms                              |
| Saved body    | status only                           |
| Raw metadata  | [status JSON](./llms.txt.status.json) |

High-signal response headers:

```http
HTTP/2 404
content-type: text/html; charset=utf-8
cache-control: private, no-cache, no-store, max-age=0, must-revalidate
cf-cache-status: DYNAMIC
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
  https://www.anthropic.com/llms.txt
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://www.anthropic.com/llms.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

HTTP/2 404
date: Tue, 02 Jun 2026 19:28:40 GMT
content-type: text/html; charset=utf-8
set-cookie: [redacted]
set-cookie: [redacted]
cf-ray: a058dcb45cda4de2-MCI
cf-cache-status: DYNAMIC
cache-control: private, no-cache, no-store, max-age=0, must-revalidate
link: </_next/static/media/AnthropicMono_Italic_Web-s.p.0a6clcalc57jy.woff2>; rel=preload; as="font"; crossorigin=""; nonce="ODhlZmY4YzItNTMxOC00NDgzLWI5NmUtMjYwNmM2NmFmMjY0"; type="font/woff2", ... [truncated]
server: cloudflare
strict-transport-security: max-age=3600
vary: rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch, Accept-Encoding
via: 1.1 google
content-security-policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.intellimize.co https://cdnjs.cloudflare.com https://d3e54v103j8qbb.cloudfront.net https://cdn.prod.website-files.com https://hubspotonwebflow.com https://www.googletagmanager.com https://a-cdn.anthropic.com https://connect.facebook.net https://www.youtub ... [truncated]
alt-svc: h3=":443"; ma=86400
x-cloud-trace-context: 51971a1cb35e5855100a5958ff7085b9
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
x-xss-protection: 1; mode=block
content-encoding: gzip
```

</details>
