# Claude Platform HTTP Transcript

**Captured:** 2026-06-02T19:28:00.989Z

## robots.txt

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output robots.txt --write-out '<curl-metadata>' https://platform.claude.com/robots.txt
```

Request:

```http
GET https://platform.claude.com/robots.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 200
date: Tue, 02 Jun 2026 19:28:12 GMT
content-type: text/plain
strict-transport-security: max-age=31536000; includeSubDomains; preload
x-xss-protection: 1; mode=block
x-frame-options: SAMEORIGIN
x-content-type-options: nosniff
vary: rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch
cache-control: public, max-age=0, must-revalidate
server: cloudflare
via: 1.1 google
alt-svc: h3=":443"; ma=86400
last-modified: Tue, 02 Jun 2026 19:28:12 GMT
cf-cache-status: EXPIRED
set-cookie: [redacted]
content-encoding: gzip
cf-ray: a058dc1d7a766b2a-DFW
```

- Status: 200
- Effective URL: https://platform.claude.com/robots.txt
- Content-Type: text/plain
- Body bytes: 80
- Saved body: robots.txt
- Truncated: no

## sitemap.xml

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output sitemap.xml --write-out '<curl-metadata>' https://platform.claude.com/sitemap.xml
```

Request:

```http
GET https://platform.claude.com/sitemap.xml HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 200
date: Tue, 02 Jun 2026 19:28:12 GMT
content-type: application/xml
strict-transport-security: max-age=31536000; includeSubDomains; preload
x-xss-protection: 1; mode=block
x-frame-options: SAMEORIGIN
x-content-type-options: nosniff
vary: rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch
cache-control: public, max-age=0, must-revalidate
server: cloudflare
via: 1.1 google
alt-svc: h3=":443"; ma=86400
last-modified: Tue, 02 Jun 2026 19:28:12 GMT
cf-cache-status: EXPIRED
set-cookie: [redacted]
content-encoding: gzip
cf-ray: a058dc1ecbf850ec-MCI
```

- Status: 200
- Effective URL: https://platform.claude.com/sitemap.xml
- Content-Type: application/xml
- Body bytes: 359344
- Saved body: sitemap.xml
- Truncated: no

## llms.txt

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output llms.txt --write-out '<curl-metadata>' https://platform.claude.com/llms.txt
```

Request:

```http
GET https://platform.claude.com/llms.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 200
date: Tue, 02 Jun 2026 19:28:13 GMT
content-type: text/plain; charset=UTF-8
strict-transport-security: max-age=31536000; includeSubDomains; preload
x-xss-protection: 1; mode=block
x-frame-options: SAMEORIGIN
x-content-type-options: nosniff
set-cookie: [redacted]
cache-control: public, max-age=0
last-modified: Tue, 02 Jun 2026 18:51:29 GMT
etag: W/"29177-19e89ad2f68"
x-cloud-trace-context: 8c293663f5878d7a84e398fcc5d67d62
server: cloudflare
via: 1.1 google
alt-svc: h3=":443"; ma=86400
cf-cache-status: REVALIDATED
content-encoding: gzip
cf-ray: a058dc20bc59b31e-DFW
```

- Status: 200
- Effective URL: https://platform.claude.com/llms.txt
- Content-Type: text/plain; charset=UTF-8
- Body bytes: 168311
- Saved body: llms.txt
- Truncated: no

## llms-full.txt

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output llms-full.sample.txt --write-out '<curl-metadata>' https://platform.claude.com/llms-full.txt
```

Request:

```http
GET https://platform.claude.com/llms-full.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 200
date: Tue, 02 Jun 2026 19:28:13 GMT
content-type: text/plain; charset=utf-8
strict-transport-security: max-age=31536000; includeSubDomains; preload
x-xss-protection: 1; mode=block
x-frame-options: SAMEORIGIN
x-content-type-options: nosniff
vary: rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch
cache-control: public, max-age=3600
server: cloudflare
via: 1.1 google
alt-svc: h3=":443"; ma=86400
age: 2014
last-modified: Tue, 02 Jun 2026 19:18:50 GMT
cf-cache-status: HIT
set-cookie: [redacted]
content-encoding: gzip
cf-ray: a058dc229ee66a1e-MCI
```

- Status: 200
- Effective URL: https://platform.claude.com/llms-full.txt
- Content-Type: text/plain; charset=utf-8
- Body bytes: 71523030
- Saved body: llms-full.sample.txt
- Truncated: yes
