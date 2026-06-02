# Anthropic Root HTTP Transcript

**Captured:** 2026-06-02T19:28:00.989Z

## robots.txt

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output robots.txt --write-out '<curl-metadata>' https://www.anthropic.com/robots.txt
```

Request:

```http
GET https://www.anthropic.com/robots.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 200
date: Tue, 02 Jun 2026 19:28:33 GMT
content-type: text/plain
cf-ray: a058dc973d20d1a1-MCI
cf-cache-status: MISS
cache-control: public, max-age=14400
expires: Tue, 02 Jun 2026 23:28:33 GMT
server: cloudflare
strict-transport-security: max-age=3600
vary: rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch, Accept-Encoding
via: 1.1 google
content-security-policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.intellimize.co https://cdnjs.cloudflare.com https://d3e54v103j8qbb.cloudfront.net https://cdn.prod.website-files.com https://hubspotonwebflow.com https://www.googletagmanager.com https://a-cdn.anthropic.com https://connect.facebook.net https://www.youtub ... [truncated]
alt-svc: h3=":443"; ma=86400
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
x-nextjs-cache: HIT
x-xss-protection: 1; mode=block
set-cookie: [redacted]
content-encoding: gzip
```

- Status: 200
- Effective URL: https://www.anthropic.com/robots.txt
- Content-Type: text/plain
- Body bytes: 71
- Saved body: robots.txt
- Truncated: no

## sitemap.xml

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output sitemap.xml --write-out '<curl-metadata>' https://www.anthropic.com/sitemap.xml
```

Request:

```http
GET https://www.anthropic.com/sitemap.xml HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 200
date: Tue, 02 Jun 2026 19:28:36 GMT
content-type: application/xml
set-cookie: [redacted]
set-cookie: [redacted]
cf-ray: a058dca43d9fd316-MCI
cf-cache-status: DYNAMIC
cache-control: public, max-age=0, must-revalidate
server: cloudflare
strict-transport-security: max-age=3600
vary: rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch, accept-encoding
via: 1.1 google
content-security-policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.intellimize.co https://cdnjs.cloudflare.com https://d3e54v103j8qbb.cloudfront.net https://cdn.prod.website-files.com https://hubspotonwebflow.com https://www.googletagmanager.com https://a-cdn.anthropic.com https://connect.facebook.net https://www.youtub ... [truncated]
alt-svc: h3=":443"; ma=86400
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
x-nextjs-cache: HIT
x-xss-protection: 1; mode=block
content-encoding: gzip
```

- Status: 200
- Effective URL: https://www.anthropic.com/sitemap.xml
- Content-Type: application/xml
- Body bytes: 57483
- Saved body: sitemap.xml
- Truncated: no

