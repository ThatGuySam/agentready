export type ScorecardCategory =
  | "Crawl policy"
  | "Discovery"
  | "Agent-readable content"
  | "APIs and auth"
  | "Agent tools"
  | "Commerce";

export interface ScorecardReference {
  label: string;
  url: string;
}

export interface ScorecardItem {
  id: string;
  category: ScorecardCategory;
  check: string;
  scoreLabel: string;
  scoreValue: number;
  appliesTo: string;
  expertRead: string;
  references: ScorecardReference[];
}

export const scorecardItems: ScorecardItem[] = [
  {
    id: "robots-txt",
    category: "Crawl policy",
    check: "robots.txt crawl rules",
    scoreLabel: "9/10",
    scoreValue: 9,
    appliesTo: "Almost every public site",
    expertRead:
      "The highest-confidence baseline. It expresses crawl policy, blocks known paths, and can point agents and search crawlers to the sitemap.",
    references: [
      { label: "RFC 9309", url: "https://www.rfc-editor.org/rfc/rfc9309" },
      {
        label: "OpenAI crawlers",
        url: "https://platform.openai.com/docs/bots",
      },
      {
        label: "Anthropic crawlers",
        url: "https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler",
      },
    ],
  },
  {
    id: "ai-bot-rules",
    category: "Crawl policy",
    check: "AI bot rules in robots.txt",
    scoreLabel: "9/10",
    scoreValue: 9,
    appliesTo: "Public sites with AI crawler policy needs",
    expertRead:
      "Strong practical value because major AI vendors separate search indexing, user-triggered fetches, and training crawlers.",
    references: [
      {
        label: "OpenAI crawler docs",
        url: "https://platform.openai.com/docs/bots",
      },
      {
        label: "Perplexity crawler docs",
        url: "https://docs.perplexity.ai/docs/resources/perplexity-crawlers",
      },
      {
        label: "Anthropic crawler controls",
        url: "https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler",
      },
    ],
  },
  {
    id: "sitemap",
    category: "Discovery",
    check: "sitemap.xml",
    scoreLabel: "8/10",
    scoreValue: 8,
    appliesTo: "Most public sites, especially docs and large sites",
    expertRead:
      "A durable discovery primitive for search engines and agents. It is strongest when linked from robots.txt.",
    references: [
      {
        label: "Sitemaps protocol",
        url: "https://www.sitemaps.org/protocol.html",
      },
      {
        label: "Google sitemap docs",
        url: "https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview",
      },
      {
        label: "Cloudflare Agent Readiness",
        url: "https://blog.cloudflare.com/agent-readiness/",
      },
    ],
  },
  {
    id: "content-signals",
    category: "Crawl policy",
    check: "Content Signals",
    scoreLabel: "7/10",
    scoreValue: 7,
    appliesTo:
      "Sites that want explicit search, AI input, and AI training policy",
    expertRead:
      "Useful as an explicit policy layer, but adoption is still early outside Cloudflare's ecosystem.",
    references: [
      {
        label: "Cloudflare Content Signals",
        url: "https://blog.cloudflare.com/content-signals-policy/",
      },
      {
        label: "Cloudflare Agent Readiness",
        url: "https://blog.cloudflare.com/agent-readiness/",
      },
    ],
  },
  {
    id: "link-headers",
    category: "Discovery",
    check: "Link response headers",
    scoreLabel: "6/10",
    scoreValue: 6,
    appliesTo: "API, docs, and catalog-heavy products",
    expertRead:
      "A useful machine-readable discovery surface for catalogs and metadata, but less important for simple content sites.",
    references: [
      {
        label: "RFC 8288 Web Linking",
        url: "https://www.rfc-editor.org/rfc/rfc8288",
      },
      {
        label: "RFC 9727 API Catalog",
        url: "https://www.rfc-editor.org/rfc/rfc9727.html",
      },
      {
        label: "Cloudflare Agent Readiness",
        url: "https://blog.cloudflare.com/agent-readiness/",
      },
    ],
  },
  {
    id: "llms-txt",
    category: "Agent-readable content",
    check: "llms.txt",
    scoreLabel: "6/10",
    scoreValue: 6,
    appliesTo: "Docs, developer platforms, high-value content hubs",
    expertRead:
      "Good as a curated map for agents. Experts warn not to treat it as a ranking switch or a replacement for crawlable pages.",
    references: [
      { label: "llms.txt proposal", url: "https://llmstxt.org/" },
      {
        label: "Dries Buytaert",
        url: "https://dri.es/markdown-llms-txt-and-ai-crawlers",
      },
      {
        label: "Vercel Agent Readability",
        url: "https://vercel.com/kb/guide/agent-readability-spec",
      },
    ],
  },
  {
    id: "llms-full",
    category: "Agent-readable content",
    check: "llms-full.txt",
    scoreLabel: "5/10",
    scoreValue: 5,
    appliesTo: "Docs and product corpora with a maintained source of truth",
    expertRead:
      "Helpful when generated from the same docs pipeline. Lower value for small sites or stale hand-maintained copies.",
    references: [
      { label: "llms.txt proposal", url: "https://llmstxt.org/" },
      {
        label: "Cloudflare Docs for Agents",
        url: "https://developers.cloudflare.com/docs-for-agents/",
      },
      {
        label: "Cloudflare Markdown for Agents",
        url: "https://developers.cloudflare.com/fundamentals/reference/markdown-for-agents/",
      },
    ],
  },
  {
    id: "markdown-negotiation",
    category: "Agent-readable content",
    check: "Markdown content negotiation",
    scoreLabel: "5/10",
    scoreValue: 5,
    appliesTo: "Documentation sites and durable knowledge bases",
    expertRead:
      "A useful affordance for agent-readable docs, though explicit .md fallbacks may be more discoverable than negotiation alone.",
    references: [
      {
        label: "Cloudflare Markdown for Agents",
        url: "https://developers.cloudflare.com/fundamentals/reference/markdown-for-agents/",
      },
      {
        label: "Vercel Agent Readability",
        url: "https://vercel.com/kb/guide/agent-readability-spec",
      },
      {
        label: "Dries Buytaert",
        url: "https://dri.es/markdown-llms-txt-and-ai-crawlers",
      },
    ],
  },
  {
    id: "web-bot-auth",
    category: "Crawl policy",
    check: "Web Bot Auth",
    scoreLabel: "4/10",
    scoreValue: 4,
    appliesTo: "Sites that need verified bot identity",
    expertRead:
      "Promising, but not yet a must-have for simple content sites. Best for higher-risk traffic policy and bot verification.",
    references: [
      {
        label: "Cloudflare Web Bot Auth",
        url: "https://developers.cloudflare.com/bots/reference/bot-verification/web-bot-auth/",
      },
      {
        label: "Cloudflare Agent Readiness",
        url: "https://blog.cloudflare.com/agent-readiness/",
      },
    ],
  },
  {
    id: "dns-aid",
    category: "Discovery",
    check: "DNS for AI Discovery / DNS-AID",
    scoreLabel: "3/10",
    scoreValue: 3,
    appliesTo: "Early adopters and experimental discovery surfaces",
    expertRead:
      "Interesting but low-adoption. It is not a priority for ordinary public sites.",
    references: [
      {
        label: "Cloudflare Agent Readiness",
        url: "https://blog.cloudflare.com/agent-readiness/",
      },
      {
        label: "Is It Agent Ready llms.txt",
        url: "https://isitagentready.com/llms.txt",
      },
    ],
  },
  {
    id: "api-catalog",
    category: "APIs and auth",
    check: "API Catalog / RFC 9727",
    scoreLabel: "8/10 API products, 2/10 content sites",
    scoreValue: 8,
    appliesTo: "API products with real machine-usable APIs",
    expertRead:
      "Excellent when an API exists. It becomes score gaming when static metadata pretends to expose capabilities that are not there.",
    references: [
      {
        label: "RFC 9727 API Catalog",
        url: "https://www.rfc-editor.org/rfc/rfc9727.html",
      },
      {
        label: "Cloudflare Agent Readiness",
        url: "https://blog.cloudflare.com/agent-readiness/",
      },
    ],
  },
  {
    id: "oidc-discovery",
    category: "APIs and auth",
    check: "OAuth/OIDC discovery",
    scoreLabel: "8/10 apps, 1/10 public sites",
    scoreValue: 8,
    appliesTo: "Authenticated apps and delegated authorization flows",
    expertRead:
      "Valuable when login and authorization are real. Irrelevant for public brochure or content sites.",
    references: [
      {
        label: "OIDC Discovery 1.0",
        url: "https://openid.net/specs/openid-connect-discovery-1_0.html",
      },
      {
        label: "RFC 8414",
        url: "https://www.rfc-editor.org/rfc/rfc8414.html",
      },
      {
        label: "Cloudflare Agent Readiness",
        url: "https://blog.cloudflare.com/agent-readiness/",
      },
    ],
  },
  {
    id: "protected-resource-metadata",
    category: "APIs and auth",
    check: "OAuth Protected Resource Metadata / RFC 9728",
    scoreLabel: "8/10 protected APIs, 1/10 public sites",
    scoreValue: 8,
    appliesTo: "Protected APIs and resources",
    expertRead:
      "Useful for agent access to protected resources. Not applicable when there are no protected resources.",
    references: [
      {
        label: "RFC 9728",
        url: "https://www.rfc-editor.org/rfc/rfc9728.html",
      },
      {
        label: "Cloudflare Agent Readiness",
        url: "https://blog.cloudflare.com/agent-readiness/",
      },
    ],
  },
  {
    id: "auth-md",
    category: "APIs and auth",
    check: "auth.md",
    scoreLabel: "4/10",
    scoreValue: 4,
    appliesTo: "Products with non-obvious auth flows",
    expertRead:
      "Potentially useful as a human and agent-readable guide, but less established than OAuth and OIDC metadata.",
    references: [
      {
        label: "Is It Agent Ready llms.txt",
        url: "https://isitagentready.com/llms.txt",
      },
      {
        label: "Cloudflare Agent Readiness",
        url: "https://blog.cloudflare.com/agent-readiness/",
      },
    ],
  },
  {
    id: "mcp-server-card",
    category: "Agent tools",
    check: "MCP Server Card",
    scoreLabel: "8/10 real MCP, 1/10 otherwise",
    scoreValue: 8,
    appliesTo: "Products with working MCP tools",
    expertRead:
      "Strong discovery metadata for callable tools. Harmful if static metadata implies tools that do not exist.",
    references: [
      {
        label: "Model Context Protocol",
        url: "https://modelcontextprotocol.io/docs/getting-started/intro",
      },
      {
        label: "Cloudflare Agent Readiness",
        url: "https://blog.cloudflare.com/agent-readiness/",
      },
      {
        label: "Simon Willison",
        url: "https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/",
      },
    ],
  },
  {
    id: "a2a-card",
    category: "Agent tools",
    check: "A2A Agent Card",
    scoreLabel: "6/10 agent products, 1/10 websites",
    scoreValue: 6,
    appliesTo: "Agent-to-agent services",
    expertRead:
      "Coherent for agent services. Early and unnecessary for ordinary websites.",
    references: [
      {
        label: "A2A specification",
        url: "https://github.com/a2aproject/A2A/blob/main/docs/specification.md",
      },
      {
        label: "Cloudflare Agent Readiness",
        url: "https://blog.cloudflare.com/agent-readiness/",
      },
    ],
  },
  {
    id: "agent-skills-index",
    category: "Agent tools",
    check: "Agent Skills index",
    scoreLabel: "7/10 docs/tools, 2/10 content sites",
    scoreValue: 7,
    appliesTo: "Docs, tools, procedures, and workflows",
    expertRead:
      "Useful when agents need task-specific procedures. Weaker for plain pages.",
    references: [
      {
        label: "Is It Agent Ready skills index",
        url: "https://isitagentready.com/.well-known/agent-skills/index.json",
      },
      {
        label: "Cloudflare Agent Readiness",
        url: "https://blog.cloudflare.com/agent-readiness/",
      },
    ],
  },
  {
    id: "webmcp",
    category: "Agent tools",
    check: "WebMCP",
    scoreLabel: "4/10",
    scoreValue: 4,
    appliesTo: "Browser/tool surfaces with a direct use case",
    expertRead:
      "Interesting but early. It is not a general readiness requirement.",
    references: [
      {
        label: "Is It Agent Ready llms.txt",
        url: "https://isitagentready.com/llms.txt",
      },
      {
        label: "Cloudflare Agent Readiness",
        url: "https://blog.cloudflare.com/agent-readiness/",
      },
    ],
  },
  {
    id: "ucp",
    category: "Commerce",
    check: "Universal Commerce Protocol / UCP",
    scoreLabel: "5/10 commerce, 1/10 otherwise",
    scoreValue: 5,
    appliesTo: "Agent commerce flows",
    expertRead:
      "Relevant when agents need to discover or transact through commerce flows. Not a general site-readiness fix.",
    references: [
      {
        label: "Is It Agent Ready llms.txt",
        url: "https://isitagentready.com/llms.txt",
      },
      {
        label: "Cloudflare Agent Readiness",
        url: "https://blog.cloudflare.com/agent-readiness/",
      },
    ],
  },
  {
    id: "x402",
    category: "Commerce",
    check: "x402 payment protocol",
    scoreLabel: "6/10 paid access, 1/10 otherwise",
    scoreValue: 6,
    appliesTo: "Paid API or content access",
    expertRead:
      "Useful for agent-paid access patterns, but niche for most public sites.",
    references: [
      { label: "x402", url: "https://www.x402.org/" },
      {
        label: "Is It Agent Ready llms.txt",
        url: "https://isitagentready.com/llms.txt",
      },
      {
        label: "Cloudflare Agent Readiness",
        url: "https://blog.cloudflare.com/agent-readiness/",
      },
    ],
  },
  {
    id: "mpp",
    category: "Commerce",
    check: "MPP payment discovery",
    scoreLabel: "4/10 commerce, 1/10 otherwise",
    scoreValue: 4,
    appliesTo: "Commerce and API monetization",
    expertRead:
      "Early payment discovery surface. Apply only with a real monetized machine-access flow.",
    references: [
      {
        label: "Is It Agent Ready llms.txt",
        url: "https://isitagentready.com/llms.txt",
      },
      {
        label: "Cloudflare Agent Readiness",
        url: "https://blog.cloudflare.com/agent-readiness/",
      },
    ],
  },
  {
    id: "acp",
    category: "Commerce",
    check: "ACP",
    scoreLabel: "4/10 commerce, 1/10 otherwise",
    scoreValue: 4,
    appliesTo: "Agent transaction ecosystems",
    expertRead:
      "Early and commerce-specific. It should not be treated as a general readiness requirement.",
    references: [
      {
        label: "Is It Agent Ready llms.txt",
        url: "https://isitagentready.com/llms.txt",
      },
      {
        label: "Cloudflare Agent Readiness",
        url: "https://blog.cloudflare.com/agent-readiness/",
      },
    ],
  },
];

