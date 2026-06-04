# Vercel HTTP Transcript

**Captured:** 2026-06-04T21:48:12.668Z

## docs robots

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output robots.txt --write-out '<curl-metadata>' https://vercel.com/docs/robots.txt
```

Request:

```http
GET https://vercel.com/docs/robots.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 200
age: 263
cache-control: public, max-age=300
content-encoding: gzip
content-security-policy: default-src 'self' vercel.com *.vercel.com *.vercel.sh vercel.live wss://*.vercel.com localhost:*;script-src 'self' 'unsafe-eval' 'unsafe-inline' www.google.com www.google-analytics.com www.googleadservices.com www.gstatic.com *.youtube.com *.youtube-nocookie.com *.ytimg.com *.twimg.com cdn.ampproject.org www.googletag ... [truncated]
content-type: text/markdown; charset=utf-8
date: Thu, 04 Jun 2026 21:44:05 GMT
feature-policy: fullscreen 'self'; camera 'none'
referrer-policy: origin-when-cross-origin
server: Vercel
set-cookie: [redacted]
set-cookie: [redacted]
set-cookie: [redacted]
set-cookie: [redacted]
strict-transport-security: max-age=31536000; includeSubDomains; preload
vary: Accept
x-content-type-options: nosniff
x-dns-prefetch-control: on
x-download-options: noopen
x-matched-path: /[rootFlagsCode]/docs/md/[...slug]
x-vercel-cache: HIT
x-vercel-id: cle1::iad1::kwqxd-1780609708697-8c2694bb79f7
x-xss-protection: 0
```

- Status: 200
- Effective URL: https://vercel.com/docs/robots.md
- Content-Type: text/markdown; charset=utf-8
- Body bytes: 136
- Saved body: robots.txt
- Truncated: no

## sitemap.xml

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output sitemap.xml --write-out '<curl-metadata>' https://vercel.com/sitemap.xml
```

Request:

```http
GET https://vercel.com/sitemap.xml HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 200
age: 262
cache-control: public
content-encoding: gzip
content-security-policy: default-src 'self' vercel.com *.vercel.com *.vercel.sh vercel.live *.stripe.com twitter.com *.twitter.com *.google.com *.github.com *.codesandbox.io https://risk.clearbit.com wss://*.vercel.com localhost:* chrome-extension://*;script-src 'self' 'unsafe-eval' 'unsafe-inline' blob: www.google.com www.gstatic.com *.youtub ... [truncated]
content-type: application/xml; charset=utf-8
date: Thu, 04 Jun 2026 21:44:06 GMT
feature-policy: fullscreen 'self'; camera 'none'
referrer-policy: origin-when-cross-origin
server: Vercel
strict-transport-security: max-age=31536000; includeSubDomains; preload
vary: rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch
x-content-type-options: nosniff
x-dns-prefetch-control: on
x-download-options: noopen
x-frame-options: DENY
x-matched-path: /[filename]
x-vercel-cache: HIT
x-vercel-id: cle1:cle1:cle1::iad1::pvkkt-1780609709230-0a738fb36977
x-xss-protection: 0
```

- Status: 200
- Effective URL: https://vercel.com/crawled-sitemap.xml
- Content-Type: application/xml; charset=utf-8
- Body bytes: 991551
- Saved body: sitemap.xml
- Truncated: no

## llms.txt

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output llms.txt --write-out '<curl-metadata>' https://vercel.com/llms.txt
```

Request:

```http
GET https://vercel.com/llms.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 200
access-control-allow-origin: *
age: 263
cache-control: public, max-age=0, s-maxage=3600, stale-while-revalidate=86400
content-disposition: inline
content-encoding: gzip
content-security-policy: default-src 'self' vercel.com *.vercel.com *.vercel.sh vercel.live wss://*.vercel.com localhost:*;script-src 'self' 'unsafe-eval' 'unsafe-inline' www.google.com www.google-analytics.com www.googleadservices.com www.gstatic.com *.youtube.com *.youtube-nocookie.com *.ytimg.com *.twimg.com cdn.ampproject.org www.googletag ... [truncated]
content-type: text/plain; charset=utf-8
date: Thu, 04 Jun 2026 21:48:29 GMT
etag: W/"3080dcb20542c0027a9637490ba43e5c"
feature-policy: fullscreen 'self'; camera 'none'
referrer-policy: origin-when-cross-origin
server: Vercel
set-cookie: [redacted]
set-cookie: [redacted]
set-cookie: [redacted]
set-cookie: [redacted]
strict-transport-security: max-age=31536000; includeSubDomains; preload
vary: rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch
x-content-type-options: nosniff
x-dns-prefetch-control: on
x-download-options: noopen
x-matched-path: /flg~eyJhbGciOiJIUzI1NiJ9._f7-_v39_f3-_f7-_v4.xdVn_B-WvoPTpOi6BD7iGP-LDjuOFA-C4kEK6dGaZek/llms.txt
x-vercel-cache: HIT
x-vercel-id: cle1::xksfc-1780609709552-88982088f435
x-xss-protection: 0
```

- Status: 200
- Effective URL: https://vercel.com/llms.txt
- Content-Type: text/plain; charset=utf-8
- Body bytes: 171084
- Saved body: llms.txt
- Truncated: no

## docs llms-full.txt

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output llms-full.sample.txt --write-out '<curl-metadata>' https://vercel.com/docs/llms-full.txt
```

Request:

