---
layout: text
title: "Term Trajectories"
subtitle: "Individual Frequency Trends for All Ten N-grams"
date: 2025-11-03
description: "Carousel visualization of individual term frequency trends across First Monday's history."
---

## Individual Term Trajectories

Use the carousel below to explore individual frequency line graphs for all ten n-grams. Each chart shows one term's trajectory across *First Monday*'s 29-year span, with a trendline overlaid to reveal the direction of change.

**First five charts:** Core RhetComp terminology (Identity, Discourse, Writing, Rhetoric, Composition)
**Last five charts:** Comparative digital studies concepts (Digital Media, Digital Divide, Public Sphere, Online Communities, Civic Engagement)

**How to read:** The colored area shows raw frequency; the dashed line shows the linear trend across all years. Click Previous/Next to navigate between terms.

<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>

<div class="filled-area-carousel" id="filled-area-carousel">
  <div class="viz-container">
    <div class="viz-view" id="area-viz-1" style="display: block;">
      <div id="plot-area-ug1-identity" style="width:90%; height:600px; margin: 0 auto;"></div>
    </div>
    <div class="viz-view" id="area-viz-2" style="display: none;">
      <div id="plot-area-ug2-discourse" style="width:90%; height:600px; margin: 0 auto;"></div>
    </div>
    <div class="viz-view" id="area-viz-3" style="display: none;">
      <div id="plot-area-ug3-writing" style="width:90%; height:600px; margin: 0 auto;"></div>
    </div>
    <div class="viz-view" id="area-viz-4" style="display: none;">
      <div id="plot-area-ug4-rhetoric" style="width:90%; height:600px; margin: 0 auto;"></div>
    </div>
    <div class="viz-view" id="area-viz-5" style="display: none;">
      <div id="plot-area-ug5-composition" style="width:90%; height:600px; margin: 0 auto;"></div>
    </div>
    <div class="viz-view" id="area-viz-6" style="display: none;">
      <div id="plot-area-bg1-digital-media" style="width:90%; height:600px; margin: 0 auto;"></div>
    </div>
    <div class="viz-view" id="area-viz-7" style="display: none;">
      <div id="plot-area-bg2-digital-divide" style="width:90%; height:600px; margin: 0 auto;"></div>
    </div>
    <div class="viz-view" id="area-viz-8" style="display: none;">
      <div id="plot-area-bg3-public-sphere" style="width:90%; height:600px; margin: 0 auto;"></div>
    </div>
    <div class="viz-view" id="area-viz-9" style="display: none;">
      <div id="plot-area-bg4-online-communities" style="width:90%; height:600px; margin: 0 auto;"></div>
    </div>
    <div class="viz-view" id="area-viz-10" style="display: none;">
      <div id="plot-area-bg5-civic-engagement" style="width:90%; height:600px; margin: 0 auto;"></div>
    </div>
  </div>

  <div class="carousel-controls">
    <button class="carousel-prev" onclick="changeAreaChart('filled-area-carousel', -1)">← Previous</button>
    <span class="carousel-label"><span class="area-term"></span> - <span class="area-current">1</span>/<span class="area-total">10</span></span>
    <button class="carousel-next" onclick="changeAreaChart('filled-area-carousel', 1)">Next →</button>
  </div>
</div>

<script>
function changeAreaChart(carouselId, direction) {
    const carousel = document.getElementById(carouselId);
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

    const counter = carousel.querySelector('.area-current');
    counter.textContent = newIndex + 1;

    const labelSpan = carousel.querySelector('.area-term');
    labelSpan.textContent = chartLabels[newIndex];

    setTimeout(() => {
        const plotDiv = views[newIndex].querySelector('[id^="plot-area-"]');
        if (plotDiv && window.Plotly) {
            Plotly.Plots.resize(plotDiv);
        }
    }, 0);
}

