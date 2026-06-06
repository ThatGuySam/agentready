import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://agentready.samcarlton.com",
  integrations: [
    starlight({
      title: "AgentReady Examples",
      description:
        "Searchable examples of agent-facing website surfaces captured by AgentReady.",
      editLink: {
        baseUrl:
          "https://github.com/ThatGuySam/agentready/edit/main/apps/examples-docs/",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/ThatGuySam/agentready",
        },
      ],
      sidebar: [
        {
          label: "Start Here",
          items: [{ label: "Overview", link: "/" }],
        },
        {
          label: "Browse Examples",
          items: [
            { slug: "examples" },
            { slug: "examples/positive" },
            { slug: "examples/contrast" },
            { slug: "examples/redirect-traps" },
            {
              label: "All generated examples",
              items: [{ autogenerate: { directory: "examples/generated" } }],
              collapsed: true,
            },
          ],
        },
        {
          label: "Browse by Surface",
          items: [{ autogenerate: { directory: "patterns" } }],
        },
        {
          label: "Evidence Reference",
          items: [{ slug: "reference/evidence-files" }, { slug: "resources" }],
        },
      ],
    }),
  ],
});
