---
layout: text
title: "From the First Monday to the AI Age"
subtitle: "A Network Sense Presentation"
date: 2025-11-03
description: "Interactive hub presenting distant reading analysis of Internet Studies through network sense mapping."
---

<header class="text-header">
  <h1>{{ page.title }}</h1>
  <p class="subtitle tagline">{{ page.subtitle }}</p>
  <p class="metadata">Graduate Seminar Presentation | November 2025</p>
</header>

## Presentation Overview

This presentation maps disciplinary turns in Internet Studies through a distant reading of *First Monday* (1996–2025), analyzing 2,710 articles to understand how core rhetoric and composition concepts have persisted and evolved alongside emerging digital studies terminology. Using network sense methodology—a framework for tracing patterns across large textual corpora—this analysis reveals how scholars have theorized the relationship between writing, rhetoric, and digital practice across three decades of scholarly conversation.

**Estimated presentation time:** 15–20 minutes of guided exploration.

**Navigation:** Click any card below to explore that section. After viewing a section, return here using the back navigation or by clicking "← Back to Presentation Hub."

---

<div class="hub-grid">

  <div class="hub-card">
    <h3>🔍 What is Network Sense?</h3>
    <p>Understand Mueller's methodological framework for making large-scale textual patterns legible and meaningful. Learn how distant reading complements close analysis.</p>
    <a href="#what-is-network-sense" class="hub-btn">Explore →</a>
  </div>

  <div class="hub-card">
    <h3>⚙️ Methodology</h3>
    <p>How this analysis was built: agentic coding, corpus construction, data validation, and the research design behind tracking ten key terms across *First Monday*'s archives.</p>
    <a href="/texts/first_monday/#methodology" class="hub-btn">View Section →</a>
  </div>

  <div class="hub-card">
    <h3>📊 All Terms Raw Frequency</h3>
    <p>A stacked area chart showing all ten n-grams combined, revealing how total scholarly attention to key concepts evolved over *First Monday*'s 29-year span.</p>
    <a href="/texts/first_monday/#combined-n-gram-coverage" class="hub-btn">View Chart →</a>
  </div>

  <div class="hub-card">
    <h3>📈 Carousel: Raw Frequency Trends</h3>
    <p>Navigate through individual term trajectories. Ten line graphs (five RhetComp terms + five digital studies concepts) show how each concept's prominence shifted from 1996–2025.</p>
    <a href="/texts/first_monday/#individual-term-trajectories" class="hub-btn">Explore Carousel →</a>
  </div>

  <div class="hub-card">
    <h3>🔥 Unigram/Bigram Heatmap</h3>
    <p>A compact temporal overview. Toggle between unigrams (single terms) and bigrams (paired concepts) to see prevalence patterns across years at a glance.</p>
    <a href="/texts/first_monday/#temporal-heatmaps" class="hub-btn">Toggle Heatmap →</a>
  </div>

  <div class="hub-card">
    <h3>📐 Normalized to Peak Maximum</h3>
    <p>Each term's prevalence shown as a percentage of its peak. This normalization reveals the relative importance of each term within its own trajectory, enabling fair comparison across terms with different baselines.</p>
    <a href="/texts/first_monday/#term-prevalence-normalized-to-peak" class="hub-btn">View Heatmap →</a>
  </div>

  <div class="hub-card">
    <h3>🫧 Interactive Bubble Charts</h3>
    <p>Multidimensional visualization of term evolution. Each bubble represents a year, with position, size, and color encoding frequency, prevalence, and temporal distribution simultaneously.</p>
    <a href="/texts/first_monday/#interactive-bubble-charts" class="hub-btn">Navigate Bubbles →</a>
  </div>

  <div class="hub-card">
    <h3>🤖 Agentic Coding Experiences</h3>
    <p>How generative AI accelerated infrastructure development while human expertise governed research design, validation, and interpretation. Lessons for scholarly integrity in the age of LLMs.</p>
    <a href="#agentic-coding-experiences" class="hub-btn">Read Reflection →</a>
  </div>

</div>

---

## What is Network Sense? {#what-is-network-sense}

**Network sense** is a methodological approach developed by Derek Mueller for making large-scale textual patterns legible and meaningful. Rather than reading deeply into individual texts, network sense asks: What connections hover just beyond immediate perception? How can we visualize disciplinary constellations to understand where scholars congregate, which problems demand collective attention, and how concepts influence one another across time?

