---
layout: text
title: "What is Network Sense?"
subtitle: "Understanding Mueller's Framework for Disciplinary Pattern Recognition"
date: 2025-11-03
description: "Introduction to network sense methodology for distant reading analysis."
---

<style>
.slideshow-container {
  max-width: 900px;
  margin: 2rem auto;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 3rem 2rem;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.slide {
  display: none;
  animation: fadeIn 0.5s;
}

.slide.active {
  display: block;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.slide h2 {
  margin-top: 0;
  color: var(--accent);
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}

.slide h3 {
  color: var(--accent);
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  font-size: 1.2rem;
}

.slide p, .slide blockquote {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text);
}

.slide blockquote {
  border-left: 4px solid var(--accent);
  padding-left: 1.5rem;
  margin: 1.5rem 0;
  font-style: italic;
  color: var(--muted);
}

.slide ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.slide li {
  margin: 0.75rem 0;
  color: var(--text);
}

.slide-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border);
}

.slide-controls button {
  padding: 0.75rem 1.5rem;
  background: var(--accent);
  color: var(--accent-contrast);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s;
}

.slide-controls button:hover {
  background: var(--link-hover);
}

.slide-controls button:disabled {
  background: var(--muted);
  cursor: not-allowed;
  opacity: 0.5;
}

.slide-counter {
  font-weight: 600;
  color: var(--muted);
  min-width: 80px;
  text-align: center;
}

.slide-indicator {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--border);
  cursor: pointer;
  transition: background 0.3s;
}

.dot.active {
  background: var(--accent);
}

.dot:hover {
  background: var(--accent);
}
</style>

<div class="slideshow-container" id="slideshow">
  <!-- Slide 1: Introduction -->
  <div class="slide active">
    <h2>🔍 An Introduction to Black Box Network Sense</h2>
    <p>This project is a multimodal digital text that explores how agentic coding can be applied in conducting a thin and distant analysis of a journal beyond the time or skill constraints of what might usually be possible, while preserving the integrity of the academic findings.</p>
    <p><strong>The case study explored in this application is a network sense analysis of Rhetoric and Composition's relationship with <a href="https://firstmonday.org" target="_blank">First Monday</a>, one of the first peer-reviewed journals dedicated to the interdisciplinary study of the internet.</strong></p>
    <p>Nearly entirely with the AI coding agent Claude Code, this project accomplished the following:</p>
    <ul>
      <li>Created an initial corpus by ethically and systematically scraping the entire history of First Monday</li>
      <li>Distilled the corpus into actionable findings and charts</li>
      <li>Explored different visualizations to capture the findings using Plotly</li>
      <li>Built a digital site / web-poster to host the content</li>
    </ul>
  </div>

  <!-- Slide 2: Research Question -->
  <div class="slide">
    <h2>❓ The Research Question: Where is RhetComp in Internet Studies?</h2>
    <blockquote>
      "We need to see the way documents have served not simply to write, but also to underwrite social interactions; not simply to communicate, but also to coordinate social practices." — <a href="https://firstmonday.org/index.php/fm/article/view/209" target="_blank">Brown &amp; Duguid, "The Social Life of Documents"</a> (First Monday, May 1996)
    </blockquote>
    <p>The above quote is from the second article of First Monday's first issue, published in May, 1996. Though not explicit, a close read of the full text reveals obvious ties to <strong>Rhetoric and Composition</strong>, with direct references to <a href="https://en.wikipedia.org/wiki/Public_sphere" target="_blank">Habermas's Public Sphere</a> and indirect parallels to <a href="https://en.wikipedia.org/wiki/Carol_Berkenkotter" target="_blank">Miller's "Genre as Social Action."</a></p>
    <p>Though it is simple to read the first issue of a journal and see the connection, it is less impractical to reach back through nearly 30 years of scholarship to analyze how the disciplines of Internet Studies and Rhetoric and Composition have intertwined. The problem needs a different approach.</p>
  </div>

  <!-- Slide 3: What is Network Sense -->
  <div class="slide">
    <h2>🕸️ What is Network Sense?</h2>
    <p>Defined by <a href="https://www.derekmueller.net/" target="_blank">Derek Mueller</a>, Network Sense is the <em>"incomplete but nevertheless vital glimpses of an interconnected disciplinary domain focused on relationships that define and cohere widespread scholarly activity."</em> As a methodological approach, it makes large-scale textual patterns legible and meaningful.</p>
    <p><strong>Network sense relies on two methodologies:</strong></p>
    <h3>🔭 Distant Reading</h3>
    <p>Analysing large body of texts through metadata and analysis tools to identify patterns, trends, and relationships that would be otherwise invisible on a closer read of those texts.</p>
    <h3>📊 Thin Descriptions</h3>
    <p>Surface-level features of data such as frequencies, connections, and distributions that don't require deep understanding of the work to surface.</p>
    <h3>Together, these methods help ask:</h3>
    <ul>
      <li>What connections hover just beyond immediate perception?</li>
      <li>How can we visualize disciplinary constellations?</li>
      <li>Where do scholars congregate?</li>
      <li>Which problems demand collective attention?</li>
      <li>How do concepts influence one another across time?</li>
    </ul>
  </div>

  <!-- Slide 4: Applications -->
  <div class="slide">
    <h2>⚡ Applications of Thin and Distant Analyses</h2>
    <blockquote>
      "[Thin and distant research methods] lay plain layered and connective patterns that, because they can be apprehended, provide a basis for sensing more extensively the connections that hover just beyond the point where one decides to begin." — <a href="https://www.derekmueller.net/" target="_blank">Derek Mueller, Network Sense</a>
    </blockquote>
    <p>When combined, the core value seen in thin and distant reading comes from being able to triage potential patterns at a scale impossible when doing thorough research on a subject.</p>
    <ul>
      <li>Patterns revealed from thin and distant analyses can be actionable on their own, or they can be used as the spark for more in-depth analysis of a phenomenon.</li>
      <li>In this project, one example pattern is how the term "Civic Engagement" spikes in prominence during election years, but only really since 2016. What changed?</li>
      <li>Thin and distant methods are particularly useful for graduate students and newcomers to the field, as they help build understanding of discourse trends without needing to catch up on years of academic debate and context.</li>
    </ul>
  </div>

  <!-- Slide 5: Making Sense of First Monday -->
  <div class="slide">
    <h2>📖 Making Sense of First Monday and RhetComp</h2>
    <p>This project uses these thin and distant methodologies to track ten n-grams over the lifespan of First Monday, five unigrams inspired by Chapter 3 of Mueller's Network Sense, and five bigrams from the top 200 assessed to be most emblematic of Rhetoric and Composition:</p>
    <h3>Unigrams:</h3>
    <ul>
      <li><strong>Identity</strong> - Individual representation in text and online contexts.</li>
      <li><strong>Discourse</strong> - Communicative practices that exchange and evaluate ideas.</li>
      <li><strong>Writing</strong> - Composition practice, written expression, authorship, and textual production.</li>
      <li><strong>Rhetoric</strong> - Theories and studies exploring the contexts and impacts of communication</li>
      <li><strong>Composition</strong> - Writing instruction, curriculum, and the discipline of composition studies.</li>
    </ul>
    <h3>Bigrams:</h3>
    <ul>
      <li><strong>Digital media</strong> - Electronic communication and text platforms.</li>
      <li><strong>Digital divide</strong> - Technological access inequality and access disparities</li>
      <li><strong>Public Sphere</strong> - Open and social areas for societal discourse</li>
      <li><strong>Online communities</strong> - virtual collectives connected by digital platforms</li>
      <li><strong>Civic Engagement</strong> - Political participation, activism, and collective action</li>
    </ul>
  </div>

  <!-- Controls -->
  <div class="slide-controls">
    <button onclick="changeSlide(-1)" id="prevBtn">← Previous</button>
    <span class="slide-counter"><span id="currentSlide">1</span> / <span id="totalSlides">5</span></span>
    <button onclick="changeSlide(1)" id="nextBtn">Next →</button>
  </div>

  <!-- Dot indicators -->
  <div class="slide-indicator" id="dotIndicator"></div>
