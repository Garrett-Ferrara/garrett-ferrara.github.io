---
layout: text
title: "Agentic Coding Experiences"
subtitle: "AI Collaboration, Research Integrity, and Scholarly Method"
date: 2025-11-03
description: "Reflection on using generative AI as research infrastructure."
---

## Agentic Coding: Human Governance + AI Infrastructure

This project demonstrates **agentic coding** as a collaborative methodology for research infrastructure development. Rather than replacing human expertise, AI assistance accelerated *scaffolding* (initial architecture, boilerplate code, visualization templates) while I maintained governance over research design, validation protocols, and interpretive authority.

### The Iterative Loop

The workflow involved four phases:

**1. Problem Posing:** I identified specific technical obstacles:
- Legacy HTML parsing from *First Monday* archives (1996–2005)
- Platform migrations (legacy HTML → modern OJS)
- Inconsistent metadata schemas across decades
- Temporal data normalization (varying date formats)

**2. AI Generation:** Claude generated:
- Initial BeautifulSoup parsing logic
- Data structure templates
- Visualization boilerplate (Plotly HTML/CSS)
- Carousel navigation functions
- CSV parsing routines

**3. Testing & Refinement:** I:
- Tested outputs against primary sources
- Identified edge cases (missing metadata, formatting inconsistencies)
- Refined prompts based on failures
- Validated extracted data against archive records

**4. Human Judgment:** I:
- Designed dual-validation strategies
- Established quality gates (manual spot-checks, cross-validation)
- Interpreted results through scholarly lenses
- Drew conclusions and implications

### Research-Grade Validation

For this analysis to support credible scholarly claims, validation was non-negotiable:

**Dual Parsing Strategies:**
- Primary parser: Python BeautifulSoup for legacy HTML
- Secondary parser: OJS API integration for modern platform
- Cross-validation: Both run in parallel; discrepancies trigger manual review

**Checkpointing & Idempotence:**
- Incremental saves every 50 articles
- Resume capability if interrupted
- Deterministic output: same input → same result always

**Anomaly Detection:**
- Manual review of 10% random sample
- Cross-reference against source metadata
- Author deduplication audited for false positives/negatives
- Date normalization verified against primary sources

### The Boundary Between Tool & Authorship

This distinction is critical for scholarly integrity:

**AI assistance applied to:**
- Infrastructure development (parsing, data normalization)
- Visualization templates (HTML/CSS boilerplate, carousel logic)
- Documentation scaffolding (README templates, method descriptions)

**Human authorship governed:**
- Research design (corpus scope, n-gram selection, framing questions)
- Validation protocols (dual parsing, checksums, edge-case testing)
- Quality gates (manual sampling, cross-validation, ground-truth checks)
- Interpretive claims (analysis, synthesis, conclusions, field implications)

**The insight:** Automation serves *discovery*, but interpretation requires human expertise. Larger corpora demand *more* careful QA, not less.

### Key Lessons for Scholarly Integrity in the Age of AI

**1. Transparency About Tool Use**

Scholars must disclose:
- Which tools were used and for what purposes
- Where AI assistance began and human oversight ended
- Validation strategies employed
- Limitations and uncertainties

**2. Validation Exceeds Scale**

Bigger corpora don't automatically yield better insights. In fact:
- 2,710 articles analyzed with rigorous QA > 27,000 articles analyzed without validation
- Confidence in findings depends on validation depth, not corpus size
- Reproducibility requires transparent methodology

**3. Human Judgment is the Premium**

As generative AI makes corpus-scale work more accessible:
- The scholarly premium shifts from *finding patterns* to *interpreting meaning*
- Automated tools flag patterns; experts explain why they matter
- Disciplinary knowledge, historical context, and theoretical depth become more valuable, not less

**4. Research Integrity is Non-Negotiable**

Using AI doesn't lower standards—it raises them. If anything:
- More rigorous QA is required
- Documentation must be more transparent
- Edge cases demand more careful attention
- Assumptions must be more explicitly stated

### Lessons for Future Projects

**When designing agentic coding workflows:**

- Start small: Validate thoroughly on small datasets before scaling
- Document assumptions: What does your parser expect? What happens when it fails?
- Cross-validate: Use multiple methods to reach the same answer
- Spot-check: Never rely entirely on automated extraction
- Preserve provenance: Keep records of all decisions and pivots
- Be explicit about uncertainty: Where are you less confident? Why?

**Questions to ask yourself:**

- Can a reader reconstruct my validation logic from my documentation?
- Have I tested my approach against known ground truth?
- What edge cases might break my parser or assumptions?
- Have I checked a random sample manually?
- Am I confident enough in this data to stake scholarly claims on it?

### The Larger Context

The rise of generative AI is not a threat to humanistic scholarship—it's an opportunity to *focus human expertise where it matters most*. Rather than spending weeks writing parsing scripts, we can spend those weeks interpreting patterns, engaging with theory, and developing arguments.

But this only works if we maintain rigorous standards. Generative AI is a powerful tool for infrastructure scaffolding, not a substitute for scholarly judgment. The responsibility for rigor—for validation, interpretation, and intellectual integrity—remains entirely with the researcher.

This project illustrates one model of responsible agentic coding: AI handling technical scaffolding, humans governing research design and claiming interpretive authority. It's neither fully automated nor unnecessarily manual—it's a thoughtful collaboration in service of better scholarship.

---

<div class="back-to-hub">
  <p>
    <a href="/texts/fm_presentation_findings/">← Previous: Key Findings</a>

    <a href="/texts/fm_presentation/">Back to Hub</a>

    <a href="/texts/fm_presentation_frequency-stacked-area/">Next: Stacked Area →</a>
  </p>
</div>

---

<div class="back-to-hub">
  <p>
    <a href="/texts/fm_presentation_findings/">← Previous: Key Findings</a>

    <a href="/texts/fm_presentation/">Back to Hub</a>

    <a href="/texts/fm_presentation_frequency-stacked-area/">Next: Stacked Area →</a>
  </p>
</div>
