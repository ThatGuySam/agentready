import { describe, expect, it } from "vitest";
import {
  buildExamplePage,
  buildSurfacePage,
  getSurfaceMatches,
  parseManifest,
  surfaceDefinitions,
  type ExampleManifest,
} from "./generate-starlight-examples";

const manifest: ExampleManifest = parseManifest(
  JSON.stringify({
    capturedAt: "2026-06-02T19:28:00.989Z",
    sites: [
      {
        slug: "cloudflare-developers",
        name: "Cloudflare Developers",
        category: "positive",
        homepage: "https://developers.cloudflare.com/",
        host: "developers.cloudflare.com",
        notes: "Gold-standard docs fixture.",
        directory: "examples/cloudflare-developers/",
        endpoints: [
          {
            key: "robots",
            label: "robots.txt",
            url: "https://developers.cloudflare.com/robots.txt",
            status: 200,
            effectiveUrl: "https://developers.cloudflare.com/robots.txt",
            contentType: "text/plain",
            outputFile: "robots.txt",
            statusFile: "robots.txt.status.json",
            truncated: false,
          },
          {
            key: "agent-skills",
            label: "agent skills index",
            url: "https://developers.cloudflare.com/.well-known/agent-skills/index.json",
            status: 200,
            effectiveUrl:
              "https://developers.cloudflare.com/.well-known/agent-skills/index.json",
            contentType: "application/json",
            outputFile: ".well-known/agent-skills/index.json",
            statusFile: ".well-known/agent-skills/index.json.status.json",
            truncated: false,
          },
        ],
      },
      {
        slug: "cursor-docs",
        name: "Cursor Docs",
        category: "redirect-trap",
        homepage: "https://docs.cursor.com/",
        host: "docs.cursor.com",
        notes: "Status-only redirect trap.",
        directory: "examples/cursor-docs/",
        endpoints: [
          {
            key: "llms",
            label: "llms.txt",
            url: "https://docs.cursor.com/llms.txt",
            status: 200,
            effectiveUrl: "https://docs.cursor.com/llms.txt",
            contentType: "text/html",
            statusFile: "llms.txt.status.json",
            truncated: false,
          },
        ],
      },
    ],
  }),
);

describe("generate-starlight-examples", () => {
  it("renders raw evidence links on generated example pages", () => {
    const page = buildExamplePage(manifest, manifest.sites[0]!);

    expect(page).toContain("Cloudflare Developers");
    expect(page).toContain('<section class="bluf-summary" role="radiogroup"');
    expect(page).toContain(
      'type="radio" name="bluf-summary" id="bluf-summary-bottom-line" checked',
    );
    expect(
      page.indexOf('for="bluf-summary-bottom-line">Bottom line'),
    ).toBeLessThan(
      page.indexOf('for="bluf-summary-relevance">Is this relevant?'),
    );
    expect(page).not.toContain("Next action");
    expect(page).toContain(
      "https://github.com/ThatGuySam/agentready/blob/main/examples/cloudflare-developers/robots.txt",
    );
    expect(page).toContain("Agent-Facing Surfaces");
  });

  it("groups status-only redirect traps as a browseable surface", () => {
    const redirectSurface = surfaceDefinitions.find(
      (surface) => surface.slug === "redirect-traps",
    );

    expect(redirectSurface).toBeDefined();
    expect(
      getSurfaceMatches(manifest.sites[1]!, redirectSurface!),
    ).toHaveLength(1);
  });

  it("builds surface pages with example links", () => {
    const agentSkillsSurface = surfaceDefinitions.find(
      (surface) => surface.slug === "agent-skills",
    );
    const page = buildSurfacePage(manifest, agentSkillsSurface!);

    expect(page).toContain("/examples/generated/cloudflare-developers/");
    expect(page).toContain("agent skills index 200");
  });
});
