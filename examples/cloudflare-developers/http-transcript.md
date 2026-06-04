# Cloudflare Developers HTTP Transcript

**Captured:** 2026-06-04T21:48:12.668Z

## robots.txt

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output robots.txt --write-out '<curl-metadata>' https://developers.cloudflare.com/robots.txt
```

Request:

```http
GET https://developers.cloudflare.com/robots.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 200
date: Thu, 04 Jun 2026 21:48:13 GMT
content-type: text/plain
cf-cache-status: HIT
access-control-allow-origin: *
cache-control: public, max-age=0, must-revalidate
strict-transport-security: max-age=15552000; preload
x-content-type-options: nosniff
speculation-rules: "/cdn-cgi/speculation"
vary: accept-encoding
set-cookie: [redacted]
content-security-policy: form-action 'self'; frame-src 'self' company-target.com *.company-target.com cloudflarestream.com *.cloudflarestream.com youtube-nocookie.com *.youtube-nocookie.com videodelivery.net *.videodelivery.net cloudflare.com *.cloudflare.com; frame-ancestors 'self' cloudflare.com *.cloudflare.com; script-src 'self' cloudflare ... [truncated]
report-to: [redacted]
etag: W/"6a8d893cad3560c1aeef4d7ec0cbcd8c"
content-encoding: gzip
server: cloudflare
cf-ray: a06a23f59ee51214-DFW
alt-svc: h3=":443"; ma=86400
```

- Status: 200
- Effective URL: https://developers.cloudflare.com/robots.txt
- Content-Type: text/plain
- Body bytes: 1460
- Saved body: robots.txt
- Truncated: no

## sitemap.xml

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output sitemap.xml --write-out '<curl-metadata>' https://developers.cloudflare.com/sitemap.xml
```

Request:

```http
GET https://developers.cloudflare.com/sitemap.xml HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 200
date: Thu, 04 Jun 2026 21:48:13 GMT
content-type: application/xml
cf-cache-status: HIT
access-control-allow-origin: *
cache-control: public, max-age=0, must-revalidate
strict-transport-security: max-age=15552000; preload
x-content-type-options: nosniff
speculation-rules: "/cdn-cgi/speculation"
vary: accept-encoding
set-cookie: [redacted]
content-security-policy: form-action 'self'; frame-src 'self' company-target.com *.company-target.com cloudflarestream.com *.cloudflarestream.com youtube-nocookie.com *.youtube-nocookie.com videodelivery.net *.videodelivery.net cloudflare.com *.cloudflare.com; frame-ancestors 'self' cloudflare.com *.cloudflare.com; script-src 'self' cloudflare ... [truncated]
report-to: [redacted]
etag: W/"e5ca2c074a50e33a7ba7bb594c0c120f"
content-encoding: gzip
server: cloudflare
cf-ray: a06a23f75a867dce-DFW
alt-svc: h3=":443"; ma=86400
```

- Status: 200
- Effective URL: https://developers.cloudflare.com/sitemap-index.xml
- Content-Type: application/xml
- Body bytes: 239
- Saved body: sitemap.xml
- Truncated: no

## llms.txt

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output llms.txt --write-out '<curl-metadata>' https://developers.cloudflare.com/llms.txt
```

Request:

```http
GET https://developers.cloudflare.com/llms.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 200
date: Thu, 04 Jun 2026 21:48:13 GMT
content-type: text/plain
cf-cache-status: HIT
access-control-allow-origin: *
cache-control: public, max-age=0, must-revalidate
strict-transport-security: max-age=15552000; preload
x-content-type-options: nosniff
speculation-rules: "/cdn-cgi/speculation"
vary: accept-encoding
set-cookie: [redacted]
content-security-policy: form-action 'self'; frame-src 'self' company-target.com *.company-target.com cloudflarestream.com *.cloudflarestream.com youtube-nocookie.com *.youtube-nocookie.com videodelivery.net *.videodelivery.net cloudflare.com *.cloudflare.com; frame-ancestors 'self' cloudflare.com *.cloudflare.com; script-src 'self' cloudflare ... [truncated]
report-to: [redacted]
etag: W/"9cc286089043fa56d09f4b5444119f79"
content-encoding: gzip
server: cloudflare
cf-ray: a06a23f82db6ae15-MCI
alt-svc: h3=":443"; ma=86400
```

- Status: 200
- Effective URL: https://developers.cloudflare.com/llms.txt
- Content-Type: text/plain
- Body bytes: 15538
- Saved body: llms.txt
- Truncated: no

## llms-full.txt

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output llms-full.sample.txt --write-out '<curl-metadata>' https://developers.cloudflare.com/llms-full.txt
```

