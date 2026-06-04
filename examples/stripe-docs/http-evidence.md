# Stripe Docs HTTP Evidence

**Captured:** 2026-06-04T21:48:12.668Z

This is a GitHub-readable alternative to the raw curl transcript. It puts the
decision-grade evidence first, then hides reproduction commands and header
details behind collapsible sections.

Machine-readable sidecars:

- [http.har.json](./http.har.json)
- [robots.txt.status.json](./robots.txt.status.json)
- [sitemap.xml.status.json](./sitemap.xml.status.json)
- [llms.txt.status.json](./llms.txt.status.json)

## Endpoint Summary

| Endpoint    | Status | Content Type              | Body Bytes | Saved Body                   | Notes                |
| ----------- | -----: | ------------------------- | ---------: | ---------------------------- | -------------------- |
| robots.txt  |    200 | text/plain; charset=utf-8 |        174 | [robots.txt](./robots.txt)   | Artifact body saved. |
| sitemap.xml |    200 | application/xml           |    417,846 | [sitemap.xml](./sitemap.xml) | Artifact body saved. |
| llms.txt    |    200 | text/plain; charset=utf-8 |     93,223 | [llms.txt](./llms.txt)       | Artifact body saved. |

## robots.txt

| Field         | Value                                   |
| ------------- | --------------------------------------- |
| Source URL    | https://docs.stripe.com/robots.txt      |
| Effective URL | https://docs.stripe.com/robots.txt      |
| Status        | 200                                     |
| Content-Type  | text/plain; charset=utf-8               |
| Body bytes    | 174                                     |
| Duration      | 155 ms                                  |
| Saved body    | [robots.txt](./robots.txt)              |
| Raw metadata  | [status JSON](./robots.txt.status.json) |

High-signal response headers:

```http
HTTP/2 200
server: nginx
content-type: text/plain; charset=utf-8
content-encoding: gzip
```

<details>
<summary>Reproduce with curl</summary>

```bash
curl \
  --location \
  --silent \
  --show-error \
  --compressed \
  --max-time 30 \
  --connect-timeout 10 \
  --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' \
  --dump-header '<response-headers>' \
  --output robots.txt \
  --write-out '<curl-metadata>' \
  https://docs.stripe.com/robots.txt
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://docs.stripe.com/robots.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

HTTP/2 200
server: nginx
date: Thu, 04 Jun 2026 21:48:32 GMT
content-type: text/plain; charset=utf-8
strict-transport-security: max-age=63072000; includeSubDomains; preload
content-encoding: gzip
```

</details>

## sitemap.xml

| Field         | Value                                    |
| ------------- | ---------------------------------------- |
| Source URL    | https://docs.stripe.com/sitemap.xml      |
| Effective URL | https://docs.stripe.com/sitemap.xml      |
| Status        | 200                                      |
| Content-Type  | application/xml                          |
| Body bytes    | 417,846                                  |
| Duration      | 499 ms                                   |
| Saved body    | [sitemap.xml](./sitemap.xml)             |
| Raw metadata  | [status JSON](./sitemap.xml.status.json) |

High-signal response headers:

```http
HTTP/2 200
server: nginx
content-type: application/xml
cache-control: public, max-age=0, must-revalidate
content-encoding: gzip
```

<details>
<summary>Reproduce with curl</summary>

```bash
curl \
  --location \
  --silent \
  --show-error \
  --compressed \
  --max-time 30 \
  --connect-timeout 10 \
  --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' \
  --dump-header '<response-headers>' \
  --output sitemap.xml \
  --write-out '<curl-metadata>' \
  https://docs.stripe.com/sitemap.xml
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://docs.stripe.com/sitemap.xml HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

HTTP/2 200
server: nginx
date: Thu, 04 Jun 2026 21:48:33 GMT
content-type: application/xml
cache-control: public, max-age=0, must-revalidate
content-security-policy: base-uri 'none'; child-src 'self'; connect-src https://c.increment.com https://c.stripe.dev https://c.stripe.global https://c.stripe.partners https://edge-api.stripe.com wss://stripe-cli-ws-nw.stripe.com/subscribe/ wss://stripe-cli.stripe.com/subscribe/ wss://stripecli-ws-nw.stripe.com/subscribe/ wss://stripecli.stripe ... [truncated]
content-security-policy-report-only: base-uri 'none'; child-src 'self'; connect-src https://c.increment.com https://c.stripe.dev https://c.stripe.global https://c.stripe.partners https://edge-api.stripe.com wss://stripe-cli-ws-nw.stripe.com/subscribe/ wss://stripe-cli.stripe.com/subscribe/ wss://stripecli-ws-nw.stripe.com/subscribe/ wss://stripecli.stripe ... [truncated]
cross-origin-opener-policy: same-origin-allow-popups; report-to="wsp_coop"
cross-origin-opener-policy-report-only: same-origin-allow-popups; report-to="wsp_coop"
report-to: [redacted]
reporting-endpoints: wsp_coop="https://q.stripe.com/coop-report?s=ef4klYUgYw7iZ62xqSXmiccZc6H_gJ6UgT5J3-1EWWre9NaprVrQ5i-WTt1_LEHffymUN99i", wsp_coep="https://q.stripe.com/coep-report?s=ef4klYUgYw7iZ62xqSXmiccZc6H_gJ6UgT5J3-1EWWre9NaprVrQ5i-WTt1_LEHffymUN99i", csp="https://q.stripe.com/csp-report-v2?q=ef4klYUgYw7iZ62xqSXmiccZc6H_gJ6UgT5J3- ... [truncated]
set-cookie: [redacted]
set-cookie: [redacted]
vary: Accept
x-content-age: 0
x-content-timestamp: 2026-06-04T21:48:33Z
x-frame-options: SAMEORIGIN
x-location: https://docs.stripe.com/sitemap.xml
x-stripe-proxy-response: upstream
x-stripe-server-rpc-duration-micros: 170863
x-wc: 3f7
strict-transport-security: max-age=63072000; includeSubDomains; preload
content-encoding: gzip
```

