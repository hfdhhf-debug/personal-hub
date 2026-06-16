# Design QA

Reference: `docs/design-references/personal-hub-v1-selected-style.svg`

## Checks

- Static validation: passed. Required files, stylesheet link, primary anchors, orbit nodes, featured rows, directory groups, SEO/PWA support files, theme toggle, mobile menu hook, focus style, and mobile breakpoint are present.
- Desktop layout: pending browser capture. Static structure has the selected hero split, orbit navigation, featured list, about section, and footer.
- Mobile layout: pending browser capture. CSS includes a mobile breakpoint that converts the orbit into stacked entry rows and the featured grid into one column.
- Visual hierarchy: implemented through large left hero copy, orbit entry cluster, section dividers, featured rows, and categorized directory groups.
- Link affordance: implemented through anchors, arrow affordances, hover states, and focus states.
- Text overflow: CSS includes constrained widths, wrapping hero text, and ellipsis for list metadata.
- Accessibility focus states: `:focus-visible` is defined globally; key entries are links or buttons.

## Blockers

- `npm install` is blocked by `EACCES` when fetching from `https://registry.npmjs.org`, so Astro build verification has not run.
- Headless Chrome/Edge screenshot capture exits with `-2147483645` on this machine.
- Computer Use stopped when it could not confidently verify the active browser URL.

final result: blocked
