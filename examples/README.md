# Example Snapshots

These are small, dated snapshots captured on 2026-06-02. They are examples of audit evidence, not guaranteed-current site state.

| Site       | Files                                                                                                                              |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| OpenAI     | `openai/robots.txt`, `openai/sitemap.xml`, `openai/llms.txt.status`, `openai/dns.txt`, `openai/req-res-headers.txt`                |
| Anthropic  | `anthropic/robots.txt`, `anthropic/sitemap.xml`, `anthropic/llms.txt.status`, `anthropic/dns.txt`, `anthropic/req-res-headers.txt` |
| Google     | `google/robots.txt`, `google/sitemap.xml`, `google/llms.txt.status`, `google/dns.txt`, `google/req-res-headers.txt`                |
| Cloudflare | `cloudflare/robots.txt`, `cloudflare/sitemap.xml`, `cloudflare/llms.txt`, `cloudflare/dns.txt`, `cloudflare/req-res-headers.txt`   |

Use these as examples for an audit fixture set:

```bash
curl -fsS -L https://example.com/robots.txt
curl -fsSI -L https://example.com/robots.txt
dig +short example.com A
```
