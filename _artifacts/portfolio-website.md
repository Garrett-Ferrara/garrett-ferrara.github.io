---
title: "Portfolio Website"
summary: "Responsive dark-mode-first Jekyll portfolio built with accessible design, semantic HTML, and CSS variables for rapid theming."
role: "Designer & Developer"
tags: ["Web Design", "Jekyll", "CSS", "Responsive Design"]
date: 2025-11-02
weight: 7
github: "https://github.com/Garrett-Ferrara/garrett-ferrara.github.io"
---

## Overview

A clean, accessible portfolio website built with **Jekyll** on GitHub Pages. The site emphasizes readability, professional presentation, and maintainability—leveraging semantic HTML, CSS custom properties, and vanilla JavaScript for an enhanced user experience without framework overhead.

## Key Features

### Design & Accessibility
- **Dark mode by default** with manual light-mode toggle (localStorage persistence)
- **WCAG AA contrast** verified across both color schemes
- **Focus-visible** styles for keyboard navigation
- **Skip-to-content** link for screen reader users
- **Semantic HTML5** structure with proper heading hierarchy

### Typography & Layout
- **System font stack** (system-ui) for zero-setup, fast rendering
- **Responsive grid** and flexbox layouts
- **Golden-ratio** spacing and scale
- **Readable line lengths** and generous whitespace

### CSS Architecture
- **Custom properties** (CSS variables) for rapid theming and maintainability
- **Color tokens**: `--bg`, `--card`, `--text`, `--accent` (gold/bronze), `--muted`, `--border`, `--focus`
- **Modular component styles** for cards, buttons, tags, forms
- **Print-friendly** stylesheets for CV export

### Technical Stack
- **Jekyll** with GitHub Pages native builds (no Actions/build tools)
- **Collections** for organizing artifacts and portfolio items
- **Liquid templating** for DRY layouts and content reuse
- **Markdown front matter** for flexible metadata

## Content Organization

- **Home** (`/`) — About landing with highlights
- **Portfolio** (`/portfolio/`) — Artifact index with client-side filtering
- **CV** (`/cv/`) — HTML rendering from Markdown with print-to-PDF support
- **Contact** (`/contact/`) — Formspree integration with fallback mailto link

## Repository

**[View on GitHub](https://github.com/Garrett-Ferrara/garrett-ferrara.github.io)** — Full source code, deployment instructions, and local development setup.

## Development

**Local preview:**
```bash
bundle install
bundle exec jekyll serve
# Visit http://localhost:4000
```

**Deployment:**
All commits to `main` branch automatically trigger GitHub Pages rebuilds (1-2 minutes).

## Motivation

This site demonstrates:
- Opinionated but minimal design choices (dark mode, gold accents, system fonts)
- Accessible-by-default approach (contrast, focus, semantic HTML)
- Pragmatic tech stack (Jekyll + vanilla JS, no React/Vue overhead)
- Maintainable CSS with custom properties for rapid iteration
- Professional portfolio structure suited for hiring managers and evaluators
