# AGENTS.md

This repository is a Quartz v4 fork used to publish and operate a11ylab.kr.

Agents and automation tools working in this repository should first read `PROJECT_CONTEXT.md` for repository-specific context.

## Repository principles

- Preserve compatibility with upstream Quartz where practical.
- Prefer small, documented changes over broad rewrites.
- Keep project-specific customization separate from upstream Quartz behavior when possible.
- Treat `README.md` as the upstream Quartz README unless the project intentionally decides otherwise.
- Do not edit generated output in `public/` by hand unless specifically working with generated artifacts.

## Build and validation notes

- Quartz build commands generate the static site output.
- `npm run check` is a separate TypeScript and formatting quality check.
- A successful Quartz build and a successful `npm run check` are related but not equivalent.
- Do not assume a `npm run check` failure means the generated site is broken; investigate the build path and the quality-check path separately.

## Change guidance

- When changing layout, emitters, rendering utilities, or social image generation, verify with a Quartz build.
- When changing Open Graph or Twitter Card behavior, inspect the generated `*-og-image.webp` files and the emitted meta tags.
- When adding project-specific behavior, document the rationale in `PROJECT_CONTEXT.md` or another appropriate project document.
