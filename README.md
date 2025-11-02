# Garrett Richard Ferrara — Portfolio Site

A production-ready portfolio site built with [Jekyll](https://jekyllrb.com/) and hosted on [GitHub Pages](https://pages.github.com/). This repo contains the complete source code for `garrett-ferrara.github.io`.

## Quick Start

### Prerequisites

- Ruby 3.0 or higher
- Bundler (`gem install bundler`)
- Git

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/garrett-ferrara/garrett-ferrara.github.io.git
   cd garrett-ferrara.github.io
   ```

2. **Install dependencies:**
   ```bash
   bundle install
   ```

3. **Serve locally:**
   ```bash
   bundle exec jekyll serve
   ```

   The site will be available at `http://localhost:4000`

4. **Build for production:**
   ```bash
   bundle exec jekyll build
   ```

## Directory Structure

```
garrett-ferrara.github.io/
├── _artifacts/              # Portfolio case studies (collection)
├── _data/
│   └── site.yml            # Site configuration (name, email, LinkedIn, etc.)
├── _includes/              # Layout partials
│   ├── head.html
│   ├── header.html
│   ├── footer.html
│   ├── nav.html
│   ├── theme-toggle.html
│   └── analytics.html
├── _layouts/               # Page templates
│   ├── default.html        # Base layout
│   ├── page.html           # Standard pages
│   ├── artifact.html       # Portfolio items
│   └── cv.html             # CV with print styles
├── assets/
│   ├── site.css            # Main stylesheet (with design tokens)
│   ├── og.png              # Open Graph image
│   └── favicon.ico
├── portfolio/
│   └── index.md            # Portfolio index with filtering
├── texts/
│   └── index.md            # Writings and notes
├── _config.yml             # Jekyll configuration
├── index.md                # Home page
├── cv.md                   # Curriculum Vitae
├── tech.md                 # Tech projects and repositories
├── contact.md              # Contact form
└── README.md               # This file
```

## Configuration

### Site Metadata (`_data/site.yml`)

Update your site information:

```yaml
name: "Garrett Richard Ferrara"
email: "your.email@example.com"           # TODO: Add your email
linkedin: "https://linkedin.com/in/..."   # TODO: Add your LinkedIn profile URL
github: "https://github.com/garrett-ferrara"
location: "Orlando, FL"
```

### Navigation

Edit the navigation menu in `_includes/nav.html`. The current routes are:

- `/` — Home / About
- `/cv/` — Curriculum Vitae
- `/texts/` — Writings & Notes
- `/tech/` — Tech Projects & Repositories
- `/contact/` — Contact Form

To add or remove nav items, edit the `<ul class="nav-list">` in `_includes/nav.html`.

### Design Tokens (Colors & Typography)

All colors are defined in `assets/site.css` at the top of the file:

```css
:root {
  --bg: #0f172a;              /* Dark background */
  --card: #111827;            /* Card backgrounds */
  --text: #e5e7eb;            /* Main text color */
  --accent: #c79b3b;          /* Gold accent */
  --link: #d4af37;            /* Link color */
  --link-hover: #f1c453;      /* Link hover color */
  /* ... more tokens ... */
}
```

To customize the color scheme, update these CSS custom properties. The site defaults to dark mode and includes a theme toggle (dark/light) stored in `localStorage`.

To change the default to light mode, update `_includes/theme-toggle.html`:
```javascript
const isDark = stored === 'dark' || (stored === null && prefersDark);
// Change to:
const isDark = stored === 'dark' && (stored !== 'light');
```

## Content Management

### Adding Portfolio Artifacts

Create a new markdown file in `_artifacts/`:

```markdown
---
title: "Project Title"
summary: "One-line description of the project."
role: "Your Role"
tags: ["Tag1", "Tag2", "Tag3"]
date: 2025-01-01
weight: 1
---

## Section Heading

Your content here...
```

**Front matter fields:**
- `title` — Display name of the artifact
- `summary` — One-line description (used in portfolio grid)
- `role` — Your role on the project
- `tags` — Array of tags for filtering (e.g., "OSINT", "Academic Writing")
- `date` — Publication date (YYYY-MM-DD format)
- `weight` — Sort order (lower number = appears first)

Artifacts are automatically listed on `/portfolio/` and sorted by `weight` then `date`.

#### Adding PDF Preview Images

To enhance portfolio artifacts with preview images on the portfolio grid, follow these steps:

**Option 1: Using macOS Preview or Online Tools (Easiest)**
1. Open your PDF in Preview (macOS) or any PDF viewer
2. Take a screenshot of the first page (keyboard: Cmd+Shift+4 on Mac, Print Screen on Windows)
3. Crop to show just the relevant content
4. Save as PNG (e.g., `artifact-preview.png`)
5. Place in `assets/portfolio-previews/`

**Option 2: Using ImageMagick (Free Command-Line Tool)**
```bash
# Install ImageMagick (Windows: use Chocolatey)
# brew install imagemagick  (macOS)
# choco install imagemagick (Windows)

# Convert first page of PDF to PNG
convert -density 150 path/to/document.pdf[0] -quality 85 assets/portfolio-previews/document-preview.png
```

**Option 3: Using Ghostscript (Free, Cross-Platform)**
```bash
# Install Ghostscript: https://www.ghostscript.com/download/gsdnld.html

# Convert first page to PNG
gswin64c -sDEVICE=pngalpha -r150 -o output.png input.pdf
```

**Option 4: Online PDF to Image Converter**
- Visit [ilovepdf.com](https://www.ilovepdf.com/pdf_to_jpg) or [pdfconvert.me](https://pdfconvert.me/)
- Upload PDF, select first page only, download as PNG
- Save with descriptive name in `assets/portfolio-previews/`

**Preview Image Best Practices:**
- **Size:** 400px × 500px (or similar 4:5 ratio)
- **Format:** PNG (transparent background) or JPG
- **Quality:** 85-90% quality to keep file size under 200KB
- **Naming:** Use kebab-case, e.g., `alethea-case-studies-preview.png`

**To Display in Portfolio Grid:**

Add to your artifact's front matter:
```yaml
---
title: "Your Artifact"
summary: "..."
preview_image: "assets/portfolio-previews/artifact-preview.png"
---
```

Then in `portfolio/index.md`, update the card display:
```html
{% if artifact.preview_image %}
  <img src="{{ artifact.preview_image }}" alt="{{ artifact.title }}" class="artifact-preview-image">
{% else %}
  <!-- existing PDF/repo preview -->
{% endif %}
```

### Editing the Home Page

Edit `index.md` to update the About section, tagline, and call-to-action buttons.

### Updating Your CV

Edit `cv.md` with your degrees, professional experience, and training. The page includes a "Print / Save as PDF" button that calls `window.print()`.

### Adding Writings/Notes

Edit `texts/index.md` to add links to your published pieces, essays, and research notes.

### Adding Repositories

Edit `repos.md` to highlight your key GitHub projects.

### Contact Form

To enable the contact form on `/contact`:

1. Create a free account at [Formspree](https://formspree.io/)
2. Create a new form and copy your form action ID
3. Update the `action` attribute in `contact.md`:
   ```html
   action="https://formspree.io/f/YOUR-FORM-ID-HERE"
   ```

## Styling & Customization

### Adding Custom CSS

Add additional styles to `assets/site.css`. The stylesheet is organized into sections:

- **Design Tokens** — Color and typography variables
- **Base Styles** — HTML resets and defaults
- **Header** — Navigation and theme toggle
- **Typography** — Heading and text styles
- **Layouts** — Page, artifact, and CV specific styles
- **Responsive** — Mobile breakpoints (768px)
- **Print** — Print stylesheet for PDF export

### Theme Toggle

The theme toggle is built into the header and uses `localStorage` to persist the user's preference. To disable the theme toggle, remove the button from `_includes/header.html`.

### Client-Side Filtering

Portfolio filtering uses vanilla JavaScript (no frameworks). Edit the filter logic in `portfolio/index.md` to change which tags are filterable.

## Accessibility

The site includes:

- **Skip-to-content link** — Keyboard navigation
- **Focus-visible styles** — Clear focus indicators on all interactive elements
- **WCAG AA contrast** — All text meets AA contrast requirements (dark mode and light mode)
- **Semantic HTML** — Proper heading hierarchy, alt text, ARIA labels
- **Meta tags** — Per-page titles, descriptions, OG/Twitter cards

## Analytics

By default, analytics is disabled. To enable analytics (Plausible, Google Analytics, etc.), edit `_includes/analytics.html` and add your tracking code.

Example for Plausible:
```html
<script defer data-domain="garrett-ferrara.github.io" src="https://plausible.io/js/script.js"></script>
```

## Deployment

This site is automatically deployed to GitHub Pages when you push to the `main` branch.

### First-Time Setup

1. Create a repository named `garrett-ferrara.github.io` on GitHub (replace with your username)
2. Push this repo to GitHub
3. Go to repository **Settings** → **Pages**
4. Ensure **Source** is set to `main` branch
5. Your site will be live at `https://garrett-ferrara.github.io` in a few minutes

### Building & Deploying

Simply push changes to `main`:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

GitHub Pages will automatically build and deploy your changes.

## Performance & Accessibility

### Lighthouse Audit

Run a Lighthouse audit to check performance, accessibility, SEO, and best practices:

1. Open your site in Chrome
2. Press `Ctrl+Shift+I` (or `Cmd+Shift+I` on Mac) to open DevTools
3. Click the **Lighthouse** tab
4. Click **Analyze page load**

Target scores: **≥95** across all categories.

### Testing Locally

To test the site before pushing:

```bash
bundle exec jekyll serve
```

Then open `http://localhost:4000` and navigate through pages. Test:

- Dark/light theme toggle
- Portfolio filtering
- CV print functionality
- Contact form
- Mobile responsiveness (resize browser)
- Keyboard navigation (Tab key)

## Troubleshooting

### Jekyll won't install

Ensure you have Ruby 3.0+:
```bash
ruby --version
```

If you need to update Ruby, use [rbenv](https://github.com/rbenv/rbenv) or [RVM](https://rvm.io/).

### Changes not appearing locally

Clear Jekyll cache:
```bash
rm -rf _site .jekyll-cache
bundle exec jekyll serve
```

### Contact form not working

1. Check that you've added your Formspree action ID to `contact.md`
2. Test submission — check your email (not spam folder)
3. Visit [Formspree dashboard](https://formspree.io/) to confirm the form was received

### Theme toggle not working

Ensure `_includes/theme-toggle.html` is included in `_layouts/default.html`. Check browser console (DevTools) for JavaScript errors.

## Next Steps Checklist

- [ ] Update `_data/site.yml` with your email and LinkedIn profile
- [ ] Update `index.md` with your About section
- [ ] Update `cv.md` with your education and experience
- [ ] Complete TODO items in artifact files (`_artifacts/`)
- [ ] Add links to your writings in `texts/index.md`
- [ ] Add your GitHub repositories to `repos.md`
- [ ] Set up Formspree form and add action ID to `contact.md`
- [ ] Customize colors in `assets/site.css` if desired
- [ ] Replace `assets/og.png` with a branded Open Graph image
- [ ] Replace `assets/favicon.ico` with your logo/initials
- [ ] Test site locally: `bundle exec jekyll serve`
- [ ] Run Lighthouse audit (target ≥95)
- [ ] Push to GitHub and verify at `https://garrett-ferrara.github.io`
- [ ] Optional: Add analytics via `_includes/analytics.html`
- [ ] Optional: Add custom domain (GitHub Pages settings)

## Resources

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Markdown Guide](https://www.markdownguide.org/)
- [WCAG Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Formspree](https://formspree.io/) — Contact form service

## License

This portfolio template is provided as-is. Feel free to customize and deploy your own version.

---

**Built with Jekyll & GitHub Pages**
