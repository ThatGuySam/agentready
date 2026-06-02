import { execFile } from "node:child_process";
import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join, relative } from "node:path";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

const repoRoot = new URL("../", import.meta.url).pathname;
const examplesRoot = join(repoRoot, "examples");
const capturedAt = new Date().toISOString();
const userAgent =
  "agentready-example-capture/1.0 (+https://github.com/ThatGuySam/agentready)";

type DnsRecordType = "A" | "AAAA" | "CNAME" | "HTTPS" | "TXT";

type Endpoint = {
  key: string;
  label: string;
  url: string;
  output: string;
  headers?: Record<string, string>;
  maxBytes?: number;
  saveHtml?: boolean;
  notes?: string;
};

type Site = {
  slug: string;
  name: string;
  category: "positive" | "contrast" | "redirect-trap";
  homepage: string;
  host: string;
  notes: string;
  endpoints: Endpoint[];
};

type HeaderPair = {
  name: string;
  value: string;
};

type CaptureRecord = {
  key: string;
  label: string;
  url: string;
  output: string;
  outputFile: string | null;
  statusFile: string;
  startedAt: string;
  status: number | null;
  effectiveUrl: string | null;
  contentType: string | null;
  bodyBytes: number;
  savedBytes: number;
  truncated: boolean;
  responseHeaders: HeaderPair[];
  responseStatusLine: string | null;
  requestHeaders: HeaderPair[];
  durationMs: number | null;
  curlExitCode: number;
  curlStderr: string;
  command: string;
  notes?: string;
};

type DnsRecord = {
  type: DnsRecordType;
  values: string[];
};

const defaultMaxBytes = 1_000_000;
const sampleMaxBytes = 250_000;

const commonAgentPaths = {
  agentSkills: ".well-known/agent-skills/index.json",
  llms: "llms.txt",
  llmsFullSample: "llms-full.sample.txt",
  robots: "robots.txt",
  sitemap: "sitemap.xml",
} as const;

