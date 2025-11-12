---
layout: text
title: "From the First Monday to the AI Age"
subtitle: "Applying Agentic Coding to Map RhetComp Disciplinary Turns in Internet Studies Through Distant Reading"
date: 2025-11-02
description: "A distant reading analysis of disciplinary turns in Internet Studies through agentic coding."
---

<header class="text-header">
  <h1>{{ page.title }}</h1>
  <p class="subtitle">{{ page.subtitle }}</p>
  <p class="metadata">Created by Garrett Richard Ferrara | Graduate Digital Text Project | November 2025</p>
</header>

## Abstract

<p class="placeholder">[Abstract text will go here. This should summarize the research scope, methodology, and key findings.]</p>

<div class="graphics-container">
  <img src="/assets/EveryFirstMonday/EFM_Frequency_WordCloud.PNG" alt="Word cloud from First Monday corpus">
  <p class="caption">A word cloud generated in WordStat spanning the entire First Monday historical corpus.</p>
</div>

## Table of Contents

<nav class="toc" id="toc">
  <ul>
    <li><a href="#introduction">Introduction</a></li>
    <li><a href="#methodology">Methodology</a></li>
    <li><a href="#distant-reading-results">Distant Reading Graphics & Results</a></li>
    <li><a href="#agentic-coding">Agentic Coding Applications</a></li>
    <li><a href="#reflections">Reflections & Conclusions</a></li>
    <li><a href="#appendices">Appendices</a></li>
  </ul>
</nav>

## Introduction {#introduction}

> "Network sense is the awareness of connections that shape scholarly activity." — Derek Mueller, *Network Sense*

<p class="placeholder">[Opening paragraph introducing First Monday journal, its role in early internet studies, and relevance to contemporary RhetComp scholarship.]</p>

