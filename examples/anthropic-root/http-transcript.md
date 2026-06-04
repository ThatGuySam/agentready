# Anthropic Root HTTP Transcript

**Captured:** 2026-06-04T21:48:12.668Z

## robots.txt

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output robots.txt --write-out '<curl-metadata>' https://www.anthropic.com/robots.txt
```

Request:

```http
GET https://www.anthropic.com/robots.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 200
date: Thu, 04 Jun 2026 21:48:45 GMT
content-type: text/plain
cf-ray: a06a24baab9ef05f-DFW
cf-cache-status: BYPASS
cache-control: public, max-age=14400
expires: Fri, 05 Jun 2026 01:48:45 GMT
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

- Status: 200
- Effective URL: https://www.anthropic.com/robots.txt
- Content-Type: text/plain
- Body bytes: 71
- Saved body: robots.txt
- Truncated: no

## sitemap.xml

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output sitemap.xml --write-out '<curl-metadata>' https://www.anthropic.com/sitemap.xml
```

Request:

```http
GET https://www.anthropic.com/sitemap.xml HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 200
date: Thu, 04 Jun 2026 21:48:45 GMT
content-type: application/xml
set-cookie: [redacted]
set-cookie: [redacted]
cf-ray: a06a24c25e4ad18b-MCI
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

- Status: 200
- Effective URL: https://www.anthropic.com/sitemap.xml
- Content-Type: application/xml
- Body bytes: 57746
- Saved body: sitemap.xml
- Truncated: no

## llms.txt

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output llms.txt --write-out '<curl-metadata>' https://www.anthropic.com/llms.txt
```

Request:

```http
GET https://www.anthropic.com/llms.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 404
date: Thu, 04 Jun 2026 21:48:46 GMT
content-type: text/html; charset=utf-8
set-cookie: [redacted]
set-cookie: [redacted]
cf-ray: a06a24c34aa7e135-MCI
cf-cache-status: DYNAMIC
cache-control: private, no-cache, no-store, max-age=0, must-revalidate
link: </_next/static/media/AnthropicMono_Italic_Web-s.p.0a6clcalc57jy.woff2>; rel=preload; as="font"; crossorigin=""; nonce="M2VhYjU0YjItOWI1ZS00NzEwLWE1OTUtODg0MmM2NDk1OWEy"; type="font/woff2", </_next/static/media/AnthropicMono_Roman_Web-s.p.0dvv1q62z~ge1.woff2>; rel=preload; as="font"; crossorigin=""; nonce="M2VhYjU0YjItO ... [truncated]
server: cloudflare
strict-transport-security: max-age=3600
vary: rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch, Accept-Encoding
via: 1.1 google
content-security-policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.intellimize.co https://cdnjs.cloudflare.com https://d3e54v103j8qbb.cloudfront.net https://cdn.prod.website-files.com https://hubspotonwebflow.com https://www.googletagmanager.com https://a-cdn.anthropic.com https://connect.facebook.net https://www.youtub ... [truncated]
alt-svc: h3=":443"; ma=86400
x-cloud-trace-context: f373e08517844801fff6924047631200
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
x-xss-protection: 1; mode=block
content-encoding: gzip
```

- Status: 404
- Effective URL: https://www.anthropic.com/llms.txt
- Content-Type: text/html; charset=utf-8
- Body bytes: 61067
- Saved body: status only
- Truncated: no