function createFilledAreaCharts() {
    if (!window.Plotly) {
        console.warn('Plotly not yet loaded, retrying in 500ms');
        setTimeout(createFilledAreaCharts, 500);
        return;
    }

    const colorScheme = {
        'identity': { line: '#b19cd9', fill: 'rgba(177, 156, 217, 0.3)' },
        'discourse': { line: '#2ecc71', fill: 'rgba(46, 204, 113, 0.3)' },
        'writing': { line: '#e74c3c', fill: 'rgba(231, 76, 60, 0.3)' },
        'rhetoric': { line: '#3498db', fill: 'rgba(52, 152, 219, 0.3)' },
        'composition': { line: '#f39c12', fill: 'rgba(243, 156, 18, 0.3)' },
        'digital media': { line: '#8b4513', fill: 'rgba(139, 69, 19, 0.3)' },
        'public sphere': { line: '#ff69b4', fill: 'rgba(255, 105, 180, 0.3)' },
        'civic engagement': { line: '#95a5a6', fill: 'rgba(149, 165, 166, 0.3)' },
        'digital divide': { line: '#f1c40f', fill: 'rgba(241, 196, 15, 0.3)' },
        'online communities': { line: '#1abc9c', fill: 'rgba(26, 188, 156, 0.3)' }
    };

    fetch('/assets/EveryFirstMonday/individual_term_metrics.csv')
        .then(response => response.text())
        .then(data => {
            const lines = data.trim().split('\n');
            const headers = lines[0].split(',').map(h => h.trim());
            const termIndex = headers.indexOf('Term');
            const yearIndex = headers.indexOf('Year');
            const totalOccurrencesIndex = headers.indexOf('TotalOccurrences');

            const termData = {};
            for (let i = 1; i < lines.length; i++) {
                if (!lines[i].trim()) continue;
                const values = lines[i].split(',').map(v => v.trim());
                const term = values[termIndex].toLowerCase();
                const year = parseInt(values[yearIndex]);
                const totalOccurrences = parseInt(values[totalOccurrencesIndex]);

                if (!termData[term]) {
                    termData[term] = { years: [], values: [] };
                }
                termData[term].years.push(year);
                termData[term].values.push(totalOccurrences);
            }

            const terms = ['identity', 'discourse', 'writing', 'rhetoric', 'composition', 'digital media', 'digital divide', 'public sphere', 'online communities', 'civic engagement'];
            const plotIds = ['plot-area-ug1-identity', 'plot-area-ug2-discourse', 'plot-area-ug3-writing', 'plot-area-ug4-rhetoric', 'plot-area-ug5-composition', 'plot-area-bg1-digital-media', 'plot-area-bg2-digital-divide', 'plot-area-bg3-public-sphere', 'plot-area-bg4-online-communities', 'plot-area-bg5-civic-engagement'];

            const allVizViews = document.querySelectorAll('#filled-area-carousel .viz-view');
            const originalDisplayStates = Array.from(allVizViews).map(el => el.style.display);
            allVizViews.forEach(el => el.style.display = 'block');

            terms.forEach((term, idx) => {
                const plotId = plotIds[idx];
                const plotDiv = document.getElementById(plotId);
                const colors = colorScheme[term];

                if (plotDiv && termData[term] && colors) {
                    const termLabel = term.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
                    const years = termData[term].years;
                    const values = termData[term].values;

                    const n = years.length;
                    const sumX = years.reduce((a, b) => a + b, 0);
                    const sumY = values.reduce((a, b) => a + b, 0);
                    const sumXY = years.reduce((sum, x, i) => sum + x * values[i], 0);
                    const sumX2 = years.reduce((sum, x) => sum + x * x, 0);
                    const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
                    const intercept = (sumY - slope * sumX) / n;
                    const trendlineY = years.map(x => slope * x + intercept);

                    const trace = {
                        x: years,
                        y: values,
                        fill: 'tozeroy',
                        fillcolor: colors.fill,
                        line: { color: colors.line, width: 3 },
                        hovertemplate: '<b>' + termLabel + '</b><br>Year: %{x}<br>Total Occurrences: %{y}<extra></extra>'
                    };

                    const trendlineTrace = {
                        x: years,
                        y: trendlineY,
                        mode: 'lines',
                        line: { color: colors.line, width: 2, dash: 'dash' },
                        hovertemplate: '<b>Trendline</b><br>Year: %{x}<br>Predicted: %{y:.1f}<extra></extra>',
                        showlegend: false
                    };

                    const layout = {
                        title: { text: '<b style="font-family: Montserrat, sans-serif; font-weight: 700;">"' + termLabel + '" Raw Frequency Trend (1996-2025)</b>', font: { size: 32, color: '#e5e7eb', family: 'Montserrat, sans-serif' }, x: 0.5, xanchor: 'center' },
                        xaxis: { title: { text: 'Year', font: { color: '#aab2c8', size: 16 }, standoff: 20 }, color: '#aab2c8', gridcolor: '#1f2937', showgrid: true, tickfont: { color: '#aab2c8', size: 15 }, range: [1995, 2026], tickmode: 'linear', tick0: 1995, dtick: 5, tickpad: 15, tickstandoff: 10 },
                        yaxis: { title: { text: 'Total Occurrences', font: { color: '#aab2c8', size: 16 } }, color: '#aab2c8', gridcolor: '#1f2937', showgrid: true, tickfont: { color: '#aab2c8', size: 15 }, zeroline: true, zerolinewidth: 1, zerolinecolor: '#1f2937', rangemode: 'nonnegative' },
                        plot_bgcolor: '#111827',
                        paper_bgcolor: '#0f172a',
                        font: { family: 'system-ui, sans-serif', color: '#e5e7eb' },
                        responsive: true,
                        margin: { l: 70, r: 80, t: 100, b: 80 },
                        hovermode: 'closest',
                        showlegend: false
                    };

                    try {
                        Plotly.newPlot(plotId, [trace, trendlineTrace], layout, { responsive: true });
                    } catch (e) {
                        console.error('Error plotting ' + term + ':', e);
                    }
                }
            });

            allVizViews.forEach((el, idx) => {
                el.style.display = originalDisplayStates[idx];
            });

            const filledAreaCarousel = document.getElementById('filled-area-carousel');
            if (filledAreaCarousel) {
                const areaTermSpan = filledAreaCarousel.querySelector('.area-term');
                const areaTotalSpan = filledAreaCarousel.querySelector('.area-total');
                if (areaTermSpan) areaTermSpan.textContent = 'Identity';
                if (areaTotalSpan) areaTotalSpan.textContent = '10';
            }
        })
        .catch(err => console.error('Error loading CSV:', err));
}

document.addEventListener('DOMContentLoaded', function() {
    createFilledAreaCharts();
});
</script>

---

## Interpretation

These individual term trajectories reveal distinct patterns:

- **Sustained presence** of core RhetComp terms (Rhetoric, Writing, Composition) indicates theoretical continuity even as the field evolves
- **Rapid rise** of Identity and Discourse in the 2000s–2010s reflects increased scholarly focus on how digital platforms mediate selfhood and communication
- **Variable uptake** of digital studies concepts suggests that different terms become salient in response to specific technological or social events

Compare trends across terms to understand how the discipline has shifted priorities while maintaining foundational concepts.

---

<div class="back-to-hub">
  <p><a href="/texts/fm_presentation/">← Back to Presentation Hub</a></p>
</div>
