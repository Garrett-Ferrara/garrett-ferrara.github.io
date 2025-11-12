# Portfolio Site Build Specification

Build a production-ready portfolio site for **Garrett Richard Ferrara** and deploy via **GitHub Pages (Jekyll, simplest path)** to the repository `garrett-ferrara/garrett-ferrara.github.io`. Produce a full repo with code, content, and docs exactly as specified.

## PURPOSE

Hybrid professional + academic portfolio. Primary audience: hiring managers and MA capstone evaluators. The majority of past work is cleared/NDA; only publishable materials appear here.

## IA / ROUTES

- `/` → "About" landing (this is the Home page)
- `/portfolio` → portfolio index + artifact detail pages
- `/cv` → HTML CV rendered from markdown + print-to-PDF button
- `/texts` → simple list of selected writings/notes (markdown collection, optional starter)
- `/tech` → links to GitHub repos and tech projects
- `/contact` → contact page with Formspree form

Header nav (desktop + mobile): **Home · CV · Texts · Tech · Contact**
Footer: LinkedIn only (+ email obfuscated), global disclaimer.

## BRAND & THEME

- **Dark mode by default** (accessible, AA contrast). Provide a light-mode toggle stored in `localStorage`.
- Color tokens (CSS variables) — *use these exact names so Garrett can tweak later*:
  ```
  :root {
    --bg: #0f172a;        /* slate-900 */
    --card: #111827;      /* gray-900 */
    --paper: #f8fafc;     /* off-white for light/print */
    --text: #e5e7eb;      /* gray-200 */
    --muted: #aab2c8;     /* slate-400ish */
    --accent: #c79b3b;    /* gold/bronze */
    --accent-contrast: #1a1a1a;
    --link: #d4af37;      /* slightly brighter gold for links */
    --link-hover: #f1c453;
    --border: #1f2937;    /* slate-800 */
    --focus: #fde68a;     /* soft gold focus ring */
  }
  ```
- Typography: system-ui stack for zero-setup; optional Inter if you include a no-FOIT font-display swap.
- Wordmark = full name (no monogram). Provide a simple typographic lockup in header.

## TECHNOLOGY

- **Jekyll** (GitHub Pages native, no Actions needed).
- No heavy JS frameworks. Vanilla JS for theme toggle and filters.
- Structure:
  - `/_config.yml` (collections + permalinks)
  - `/_layouts/` (`default.html`, `page.html`, `artifact.html`, `cv.html`)
  - `/_includes/` (head meta, header, footer, nav, analytics placeholder, theme-toggle)
  - `/_data/site.yml` (name, tagline, email, linkedin, etc.)
  - `/assets/` (site.css, favicon, og.png)
  - `/portfolio/` (index.md + artifact .md files via `artifacts` collection)
  - `/cv.md`, `/index.md`, `/texts/index.md`, `/repos.md`, `/contact.md`
  - `/README.md`

## ACCESSIBILITY & META

- WCAG AA contrast, focus-visible styles, skip-to-content link.
- Per-page `<title>`, meta description, canonical, OG/Twitter cards. Provide `/assets/og.png`.
- Lighthouse ≥95 across categories.

## GLOBAL DISCLAIMER

Add to footer:
"Most of my professional work was completed while cleared or under NDA. The materials featured here are publicly shareable selections and academic projects."

## ANALYTICS & CONTACT

- **Analytics**: none by default (leave placeholder include that injects Plausible/GA4 if IDs added later).
- **Contact form**: Formspree with placeholder `action` and spam-honeypot. Show an email mailto link as fallback.

## CONTENT MODEL

### Config

`_config.yml`
```yaml
title: "Garrett Richard Ferrara"
url: "https://garrett-ferrara.github.io"
permalink: pretty
collections:
  artifacts:
    output: true
    permalink: /portfolio/:name/
defaults:
  - scope: {path: "", type: "artifacts"}
    values: {layout: artifact}
```

`_data/site.yml`
```yaml
name: "Garrett Richard Ferrara"
tagline: "Intelligence Production • Narrative Risk • OSINT Methods"
email: ""          # TODO
linkedin: ""       # TODO full profile URL
github: "https://github.com/garrett-ferrara"
location: "Orlando, FL"
disclaimer: "Most of my professional work was completed while cleared or under NDA. The materials featured here are publicly shareable selections and academic projects."
about_short: >
  Analyst and editor integrating writing theory, intelligence tradecraft, and knowledge management to move the right information to the right hands at the right time.
```

### Pages

`/index.md` (Home / About)
Front matter:
```yaml
---
layout: page
title: "About"
description: "Hybrid professional + academic portfolio."
hero_ctas:
  - label: "View Portfolio"
    href: "/portfolio/"
  - label: "Download CV"
    href: "/cv/"
---
```

Body (seed copy): short 3–5 sentence BLUF derived from `about_short`, then a compact highlights section linking to the three main artifacts (Alethea, First Monday, LLM Analysis). Include the NDA note inline.

`/portfolio/index.md`
```yaml
---
layout: page
title: "Portfolio"
description: "Selected public work and academic projects."
---
```

