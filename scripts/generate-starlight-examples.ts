import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const defaultRepoRoot = fileURLToPath(new URL("../", import.meta.url));
const gitHubBlobBase = "https://github.com/ThatGuySam/agentready/blob/main";
const gitHubTreeBase = "https://github.com/ThatGuySam/agentready/tree/main";

export type ExampleCategory = "positive" | "contrast" | "redirect-trap";

export type ExampleEndpoint = {
  key: string;
  label: string;
  url: string;
  status: number;
  effectiveUrl?: string;
  contentType?: string;
  outputFile?: string;
  statusFile: string;
  truncated?: boolean;
};

export type ExampleSite = {
  slug: string;
  name: string;
  category: ExampleCategory;
  homepage: string;
  host: string;
  notes: string;
  directory: string;
  endpoints: ExampleEndpoint[];
};

export type ExampleManifest = {
  capturedAt: string;
  sites: ExampleSite[];
};

type CategoryDetails = {
  label: string;
  slug: string;
  description: string;
};

type SurfaceDefinition = {
  slug: string;
  title: string;
  description: string;
  match: (site: ExampleSite, endpoint: ExampleEndpoint) => boolean;
};

type BlufSummary = {
  bottomLine: string;
  relevance: string;
  evidence: string;
  nextAction: string;
  caveat?: string;
};

const categoryOrder: ExampleCategory[] = [
  "positive",
  "contrast",
  "redirect-trap",
];

const categoryDetails: Record<ExampleCategory, CategoryDetails> = {
  positive: {
    label: "Positive examples",
    slug: "positive",
    description:
      "Docs and platform sites with multiple useful agent-facing surfaces.",
  },
  contrast: {
    label: "Contrast examples",
    slug: "contrast",
    description:
      "Strong sites or root domains that show partial coverage or different policy choices.",
  },
  "redirect-trap": {
    label: "Redirect traps",
    slug: "redirect-traps",
    description:
      "Endpoints that return successful statuses but do not provide clean saved bodies.",
  },
};

export const surfaceDefinitions: SurfaceDefinition[] = [
  {
    slug: "robots",
    title: "Robots.txt",
    description:
      "Crawler policy surfaces that tell crawlers which paths and user agents are allowed.",
    match: (_site, endpoint) => endpoint.key === "robots",
  },
  {
    slug: "sitemaps",
    title: "Sitemaps",
    description:
      "Discovery surfaces that expose URLs and content structure to crawlers.",
    match: (_site, endpoint) => endpoint.key === "sitemap",
  },
  {
    slug: "llms-files",
    title: "LLM text files",
    description:
      "Text or Markdown bundles such as `llms.txt` and `llms-full.txt` intended for LLM or agent consumption.",
    match: (_site, endpoint) =>
      endpoint.key === "llms" || endpoint.key === "llms-full",
  },
  {
    slug: "markdown-alternatives",
    title: "Markdown alternatives",
    description:
      "Clean Markdown or API body alternatives that reduce extraction noise compared with full HTML pages.",
    match: (_site, endpoint) =>
      endpoint.key.includes("markdown") ||
      endpoint.key.includes("article-body") ||
      endpoint.key.includes("agent-resources") ||
      endpoint.outputFile?.endsWith(".md.txt") === true ||
      endpoint.contentType?.toLowerCase().includes("markdown") === true,
  },
  {
    slug: "agent-skills",
    title: "Agent skills indexes",
    description:
      "Capability-discovery files under `.well-known/agent-skills/`.",
    match: (_site, endpoint) => endpoint.key === "agent-skills",
  },
  {
    slug: "redirect-traps",
    title: "Redirect and status traps",
    description:
      "Successful-looking responses that need deeper inspection before counting as usable agent surfaces.",
    match: (site, endpoint) =>
      site.category === "redirect-trap" ||
      (isSuccess(endpoint.status) && !endpoint.outputFile),
  },
];

