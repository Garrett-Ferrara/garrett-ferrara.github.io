---
layout: text
title: "From the First Monday to the AI Age"
subtitle: "Applying Agentic Coding to Map RhetComp Disciplinary Turns in Internet Studies"
date: 2025-11-02
description: "A distant reading analysis of disciplinary turns in Internet Studies through agentic coding."
---

<header class="text-header">
  <h1>{{ page.title }}</h1>
  <p class="subtitle tagline">{{ page.subtitle }}</p>
  <p class="metadata">Created by Garrett Richard Ferrara | Graduate Digital Text Project | November 2025</p>
</header>

<div class="graphics-container">
  <img src="/assets/EveryFirstMonday/ChatGPT_First_Monday_Egg.png" alt="ChatGPT visualization of First Monday corpus">
  <p class="caption">ChatGPT trying its hardest to visualize First Monday being an egg with a WordStat wordcloud as the contents. Note the distorted text; an unedited version of this word cloud appears later on. Source: OpenAI. (2025). DALL·E 3 [AI image generator].</p>
</div>

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

*First Monday*, founded in 1996, stands as one of the earliest peer-reviewed journals dedicated to the Internet as a social, political, and cultural phenomenon. As a foundational text in digital studies and internet research, *First Monday* captures the disciplinary emergence of rhetoric and composition scholarship grappling with digital communication, online communities, and the evolving nature of authorship and authority in networked spaces. This distant reading analysis examines how key terms—Identity, Discourse, Writing, Rhetoric, and Composition—have shifted in frequency and prominence across nearly three decades of scholarly conversation.

The journal's founding in 1996 marks a pivotal moment when internet studies was still coalescing as a disciplinary conversation. Early articles addressed fundamental questions about digital identity, virtual communities, and the rhetorical dimensions of online exchange. By tracing the emergence, prevalence, and evolution of core RhetComp terminology through *First Monday*'s archives, this analysis reveals how scholars have conceptualized the relationship between writing theory and digital practice over time.

Distant reading—examining patterns across large textual corpora rather than close reading individual texts—offers a complementary methodology to traditional rhetorical analysis. This approach reveals macro-level disciplinary turns: periods of emphasis and eclipse, conceptual resonances, and the epistemological foundations that have shaped how rhetoric and composition scholars understand digital communication. By mapping these patterns, we gain insight into the genealogy of our field's engagement with technology, authority, and meaning-making in networked contexts.

## Methodology {#methodology}

This project employed agentic coding—iterative collaboration with large language models (Claude Sonnet and ChatGPT)—to build a comprehensive, research-grade corpus from *First Monday*'s digital archives (1996–2025). The resulting dataset includes 2,710 articles across 359 issues, with complete metadata extraction (title, author, publication date, URL, DOI). Working through systematic parsing challenges (legacy HTML, platform migrations to OJS), I established dual validation strategies, ISO 8601 date normalization, and idempotent checkpointing to ensure 100% extraction success and transparent data provenance. The n-gram analysis focuses on ten key terms derived from undergraduate rhetoric and composition curricula and a background corpus of digital studies terminology, tracking their frequency and contextual shift across the journal's entire history.

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

**Distant Reading as Complement to Close Analysis:** While close reading allows scholars to examine the rhetorical strategies within individual texts, distant reading reveals macro-level patterns across time. This analysis operates at the corpus level: rather than deeply interpreting a single article's argument, we track whether and how frequently key concepts appear, how their relative prominence changes, and what those shifts suggest about disciplinary priorities and epistemological commitments.

**N-gram Selection Rationale:** The ten terms analyzed were selected to bridge undergraduate RhetComp pedagogy with contemporary digital studies discourse. The first set (Identity, Discourse, Writing, Rhetoric, Composition) reflects core concepts in writing studies curricula; the second set (Digital Media, Digital Divide, Public Sphere, Online Communities, Civic Engagement) provides comparative context from adjacent scholarly communities. Tracking both sets reveals how *First Monday* has navigated the intersection of traditional rhetorical concepts and emerging digital-era concerns.

