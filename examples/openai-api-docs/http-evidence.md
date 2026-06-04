# OpenAI API Docs HTTP Evidence

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

| Endpoint         | Status | Content Type              | Body Bytes | Saved Body                                     | Notes                                                             |
| ---------------- | -----: | ------------------------- | ---------: | ---------------------------------------------- | ----------------------------------------------------------------- |
| docs robots.txt  |    404 | text/html; charset=utf-8  |    366,579 | status only                                    | No body saved because the endpoint did not return a 2xx artifact. |
| docs sitemap.xml |    404 | text/html; charset=utf-8  |    366,579 | status only                                    | No body saved because the endpoint did not return a 2xx artifact. |
| llms.txt         |    200 | text/plain; charset=utf-8 |     28,182 | [llms.txt](./llms.txt)                         | Artifact body saved.                                              |
| llms-full.txt    |    200 | text/plain; charset=utf-8 |  1,995,890 | [llms-full.sample.txt](./llms-full.sample.txt) | Artifact body saved.                                              |

## docs robots.txt

| Field         | Value                                             |
| ------------- | ------------------------------------------------- |
| Source URL    | https://developers.openai.com/api/docs/robots.txt |
| Effective URL | https://developers.openai.com/api/docs/robots.txt |
| Status        | 404                                               |
| Content-Type  | text/html; charset=utf-8                          |
| Body bytes    | 366,579                                           |
| Duration      | 287 ms                                            |
| Saved body    | status only                                       |
| Raw metadata  | [status JSON](./robots.txt.status.json)           |

High-signal response headers:

```http
HTTP/2 404
cache-control: public, max-age=0, must-revalidate
content-encoding: gzip
content-type: text/html; charset=utf-8
etag: W/"9b3e4f8cf37fb91f3a6b7d19d8557f15"
last-modified: Thu, 04 Jun 2026 18:56:26 GMT
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
  https://developers.openai.com/api/docs/robots.txt
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://developers.openai.com/api/docs/robots.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

HTTP/2 404
access-control-allow-origin: *
age: 9858
cache-control: public, max-age=0, must-revalidate
content-disposition: inline; filename="404.html"
content-encoding: gzip
content-type: text/html; charset=utf-8
date: Thu, 04 Jun 2026 21:48:31 GMT
etag: W/"9b3e4f8cf37fb91f3a6b7d19d8557f15"
last-modified: Thu, 04 Jun 2026 18:56:26 GMT
server: Vercel
strict-transport-security: max-age=63072000
x-vercel-cache: HIT
x-vercel-id: cle1::lvf72-1780609710989-eaafccdc5bc3
```

</details>

## docs sitemap.xml

| Field         | Value                                              |
| ------------- | -------------------------------------------------- |
| Source URL    | https://developers.openai.com/api/docs/sitemap.xml |
| Effective URL | https://developers.openai.com/api/docs/sitemap.xml |
| Status        | 404                                                |
| Content-Type  | text/html; charset=utf-8                           |
| Body bytes    | 366,579                                            |
| Duration      | 205 ms                                             |
| Saved body    | status only                                        |
| Raw metadata  | [status JSON](./sitemap.xml.status.json)           |

High-signal response headers:

```http
HTTP/2 404
cache-control: public, max-age=0, must-revalidate
content-encoding: gzip
content-type: text/html; charset=utf-8
etag: W/"9b3e4f8cf37fb91f3a6b7d19d8557f15"
last-modified: Thu, 04 Jun 2026 18:56:26 GMT
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
  https://developers.openai.com/api/docs/sitemap.xml
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://developers.openai.com/api/docs/sitemap.xml HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

HTTP/2 404
access-control-allow-origin: *
age: 9852
cache-control: public, max-age=0, must-revalidate
content-disposition: inline; filename="404.html"
content-encoding: gzip
content-type: text/html; charset=utf-8
date: Thu, 04 Jun 2026 21:48:31 GMT
etag: W/"9b3e4f8cf37fb91f3a6b7d19d8557f15"
last-modified: Thu, 04 Jun 2026 18:56:26 GMT
server: Vercel
strict-transport-security: max-age=63072000
x-vercel-cache: HIT
x-vercel-id: cle1::6bj9v-1780609711272-b4355855e20c
```

</details>

## llms.txt

| Field         | Value                                           |
| ------------- | ----------------------------------------------- |
| Source URL    | https://developers.openai.com/api/docs/llms.txt |
| Effective URL | https://developers.openai.com/api/docs/llms.txt |
| Status        | 200                                             |
| Content-Type  | text/plain; charset=utf-8                       |
| Body bytes    | 28,182                                          |
| Duration      | 275 ms                                          |
| Saved body    | [llms.txt](./llms.txt)                          |
| Raw metadata  | [status JSON](./llms.txt.status.json)           |

High-signal response headers:

```http
HTTP/2 200
cache-control: public, max-age=0, must-revalidate
content-encoding: gzip
content-type: text/plain; charset=utf-8
etag: W/"ec93fc632a8399237760dc8244251919"
last-modified: Thu, 04 Jun 2026 19:47:10 GMT
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
  https://developers.openai.com/api/docs/llms.txt
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://developers.openai.com/api/docs/llms.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

HTTP/2 200
access-control-allow-origin: *
age: 7281
cache-control: public, max-age=0, must-revalidate
content-disposition: inline; filename="llms.txt"
content-encoding: gzip
content-type: text/plain; charset=utf-8
date: Thu, 04 Jun 2026 21:48:31 GMT
etag: W/"ec93fc632a8399237760dc8244251919"
last-modified: Thu, 04 Jun 2026 19:47:10 GMT
server: Vercel
strict-transport-security: max-age=63072000
x-vercel-cache: HIT
x-vercel-id: cle1::ndp7w-1780609711491-a1b17feb1604
```

</details>

## llms-full.txt

| Field         | Value                                                |
| ------------- | ---------------------------------------------------- |
| Source URL    | https://developers.openai.com/api/docs/llms-full.txt |
| Effective URL | https://developers.openai.com/api/docs/llms-full.txt |
| Status        | 200                                                  |
| Content-Type  | text/plain; charset=utf-8                            |
| Body bytes    | 1,995,890                                            |
| Duration      | 293 ms                                               |
| Saved body    | [llms-full.sample.txt](./llms-full.sample.txt)       |
| Raw metadata  | [status JSON](./llms-full.sample.txt.status.json)    |

High-signal response headers:

```http
HTTP/2 200
cache-control: public, max-age=0, must-revalidate
content-encoding: gzip
content-type: text/plain; charset=utf-8
etag: W/"7eae46cc52372315c26b22e0ffb38036"
last-modified: Thu, 04 Jun 2026 20:55:38 GMT
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
  --output llms-full.sample.txt \
  --write-out '<curl-metadata>' \
  https://developers.openai.com/api/docs/llms-full.txt
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://developers.openai.com/api/docs/llms-full.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

HTTP/2 200
access-control-allow-origin: *
age: 3173
cache-control: public, max-age=0, must-revalidate
content-disposition: inline; filename="llms-full.txt"
content-encoding: gzip
content-type: text/plain; charset=utf-8
date: Thu, 04 Jun 2026 21:48:31 GMT
etag: W/"7eae46cc52372315c26b22e0ffb38036"
last-modified: Thu, 04 Jun 2026 20:55:38 GMT
server: Vercel
strict-transport-security: max-age=63072000
x-vercel-cache: HIT
x-vercel-id: cle1::l9whh-1780609711786-d5a5697eaeb4
```

</details>