```http
GET https://vercel.com/docs/llms-full.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 200
age: 262
cache-control: public, max-age=300
content-encoding: gzip
content-security-policy: default-src 'self' vercel.com *.vercel.com *.vercel.sh vercel.live wss://*.vercel.com localhost:*;script-src 'self' 'unsafe-eval' 'unsafe-inline' www.google.com www.google-analytics.com www.googleadservices.com www.gstatic.com *.youtube.com *.youtube-nocookie.com *.ytimg.com *.twimg.com cdn.ampproject.org www.googletag ... [truncated]
content-type: text/markdown; charset=utf-8
date: Thu, 04 Jun 2026 21:44:07 GMT
feature-policy: fullscreen 'self'; camera 'none'
referrer-policy: origin-when-cross-origin
server: Vercel
set-cookie: [redacted]
set-cookie: [redacted]
set-cookie: [redacted]
set-cookie: [redacted]
strict-transport-security: max-age=31536000; includeSubDomains; preload
vary: Accept
x-content-type-options: nosniff
x-dns-prefetch-control: on
x-download-options: noopen
x-matched-path: /[rootFlagsCode]/docs/md/[...slug]
x-vercel-cache: HIT
x-vercel-id: cle1::iad1::wlp2v-1780609709814-c9469bc012bd
x-xss-protection: 0
```

- Status: 200
- Effective URL: https://vercel.com/docs/llms-full.txt
- Content-Type: text/markdown; charset=utf-8
- Body bytes: 298
- Saved body: llms-full.sample.txt
- Truncated: no

## agent resources page

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output agent-resources.md.txt --write-out '<curl-metadata>' https://vercel.com/docs/agent-resources
```

Request:

```http
GET https://vercel.com/docs/agent-resources HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 200
age: 262
cache-control: public, max-age=3600
content-encoding: gzip
content-security-policy: default-src 'self' vercel.com *.vercel.com *.vercel.sh vercel.live wss://*.vercel.com localhost:*;script-src 'self' 'unsafe-eval' 'unsafe-inline' www.google.com www.google-analytics.com www.googleadservices.com www.gstatic.com *.youtube.com *.youtube-nocookie.com *.ytimg.com *.twimg.com cdn.ampproject.org www.googletag ... [truncated]
content-type: text/markdown; charset=utf-8
date: Thu, 04 Jun 2026 21:44:07 GMT
feature-policy: fullscreen 'self'; camera 'none'
referrer-policy: origin-when-cross-origin
server: Vercel
set-cookie: [redacted]
set-cookie: [redacted]
set-cookie: [redacted]
set-cookie: [redacted]
strict-transport-security: max-age=31536000; includeSubDomains; preload
vary: Accept
x-content-type-options: nosniff
x-dns-prefetch-control: on
x-download-options: noopen
x-matched-path: /[rootFlagsCode]/docs/md/[...slug]
x-vercel-cache: HIT
x-vercel-id: cle1::iad1::6lmm2-1780609710176-46344eb8d1a0
x-xss-protection: 0
```

- Status: 200
- Effective URL: https://vercel.com/docs/agent-resources
- Content-Type: text/markdown; charset=utf-8
- Body bytes: 3989
- Saved body: agent-resources.md.txt
- Truncated: no

## Agent Readability Spec

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output agent-readability-spec.sample.html.txt --write-out '<curl-metadata>' https://vercel.com/kb/guide/agent-readability-spec
```

Request:

```http
GET https://vercel.com/kb/guide/agent-readability-spec HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 200
age: 814
cache-control: public, max-age=0, must-revalidate
content-encoding: gzip
content-security-policy: default-src 'self' vercel.com *.vercel.com *.vercel.sh vercel.live wss://*.vercel.com localhost:*;script-src 'self' 'unsafe-eval' 'unsafe-inline' www.google.com www.google-analytics.com www.googleadservices.com www.gstatic.com *.youtube.com *.youtube-nocookie.com *.ytimg.com *.twimg.com cdn.ampproject.org www.googletag ... [truncated]
content-type: text/html; charset=utf-8
date: Thu, 04 Jun 2026 21:34:55 GMT
feature-policy: fullscreen 'self'; camera 'none'
link: </vc-ap-vercel-docs/_next/static/immutable/media/GeistMono_Variable.p.1bcgm0qa26ixg.woff2>; rel=preload; as="font"; crossorigin=""; type="font/woff2", </vc-ap-vercel-docs/_next/static/immutable/media/caa3a2e1cccd8315.p.0wgildi0cnwt9.woff2>; rel=preload; as="font"; crossorigin=""; type="font/woff2", <//images.ctfassets. ... [truncated]
referrer-policy: origin-when-cross-origin
server: Vercel
set-cookie: [redacted]
set-cookie: [redacted]
set-cookie: [redacted]
set-cookie: [redacted]
strict-transport-security: max-age=31536000; includeSubDomains; preload
vary: rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch
x-content-type-options: nosniff
x-dns-prefetch-control: on
x-download-options: noopen
x-matched-path: /flg~eyJhbGciOiJIUzI1NiJ9._f7-_v39_f3-_f7-_v4.xdVn_B-WvoPTpOi6BD7iGP-LDjuOFA-C4kEK6dGaZek/kb/guide/agent-readability-spec
x-nextjs-prerender: 1
x-nextjs-stale-time: 300
x-powered-by: Next.js
x-vercel-cache: HIT
x-vercel-id: cle1::iad1::kwqxd-1780609710452-1969bf455024
x-xss-protection: 0
```

- Status: 200
- Effective URL: https://vercel.com/kb/guide/agent-readability-spec
- Content-Type: text/html; charset=utf-8
- Body bytes: 734393
- Saved body: agent-readability-spec.sample.html.txt
- Truncated: yes
