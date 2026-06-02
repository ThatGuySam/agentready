# GitHub Docs HTTP Transcript

**Captured:** 2026-06-02T19:28:00.989Z

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
x-github-request-id: F8CC:28E41F:4A9EF6F:4F1062D:6A1F2C45
content-encoding: gzip
accept-ranges: bytes
age: 656
date: Tue, 02 Jun 2026 19:28:21 GMT
via: 1.1 varnish
x-served-by: cache-dfw-kdal2120024-DFW
x-cache: HIT
x-cache-hits: 0
x-timer: S1780428501.479109,VS0,VE1
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
x-github-request-id: EE0E:5762:4C5F4DC:50CAA3B:6A1F2C45
content-encoding: gzip
accept-ranges: bytes
age: 656
date: Tue, 02 Jun 2026 19:28:21 GMT
via: 1.1 varnish
x-served-by: cache-dfw-kdal2120110-DFW
x-cache: HIT
x-cache-hits: 0
x-timer: S1780428502.646858,VS0,VE2
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
x-github-request-id: 1D06:201290:4C5FF0F:50C77D6:6A1F2C45
accept-ranges: none
age: 656
date: Tue, 02 Jun 2026 19:28:21 GMT
via: 1.1 varnish
x-served-by: cache-dfw-kdal2120056-DFW
x-cache: HIT
x-cache-hits: 0
x-timer: S1780428502.831992,VS0,VE2
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
x-github-request-id: ABF0:8C504:4F94E28:53F30A9:6A1F2C45
accept-ranges: none
age: 656
date: Tue, 02 Jun 2026 19:28:21 GMT
via: 1.1 varnish
x-served-by: cache-dfw-kdal2120037-DFW
x-cache: HIT
x-cache-hits: 0
x-timer: S1780428502.923001,VS0,VE1
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
