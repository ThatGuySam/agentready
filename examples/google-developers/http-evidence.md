# Google Developers HTTP Evidence

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
| robots.txt  |    200 | text/plain               |         93 | [robots.txt](./robots.txt)   | Artifact body saved.                                              |
| sitemap.xml |    200 | application/xml          |      5,752 | [sitemap.xml](./sitemap.xml) | Artifact body saved.                                              |
| llms.txt    |    404 | text/html; charset=utf-8 |     45,740 | status only                  | No body saved because the endpoint did not return a 2xx artifact. |

## robots.txt

| Field         | Value                                    |
| ------------- | ---------------------------------------- |
| Source URL    | https://developers.google.com/robots.txt |
| Effective URL | https://developers.google.com/robots.txt |
| Status        | 200                                      |
| Content-Type  | text/plain                               |
| Body bytes    | 93                                       |
| Duration      | 211 ms                                   |
| Saved body    | [robots.txt](./robots.txt)               |
| Raw metadata  | [status JSON](./robots.txt.status.json)  |

High-signal response headers:

```http
HTTP/2 200
content-type: text/plain
last-modified: Thu, 04 Sep 2025 12:04:01 GMT
cache-control: no-cache, must-revalidate
content-encoding: gzip
server: Google Frontend
content-length: 104
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
  https://developers.google.com/robots.txt
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://developers.google.com/robots.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

HTTP/2 200
content-type: text/plain
last-modified: Thu, 04 Sep 2025 12:04:01 GMT
vary: Cookie
vary: Accept-Encoding
content-security-policy: base-uri 'self'; object-src 'none'; script-src 'strict-dynamic' 'unsafe-inline' https: http: 'nonce-/Jl09DOTJrlC/FvoQn/MNWzfR4nkG7' 'unsafe-eval'; frame-ancestors 'self' https://codeassist.google.com https://code-assist-free-tier.corp.google.com; report-uri [redacted]
strict-transport-security: max-age=63072000; includeSubdomains; preload
x-xss-protection: 0
x-content-type-options: nosniff
cache-control: no-cache, must-revalidate
expires: 0
pragma: no-cache
content-encoding: gzip
x-cloud-trace-context: 2439095bd8488f3dbfdc0df8108ebe22
date: Thu, 04 Jun 2026 21:48:40 GMT
server: Google Frontend
content-length: 104
alt-svc: h3=":443"; ma=2592000,h3-29=":443"; ma=2592000
```

</details>

## sitemap.xml

| Field         | Value                                     |
| ------------- | ----------------------------------------- |
| Source URL    | https://developers.google.com/sitemap.xml |
| Effective URL | https://developers.google.com/sitemap.xml |
| Status        | 200                                       |
| Content-Type  | application/xml                           |
| Body bytes    | 5,752                                     |
| Duration      | 1,075 ms                                  |
| Saved body    | [sitemap.xml](./sitemap.xml)              |
| Raw metadata  | [status JSON](./sitemap.xml.status.json)  |

High-signal response headers:

```http
HTTP/2 200
content-type: application/xml
cache-control: no-cache, must-revalidate
content-encoding: gzip
server: Google Frontend
content-length: 510
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
  https://developers.google.com/sitemap.xml
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://developers.google.com/sitemap.xml HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

HTTP/2 200
content-type: application/xml
vary: Cookie
vary: Accept-Encoding
content-security-policy: base-uri 'self'; object-src 'none'; script-src 'strict-dynamic' 'unsafe-inline' https: http: 'nonce-nPxNwune6UQRzL2gJiK7Q/bdaweLVi' 'unsafe-eval'; frame-ancestors 'self' https://codeassist.google.com https://code-assist-free-tier.corp.google.com; report-uri [redacted]
strict-transport-security: max-age=63072000; includeSubdomains; preload
x-xss-protection: 0
x-content-type-options: nosniff
cache-control: no-cache, must-revalidate
expires: 0
pragma: no-cache
content-encoding: gzip
x-cloud-trace-context: f6b2b7e3218ccc60e59da341f581c1f8
date: Thu, 04 Jun 2026 21:48:41 GMT
server: Google Frontend
content-length: 510
alt-svc: h3=":443"; ma=2592000,h3-29=":443"; ma=2592000
```

</details>

## llms.txt

| Field         | Value                                  |
| ------------- | -------------------------------------- |
| Source URL    | https://developers.google.com/llms.txt |
| Effective URL | https://developers.google.com/llms.txt |
| Status        | 404                                    |
| Content-Type  | text/html; charset=utf-8               |
| Body bytes    | 45,740                                 |
| Duration      | 441 ms                                 |
| Saved body    | status only                            |
| Raw metadata  | [status JSON](./llms.txt.status.json)  |

High-signal response headers:

```http
HTTP/2 404
content-type: text/html; charset=utf-8
cache-control: no-cache, must-revalidate
content-encoding: gzip
server: Google Frontend
content-length: 10274
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
  https://developers.google.com/llms.txt
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://developers.google.com/llms.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

HTTP/2 404
content-type: text/html; charset=utf-8
vary: Cookie
vary: Accept-Encoding
content-security-policy: base-uri 'self'; object-src 'none'; script-src 'strict-dynamic' 'unsafe-inline' https: http: 'nonce-r7b/g8dBpwqVCc7z+dn3m1yZg/lFLS' 'unsafe-eval'; frame-ancestors 'self' https://codeassist.google.com https://code-assist-free-tier.corp.google.com; report-uri [redacted]
strict-transport-security: max-age=63072000; includeSubdomains; preload
x-xss-protection: 0
x-content-type-options: nosniff
cache-control: no-cache, must-revalidate
expires: 0
pragma: no-cache
content-encoding: gzip
x-cloud-trace-context: baf5ce0d79745959e1d8eb85929f1af4
date: Thu, 04 Jun 2026 21:48:41 GMT
server: Google Frontend
content-length: 10274
alt-svc: h3=":443"; ma=2592000,h3-29=":443"; ma=2592000
```

</details>
