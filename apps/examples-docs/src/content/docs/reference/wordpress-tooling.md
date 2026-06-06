---
title: WordPress Agent-Ready Tooling
description: Practical WordPress admin, theme, page-builder, and audit tooling guidance for agent-ready sites.
---

WordPress agent-readiness work should be boring. First make the public site
fetchable, extractable, citeable, and truthful. Only then add narrow
agent-specific files or capability metadata.

## Tiny version

- **WordPress core:** use `Settings -> Reading`, `Settings -> Permalinks`,
  `Appearance -> Editor` or `Appearance -> Customize`, plus clean `Pages` and
  `Posts`.
- **Yoast, if it is already installed:** use `Yoast SEO -> Settings -> Site
  features -> llms.txt` and `Yoast SEO -> Tools -> File editor`; keep one
  sitemap/schema owner.
- **Agentic discovery in theme or plugin:** use a block theme, child theme,
  mu-plugin, or small focused plugin for real surfaces; do not publish fake
  MCP, API, OAuth, or commerce metadata.
- **Audit outside WordPress:** use `curl`, WP-CLI, schema validators,
  `isitagentready.com`, server/CDN logs, and repeated prompt/source checks.

## What WordPress core means

These are the WordPress admin controls to check before adding plugins.

| Surface | Where to configure it | What it controls | Audit check |
| --- | --- | --- | --- |
| Public indexability | `Settings -> Reading -> Search engine visibility` | The `blog_public` option and related noindex/robots behavior. | Leave unchecked for public sites that should be discoverable. Fetch representative pages and `/robots.txt` after launch or migration. |
| URL shape | `Settings -> Permalinks` | Stable, readable canonical paths. | Use clean permalinks before checking sitemaps, canonicals, and `llms.txt` links. |
| Source text | `Pages`, `Posts`, and custom post type editors | The headings, dates, authors, answers, source links, and calls to action agents can quote. | Inspect rendered HTML and a text extraction, not only the visual editor. |
| Templates and navigation | Block themes: `Appearance -> Editor`; classic themes: `Appearance -> Customize` | Headers, footers, navigation, archive templates, single templates, search pages, and 404s. | Reduce repeated chrome and make useful page text easy to reach. |
| Sitemap | Core route at `/wp-sitemap.xml`, unless an SEO plugin owns sitemaps | Discovery of public post types and taxonomies. | Pick one sitemap owner and fetch the public sitemap URL. |
| `robots.txt` | WordPress virtual route, a physical root file, host/CDN config, SEO plugin editor, or a custom `robots_txt` filter | Crawler allow/disallow policy and sitemap hints. | WordPress core does not provide a full robots editor. The public `/robots.txt` is the source of truth. |
| `llms.txt` | Static root file, Yoast feature, deploy script, standalone plugin, or tiny custom plugin/mu-plugin | Curated machine-readable entrypoint for high-value content. | Keep it short, current, and aligned with noindex/private-content rules. |
| Schema and canonicals | Existing SEO plugin, per-page SEO panel, or theme schema controls if already present | Structured data, canonical URLs, titles, and descriptions. | Use one owner and validate that schema matches visible content. |
| Real capabilities | App/API code, custom plugin, API gateway, or edge worker | API Catalog, OpenAPI, OAuth metadata, MCP, Agent Skills, A2A, commerce actions. | Publish only if the capability exists, is authorized, is tested, and is monitored. |

The core distinction: WordPress admin settings usually improve findability and
readability. They do not create real agent capabilities by themselves.

## Good owner model

Use one deliberate owner per surface:

- **Core WordPress:** public indexability, permalinks, content, templates, and
  core sitemaps when no SEO plugin owns them.
- **Existing SEO plugin:** metadata, canonicals, schema, sitemaps, robots
  editing, and `llms.txt` only when the plugin already owns that surface.
- **Tiny custom plugin, mu-plugin, static file, or deploy step:** root files and
  controlled filters when the site needs something WordPress core does not
  expose cleanly.
- **External tooling:** audit, validation, crawler simulation, log analysis, and
  visibility measurement.

Avoid installing broad AI SEO bundles just to add `llms.txt`, crawler logging,
or scanner-shaped files.

## Theme and page-builder map

Put agent-readiness work where that tool actually has control. Builders are
usually the right place for rendered content and templates. They are usually the
wrong place for root files, crawler policy, or protocol capability metadata.

