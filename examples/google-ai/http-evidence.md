# Google AI HTTP Evidence

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

| Endpoint    | Status | Content Type             | Body Bytes | Saved Body                   | Notes                                                             |
| ----------- | -----: | ------------------------ | ---------: | ---------------------------- | ----------------------------------------------------------------- |
| robots.txt  |    200 | text/plain               |         67 | [robots.txt](./robots.txt)   | Artifact body saved.                                              |
| sitemap.xml |    200 | application/xml          |        515 | [sitemap.xml](./sitemap.xml) | Artifact body saved.                                              |
| llms.txt    |    404 | text/html; charset=utf-8 |     83,864 | status only                  | No body saved because the endpoint did not return a 2xx artifact. |

## robots.txt

| Field         | Value                                   |
| ------------- | --------------------------------------- |
| Source URL    | https://ai.google.dev/robots.txt        |
| Effective URL | https://ai.google.dev/robots.txt        |
| Status        | 200                                     |
| Content-Type  | text/plain                              |
| Body bytes    | 67                                      |
| Duration      | 322 ms                                  |
| Saved body    | [robots.txt](./robots.txt)              |
| Raw metadata  | [status JSON](./robots.txt.status.json) |

High-signal response headers:

```http
HTTP/2 200
content-type: text/plain
last-modified: Thu, 09 Nov 2023 07:54:35 GMT
cache-control: no-cache, must-revalidate
content-encoding: gzip
server: Google Frontend
content-length: 83
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
  https://ai.google.dev/robots.txt
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://ai.google.dev/robots.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

HTTP/2 200
content-type: text/plain
last-modified: Thu, 09 Nov 2023 07:54:35 GMT
vary: Cookie
vary: Accept-Encoding
content-security-policy: base-uri 'self'; object-src 'none'; script-src 'strict-dynamic' 'unsafe-inline' https: http: 'nonce-chlqBziUEPtuGi53nAuMYpEbvzcAAo' 'unsafe-eval'; frame-ancestors 'self' https://developers.google.com/_d/analytics-iframe https://aistudio.google.com; report-uri [redacted]
strict-transport-security: max-age=63072000; includeSubdomains; preload
x-xss-protection: 0
x-content-type-options: nosniff
cache-control: no-cache, must-revalidate
expires: 0
pragma: no-cache
content-encoding: gzip
x-cloud-trace-context: 148724d1aa8f0ffec4ee2b73fa5c5ec6
date: Thu, 04 Jun 2026 21:48:42 GMT
server: Google Frontend
content-length: 83
alt-svc: h3=":443"; ma=2592000,h3-29=":443"; ma=2592000
```

</details>

## sitemap.xml

| Field         | Value                                    |
| ------------- | ---------------------------------------- |
| Source URL    | https://ai.google.dev/sitemap.xml        |
| Effective URL | https://ai.google.dev/sitemap.xml        |
| Status        | 200                                      |
| Content-Type  | application/xml                          |
| Body bytes    | 515                                      |
| Duration      | 490 ms                                   |
| Saved body    | [sitemap.xml](./sitemap.xml)             |
| Raw metadata  | [status JSON](./sitemap.xml.status.json) |

High-signal response headers:

```http
HTTP/2 200
content-type: application/xml
cache-control: no-cache, must-revalidate
content-encoding: gzip
server: Google Frontend
content-length: 214
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
  https://ai.google.dev/sitemap.xml
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://ai.google.dev/sitemap.xml HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

HTTP/2 200
content-type: application/xml
vary: Cookie
vary: Accept-Encoding
content-security-policy: base-uri 'self'; object-src 'none'; script-src 'strict-dynamic' 'unsafe-inline' https: http: 'nonce-6AFFqf10FbL9Dqnau9YdCc2L+g2z5c' 'unsafe-eval'; frame-ancestors 'self' https://developers.google.com/_d/analytics-iframe https://aistudio.google.com; report-uri [redacted]
strict-transport-security: max-age=63072000; includeSubdomains; preload
x-xss-protection: 0
x-content-type-options: nosniff
cache-control: no-cache, must-revalidate
expires: 0
pragma: no-cache
content-encoding: gzip
x-cloud-trace-context: 4e1a844da93611729a72f92c6f69ea1a
date: Thu, 04 Jun 2026 21:48:43 GMT
server: Google Frontend
content-length: 214
alt-svc: h3=":443"; ma=2592000,h3-29=":443"; ma=2592000
```

</details>

## llms.txt

| Field         | Value                                 |
| ------------- | ------------------------------------- |
| Source URL    | https://ai.google.dev/llms.txt        |
| Effective URL | https://ai.google.dev/llms.txt        |
| Status        | 404                                   |
| Content-Type  | text/html; charset=utf-8              |
| Body bytes    | 83,864                                |
| Duration      | 592 ms                                |
| Saved body    | status only                           |
| Raw metadata  | [status JSON](./llms.txt.status.json) |

High-signal response headers:

```http
HTTP/2 404
content-type: text/html; charset=utf-8
cache-control: no-cache, must-revalidate
content-encoding: gzip
server: Google Frontend
content-length: 13370
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
  https://ai.google.dev/llms.txt
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://ai.google.dev/llms.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

HTTP/2 404
content-type: text/html; charset=utf-8
vary: Cookie
vary: Accept-Encoding
content-security-policy: base-uri 'self'; object-src 'none'; script-src 'strict-dynamic' 'unsafe-inline' https: http: 'nonce-gVyA9WyED9wipT9VwZ+LCj88a0L5qX' 'unsafe-eval'; frame-ancestors 'self' https://developers.google.com/_d/analytics-iframe https://aistudio.google.com; report-uri [redacted]
strict-transport-security: max-age=63072000; includeSubdomains; preload
x-xss-protection: 0
x-content-type-options: nosniff
cache-control: no-cache, must-revalidate
expires: 0
pragma: no-cache
content-encoding: gzip
x-cloud-trace-context: 4e77beec4208b894b6ab51b6ac7982cb
date: Thu, 04 Jun 2026 21:48:43 GMT
server: Google Frontend
content-length: 13370
alt-svc: h3=":443"; ma=2592000,h3-29=":443"; ma=2592000
```

</details>
