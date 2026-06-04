# Google Developers HTTP Transcript

**Captured:** 2026-06-04T21:48:12.668Z

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

- Status: 404
- Effective URL: https://developers.google.com/llms.txt
- Content-Type: text/html; charset=utf-8
- Body bytes: 45740
- Saved body: status only
- Truncated: no