const sites: Site[] = [
  {
    slug: "cloudflare-developers",
    name: "Cloudflare Developers",
    category: "positive",
    homepage: "https://developers.cloudflare.com/",
    host: "developers.cloudflare.com",
    notes:
      "Gold-standard docs fixture with robots Content Signals, llms files, agent skills JSON, and Markdown negotiation.",
    endpoints: [
      endpoint(
        "robots",
        "robots.txt",
        "https://developers.cloudflare.com/robots.txt",
        commonAgentPaths.robots,
      ),
      endpoint(
        "sitemap",
        "sitemap.xml",
        "https://developers.cloudflare.com/sitemap.xml",
        commonAgentPaths.sitemap,
      ),
      endpoint(
        "llms",
        "llms.txt",
        "https://developers.cloudflare.com/llms.txt",
        commonAgentPaths.llms,
      ),
      endpoint(
        "llms-full",
        "llms-full.txt",
        "https://developers.cloudflare.com/llms-full.txt",
        commonAgentPaths.llmsFullSample,
        { maxBytes: sampleMaxBytes },
      ),
      endpoint(
        "agent-skills",
        "agent skills index",
        "https://developers.cloudflare.com/.well-known/agent-skills/index.json",
        commonAgentPaths.agentSkills,
      ),
      endpoint(
        "markdown-for-agents",
        "Markdown for Agents page",
        "https://developers.cloudflare.com/fundamentals/reference/markdown-for-agents/",
        "markdown-for-agents.md.txt",
        {
          headers: { Accept: "text/markdown" },
          notes:
            "Uses content negotiation to request Markdown instead of HTML.",
        },
      ),
    ],
  },
  {
    slug: "perplexity-docs",
    name: "Perplexity Docs",
    category: "positive",
    homepage: "https://docs.perplexity.ai/",
    host: "docs.perplexity.ai",
    notes:
      "AI-search docs fixture with crawler docs, llms files, and agent skills JSON.",
    endpoints: [
      endpoint(
        "robots",
        "robots.txt",
        "https://docs.perplexity.ai/robots.txt",
        commonAgentPaths.robots,
      ),
      endpoint(
        "sitemap",
        "sitemap.xml",
        "https://docs.perplexity.ai/sitemap.xml",
        commonAgentPaths.sitemap,
      ),
      endpoint(
        "llms",
        "llms.txt",
        "https://docs.perplexity.ai/llms.txt",
        commonAgentPaths.llms,
      ),
      endpoint(
        "llms-full",
        "llms-full.txt",
        "https://docs.perplexity.ai/llms-full.txt",
        commonAgentPaths.llmsFullSample,
        { maxBytes: sampleMaxBytes },
      ),
      endpoint(
        "agent-skills",
        "agent skills index",
        "https://docs.perplexity.ai/.well-known/agent-skills/index.json",
        commonAgentPaths.agentSkills,
      ),
      endpoint(
        "crawler-docs",
        "crawler docs page",
        "https://docs.perplexity.ai/docs/resources/perplexity-crawlers",
        "perplexity-crawlers.sample.html.txt",
        { maxBytes: sampleMaxBytes, saveHtml: true },
      ),
    ],
  },
  {
    slug: "model-context-protocol",
    name: "Model Context Protocol",
    category: "positive",
    homepage: "https://modelcontextprotocol.io/",
    host: "modelcontextprotocol.io",
    notes: "Protocol/tooling fixture for agent-facing capability discovery.",
    endpoints: [
      endpoint(
        "robots",
        "robots.txt",
        "https://modelcontextprotocol.io/robots.txt",
        commonAgentPaths.robots,
      ),
      endpoint(
        "sitemap",
        "sitemap.xml",
        "https://modelcontextprotocol.io/sitemap.xml",
        commonAgentPaths.sitemap,
      ),
      endpoint(
        "llms",
        "llms.txt",
        "https://modelcontextprotocol.io/llms.txt",
        commonAgentPaths.llms,
      ),
      endpoint(
        "llms-full",
        "llms-full.txt",
        "https://modelcontextprotocol.io/llms-full.txt",
        commonAgentPaths.llmsFullSample,
        { maxBytes: sampleMaxBytes },
      ),
      endpoint(
        "agent-skills",
        "agent skills index",
        "https://modelcontextprotocol.io/.well-known/agent-skills/index.json",
        commonAgentPaths.agentSkills,
      ),
    ],
  },
  {
    slug: "claude-platform",
    name: "Claude Platform",
    category: "positive",
    homepage: "https://platform.claude.com/",
    host: "platform.claude.com",
    notes:
      "Anthropic's platform docs expose crawl, sitemap, llms, and full-doc artifacts.",
    endpoints: [
      endpoint(
        "robots",
        "robots.txt",
        "https://platform.claude.com/robots.txt",
        commonAgentPaths.robots,
      ),
      endpoint(
        "sitemap",
        "sitemap.xml",
        "https://platform.claude.com/sitemap.xml",
        commonAgentPaths.sitemap,
      ),
      endpoint(
        "llms",
        "llms.txt",
        "https://platform.claude.com/llms.txt",
        commonAgentPaths.llms,
      ),
      endpoint(
        "llms-full",
        "llms-full.txt",
        "https://platform.claude.com/llms-full.txt",
        commonAgentPaths.llmsFullSample,
        { maxBytes: sampleMaxBytes },
      ),
    ],
  },
  {
    slug: "vercel",
    name: "Vercel",
    category: "positive",
    homepage: "https://vercel.com/",
    host: "vercel.com",
    notes:
      "Agent-readability fixture with root llms.txt, docs full bundle, and agent resources.",
    endpoints: [
      endpoint(
        "robots",
        "docs robots",
        "https://vercel.com/docs/robots.txt",
        commonAgentPaths.robots,
      ),
      endpoint(
        "sitemap",
        "sitemap.xml",
        "https://vercel.com/sitemap.xml",
        commonAgentPaths.sitemap,
      ),
      endpoint(
        "llms",
        "llms.txt",
        "https://vercel.com/llms.txt",
        commonAgentPaths.llms,
      ),
      endpoint(
        "llms-full",
        "docs llms-full.txt",
        "https://vercel.com/docs/llms-full.txt",
        commonAgentPaths.llmsFullSample,
        { maxBytes: sampleMaxBytes },
      ),
      endpoint(
        "agent-resources",
        "agent resources page",
        "https://vercel.com/docs/agent-resources",
        "agent-resources.md.txt",
        { maxBytes: sampleMaxBytes, saveHtml: true },
      ),
      endpoint(
        "agent-readability-spec",
        "Agent Readability Spec",
        "https://vercel.com/kb/guide/agent-readability-spec",
        "agent-readability-spec.sample.html.txt",
        { maxBytes: sampleMaxBytes, saveHtml: true },
      ),
    ],
  },
  {
    slug: "openai-api-docs",
    name: "OpenAI API Docs",
    category: "positive",
    homepage: "https://developers.openai.com/api/docs/",
    host: "developers.openai.com",
    notes:
      "OpenAI API docs expose llms artifacts even though the checked docs path lacks robots and sitemap files.",
    endpoints: [
      endpoint(
        "robots",
        "docs robots.txt",
        "https://developers.openai.com/api/docs/robots.txt",
        commonAgentPaths.robots,
      ),
      endpoint(
        "sitemap",
        "docs sitemap.xml",
        "https://developers.openai.com/api/docs/sitemap.xml",
        commonAgentPaths.sitemap,
      ),
      endpoint(
        "llms",
        "llms.txt",
        "https://developers.openai.com/api/docs/llms.txt",
        commonAgentPaths.llms,
      ),
      endpoint(
        "llms-full",
        "llms-full.txt",
        "https://developers.openai.com/api/docs/llms-full.txt",
        commonAgentPaths.llmsFullSample,
        { maxBytes: sampleMaxBytes },
      ),
    ],
  },
  {
    slug: "github-docs",
    name: "GitHub Docs",
    category: "positive",
    homepage: "https://docs.github.com/",
    host: "docs.github.com",
    notes: "Docs fixture with llms.txt and API-shaped article body access.",
    endpoints: [
      endpoint(
        "robots",
        "robots.txt",
        "https://docs.github.com/robots.txt",
        commonAgentPaths.robots,
      ),
      endpoint(
        "sitemap",
        "sitemap.xml",
        "https://docs.github.com/sitemap.xml",
        commonAgentPaths.sitemap,
      ),
      endpoint(
        "llms",
        "llms.txt",
        "https://docs.github.com/llms.txt",
        commonAgentPaths.llms,
      ),
      endpoint(
        "article-body-api",
        "article body API",
        "https://docs.github.com/api/article/body?pathname=/en/get-started/start-your-journey/about-github-and-git",
        "article-body-api.json",
      ),
    ],
  },
  {
    slug: "stripe-docs",
    name: "Stripe Docs",
    category: "positive",
    homepage: "https://docs.stripe.com/",
    host: "docs.stripe.com",
    notes:
      "Conventional API-docs fixture with crawl files, sitemap, and llms.txt.",
    endpoints: [
      endpoint(
        "robots",
        "robots.txt",
        "https://docs.stripe.com/robots.txt",
        commonAgentPaths.robots,
      ),
      endpoint(
        "sitemap",
        "sitemap.xml",
        "https://docs.stripe.com/sitemap.xml",
        commonAgentPaths.sitemap,
      ),
      endpoint(
        "llms",
        "llms.txt",
        "https://docs.stripe.com/llms.txt",
        commonAgentPaths.llms,
      ),
    ],
  },
  {
    slug: "langchain-docs",
    name: "LangChain Docs",
    category: "positive",
    homepage: "https://docs.langchain.com/",
    host: "docs.langchain.com",
    notes:
      "Agent-framework docs fixture with llms files and agent skills JSON.",
    endpoints: [
      endpoint(
        "robots",
        "robots.txt",
        "https://docs.langchain.com/robots.txt",
        commonAgentPaths.robots,
      ),
      endpoint(
        "sitemap",
        "sitemap.xml",
        "https://docs.langchain.com/sitemap.xml",
        commonAgentPaths.sitemap,
      ),
      endpoint(
        "llms",
        "llms.txt",
        "https://docs.langchain.com/llms.txt",
        commonAgentPaths.llms,
      ),
      endpoint(
        "llms-full",
        "llms-full.txt",
        "https://docs.langchain.com/llms-full.txt",
        commonAgentPaths.llmsFullSample,
        { maxBytes: sampleMaxBytes },
      ),
      endpoint(
        "agent-skills",
        "agent skills index",
        "https://docs.langchain.com/.well-known/agent-skills/index.json",
        commonAgentPaths.agentSkills,
      ),
    ],
  },
  {
    slug: "cloudflare-root",
    name: "Cloudflare Root",
    category: "contrast",
    homepage: "https://www.cloudflare.com/",
    host: "www.cloudflare.com",
    notes:
      "Root-domain contrast for Cloudflare's marketing and product surface.",
    endpoints: [
      endpoint(
        "robots",
        "robots.txt",
        "https://www.cloudflare.com/robots.txt",
        commonAgentPaths.robots,
      ),
      endpoint(
        "sitemap",
        "sitemap.xml",
        "https://www.cloudflare.com/sitemap.xml",
        commonAgentPaths.sitemap,
      ),
      endpoint(
        "llms",
        "llms.txt",
        "https://www.cloudflare.com/llms.txt",
        commonAgentPaths.llms,
      ),
      endpoint(
        "llms-full",
        "llms-full.txt",
        "https://www.cloudflare.com/llms-full.txt",
        commonAgentPaths.llmsFullSample,
        { maxBytes: sampleMaxBytes },
      ),
    ],
  },
  {
    slug: "google-developers",
    name: "Google Developers",
    category: "contrast",
    homepage: "https://developers.google.com/",
    host: "developers.google.com",
    notes:
      "Large traditional docs surface with robots and sitemap but no checked llms.txt.",
    endpoints: [
      endpoint(
        "robots",
        "robots.txt",
        "https://developers.google.com/robots.txt",
        commonAgentPaths.robots,
      ),
      endpoint(
        "sitemap",
        "sitemap.xml",
        "https://developers.google.com/sitemap.xml",
        commonAgentPaths.sitemap,
      ),
      endpoint(
        "llms",
        "llms.txt",
        "https://developers.google.com/llms.txt",
        commonAgentPaths.llms,
      ),
    ],
  },
  {
    slug: "google-ai",
    name: "Google AI",
    category: "contrast",
    homepage: "https://ai.google.dev/",
    host: "ai.google.dev",
    notes:
      "Google AI docs contrast fixture with traditional crawl files but no checked llms.txt.",
    endpoints: [
      endpoint(
        "robots",
        "robots.txt",
        "https://ai.google.dev/robots.txt",
        commonAgentPaths.robots,
      ),
      endpoint(
        "sitemap",
        "sitemap.xml",
        "https://ai.google.dev/sitemap.xml",
        commonAgentPaths.sitemap,
      ),
      endpoint(
        "llms",
        "llms.txt",
        "https://ai.google.dev/llms.txt",
        commonAgentPaths.llms,
      ),
    ],
  },
  {
    slug: "openai-root",
    name: "OpenAI Root",
    category: "contrast",
    homepage: "https://openai.com/",
    host: "openai.com",
    notes:
      "Corporate-root contrast: crawl files are present while root llms.txt was blocked during checks.",
    endpoints: [
      endpoint(
        "robots",
        "robots.txt",
        "https://openai.com/robots.txt",
        commonAgentPaths.robots,
      ),
      endpoint(
        "sitemap",
        "sitemap.xml",
        "https://openai.com/sitemap.xml",
        commonAgentPaths.sitemap,
      ),
      endpoint(
        "llms",
        "llms.txt",
        "https://openai.com/llms.txt",
        commonAgentPaths.llms,
      ),
    ],
  },
  {
    slug: "anthropic-root",
    name: "Anthropic Root",
    category: "contrast",
    homepage: "https://www.anthropic.com/",
    host: "www.anthropic.com",
    notes:
      "Corporate-root contrast for Anthropic's marketing site versus Claude Platform docs.",
    endpoints: [
      endpoint(
        "robots",
        "robots.txt",
        "https://www.anthropic.com/robots.txt",
        commonAgentPaths.robots,
      ),
      endpoint(
        "sitemap",
        "sitemap.xml",
        "https://www.anthropic.com/sitemap.xml",
        commonAgentPaths.sitemap,
      ),
      endpoint(
        "llms",
        "llms.txt",
        "https://www.anthropic.com/llms.txt",
        commonAgentPaths.llms,
      ),
    ],
  },
  {
    slug: "perplexity-root",
    name: "Perplexity Root",
    category: "contrast",
    homepage: "https://www.perplexity.ai/",
    host: "www.perplexity.ai",
    notes:
      "Corporate-root contrast for Perplexity's product site versus Perplexity Docs.",
    endpoints: [
      endpoint(
        "robots",
        "robots.txt",
        "https://www.perplexity.ai/robots.txt",
        commonAgentPaths.robots,
      ),
      endpoint(
        "sitemap",
        "sitemap.xml",
        "https://www.perplexity.ai/sitemap.xml",
        commonAgentPaths.sitemap,
      ),
      endpoint(
        "llms",
        "llms.txt",
        "https://www.perplexity.ai/llms.txt",
        commonAgentPaths.llms,
      ),
    ],
  },
  {
    slug: "supabase-docs",
    name: "Supabase Docs",
    category: "contrast",
    homepage: "https://supabase.com/docs",
    host: "supabase.com",
    notes:
      "Non-AI developer-platform contrast with crawl and sitemap basics but no checked docs llms.txt.",
    endpoints: [
      endpoint(
        "robots",
        "docs robots.txt",
        "https://supabase.com/docs/robots.txt",
        commonAgentPaths.robots,
      ),
      endpoint(
        "sitemap",
        "docs sitemap.xml",
        "https://supabase.com/docs/sitemap.xml",
        commonAgentPaths.sitemap,
      ),
      endpoint(
        "llms",
        "docs llms.txt",
        "https://supabase.com/docs/llms.txt",
        commonAgentPaths.llms,
      ),
    ],
  },
  {
    slug: "llamaindex-docs",
    name: "LlamaIndex Docs",
    category: "redirect-trap",
    homepage: "https://docs.llamaindex.ai/",
    host: "docs.llamaindex.ai",
    notes:
      "Redirect-trap fixture: checked agent paths can return HTML instead of clean artifact files.",
    endpoints: [
      endpoint(
        "robots",
        "robots.txt",
        "https://docs.llamaindex.ai/robots.txt",
        commonAgentPaths.robots,
      ),
      endpoint(
        "sitemap",
        "sitemap.xml",
        "https://docs.llamaindex.ai/sitemap.xml",
        commonAgentPaths.sitemap,
      ),
      endpoint(
        "llms",
        "llms.txt",
        "https://docs.llamaindex.ai/llms.txt",
        commonAgentPaths.llms,
      ),
    ],
  },
  {
    slug: "cursor-docs",
    name: "Cursor Docs",
    category: "redirect-trap",
    homepage: "https://docs.cursor.com/",
    host: "docs.cursor.com",
    notes:
      "Redirect-trap fixture: checked agent paths can return HTML instead of clean artifact files.",
    endpoints: [
      endpoint(
        "robots",
        "robots.txt",
        "https://docs.cursor.com/robots.txt",
        commonAgentPaths.robots,
      ),
      endpoint(
        "sitemap",
        "sitemap.xml",
        "https://docs.cursor.com/sitemap.xml",
        commonAgentPaths.sitemap,
      ),
      endpoint(
        "llms",
        "llms.txt",
        "https://docs.cursor.com/llms.txt",
        commonAgentPaths.llms,
      ),
    ],
  },
];

