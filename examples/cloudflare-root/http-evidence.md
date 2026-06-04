# Cloudflare Root HTTP Evidence

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

## Endpoint Summary

| Endpoint      | Status | Content Type                   | Body Bytes | Saved Body                                     | Notes                |
| ------------- | -----: | ------------------------------ | ---------: | ---------------------------------------------- | -------------------- |
| robots.txt    |    200 | text/plain                     |      1,099 | [robots.txt](./robots.txt)                     | Artifact body saved. |
| sitemap.xml   |    200 | application/xml; charset=utf-8 |  1,404,298 | [sitemap.xml](./sitemap.xml)                   | Artifact body saved. |
| llms.txt      |    200 | text/plain                     |     16,883 | [llms.txt](./llms.txt)                         | Artifact body saved. |
| llms-full.txt |    200 | text/plain                     |    205,920 | [llms-full.sample.txt](./llms-full.sample.txt) | Artifact body saved. |

## robots.txt

| Field         | Value                                   |
| ------------- | --------------------------------------- |
| Source URL    | https://www.cloudflare.com/robots.txt   |
| Effective URL | https://www.cloudflare.com/robots.txt   |
| Status        | 200                                     |
| Content-Type  | text/plain                              |
| Body bytes    | 1,099                                   |
| Duration      | 1,405 ms                                |
| Saved body    | [robots.txt](./robots.txt)              |
| Raw metadata  | [status JSON](./robots.txt.status.json) |

High-signal response headers:

```http
HTTP/2 200
content-type: text/plain
cf-cache-status: HIT
cache-control: public, max-age=0, must-revalidate
etag: W/"0e9fa7a0bd53c344b463d30c8eb71478"
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
  https://www.cloudflare.com/robots.txt
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://www.cloudflare.com/robots.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

HTTP/2 200
date: Thu, 04 Jun 2026 21:48:38 GMT
content-type: text/plain
link: </.well-known/agents.json>; rel="api-catalog", </.well-known/webmcp.json>; rel="service-desc", </openapi.json>; rel="service-desc", </llms.txt>; rel="service-doc", </sitemap.xml>; rel="sitemap", </fonts/Kunst%20Grotesk%20Regular.woff2>; rel=preload; as=font; type="font/woff2"; crossorigin, </fonts/Kunst%20Grotesk%20Med ... [truncated]
cf-cache-status: HIT
cache-control: public, max-age=0, must-revalidate
strict-transport-security: max-age=31536000; includeSubDomains; preload
cf-placement: remote-PRG
x-served-by: marketing-site
content-security-policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://static.cloudflareinsights.com https://static-staging.cloudflareinsights.com https://challenges.cloudflare.com https://*.onetrust.com https://cdn.cookielaw.org https://ot.www.cloudflare.com https://www.googletagmanager.com https://tagmanager.goo ... [truncated]
cross-origin-opener-policy: unsafe-none
cross-origin-resource-policy: cross-origin
permissions-policy: camera=(), microphone=(), geolocation=(), payment=(), usb=()
referrer-policy: strict-origin-when-cross-origin
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
x-xss-protection: 1; mode=block
vary: accept-encoding
set-cookie: [redacted]
report-to: [redacted]
nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
etag: W/"0e9fa7a0bd53c344b463d30c8eb71478"
content-encoding: gzip
server: cloudflare
cf-ray: a06a248dfc4383a1-DFW
alt-svc: h3=":443"; ma=86400
```

</details>

## sitemap.xml

| Field         | Value                                    |
| ------------- | ---------------------------------------- |
| Source URL    | https://www.cloudflare.com/sitemap.xml   |
| Effective URL | https://www.cloudflare.com/sitemap.xml   |
| Status        | 200                                      |
| Content-Type  | application/xml; charset=utf-8           |
| Body bytes    | 1,404,298                                |
| Duration      | 113 ms                                   |
| Saved body    | [sitemap.xml](./sitemap.xml)             |
| Raw metadata  | [status JSON](./sitemap.xml.status.json) |

High-signal response headers:

```http
HTTP/2 200
content-type: application/xml; charset=utf-8
cf-cache-status: HIT
cache-control: max-age=3600
last-modified: Thu, 04 Jun 2026 21:46:18 GMT
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
  https://www.cloudflare.com/sitemap.xml
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://www.cloudflare.com/sitemap.xml HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

HTTP/2 200
date: Thu, 04 Jun 2026 21:48:38 GMT
content-type: application/xml; charset=utf-8
link: <https://www.cloudflare.com/.well-known/agents.json>; rel="api-catalog", <https://www.cloudflare.com/.well-known/webmcp.json>; rel="service-desc", <https://www.cloudflare.com/openapi.json>; rel="service-desc", <https://www.cloudflare.com/llms.txt>; rel="service-doc", <https://www.cloudflare.com/sitemap.xml>; rel="sitem ... [truncated]
cf-ray: a06a24964b58d31c-MCI
cf-cache-status: HIT
age: 140
cache-control: max-age=3600
last-modified: Thu, 04 Jun 2026 21:46:18 GMT
server: cloudflare
strict-transport-security: max-age=31536000; includeSubDomains
vary: Accept-Encoding
cf-placement: remote-PRG
content-security-policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://static.cloudflareinsights.com https://static-staging.cloudflareinsights.com https://challenges.cloudflare.com https://*.onetrust.com https://cdn.cookielaw.org https://ot.www.cloudflare.com https://www.googletagmanager.com https://tagmanager.goo ... [truncated]
cross-origin-opener-policy: unsafe-none
cross-origin-resource-policy: cross-origin
permissions-policy: geolocation=(), camera=(), microphone=()
referrer-policy: strict-origin-when-cross-origin
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
x-served-by: marketing-site
x-xss-protection: 1; mode=block
set-cookie: [redacted]
report-to: [redacted]
nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
content-encoding: gzip
alt-svc: h3=":443"; ma=86400
```

