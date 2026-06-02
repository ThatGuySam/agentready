# Model Context Protocol HTTP Transcript

**Captured:** 2026-06-02T19:28:00.989Z

## robots.txt

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output robots.txt --write-out '<curl-metadata>' https://modelcontextprotocol.io/robots.txt
```

Request:

```http
GET https://modelcontextprotocol.io/robots.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 200
cache-control: public, max-age=0, must-revalidate
cf-cache-status: EXPIRED
cf-ray: a058dc0dcdaef3c9-CMH
content-encoding: gzip
content-security-policy: worker-src * blob: data: 'unsafe-eval' 'unsafe-inline'; object-src data: ; base-uri 'self'; upgrade-insecure-requests; frame-ancestors 'self' https://dashboard.mintlify.com https://app.mintlify.com; form-action 'self' https://codesandbox.io;
content-type: text/plain
date: Tue, 02 Jun 2026 19:28:09 GMT
last-modified: Tue, 02 Jun 2026 19:28:10 GMT
server: Vercel
strict-transport-security: max-age=63072000
vary: rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch, accept-encoding
x-frame-options: DENY
x-matched-path: /_sites/[subdomain]/robots.txt
x-vercel-cache: MISS
x-vercel-id: cle1:cle1:iad1::iad1::qxvl7-1780428489859-39bdcf5d1948
```

- Status: 200
- Effective URL: https://modelcontextprotocol.io/robots.txt
- Content-Type: text/plain
- Body bytes: 179
- Saved body: robots.txt
- Truncated: no

## sitemap.xml

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output sitemap.xml --write-out '<curl-metadata>' https://modelcontextprotocol.io/sitemap.xml
```

Request:

```http
GET https://modelcontextprotocol.io/sitemap.xml HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 200
cache-control: public, max-age=0, must-revalidate
cf-cache-status: EXPIRED
cf-ray: a058dc10ad1136cd-CMH
content-encoding: gzip
content-security-policy: worker-src * blob: data: 'unsafe-eval' 'unsafe-inline'; object-src data: ; base-uri 'self'; upgrade-insecure-requests; frame-ancestors 'self' https://dashboard.mintlify.com https://app.mintlify.com; form-action 'self' https://codesandbox.io;
content-type: text/xml
date: Tue, 02 Jun 2026 19:28:10 GMT
last-modified: Tue, 02 Jun 2026 19:28:10 GMT
server: Vercel
strict-transport-security: max-age=63072000
vary: rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch, accept-encoding
x-frame-options: DENY
x-matched-path: /_sites/[subdomain]/sitemap.xml
x-vercel-cache: MISS
x-vercel-id: cle1:cle1:iad1::iad1::8r9h6-1780428490281-889270bdb65e
```

- Status: 200
- Effective URL: https://modelcontextprotocol.io/sitemap.xml
- Content-Type: text/xml
- Body bytes: 31005
- Saved body: sitemap.xml
- Truncated: no

## llms.txt

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output llms.txt --write-out '<curl-metadata>' https://modelcontextprotocol.io/llms.txt
```

Request:

```http
GET https://modelcontextprotocol.io/llms.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 200
cache-control: public, max-age=0, must-revalidate
cf-cache-status: EXPIRED
cf-ray: a058dc139f80b5b3-CMH
content-encoding: gzip
content-security-policy: worker-src * blob: data: 'unsafe-eval' 'unsafe-inline'; object-src data: ; base-uri 'self'; upgrade-insecure-requests; frame-ancestors 'self' https://dashboard.mintlify.com https://app.mintlify.com; form-action 'self' https://codesandbox.io;
content-type: text/plain; charset=utf-8
date: Tue, 02 Jun 2026 19:28:10 GMT
last-modified: Tue, 02 Jun 2026 19:28:11 GMT
server: Vercel
strict-transport-security: max-age=63072000
vary: rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch, accept-encoding
x-frame-options: DENY
x-matched-path: /_sites/[subdomain]/llms.txt
x-vercel-cache: MISS
x-vercel-id: cle1:cle1:iad1::iad1::p7vf5-1780428490796-0d3c409f8f84
```

- Status: 200
- Effective URL: https://modelcontextprotocol.io/llms.txt
- Content-Type: text/plain; charset=utf-8
- Body bytes: 18341
- Saved body: llms.txt
- Truncated: no

## llms-full.txt

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output llms-full.sample.txt --write-out '<curl-metadata>' https://modelcontextprotocol.io/llms-full.txt
```

Request:

```http
GET https://modelcontextprotocol.io/llms-full.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 200
age: 7434
cache-control: public, max-age=86400
cf-cache-status: HIT
cf-ray: a058dc170d28b36e-CMH
content-encoding: gzip
content-security-policy: worker-src * blob: data: 'unsafe-eval' 'unsafe-inline'; object-src data: ; base-uri 'self'; upgrade-insecure-requests; frame-ancestors 'self' https://dashboard.mintlify.com https://app.mintlify.com; form-action 'self' https://codesandbox.io;
content-type: text/plain; charset=utf-8
date: Tue, 02 Jun 2026 19:28:11 GMT
last-modified: Tue, 02 Jun 2026 18:19:09 GMT
server: Vercel
strict-transport-security: max-age=63072000
vary: rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch, accept-encoding
x-frame-options: DENY
x-matched-path: /_sites/[subdomain]/llms-full.txt
x-vercel-cache: MISS
x-vercel-id: cle1:sfo1:iad1::iad1::jn7kn-1780428491331-e54dbc363b57
```

- Status: 200
- Effective URL: https://modelcontextprotocol.io/llms-full.txt
- Content-Type: text/plain; charset=utf-8
- Body bytes: 1891695
- Saved body: llms-full.sample.txt
- Truncated: yes

## agent skills index

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output .well-known/agent-skills/index.json --write-out '<curl-metadata>' https://modelcontextprotocol.io/.well-known/agent-skills/index.json
```

Request:

```http
GET https://modelcontextprotocol.io/.well-known/agent-skills/index.json HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 200
age: 84159
cache-control: public, max-age=86400
cf-cache-status: HIT
cf-ray: a058dc1aada6c6fa-CMH
content-encoding: gzip
content-security-policy: worker-src * blob: data: 'unsafe-eval' 'unsafe-inline'; object-src data: ; base-uri 'self'; upgrade-insecure-requests; frame-ancestors 'self' https://dashboard.mintlify.com https://app.mintlify.com; form-action 'self' https://codesandbox.io;
content-type: application/json
date: Tue, 02 Jun 2026 19:28:11 GMT
last-modified: Tue, 02 Jun 2026 17:08:28 GMT
server: Vercel
strict-transport-security: max-age=63072000
vary: rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch, accept-encoding
x-frame-options: DENY
x-matched-path: /_sites/[subdomain]/.well-known/agent-skills/index.json
x-vercel-cache: MISS
x-vercel-id: cle1:yul1:iad1::iad1::r7m4m-1780428491920-c66ce68ebdb1
```

- Status: 200
- Effective URL: https://modelcontextprotocol.io/.well-known/agent-skills/index.json
- Content-Type: application/json
- Body bytes: 661
- Saved body: .well-known/agent-skills/index.json
- Truncated: no
