---
layout: text
title: "Agentic Coding Experiences"
subtitle: "AI Collaboration, Research Integrity, and Scholarly Method"
date: 2025-11-03
description: "Reflection on using generative AI as research infrastructure."
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
  <!-- Slide 1: Reflections on Agentic Coding -->
  <div class="slide active">
    <h2>💭 Reflections on Agentic Coding</h2>
    <p>While I've worked on incorporating generative AI into my workflows over the last three years, this project is far and away the most control I've ever ceded to AI systems when doing higher-stakes work.</p>
    <ul>
      <li><strong>Claude Code</strong> built, in whole or in part, everything you see on this website and more than that behind the scenes in building the corpus analyzed and the visualizations themselves.</li>
      <li><strong>Both ChatGPT and Claude Sonnet</strong> played supporting roles when drafting much of the text and visuals for this project, either as a sounding board, editor, or research assistant.</li>
      <li><strong>The project's text</strong>, except for minor descriptive labels or explicitly cited slides in the Methodology section, is mine, as much as any assisted text can be. But how much of the entire project can I still call "mine"?</li>
    </ul>
    <p>To that last question, I don't have a clear answer. Instead, this reflection pulls back the curtain on some specific uses of AI in each stage of the project, hoping to showcase the methods for others and offering you a chance for your own conclusion on how much of this project is Garrett's and how much of this is Claude's.</p>
  </div>

  <!-- Slide 2: Interacting with Claude Code -->
  <div class="slide">
    <h2>🔧 Interacting with Claude Code</h2>
    <p>To understand the rest of these reflections, it is important to have a broad idea of how Claude Code looks and works in practice, with an example interaction in modifying visualizations below:</p>
    <ul>
      <li><strong>Claude Code runs in your terminal</strong> and uses plain-language instructions to create or modify files, folders, and code. With an example graph folder open, you can say "Reduce the thickness of the lines in the individual graphs," which results in the agent replacing "linewidth=3" with "linewidth=1.5".</li>
      <li><strong>Text highlighted in red</strong> means code that was modified or removed. <strong>Text highlighted in green</strong> reflects the new code.</li>
      <li><strong>In the example below, note that Claude Code handles typos well</strong>, and once it "understands" a context, I was able to use simpler, one-word responses to continue refining the visual appearance of the graphs.</li>
    </ul>
    <img src="/assets/fm_presentation/claude_code_example.png" alt="Claude Code interaction example">
    <p class="image-caption">One simple interaction with Claude Code while building this project.</p>
  </div>

  <!-- Slide 3: Initial Frustrations -->
  <div class="slide">
    <h2>⚠️ Initial Frustrations</h2>
    <p>Before this project, I only used agentic coding for minor, concrete tasks, such as simple data manipulation, scripts, and graphing. The simple, plain-language instructions that worked in those contexts started failing quickly without a bigger plan.</p>
    <p>For example, first attempts at building the scraper used in this project failed to capture most meaningful information:</p>
    <img src="/assets/fm_presentation/scraper_example.png" alt="Scraper output with null fields">
    <p class="image-caption">An example export from the first version of the scraper. Note how many fields are "null", including important ones like "published_date" and "full_text_content".</p>
  </div>

  <!-- Slide 4: Combining LLMs to Build Digital Artifacts -->
  <div class="slide">
    <h2>🤝 Combining LLMs to Build Digital Artifacts</h2>
    <p>The first major breakthrough in working with Claude Code was using a different general purpose LLM, like Sonnet or ChatGPT, to write more detailed starting instructions to pass over to the coding agent.</p>
    <ul>
      <li><strong>Claude Code looks for "CLAUDE.MD" files</strong> for instructions, meaning you can implement very long or specific instructions that it can refer back to throughout a working session.</li>
      <li><strong>Using another LLM to build the instructions</strong> not only saves time, but also helps to identify knowledge gaps. In the example below, the prompt suggests specific libraries to use, which I could then go research traditionally to help identify the best option.</li>
      <li><strong>Over time, I incorporated more into building an initial prompt</strong>, including instructing the LLM to ask me questions about the project first and then reviewing the prompt manually after. These prompts were remarkably successful; a rudimentary version of this website worked on the first try only using the initial CLAUDE.MD file.</li>
    </ul>
    <div style="margin-top: 1.5rem; padding: 1.5rem; background: var(--border); border-radius: 4px; border: 1px solid var(--border);">
      <p style="margin-top: 0; margin-bottom: 1rem; font-size: 0.9rem; color: var(--muted);"><strong>Example CLAUDE.MD prompt:</strong></p>
      <p style="margin: 0; line-height: 1.6;">One example of an initial CLAUDE.MD prompt that was remarkably successful can be viewed in <a href="https://claude.ai/share/f601dedc-3de0-41ae-bff4-31c612aeae12" target="_blank">this shared Claude conversation</a>. The prompt includes detailed instructions for building the website structure, specifies which libraries to use (BeautifulSoup for scraping, Plotly for visualization, Jekyll for deployment), and asks Claude Code to first ask clarifying questions before beginning the implementation. This approach—having another LLM pre-write the instructions for the coding agent—proved far more effective than attempting to issue commands in real-time without a plan.</p>
    </div>
  </div>

  <!-- Slide 5: Automatic Style Choices -->
  <div class="slide">
    <h2>🎨 Automatic Style Choices</h2>
    <p>The coding agent did not need thorough instructions to develop visual elements, and was quick to fill in gaps with its own choice.</p>
    <h3>Elements Selected By the AI</h3>
    <ul>
      <li>I did not instruct the AI to add any style to the hub cards; it included the rounded corners, highlighting, and animations on its own.</li>
      <li>The AI picked appropriate emojis and other visualizations to add some visual diversity to plain text that was uploaded.</li>
      <li>Though not specific to this project, the "Portfolio" cards and filtering at <a href="https://garrett-ferrara.github.io/portfolio/" target="_blank">garrett-ferrara.github.io/portfolio/</a> was a surprise; a friend reviewing the site saw those before I did.</li>
    </ul>
    <h3>Elements I Specifically Built or Instructed For</h3>
    <ul>
      <li>The overall hub and spoke appearance, including the grid structure.</li>
      <li>The graphics for each of the graphs from screenshots I took.</li>
      <li>The "slide-style" format of the first four spoke pages.</li>
    </ul>
  </div>

  <!-- Slide 6: Mixed Success In Editing Visual Elements -->
  <div class="slide">
    <h2>🔨 Mixed Success In Editing Visual Elements</h2>
    <p>Some of the most surprising successes and frustrating failures when using Claude Code occurred while instructing the prompt on editing the visual appearance of aspects of the project.</p>
    <ul>
      <li><strong>Failure to Understand Spacing:</strong> Editing the spacing between elements on this webpage, such as gaps and margins between the header and the beginning of a page's content, frequently took many, many attempts to get correct. In the end, it was <strong>faster to refresh myself on CSS and HTML</strong> and edit these elements myself rather than instruct the AI on it.</li>
      <li><strong>Understanding Charts:</strong> Early on, I knew I wanted the grid layout of the hub page to look like how it does now. To help convey this to the agent, I included a simple text grid and legend similar to the below:</li>
    </ul>
    <p style="font-family: monospace; margin-left: 1.5rem; color: var(--muted);">
      1XXX2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;X = Area with title and center image<br>
      3XXX4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1 = Introduction, 2 = Insights,<br>
      56789&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3 = Methodology, etc
    </p>
    <p>These instructions established the scaffolding for the hub successfully on the first try, though I still had to go in and manually set all the spacing myself.</p>
  </div>

  <!-- Slide 7: Serendipity In Building Visualizations -->
  <div class="slide">
    <h2>✨ Serendipity In Building Visualizations</h2>
    <p>Originally, I planned on building static graphs as images for the respective spoke visualization pages. However, while prompting the agent to try and recreate the Google Motion Charts featured in Mueller's Network Sense, the AI built a stand-alone webpage of a bubble chart using Plotly. I liked the interactive element so much that I replaced all the static images with interactive graphs.</p>
    <img src="/assets/fm_presentation/early_discourse_example.png" alt="Early static graph of Discourse">
    <p class="image-caption">An early, static graph of the term "Discourse"</p>
    <img src="/assets/fm_presentation/early_bubble_example.png" alt="First iteration of Bubble Charts">
    <p class="image-caption">A screenshot of the first iteration of the Bubble Charts that appear in this project.</p>
  </div>

  <!-- Slide 8: More Serendipity and Failure With Visual Elements, Heatmap Edition -->
  <div class="slide">
    <h2>🔥 Heatmap Serendipity & Hallucination</h2>
    <p>At one point in the project after building the first line graphs, I prompted the coding agent with open-ended instructions asking for ideas for other ways to visualize the data from the corpus. One of the outputs of this prompt was this mangled heat map.</p>
    <ul>
      <li><strong>As part of the output</strong>, the agent recommended organizing the data into eras and suggested other terms to analyze, such as "surveillance", "authenticity", and "platformization". In the spirit of not including AI insights in this project, these eras and terms were not incorporated or developed further.</li>
      <li><strong>Note the visual overlapping of the legend</strong> that has nonsense text about emerging and original terms in it, trying to group the terms into emerging concepts. The point it's trying to make might make an interesting analysis, but I did not provide the AI with any information on these new terms, meaning the <strong>added findings are entirely hallucinated.</strong></li>
      <li><strong>Despite the early "failure"</strong>, this heatmap served as inspiration for the heatmaps appearing in this project, which I believe offer some of the more compelling takeaways in all of the data.</li>
    </ul>
    <img src="/assets/fm_presentation/early_heatmap_example.png" alt="Claude Code's early heatmap attempt">
    <p class="image-caption">Claude Code's attempt at its own heat map analysis.</p>
  </div>

  <!-- Slide 9: Making a Header Image -->
  <div class="slide">
    <h2>🥚 Making a Header Image</h2>
    <p>Though not the focus of this project, I did want to use ChatGPT's incorporation of DALL-E, an AI image generator, to create the frying pan graphic appearing on the hub page. The original plan was to combine this image with Adobe Photoshop's generative fill and AI-assisted subject select tool to remove the watercolor background, but I didn't like the results.</p>
    <p>To create this image, I instructed the AI to make an "image of an egg being cracked into a pan. The egg should be the First Monday logo, and the egg contents in the pan should be this word cloud. Use a cartoony digital style appropriate for use as the header image in an academic project."</p>
    <img src="/assets/fm_presentation/WordStat_WordCloud_FM.png" alt="WordStat word cloud">
    <p class="image-caption">A word cloud generated by WordStat displaying overall term frequency for the entire corpus.</p>
    <img src="/assets/EveryFirstMonday/ChatGPT_First_Monday_Egg.png" alt="DALL-E generated egg image">
    <p class="image-caption">The output image generated by ChatGPT and DALL-E. While the image looks fine at a glance, note how it changed the "r" in "First Monday" to a distorted "ñ", and how the words in the cloud don't necessarily match the word cloud ("FOPLE").</p>
  </div>

  <!-- Slide 10: Did I Make This? -->
  <div class="slide">
    <h2>❓ Did I Make This?</h2>
    <p>After seeing all the ways that AI was used in this project and returning to the original question, I don't think there is yet a clear answer where my contributions to this project end and where Claude's begins, a subject likely worthy of its own analysis and investigation. Though clearly different, just how different is using the AI from any of the following:</p>
    <ul>
      <li>Using WordPress, Microsoft, or Google templates to build a presentation.</li>
      <li>Copying code templates or tutorials from Stack Overflow, GitHub, or other sources.</li>
      <li>Pulling imagery from stock image sites.</li>
      <li>Using a public word cloud generator instead of analyzing text directly.</li>
    </ul>
    <p>In the end, Claude Code offered me a way to create a digital text far beyond my capabilities. I learned or refreshed my learning on basic Python, HTML, and CSS; as I learned, I more frequently modified files and code directly rather than instructing the AI because I knew where I could do it faster. The final product meets the original goal: conduct an initial thin and distant assessment of a large corpus.</p>
    <p>Is this project mine? <strong>Maybe.</strong> The boundaries of authorship, creativity, and technical literacy are blurring with the rise of AI, and general purpose text generation is only the tip of the iceberg. Some value was inevitably lost by ceding control over to a coding agent. But what was gained was closing the gap between what a student might be able to achieve in a semester and what would usually be expected of a group with at least an intermediate level of technical proficiency. Just as something was lost, something else was gained, and I'm confident that rhetoric and composition as a field is positioned to maximize what's gained while preserving the voice of those shepherding the bots.</p>
  </div>

  <!-- Controls -->
  <div class="slide-controls">
    <button onclick="changeSlide(-1)" id="prevBtn">← Previous</button>
    <span class="slide-counter"><span id="currentSlide">1</span> / <span id="totalSlides">10</span></span>
    <button onclick="changeSlide(1)" id="nextBtn">Next →</button>
  </div>

  <!-- Dot indicators -->
  <div class="slide-indicator" id="dotIndicator"></div>
