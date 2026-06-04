# Claude Platform HTTP Evidence

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

| Endpoint      | Status | Content Type              | Body Bytes | Saved Body                                     | Notes                |
| ------------- | -----: | ------------------------- | ---------: | ---------------------------------------------- | -------------------- |
| robots.txt    |    200 | text/plain                |         80 | [robots.txt](./robots.txt)                     | Artifact body saved. |
| sitemap.xml   |    200 | application/xml           |    359,344 | [sitemap.xml](./sitemap.xml)                   | Artifact body saved. |
| llms.txt      |    200 | text/plain; charset=UTF-8 |    168,311 | [llms.txt](./llms.txt)                         | Artifact body saved. |
| llms-full.txt |    200 | text/plain; charset=utf-8 | 71,562,833 | [llms-full.sample.txt](./llms-full.sample.txt) | Artifact body saved. |

## robots.txt

| Field         | Value                                   |
| ------------- | --------------------------------------- |
| Source URL    | https://platform.claude.com/robots.txt  |
| Effective URL | https://platform.claude.com/robots.txt  |
| Status        | 200                                     |
| Content-Type  | text/plain                              |
| Body bytes    | 80                                      |
| Duration      | 155 ms                                  |
| Saved body    | [robots.txt](./robots.txt)              |
| Raw metadata  | [status JSON](./robots.txt.status.json) |

High-signal response headers:

```http
HTTP/2 200
content-type: text/plain
cache-control: public, max-age=0, must-revalidate
server: cloudflare
last-modified: Thu, 04 Jun 2026 21:48:24 GMT
cf-cache-status: EXPIRED
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
  https://platform.claude.com/robots.txt
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://platform.claude.com/robots.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

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

</details>

## sitemap.xml

| Field         | Value                                    |
| ------------- | ---------------------------------------- |
| Source URL    | https://platform.claude.com/sitemap.xml  |
| Effective URL | https://platform.claude.com/sitemap.xml  |
| Status        | 200                                      |
| Content-Type  | application/xml                          |
| Body bytes    | 359,344                                  |
| Duration      | 289 ms                                   |
| Saved body    | [sitemap.xml](./sitemap.xml)             |
| Raw metadata  | [status JSON](./sitemap.xml.status.json) |

High-signal response headers:

```http
HTTP/2 200
content-type: application/xml
cache-control: public, max-age=0, must-revalidate
server: cloudflare
last-modified: Thu, 04 Jun 2026 21:48:24 GMT
cf-cache-status: EXPIRED
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
  https://platform.claude.com/sitemap.xml
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://platform.claude.com/sitemap.xml HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

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

</details>

## llms.txt

| Field         | Value                                 |
| ------------- | ------------------------------------- |
| Source URL    | https://platform.claude.com/llms.txt  |
| Effective URL | https://platform.claude.com/llms.txt  |
| Status        | 200                                   |
| Content-Type  | text/plain; charset=UTF-8             |
| Body bytes    | 168,311                               |
| Duration      | 197 ms                                |
| Saved body    | [llms.txt](./llms.txt)                |
| Raw metadata  | [status JSON](./llms.txt.status.json) |

High-signal response headers:

```http
HTTP/2 200
content-type: text/plain; charset=UTF-8
cache-control: public, max-age=0
last-modified: Thu, 04 Jun 2026 17:23:49 GMT
etag: W/"29177-19e93a9a488"
server: cloudflare
cf-cache-status: REVALIDATED
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
  https://platform.claude.com/llms.txt
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://platform.claude.com/llms.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

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

</details>

## llms-full.txt

| Field         | Value                                             |
| ------------- | ------------------------------------------------- |
| Source URL    | https://platform.claude.com/llms-full.txt         |
| Effective URL | https://platform.claude.com/llms-full.txt         |
| Status        | 200                                               |
| Content-Type  | text/plain; charset=utf-8                         |
| Body bytes    | 71,562,833                                        |
| Duration      | 2,953 ms                                          |
| Saved body    | [llms-full.sample.txt](./llms-full.sample.txt)    |
| Raw metadata  | [status JSON](./llms-full.sample.txt.status.json) |

High-signal response headers:

```http
HTTP/2 200
content-type: text/plain; charset=utf-8
cache-control: public, max-age=3600
server: cloudflare
last-modified: Thu, 04 Jun 2026 21:44:01 GMT
cf-cache-status: HIT
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
  https://platform.claude.com/llms-full.txt
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://platform.claude.com/llms-full.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

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

</details>