Auto-list `site.artifacts` sorted by `weight` then `date`. Add simple tag pills (client-work, OSINT, academic, methods). Filter client-side (vanilla JS).

`/cv.md`
```yaml
---
layout: cv
title: "Curriculum Vitae"
description: "Degrees, professional experience, and training."
order:
  - Degrees
  - Professional Experience
  - Training
---
```

Seed sections with headings only and TODO markers. Include a "Print / Save as PDF" button that calls `window.print()`. Ensure print CSS flips to light background, dark text, removes nav, and reveals full links.

`/texts/index.md`
A simple list (ul) of markdown links. Start with a TODO paragraph.

`/repos.md`
List pinned repos (read from a small YAML block or hardcode links). TODO placeholders are fine.

`/contact.md`
Formspree form:
- fields: name, email, message, hidden honeypot.
- `action="https://formspree.io/f/your-id-here"` as TODO.
- Show a mailto link as fallback.

### Artifacts (collection)

Create **four** artifact files. Use provided text verbatim where specified; otherwise add clear TODO blocks.

1) `/portfolio/alethea-case-studies.md`
```yaml
---
title: "Alethea Influence Operation Case Studies"
summary: "Four public case studies reflecting end-to-end guidance from planning through developmental editing to final proofing."
role: "Managing Editor, Alethea Analysis Team"
tags: ["OSINT", "Editorial Leadership", "Influence Operations", "Methodology"]
date: 2024-06-30
weight: 1
---
```

**Context**
As Managing Editor of Alethea's Analysis Team, I edited nearly 10,000 pages of intelligence reporting. While most work remains confidential, the public case studies below illustrate how raw data and disparate observations were transformed into coherent strategic intelligence. My role included synthesizing technical findings (e.g., network analysis), establishing key intelligence questions, and shaping narratives for policymakers, journalists, and security professionals. Final visual layouts were compiled by contracted designers.

#### Silicon Valley Bank Crisis Analysis
Tracked disinformation narratives during the March 2023 bank collapse, identifying how venture capitalist communications, foreign state media, and "go woke, go broke" rhetoric amplified financial panic and contributed to the crisis.

#### Spamou-Gabbing: Chinese Influence Operation
Documented the first confirmed expansion of China's Spamouflage Dragon campaign to American alternative social platforms, revealing coordinated efforts to target right-wing audiences on Gab while spreading pro-CCP messaging about Xinjiang, dissidents, and rare earth mining.

#### Stormkiller: Russian IO Coverup
Exposed Russian influence networks' shift to deflecting blame for their own operations after DOJ indictments, including fabricated statements from disinformation experts claiming Ukraine was responsible for Russian influence campaigns targeting the 2024 election.

#### Writing with Invisible Ink
Uncovered a sophisticated Russian military intelligence (GRU) network of 5,314 X accounts using novel evasion tactics to amplify Doppelgänger content, revealing a strategic shift from broad division to targeting Western support for Ukraine through conservative-leaning narratives.

> **Note:** Titles, emphasis, and callouts were developed collaboratively; final layouts by vendors. Only public, shareable material is presented here.

2) `/portfolio/first-monday-corpus.md`
```yaml
---
title: "First Monday Scraper & Corpus"
summary: "Agentic coding + research design to build a clean corpus of 2,710 articles across 359 issues (1996–2025) with 100% extraction success."
role: "Researcher & Technical Lead"
tags: ["Agentic Coding", "Web Scraping", "Corpus Building", "Academic Methods"]
date: 2025-08-20
weight: 2
---
```

**Technical Development Through AI Collaboration**
Working iteratively with Claude Code in VS, I directed a web scraping system that extracted 2,710 articles from 359 issues (1996–2025). Challenges included platform migrations (legacy HTML → OJS), changing metadata schemas, and ethical crawling with robust error handling and checkpointing.

**Research Design and Quality Assurance**
I established the research framework, validation protocols, and QA standards—dual parsing strategies (legacy + modern), ISO 8601 date normalization, and documentation/validation reports—to ensure research-grade data quality.

**Academic Impact and Methodology**
The resulting corpus supports thin/distant analysis of internet research trends, author-network mapping, and citation analysis across foundational digital-studies literature—demonstrating effective human-AI collaboration.

> **Stack & Ethics:** Requests throttled; robots and ToS respected; retries and idempotent checkpoints; transparent provenance docs included.

3) `/portfolio/llm-comparative-prompt-analysis.md`
```yaml
---
title: "LLM Comparative Prompt Analysis"
summary: "Cross-model prompt set evaluation to surface hallucination, policy variance, jailbreak patterns, and reputational risk."
role: "Designer & Analyst"
tags: ["LLM Evaluation", "Risk Analysis", "Prompt Engineering"]
date: 2025-07-30
weight: 3
---
```

**TODO:** Garrett will add 3–6 sentence overview + publishable assets (sample prompts, redacted tables/figures).
Sections scaffolded:
- Scope
- Method (models, sampling, scoring, variance detection)
- Findings (redacted examples)
- Risk Taxonomy (hallucinations, defamation, security leakage, policy variance, jailbreak susceptibility)
- Next Steps