</div>

<script>
let currentSlide = 1;
const totalSlides = 10;

function showSlide(n) {
  const slides = document.querySelectorAll('#slideshow .slide');

  if (n > totalSlides) currentSlide = totalSlides;
  if (n < 1) currentSlide = 1;

  slides.forEach(slide => slide.classList.remove('active'));
  slides[currentSlide - 1].classList.add('active');

  document.getElementById('currentSlide').textContent = currentSlide;
  document.getElementById('prevBtn').disabled = currentSlide === 1;
  document.getElementById('nextBtn').disabled = currentSlide === totalSlides;

  const dots = document.querySelectorAll('#slideshow .dot');
  dots.forEach(dot => dot.classList.remove('active'));
  if (dots[currentSlide - 1]) {
    dots[currentSlide - 1].classList.add('active');
  }
}

function changeSlide(n) {
  currentSlide += n;
  showSlide(currentSlide);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

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

document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft') changeSlide(-1);
  if (event.key === 'ArrowRight') changeSlide(1);
});
</script>

---

<div class="back-to-hub">
  <p>
    <a href="/texts/fm_presentation_findings/">← Previous: Key Findings</a>

    <a href="/texts/fm_presentation/">Back to Hub</a>

    <a href="/texts/fm_presentation_frequency-stacked-area/">Next: Stacked Area →</a>
  </p>
</div>
