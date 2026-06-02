# Stripe Docs HTTP Transcript

**Captured:** 2026-06-02T19:28:00.989Z

## robots.txt

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output robots.txt --write-out '<curl-metadata>' https://docs.stripe.com/robots.txt
```

Request:

```http
GET https://docs.stripe.com/robots.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 200
server: nginx
date: Tue, 02 Jun 2026 19:28:22 GMT
content-type: text/plain; charset=utf-8
strict-transport-security: max-age=63072000; includeSubDomains; preload
content-encoding: gzip
```

- Status: 200
- Effective URL: https://docs.stripe.com/robots.txt
- Content-Type: text/plain; charset=utf-8
- Body bytes: 174
- Saved body: robots.txt
- Truncated: no

## sitemap.xml

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output sitemap.xml --write-out '<curl-metadata>' https://docs.stripe.com/sitemap.xml
```

Request:

```http
GET https://docs.stripe.com/sitemap.xml HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 200
server: nginx
date: Tue, 02 Jun 2026 19:28:22 GMT
content-type: application/xml
cache-control: public, max-age=0, must-revalidate
content-security-policy: base-uri 'none'; child-src 'self'; connect-src https://c.increment.com https://c.stripe.dev https://c.stripe.global https://c.stripe.partners https://edge-api.stripe.com wss://stripe-cli-ws-nw.stripe.com/subscribe/ wss://stripe-cli.stripe.com/subscribe/ wss://stripecli-ws-nw.stripe.com/subscribe/ wss://stripecli.stripe ... [truncated]
content-security-policy-report-only: base-uri 'none'; child-src 'self'; connect-src https://c.increment.com https://c.stripe.dev https://c.stripe.global https://c.stripe.partners https://edge-api.stripe.com wss://stripe-cli-ws-nw.stripe.com/subscribe/ wss://stripe-cli.stripe.com/subscribe/ wss://stripecli-ws-nw.stripe.com/subscribe/ wss://stripecli.stripe ... [truncated]
cross-origin-opener-policy: same-origin-allow-popups; report-to="wsp_coop"
cross-origin-opener-policy-report-only: same-origin-allow-popups; report-to="wsp_coop"
report-to: [redacted]
reporting-endpoints: wsp_coop="https://q.stripe.com/coop-report?s=EP2jmYH4MmueOQGR8RYjsX8S80QDqlnseDODJt2R0NUh9ifZAd-T9Ngc0jx92QiA1DX-cSuy", wsp_coep="https://q.stripe.com/coep-report?s=EP2jmYH4MmueOQGR8RYjsX8S80QDqlnseDODJt2R0NUh9ifZAd-T9Ngc0jx92QiA1DX-cSuy", csp="https://q.stripe.com/csp-report-v2?q=EP2jmYH4MmueOQGR8RYjsX8S80QDqlnseDODJt2R0NUh9ifZAd-T9Ngc0jx92QiA1DX-cSuy&t=1"
set-cookie: [redacted]
set-cookie: [redacted]
vary: Accept
x-content-age: 0
x-content-timestamp: 2026-06-02T19:28:22Z
x-frame-options: SAMEORIGIN
x-location: https://docs.stripe.com/sitemap.xml
x-stripe-proxy-response: upstream
x-stripe-server-rpc-duration-micros: 195510
x-wc: 3f7
strict-transport-security: max-age=63072000; includeSubDomains; preload
content-encoding: gzip
```

- Status: 200
- Effective URL: https://docs.stripe.com/sitemap.xml
- Content-Type: application/xml
- Body bytes: 417661
- Saved body: sitemap.xml
- Truncated: no

## llms.txt

```bash
curl --location --silent --show-error --compressed --max-time 30 --connect-timeout 10 --user-agent 'agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)' --dump-header '<response-headers>' --output llms.txt --write-out '<curl-metadata>' https://docs.stripe.com/llms.txt
```

Request:

```http
GET https://docs.stripe.com/llms.txt HTTP
> User-Agent: agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)
```

Response:

```http
HTTP/2 200
server: nginx
date: Tue, 02 Jun 2026 19:28:23 GMT
content-type: text/plain; charset=utf-8
content-security-policy: base-uri 'none'; child-src 'self'; connect-src https://c.increment.com https://c.stripe.dev https://c.stripe.global https://c.stripe.partners https://edge-api.stripe.com wss://stripe-cli-ws-nw.stripe.com/subscribe/ wss://stripe-cli.stripe.com/subscribe/ wss://stripecli-ws-nw.stripe.com/subscribe/ wss://stripecli.stripe ... [truncated]
content-security-policy-report-only: base-uri 'none'; child-src 'self'; connect-src https://c.increment.com https://c.stripe.dev https://c.stripe.global https://c.stripe.partners https://edge-api.stripe.com wss://stripe-cli-ws-nw.stripe.com/subscribe/ wss://stripe-cli.stripe.com/subscribe/ wss://stripecli-ws-nw.stripe.com/subscribe/ wss://stripecli.stripe ... [truncated]
cross-origin-opener-policy: same-origin-allow-popups; report-to="wsp_coop"
cross-origin-opener-policy-report-only: same-origin-allow-popups; report-to="wsp_coop"
report-to: [redacted]
reporting-endpoints: wsp_coop="https://q.stripe.com/coop-report?s=YUpHP-BJ5V-AFABjbirtcIKAJoac2c3bpX4rjuNoa9JtKhYMz5KPloFygbs8hmIMh-ASg5MW", wsp_coep="https://q.stripe.com/coep-report?s=YUpHP-BJ5V-AFABjbirtcIKAJoac2c3bpX4rjuNoa9JtKhYMz5KPloFygbs8hmIMh-ASg5MW", csp="https://q.stripe.com/csp-report-v2?q=YUpHP-BJ5V-AFABjbirtcIKAJoac2c3bpX4rjuNoa9JtKhYMz5KPloFygbs8hmIMh-ASg5MW&t=1"
set-cookie: [redacted]
set-cookie: [redacted]
vary: Accept
x-content-age: 0
x-content-timestamp: 2026-06-02T19:28:23Z
x-location: https://docs.stripe.com/llms.txt
x-robots-tag: none
x-stripe-proxy-response: upstream
x-stripe-server-rpc-duration-micros: 25292
x-wc: 3f7
strict-transport-security: max-age=63072000; includeSubDomains; preload
content-encoding: gzip
```

- Status: 200
- Effective URL: https://docs.stripe.com/llms.txt
- Content-Type: text/plain; charset=utf-8
- Body bytes: 93223
- Saved body: llms.txt
- Truncated: no