**What Patterns Reveal About Disciplinary Turns:** Peaks and valleys in n-gram frequency mark moments of heightened scholarly attention. A rise in "Online Communities" may indicate growing interest in participatory culture; a spike in "Digital Divide" might reflect policy discussions or crisis moments. Sustained presence of "Rhetoric" and "Composition" alongside increasing mentions of "Identity" and "Discourse" suggests how our field has integrated digital concerns into long-standing theoretical frameworks. The visualizations below make these temporal patterns legible, allowing us to see not just what scholars wrote about, but when and with what relative emphasis.

## Distant Reading Graphics & Results {#distant-reading-results}

### Combined N-gram Coverage

<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>

<div id="plot-combined-area" style="width:100%; height:700px;"></div>

The stacked area plot above shows all ten n-grams combined, revealing how total scholarly attention to these key concepts evolved over *First Monday*'s 29-year span. Each colored band represents one term, and the height of each band indicates its raw frequency. This visualization makes it easy to observe both individual term trajectories and how they collectively shifted across different periods.

### Individual Term Trajectories

The carousel below displays individual frequency line graphs for all ten n-grams, allowing close examination of each term's trajectory across *First Monday*'s 29-year span. The first five graphs represent core RhetComp terminology; the latter five represent comparative digital studies concepts. Use the navigation buttons to move between graphs and observe both the magnitude of usage and the timing of rises and declines in scholarly attention.

<p class="caption">Individual n-gram frequency trends across First Monday's history (1996–2025). Terms 1–5 represent the undergraduate corpus (Identity, Discourse, Writing, Rhetoric, Composition); terms 6–10 represent the background corpus (Digital Media, Digital Divide, Public Sphere, Online Communities, Civic Engagement).</p>

<div class="filled-area-carousel" id="filled-area-carousel">
  <div class="viz-container">
    <!-- Plotly filled area chart divs -->
    <div class="viz-view" id="area-viz-1" style="display: block;">
      <div id="plot-area-ug1-identity" style="width:100%; height:600px;"></div>
    </div>
    <div class="viz-view" id="area-viz-2" style="display: none;">
      <div id="plot-area-ug2-discourse" style="width:100%; height:600px;"></div>
    </div>
    <div class="viz-view" id="area-viz-3" style="display: none;">
      <div id="plot-area-ug3-writing" style="width:100%; height:600px;"></div>
    </div>
    <div class="viz-view" id="area-viz-4" style="display: none;">
      <div id="plot-area-ug4-rhetoric" style="width:100%; height:600px;"></div>
    </div>
    <div class="viz-view" id="area-viz-5" style="display: none;">
      <div id="plot-area-ug5-composition" style="width:100%; height:600px;"></div>
    </div>
    <div class="viz-view" id="area-viz-6" style="display: none;">
      <div id="plot-area-bg1-digital-media" style="width:100%; height:600px;"></div>
    </div>
    <div class="viz-view" id="area-viz-7" style="display: none;">
      <div id="plot-area-bg2-digital-divide" style="width:100%; height:600px;"></div>
    </div>
    <div class="viz-view" id="area-viz-8" style="display: none;">
      <div id="plot-area-bg3-public-sphere" style="width:100%; height:600px;"></div>
    </div>
    <div class="viz-view" id="area-viz-9" style="display: none;">
      <div id="plot-area-bg4-online-communities" style="width:100%; height:600px;"></div>
    </div>
    <div class="viz-view" id="area-viz-10" style="display: none;">
      <div id="plot-area-bg5-civic-engagement" style="width:100%; height:600px;"></div>
    </div>
  </div>

  <div class="carousel-controls">
    <button class="carousel-prev" onclick="changeAreaChart('filled-area-carousel', -1)">← Previous</button>
    <span class="carousel-label"><span class="area-term"></span> - <span class="area-current">1</span>/<span class="area-total">10</span></span>
    <button class="carousel-next" onclick="changeAreaChart('filled-area-carousel', 1)">Next →</button>
  </div>
