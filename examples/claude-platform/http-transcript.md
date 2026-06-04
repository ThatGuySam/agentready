# Claude Platform HTTP Transcript

**Captured:** 2026-06-04T21:48:12.668Z

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
date: Thu, 04 Jun 2026 21:48:24 GMT
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
last-modified: Thu, 04 Jun 2026 21:48:24 GMT
cf-cache-status: EXPIRED
set-cookie: [redacted]
content-encoding: gzip
cf-ray: a06a243c8bea166b-MCI
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
date: Thu, 04 Jun 2026 21:48:24 GMT
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
last-modified: Thu, 04 Jun 2026 21:48:24 GMT
cf-cache-status: EXPIRED
set-cookie: [redacted]
content-encoding: gzip
cf-ray: a06a243da98658c5-DFW
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
date: Thu, 04 Jun 2026 21:48:25 GMT
content-type: text/plain; charset=UTF-8
strict-transport-security: max-age=31536000; includeSubDomains; preload
x-xss-protection: 1; mode=block
x-frame-options: SAMEORIGIN
x-content-type-options: nosniff
set-cookie: [redacted]
cache-control: public, max-age=0
last-modified: Thu, 04 Jun 2026 17:23:49 GMT
etag: W/"29177-19e93a9a488"
x-cloud-trace-context: db637fded905fbbfef51516d8d17c4d7
server: cloudflare
via: 1.1 google
alt-svc: h3=":443"; ma=86400
cf-cache-status: REVALIDATED
content-encoding: gzip
cf-ray: a06a243f8f534787-DFW
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
date: Thu, 04 Jun 2026 21:48:25 GMT
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
age: 392
last-modified: Thu, 04 Jun 2026 21:44:01 GMT
cf-cache-status: HIT
set-cookie: [redacted]
content-encoding: gzip
cf-ray: a06a2440ea4143ae-MCI
```

- Status: 200
- Effective URL: https://platform.claude.com/llms-full.txt
- Content-Type: text/plain; charset=utf-8
- Body bytes: 71562833
- Saved body: llms-full.sample.txt
- Truncated: yes
