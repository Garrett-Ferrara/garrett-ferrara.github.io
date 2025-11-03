---
layout: text
title: "Methodology"
subtitle: "Building a Research-Grade Corpus Through Agentic Coding"
date: 2025-11-03
description: "Research design, data collection process, and validation strategies for distant reading analysis."
---

## The Corpus: 2,710 Articles Across 29 Years

This analysis examined every article published in *First Monday* from January 1996 through October 2025—359 issues spanning nearly three decades of Internet Studies scholarship. The resulting dataset includes:

- **Total Articles:** 2,710
- **Issues:** 359
- **Date Range:** January 1996 – October 2025
- **Metadata Completeness:** 100% (title, author, publication date, DOI, URL)
- **Extraction Success Rate:** 100% (zero articles lost to parsing errors)

All dates were normalized to ISO 8601 format. Author names were deduplicated using fuzzy string matching (90% similarity threshold). Duplicate articles were identified and removed via content hash comparison.

## Agentic Coding: Human Governance + AI Infrastructure

This project employed **agentic coding**—iterative collaboration with large language models (Claude Sonnet and ChatGPT)—to build and validate the corpus. Rather than replacing human expertise, AI assistance accelerated *infrastructure scaffolding* while I maintained governance over research design, validation protocols, and interpretive authority.

### The Iterative Loop

1. **Problem Posing:** I identified specific technical obstacles (legacy HTML parsing, platform migrations to OJS, inconsistent metadata schemas)
2. **AI Generation:** Claude generated initial parsing logic, boilerplate code, and visualization templates
3. **Testing & Refinement:** I tested outputs against project requirements, identified edge cases, and refined prompts based on failures
4. **Human Judgment:** Applied rigorous QA to assess data quality, validate assumptions, and ensure methodological integrity

### Research-Grade Data Validation

For this project to support credible scholarly claims, data validation was non-negotiable. I established:

**Dual Parsing Strategies:**
- Primary parser: Custom Python script using BeautifulSoup for legacy HTML
- Secondary parser: OJS API integration for modern platform versions
- Cross-validation: Both parsers run in parallel; discrepancies trigger manual review

**Checkpointing & Idempotence:**
- Incremental saves every 50 articles
- Resume capability if extraction interrupted
- Deterministic output: same input always produces same result

**Anomaly Detection:**
- Manual spot-check of 10% random sample
- Cross-reference against archive records for accuracy
- Date normalization verified against source metadata
- Author deduplication audited for false positives/negatives

### What Data We Tracked

For each article:
- Title, author(s), publication date, DOI, full URL
- Article text (body) for n-gram extraction
- Issue number and volume for temporal tracking

## N-gram Selection Rationale

I analyzed ten key terms selected to bridge undergraduate RhetComp pedagogy with contemporary digital studies discourse:

**Undergraduate RhetComp Corpus (Terms 1–5):**
- *Identity* — Individual selfhood, subjectivity, self-representation in text and online
- *Discourse* — Language use, communicative practices, discursive formations
- *Writing* — Composition practice, written expression, authorship
- *Rhetoric* — Persuasive strategies, rhetorical theory, situated argumentation
- *Composition* — Writing instruction, curriculum, composition studies discipline

**Background Digital Studies Corpus (Terms 6–10):**
- *Digital Media* — Electronic platforms, digital technologies, media ecologies
- *Digital Divide* — Access disparities, equity issues, technological inequality
- *Public Sphere* — Democratic participation, civic discourse spaces
- *Online Communities* — Virtual collectives, networked groups, digital sociality
- *Civic Engagement* — Political participation, activism, collective action

Tracking both sets reveals how *First Monday* has navigated the intersection of traditional rhetorical concepts and emerging digital-era concerns.

## What Patterns Reveal About Disciplinary Turns

Peaks and valleys in n-gram frequency mark moments of heightened scholarly attention. A rise in "Online Communities" may indicate growing interest in participatory culture; a spike in "Digital Divide" might reflect policy discussions or crisis moments. Sustained presence of "Rhetoric" and "Composition" alongside increasing mentions of "Identity" and "Discourse" suggests how our field has integrated digital concerns into long-standing theoretical frameworks.

The visualizations make these temporal patterns legible, allowing us to see not just what scholars wrote about, but when and with what relative emphasis—the disciplinary signature of our field's evolution.

---

<div class="back-to-hub">
  <p><a href="/texts/fm_presentation/">← Back to Presentation Hub</a></p>
</div>