</div>

<script>
let currentSlide = 1;
const totalSlides = 5;

function showSlide(n) {
  const slides = document.querySelectorAll('#slideshow .slide');

  if (n > totalSlides) currentSlide = totalSlides;
  if (n < 1) currentSlide = 1;

  slides.forEach(slide => slide.classList.remove('active'));
  slides[currentSlide - 1].classList.add('active');

  document.getElementById('currentSlide').textContent = currentSlide;
  document.getElementById('prevBtn').disabled = currentSlide === 1;
  document.getElementById('nextBtn').disabled = currentSlide === totalSlides;

  // Update dot indicators
  const dots = document.querySelectorAll('#slideshow .dot');
  dots.forEach(dot => dot.classList.remove('active'));
  if (dots[currentSlide - 1]) {
    dots[currentSlide - 1].classList.add('active');
  }
}

function changeSlide(n) {
  currentSlide += n;
  showSlide(currentSlide);
}

// Initialize dots
document.addEventListener('DOMContentLoaded', function() {
  const dotContainer = document.getElementById('dotIndicator');
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('span');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.onclick = function() {
      currentSlide = i + 1;
      showSlide(currentSlide);
    };
    dotContainer.appendChild(dot);
  }
  showSlide(currentSlide);
});

// Keyboard navigation
document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft') changeSlide(-1);
  if (event.key === 'ArrowRight') changeSlide(1);
});
</script>

---

<div class="back-to-hub">
  <p>
    <a href="/texts/fm_presentation/">← Back to Hub</a>

    <a href="/texts/fm_presentation_methodology/">Next: Methodology →</a>
  </p>
</div>
