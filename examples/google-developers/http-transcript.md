# Google Developers HTTP Transcript

**Captured:** 2026-06-02T19:28:00.989Z

## robots.txt

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output robots.txt --write-out '<curl-metadata>' https://developers.google.com/robots.txt
```

Request:

```http
GET https://developers.google.com/robots.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 200
content-type: text/plain
last-modified: Thu, 04 Sep 2025 12:04:01 GMT
vary: Cookie
vary: Accept-Encoding
content-security-policy: base-uri 'self'; object-src 'none'; script-src 'strict-dynamic' 'unsafe-inline' https: http: 'nonce-V1+MwY/VjmieCgdVHrOcZODkIF6ZsL' 'unsafe-eval'; frame-ancestors 'self' https://codeassist.google.com https://code-assist-free-tier.corp.google.com; report-uri [redacted]
strict-transport-security: max-age=63072000; includeSubdomains; preload
x-xss-protection: 0
x-content-type-options: nosniff
cache-control: no-cache, must-revalidate
expires: 0
pragma: no-cache
content-encoding: gzip
x-cloud-trace-context: 4f6b936a0797a96208d4b6368d9265eb
date: Tue, 02 Jun 2026 19:28:28 GMT
server: Google Frontend
content-length: 104
alt-svc: h3=":443"; ma=2592000,h3-29=":443"; ma=2592000
```

- Status: 200
- Effective URL: https://developers.google.com/robots.txt
- Content-Type: text/plain
- Body bytes: 93
- Saved body: robots.txt
- Truncated: no

## sitemap.xml

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output sitemap.xml --write-out '<curl-metadata>' https://developers.google.com/sitemap.xml
```

Request:

```http
GET https://developers.google.com/sitemap.xml HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 200
content-type: application/xml
vary: Cookie
vary: Accept-Encoding
content-security-policy: base-uri 'self'; object-src 'none'; script-src 'strict-dynamic' 'unsafe-inline' https: http: 'nonce-9oJNQM1ix0Ux+pt56x10gdefc64RpY' 'unsafe-eval'; frame-ancestors 'self' https://codeassist.google.com https://code-assist-free-tier.corp.google.com; report-uri [redacted]
strict-transport-security: max-age=63072000; includeSubdomains; preload
x-xss-protection: 0
x-content-type-options: nosniff
cache-control: no-cache, must-revalidate
expires: 0
pragma: no-cache
content-encoding: gzip
x-cloud-trace-context: c5d279f904a28b1bd763925ba4acbc8a
date: Tue, 02 Jun 2026 19:28:28 GMT
server: Google Frontend
content-length: 488
alt-svc: h3=":443"; ma=2592000,h3-29=":443"; ma=2592000
```

- Status: 200
- Effective URL: https://developers.google.com/sitemap.xml
- Content-Type: application/xml
- Body bytes: 5752
- Saved body: sitemap.xml
- Truncated: no

## llms.txt

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output llms.txt --write-out '<curl-metadata>' https://developers.google.com/llms.txt
```

Request:

```http
GET https://developers.google.com/llms.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 404
content-type: text/html; charset=utf-8
vary: Cookie
vary: Accept-Encoding
content-security-policy: base-uri 'self'; object-src 'none'; script-src 'strict-dynamic' 'unsafe-inline' https: http: 'nonce-G86ZyyQu6h4aYFf+Os3OxUCvWWAfE+' 'unsafe-eval'; frame-ancestors 'self' https://codeassist.google.com https://code-assist-free-tier.corp.google.com; report-uri [redacted]
strict-transport-security: max-age=63072000; includeSubdomains; preload
x-xss-protection: 0
x-content-type-options: nosniff
cache-control: no-cache, must-revalidate
expires: 0
pragma: no-cache
content-encoding: gzip
x-cloud-trace-context: 71a74dc119d4c8e5e04ebf31e79eb16e
date: Tue, 02 Jun 2026 19:28:29 GMT
server: Google Frontend
content-length: 10279
alt-svc: h3=":443"; ma=2592000,h3-29=":443"; ma=2592000
```

- Status: 404
- Effective URL: https://developers.google.com/llms.txt
- Content-Type: text/html; charset=utf-8
- Body bytes: 45736
- Saved body: status only
- Truncated: no
