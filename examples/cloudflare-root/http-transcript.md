# Cloudflare Root HTTP Transcript

**Captured:** 2026-06-02T19:28:00.989Z

## robots.txt

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output robots.txt --write-out '<curl-metadata>' https://www.cloudflare.com/robots.txt
```

Request:

```http
GET https://www.cloudflare.com/robots.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 200
date: Tue, 02 Jun 2026 19:28:26 GMT
content-type: text/plain
link: </.well-known/agents.json>; rel="api-catalog", </.well-known/webmcp.json>; rel="service-desc", </openapi.json>; rel="service-desc", </llms.txt>; rel="service-doc", </sitemap.xml>; rel="sitemap", </fonts/Kunst%20Grotesk%20Regular.woff2>; rel=preload; as=font; type="font/woff2"; crossorigin, </fonts/Kunst%20Grotesk%20Medium.woff2>; rel=preload; as=font; type="font/woff2"; crossorigin, <https://ot.www.cloudflare.com>; rel=preconnect; crossorigin, <https://imagedelivery.net>; rel=preconnect; crossorigin
cf-cache-status: HIT
cache-control: public, max-age=0, must-revalidate
strict-transport-security: max-age=31536000; includeSubDomains; preload
cf-placement: local-MCI
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
cf-ray: a058dc73acb84de2-MCI
alt-svc: h3=":443"; ma=86400
```

- Status: 200
- Effective URL: https://www.cloudflare.com/robots.txt
- Content-Type: text/plain
- Body bytes: 1099
- Saved body: robots.txt
- Truncated: no

## sitemap.xml

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output sitemap.xml --write-out '<curl-metadata>' https://www.cloudflare.com/sitemap.xml
```

Request:

```http
GET https://www.cloudflare.com/sitemap.xml HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 200
date: Tue, 02 Jun 2026 19:28:26 GMT
content-type: application/xml; charset=utf-8
link: <https://www.cloudflare.com/.well-known/agents.json>; rel="api-catalog", <https://www.cloudflare.com/.well-known/webmcp.json>; rel="service-desc", <https://www.cloudflare.com/openapi.json>; rel="service-desc", <https://www.cloudflare.com/llms.txt>; rel="service-doc", <https://www.cloudflare.com/sitemap.xml>; rel="sitemap"
cf-ray: a058dc74cf9626ce-DFW
cf-cache-status: HIT
age: 2664
cache-control: max-age=3600
last-modified: Tue, 02 Jun 2026 18:44:01 GMT
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

- Status: 200
- Effective URL: https://www.cloudflare.com/sitemap.xml
- Content-Type: application/xml; charset=utf-8
- Body bytes: 1404298
- Saved body: sitemap.xml
- Truncated: yes

## llms.txt

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output llms.txt --write-out '<curl-metadata>' https://www.cloudflare.com/llms.txt
```

Request:

```http
GET https://www.cloudflare.com/llms.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 200
date: Tue, 02 Jun 2026 19:28:26 GMT
content-type: text/plain
link: </.well-known/agents.json>; rel="api-catalog", </.well-known/webmcp.json>; rel="service-desc", </openapi.json>; rel="service-desc", </llms.txt>; rel="service-doc", </sitemap.xml>; rel="sitemap", </fonts/Kunst%20Grotesk%20Regular.woff2>; rel=preload; as=font; type="font/woff2"; crossorigin, </fonts/Kunst%20Grotesk%20Medium.woff2>; rel=preload; as=font; type="font/woff2"; crossorigin, <https://ot.www.cloudflare.com>; rel=preconnect; crossorigin, <https://imagedelivery.net>; rel=preconnect; crossorigin
cf-cache-status: HIT
cache-control: public, max-age=0, must-revalidate
strict-transport-security: max-age=31536000; includeSubDomains; preload
cf-placement: local-MCI
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
cf-ray: a058dc75ee04d316-MCI
alt-svc: h3=":443"; ma=86400
```

- Status: 200
- Effective URL: https://www.cloudflare.com/llms.txt
- Content-Type: text/plain
- Body bytes: 16883
- Saved body: llms.txt
- Truncated: no

## llms-full.txt

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output llms-full.sample.txt --write-out '<curl-metadata>' https://www.cloudflare.com/llms-full.txt
```

Request:

```http
GET https://www.cloudflare.com/llms-full.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 200
date: Tue, 02 Jun 2026 19:28:27 GMT
content-type: text/plain
link: </.well-known/agents.json>; rel="api-catalog", </.well-known/webmcp.json>; rel="service-desc", </openapi.json>; rel="service-desc", </llms.txt>; rel="service-doc", </sitemap.xml>; rel="sitemap", </fonts/Kunst%20Grotesk%20Regular.woff2>; rel=preload; as=font; type="font/woff2"; crossorigin, </fonts/Kunst%20Grotesk%20Medium.woff2>; rel=preload; as=font; type="font/woff2"; crossorigin, <https://ot.www.cloudflare.com>; rel=preconnect; crossorigin, <https://imagedelivery.net>; rel=preconnect; crossorigin
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
cf-ray: a058dc76ebc6467e-DFW
alt-svc: h3=":443"; ma=86400
```

- Status: 200
- Effective URL: https://www.cloudflare.com/llms-full.txt
- Content-Type: text/plain
- Body bytes: 205920
- Saved body: llms-full.sample.txt
- Truncated: no