Mueller writes:

> "[Thin and distant research methods] lay plain layered and connective patterns that, because they can be apprehended, provide a basis for sensing more extensively the connections that hover just beyond the point where one decides to begin."

In this project, network sense operates at three levels:

1. **Macro Level**: Stacked area charts and heatmaps reveal whether and how frequently key concepts appear across the journal's 29-year span. Peaks and valleys mark moments of heightened scholarly attention.

2. **Meso Level**: Individual term trajectories (carousel line graphs) show how each concept's prominence shifted independently. When did "Identity" rise? When did "Rhetoric" plateau? What external events or disciplinary moves correlate with these shifts?

3. **Micro Level**: Bubble charts layer multiple dimensions—prevalence, frequency density, temporal distribution—to show how individual terms evolved within their own trajectories.

Network sense does not replace close reading or interpretive insight. Rather, it provides a *foundation* for sense-making: by revealing where scholars congregate, distant reading invites closer examination of why those congregations matter. The rigor of this analysis rests not on its scale but on the human judgment applied to understand what patterns mean.

**Why Network Sense for this project?** *First Monday* captures the disciplinary emergence of internet studies over nearly three decades. By mapping how core rhetoric and composition concepts have shifted in frequency and prominence, we gain insight into the genealogy of our field's engagement with technology, authority, and meaning-making in networked contexts. Network sense reveals not just what scholars wrote about, but when and with what relative emphasis—the temporal patterns that define disciplinary turns.

[← Back to Presentation Hub](/texts/fm_presentation/)

---

## Agentic Coding Experiences {#agentic-coding-experiences}

This project demonstrates agentic coding as a collaborative methodology for research infrastructure development. Rather than replacing human expertise, AI assistance accelerated scaffolding (initial architecture, boilerplate code, visualization templates) while I maintained governance over research design, validation protocols, and interpretive authority.

### How AI Assisted

The iterative loop involved: (1) posing specific technical problems to Claude Code, (2) testing outputs against project requirements, (3) refining prompts based on failures, and (4) applying human judgment to assess data quality and methodological rigor.

For the web scraping phase, AI generated initial parsing logic for legacy HTML and OJS platform migrations, but I established the QA frameworks, dual-validation strategies, and idempotent checkpointing that ensured research-grade data integrity. The distinction matters: the scraper itself is a tool; the research questions, validation design, and interpretive insights are distinctly human work.

### The Boundary Between Tool & Authorship

AI assistance was applied to:
- **Infrastructure development**: parsing logic, data normalization, platform migration handlers
- **Visualization templates**: HTML/CSS boilerplate, carousel navigation, responsive design
- **Documentation scaffolding**: README templates, method descriptions, code comments

Human authorship governed:
- **Research design**: corpus scope, n-gram selection, framing questions
- **Validation protocols**: dual parsing strategies, checksums, anomaly detection
- **Quality gates**: manual sample review, cross-validation against archive records, edge-case testing
- **Interpretive claims**: analysis, synthesis, conclusions, implications

At each stage, rigorous QA was applied: testing outputs against ground truth, checking edge cases, verifying data fidelity against primary sources. This clear boundary ensures that automation serves scholarly rigor rather than obscuring it.

### Key Lessons for Scholarly Integrity

Scholars using agentic coding should ask:

- **Where does AI assistance begin and human oversight end?** Transparency about tool use is non-negotiable.
- **Can a reader reconstruct my validation logic?** Documentation and reproducibility matter more when tools are automated.
- **Have I tested claims against primary evidence?** Scale does not substitute for rigor; larger corpora demand more careful QA.
- **Does my analysis reveal new insight, or does it merely confirm existing hunches?** Distant reading should challenge us, not reinforce biases.

The final corpus, visualizations, and interpretations reflect human judgment and expertise; the scaffolding is transparent and reproducible. Agentic coding is not about delegating thinking to machines—it's about freeing human expertise from repetitive infrastructure work so that insight and interpretation can flourish.

[← Back to Presentation Hub](/texts/fm_presentation/)

---

<div class="back-to-texts">
  <p><a href="/texts/first_monday/">View the Full Analysis →</a> | <a href="/texts/">← Back to Texts &amp; Notes</a></p>
</div>