const legacySlugs = ["anthropic", "cloudflare", "google", "openai"];

function endpoint(
  key: string,
  label: string,
  url: string,
  output: string,
  options: Pick<Endpoint, "headers" | "maxBytes" | "notes" | "saveHtml"> = {},
): Endpoint {
  return {
    key,
    label,
    url,
    output,
    ...options,
  };
}

async function main() {
  await mkdir(examplesRoot, { recursive: true });

  for (const slug of legacySlugs) {
    await rm(join(examplesRoot, slug), { force: true, recursive: true });
  }

  const siteSummaries = [];

  for (const site of sites) {
    const siteDir = join(examplesRoot, site.slug);
    await rm(siteDir, { force: true, recursive: true });
    await mkdir(siteDir, { recursive: true });

    console.log(`Capturing ${site.name}...`);
    const dnsRecords = await captureDns(site.host);
    const records: CaptureRecord[] = [];

    for (const siteEndpoint of site.endpoints) {
      records.push(await captureEndpoint(siteDir, siteEndpoint));
    }

    await writeDnsFiles(siteDir, site.host, dnsRecords);
    await writeSiteReadme(siteDir, site, dnsRecords, records);
    await writeJson(join(siteDir, "metadata.json"), {
      capturedAt,
      site,
      dnsRecords,
      endpoints: records,
    });
    await writeJson(join(siteDir, "http.har.json"), toHar(site, records));
    await writeHttpTranscript(siteDir, site, records);

    siteSummaries.push({
      slug: site.slug,
      name: site.name,
      category: site.category,
      homepage: site.homepage,
      host: site.host,
      notes: site.notes,
      directory: `examples/${site.slug}/`,
      endpoints: records.map((record) => ({
        key: record.key,
        label: record.label,
        url: record.url,
        status: record.status,
        effectiveUrl: record.effectiveUrl,
        contentType: record.contentType,
        outputFile: record.outputFile,
        statusFile: record.statusFile,
        truncated: record.truncated,
      })),
    });
  }

  await writeJson(join(examplesRoot, "manifest.json"), {
    capturedAt,
    generatedBy: "scripts/capture-agentready-examples.ts",
    sites: siteSummaries,
  });
  await writeExamplesReadme(siteSummaries);

  console.log(
    `Captured ${sites.length} sites into ${relative(repoRoot, examplesRoot)}/`,
  );
}

