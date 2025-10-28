# Quick Start Guide

Your portfolio site is built and ready. Follow these steps to get it live.

## Step 1: Update Your Information (10 minutes)

**File: `_data/site.yml`**
```yaml
email: "your.email@example.com"
linkedin: "https://linkedin.com/in/your-profile"
```

## Step 2: Update Content (30 minutes)

Fill in TODO sections in:
- `index.md` — About section (optional, we provided seed content)
- `cv.md` — Your degrees, experience, training
- `texts/index.md` — Links to your writings
- `repos.md` — Your GitHub repositories
- `_artifacts/llm-comparative-prompt-analysis.md` — Project overview
- `_artifacts/select-assignments.md` — Your graduate assignments

**Note:** `_artifacts/alethea-case-studies.md` and `_artifacts/first-monday-corpus.md` are complete.

## Step 3: Set Up Contact Form (5 minutes)

1. Go to https://formspree.io/
2. Create a free account
3. Create a new form, copy the form ID
4. Edit `contact.md`:
   ```html
   action="https://formspree.io/f/YOUR-FORM-ID-HERE"
   ```

## Step 4: Test Locally (10 minutes)

```bash
cd C:\Users\ferra\DevProjects\Garrett-Ferrara-GitHubPage
bundle install
bundle exec jekyll serve
```

Visit `http://localhost:4000` and test:
- Dark/light theme toggle
- Portfolio filtering
- CV print button
- Contact form
- Mobile responsiveness

## Step 5: Create GitHub Repository

1. Go to https://github.com/garrett-ferrara
2. Create a new repository named: **garrett-ferrara.github.io**
3. Initialize with README (you already have one)
4. Copy the clone URL

## Step 6: Push to GitHub

```bash
cd C:\Users\ferra\DevProjects\Garrett-Ferrara-GitHubPage
git remote add origin https://github.com/garrett-ferrara/garrett-ferrara.github.io.git
git branch -M main
git push -u origin main
```

## Step 7: Verify GitHub Pages

1. Go to your repository settings
2. Scroll to "GitHub Pages" section
3. Verify **Source** is set to `main` branch
4. Your site will be live at: **https://garrett-ferrara.github.io**

---

## That's It!

Your portfolio is live. The site will:
- Build automatically when you push changes
- Appear at `garrett-ferrara.github.io`
- Have dark mode by default with light mode toggle
- Show your portfolio artifacts with filtering
- Include your CV with print-to-PDF functionality
- Handle contact form submissions

## Customization

See `README.md` for:
- Changing colors (all in CSS custom properties)
- Adding new portfolio artifacts
- Editing navigation
- Enabling analytics
- Troubleshooting

## Done!

Your professional portfolio is ready for:
✓ Hiring managers
✓ MA capstone evaluators
✓ Research collaborators
✓ Journalists and security professionals

Share the link: **https://garrett-ferrara.github.io**