Request:

```http
GET https://developers.cloudflare.com/llms-full.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 200
date: Thu, 04 Jun 2026 21:48:13 GMT
content-type: text/markdown; charset=utf-8
content-length: 50005369
strict-transport-security: max-age=15552000; preload
x-content-type-options: nosniff
speculation-rules: "/cdn-cgi/speculation"
vary: accept-encoding
set-cookie: [redacted]
content-security-policy: form-action 'self'; frame-src 'self' company-target.com *.company-target.com cloudflarestream.com *.cloudflarestream.com youtube-nocookie.com *.youtube-nocookie.com videodelivery.net *.videodelivery.net cloudflare.com *.cloudflare.com; frame-ancestors 'self' cloudflare.com *.cloudflare.com; script-src 'self' cloudflare ... [truncated]
report-to: [redacted]
server: cloudflare
cf-ray: a06a23f8a941d306-MCI
alt-svc: h3=":443"; ma=86400
```

- Status: 200
- Effective URL: https://developers.cloudflare.com/llms-full.txt
- Content-Type: text/markdown; charset=utf-8
- Body bytes: 50005369
- Saved body: llms-full.sample.txt
- Truncated: yes

## agent skills index

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output .well-known/agent-skills/index.json --write-out '<curl-metadata>' https://developers.cloudflare.com/.well-known/agent-skills/index.json
```

Request:

```http
GET https://developers.cloudflare.com/.well-known/agent-skills/index.json HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 200
date: Thu, 04 Jun 2026 21:48:18 GMT
content-type: application/json; charset=utf-8
cf-cache-status: HIT
access-control-allow-origin: *
cache-control: public, max-age=0, must-revalidate
strict-transport-security: max-age=15552000; preload
x-content-type-options: nosniff
speculation-rules: "/cdn-cgi/speculation"
vary: accept-encoding
set-cookie: [redacted]
content-security-policy: form-action 'self'; frame-src 'self' company-target.com *.company-target.com cloudflarestream.com *.cloudflarestream.com youtube-nocookie.com *.youtube-nocookie.com videodelivery.net *.videodelivery.net cloudflare.com *.cloudflare.com; frame-ancestors 'self' cloudflare.com *.cloudflare.com; script-src 'self' cloudflare ... [truncated]
report-to: [redacted]
etag: W/"bf31596755081e10201ce5d70e5c6373"
content-encoding: gzip
server: cloudflare
cf-ray: a06a2417eb85e135-MCI
alt-svc: h3=":443"; ma=86400
```

- Status: 200
- Effective URL: https://developers.cloudflare.com/.well-known/agent-skills/index.json
- Content-Type: application/json; charset=utf-8
- Body bytes: 5271
- Saved body: .well-known/agent-skills/index.json
- Truncated: no

## Markdown for Agents page

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output markdown-for-agents.md.txt --write-out '<curl-metadata>' --header 'Accept: text/markdown' https://developers.cloudflare.com/fundamentals/reference/markdown-for-agents/
```

Request:

```http
GET https://developers.cloudflare.com/fundamentals/reference/markdown-for-agents/ HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
> Accept: text/markdown
```

Response:

```http
HTTP/2 200
date: Thu, 04 Jun 2026 21:48:18 GMT
content-type: text/markdown; charset=utf-8
content-length: 14330
vary: accept
x-markdown-tokens: 3575
content-signal: ai-train=yes, search=yes, ai-input=yes
x-original-tokens: 61331
cache-control: public, max-age=0, must-revalidate
server: cloudflare
cf-ray: a06a24188b0f6d82-DFW
```

- Status: 200
- Effective URL: https://developers.cloudflare.com/fundamentals/reference/markdown-for-agents/
- Content-Type: text/markdown; charset=utf-8
- Body bytes: 14330
- Saved body: markdown-for-agents.md.txt
- Truncated: no
- Notes: Uses content negotiation to request Markdown instead of HTML.
