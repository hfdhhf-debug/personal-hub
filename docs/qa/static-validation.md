# Static Validation

Date: 2026-06-16

Validated without npm dependencies because npm registry access is currently blocked.

## Result

`static validation passed`

## Covered

- Required files exist:
  - `index.html`
  - `src/styles/global.css`
  - `src/data/sites.ts`
  - `src/components/DirectoryLinks.astro`
  - `README.md`
  - `design-qa.md`
  - `docs/deploy/static-site.md`
  - `docs/design-references/personal-hub-v1-selected-style.svg`
  - `public/favicon.svg`
  - `public/site.webmanifest`
  - `public/robots.txt`
  - `public/sitemap.xml`
- `index.html` references `src/styles/global.css`.
- Required anchors exist: `home`, `featured`, `about`, `blog`, `nav`, `works`, `tools`.
- Directory anchors exist: `directory`, `dir-blog`, `dir-nav`, `dir-works`, `dir-tools`.
- Four featured rows are present.
- Four directory groups are present.
- Theme toggle and mobile menu hooks are present.
- Global focus style is present.
- Mobile breakpoint at `max-width: 560px` is present.
- SEO/PWA support files are present.

## Counts

- Links in `index.html`: 32
- Featured rows: 4
- Directory groups: 4
- `index.html`: 14589 bytes
- `src/styles/global.css`: 16445 bytes

## Still Blocked

- Astro build verification needs `npm install`.
- Browser screenshot QA needs working local browser capture.