async function captureEndpoint(
  siteDir: string,
  siteEndpoint: Endpoint,
): Promise<CaptureRecord> {
  const tmpRoot = await mkdtemp(join(tmpdir(), "agentready-curl-"));
  const headersPath = join(tmpRoot, "headers.txt");
  const bodyPath = join(tmpRoot, "body.bin");
  const startedAt = new Date().toISOString();
  const requestHeaders = [
    { name: "User-Agent", value: userAgent },
    ...Object.entries(siteEndpoint.headers ?? {}).map(([name, value]) => ({
      name,
      value,
    })),
  ];
  const writeOutFormat =
    "AGENTREADY_META\t%{http_code}\t%{url_effective}\t%{content_type}\t%{size_download}\t%{time_total}\n";
  const curlArgs = [
    "--location",
    "--silent",
    "--show-error",
    "--compressed",
    "--max-time",
    "30",
    "--connect-timeout",
    "10",
    "--user-agent",
    userAgent,
    "--dump-header",
    headersPath,
    "--output",
    bodyPath,
    "--write-out",
    writeOutFormat,
  ];

  for (const [name, value] of Object.entries(siteEndpoint.headers ?? {})) {
    curlArgs.push("--header", `${name}: ${value}`);
  }

  curlArgs.push(siteEndpoint.url);

  const command = shellQuote([
    "curl",
    ...curlArgs.map((arg) => {
      if (arg === headersPath) {
        return "<response-headers>";
      }

      if (arg === bodyPath) {
        return siteEndpoint.output;
      }

      if (arg === writeOutFormat) {
        return "<curl-metadata>";
      }

      return arg;
    }),
  ]);
  const result = await execFileCapture("curl", curlArgs);
  const rawHeaders = await readTextIfExists(headersPath);
  const body = await readBufferIfExists(bodyPath);
  const parsedHeaders = parseHeaders(rawHeaders);
  const meta = parseCurlMeta(result.stdout);
  const status = meta.status;
  const contentType = meta.contentType;
  const shouldWriteBody = shouldSaveBody(status, contentType, siteEndpoint);
  const maxBytes = siteEndpoint.maxBytes ?? defaultMaxBytes;
  const truncated = body.byteLength > maxBytes;
  const outputFile = shouldWriteBody ? siteEndpoint.output : null;
  const savedBytes = outputFile
    ? await writeBodySample(join(siteDir, outputFile), body, maxBytes)
    : 0;
  const statusFile = `${siteEndpoint.output}.status.json`;

  const record: CaptureRecord = {
    key: siteEndpoint.key,
    label: siteEndpoint.label,
    url: siteEndpoint.url,
    output: siteEndpoint.output,
    outputFile,
    statusFile,
    startedAt,
    status,
    effectiveUrl: meta.effectiveUrl,
    contentType,
    bodyBytes: body.byteLength,
    savedBytes,
    truncated,
    responseHeaders: parsedHeaders.headers,
    responseStatusLine: parsedHeaders.statusLine,
    requestHeaders,
    durationMs:
      meta.timeTotalSeconds === null ? null : meta.timeTotalSeconds * 1000,
    curlExitCode: result.exitCode,
    curlStderr: result.stderr.trim(),
    command,
    notes: siteEndpoint.notes,
  };

  await writeJson(join(siteDir, statusFile), record);
  await rm(tmpRoot, { force: true, recursive: true });

  return record;
}