</div>


### Temporal Heatmaps

The heatmaps below provide a compact overview of term prevalence patterns across years. Toggle between unigrams and bigrams to see how individual terms and paired concepts evolved, then view the normalized heatmap to understand each term's prevalence relative to its peak occurrence.

<div class="heatmap-carousel">
  <div id="plot-unigrams-heatmap" style="width:100%; height:600px; display:block;"></div>
  <div id="plot-bigrams-heatmap" style="width:100%; height:600px; display:none;"></div>

  <div class="heatmap-controls">
    <button id="heatmap-unigrams-btn" class="heatmap-toggle active" onclick="toggleHeatmapType('unigrams')">Unigrams</button>
    <button id="heatmap-bigrams-btn" class="heatmap-toggle" onclick="toggleHeatmapType('bigrams')">Bigrams</button>
  </div>
</div>

### Term Prevalence Normalized to Peak

<div id="plot-normalized-heatmap" style="width:100%; height:700px;"></div>

This normalized view shows each term's prevalence as a percentage of its peak maximum. A term that peaked in one year at 56% of articles would show as 100% in that year. This normalization reveals the relative importance of each term within its own trajectory, making it easier to compare terms with very different baseline frequencies.

### Interactive Bubble Charts

The bubble charts below provide a multidimensional view of each term's evolution. Each bubble represents a year, with position on the x-axis showing time, position on the y-axis showing prevalence (% of articles), bubble size indicating reference density, and color representing the year. This allows simultaneous analysis of frequency, prevalence, and temporal distribution.

<div class="interactive-viz-carousel" id="viz-carousel">
  <div class="viz-container">
    <!-- Plotly chart divs -->
    <div class="viz-view" id="viz-1" style="display: block;">
      <div id="plot-ug1-identity" style="width:100%; height:600px;"></div>
    </div>
    <div class="viz-view" id="viz-2" style="display: none;">
      <div id="plot-ug2-discourse" style="width:100%; height:600px;"></div>
    </div>
    <div class="viz-view" id="viz-3" style="display: none;">
      <div id="plot-ug3-writing" style="width:100%; height:600px;"></div>
    </div>
    <div class="viz-view" id="viz-4" style="display: none;">
      <div id="plot-ug4-rhetoric" style="width:100%; height:600px;"></div>
    </div>
    <div class="viz-view" id="viz-5" style="display: none;">
      <div id="plot-ug5-composition" style="width:100%; height:600px;"></div>
    </div>
    <div class="viz-view" id="viz-6" style="display: none;">
      <div id="plot-bg1-digital-media" style="width:100%; height:600px;"></div>
    </div>
    <div class="viz-view" id="viz-7" style="display: none;">
      <div id="plot-bg2-digital-divide" style="width:100%; height:600px;"></div>
    </div>
    <div class="viz-view" id="viz-8" style="display: none;">
      <div id="plot-bg3-public-sphere" style="width:100%; height:600px;"></div>
    </div>
    <div class="viz-view" id="viz-9" style="display: none;">
      <div id="plot-bg4-online-communities" style="width:100%; height:600px;"></div>
    </div>
    <div class="viz-view" id="viz-10" style="display: none;">
      <div id="plot-bg5-civic-engagement" style="width:100%; height:600px;"></div>
    </div>
  </div>

  <div class="carousel-controls">
    <button class="carousel-prev" onclick="changeViz('viz-carousel', -1)">← Previous</button>
    <span class="carousel-label"><span class="viz-term"></span> - <span class="viz-current">1</span>/<span class="viz-total">10</span></span>
    <button class="carousel-next" onclick="changeViz('viz-carousel', 1)">Next →</button>
  </div>
</div>

<p class="caption">Interactive bubble charts for all ten n-grams. Charts 1–5 represent RhetComp core terminology (Identity, Discourse, Writing, Rhetoric, Composition); charts 6–10 represent digital studies background concepts (Digital Media, Digital Divide, Public Sphere, Online Communities, Civic Engagement). Click through to explore multidimensional patterns.</p>