| Stack | Useful control points | Put agentic discovery here | Avoid |
| --- | --- | --- | --- |
| Core block themes | `Appearance -> Editor`, templates, navigation, styles, patterns, pages, posts. | Template cleanup, answer sections, visible source links, and extractable page text. Use a plugin/mu-plugin or static file for root files. | Assuming the Site Editor creates `robots.txt`, `llms.txt`, or real API capabilities. |
| Classic themes | `Appearance -> Customize`, menus, widgets, homepage settings, Additional CSS, child theme files. | Header/footer cleanup, visible trust signals, useful footer links, and child-theme overrides when needed. | Editing parent theme files or duplicating schema from both theme and SEO plugin. |
| Astra / Kadence | Customizer header/footer builders, page/post layout settings, theme dashboard shortcuts. | Navigation, layout, visible source/citation surfaces, and cleaner templates. | Treating header/footer widgets as the policy layer for crawlers or root files. |
| GeneratePress | `Appearance -> Elements`, hook elements, block elements, Customizer layout controls. | Developer-controlled template additions and visible trust/citation blocks. | Using theme hooks for broad crawler policy when a plugin/filter is clearer. |
| Elementor | Elementor Site Settings, Theme Builder, per-page editor, Yoast tab inside Elementor when Yoast is installed. | Page content, templates, headings, visible answers, source blocks, and small global snippets. | Using Custom Code for `llms.txt`, `robots.txt`, API Catalog, OAuth, or MCP. |
| Divi | `Divi -> Theme Builder`, `Divi -> Theme Options -> Integration`, optional Divi SEO tab. | Rendered templates and header/footer/body snippets when Divi already owns that layer. | Letting legacy Divi SEO output compete with a dedicated SEO plugin. |
| Beaver Builder / Beaver Themer | `Settings -> Beaver Builder`, Themer layouts, BB Theme Customizer Code tab when using BB Theme. | Template cleanup and visible page content. | Adding root discovery files through modules or random header/footer widgets. |
| Bricks | `Bricks -> Settings -> Custom Code`, Bricks templates, page settings, element text. | Clean templates, searchable rendered text, and small global snippets. | Enabling executable code broadly for non-developers or using builder code elements for protocol surfaces. |
| Avada | `Avada -> Layouts` / Layout Builder, `Avada -> Options -> Global Options`, page options, element options, Custom CSS. | Global and conditional layouts, headers, footers, content templates, and page text. | Treating Avada's broad options network as a place to own root crawler policy or capability metadata. |
| Oxygen | `Oxygen -> Templates`, builder templates, template conditions, code blocks only when developer-owned. | Template assignment, dynamic content placement, and rendered source cleanup. | Hiding source-critical content in builder-only constructs that are hard to extract or maintain. |
| WPBakery / Visual Composer / Salient/Nectar | Content elements, Design Options, Custom CSS, theme/Nectar hooks, front-end rendered output. | Audit the rendered front end, repair headings/text blocks, and use theme overrides only where necessary. | Feeding raw shortcode-heavy `post_content` into search/vector/agent pipelines or adding another builder as a workaround. |

## What to install

Prefer this order:

1. **No new plugin** when core WordPress plus the existing SEO plugin can own the
   surface cleanly.
2. **The existing SEO plugin** if the client already uses Yoast, SEOPress, The
   SEO Framework, Slim SEO, or a comparable mature SEO owner.
3. **A tiny custom plugin or mu-plugin** for a site-specific `robots_txt` filter,
   root-file generation, or controlled endpoint.
4. **A standalone `llms.txt` plugin only after review** if the site needs admin
   editing and no existing tool owns the surface.

Do not add a broad AI-discovery suite to a WordPress instance unless the client
has reviewed telemetry, database writes, crawler logging, uninstall behavior,
cache behavior, and overlap with existing SEO/security/CDN tooling.

## Audit commands

Run the public checks outside WordPress admin:

```bash
curl -i https://example.com/
curl -sS https://example.com/robots.txt
curl -sS https://example.com/wp-sitemap.xml
curl -sS https://example.com/sitemap.xml
curl -sS https://example.com/llms.txt
wp option get blog_public
wp plugin list --status=active
```

Then validate structured data, run `isitagentready.com`, inspect CDN/server logs
when available, and repeat prompt/source checks in the actual AI surfaces the
client cares about.

## References

WordPress and SEO basics:

- [WordPress Site Editor](https://wordpress.org/documentation/article/site-editor/)
- [WordPress Customizer](https://wordpress.org/documentation/article/customizer/)
- [WordPress `WP_Sitemaps`](https://developer.wordpress.org/reference/classes/wp_sitemaps/)
- [WordPress `robots_txt` filter](https://developer.wordpress.org/reference/hooks/robots_txt/)
- [Yoast `llms.txt` functional specification](https://developer.yoast.com/features/llms-txt/functional-specification/)
- [Yoast `llms.txt` help](https://yoast.com/help/enable-llmstxt/)
- [Yoast Site features settings](https://yoast.com/help/yoast-seo-settings-site-features/)
- [Yoast robots.txt editor](https://yoast.com/help/how-to-edit-robots-txt-through-yoast-seo/)

Theme and builder docs:

- [Astra footer builder](https://wpastra.com/docs/create-footer-with-footer-builder/)
- [Kadence page/post layout settings](https://docs.kadencewp.com/kadence-theme/docs/page-post-specific-layout-settings/)
- [GeneratePress Elements](https://docs.generatepress.com/collection/elements/)
- [GeneratePress Hook Elements](https://docs.generatepress.com/article/hooks-element-overview/)
- [Elementor Site Settings](https://elementor.com/help/site-settings/)
- [Elementor Yoast integration](https://elementor.com/help/yoast-seo-integration-with-elementor/)
- [Divi Theme Builder](https://www.elegantthemes.com/documentation/divi/the-divi-theme-builder/)
- [Divi Theme Options](https://www.elegantthemes.com/documentation/divi/theme-options/)
- [Beaver Builder settings](https://docs.wpbeaverbuilder.com/beaver-builder/settings/)
- [Beaver Builder Theme code tab](https://docs.wpbeaverbuilder.com/bb-theme/customizer-settings/code/)
- [Bricks custom code](https://academy.bricksbuilder.io/builder/features/custom-code/)
- [Bricks settings](https://academy.bricksbuilder.io/article/settings/)
- [Avada Layout Builder](https://avada.com/documentation/the-layout-builder/)
- [Avada Global Options](https://avada.com/documentation/avada-global-options/)
- [Avada custom CSS](https://avada.com/documentation/how-to-add-custom-css-in-avada/)
- [Oxygen templates](https://classic.oxygenbuilder.com/documentation/templating/templating-overview/)
- [WPBakery custom CSS](https://kb.wpbakery.com/docs/learning-more/custom-css/)
- [Salient developer docs](https://themenectar.com/docs/salient/developer-docs/)