function shouldSaveBody(
  status: number | null,
  contentType: string | null,
  siteEndpoint: Endpoint,
) {
  if (status === null || status < 200 || status >= 300) {
    return false;
  }

  if (contentType?.toLowerCase().includes("text/html")) {
    return siteEndpoint.saveHtml === true;
  }

  return true;
}

async function captureDns(host: string): Promise<DnsRecord[]> {
  const types: DnsRecordType[] = ["A", "AAAA", "CNAME", "HTTPS", "TXT"];
  const records: DnsRecord[] = [];

  for (const type of types) {
    const result = await execFileCapture("dig", ["+short", host, type]);
    const values = result.stdout
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean);

    records.push({ type, values });
  }

  return records;
}

async function writeDnsFiles(
  siteDir: string,
  host: string,
  records: DnsRecord[],
) {
  const lines = [
    `# Captured ${capturedAt}`,
    `# Host: ${host}`,
    "",
    ...records.flatMap((record) => [
      `$ dig +short ${host} ${record.type}`,
      ...(record.values.length > 0 ? record.values : ["# no records returned"]),
      "",
    ]),
  ];

  await writeFile(join(siteDir, "dns.txt"), `${lines.join("\n").trimEnd()}\n`);
  await writeJson(join(siteDir, "dns.json"), {
    capturedAt,
    host,
    records,
  });
}

