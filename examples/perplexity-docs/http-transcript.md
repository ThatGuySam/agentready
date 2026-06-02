# Perplexity Docs HTTP Transcript

**Captured:** 2026-06-02T19:28:00.989Z

## robots.txt

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output robots.txt --write-out '<curl-metadata>' https://docs.perplexity.ai/robots.txt
```

Request:

```http
GET https://docs.perplexity.ai/robots.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 200
cache-control: public, max-age=0, must-revalidate
cf-cache-status: EXPIRED
cf-ray: a058dbfeccaf612b-CMH
content-encoding: gzip
content-security-policy: worker-src * blob: data: 'unsafe-eval' 'unsafe-inline'; object-src data: ; base-uri 'self'; upgrade-insecure-requests; frame-ancestors 'self' https://dashboard.mintlify.com https://app.mintlify.com; form-action 'self' https://codesandbox.io;
content-type: text/plain
date: Tue, 02 Jun 2026 19:28:07 GMT
last-modified: Tue, 02 Jun 2026 19:28:07 GMT
server: Vercel
strict-transport-security: max-age=63072000
vary: rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch, accept-encoding
x-frame-options: DENY
x-matched-path: /_sites/[subdomain]/robots.txt
x-vercel-cache: MISS
x-vercel-id: cle1:cle1:iad1::iad1::7zwxv-1780428487466-b61176927ac3
```

- Status: 200
- Effective URL: https://docs.perplexity.ai/robots.txt
- Content-Type: text/plain
- Body bytes: 174
- Saved body: robots.txt
- Truncated: no

## sitemap.xml

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output sitemap.xml --write-out '<curl-metadata>' https://docs.perplexity.ai/sitemap.xml
```

Request:

```http
GET https://docs.perplexity.ai/sitemap.xml HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 200
cache-control: public, max-age=0, must-revalidate
cf-cache-status: EXPIRED
cf-ray: a058dc010998612b-CMH
content-encoding: gzip
content-security-policy: worker-src * blob: data: 'unsafe-eval' 'unsafe-inline'; object-src data: ; base-uri 'self'; upgrade-insecure-requests; frame-ancestors 'self' https://dashboard.mintlify.com https://app.mintlify.com; form-action 'self' https://codesandbox.io;
content-type: text/xml
date: Tue, 02 Jun 2026 19:28:07 GMT
last-modified: Tue, 02 Jun 2026 19:28:08 GMT
server: Vercel
strict-transport-security: max-age=63072000
vary: rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch, accept-encoding
x-frame-options: DENY
x-matched-path: /_sites/[subdomain]/sitemap.xml
x-vercel-cache: MISS
x-vercel-id: cle1:cle1:iad1::iad1::6vknr-1780428487811-da8e1200ba80
```

- Status: 200
- Effective URL: https://docs.perplexity.ai/sitemap.xml
- Content-Type: text/xml
- Body bytes: 21104
- Saved body: sitemap.xml
- Truncated: no

## llms.txt

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output llms.txt --write-out '<curl-metadata>' https://docs.perplexity.ai/llms.txt
```

Request:

```http
GET https://docs.perplexity.ai/llms.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 200
cache-control: public, max-age=0, must-revalidate
cf-cache-status: EXPIRED
cf-ray: a058dc03cb8a1cc4-CMH
content-encoding: gzip
content-security-policy: worker-src * blob: data: 'unsafe-eval' 'unsafe-inline'; object-src data: ; base-uri 'self'; upgrade-insecure-requests; frame-ancestors 'self' https://dashboard.mintlify.com https://app.mintlify.com; form-action 'self' https://codesandbox.io;
content-type: text/plain; charset=utf-8
date: Tue, 02 Jun 2026 19:28:08 GMT
last-modified: Tue, 02 Jun 2026 19:28:08 GMT
server: Vercel
strict-transport-security: max-age=63072000
vary: rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch, accept-encoding
x-frame-options: DENY
x-matched-path: /_sites/[subdomain]/llms.txt
x-vercel-cache: MISS
x-vercel-id: cle1:cle1:iad1::iad1::tnblw-1780428488256-7444432fc971
```

- Status: 200
- Effective URL: https://docs.perplexity.ai/llms.txt
- Content-Type: text/plain; charset=utf-8
- Body bytes: 30236
- Saved body: llms.txt
- Truncated: no

## llms-full.txt

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output llms-full.sample.txt --write-out '<curl-metadata>' https://docs.perplexity.ai/llms-full.txt
```

Request:

```http
GET https://docs.perplexity.ai/llms-full.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 200
age: 5258
cache-control: public, max-age=86400
cf-cache-status: HIT
cf-ray: a058dc068e9b99fe-CMH
content-encoding: gzip
content-security-policy: worker-src * blob: data: 'unsafe-eval' 'unsafe-inline'; object-src data: ; base-uri 'self'; upgrade-insecure-requests; frame-ancestors 'self' https://dashboard.mintlify.com https://app.mintlify.com; form-action 'self' https://codesandbox.io;
content-type: text/plain; charset=utf-8
date: Tue, 02 Jun 2026 19:28:08 GMT
last-modified: Tue, 02 Jun 2026 18:02:01 GMT
server: Vercel
strict-transport-security: max-age=63072000
vary: rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch, accept-encoding
x-frame-options: DENY
x-matched-path: /_sites/[subdomain]/llms-full.txt
x-vercel-cache: MISS
x-vercel-id: cle1:fra1:iad1::iad1::rb7mx-1780428488709-6a887803fa2c
```

