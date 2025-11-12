# Original Scaffolding: "From the First Monday to the AI Age"

This folder contains the original scaffolding files generated for the digital text as a point of reference and documentation of the agentic coding process.

## Files Included

### 1. `first_monday_original.md`
The original Markdown file created for the digital text, featuring:
- Jekyll-compatible YAML front matter
- Full semantic HTML structure with placeholders
- Table of Contents with anchor links
- Six main sections with content scaffolding:
  - Abstract
  - Introduction (with blockquote)
  - Methodology (with AI disclaimer)
  - Distant Reading Graphics & Results (with visualization containers)
  - Agentic Coding Applications (with example interaction blocks)
  - Reflections & Conclusions (with future work callout)
  - Appendices (with expandable details)
- All image containers linked to `/assets/EveryFirstMonday/` visualizations
- Scrollable galleries for line graphs (undergraduate and background corpus trends)
- Interactive visualization placeholders

### 2. `first_monday.js`
JavaScript enhancements providing:
- **Active TOC Highlighting** — Updates visual state as user scrolls through sections
- **Smooth Scrolling** — TOC links navigate with proper header offset
- **Copy-to-Clipboard** — Hover-enabled buttons on code blocks
- **Intersection Observer** — Optional lazy loading for images (commented out)
- Mobile-friendly interactions

### 3. `text.html`
Custom Jekyll layout (`_layouts/text.html`) providing:
- Complete HTML5 structure with semantic markup
- All styling embedded (CSS variables for dark/light mode)
- Responsive design with proper spacing and typography
- Print-friendly styles with page break handling
- Accessibility features (skip link, proper heading hierarchy)
- Integration with site-wide Jekyll includes (header, footer, theme-toggle)

## Context: Agentic Coding Process

This scaffolding was generated through collaborative interaction with **Claude Code** (Anthropic), demonstrating:

1. **Specification-Driven Development** — All files generated from the CLAUDE.md specification in the `_texts/EveryFirstMonday/` folder
2. **Semantic HTML Generation** — Proper Jekyll integration with YAML front matter and layout inheritance
3. **Responsive CSS** — CSS variables aligned with site theme (dark mode default, gold accent colors)
4. **Interactive JavaScript** — Client-side enhancements for smooth navigation and user engagement
5. **Accessibility First** — WCAG AA color contrast, focus styles, semantic elements

## How This Scaffolding Works

When deployed on the live site (`garrett-ferrara.github.io`), the scaffolding:

- Uses the Jekyll `_texts` collection to automatically route files to `/texts/:name/`
- Inherits the site layout via `_layouts/text.html`
- Loads all visualizations from `/assets/EveryFirstMonday/` (word cloud, heatmap, area plot, line graphs)
- Provides smooth TOC navigation with active section highlighting
- Renders in both dark mode (default) and light mode via site theme toggle

## Placeholder Convention

All content placeholders follow the format:
```html
<p class="placeholder">[Description of content that Garrett will write]</p>
```

These are easily searchable and replaceable with final prose once research is complete.

## References

- **Original Specification**: `_texts/EveryFirstMonday/CLAUDE.md`
- **Live Page**: `http://localhost:4000/texts/first_monday/` (local dev) or `https://garrett-ferrara.github.io/texts/first_monday/` (production)
- **Supporting Assets**: `/assets/EveryFirstMonday/` (visualizations and data)

---

Generated: November 2, 2025
Tool: Claude Code (Anthropic)
Purpose: Agentic coding scaffolding for graduate digital text project