async function writeSiteReadme(
  siteDir: string,
  site: Site,
  dnsRecords: DnsRecord[],
  records: CaptureRecord[],
) {
  const endpointRows = records
    .map((record) => {
      const status =
        record.status === null
          ? `curl ${record.curlExitCode}`
          : `${record.status}`;
      const output = record.outputFile
        ? `[${record.outputFile}](./${record.outputFile})`
        : "status only";
      const truncated = record.truncated ? "yes" : "no";

      return `| ${record.label} | [URL](${record.url}) | ${status} | ${record.contentType ?? ""} | ${output} | ${truncated} |`;
    })
    .join("\n");

  const dnsSummary = dnsRecords
    .map((record) => `- \`${record.type}\`: ${record.values.length} record(s)`)
    .join("\n");

  await writeFile(
    join(siteDir, "README.md"),
    `# ${site.name}

**Captured:** ${capturedAt}

**Homepage:** [${site.homepage}](${site.homepage})

**Category:** ${site.category}

${site.notes}

## Files

- [metadata.json](./metadata.json) - full machine-readable capture metadata.
- [dns.txt](./dns.txt) and [dns.json](./dns.json) - DNS records for \`${site.host}\`.
- [http-transcript.md](./http-transcript.md) - readable curl-style request/response evidence.
- [http.har.json](./http.har.json) - HAR-style request/response metadata.

## Endpoint Artifacts

| Endpoint | Source URL | Status | Content Type | Saved Body | Truncated |
| --- | --- | --- | --- | --- | --- |
${endpointRows}

## DNS Summary

${dnsSummary}
`,
  );
}