<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
<script>
// Colorblind-friendly Viridis-inspired color scale
const colorScale = [
  [0, '#440154'],      // deep blue (1996)
  [0.143, '#31688e'],  // purple-blue (2000)
  [0.286, '#35b779'],  // cyan-green (2005)
  [0.429, '#fde724'],  // yellow-green (2010)
  [0.571, '#ffeb3b'],  // yellow (2015)
  [0.714, '#ff6e3a'],  // orange-yellow (2020)
  [1, '#cc0000']       // red (2025)
];

// Fetch and parse the CSV data
fetch('/assets/EveryFirstMonday/individual_term_metrics.csv')
  .then(response => response.text())
  .then(csv => {
    // Parse CSV
    const lines = csv.trim().split('\n');
    const data = {};

    // Initialize data structure for all terms
    const allTerms = ['identity', 'discourse', 'writing', 'rhetoric', 'composition', 'digital media', 'digital divide', 'public sphere', 'online communities', 'civic engagement'];
    allTerms.forEach(term => {
      data[term] = [];
    });

    // Parse data rows
    for (let i = 1; i < lines.length; i++) {
      if (lines[i].trim() === '') continue;
      const values = lines[i].split(',');
      const term = values[0].toLowerCase();
      const year = parseInt(values[1]);
      const referencesPerThousand = parseFloat(values[2]);
      const percentArticles = parseFloat(values[3]);
      const articleCount = parseInt(values[4]);

      if (data[term]) {
        data[term].push({
          year: year,
          percentArticles: percentArticles,
          referencesPerThousand: referencesPerThousand,
          articleCount: articleCount
        });
      }
    }

    renderCharts(data);
  })
  .catch(err => console.error('Error loading chart data:', err));

function renderCharts(data) {
  // Create the 10 bubble charts
  const chartOrder = [
    { id: 'plot-ug1-identity', term: 'identity', label: 'Identity' },
    { id: 'plot-ug2-discourse', term: 'discourse', label: 'Discourse' },
    { id: 'plot-ug3-writing', term: 'writing', label: 'Writing' },
    { id: 'plot-ug4-rhetoric', term: 'rhetoric', label: 'Rhetoric' },
    { id: 'plot-ug5-composition', term: 'composition', label: 'Composition' },
    { id: 'plot-bg1-digital-media', term: 'digital media', label: 'Digital Media' },
    { id: 'plot-bg2-digital-divide', term: 'digital divide', label: 'Digital Divide' },
    { id: 'plot-bg3-public-sphere', term: 'public sphere', label: 'Public Sphere' },
    { id: 'plot-bg4-online-communities', term: 'online communities', label: 'Online Communities' },
    { id: 'plot-bg5-civic-engagement', term: 'civic engagement', label: 'Civic Engagement' }
  ];

  // Determine axis ranges for each group
  const group1Terms = ['identity', 'discourse', 'writing', 'rhetoric', 'composition'];

  chartOrder.forEach((chart, chartIndex) => {
    const termData = data[chart.term];
    if (termData && termData.length > 0) {
      // Extract data for bubble chart
      const x = termData.map(d => d.percentArticles);
      const y = termData.map(d => d.referencesPerThousand);
      const size = termData.map(d => Math.max(d.articleCount / 2, 5)); // Scale article count for bubble size
      const color = termData.map(d => d.year); // Color by year

      // Determine which group this chart belongs to
      const isGroup1 = group1Terms.includes(chart.term);
      const xAxisRange = isGroup1 ? [0, 60] : [0, 35];
      const yAxisRange = isGroup1 ? [0, 0.5] : [0, 0.25];

      const trace = {
        x: x,
        y: y,
        mode: 'markers',
        marker: {
          size: size,
          color: color,
          colorscale: colorScale,
          colorbar: {
            title: 'Year',
            thickness: 15,
            len: 0.7,
            tickcolor: '#aab2c8',
            tickfont: { color: '#aab2c8' }
          },
          line: {
            color: '#aab2c8',
            width: 0.5
          },
          opacity: 0.7
        },
        text: termData.map((d, i) =>
          '<b>' + chart.label + '</b><br>' +
          'Year: ' + d.year + '<br>' +
          '% of Articles: ' + d.percentArticles.toFixed(2) + '%<br>' +
          'References per 1000 words: ' + d.referencesPerThousand.toFixed(4) + '<br>' +
          'Article Count: ' + d.articleCount + '<extra></extra>'
        ),
        hovertemplate: '%{text}',
        name: chart.label
      };

      const layout = {
        title: {
          text: '<b style="font-family: Montserrat, sans-serif; font-weight: 700;">"' + chart.label + '" Bubble Chart Analysis (1996-2025)</b>',
          font: { size: 32, color: '#e5e7eb', family: 'Montserrat, sans-serif' },
          x: 0.5,
          xanchor: 'center'
        },
        xaxis: {
          title: {
            text: '% of Articles Containing Term',
            font: { color: '#aab2c8', size: 16 }
          },
          color: '#aab2c8',
          gridcolor: '#1f2937',
          showgrid: true,
          tickfont: { color: '#aab2c8', size: 15 },
          range: xAxisRange
        },
        yaxis: {
          title: 'References per 1000 Words',
          color: '#aab2c8',
          gridcolor: '#1f2937',
          showgrid: true,
          tickfont: { color: '#aab2c8', size: 15 },
          titlefont: { color: '#aab2c8', size: 16 },
          range: yAxisRange
        },
        plot_bgcolor: '#111827',
        paper_bgcolor: '#0f172a',
        font: { family: 'system-ui, sans-serif', color: '#e5e7eb' },
        responsive: true,
        margin: { l: 70, r: 80, t: 100, b: 80 },
        hovermode: 'closest',
        showlegend: false
      };

      Plotly.newPlot(chart.id, [trace], layout, { responsive: true });
    }
  });
}
</script>

