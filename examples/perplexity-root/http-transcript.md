# Perplexity Root HTTP Transcript

**Captured:** 2026-06-04T21:48:12.668Z

## robots.txt

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output robots.txt --write-out '<curl-metadata>' https://www.perplexity.ai/robots.txt
```

Request:

```http
GET https://www.perplexity.ai/robots.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 200
date: Thu, 04 Jun 2026 21:48:46 GMT
content-type: text/plain; charset=utf-8
content-security-policy: object-src 'none'; base-uri 'self'; form-action 'self' https://onedrive.live.com https://*.sharepoint.com https://*.paypal.com https://*.venmo.com; frame-ancestors 'self' https://onedrive.live.com https://*.sharepoint.com https://app.athina.ai; upgrade-insecure-requests
cross-origin-opener-policy: unsafe-none
cross-origin-resource-policy: same-origin
etag: W/"c34a450e82abdb16e6aa9c65296b4f92ab87c786"
origin-agent-cluster: ?1
referrer-policy: strict-origin-when-cross-origin
strict-transport-security: max-age=15552000; includeSubDomains; preload
x-content-type-options: nosniff
x-dns-prefetch-control: off
x-download-options: noopen
x-frame-options: DENY
x-permitted-cross-domain-policies: none
x-xss-protection: 0
set-cookie: [redacted]
set-cookie: [redacted]
cache-control: public, max-age=300
expires: Thu, 04 Jun 2026 21:53:46 GMT
cf-cache-status: REVALIDATED
content-encoding: gzip
server: cloudflare
cf-ray: a06a24c66a176bad-DFW
```

- Status: 200
- Effective URL: https://www.perplexity.ai/robots.txt
- Content-Type: text/plain; charset=utf-8
- Body bytes: 761
- Saved body: robots.txt
- Truncated: no

## sitemap.xml

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output sitemap.xml --write-out '<curl-metadata>' https://www.perplexity.ai/sitemap.xml
```

Request:

```http
GET https://www.perplexity.ai/sitemap.xml HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 200
date: Thu, 04 Jun 2026 21:48:46 GMT
content-type: application/xml
content-security-policy: object-src 'none'; base-uri 'self'; form-action 'self' https://onedrive.live.com https://*.sharepoint.com https://*.paypal.com https://*.venmo.com; frame-ancestors 'self' https://onedrive.live.com https://*.sharepoint.com https://app.athina.ai; upgrade-insecure-requests
cross-origin-opener-policy: unsafe-none
cross-origin-resource-policy: same-origin
etag: W/"1aede71d485be6a9b9b23db5c03678a25ecd457c"
origin-agent-cluster: ?1
referrer-policy: strict-origin-when-cross-origin
strict-transport-security: max-age=15552000; includeSubDomains; preload
x-content-type-options: nosniff
x-dns-prefetch-control: off
x-download-options: noopen
x-frame-options: DENY
x-permitted-cross-domain-policies: none
x-xss-protection: 0
set-cookie: [redacted]
cache-control: public, max-age=300
age: 138
expires: Thu, 04 Jun 2026 21:53:46 GMT
cf-cache-status: HIT
content-encoding: gzip
server: cloudflare
cf-ray: a06a24c99ba46a1f-MCI
```

- Status: 200
- Effective URL: https://www.perplexity.ai/sitemap.xml
- Content-Type: application/xml
- Body bytes: 291
- Saved body: sitemap.xml
- Truncated: no

## llms.txt

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output llms.txt --write-out '<curl-metadata>' https://www.perplexity.ai/llms.txt
```

Request:

```http
GET https://www.perplexity.ai/llms.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 403
date: Thu, 04 Jun 2026 21:48:47 GMT
content-type: text/html; charset=UTF-8
accept-ch: Sec-CH-UA-Bitness, Sec-CH-UA-Arch, Sec-CH-UA-Full-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Platform, Sec-CH-UA, UA-Bitness, UA-Arch, UA-Full-Version, UA-Mobile, UA-Model, UA-Platform-Version, UA-Platform, UA
cf-mitigated: challenge
content-security-policy: default-src 'none'; script-src 'nonce-iRCvwt2mW7IvRj49vm3iEe' 'unsafe-eval' https://challenges.cloudflare.com; script-src-attr 'none'; style-src 'unsafe-inline'; img-src 'self' https://challenges.cloudflare.com; connect-src 'self' https://challenges.cloudflare.com; frame-src 'self' https://challenges.cloudflare.com blo ... [truncated]
server: cloudflare
critical-ch: Sec-CH-UA-Bitness, Sec-CH-UA-Arch, Sec-CH-UA-Full-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Platform, Sec-CH-UA, UA-Bitness, UA-Arch, UA-Full-Version, UA-Mobile, UA-Model, UA-Platform-Version, UA-Platform, UA
cross-origin-embedder-policy: require-corp
cross-origin-opener-policy: same-origin
cross-origin-resource-policy: same-origin
origin-agent-cluster: ?1
permissions-policy: accelerometer=(),camera=(),clipboard-read=(),clipboard-write=(),geolocation=(),gyroscope=(),hid=(),magnetometer=(),microphone=(),payment=(),publickey-credentials-get=(),screen-wake-lock=(),serial=(),sync-xhr=(),usb=(),xr-spatial-tracking=*
referrer-policy: same-origin
server-timing: chlray;desc="a06a24ca09b9806e"
x-content-type-options: nosniff
x-frame-options: SAMEORIGIN
strict-transport-security: max-age=15552000; includeSubDomains; preload
set-cookie: [redacted]
content-encoding: gzip
cf-ray: a06a24ca09b9806e-DFW
```

- Status: 403
- Effective URL: https://www.perplexity.ai/llms.txt
- Content-Type: text/html; charset=UTF-8
- Body bytes: 5560
- Saved body: status only
- Truncated: no