export async function generateStarlightExamples(repoRoot = defaultRepoRoot) {
  const manifest = await loadManifest(repoRoot);
  const docsRoot = join(repoRoot, "apps/examples-docs/src/content/docs");
  const generatedRoot = join(docsRoot, "examples/generated");

  await rm(generatedRoot, { force: true, recursive: true });
  await mkdir(generatedRoot, { recursive: true });

  await writeGeneratedFile(
    join(docsRoot, "examples/index.md"),
    buildExamplesIndex(manifest),
  );

  for (const category of categoryOrder) {
    await writeGeneratedFile(
      join(docsRoot, `examples/${categoryDetails[category].slug}.md`),
      buildCategoryPage(manifest, category),
    );
  }

  await writeGeneratedFile(
    join(docsRoot, "patterns/index.md"),
    buildPatternsIndex(),
  );

  for (const surface of surfaceDefinitions) {
    await writeGeneratedFile(
      join(docsRoot, `patterns/${surface.slug}.md`),
      buildSurfacePage(manifest, surface),
    );
  }

  for (const site of manifest.sites) {
    await writeGeneratedFile(
      join(generatedRoot, `${site.slug}.md`),
      buildExamplePage(manifest, site),
    );
  }

  console.log(
    `Generated ${manifest.sites.length} Starlight example page(s) from examples/manifest.json.`,
  );
}

export async function loadManifest(repoRoot = defaultRepoRoot) {
  const manifestPath = join(repoRoot, "examples/manifest.json");
  return parseManifest(await readFile(manifestPath, "utf8"));
}

export function parseManifest(input: string): ExampleManifest {
  const manifest = JSON.parse(input) as ExampleManifest;

  if (!manifest.capturedAt || !Array.isArray(manifest.sites)) {
    throw new Error("Invalid examples manifest.");
  }

  return manifest;
}

export function buildExamplePage(manifest: ExampleManifest, site: ExampleSite) {
  const successCount = site.endpoints.filter((endpoint) =>
    isSuccess(endpoint.status),
  ).length;
  const category = categoryDetails[site.category];
  const surfaces = surfaceDefinitions.map((surface) => {
    const matches = getSurfaceMatches(site, surface);
    const evidence =
      matches.length > 0
        ? matches.map((endpoint) => endpointLink(endpoint)).join(", ")
        : "Not captured";

    return `| ${tableCell(surface.title)} | ${tableCell(evidence)} |`;
  });

  return `${generatedNotice()}
---
title: ${yamlString(site.name)}
description: ${yamlString(`${category.label} for ${site.host}`)}
---

# ${site.name}

${buildBlufSummary(examplePageBluf(manifest, site))}

This page summarizes a dated AgentReady evidence snapshot. It is not a live
claim about ${site.host}.

| Field | Value |
| --- | --- |
| Category | ${tableCell(category.label)} |
| Homepage | [${tableCell(site.homepage)}](${site.homepage}) |
| Host | \`${site.host}\` |
| Captured | \`${manifest.capturedAt}\` |
| Endpoints | ${site.endpoints.length} captured, ${successCount} successful status responses |
| Source directory | [\`${site.directory}\`](${sourceDirectoryLink(site)}) |

## Notes

${site.notes}

## Agent-Facing Surfaces

| Surface | Evidence |
| --- | --- |
${surfaces.join("\n")}

## Endpoint Evidence

| Endpoint | Status | Effective URL | Content type | Evidence |
| --- | --- | --- | --- | --- |
${site.endpoints.map((endpoint) => endpointEvidenceRow(site, endpoint)).join("\n")}

## Raw Evidence

- [Directory on GitHub](${sourceDirectoryLink(site)})
- [HTTP transcript](${rawFileLink(site, "http-transcript.md")})
- [HAR metadata](${rawFileLink(site, "http.har.json")})
- [DNS text](${rawFileLink(site, "dns.txt")})
- [DNS JSON](${rawFileLink(site, "dns.json")})
`;
}

export function buildExamplesIndex(manifest: ExampleManifest) {
  const rows = categoryOrder.map((category) => {
    const details = categoryDetails[category];
    const sites = sitesForCategory(manifest, category);
    return `| [${details.label}](./${details.slug}/) | ${sites.length} | ${tableCell(details.description)} |`;
  });

  return `${generatedNotice()}
---
title: Browse Examples
description: Browse the AgentReady example snapshot by category.
---

# Browse Examples

${buildBlufSummary({
  bottomLine:
    "Browse the dated examples snapshot by category before diving into raw evidence.",
  relevance:
    "Use this page when you need to choose between positive examples, contrast cases, and redirect or status traps.",
  evidence: `The current snapshot includes ${manifest.sites.length} sites captured at ${manifest.capturedAt}.`,
  nextAction:
    "Pick positive examples for implementation patterns, contrast examples for trade-offs, or redirect traps for false-positive checks.",
  caveat:
    "The examples are dated captures; open the raw evidence or re-run checks before treating a target site as current.",
})}

The current snapshot includes ${manifest.sites.length} sites captured at
\`${manifest.capturedAt}\`.

| Group | Sites | What it shows |
| --- | ---: | --- |
${rows.join("\n")}

## All Sites

${manifest.sites.map((site) => `- ${examplePageLink(site)} - ${categoryDetails[site.category].label}`).join("\n")}
`;
}