### Analysis & Interpretation

The visualizations above reveal several significant disciplinary turns across *First Monday*'s history. The sustained presence of "Rhetoric" and "Writing" indicates that rhetorical and compositional frameworks have remained foundational to internet studies discourse, even as new terminology has emerged. "Identity" and "Discourse" show marked increases in the early 2000s and 2010s, reflecting growing scholarly interest in how digital platforms mediate identity formation and enable new modes of discursive exchange. The rise of "Digital Media" and "Online Communities" in the mid-2000s correlates with the maturation of social media platforms and participatory culture studies. These patterns suggest that while core RhetComp concepts have persisted, the field has progressively integrated digital-specific terminology to address emerging phenomena—a disciplinary turn toward hybridity rather than replacement. The visualizations invite further questions: What triggered peaks in specific terms? How do these patterns compare across other digital-studies journals? What conceptual gaps remain between traditional and digital rhetoric frameworks?

## Agentic Coding Applications {#agentic-coding}

This project demonstrates agentic coding as a collaborative methodology for research infrastructure development. Rather than replacing human expertise, AI assistance accelerated scaffolding (initial architecture, boilerplate code, visualization templates) while I maintained governance over research design, validation protocols, and interpretive authority. The iterative loop involved: (1) posing specific technical problems to Claude Code, (2) testing outputs against project requirements, (3) refining prompts based on failures, and (4) applying human judgment to assess data quality and methodological rigor. This hybrid approach proved especially valuable for the web scraping phase, where AI generated initial parsing logic, but I established the QA frameworks, dual-validation strategies, and idempotent checkpointing that ensured research-grade data integrity. The distinction matters: the scraper itself is a tool; the research questions, validation design, and interpretive insights are distinctly human work. This project illustrates how generative AI can augment scholarly methodology without compromising intellectual authorship or rigor.

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