4) `/portfolio/select-assignments.md`
```yaml
---
title: "Select Graduate Assignments"
summary: "Representative academic work from the M.A. in Rhetoric & Composition."
role: "Graduate Researcher"
tags: ["Academic Writing", "Methods", "Rhetoric"]
date: 2025-09-01
weight: 4
---
```

**TODO:** Garrett will list 3–6 assignments with a one-liner and a link (PDF/Drive) for each.

## LAYOUTS & COMPONENTS

- `default.html` wraps pages with `<header>`, `<main>`, `<footer>`. Include skip link and theme toggle.
- `page.html` for standard content pages; `artifact.html` for portfolio items (title, summary, role, tags, date, body, "Back to portfolio").
- `cv.html` adds print stylesheet (force light background, serif stack optional for print).
- `assets/site.css`: implement tokens, responsive grid, focus, code blocks, callouts, tag pills, buttons (accent gold with accessible hover), link underline offset.
- Add a simple client-side filter on `/portfolio` (checkbox/tag pills).

## HEADER/FOOTER CONTENT

Header: wordmark (full name), nav (Home, CV, Texts, Repos, Contact), theme toggle.
Footer: © current year, LinkedIn link from `site.yml`, email (obfuscated), global disclaimer from `site.yml.disclaimer`.

## GITHUB PAGES

- No Actions required. Ensure the repo builds on Pages defaults.
- `README.md` must include:
  - Local dev: `bundle install` then `bundle exec jekyll serve`
  - How to edit nav items
  - How to add artifacts (front matter fields and `weight`)
  - How to set Formspree action and add LinkedIn URL
  - How to tweak colors and enable light mode default if desired

## DEPLOYMENT & GITHUB PAGES

### Repository Setup
- Created at: `https://github.com/Garrett-Ferrara/garrett-ferrara.github.io`
- Default branch: `main`
- GitHub Pages: Enabled, source = `main` branch, root directory `/`
- HTTPS: Enforced
- Build type: Legacy (Jekyll native, no Actions needed)
- Status: Live and building automatically

### Deployment Instructions

1. **Initial Setup (Already Completed)**
   - Repository created under Garrett-Ferrara account
   - All code pushed to main branch
   - GitHub Pages configured and building

2. **Local Development**
   ```bash
   cd C:\Users\ferra\DevProjects\Garrett-Ferrara-GitHubPage
   bundle install
   bundle exec jekyll serve
   # Visit http://localhost:4000
   ```

3. **Making Updates**
   ```bash
   # Edit any file
   git add .
   git commit -m "Your change description"
   git push origin main
   # GitHub Pages rebuilds automatically (1-2 minutes)
   ```

4. **Verifying Deployment**
   - Visit: `https://garrett-ferrara.github.io`
   - Check repository: `https://github.com/Garrett-Ferrara/garrett-ferrara.github.io`
   - Main branch shows latest commits
   - GitHub Pages builds on every push to main

### Configuration Files After Deployment

See the following files for current configuration:
- `_data/site.yml` — Site metadata (name, email, LinkedIn, location, disclaimer)
- `_config.yml` — Jekyll configuration (title, URL, collections, defaults)
- `.gitignore` — Proper Git ignore rules for Jekyll projects
- `Gemfile` — Ruby dependencies (Jekyll, kramdown, bundler)

### Important Notes

- **Don't modify** the Formspree action URL in `contact.md` unless you've set up a Formspree account
- **Dark mode only** — No light mode toggle (forced dark blue #111827 and gold #c79b3b theme)
- **All CSS variables** in `assets/site.css` can be customized
- **Content TODOs** remain in artifact files 3 and 4 for user to complete
- **WCAG AA accessibility** is built-in (verified for dark mode only)

## GIT WORKFLOW

**CRITICAL: Do NOT push to GitHub automatically. Only push after user verification.**

1. **Make changes locally** and commit with `git commit -m "..."`
2. **User verifies changes** by viewing at `http://localhost:4000` in browser
3. **User confirms** the changes look correct
4. **Only then** push with `git push origin main`

This prevents live site changes that haven't been tested locally first.

## IMAGE HANDLING

**Image Tracking:** All presentation images (PNG, JPG) are tracked directly in git, not via Git LFS.

**Image Locations:**
- `/assets/fm_presentation/` - Presentation analysis images (analysis_*.png)
- `/assets/EveryFirstMonday/` - Working files and supporting materials

**Note:** Images may take 1-2 minutes to appear on the live GitHub Pages site after pushing, as GitHub rebuilds the site. They will always be visible locally at `http://localhost:4000`.

## TURN IN

- ✓ Full repo tree with 31 files
- ✓ Placeholder og.png + favicon (auto-generated)
- ✓ Clean commit history (5 logical commits)
- ✓ Comprehensive documentation (README, QUICK_START, IMPLEMENTATION_SUMMARY, DEPLOYMENT_VERIFIED)
- ✓ Repository live on GitHub at `garrett-ferrara.github.io`
- ✓ GitHub Pages configured and auto-building