async function writeHttpTranscript(
  siteDir: string,
  site: Site,
  records: CaptureRecord[],
) {
  const sections = records.map((record) => {
    const requestHeaders = record.requestHeaders
      .map((header) => `> ${header.name}: ${header.value}`)
      .join("\n");
    const responseHeaders = [
      record.responseStatusLine,
      ...record.responseHeaders.map(
        (header) => `${header.name}: ${header.value}`,
      ),
    ]
      .filter(Boolean)
      .join("\n");

    return `## ${record.label}

\`\`\`bash
${record.command}
\`\`\`

Request:

\`\`\`http
GET ${record.url} HTTP
${requestHeaders}
\`\`\`

Response:

\`\`\`http
${responseHeaders || "# no response headers captured"}
\`\`\`

- Status: ${record.status ?? `curl ${record.curlExitCode}`}
- Effective URL: ${record.effectiveUrl ?? ""}
- Content-Type: ${record.contentType ?? ""}
- Body bytes: ${record.bodyBytes}
- Saved body: ${record.outputFile ?? "status only"}
- Truncated: ${record.truncated ? "yes" : "no"}
${record.notes ? `- Notes: ${record.notes}\n` : ""}`;
  });

  await writeFile(
    join(siteDir, "http-transcript.md"),
    `# ${site.name} HTTP Transcript

**Captured:** ${capturedAt}

${sections.join("\n")}
`,
  );
}

async function writeExamplesReadme(
  siteSummaries: Array<{
    slug: string;
    name: string;
    category: Site["category"];
    homepage: string;
    directory: string;
    endpoints: Array<{
      label: string;
      url: string;
      status: number | null;
      outputFile: string | null;
    }>;
  }>,
) {
  const rows = siteSummaries
    .map((site) => {
      const urls = site.endpoints
        .map((siteEndpoint) => {
          const status = siteEndpoint.status ?? "curl error";
          const output = siteEndpoint.outputFile ?? "status only";

          return `${siteEndpoint.label}: [${status}](${siteEndpoint.url}) -> \`${output}\``;
        })
        .join("<br>");

      return `| [${site.name}](./${site.slug}/) | ${site.category} | [homepage](${site.homepage}) | ${urls} |`;
    })
    .join("\n");

  await writeFile(
    join(examplesRoot, "README.md"),
    `# Example Snapshots

These are generated, dated snapshots of agent-readiness evidence. They are examples of audit evidence, not guaranteed-current site state.

**Captured:** ${capturedAt}

Refresh the directory with:

\`\`\`bash
bun run examples:capture
\`\`\`

Each site directory includes:

- \`metadata.json\` with endpoint status, effective URL, content type, byte counts, and truncation flags.
- \`dns.txt\` and \`dns.json\` with \`A\`, \`AAAA\`, \`CNAME\`, \`HTTPS\`, and \`TXT\` records.
- \`http-transcript.md\` with curl-style request and response evidence.
- \`http.har.json\` with HAR-style request and response metadata.
- Endpoint body files such as \`robots.txt\`, \`sitemap.xml\`, \`llms.txt\`, \`llms-full.sample.txt\`, and \`.well-known/agent-skills/index.json\` when the endpoint returned a usable body.

Large files are sampled and marked with \`truncated: true\` in the corresponding \`*.status.json\`.
Dynamic response cookies are redacted, and unusually long CSP/reporting headers are truncated in metadata and transcripts.
Saved text bodies are whitespace-normalized to remove trailing whitespace and space-before-tab issues from upstream samples.

## Sites

| Site | Category | Homepage | Endpoint URLs |
| --- | --- | --- | --- |
${rows}
`,
  );
}

function toHar(site: Site, records: CaptureRecord[]) {
  return {
    log: {
      version: "1.2",
      creator: {
        name: "agentready-example-capture",
        version: "1.0",
      },
      pages: [
        {
          startedDateTime: capturedAt,
          id: site.slug,
          title: site.name,
          pageTimings: {},
        },
      ],
      entries: records.map((record) => ({
        pageref: site.slug,
        startedDateTime: record.startedAt,
        time: record.durationMs ?? 0,
        request: {
          method: "GET",
          url: record.url,
          httpVersion: "HTTP",
          headers: record.requestHeaders,
          queryString: [],
          cookies: [],
          headersSize: -1,
          bodySize: 0,
        },
        response: {
          status: record.status ?? 0,
          statusText: record.responseStatusLine ?? "",
          httpVersion: "HTTP",
          headers: record.responseHeaders,
          cookies: [],
          content: {
            size: record.bodyBytes,
            mimeType: record.contentType ?? "",
          },
          redirectURL: record.effectiveUrl ?? "",
          headersSize: -1,
          bodySize: record.bodyBytes,
        },
        cache: {},
        timings: {
          send: 0,
          wait: record.durationMs ?? 0,
          receive: 0,
        },
        comment: record.outputFile
          ? `Saved body to ${record.outputFile}`
          : "No body saved; see status metadata",
      })),
    },
  };
}

