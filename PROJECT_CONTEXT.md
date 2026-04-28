# a11ylab.kr Quartz Project Context

This document describes repository-specific context for the a11ylab.kr Quartz fork. It is intended for maintainers, contributors, and automation tools that need to understand how this repository differs from a stock Quartz installation.

## Repository identity

This repository is based on Quartz v4 and is used to publish a11ylab.kr, the website for Ali's Accessibility Lab.

The repository has two overlapping roles:

1. It tracks an upstream Quartz codebase.
2. It contains site-specific configuration, content, components, and operational customizations for a11ylab.kr.

Because this is a fork of an upstream project, changes should be made with future upstream updates in mind. Prefer minimal, well-scoped customizations that are easy to understand and rebase.

## Important paths

- `content/`: Markdown content published on a11ylab.kr.
- `quartz.config.ts`: site configuration, locale, base URL, theme, and plugin configuration.
- `quartz.layout.ts`: page layout configuration.
- `quartz/components/`: Quartz components and site-specific component customizations.
- `quartz/plugins/`: Quartz plugins and plugin-level customizations.
- `quartz/util/`: build and rendering utilities.
- `public/`: generated Quartz build output; generally do not edit by hand.
- `README.md`: upstream Quartz README unless intentionally changed by the project.
- `AGENTS.md`: short repository instructions for automation tools.
- `PROJECT_CONTEXT.md`: this project context document.

## Build vs. quality checks

Quartz build and project quality checks serve different purposes in this repository.

### Quartz build

Example:

```bash
npx quartz build -d content
```

The Quartz build command generates static site output. Quartz uses `esbuild` internally to transpile and execute TypeScript/TSX code during the build path. `esbuild` does not perform full TypeScript type checking.

As a result, the generated site can build successfully even when `npm run check` reports TypeScript or formatting issues.

### `npm run check`

`package.json` defines:

```bash
npm run check
```

as:

```bash
tsc --noEmit && npx prettier . --check
```

This is a development quality check. It can fail for issues that do not necessarily break the generated site, including:

- unused imports,
- unused function parameters,
- object properties that are accepted at runtime but not by the declared TypeScript type,
- Prettier formatting differences.

A failing quality check should be investigated separately from the production build path. Do not assume that a check failure means the generated site is broken, and do not assume that a successful build means the codebase is type-clean.

## Known quality-check caveats

Known `npm run check` caveats in this fork include:

- `quartz.layout.ts` may contain content-page layout customization that works at runtime through layout object spreading but does not match the narrower `PageLayout` TypeScript type.
- `quartz/components/Footer.tsx` may report unused imports or unused component props if the local footer has diverged from the upstream Quartz footer implementation.

These issues should be treated as maintainability tasks, not automatically as production build failures.

## Site-specific customization areas

Common a11ylab.kr customization areas include:

- `quartz.config.ts`
  - site title, locale, base URL, theme, and plugin settings;
- `quartz.layout.ts`
  - page layout, footer links, and comment placement;
- `quartz/components/Footer.tsx`
  - site footer text and links;
- `quartz/components/Cusdis.tsx`
  - Cusdis comment integration;
- `quartz/components/PageTitle.tsx` and related styles
  - site title and logo display behavior;
- `quartz/util/og.tsx`
  - Open Graph/social image template and font loading;
- `quartz/plugins/emitters/ogImage.tsx`
  - social image generation and emitted Open Graph/Twitter Card meta tags.

When modifying these areas, consider whether the change is site-specific or a general Quartz behavior change. Keep site-specific behavior documented.

## Open Graph and Korean text rendering

This site uses `Plugin.CustomOgImages()` to generate page-specific Open Graph/Twitter Card images.

Quartz social images are generated at build time using Satori and Sharp. They are not rendered by a browser, so browser or operating-system font fallback should not be assumed.

For Korean text in generated social images, the image generation path must explicitly load a font with Korean glyph coverage, such as `Noto Sans KR`. Fonts that work for Latin text may produce tofu boxes or missing glyphs for Korean text in generated `*-og-image.webp` assets.

When changing social image behavior:

1. Run a Quartz build.
2. Inspect at least one generated `*-og-image.webp` file that contains Korean text.
3. Inspect the emitted Open Graph/Twitter Card meta tags, including `og:image`, `twitter:image`, and `og:image:type`.

For WebP social images, `og:image:type` should be emitted as `image/webp`.

## Cloudflare Pages deployment policy

This repository is deployed through Cloudflare Pages.

Cloudflare Pages should generally use the Quartz build command unless the project intentionally adopts stricter deployment gates. Adding `npm run check` to the deployment command changes the deployment policy: it can block deployments for TypeScript or formatting issues that are unrelated to generated output.

Recommended interpretation:

- Quartz build success indicates that the static site generation path completed.
- `npm run check` success indicates that the repository passed stricter development quality checks.
- These signals should both be useful, but they should not be conflated.

## Runtime requirements

Use a Node.js version compatible with `package.json` `engines`. At the time of writing, the project requires Node.js 22 or newer.

If multiple Node versions are installed, verify the active version before running build or validation commands:

```bash
node -v
npm -v
```

## Generated output

The `public/` directory is generated by Quartz. Avoid hand-editing generated files. If generated output is wrong, fix the source configuration, component, plugin, or content that produced it, then rebuild.