- Status: 200
- Effective URL: https://docs.perplexity.ai/llms-full.txt
- Content-Type: text/plain; charset=utf-8
- Body bytes: 1495820
- Saved body: llms-full.sample.txt
- Truncated: yes

## agent skills index

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output .well-known/agent-skills/index.json --write-out '<curl-metadata>' https://docs.perplexity.ai/.well-known/agent-skills/index.json
```

Request:

```http
GET https://docs.perplexity.ai/.well-known/agent-skills/index.json HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 200
age: 8394
cache-control: public, max-age=86400
cf-cache-status: HIT
cf-ray: a058dc093f382780-CMH
content-encoding: gzip
content-security-policy: worker-src * blob: data: 'unsafe-eval' 'unsafe-inline'; object-src data: ; base-uri 'self'; upgrade-insecure-requests; frame-ancestors 'self' https://dashboard.mintlify.com https://app.mintlify.com; form-action 'self' https://codesandbox.io;
content-type: application/json
date: Tue, 02 Jun 2026 19:28:09 GMT
last-modified: Tue, 02 Jun 2026 17:08:14 GMT
server: Vercel
strict-transport-security: max-age=63072000
vary: rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch, accept-encoding
x-frame-options: DENY
x-matched-path: /_sites/[subdomain]/.well-known/agent-skills/index.json
x-vercel-cache: MISS
x-vercel-id: cle1:cle1:iad1::iad1::wf478-1780428489112-054dc97a96a7
```

- Status: 200
- Effective URL: https://docs.perplexity.ai/.well-known/agent-skills/index.json
- Content-Type: application/json
- Body bytes: 600
- Saved body: .well-known/agent-skills/index.json
- Truncated: no

## crawler docs page

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output perplexity-crawlers.sample.html.txt --write-out '<curl-metadata>' https://docs.perplexity.ai/docs/resources/perplexity-crawlers
```

Request:

```http
GET https://docs.perplexity.ai/docs/resources/perplexity-crawlers HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 200
age: 5062
cache-control: no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0
cf-cache-status: HIT
cf-ray: a058dc0a69af2780-CMH
content-encoding: gzip
content-security-policy: worker-src * blob: data: 'unsafe-eval' 'unsafe-inline'; object-src data: ; base-uri 'self'; upgrade-insecure-requests; frame-ancestors 'self' https://dashboard.mintlify.com https://app.mintlify.com; form-action 'self' https://codesandbox.io;
content-type: text/html; charset=utf-8
date: Tue, 02 Jun 2026 19:28:09 GMT
expires: 0
last-modified: Tue, 02 Jun 2026 18:41:22 GMT
link: </llms.txt>; rel="llms-txt", </llms-full.txt>; rel="llms-full-txt", </.well-known/api-catalog>; rel="api-catalog", </.well-known/mcp/server-card.json>; rel="mcp-server-card", </.well-known/agent-card.json>; rel="agent-card", </.well-known/oauth-protected-resource>; rel="oauth-protected-resource", </.well-known/agent-skills/index.json>; rel="agent-skills", </mintlify-assets/_next/static/chunks/9ffc684b9a12d113.css?dpl=dpl_J3jZeLg2uNQRsEocBbwjJLxTDqJA>; rel=preload; as="style", </mintlify-assets/_next/static/chunks/b652b64e1051c665.css?dpl=dpl_J3jZeLg2uNQRsEocBbwjJLxTDqJA>; rel=preload; as="style", </mintlify-assets/_next/static/chunks/d260340e1c30c06e.css?dpl=dpl_J3jZeLg2uNQRsEocBbwjJLxTDqJA>; rel=preload; as="style"
pragma: no-cache
server: Vercel
strict-transport-security: max-age=63072000
vary: rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch, accept-encoding
x-frame-options: DENY
x-llms-txt: /llms.txt
x-matched-path: /_sites/[subdomain]/[[...slug]]
x-mint-proxy-version: 1.0.0-prod
x-mintlify-client-version: 0.0.2998
x-served-version: dpl_J3jZeLg2uNQRsEocBbwjJLxTDqJA
x-vercel-cache: BYPASS
x-vercel-id: cle1:iad1::iad1::hxqrf-1780428489325-f401b354c8c4
x-vercel-project-id: prj_NdMUpHpUIb41Po1H8c6hrChv2bgr
x-version: dpl_J3jZeLg2uNQRsEocBbwjJLxTDqJA
```

- Status: 200
- Effective URL: https://docs.perplexity.ai/docs/resources/perplexity-crawlers
- Content-Type: text/html; charset=utf-8
- Body bytes: 519151
- Saved body: perplexity-crawlers.sample.html.txt
- Truncated: yes