</details>

## llms.txt

| Field         | Value                                 |
| ------------- | ------------------------------------- |
| Source URL    | https://www.cloudflare.com/llms.txt   |
| Effective URL | https://www.cloudflare.com/llms.txt   |
| Status        | 200                                   |
| Content-Type  | text/plain                            |
| Body bytes    | 16,883                                |
| Duration      | 510 ms                                |
| Saved body    | [llms.txt](./llms.txt)                |
| Raw metadata  | [status JSON](./llms.txt.status.json) |

High-signal response headers:

```http
HTTP/2 200
content-type: text/plain
cf-cache-status: HIT
cache-control: public, max-age=0, must-revalidate
etag: W/"47475ba620c61a9ef430b44f770b5523"
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
  https://www.cloudflare.com/llms.txt
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://www.cloudflare.com/llms.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

HTTP/2 200
date: Thu, 04 Jun 2026 21:48:39 GMT
content-type: text/plain
link: </.well-known/agents.json>; rel="api-catalog", </.well-known/webmcp.json>; rel="service-desc", </openapi.json>; rel="service-desc", </llms.txt>; rel="service-doc", </sitemap.xml>; rel="sitemap", </fonts/Kunst%20Grotesk%20Regular.woff2>; rel=preload; as=font; type="font/woff2"; crossorigin, </fonts/Kunst%20Grotesk%20Med ... [truncated]
cf-cache-status: HIT
cache-control: public, max-age=0, must-revalidate
strict-transport-security: max-age=31536000; includeSubDomains; preload
cf-placement: remote-PRG
x-served-by: marketing-site
content-security-policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://static.cloudflareinsights.com https://static-staging.cloudflareinsights.com https://challenges.cloudflare.com https://*.onetrust.com https://cdn.cookielaw.org https://ot.www.cloudflare.com https://www.googletagmanager.com https://tagmanager.goo ... [truncated]
cross-origin-opener-policy: unsafe-none
cross-origin-resource-policy: cross-origin
permissions-policy: camera=(), microphone=(), geolocation=(), payment=(), usb=()
referrer-policy: strict-origin-when-cross-origin
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
x-xss-protection: 1; mode=block
vary: accept-encoding
set-cookie: [redacted]
report-to: [redacted]
nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
etag: W/"47475ba620c61a9ef430b44f770b5523"
content-encoding: gzip
server: cloudflare
cf-ray: a06a249788d4d304-MCI
alt-svc: h3=":443"; ma=86400
```

</details>

## llms-full.txt

| Field         | Value                                             |
| ------------- | ------------------------------------------------- |
| Source URL    | https://www.cloudflare.com/llms-full.txt          |
| Effective URL | https://www.cloudflare.com/llms-full.txt          |
| Status        | 200                                               |
| Content-Type  | text/plain                                        |
| Body bytes    | 205,920                                           |
| Duration      | 431 ms                                            |
| Saved body    | [llms-full.sample.txt](./llms-full.sample.txt)    |
| Raw metadata  | [status JSON](./llms-full.sample.txt.status.json) |

High-signal response headers:

```http
HTTP/2 200
content-type: text/plain
cf-cache-status: HIT
cache-control: public, max-age=0, must-revalidate
etag: W/"1b699629f86679f47cc033b88fd46460"
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
  --output llms-full.sample.txt \
  --write-out '<curl-metadata>' \
  https://www.cloudflare.com/llms-full.txt
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://www.cloudflare.com/llms-full.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

HTTP/2 200
date: Thu, 04 Jun 2026 21:48:39 GMT
content-type: text/plain
link: </.well-known/agents.json>; rel="api-catalog", </.well-known/webmcp.json>; rel="service-desc", </openapi.json>; rel="service-desc", </llms.txt>; rel="service-doc", </sitemap.xml>; rel="sitemap", </fonts/Kunst%20Grotesk%20Regular.woff2>; rel=preload; as=font; type="font/woff2"; crossorigin, </fonts/Kunst%20Grotesk%20Med ... [truncated]
cf-cache-status: HIT
cache-control: public, max-age=0, must-revalidate
strict-transport-security: max-age=31536000; includeSubDomains
cf-placement: remote-PRG
x-served-by: marketing-site
content-security-policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://static.cloudflareinsights.com https://static-staging.cloudflareinsights.com https://challenges.cloudflare.com https://*.onetrust.com https://cdn.cookielaw.org https://ot.www.cloudflare.com https://www.googletagmanager.com https://tagmanager.goo ... [truncated]
cross-origin-opener-policy: unsafe-none
cross-origin-resource-policy: cross-origin
permissions-policy: geolocation=(), camera=(), microphone=()
referrer-policy: strict-origin-when-cross-origin
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
x-xss-protection: 1; mode=block
vary: accept-encoding
set-cookie: [redacted]
report-to: [redacted]
nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
etag: W/"1b699629f86679f47cc033b88fd46460"
content-encoding: gzip
server: cloudflare
cf-ray: a06a249adb164867-DFW
alt-svc: h3=":443"; ma=86400
```

</details>
