# Claude Code Prompt: Accessible, Filterable, Polished CV Page

You are working in my GitHub Pages / Jekyll portfolio repository. I need you to redesign and rebuild my CV page to be:

- **Interactive** (filterable thematically)
- **Accessible** (contrast, readability, headings)
- **Consistent** with the site’s color palette (white/yellow text on dark blue background)
- **Printable** with strong contrast, no broken colors, and fully expanded content
- **Structured** using a central JSON resume data file
- **Cleanly formatted** with bullet points instead of hyphenated paragraphs

## 1. Core Feature: Master Resume JSON + Tag Filters

Create `_data/resume.json` containing all content from my current CV:

- Degrees
- Professional Experience (all roles and bullet points)
- Training
- Skills & Certifications

### 1.1 Add tag metadata for professional bullets

Use these tags:

- `highlights`
- `leadership`
- `intel_analysis`
- `writing_editing`
- `km_it`

Each bullet can have multiple tags.

### 1.2 Use JSON for all content

All content must be generated from `_data/resume.json` rather than hard-coded in the markdown file.

## 2. UI/UX Improvements Required by Peer Review

### 2.1 Move and Pair the PDF Note + Print Button

- Place the PDF note directly under the Print button at the top.
- Remove the bottom note entirely.

### 2.2 Accessibility & Color Consistency Improvements

- Section headers must use the same yellow as the Home Page.
- Skill sub-headings must be white for consistency.
- All print-mode text must be black on white.

Include this in the print stylesheet:

```
@media print {
  * {
    color: #000 !important;
    background: transparent !important;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
}
```

### 2.3 Bullet-Point Formatting

- Convert all experience descriptions to proper `<ul><li>` bullets.
- Remove hyphens.
- Ensure spacing and readability.

### 2.4 Correct Degree Title

Update MA degree to:

**Master of Arts in English — Rhetoric & Composition Track**

## 3. Filterable Professional Experience

Add a filter bar with:

- All  
- Highlights  
- Leadership  
- Intelligence Analysis  
- Writing & Editing  
- KM / IT  

### Behavior Requirements

- Show bullets matching the selected tag.
- Hide job blocks with zero visible bullets.
- Disable filter impacts when printing.

## 4. Layout Changes for Readability

1. Print Button  
2. PDF Note  
3. Degrees  
4. Professional Experience + Filters  
5. Training  
6. Skills & Certifications  

### Spacing

- Increase vertical spacing between major sections.
- Add subtle separators.

## 5. Print / PDF Requirements

When printing:

- Expand all content regardless of filter.
- Hide filter bar.
- Ensure bullet lists are fully visible.

## 6. Code & File Changes

### A. Create `_data/resume.json`

Includes:

- Updated degrees
- All jobs + tagged bullets
- All training items
- Skills arrays

### B. Rewrite `cv.md`

- Use Liquid loops
- Add filter UI
- Use bullet lists
- Ensure yellow headers
- Place print button + note at top

### C. Add/modify CSS

- Yellow headers
- Bullet spacing
- Print overrides

### D. Add JS for filtering

- Based on existing portfolio filter logic
- Accessible
- Keyboard-friendly

## 7. Must-Haves Summary

- JSON resume
- Thematic filters
- Bullet formatting
- Accessible contrast
- Corrected degree title
- Print button + note at top
- Fixed print readability