export function buildCategoryPage(
  manifest: ExampleManifest,
  category: ExampleCategory,
) {
  const details = categoryDetails[category];
  const sites = sitesForCategory(manifest, category);

  return `${generatedNotice()}
---
title: ${yamlString(details.label)}
description: ${yamlString(details.description)}
---

# ${details.label}

${buildBlufSummary(categoryPageBluf(category, details, sites.length))}

${details.description}

| Site | Host | Endpoints | Successful statuses |
| --- | --- | ---: | ---: |
${sites.map((site) => categoryRow(site)).join("\n")}
`;
}

export function buildPatternsIndex() {
  return `${generatedNotice()}
---
title: Browse by Surface
description: Browse examples by agent-facing surface type.
---

# Browse by Surface

${buildBlufSummary({
  bottomLine:
    "Browse by surface when you already know which agent-facing artifact you want to compare.",
  relevance:
    "This page is useful for comparing crawler policy, sitemap discovery, LLM text files, Markdown alternatives, agent skills, and redirect traps across sites.",
  evidence: `${surfaceDefinitions.length} surface groups are generated from the same examples manifest.`,
  nextAction:
    "Choose the surface that matches your audit question, then inspect matching examples and raw evidence.",
})}

Use these pages to compare how different sites expose common agent-facing
surfaces.

${surfaceDefinitions.map((surface) => `- [${surface.title}](./${surface.slug}/) - ${surface.description}`).join("\n")}
`;
}

export function buildSurfacePage(
  manifest: ExampleManifest,
  surface: SurfaceDefinition,
) {
  const rows = manifest.sites
    .map((site) => {
      const matches = getSurfaceMatches(site, surface);

      if (matches.length === 0) {
        return null;
      }

      return `| ${examplePageLink(site)} | \`${site.host}\` | ${matches.map((endpoint) => endpointLink(endpoint)).join(", ")} |`;
    })
    .filter((row): row is string => row !== null);

  return `${generatedNotice()}
---
title: ${yamlString(surface.title)}
description: ${yamlString(surface.description)}
---

# ${surface.title}

${buildBlufSummary(surfacePageBluf(surface, rows.length))}

${surface.description}

| Site | Host | Matching evidence |
| --- | --- | --- |
${rows.length > 0 ? rows.join("\n") : "| No matches | - | - |"}
`;
}

export function getSurfaceMatches(
  site: ExampleSite,
  surface: SurfaceDefinition,
) {
  return site.endpoints.filter((endpoint) => surface.match(site, endpoint));
}

function sitesForCategory(
  manifest: ExampleManifest,
  category: ExampleCategory,
) {
  return manifest.sites.filter((site) => site.category === category);
}

function categoryRow(site: ExampleSite) {
  const successCount = site.endpoints.filter((endpoint) =>
    isSuccess(endpoint.status),
  ).length;

  return `| ${examplePageLink(site)} | \`${tableCell(site.host)}\` | ${site.endpoints.length} | ${successCount} |`;
}

function endpointEvidenceRow(site: ExampleSite, endpoint: ExampleEndpoint) {
  const effectiveUrl = endpoint.effectiveUrl ?? endpoint.url;
  const contentType = endpoint.contentType
    ? `\`${endpoint.contentType}\``
    : "-";
  const bodyLink = endpoint.outputFile
    ? `[body](${rawFileLink(site, endpoint.outputFile)})`
    : "status only";
  const statusLink = `[status](${rawFileLink(site, endpoint.statusFile)})`;
  const truncated = endpoint.truncated ? " truncated" : "";

  return `| ${tableCell(endpoint.label)} | \`${endpoint.status}\`${truncated} | [open](${effectiveUrl}) | ${tableCell(contentType)} | ${bodyLink} / ${statusLink} |`;
}

function endpointLink(endpoint: ExampleEndpoint) {
  return `\`${endpoint.label} ${endpoint.status}\``;
}

function buildBlufSummary(summary: BlufSummary) {
  const items = [
    ["Bottom line", summary.bottomLine, true],
    ["Is this relevant?", summary.relevance, false],
    ["Evidence", summary.evidence, false],
    ["Next action", summary.nextAction, false],
  ] as const;
  const caveat = summary.caveat
    ? `\n  <details class="bluf-summary__item">\n    <summary>Caveat</summary>\n    <p>${escapeHtml(summary.caveat)}</p>\n  </details>`
    : "";

  return `<section class="bluf-summary" aria-label="Page summary">
${items
  .map(
    ([label, value, open]) =>
      `  <details class="bluf-summary__item"${open ? " open" : ""}>\n    <summary>${label}</summary>\n    <p>${escapeHtml(value)}</p>\n  </details>`,
  )
  .join("\n")}${caveat}
</section>`;
}