The relationship between generative tools and scholarly integrity requires clear delineation. In this project, AI assistance was applied to: infrastructure development (parsing logic, data normalization), visualization templates (HTML/CSS boilerplate, carousel navigation), and documentation scaffolding (README templates, method descriptions). Human authorship governed: research design (corpus scope, n-gram selection), validation protocols (dual parsing, checksums, anomaly detection), quality gates (manual sample review, cross-validation against archive records), and interpretive claims (analysis, synthesis, conclusions). At each stage, I applied rigorous QA: testing outputs against ground truth, checking edge cases, and verifying data fidelity. This clear boundary ensures that the automation serves scholarly rigor rather than obscuring it. The final corpus, visualizations, and interpretations reflect human judgment and expertise; the scaffolding is transparent and reproducible. Scholars using agentic coding should ask: Where does AI assistance begin and human oversight end? Can a reader reconstruct my validation logic? Have I tested claims against primary evidence? These questions, not tool selection, define research integrity in the age of generative AI.

## Reflections & Conclusions {#reflections}

This distant reading analysis reveals that internet studies, as reflected in *First Monday*, has not replaced traditional RhetComp concepts but rather adapted and hybridized them. The sustained prominence of "Rhetoric," "Writing," and "Composition" indicates disciplinary continuity; the rise of "Identity" and "Discourse" alongside digital-specific terminology (Digital Media, Online Communities) suggests evolutionary adaptation rather than paradigm rupture. The field has progressively enriched its conceptual toolkit to address phenomena—algorithmic mediation, networked identity, participatory culture—that early RhetComp theory could not have anticipated. This pattern suggests a discipline learning to theorize digital practices through established rhetorical lenses while remaining open to entirely new conceptual framings.

**Limitations and Refinements:** This analysis operates at the lexical level; frequency alone does not capture semantic shift or argumentative complexity. A spike in "Identity" tells us scholars are discussing identity, not *how* they theorize it or whether their approaches are compatible. Temporal gaps—missing early years, partial 2025 data—may distort trends. Future iterations could employ collocation analysis to examine how these terms interact (e.g., "digital identity" vs. "authentic identity" vs. "algorithmic identity"), employ citation networks to trace conceptual genealogies, and compare *First Monday* patterns against other digital-studies venues to test whether observed trends are journal-specific or field-wide.

**Implications for Scholarly Method:** This project demonstrates that distant reading and close reading are not competitive but complementary. Distant reading reveals where scholars congregate (which problems demand attention), while close reading explains why. In the AI age, this distinction becomes more critical: automated tools can flag patterns, but they cannot interpret them. The rigor of this analysis rests not on its scale but on the human judgment applied to understand what patterns mean. As generative AI makes corpus-scale work more accessible, the scholarly premium will shift toward interpretive insight—the ability to connect frequency data to disciplinary history, institutional structures, and epistemological commitments. This project is not a model of AI replacing humanistic work; it is a template for AI accelerating the discovery phase so that human expertise can focus on meaning-making.

<div class="future-work">
  <strong>Future Work:</strong>
  <p><strong>Comparative Journal Analysis:</strong> Replicate this methodology across peer-reviewed venues (e.g., *College Composition and Communication*, *Digital Humanities Quarterly*, *Media Culture & Society*) to test whether the patterns identified in *First Monday* are field-wide or journal-specific.<br><br><strong>Citation Network Integration:</strong> Layer citation data onto n-gram frequencies to identify which scholars and works have shaped disciplinary turns. Build a genealogical map of conceptual influence across *First Monday*'s history.<br><br><strong>Authorial Patterns:</strong> Analyze whether shifts in n-gram frequency correlate with emergent author cohorts, institutional clusters, or generational changes in RhetComp scholarship. Does disciplinary change follow personnel change?<br><br><strong>Cross-Disciplinary Adaptation:</strong> Apply this distance-reading framework to other humanities and social science corpora (archival studies, environmental humanities, STS) to develop generalizable principles for large-scale lexical analysis.<br><br><strong>Collocation & Semantic Analysis:</strong> Move beyond raw frequency to examine how key terms interact and shift meaning. Compare "digital rhetoric" in 2000 vs. 2020. Use modern NLP tools (BERT embeddings, topic modeling) to detect semantic drift beneath lexical stability.</p>
