# OpenAI Root HTTP Transcript

**Captured:** 2026-06-04T21:48:12.668Z

## robots.txt

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output robots.txt --write-out '<curl-metadata>' https://openai.com/robots.txt
```

Request:

```http
GET https://openai.com/robots.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 200
date: Thu, 04 Jun 2026 21:48:44 GMT
content-type: text/plain; charset=utf-8
nel: {"report_to":"cf-nel","success_fraction":0.01,"max_age":604800}
access-control-allow-origin: *
cache-control: public, max-age=0, must-revalidate
content-disposition: inline; filename="robots.txt"
report-to: [redacted]
last-modified: Wed, 22 Apr 2026 19:00:07 GMT
server: cloudflare
strict-transport-security: max-age=31536000; includeSubDomains; preload
x-matched-path: /robots.txt
x-vercel-cache: HIT
x-vercel-id: iad1::z42gb-1776885309304-5ed933b2da82
age: 47803
cf-cache-status: HIT
x-content-type-options: nosniff
set-cookie: [redacted]
etag: W/"e32952d6049963aad2d1d7c44e1fa236"
content-encoding: gzip
cf-ray: a06a24b76e6dfa09-MCI
alt-svc: h3=":443"; ma=86400
```

- Status: 200
- Effective URL: https://openai.com/robots.txt
- Content-Type: text/plain; charset=utf-8
- Body bytes: 98
- Saved body: robots.txt
- Truncated: no

## sitemap.xml

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output sitemap.xml --write-out '<curl-metadata>' https://openai.com/sitemap.xml
```

Request:

```http
GET https://openai.com/sitemap.xml HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 200
date: Thu, 04 Jun 2026 21:48:44 GMT
content-type: application/xml
access-control-allow-origin: *
age: 624
cache-control: public, max-age=0, must-revalidate
content-disposition: inline; filename="sitemap.xml"
nel: {"report_to":"cf-nel","success_fraction":0.01,"max_age":604800}
etag: W/"5efc93fc3c7a9e51a5b5c30f30a271ab"
last-modified: Thu, 04 Jun 2026 21:38:20 GMT
server: cloudflare
strict-transport-security: max-age=31536000; includeSubDomains; preload
x-matched-path: /sitemap.xml
x-vercel-cache: HIT
x-vercel-id: cle1::rbmvz-1780609724251-f824cfe1f345
cf-cache-status: DYNAMIC
set-cookie: [redacted]
set-cookie: [redacted]
vary: accept-encoding
x-content-type-options: nosniff
report-to: [redacted]
content-encoding: gzip
cf-ray: a06a24b85f487891-DFW
alt-svc: h3=":443"; ma=86400
```

- Status: 200
- Effective URL: https://openai.com/sitemap.xml
- Content-Type: application/xml
- Body bytes: 2829
- Saved body: sitemap.xml
- Truncated: no

## llms.txt

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output llms.txt --write-out '<curl-metadata>' https://openai.com/llms.txt
```

Request:

```http
GET https://openai.com/llms.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 403
date: Thu, 04 Jun 2026 21:48:44 GMT
content-type: text/html; charset=UTF-8
accept-ch: Sec-CH-UA-Bitness, Sec-CH-UA-Arch, Sec-CH-UA-Full-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Platform, Sec-CH-UA, UA-Bitness, UA-Arch, UA-Full-Version, UA-Mobile, UA-Model, UA-Platform-Version, UA-Platform, UA
cf-mitigated: challenge
x-frame-options: SAMEORIGIN
server: cloudflare
critical-ch: Sec-CH-UA-Bitness, Sec-CH-UA-Arch, Sec-CH-UA-Full-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Platform, Sec-CH-UA, UA-Bitness, UA-Arch, UA-Full-Version, UA-Mobile, UA-Model, UA-Platform-Version, UA-Platform, UA
cross-origin-embedder-policy: require-corp
cross-origin-opener-policy: same-origin
cross-origin-resource-policy: same-origin
origin-agent-cluster: ?1
permissions-policy: accelerometer=(),camera=(),clipboard-read=(),clipboard-write=(),geolocation=(),gyroscope=(),hid=(),magnetometer=(),microphone=(),payment=(),publickey-credentials-get=(),screen-wake-lock=(),serial=(),sync-xhr=(),usb=(),xr-spatial-tracking=*
referrer-policy: same-origin
server-timing: chlray;desc="a06a24b94e60ea02"
x-content-type-options: nosniff
strict-transport-security: max-age=31536000; includeSubDomains; preload
set-cookie: [redacted]
report-to: [redacted]
nel: {"report_to":"cf-nel","success_fraction":0.01,"max_age":604800}
content-encoding: gzip
cf-ray: a06a24b94e60ea02-DFW
alt-svc: h3=":443"; ma=86400
```

- Status: 403
- Effective URL: https://openai.com/llms.txt
- Content-Type: text/html; charset=UTF-8
- Body bytes: 9789
- Saved body: status only
- Truncated: no
