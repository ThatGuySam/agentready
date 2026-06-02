# Google AI HTTP Transcript

**Captured:** 2026-06-02T19:28:00.989Z

## robots.txt

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output robots.txt --write-out '<curl-metadata>' https://ai.google.dev/robots.txt
```

Request:

```http
GET https://ai.google.dev/robots.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 200
content-type: text/plain
last-modified: Thu, 09 Nov 2023 07:54:35 GMT
vary: Cookie
vary: Accept-Encoding
content-security-policy: base-uri 'self'; object-src 'none'; script-src 'strict-dynamic' 'unsafe-inline' https: http: 'nonce-/8u/SOOAPzZm9Q6w0AB4jIETkltoIj' 'unsafe-eval'; frame-ancestors 'self' https://developers.google.com/_d/analytics-iframe https://aistudio.google.com; report-uri [redacted]
strict-transport-security: max-age=63072000; includeSubdomains; preload
x-xss-protection: 0
x-content-type-options: nosniff
cache-control: no-cache, must-revalidate
expires: 0
pragma: no-cache
content-encoding: gzip
x-cloud-trace-context: 7e65435664a35a41f5f1d30257871eef
date: Tue, 02 Jun 2026 19:28:29 GMT
server: Google Frontend
content-length: 83
alt-svc: h3=":443"; ma=2592000,h3-29=":443"; ma=2592000
```

- Status: 200
- Effective URL: https://ai.google.dev/robots.txt
- Content-Type: text/plain
- Body bytes: 67
- Saved body: robots.txt
- Truncated: no

## sitemap.xml

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output sitemap.xml --write-out '<curl-metadata>' https://ai.google.dev/sitemap.xml
```

Request:

```http
GET https://ai.google.dev/sitemap.xml HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 200
content-type: application/xml
vary: Cookie
vary: Accept-Encoding
content-security-policy: base-uri 'self'; object-src 'none'; script-src 'strict-dynamic' 'unsafe-inline' https: http: 'nonce-PNxniY8nJOJZKyHBIgl8rgzFl1ZtOI' 'unsafe-eval'; frame-ancestors 'self' https://developers.google.com/_d/analytics-iframe https://aistudio.google.com; report-uri [redacted]
strict-transport-security: max-age=63072000; includeSubdomains; preload
x-xss-protection: 0
x-content-type-options: nosniff
cache-control: no-cache, must-revalidate
expires: 0
pragma: no-cache
content-encoding: gzip
x-cloud-trace-context: f01818c1de64ef07a884c9334a78c2ab
date: Tue, 02 Jun 2026 19:28:30 GMT
server: Google Frontend
content-length: 236
alt-svc: h3=":443"; ma=2592000,h3-29=":443"; ma=2592000
```

- Status: 200
- Effective URL: https://ai.google.dev/sitemap.xml
- Content-Type: application/xml
- Body bytes: 646
- Saved body: sitemap.xml
- Truncated: no

## llms.txt

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output llms.txt --write-out '<curl-metadata>' https://ai.google.dev/llms.txt
```

Request:

```http
GET https://ai.google.dev/llms.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 404
content-type: text/html; charset=utf-8
vary: Cookie
vary: Accept-Encoding
content-security-policy: base-uri 'self'; object-src 'none'; script-src 'strict-dynamic' 'unsafe-inline' https: http: 'nonce-0Xtz3PI3+R5pX0ykMRZ4GecN5ZTa1O' 'unsafe-eval'; frame-ancestors 'self' https://developers.google.com/_d/analytics-iframe https://aistudio.google.com; report-uri [redacted]
strict-transport-security: max-age=63072000; includeSubdomains; preload
x-xss-protection: 0
x-content-type-options: nosniff
cache-control: no-cache, must-revalidate
expires: 0
pragma: no-cache
content-encoding: gzip
x-cloud-trace-context: d26e0ab93b8cff3b720830a285da5820
date: Tue, 02 Jun 2026 19:28:30 GMT
server: Google Frontend
content-length: 13343
alt-svc: h3=":443"; ma=2592000,h3-29=":443"; ma=2592000
```

- Status: 404
- Effective URL: https://ai.google.dev/llms.txt
- Content-Type: text/html; charset=utf-8
- Body bytes: 83864
- Saved body: status only
- Truncated: no