export const scoreBands = [
  {
    label: "9-10",
    title: "Universal baseline",
    description: "Worth doing for almost every public site.",
  },
  {
    label: "7-8",
    title: "Strong when applicable",
    description: "High value for docs, APIs, auth, or real tools.",
  },
  {
    label: "5-6",
    title: "Useful affordance",
    description: "Helpful, but site-type dependent or still unevenly adopted.",
  },
  {
    label: "1-4",
    title: "Early or niche",
    description: "Do only when the use case is real.",
  },
];

export const sourceLinks: ScorecardReference[] = [
  { label: "Is It Agent Ready", url: "https://isitagentready.com/" },
  {
    label: "Cloudflare Agent Readiness",
    url: "https://blog.cloudflare.com/agent-readiness/",
  },
  {
    label: "Vercel Agent Readability",
    url: "https://vercel.com/kb/guide/agent-readability-spec",
  },
  {
    label: "Agent-Friendly Documentation Spec",
    url: "https://agentdocsspec.com/",
  },
  {
    label: "Google AI features",
    url: "https://developers.google.com/search/docs/appearance/ai-features",
  },
  {
    label: "OpenAI crawler docs",
    url: "https://platform.openai.com/docs/bots",
  },
  {
    label: "Anthropic crawler controls",
    url: "https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler",
  },
  {
    label: "Perplexity crawlers",
    url: "https://docs.perplexity.ai/docs/resources/perplexity-crawlers",
  },
  {
    label: "Dries Buytaert on llms.txt",
    url: "https://dri.es/markdown-llms-txt-and-ai-crawlers",
  },
  {
    label: "Simon Willison on tool risk",
    url: "https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/",
  },
];
