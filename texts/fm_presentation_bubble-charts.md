---
layout: text
title: "Interactive Bubble Charts"
subtitle: "Multidimensional Analysis of Term Evolution"
date: 2025-11-03
description: "Interactive bubble chart carousel showing term prevalence, frequency, and temporal distribution."
---

## Interactive Bubble Charts

The bubble charts below provide a multidimensional view of each term's evolution. Each bubble represents a year:

- **X-axis:** % of articles containing the term
- **Y-axis:** References per 1,000 words
- **Bubble size:** Number of articles in that year
- **Bubble color:** Year (ranging from deep blue for 1996 to red for 2025)

Use the carousel to navigate through all 10 terms. Click to explore interactive tooltips showing detailed data for each year.

<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>

<div class="interactive-viz-carousel" id="viz-carousel">
  <div class="viz-container">
    <div class="viz-view" id="viz-1" style="display: block;">
      <div id="plot-ug1-identity" style="width:90%; height:600px; margin: 0 auto;"></div>
    </div>
    <div class="viz-view" id="viz-2" style="display: none;">
      <div id="plot-ug2-discourse" style="width:90%; height:600px; margin: 0 auto;"></div>
    </div>
    <div class="viz-view" id="viz-3" style="display: none;">
      <div id="plot-ug3-writing" style="width:90%; height:600px; margin: 0 auto;"></div>
    </div>
    <div class="viz-view" id="viz-4" style="display: none;">
      <div id="plot-ug4-rhetoric" style="width:90%; height:600px; margin: 0 auto;"></div>
    </div>
    <div class="viz-view" id="viz-5" style="display: none;">
      <div id="plot-ug5-composition" style="width:90%; height:600px; margin: 0 auto;"></div>
    </div>
    <div class="viz-view" id="viz-6" style="display: none;">
      <div id="plot-bg1-digital-media" style="width:90%; height:600px; margin: 0 auto;"></div>
    </div>
    <div class="viz-view" id="viz-7" style="display: none;">
      <div id="plot-bg2-digital-divide" style="width:90%; height:600px; margin: 0 auto;"></div>
    </div>
    <div class="viz-view" id="viz-8" style="display: none;">
      <div id="plot-bg3-public-sphere" style="width:90%; height:600px; margin: 0 auto;"></div>
    </div>
    <div class="viz-view" id="viz-9" style="display: none;">
      <div id="plot-bg4-online-communities" style="width:90%; height:600px; margin: 0 auto;"></div>
    </div>
    <div class="viz-view" id="viz-10" style="display: none;">
      <div id="plot-bg5-civic-engagement" style="width:90%; height:600px; margin: 0 auto;"></div>
    </div>
  </div>

  <div class="carousel-controls">
    <button class="carousel-prev" onclick="changeViz('viz-carousel', -1)">← Previous</button>
    <span class="carousel-label"><span class="viz-term"></span> - <span class="viz-current">1</span>/<span class="viz-total">10</span></span>
    <button class="carousel-next" onclick="changeViz('viz-carousel', 1)">Next →</button>
  </div>
</div>

<script>
const colorScale = [
  [0, '#440154'],
  [0.143, '#31688e'],
  [0.286, '#35b779'],
  [0.429, '#fde724'],
  [0.571, '#ffeb3b'],
  [0.714, '#ff6e3a'],
  [1, '#cc0000']
];

function changeViz(vizCarouselId, direction) {
    const carousel = document.getElementById(vizCarouselId);
    const views = carousel.querySelectorAll('.viz-view');
    let currentIndex = 0;
    const chartLabels = ['Identity', 'Discourse', 'Writing', 'Rhetoric', 'Composition', 'Digital Media', 'Digital Divide', 'Public Sphere', 'Online Communities', 'Civic Engagement'];

    views.forEach((view, idx) => {
        if (view.style.display !== 'none') {
            currentIndex = idx;
        }
    });

    views[currentIndex].style.display = 'none';
    const newIndex = (currentIndex + direction + views.length) % views.length;
    views[newIndex].style.display = 'block';

    const counter = carousel.querySelector('.viz-current');
    counter.textContent = newIndex + 1;

    const labelSpan = carousel.querySelector('.viz-term');
    labelSpan.textContent = chartLabels[newIndex];

    setTimeout(() => {
        const plotDiv = views[newIndex].querySelector('[id^="plot-"]');
        if (plotDiv && window.Plotly) {
            Plotly.Plots.resize(plotDiv);
        }
    }, 0);
}

fetch('/assets/EveryFirstMonday/individual_term_metrics.csv')
  .then(response => response.text())
  .then(csv => {
    const lines = csv.trim().split('\n');
    const data = {};

    const allTerms = ['identity', 'discourse', 'writing', 'rhetoric', 'composition', 'digital media', 'digital divide', 'public sphere', 'online communities', 'civic engagement'];
    allTerms.forEach(term => {
      data[term] = [];
    });

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

  const group1Terms = ['identity', 'discourse', 'writing', 'rhetoric', 'composition'];

  chartOrder.forEach((chart) => {
    const termData = data[chart.term];
    if (termData && termData.length > 0) {
      const x = termData.map(d => d.percentArticles);
      const y = termData.map(d => d.referencesPerThousand);
      const size = termData.map(d => Math.max(d.articleCount / 2, 5));
      const color = termData.map(d => d.year);

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

document.addEventListener('DOMContentLoaded', function() {
    const vizCarousel = document.getElementById('viz-carousel');
    if (vizCarousel) {
        const vizTermSpan = vizCarousel.querySelector('.viz-term');
        const vizTotalSpan = vizCarousel.querySelector('.viz-total');
        const chartLabels = ['Identity', 'Discourse', 'Writing', 'Rhetoric', 'Composition', 'Digital Media', 'Digital Divide', 'Public Sphere', 'Online Communities', 'Civic Engagement'];
        if (vizTermSpan) vizTermSpan.textContent = chartLabels[0];
        if (vizTotalSpan) vizTotalSpan.textContent = '10';
    }
});
</script>

---

## Interpretation

The bubble charts reveal multidimensional patterns:

- **Rightward movement:** Terms that trend right are increasing in prevalence across the corpus
- **Upward movement:** Concentration of references (intensity) increases over time
- **Color progression:** Watching bubbles move from blue (early years) to red (recent years) shows temporal evolution
- **Clustering:** Terms with similar trajectories suggest conceptual proximity in scholarly discourse

Hover over bubbles to see exact values for each year. Compare terms across charts to understand how the discipline's conceptual toolkit has evolved.

---

<div class="back-to-hub">
  <p><a href="/texts/fm_presentation/">← Back to Presentation Hub</a></p>
</div>