</details>

## llms.txt

| Field         | Value                                 |
| ------------- | ------------------------------------- |
| Source URL    | https://docs.stripe.com/llms.txt      |
| Effective URL | https://docs.stripe.com/llms.txt      |
| Status        | 200                                   |
| Content-Type  | text/plain; charset=utf-8             |
| Body bytes    | 93,223                                |
| Duration      | 388 ms                                |
| Saved body    | [llms.txt](./llms.txt)                |
| Raw metadata  | [status JSON](./llms.txt.status.json) |

High-signal response headers:

```http
HTTP/2 200
server: nginx
content-type: text/plain; charset=utf-8
x-robots-tag: none
content-encoding: gzip
```

<details>
<summary>Reproduce with curl</summary>

```bash
curl \
  --location \
  --silent \
  --show-error \
  --compressed \
  --max-time 30 \
  --connect-timeout 10 \
  --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' \
  --dump-header '<response-headers>' \
  --output llms.txt \
  --write-out '<curl-metadata>' \
  https://docs.stripe.com/llms.txt
```

</details>

<details>
<summary>Captured request and response</summary>

```http
GET https://docs.stripe.com/llms.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)

HTTP/2 200
server: nginx
date: Thu, 04 Jun 2026 21:48:33 GMT
content-type: text/plain; charset=utf-8
content-security-policy: base-uri 'none'; child-src 'self'; connect-src https://c.increment.com https://c.stripe.dev https://c.stripe.global https://c.stripe.partners https://edge-api.stripe.com wss://stripe-cli-ws-nw.stripe.com/subscribe/ wss://stripe-cli.stripe.com/subscribe/ wss://stripecli-ws-nw.stripe.com/subscribe/ wss://stripecli.stripe ... [truncated]
content-security-policy-report-only: base-uri 'none'; child-src 'self'; connect-src https://c.increment.com https://c.stripe.dev https://c.stripe.global https://c.stripe.partners https://edge-api.stripe.com wss://stripe-cli-ws-nw.stripe.com/subscribe/ wss://stripe-cli.stripe.com/subscribe/ wss://stripecli-ws-nw.stripe.com/subscribe/ wss://stripecli.stripe ... [truncated]
cross-origin-opener-policy: same-origin-allow-popups; report-to="wsp_coop"
cross-origin-opener-policy-report-only: same-origin-allow-popups; report-to="wsp_coop"
report-to: [redacted]
reporting-endpoints: wsp_coop="https://q.stripe.com/coop-report?s=ef4klYUgYw7iZ62xqSXmiccZc6H_gJ6UgT5J3-1EWWre9NaprVrQ5i-WTt1_LEHffymUN99i", wsp_coep="https://q.stripe.com/coep-report?s=ef4klYUgYw7iZ62xqSXmiccZc6H_gJ6UgT5J3-1EWWre9NaprVrQ5i-WTt1_LEHffymUN99i", csp="https://q.stripe.com/csp-report-v2?q=ef4klYUgYw7iZ62xqSXmiccZc6H_gJ6UgT5J3- ... [truncated]
set-cookie: [redacted]
set-cookie: [redacted]
vary: Accept
x-content-age: 0
x-content-timestamp: 2026-06-04T21:48:33Z
x-location: https://docs.stripe.com/llms.txt
x-robots-tag: none
x-stripe-proxy-response: upstream
x-stripe-server-rpc-duration-micros: 25820
x-wc: 3f7
strict-transport-security: max-age=63072000; includeSubDomains; preload
content-encoding: gzip
```

</details>