function parseHeaders(rawHeaders: string): {
  statusLine: string | null;
  headers: HeaderPair[];
} {
  const blocks = rawHeaders
    .split(/\r?\n\r?\n/)
    .map((block) => block.trim())
    .filter(Boolean);
  const finalBlock = blocks.at(-1);

  if (!finalBlock) {
    return { statusLine: null, headers: [] };
  }

  const [statusLine, ...headerLines] = finalBlock.split(/\r?\n/);
  const headers = headerLines
    .map((line) => {
      const separator = line.indexOf(":");

      if (separator === -1) {
        return null;
      }

      return {
        name: line.slice(0, separator).trim(),
        value: sanitizeHeaderValue(
          line.slice(0, separator).trim(),
          line.slice(separator + 1).trim(),
        ),
      };
    })
    .filter((header): header is HeaderPair => header !== null);

  return { statusLine: statusLine ?? null, headers };
}

function sanitizeHeaderValue(name: string, value: string) {
  const lowerName = name.toLowerCase();

  if (lowerName === "set-cookie" || lowerName === "cookie") {
    return "[redacted]";
  }

  if (lowerName === "report-to" || lowerName === "report-uri") {
    return "[redacted]";
  }

  if (lowerName === "content-security-policy") {
    const reportUriIndex = value.toLowerCase().indexOf("report-uri");
    const withoutReportUri =
      reportUriIndex === -1
        ? value
        : `${value.slice(0, reportUriIndex).trim()} report-uri [redacted]`;

    return truncateHeader(withoutReportUri);
  }

  if (lowerName === "content-security-policy-report-only") {
    return truncateHeader(value);
  }

  return value;
}

function truncateHeader(value: string) {
  const maxLength = 320;

  if (value.length <= maxLength) {
    return value;
  }

  return `${value.slice(0, maxLength)} ... [truncated]`;
}

function parseCurlMeta(stdout: string): {
  status: number | null;
  effectiveUrl: string | null;
  contentType: string | null;
  timeTotalSeconds: number | null;
} {
  const metaLine = stdout
    .split(/\r?\n/)
    .find((line) => line.startsWith("AGENTREADY_META\t"));

  if (!metaLine) {
    return {
      status: null,
      effectiveUrl: null,
      contentType: null,
      timeTotalSeconds: null,
    };
  }

  const [, statusRaw, effectiveUrlRaw, contentTypeRaw, , timeTotalRaw] =
    metaLine.split("\t");
  const parsedStatus = Number(statusRaw);
  const parsedTimeTotal = Number(timeTotalRaw);

  return {
    status:
      Number.isFinite(parsedStatus) && parsedStatus > 0 ? parsedStatus : null,
    effectiveUrl: effectiveUrlRaw || null,
    contentType: contentTypeRaw || null,
    timeTotalSeconds: Number.isFinite(parsedTimeTotal) ? parsedTimeTotal : null,
  };
}

async function execFileCapture(command: string, args: string[]) {
  try {
    const result = await execFileAsync(command, args, {
      maxBuffer: 10 * 1024 * 1024,
    });

    return {
      exitCode: 0,
      stdout: result.stdout,
      stderr: result.stderr,
    };
  } catch (error) {
    if (isExecError(error)) {
      return {
        exitCode: typeof error.code === "number" ? error.code : 1,
        stdout: typeof error.stdout === "string" ? error.stdout : "",
        stderr: typeof error.stderr === "string" ? error.stderr : "",
      };
    }

    throw error;
  }
}

function isExecError(error: unknown): error is {
  code?: number | string;
  stdout?: string | Buffer;
  stderr?: string | Buffer;
} {
  return typeof error === "object" && error !== null && "code" in error;
}

async function writeBodySample(path: string, body: Buffer, maxBytes: number) {
  await mkdir(dirname(path), { recursive: true });
  const sample = body.byteLength > maxBytes ? body.subarray(0, maxBytes) : body;
  const normalizedSample = normalizeTextEvidence(sample);
  await writeFile(path, normalizedSample);

  return Buffer.byteLength(normalizedSample);
}

function normalizeTextEvidence(body: Buffer) {
  const text = body.toString("utf8");

  if (text.includes("\u0000")) {
    return body;
  }

  return text
    .replace(/[ \t]+$/gm, "")
    .replace(/^[ \t]+/gm, (indent) => indent.replace(/ +\t/g, "\t"));
}

async function writeJson(path: string, data: unknown) {
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, `${JSON.stringify(data, null, 2)}\n`);
}

async function readTextIfExists(path: string) {
  try {
    return await readFile(path, "utf8");
  } catch {
    return "";
  }
}

async function readBufferIfExists(path: string) {
  try {
    return await readFile(path);
  } catch {
    return Buffer.alloc(0);
  }
}

function shellQuote(args: string[]) {
  return args
    .map((arg) => {
      if (/^[a-zA-Z0-9_/:=.,+@%.-]+$/.test(arg)) {
        return arg;
      }

      return `'${arg.replaceAll("'", "'\\''")}'`;
    })
    .join(" ");
}

await main();
