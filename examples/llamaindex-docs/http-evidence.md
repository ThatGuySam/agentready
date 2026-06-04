# LlamaIndex Docs HTTP Evidence

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
| robots.txt  |    200 | text/html; charset=utf-8 |    268,165 | status only | HTML body was not saved unless this endpoint is explicitly sampled. |
| sitemap.xml |    200 | text/html; charset=utf-8 |    268,165 | status only | HTML body was not saved unless this endpoint is explicitly sampled. |
| llms.txt    |    200 | text/html; charset=utf-8 |    268,165 | status only | HTML body was not saved unless this endpoint is explicitly sampled. |

## robots.txt

| Field         | Value                                              |
| ------------- | -------------------------------------------------- |
| Source URL    | https://docs.llamaindex.ai/robots.txt              |
| Effective URL | https://developers.llamaindex.ai/python/framework/ |
| Status        | 200                                                |
| Content-Type  | text/html; charset=utf-8                           |
| Body bytes    | 268,165                                            |
| Duration      | 451 ms                                             |
| Saved body    | status only                                        |
| Raw metadata  | [status JSON](./robots.txt.status.json)            |

High-signal response headers:

```http
HTTP/2 200
cache-control: public, max-age=0, must-revalidate
content-encoding: gzip
content-type: text/html; charset=utf-8
etag: W/"3e264cf130175dbd3c23f1bc4bbe58b1"
last-modified: Thu, 04 Jun 2026 18:26:36 GMT
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
  https://docs.llamaindex.ai/robots.txt
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://docs.llamaindex.ai/robots.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

HTTP/2 200
access-control-allow-origin: *
age: 12132
cache-control: public, max-age=0, must-revalidate
content-disposition: inline; filename="framework"
content-encoding: gzip
content-type: text/html; charset=utf-8
date: Thu, 04 Jun 2026 21:48:49 GMT
etag: W/"3e264cf130175dbd3c23f1bc4bbe58b1"
last-modified: Thu, 04 Jun 2026 18:26:36 GMT
server: Vercel
strict-transport-security: max-age=63072000
x-vercel-cache: HIT
x-vercel-id: cle1::wdq2g-1780609729005-0f59b76c0e3a
```

</details>

## sitemap.xml

| Field         | Value                                              |
| ------------- | -------------------------------------------------- |
| Source URL    | https://docs.llamaindex.ai/sitemap.xml             |
| Effective URL | https://developers.llamaindex.ai/python/framework/ |
| Status        | 200                                                |
| Content-Type  | text/html; charset=utf-8                           |
| Body bytes    | 268,165                                            |
| Duration      | 459 ms                                             |
| Saved body    | status only                                        |
| Raw metadata  | [status JSON](./sitemap.xml.status.json)           |

High-signal response headers:

```http
HTTP/2 200
cache-control: public, max-age=0, must-revalidate
content-encoding: gzip
content-type: text/html; charset=utf-8
etag: W/"3e264cf130175dbd3c23f1bc4bbe58b1"
last-modified: Thu, 04 Jun 2026 18:26:36 GMT
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
  https://docs.llamaindex.ai/sitemap.xml
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://docs.llamaindex.ai/sitemap.xml HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

HTTP/2 200
access-control-allow-origin: *
age: 12133
cache-control: public, max-age=0, must-revalidate
content-disposition: inline; filename="framework"
content-encoding: gzip
content-type: text/html; charset=utf-8
date: Thu, 04 Jun 2026 21:48:49 GMT
etag: W/"3e264cf130175dbd3c23f1bc4bbe58b1"
last-modified: Thu, 04 Jun 2026 18:26:36 GMT
server: Vercel
strict-transport-security: max-age=63072000
x-vercel-cache: HIT
x-vercel-id: cle1::mjljv-1780609729475-0569e9db2c79
```

</details>

## llms.txt

| Field         | Value                                              |
| ------------- | -------------------------------------------------- |
| Source URL    | https://docs.llamaindex.ai/llms.txt                |
| Effective URL | https://developers.llamaindex.ai/python/framework/ |
| Status        | 200                                                |
| Content-Type  | text/html; charset=utf-8                           |
| Body bytes    | 268,165                                            |
| Duration      | 440 ms                                             |
| Saved body    | status only                                        |
| Raw metadata  | [status JSON](./llms.txt.status.json)              |

High-signal response headers:

```http
HTTP/2 200
cache-control: public, max-age=0, must-revalidate
content-encoding: gzip
content-type: text/html; charset=utf-8
etag: W/"3e264cf130175dbd3c23f1bc4bbe58b1"
last-modified: Thu, 04 Jun 2026 18:26:36 GMT
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
  https://docs.llamaindex.ai/llms.txt
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://docs.llamaindex.ai/llms.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

HTTP/2 200
access-control-allow-origin: *
age: 12133
cache-control: public, max-age=0, must-revalidate
content-disposition: inline; filename="framework"
content-encoding: gzip
content-type: text/html; charset=utf-8
date: Thu, 04 Jun 2026 21:48:49 GMT
etag: W/"3e264cf130175dbd3c23f1bc4bbe58b1"
last-modified: Thu, 04 Jun 2026 18:26:36 GMT
server: Vercel
strict-transport-security: max-age=63072000
x-vercel-cache: HIT
x-vercel-id: cle1::8v9bq-1780609729891-857f1d01f0e2
```

</details>