</div>

## Appendices {#appendices}

The appendices below provide supplementary data, methodological documentation, and computational resources supporting the main analysis. These materials are designed for readers who wish to verify findings, replicate the analysis, or adapt the methodology for other research contexts.

<details>
  <summary>Appendix A: Additional Line Graphs & Supplementary Visualizations</summary>
  <div class="appendix-images">
    <p>Additional visualizations and comparative charts will be added here to support deeper analysis. These may include: stacked bar charts showing relative prevalence of terms by decade, smoothed trend lines with confidence intervals, cross-correlation matrices showing how terms co-occur, and comparative views against other digital-studies journals. These supplementary graphics enable fine-grained interpretation of patterns visible in the main carousel and heatmaps.</p>
  </div>
</details>

<details>
  <summary>Appendix B: Corpus Statistics & Metadata</summary>
  <div class="appendix-images">
    <p><strong>Corpus Overview:</strong><br>Total Articles: 2,710<br>Issues: 359<br>Date Range: January 1996 – October 2025<br>Metadata Completeness: 100% (title, author, publication date, DOI)<br>Parsing Success Rate: 100% (zero articles lost to extraction errors)<br><br><strong>Methodological Notes:</strong><br>All dates normalized to ISO 8601 format. Author names deduplicated using fuzzy string matching (threshold: 90% similarity). Duplicate articles identified and removed via content hash comparison. All extraction decisions logged with timestamps for full reproducibility.</p>
  </div>
</details>

<details>
  <summary>Appendix C: N-gram List & Definitions</summary>
  <div class="appendix-images">
    <p><strong>Undergraduate RhetComp Corpus (Terms 1–5):</strong><br><em>Identity</em> — Individual selfhood, subjectivity, and self-representation in text and online contexts.<br><em>Discourse</em> — Language use, communicative practices, and discursive formations across contexts.<br><em>Writing</em> — Composition practice, written expression, authorship, and textual production.<br><em>Rhetoric</em> — Persuasive strategies, rhetorical theory, and situated argumentation.<br><em>Composition</em> — Writing instruction, curriculum, and the discipline of composition studies.<br><br><strong>Background Digital Studies Corpus (Terms 6–10):</strong><br><em>Digital Media</em> — Electronic communication platforms, digital technologies, and media ecologies.<br><em>Digital Divide</em> — Access disparities, equity issues, and technological inequality.<br><em>Public Sphere</em> — Democratic participation, public discourse, and civic engagement spaces.<br><em>Online Communities</em> — Virtual collectives, networked groups, and digital sociality.<br><em>Civic Engagement</em> — Political participation, activism, and collective action in digital contexts.</p>
  </div>
</details>

<details>
  <summary>Appendix D: Code & Tools</summary>
  <div class="appendix-images">
    <p><strong>GitHub Repository:</strong> [Link to be provided]<br><strong>Contents:</strong><br>— Python scraping scripts (requests, BeautifulSoup, OJS API parsing)<br>— Data processing pipeline (pandas, regex normalization, deduplication logic)<br>— Visualization code (Plotly, matplotlib, WordStat integration)<br>— Jekyll layout files and CSS (responsive design, dark/light modes)<br>— Full corpus (CSV export, metadata tables, validation reports)<br><strong>Open-Source Dependencies:</strong> Requests, BeautifulSoup4, Pandas, Plotly, Matplotlib, NLTK<br><strong>License:</strong> MIT (code); data available under Creative Commons Attribution 4.0 with proper citation to *First Monday*.</p>
  </div>
</details>

---

<div class="back-to-texts">
  <p><a href="/texts/">&larr; Back to Texts &amp; Notes</a></p>
</div>

<!-- Replace all <p class="placeholder">…</p> with final prose and confirm all image paths. -->
