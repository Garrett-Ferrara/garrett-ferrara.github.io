---
layout: text
title: "Key Findings"
subtitle: "Interpreting Patterns in the Visualizations"
date: 2025-11-03
description: "Key findings from the distant reading analysis of First Monday."
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

.slide img {
  max-width: 100%;
  height: auto;
  margin: 1.5rem auto;
  border-radius: 4px;
  border: 1px solid var(--border);
  display: block;
}

.image-caption {
  font-size: 0.9rem;
  color: var(--muted);
  font-style: italic;
  margin-top: 0.5rem;
  text-align: center;
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
  <!-- Slide 1: Key Findings -->
  <div class="slide active">
    <h2>📊 Key Findings</h2>
    <p>Organizing nearly 30 years of a journal in a short presentation is exactly the job for thin and distant reading, and while analysis was not the central goal of this project, the process of building this project with agentic coding revealed two key findings:</p>
    <ul>
      <li><strong>Visualizations revealed no turns explicitly toward or away from core terms</strong> representing explicit Rhetoric and Composition affiliation, such as "Writing", "Rhetoric", and "Composition", though visualizations <strong>did reveal evidence of concurrent turns in the journal related to adjacent terms.</strong></li>
      <li><strong>Phenomena most prominently displayed and worth further investigation</strong> include strong turns toward "Identity" and "Digital Media", potential turns away from "Writing" and "Digital Divide", and spikes in the terms "Discourse" and "Civic Engagement" during election years.</li>
    </ul>
    <p>While the visualizations themselves are available from the <a href="/texts/fm_presentation/">hub page</a> for you to explore yourself, the following slides offer a brief summary.</p>
  </div>

  <!-- Slide 2: Weak Direct Presence of "Rhetoric" and "Composition" -->
  <div class="slide">
    <h2>📉 Weak Direct Presence of "Rhetoric" and "Composition"</h2>
    <p>Despite Rhetoric and Composition scholars' activity in First Monday, the specific terms "Rhetoric" and "Composition" were underrepresented compared to adjacent terms, with their increasing trendline likely attributed to anomalous spikes instead of a general trend.</p>
    <img src="/assets/fm_presentation/analysis_2_RhetComp.png" alt="Heatmap of Rhetoric and Composition terms">
    <p class="image-caption">A heatmap comparing the five unigrams observed by the percentage of articles they were present in. Note the highlighted darker appearance for the terms "Rhetoric" and "Composition" compared to "Identity", "Discourse", and "Writing"</p>
    <img src="/assets/fm_presentation/analysis_2_RhetCompLines.png" alt="Line graphs for Rhetoric and Composition frequencies">
    <p class="image-caption">Line graphs for raw frequencies of "Rhetoric" and "Composition" with isolated spikes highlighted.</p>
  </div>

  <!-- Slide 3: Strong and Increasing Presence of Related RhetComp Terms -->
  <div class="slide">
    <h2>📈 Strong Presence of Related RhetComp Terms</h2>
    <p>Compared to direct references to "Rhetoric" and "Composition", the terms "Identity", "Discourse", and "Writing" carve out strong and generally increasing presences both by raw frequency and as a percentage of articles the terms appear in.</p>
    <p>This is seen most dramatically by comparing the normalized bubble charts for each term. Below is the most prevalent term, "Identity", compared to the least prominent term, "Composition". In these charts, the Y axis represents the term's density per 5,000 words, the X axis represents the percent of articles the term appeared in, the color indicates the year (with warmer colors being more recent), and the bubble size represents the total number of articles published by First Monday that year.</p>
    <img src="/assets/fm_presentation/analysis_3_IdBubble.png" alt="Bubble chart showing Identity prevalence">
    <p class="image-caption">A bubble graph depicting the prevalence of "Identity".</p>
    <img src="/assets/fm_presentation/analysis_3_CompBubble.png" alt="Bubble chart showing Composition prevalence">
    <p class="image-caption">A bubble graph depicting the prevalence of "Composition".</p>
  </div>

  <!-- Slide 4: Strongest n-Gram Trends -->
  <div class="slide">
    <h2>🔥 Strongest n-Gram Trends</h2>
    <p>Compared to other terms, the strongest indicated turns were associated with the terms "Identity" and "Digital Media". Though neither turn is surprising against the backdrop of broader trends favoring social justice and multimodal media, a closer read of these terms specifically could reveal more about the role of Rhetoric and Composition in First Monday.</p>
    <img src="/assets/fm_presentation/analysis_4_IdHeat.png" alt="Heatmap highlighting Identity">
    <p class="image-caption">A heat map comparing this project's unigrams, with the term "Identity" highlighted.</p>
    <img src="/assets/fm_presentation/analysis_4_DMHeat.png" alt="Heatmap highlighting Digital Media">
    <p class="image-caption">A heat map comparing this project's bigrams, with the term "Digital Media" highlighted.</p>
  </div>

  <!-- Slide 5: Evidence of Turns Away -->
  <div class="slide">
    <h2>↘️ Evidence of Turns Away</h2>
    <p>While "Writing" maintained a strong and mostly stable presence by raw frequency in the journal, the associated bubble chart reveals outliers in the three-year period of 2008-2010, with a smaller initial burst in 1997-1998.</p>
    <img src="/assets/fm_presentation/analysis_5_WritBubble.png" alt="Bubble chart showing Writing trends">
    <p class="image-caption">Bubble chart showing "Writing" prevalence trends with notable spikes in 2008-2010 and 1997-1998.</p>
    <p>Similarly, the term "Digital Divide" peaked in prominence in the 2010s, with some resurgence in the years 2020 and 2022.</p>
    <img src="/assets/fm_presentation/analysis_5_DDBubble.png" alt="Bubble chart showing Digital Divide trends">
    <p class="image-caption">Bubble chart showing "Digital Divide" prevalence trends with peak in the 2010s.</p>
  </div>

  <!-- Slide 6: Election Year Spikes -->
  <div class="slide">
    <h2>🗳️ Election Year Spikes</h2>
    <p>Visible most prominently in the normalized heat map, the terms "Civic Engagement" and "Discourse" begin spiking during recent U.S. election years, and "Public Sphere" spikes once during the 2016 election year.</p>
    <ul>
      <li>This effect is especially strong for "Civic Engagement", where the term falls off dramatically between elections.</li>
      <li>Notably, despite First Monday's identity as an international journal, these spikes follow U.S. election years.</li>
      <li>Further investigation could explore this as a potential bias in the data or journal, or to find other patterns not immediately visible, such as whether the 2015 increase in "Civic Engagement" is caused by the contentious 2015 French election featuring Marie Le Pen.</li>
    </ul>
    <img src="/assets/fm_presentation/analysis_6_ElectionYears.png" alt="Heatmap showing election year spikes">
    <p class="image-caption">Heat map showing prominent spikes in "Civic Engagement" and "Discourse" terms during U.S. election years.</p>
  </div>

  <!-- Controls -->
  <div class="slide-controls">
    <button onclick="changeSlide(-1)" id="prevBtn">← Previous</button>
    <span class="slide-counter"><span id="currentSlide">1</span> / <span id="totalSlides">6</span></span>
    <button onclick="changeSlide(1)" id="nextBtn">Next →</button>
  </div>

  <!-- Dot indicators -->
  <div class="slide-indicator" id="dotIndicator"></div>
</div>

<script>
let currentSlide = 1;
const totalSlides = 6;

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
  document.querySelector('main').scrollIntoView({ behavior: 'smooth', block: 'start' });
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
    <a href="/texts/fm_presentation_methodology/">← Previous: Methodology</a>

    <a href="/texts/fm_presentation/">Back to Hub</a>

    <a href="/texts/fm_presentation_agentic-coding/">Next: Agentic Coding →</a>
  </p>
</div>
