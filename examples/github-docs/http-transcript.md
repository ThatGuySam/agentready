# GitHub Docs HTTP Transcript

**Captured:** 2026-06-04T21:48:12.668Z

## robots.txt

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output robots.txt --write-out '<curl-metadata>' https://docs.github.com/robots.txt
```

Request:

```http
GET https://docs.github.com/robots.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 200
access-control-allow-origin: *
content-security-policy: default-src 'none';prefetch-src 'self';connect-src 'self' https://collector.githubapp.com;font-src 'self' data:;img-src 'self' github.com *.github.com *.githubusercontent.com *.githubassets.com data: placehold.it;object-src 'self';script-src 'self' github.com *.github.com *.githubusercontent.com *.githubassets.com 'sel ... [truncated]
cross-origin-opener-policy: same-origin
cross-origin-resource-policy: same-origin
origin-agent-cluster: ?1
referrer-policy: no-referrer-when-downgrade
x-content-type-options: nosniff
x-dns-prefetch-control: off
x-download-options: noopen
x-frame-options: SAMEORIGIN
x-permitted-cross-domain-policies: none
x-xss-protection: 0
content-type: text/plain; charset=utf-8
cache-control: public, max-age=60
x-github-backend: Kubernetes
x-github-request-id: 113E:80137:13926:15CB4:6A21C167
content-encoding: gzip
accept-ranges: bytes
age: 12600
date: Thu, 04 Jun 2026 21:48:32 GMT
via: 1.1 varnish
x-served-by: cache-dfw-kdal2120027-DFW
x-cache: HIT
x-cache-hits: 0
x-timer: S1780609712.250899,VS0,VE2
vary: Accept-Encoding
strict-transport-security: max-age=31557600
content-length: 33
```

- Status: 200
- Effective URL: https://docs.github.com/robots.txt
- Content-Type: text/plain; charset=utf-8
- Body bytes: 13
- Saved body: robots.txt
- Truncated: no

## sitemap.xml

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output sitemap.xml --write-out '<curl-metadata>' https://docs.github.com/sitemap.xml
```

Request:

```http
GET https://docs.github.com/sitemap.xml HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 404
access-control-allow-origin: *
content-security-policy: default-src 'none';prefetch-src 'self';connect-src 'self' https://collector.githubapp.com;font-src 'self' data:;img-src 'self' github.com *.github.com *.githubusercontent.com *.githubassets.com data: placehold.it;object-src 'self';script-src 'self' github.com *.github.com *.githubusercontent.com *.githubassets.com 'sel ... [truncated]
cross-origin-opener-policy: same-origin
cross-origin-resource-policy: same-origin
origin-agent-cluster: ?1
referrer-policy: no-referrer-when-downgrade
x-content-type-options: nosniff
x-dns-prefetch-control: off
x-download-options: noopen
x-frame-options: SAMEORIGIN
x-permitted-cross-domain-policies: none
x-xss-protection: 0
cache-control: public, max-age=60
content-type: text/html; charset=utf-8
x-github-backend: Kubernetes
x-github-request-id: 7516:A553:168A1C2:185A5C9:6A21F198
content-encoding: gzip
accept-ranges: bytes
age: 263
date: Thu, 04 Jun 2026 21:48:32 GMT
via: 1.1 varnish
x-served-by: cache-dfw-kdal2120112-DFW
x-cache: HIT
x-cache-hits: 0
x-timer: S1780609712.333500,VS0,VE2
vary: Accept-Encoding
strict-transport-security: max-age=31557600
content-length: 316
```

- Status: 404
- Effective URL: https://docs.github.com/sitemap.xml
- Content-Type: text/html; charset=utf-8
- Body bytes: 502
- Saved body: status only
- Truncated: no

## llms.txt

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output llms.txt --write-out '<curl-metadata>' https://docs.github.com/llms.txt
```

Request:

```http
GET https://docs.github.com/llms.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 200
access-control-allow-origin: *
content-security-policy: default-src 'none';prefetch-src 'self';connect-src 'self' https://collector.githubapp.com;font-src 'self' data:;img-src 'self' github.com *.github.com *.githubusercontent.com *.githubassets.com data: placehold.it;object-src 'self';script-src 'self' github.com *.github.com *.githubusercontent.com *.githubassets.com 'sel ... [truncated]
cross-origin-opener-policy: same-origin
cross-origin-resource-policy: same-origin
origin-agent-cluster: ?1
referrer-policy: no-referrer-when-downgrade
x-content-type-options: nosniff
x-dns-prefetch-control: off
x-download-options: noopen
x-frame-options: SAMEORIGIN
x-permitted-cross-domain-policies: none
x-xss-protection: 0
cache-control: public, max-age=60
content-type: text/markdown; charset=utf-8
x-github-backend: Kubernetes
x-github-request-id: 708C:1297E2:C744AE:D7D6C9:6A21EF76
accept-ranges: none
age: 825
date: Thu, 04 Jun 2026 21:48:32 GMT
via: 1.1 varnish
x-served-by: cache-dfw-kdal2120115-DFW
x-cache: HIT
x-cache-hits: 0
x-timer: S1780609712.400107,VS0,VE2
strict-transport-security: max-age=31557600
content-encoding: gzip
vary: accept-encoding
```

- Status: 200
- Effective URL: https://docs.github.com/llms.txt
- Content-Type: text/markdown; charset=utf-8
- Body bytes: 28404
- Saved body: llms.txt
- Truncated: no

## article body API

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output article-body-api.json --write-out '<curl-metadata>' 'https://docs.github.com/api/article/body?pathname=/en/get-started/start-your-journey/about-github-and-git'
```

Request:

```http
GET https://docs.github.com/api/article/body?pathname=/en/get-started/start-your-journey/about-github-and-git HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 200
access-control-allow-origin: *
content-security-policy: default-src 'none';prefetch-src 'self';connect-src 'self' https://collector.githubapp.com;font-src 'self' data:;img-src 'self' github.com *.github.com *.githubusercontent.com *.githubassets.com data: placehold.it;object-src 'self';script-src 'self' github.com *.github.com *.githubusercontent.com *.githubassets.com 'sel ... [truncated]
cross-origin-opener-policy: same-origin
cross-origin-resource-policy: same-origin
origin-agent-cluster: ?1
referrer-policy: no-referrer-when-downgrade
x-content-type-options: nosniff
x-dns-prefetch-control: off
x-download-options: noopen
x-frame-options: SAMEORIGIN
x-permitted-cross-domain-policies: none
x-xss-protection: 0
cache-control: public, max-age=60
content-type: text/markdown; charset=utf-8
x-github-backend: Kubernetes
x-github-request-id: D57E:2235B5:1762520:193020B:6A21F1A5
accept-ranges: none
age: 263
date: Thu, 04 Jun 2026 21:48:32 GMT
via: 1.1 varnish
x-served-by: cache-dfw-kdal2120111-DFW
x-cache: HIT
x-cache-hits: 0
x-timer: S1780609712.474396,VS0,VE1
strict-transport-security: max-age=31557600
content-encoding: gzip
vary: accept-encoding
```

- Status: 200
- Effective URL: https://docs.github.com/api/article/body?pathname=/en/get-started/start-your-journey/about-github-and-git
- Content-Type: text/markdown; charset=utf-8
- Body bytes: 3702
- Saved body: article-body-api.json
- Truncated: no