## llms.txt

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output llms.txt --write-out '<curl-metadata>' https://www.anthropic.com/llms.txt
```

Request:

```http
GET https://www.anthropic.com/llms.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 404
date: Tue, 02 Jun 2026 19:28:40 GMT
content-type: text/html; charset=utf-8
set-cookie: [redacted]
set-cookie: [redacted]
cf-ray: a058dcb45cda4de2-MCI
cf-cache-status: DYNAMIC
cache-control: private, no-cache, no-store, max-age=0, must-revalidate
link: </_next/static/media/AnthropicMono_Italic_Web-s.p.0a6clcalc57jy.woff2>; rel=preload; as="font"; crossorigin=""; nonce="ODhlZmY4YzItNTMxOC00NDgzLWI5NmUtMjYwNmM2NmFmMjY0"; type="font/woff2", </_next/static/media/AnthropicMono_Roman_Web-s.p.0dvv1q62z~ge1.woff2>; rel=preload; as="font"; crossorigin=""; nonce="ODhlZmY4YzItNTMxOC00NDgzLWI5NmUtMjYwNmM2NmFmMjY0"; type="font/woff2", </_next/static/media/AnthropicSans_Italic_Web-s.p.0nrgm.g8~ach1.woff2>; rel=preload; as="font"; crossorigin=""; nonce="ODhlZmY4YzItNTMxOC00NDgzLWI5NmUtMjYwNmM2NmFmMjY0"; type="font/woff2", </_next/static/media/AnthropicSans_Roman_Web-s.p.0g0iw7wqvowb5.woff2>; rel=preload; as="font"; crossorigin=""; nonce="ODhlZmY4YzItNTMxOC00NDgzLWI5NmUtMjYwNmM2NmFmMjY0"; type="font/woff2", </_next/static/media/AnthropicSerif_Italic_Web-s.p.0gh_wrgthn62t.woff2>; rel=preload; as="font"; crossorigin=""; nonce="ODhlZmY4YzItNTMxOC00NDgzLWI5NmUtMjYwNmM2NmFmMjY0"; type="font/woff2", </_next/static/media/AnthropicSerif_Roman_Web-s.p.0974051x8mlf0.woff2>; rel=preload; as="font"; crossorigin=""; nonce="ODhlZmY4YzItNTMxOC00NDgzLWI5NmUtMjYwNmM2NmFmMjY0"; type="font/woff2", </_next/static/media/Copernicus_Book-s.p.05o-np3qymnod.woff2>; rel=preload; as="font"; crossorigin=""; nonce="ODhlZmY4YzItNTMxOC00NDgzLWI5NmUtMjYwNmM2NmFmMjY0"; type="font/woff2", </_next/static/media/Copernicus_Medium-s.p.0sy5~fr0eyl7z.woff2>; rel=preload; as="font"; crossorigin=""; nonce="ODhlZmY4YzItNTMxOC00NDgzLWI5NmUtMjYwNmM2NmFmMjY0"; type="font/woff2", </_next/static/media/JetBrainsMono_VF-s.p.16iwkfzw7limt.ttf>; rel=preload; as="font"; crossorigin=""; nonce="ODhlZmY4YzItNTMxOC00NDgzLWI5NmUtMjYwNmM2NmFmMjY0"; type="font/ttf", </_next/static/media/StyreneA_MediumItalic_Web-s.p.06znirukso.x8.woff2>; rel=preload; as="font"; crossorigin=""; nonce="ODhlZmY4YzItNTMxOC00NDgzLWI5NmUtMjYwNmM2NmFmMjY0"; type="font/woff2", </_next/static/media/StyreneA_Medium_Web-s.p.0nn3owxanef3s.woff2>; rel=preload; as="font"; crossorigin=""; nonce="ODhlZmY4YzItNTMxOC00NDgzLWI5NmUtMjYwNmM2NmFmMjY0"; type="font/woff2", </_next/static/media/StyreneA_RegularItalic_Web-s.p.0h2r1lbzpvtde.woff2>; rel=preload; as="font"; crossorigin=""; nonce="ODhlZmY4YzItNTMxOC00NDgzLWI5NmUtMjYwNmM2NmFmMjY0"; type="font/woff2", </_next/static/media/StyreneA_Regular_Web-s.p.142iitxco7zvn.woff2>; rel=preload; as="font"; crossorigin=""; nonce="ODhlZmY4YzItNTMxOC00NDgzLWI5NmUtMjYwNmM2NmFmMjY0"; type="font/woff2", </_next/static/media/StyreneB_Medium_Web-s.p.09njtiix1t5ud.woff2>; rel=preload; as="font"; crossorigin=""; nonce="ODhlZmY4YzItNTMxOC00NDgzLWI5NmUtMjYwNmM2NmFmMjY0"; type="font/woff2", </_next/static/media/StyreneB_Regular_Web-s.p.0judbpsl6eyx2.woff2>; rel=preload; as="font"; crossorigin=""; nonce="ODhlZmY4YzItNTMxOC00NDgzLWI5NmUtMjYwNmM2NmFmMjY0"; type="font/woff2", </_next/static/media/TiemposText_Medium-s.p.0~u0~bacwkeeb.woff2>; rel=preload; as="font"; crossorigin=""; nonce="ODhlZmY4YzItNTMxOC00NDgzLWI5NmUtMjYwNmM2NmFmMjY0"; type="font/woff2", </_next/static/media/TiemposText_MediumItalic-s.p.0ijezcyebrwsd.woff2>; rel=preload; as="font"; crossorigin=""; nonce="ODhlZmY4YzItNTMxOC00NDgzLWI5NmUtMjYwNmM2NmFmMjY0"; type="font/woff2", </_next/static/media/TiemposText_Regular-s.p.0w24c-~q~094g.woff2>; rel=preload; as="font"; crossorigin=""; nonce="ODhlZmY4YzItNTMxOC00NDgzLWI5NmUtMjYwNmM2NmFmMjY0"; type="font/woff2", </_next/static/media/TiemposText_RegularItalic-s.p.0rf70lcidbxth.woff2>; rel=preload; as="font"; crossorigin=""; nonce="ODhlZmY4YzItNTMxOC00NDgzLWI5NmUtMjYwNmM2NmFmMjY0"; type="font/woff2", </_next/static/chunks/0h8~h_w93qxyd.css>; rel=preload; as="style"; nonce="ODhlZmY4YzItNTMxOC00NDgzLWI5NmUtMjYwNmM2NmFmMjY0", </_next/static/chunks/0kh_997_his9r.css>; rel=preload; as="style"; nonce="ODhlZmY4YzItNTMxOC00NDgzLWI5NmUtMjYwNmM2NmFmMjY0", </_next/static/chunks/0on1-qkvntmfn.css>; rel=preload; as="style"; nonce="ODhlZmY4YzItNTMxOC00NDgzLWI5NmUtMjYwNmM2NmFmMjY0", </_next/static/chunks/14eac.lv283qe.css>; rel=preload; as="style"; nonce="ODhlZmY4YzItNTMxOC00NDgzLWI5NmUtMjYwNmM2NmFmMjY0", </_next/static/chunks/0khy9w-k3.nof.css>; rel=preload; as="style"; nonce="ODhlZmY4YzItNTMxOC00NDgzLWI5NmUtMjYwNmM2NmFmMjY0", </_next/static/chunks/01godr8u6mf._.css>; rel=preload; as="style"; nonce="ODhlZmY4YzItNTMxOC00NDgzLWI5NmUtMjYwNmM2NmFmMjY0"
server: cloudflare
strict-transport-security: max-age=3600
vary: rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch, Accept-Encoding
via: 1.1 google
content-security-policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.intellimize.co https://cdnjs.cloudflare.com https://d3e54v103j8qbb.cloudfront.net https://cdn.prod.website-files.com https://hubspotonwebflow.com https://www.googletagmanager.com https://a-cdn.anthropic.com https://connect.facebook.net https://www.youtub ... [truncated]
alt-svc: h3=":443"; ma=86400
x-cloud-trace-context: 51971a1cb35e5855100a5958ff7085b9
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
x-xss-protection: 1; mode=block
content-encoding: gzip
```

- Status: 404
- Effective URL: https://www.anthropic.com/llms.txt
- Content-Type: text/html; charset=utf-8
- Body bytes: 61067
- Saved body: status only
- Truncated: no
