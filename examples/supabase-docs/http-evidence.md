# Supabase Docs HTTP Evidence

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

| Endpoint         | Status | Content Type              | Body Bytes | Saved Body                   | Notes                                                             |
| ---------------- | -----: | ------------------------- | ---------: | ---------------------------- | ----------------------------------------------------------------- |
| docs robots.txt  |    200 | text/plain; charset=utf-8 |        125 | [robots.txt](./robots.txt)   | Artifact body saved.                                              |
| docs sitemap.xml |    200 | application/xml           |    410,877 | [sitemap.xml](./sitemap.xml) | Artifact body saved.                                              |
| docs llms.txt    |    404 | text/html; charset=utf-8  |     96,855 | status only                  | No body saved because the endpoint did not return a 2xx artifact. |

## docs robots.txt

| Field         | Value                                   |
| ------------- | --------------------------------------- |
| Source URL    | https://supabase.com/docs/robots.txt    |
| Effective URL | https://supabase.com/docs/robots.txt    |
| Status        | 200                                     |
| Content-Type  | text/plain; charset=utf-8               |
| Body bytes    | 125                                     |
| Duration      | 229 ms                                  |
| Saved body    | [robots.txt](./robots.txt)              |
| Raw metadata  | [status JSON](./robots.txt.status.json) |

High-signal response headers:

```http
HTTP/2 200
cache-control: public, max-age=0, must-revalidate
content-type: text/plain; charset=utf-8
etag: "117bdf32af91fa73a2f4ec3dcc2daf0d"
last-modified: Thu, 04 Jun 2026 21:44:37 GMT
server: Vercel
x-robots-tag: all
content-length: 125
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
  https://supabase.com/docs/robots.txt
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://supabase.com/docs/robots.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

HTTP/2 200
accept-ranges: bytes
access-control-allow-origin: *
age: 250
cache-control: public, max-age=0, must-revalidate
content-disposition: inline; filename="robots.txt"
content-type: text/plain; charset=utf-8
date: Thu, 04 Jun 2026 21:48:47 GMT
etag: "117bdf32af91fa73a2f4ec3dcc2daf0d"
last-modified: Thu, 04 Jun 2026 21:44:37 GMT
server: Vercel
strict-transport-security: max-age=31536000; includeSubDomains; preload
x-frame-options: DENY
x-matched-path: /robots.txt
x-nextjs-rewritten-path: /docs/robots.txt
x-robots-tag: all
x-vercel-cache: HIT
x-vercel-id: cle1:cle1:cle1::ch8nv-1780609727574-3b5ef198f10b
content-length: 125
```

</details>

## docs sitemap.xml

| Field         | Value                                    |
| ------------- | ---------------------------------------- |
| Source URL    | https://supabase.com/docs/sitemap.xml    |
| Effective URL | https://supabase.com/docs/sitemap.xml    |
| Status        | 200                                      |
| Content-Type  | application/xml                          |
| Body bytes    | 410,877                                  |
| Duration      | 336 ms                                   |
| Saved body    | [sitemap.xml](./sitemap.xml)             |
| Raw metadata  | [status JSON](./sitemap.xml.status.json) |

High-signal response headers:

```http
HTTP/2 200
cache-control: public, max-age=0, must-revalidate
content-encoding: gzip
content-type: application/xml
etag: W/"d54827d5e963201dc0136ee161d863cd"
last-modified: Thu, 04 Jun 2026 13:51:40 GMT
server: Vercel
x-robots-tag: all
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
  https://supabase.com/docs/sitemap.xml
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://supabase.com/docs/sitemap.xml HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

HTTP/2 200
access-control-allow-origin: *
age: 28627
cache-control: public, max-age=0, must-revalidate
content-disposition: inline; filename="sitemap.xml"
content-encoding: gzip
content-type: application/xml
date: Thu, 04 Jun 2026 21:48:47 GMT
etag: W/"d54827d5e963201dc0136ee161d863cd"
last-modified: Thu, 04 Jun 2026 13:51:40 GMT
server: Vercel
strict-transport-security: max-age=31536000; includeSubDomains; preload
x-frame-options: DENY
x-matched-path: /sitemap.xml
x-nextjs-rewritten-path: /docs/sitemap.xml
x-robots-tag: all
x-vercel-cache: HIT
x-vercel-id: cle1:cle1:cle1::9c8hc-1780609727918-615fc72d8f96
```

</details>

## docs llms.txt

| Field         | Value                                 |
| ------------- | ------------------------------------- |
| Source URL    | https://supabase.com/docs/llms.txt    |
| Effective URL | https://supabase.com/docs/llms.txt    |
| Status        | 404                                   |
| Content-Type  | text/html; charset=utf-8              |
| Body bytes    | 96,855                                |
| Duration      | 215 ms                                |
| Saved body    | status only                           |
| Raw metadata  | [status JSON](./llms.txt.status.json) |

High-signal response headers:

```http
HTTP/2 404
cache-control: public, max-age=0, must-revalidate
content-encoding: gzip
content-type: text/html; charset=utf-8
etag: W/"729d1bc067c2742b35e61e8a93ca3b67"
last-modified: Thu, 04 Jun 2026 13:48:45 GMT
server: Vercel
x-robots-tag: all
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
  https://supabase.com/docs/llms.txt
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://supabase.com/docs/llms.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

HTTP/2 404
access-control-allow-origin: *
age: 28803
cache-control: public, max-age=0, must-revalidate
content-disposition: inline; filename="404"
content-encoding: gzip
content-type: text/html; charset=utf-8
date: Thu, 04 Jun 2026 21:48:48 GMT
etag: W/"729d1bc067c2742b35e61e8a93ca3b67"
last-modified: Thu, 04 Jun 2026 13:48:45 GMT
server: Vercel
strict-transport-security: max-age=31536000; includeSubDomains; preload
x-frame-options: DENY
x-matched-path: /404
x-next-error-status: 404
x-nextjs-rewritten-path: /docs/llms.txt
x-robots-tag: all
x-vercel-cache: HIT
x-vercel-id: cle1:cle1:cle1::rprc4-1780609728158-37c7acdd950f
```

</details>