<p class="placeholder">[Paragraph connecting historical context of First Monday's founding (1996) to the emergence of internet studies as a disciplinary conversation.]</p>

<p class="placeholder">[Paragraph establishing the link between distant reading methodology and the genealogy of rhetorical approaches to digital communication.]</p>

## Methodology {#methodology}

<p class="placeholder">[Overview of data collection and distant reading methods. Explain corpus construction, n-gram selection, and analytical framework.]</p>

<div class="disclaimer-box">
  <strong>Generative AI Disclaimer:</strong>
  <p>
    The author acknowledges the use of OpenAI's ChatGPT 5 and Anthropic's Claude Sonnet 4 / Claude Code 2.0.31
    in generating the project infrastructure, data scraping tools, and visualizations.
    No AI-generated insights were included; all final content was authored and reviewed by Garrett Ferrara.
  </p>
</div>

### Data Collection Process

```
# Data collection process
# 1. Web scraping from First Monday archives (1996–2025)
# 2. Metadata extraction: title, author, date, URL
# 3. Text processing: ISO 8601 normalization, deduplication
# 4. Tokenization and n-gram extraction (2–4 word sequences)
# 5. Frequency analysis and temporal tracking
#
# [Garrett to fill in final methodological details]
```

### Analysis Framework

<p class="placeholder">[Explanation of distant reading vs. close reading, n-gram selection rationale, and how patterns in language reflect disciplinary turns.]</p>

## Distant Reading Graphics & Results {#distant-reading-results}

### Temporal Heatmap

<div class="graphics-container">
  <img src="/assets/EveryFirstMonday/temporal_heatmap.png" alt="Temporal heatmap showing n-gram frequency across years">
  <p class="caption">A heatmap displaying all ten n-grams over time (1996 and 2025 are partial years).</p>
</div>

### N-gram Area Plot

<div class="graphics-container">
  <img src="/assets/EveryFirstMonday/combined_ngram_area_plot.png" alt="Combined n-gram area plot">
  <p class="caption">An area plot showing all ten n-grams across First Monday's history, revealing overlapping and divergent trends.</p>
</div>

### Individual Trend Lines (Scrollable Gallery)

<p class="placeholder">[Undergraduate corpus trends: Identity, Discourse, Writing, Rhetoric, Composition]</p>

<div class="scrollable-gallery">
  <img src="/assets/EveryFirstMonday/lg_ug1_identity.png" alt="Identity n-gram trend (undergrad corpus)">
  <img src="/assets/EveryFirstMonday/lg_ug2_discourse.png" alt="Discourse n-gram trend (undergrad corpus)">
  <img src="/assets/EveryFirstMonday/lg_ug3_writing.png" alt="Writing n-gram trend (undergrad corpus)">
  <img src="/assets/EveryFirstMonday/lg_ug4_rhetoric.png" alt="Rhetoric n-gram trend (undergrad corpus)">
  <img src="/assets/EveryFirstMonday/lg_ug5_composition.png" alt="Composition n-gram trend (undergrad corpus)">
</div>

<p class="caption">Line graphs depicting raw frequency counts for undergraduate corpus terms by year. Scroll horizontally to explore individual trends.</p>

<p class="placeholder">[Background corpus trends: Digital Media, Digital Divide, Public Sphere, Online Communities, Civic Engagement]</p>

<div class="scrollable-gallery">
  <img src="/assets/EveryFirstMonday/lg_bg1_digital_media.png" alt="Digital media n-gram trend (background corpus)">
  <img src="/assets/EveryFirstMonday/lg_bg2_digital_divide.png" alt="Digital divide n-gram trend (background corpus)">
  <img src="/assets/EveryFirstMonday/lg_bg3_public_sphere.png" alt="Public sphere n-gram trend (background corpus)">
  <img src="/assets/EveryFirstMonday/lg_bg4_online_communities.png" alt="Online communities n-gram trend (background corpus)">
  <img src="/assets/EveryFirstMonday/lg_bg5_civic_engagement.png" alt="Civic engagement n-gram trend (background corpus)">
</div>

<p class="caption">Line graphs depicting raw frequency counts for each term by year. Scroll horizontally to explore individual trends.</p>

### Interactive Visualization

<div class="motion-chart-placeholder">
  <p>[Placeholder for interactive Plotly bubble chart comparing n-gram trajectories across time]</p>
</div>

<p class="caption">Interactive bubble visualization comparing n-gram trajectories across time. (To be populated with live Plotly data.)</p>

### Analysis & Interpretation

<p class="placeholder">[Detailed narrative explaining what these visualizations reveal about disciplinary turns in Internet Studies. Connect spikes/declines in specific terms to historical events, methodological shifts, or emergent subfields.]</p>

## Agentic Coding Applications {#agentic-coding}

<p class="placeholder">[Explanation of how Claude Code and ChatGPT were used throughout this project. Describe the iterative loop of prompting, testing, refinement, and quality assurance. Highlight moments where AI-assisted development accelerated scaffolding but human judgment ensured rigor.]</p>

### Example Interaction 1: Web Scraping Infrastructure

```
# Example interaction 1
User: Generate scraping function for First Monday archives.

Claude: Here's a Python function using requests and BeautifulSoup to collect article metadata...
  - Implement retry logic with exponential backoff
  - Respect robots.txt and rate limits
  - Extract title, authors, date, DOI, and article URL
  - Normalize ISO 8601 dates for consistent storage

Result: Full-working scraper with error handling and checkpointing.
```

### Example Interaction 2: Data Visualization & HTML Integration

```
# Example interaction 2
User: Build HTML layout with embedded Plotly charts.

Claude: Added responsive containers and linked plotly.js via CDN for interactive display...
  - Structured semantic HTML5 with Jekyll layout inheritance
  - CSS Grid for responsive image galleries
  - Smooth scrolling for table of contents anchors
  - Print-friendly styles for PDF export

Result: Self-contained, accessible digital text page.
```

### Generative Tools & Human Oversight

<p class="placeholder">[Reflection on the role of agentic coding in scholarly work. Distinguish between tool-assisted scaffolding (infrastructure, boilerplate) and human authorship (analysis, interpretation, insights). Discuss validation and quality gates applied to each stage.]</p>

## Reflections & Conclusions {#reflections}

<p class="placeholder">[Reflection on major findings. What do the disciplinary turns in First Monday reveal about the evolution of internet studies in rhetorical and composition scholarship?]</p>

<p class="placeholder">[Discussion of limitations: corpus boundaries, n-gram specificity, temporal gaps. How might future iterations refine or challenge these findings?]</p>

<p class="placeholder">[Broader implications for the field. How does this distant reading methodology complement close reading practices? What does the AI age mean for traditional scholarly methods?]</p>

<div class="future-work">
  <strong>Future Work:</strong>
  <p class="placeholder">[Ideas for expanding this research. Potential directions: comparative analysis with other digital-studies journals, integration of citation networks, authorial genealogies, or adaptation of this methodology to other disciplinary corpora.]</p>
</div>

## Appendices {#appendices}

<p class="placeholder">[Appendix introduction. Briefly describe supplementary materials and their relevance to the main narrative.]</p>

<details>
  <summary>Appendix A: Additional Line Graphs & Supplementary Visualizations</summary>
  <div class="appendix-images">
    <p class="placeholder">[Description of additional graphs and what they illustrate.]</p>
  </div>
</details>

<details>
  <summary>Appendix B: Corpus Statistics & Metadata</summary>
  <div class="appendix-images">
    <p class="placeholder">[Summary statistics: total articles, date range, author count, etc. Include raw data tables if desired.]</p>
  </div>
</details>

<details>
  <summary>Appendix C: N-gram List & Definitions</summary>
  <div class="appendix-images">
    <p class="placeholder">[Complete list of the ten n-grams analyzed, with brief justification for selection and context of scholarly relevance.]</p>
  </div>
</details>

<details>
  <summary>Appendix D: Code & Tools</summary>
  <div class="appendix-images">
    <p class="placeholder">[Links to GitHub repository, scraping scripts, visualization code, and documentation. Acknowledge all open-source libraries used.]</p>
  </div>
</details>

---

<div class="back-to-texts">
  <p><a href="/texts/">&larr; Back to Texts &amp; Notes</a></p>
</div>

<!-- Replace all <p class="placeholder">…</p> with final prose and confirm all image paths. -->
