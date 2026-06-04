# Google AI HTTP Transcript

**Captured:** 2026-06-04T21:48:12.668Z

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

- Status: 200
- Effective URL: https://ai.google.dev/sitemap.xml
- Content-Type: application/xml
- Body bytes: 515
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

- Status: 404
- Effective URL: https://ai.google.dev/llms.txt
- Content-Type: text/html; charset=utf-8
- Body bytes: 83864
- Saved body: status only
- Truncated: no