function examplePageBluf(
  manifest: ExampleManifest,
  site: ExampleSite,
): BlufSummary {
  const successCount = site.endpoints.filter((endpoint) =>
    isSuccess(endpoint.status),
  ).length;
  const matchedSurfaces = surfaceDefinitions
    .filter((surface) => getSurfaceMatches(site, surface).length > 0)
    .map((surface) => surface.title);

  const bottomLineByCategory: Record<ExampleCategory, string> = {
    positive: `${site.name} is a positive example for ${site.host}, but the page is still a dated evidence snapshot.`,
    contrast: `${site.name} is a contrast example for ${site.host}, useful for seeing partial coverage or policy trade-offs.`,
    "redirect-trap": `${site.name} is a redirect/status-trap example; successful-looking statuses need body inspection before they count as usable agent surfaces.`,
  };

  return {
    bottomLine: bottomLineByCategory[site.category],
    relevance: `Use this page when you want a ${categoryUseLabel(site.category)} for ${site.host}.`,
    evidence: `${site.endpoints.length} endpoints were captured at ${manifest.capturedAt}; ${successCount} returned successful status responses. Captured surfaces: ${matchedSurfaces.length > 0 ? matchedSurfaces.join(", ") : "none"}.`,
    nextAction:
      "Scan Agent-Facing Surfaces first, then open raw evidence links when status, redirect, body content, or truncation matters.",
    caveat: `This is not a live claim about ${site.host}; public sites and endpoint behavior can change.`,
  };
}

function categoryUseLabel(category: ExampleCategory) {
  const labels: Record<ExampleCategory, string> = {
    positive: "positive example",
    contrast: "contrast example",
    "redirect-trap": "redirect/status-trap example",
  };

  return labels[category];
}

function categoryPageBluf(
  category: ExampleCategory,
  details: CategoryDetails,
  siteCount: number,
): BlufSummary {
  const bottomLineByCategory: Record<ExampleCategory, string> = {
    positive:
      "These examples are the best starting points for seeing useful agent-facing surfaces in real docs and platform sites.",
    contrast:
      "These examples show that strong sites can still make different crawler, artifact, or capability-discovery choices.",
    "redirect-trap":
      "These examples show why status checks need body inspection before an endpoint is counted as agent-readable.",
  };

  return {
    bottomLine: bottomLineByCategory[category],
    relevance: details.description,
    evidence: `${siteCount} sites in this category are generated from the current examples manifest.`,
    nextAction:
      "Open one site page, read its Agent-Facing Surfaces table, then inspect raw evidence for anything you might copy.",
    caveat:
      "Treat category labels as audit interpretation from the capture, not permanent rankings of the target sites.",
  };
}

function surfacePageBluf(
  surface: SurfaceDefinition,
  siteCount: number,
): BlufSummary {
  return {
    bottomLine: `Use this page to compare ${surface.title.toLowerCase()} evidence across captured sites.`,
    relevance: surface.description,
    evidence: `${siteCount} site rows currently match this surface in the examples manifest.`,
    nextAction:
      "Open matching examples and check the raw body or status file before using the pattern in an audit recommendation.",
    caveat:
      "A matching status is a lead, not proof; content type, body shape, redirects, and truncation still matter.",
  };
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function examplePageLink(site: ExampleSite) {
  return `[${site.name}](/examples/generated/${site.slug}/)`;
}

function rawFileLink(site: ExampleSite, file: string) {
  return `${gitHubBlobBase}/${site.directory}${file}`;
}

function sourceDirectoryLink(site: ExampleSite) {
  return `${gitHubTreeBase}/${site.directory.replace(/\/$/, "")}`;
}

function isSuccess(status: number) {
  return status >= 200 && status < 300;
}

function generatedNotice() {
  return "";
}

function yamlString(value: string) {
  return JSON.stringify(value.replace(/\s+/g, " ").trim());
}

function tableCell(value: string) {
  return value.replace(/\s+/g, " ").replace(/\|/g, "\\|").trim();
}

async function writeGeneratedFile(path: string, content: string) {
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, content, "utf8");
}

if (import.meta.main) {
  await generateStarlightExamples();
}
