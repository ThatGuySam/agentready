# Cursor Docs HTTP Evidence

**Captured:** 2026-06-04T21:48:12.668Z

This is a GitHub-readable alternative to the raw curl transcript. It puts the
decision-grade evidence first, then hides reproduction commands and header
details behind collapsible sections.

Machine-readable sidecars:

- [http.har.json](./http.har.json)
- [robots.txt.status.json](./robots.txt.status.json)
- [sitemap.xml.status.json](./sitemap.xml.status.json)
- [llms.txt.status.json](./llms.txt.status.json)

## Endpoint Summary

| Endpoint    | Status | Content Type             | Body Bytes | Saved Body  | Notes                                                               |
| ----------- | -----: | ------------------------ | ---------: | ----------- | ------------------------------------------------------------------- |
| robots.txt  |    200 | text/html; charset=utf-8 |    126,376 | status only | HTML body was not saved unless this endpoint is explicitly sampled. |
| sitemap.xml |    200 | text/html; charset=utf-8 |    126,376 | status only | HTML body was not saved unless this endpoint is explicitly sampled. |
| llms.txt    |    200 | text/html; charset=utf-8 |    126,376 | status only | HTML body was not saved unless this endpoint is explicitly sampled. |

## robots.txt

| Field         | Value                                   |
| ------------- | --------------------------------------- |
| Source URL    | https://docs.cursor.com/robots.txt      |
| Effective URL | https://cursor.com/docs                 |
| Status        | 200                                     |
| Content-Type  | text/html; charset=utf-8                |
| Body bytes    | 126,376                                 |
| Duration      | 596 ms                                  |
| Saved body    | status only                             |
| Raw metadata  | [status JSON](./robots.txt.status.json) |

High-signal response headers:

```http
HTTP/2 200
cache-control: public, max-age=0, must-revalidate
content-encoding: gzip
content-type: text/html; charset=utf-8
etag: W/"7e592e5c065e59ed71f81df3a4bc9de7"
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
  https://docs.cursor.com/robots.txt
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://docs.cursor.com/robots.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

HTTP/2 200
access-control-allow-origin: *
age: 3936
cache-control: public, max-age=0, must-revalidate
content-disposition: inline
content-encoding: gzip
content-type: text/html; charset=utf-8
date: Thu, 04 Jun 2026 21:48:50 GMT
etag: W/"7e592e5c065e59ed71f81df3a4bc9de7"
server: Vercel
set-cookie: [redacted]
strict-transport-security: max-age=63072000
vary: rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch
x-generaltranslation-locale: en-US
x-matched-path: /en-US/docs
x-nextjs-prerender: 1
x-nextjs-stale-time: 300
x-vercel-cache: HIT
x-vercel-id: cle1::cx9sn-1780609730666-66dd8093831f
```

</details>

## sitemap.xml

| Field         | Value                                    |
| ------------- | ---------------------------------------- |
| Source URL    | https://docs.cursor.com/sitemap.xml      |
| Effective URL | https://cursor.com/docs                  |
| Status        | 200                                      |
| Content-Type  | text/html; charset=utf-8                 |
| Body bytes    | 126,376                                  |
| Duration      | 508 ms                                   |
| Saved body    | status only                              |
| Raw metadata  | [status JSON](./sitemap.xml.status.json) |

High-signal response headers:

```http
HTTP/2 200
cache-control: public, max-age=0, must-revalidate
content-encoding: gzip
content-type: text/html; charset=utf-8
etag: W/"7e592e5c065e59ed71f81df3a4bc9de7"
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
  https://docs.cursor.com/sitemap.xml
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://docs.cursor.com/sitemap.xml HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

HTTP/2 200
access-control-allow-origin: *
age: 3936
cache-control: public, max-age=0, must-revalidate
content-disposition: inline
content-encoding: gzip
content-type: text/html; charset=utf-8
date: Thu, 04 Jun 2026 21:48:51 GMT
etag: W/"7e592e5c065e59ed71f81df3a4bc9de7"
server: Vercel
set-cookie: [redacted]
strict-transport-security: max-age=63072000
vary: rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch
x-generaltranslation-locale: en-US
x-matched-path: /en-US/docs
x-nextjs-prerender: 1
x-nextjs-stale-time: 300
x-vercel-cache: HIT
x-vercel-id: cle1::j9phk-1780609731287-1a1c280932e3
```

</details>

## llms.txt

| Field         | Value                                 |
| ------------- | ------------------------------------- |
| Source URL    | https://docs.cursor.com/llms.txt      |
| Effective URL | https://cursor.com/docs               |
| Status        | 200                                   |
| Content-Type  | text/html; charset=utf-8              |
| Body bytes    | 126,376                               |
| Duration      | 839 ms                                |
| Saved body    | status only                           |
| Raw metadata  | [status JSON](./llms.txt.status.json) |

High-signal response headers:

```http
HTTP/2 200
cache-control: public, max-age=0, must-revalidate
content-encoding: gzip
content-type: text/html; charset=utf-8
etag: W/"7e592e5c065e59ed71f81df3a4bc9de7"
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
  https://docs.cursor.com/llms.txt
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://docs.cursor.com/llms.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

HTTP/2 200
access-control-allow-origin: *
age: 3937
cache-control: public, max-age=0, must-revalidate
content-disposition: inline
content-encoding: gzip
content-type: text/html; charset=utf-8
date: Thu, 04 Jun 2026 21:48:52 GMT
etag: W/"7e592e5c065e59ed71f81df3a4bc9de7"
server: Vercel
set-cookie: [redacted]
strict-transport-security: max-age=63072000
vary: rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch
x-generaltranslation-locale: en-US
x-matched-path: /en-US/docs
x-nextjs-prerender: 1
x-nextjs-stale-time: 300
x-vercel-cache: HIT
x-vercel-id: cle1::ch8nv-1780609731924-3dc45320ac37
```

</details>
