---
layout: text
title: "Temporal Heatmaps"
subtitle: "Term Prevalence Patterns Across Years (1996–2025)"
date: 2025-11-03
description: "Heatmap visualizations showing term prevalence over time."
---

## Temporal Heatmaps

The heatmaps below provide a compact overview of term prevalence patterns across years. Use the toggle buttons to switch between **unigrams** (single terms) and **bigrams** (paired concepts).

**Unigrams:** Identity, Discourse, Writing, Rhetoric, Composition
**Bigrams:** Civic Engagement, Online Communities, Public Sphere, Digital Divide, Digital Media

Each cell shows the percentage of articles in that year containing the term. Darker colors indicate higher prevalence. Peak values and years are shown on the left margin.

<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>

<div class="heatmap-carousel">
  <div class="chart-wrapper">
    <div id="plot-unigrams-heatmap" style="width:90%; height:600px; display:block; margin: 0 auto;"></div>
    <div id="plot-bigrams-heatmap" style="width:90%; height:600px; display:none; margin: 0 auto;"></div>
  </div>

  <div class="heatmap-controls">
    <button id="heatmap-unigrams-btn" class="heatmap-toggle active" onclick="toggleHeatmapType('unigrams')">Unigrams</button>
    <button id="heatmap-bigrams-btn" class="heatmap-toggle" onclick="toggleHeatmapType('bigrams')">Bigrams</button>
  </div>
</div>

<script>
function toggleHeatmapType(type) {
    const unigramMap = document.getElementById('plot-unigrams-heatmap');
    const bigramMap = document.getElementById('plot-bigrams-heatmap');
    const unigramBtn = document.getElementById('heatmap-unigrams-btn');
    const bigramBtn = document.getElementById('heatmap-bigrams-btn');

    if (type === 'unigrams') {
        unigramMap.style.display = 'block';
        bigramMap.style.display = 'none';
        unigramBtn.classList.add('active');
        bigramBtn.classList.remove('active');
    } else {
        unigramMap.style.display = 'none';
        bigramMap.style.display = 'block';
        unigramBtn.classList.remove('active');
        bigramBtn.classList.add('active');
    }

    setTimeout(() => {
        if (type === 'unigrams' && window.Plotly) {
            Plotly.Plots.resize('plot-unigrams-heatmap');
        } else if (window.Plotly) {
            Plotly.Plots.resize('plot-bigrams-heatmap');
        }
    }, 0);
}

function createTemporalHeatmaps() {
    if (!window.Plotly) {
        console.warn('Plotly not yet loaded, retrying in 500ms');
        setTimeout(createTemporalHeatmaps, 500);
        return;
    }

    fetch('/assets/EveryFirstMonday/individual_term_metrics.csv')
        .then(response => response.text())
        .then(data => {
            const lines = data.trim().split('\n');
            const headers = lines[0].split(',').map(h => h.trim());
            const termIndex = headers.indexOf('Term');
            const yearIndex = headers.indexOf('Year');
            const percentArticlesIndex = headers.indexOf('PercentArticles');
            const articleCountIndex = headers.indexOf('ArticleCount');

            const heatmapData = {};
            const yearArticleCounts = {};
            const allYears = new Set();
            const unigrams = ['composition', 'rhetoric', 'writing', 'discourse', 'identity'];
            const bigrams = ['civic engagement', 'online communities', 'public sphere', 'digital divide', 'digital media'];
            const allTerms = [...unigrams, ...bigrams];

            allTerms.forEach(term => {
                heatmapData[term] = {};
            });

            for (let i = 1; i < lines.length; i++) {
                if (!lines[i].trim()) continue;
                const values = lines[i].split(',').map(v => v.trim());
                const term = values[termIndex].toLowerCase();
                const year = parseInt(values[yearIndex]);
                const percentArticles = parseFloat(values[percentArticlesIndex]);
                const articleCount = parseInt(values[articleCountIndex]);

                if (heatmapData[term] !== undefined) {
                    heatmapData[term][year] = percentArticles;
                    yearArticleCounts[year] = articleCount;
                    allYears.add(year);
                }
            }

            const sortedYears = Array.from(allYears).sort((a, b) => a - b);

            const createHeatmap = (terms, plotId, title) => {
                const z = [];
                const y = [];
                const customHoverText = [];

                terms.forEach(term => {
                    const termLabel = term.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
                    const row = sortedYears.map(year => heatmapData[term][year] || 0);
                    let peakYear = sortedYears[0];
                    let peakValue = row[0];
                    row.forEach((value, idx) => {
                        if (value > peakValue) {
                            peakValue = value;
                            peakYear = sortedYears[idx];
                        }
                    });

                    const yLabel = `${termLabel}<br><span style="font-size: 12px; color: #aab2c8;">(Peak ${peakValue.toFixed(1)}%, ${peakYear})</span>`;
                    y.push(yLabel);
                    z.push(row);

                    const hoverRow = sortedYears.map((year, idx) => {
                        const percentOfArticles = row[idx];
                        const totalArticles = yearArticleCounts[year] || 0;
                        const articlesWithTerm = Math.round((percentOfArticles / 100) * totalArticles);
                        return `<b>${termLabel}</b><br>Year: ${year}<br>% of Articles: ${percentOfArticles.toFixed(2)}%<br>${articlesWithTerm} out of ${totalArticles} articles<extra></extra>`;
                    });
                    customHoverText.push(hoverRow);
                });

                const trace = {
                    z: z,
                    x: sortedYears,
                    y: y,
                    customdata: customHoverText,
                    type: 'heatmap',
                    colorscale: 'Viridis',
                    hovertemplate: '%{customdata}<extra></extra>',
                    colorbar: {
                        title: '% of Articles',
                        thickness: 15,
                        len: 0.7,
                        tickcolor: '#aab2c8',
                        tickfont: { color: '#aab2c8' }
                    }
                };

                const layout = {
                    title: { text: '<b style="font-family: Montserrat, sans-serif; font-weight: 700;">' + title + ' (1996-2025)</b>', font: { size: 32, color: '#e5e7eb', family: 'Montserrat, sans-serif' }, x: 0.5, xanchor: 'center' },
                    xaxis: { title: { text: 'Year', font: { color: '#aab2c8', size: 16 } }, color: '#aab2c8', tickfont: { color: '#aab2c8', size: 15 }, side: 'bottom' },
                    yaxis: { title: { text: 'Term', font: { color: '#aab2c8', size: 16 } }, color: '#aab2c8', tickfont: { color: '#aab2c8', size: 15 } },
                    plot_bgcolor: '#111827',
                    paper_bgcolor: '#0f172a',
                    font: { family: 'system-ui, sans-serif', color: '#e5e7eb' },
                    responsive: true,
                    margin: { l: 150, r: 100, t: 100, b: 80 },
                    hovermode: 'closest'
                };

                const plotDiv = document.getElementById(plotId);
                if (plotDiv) {
                    try {
                        Plotly.newPlot(plotId, [trace], layout, { responsive: true });
                    } catch (e) {
                        console.error('Error plotting ' + plotId + ':', e);
                    }
                }
            };

            createHeatmap(unigrams, 'plot-unigrams-heatmap', 'Unigram Term Prevalence Across Years');
            createHeatmap(bigrams, 'plot-bigrams-heatmap', 'Bigram Term Prevalence Across Years');
        })
        .catch(err => console.error('Error loading CSV:', err));
}

document.addEventListener('DOMContentLoaded', function() {
    createTemporalHeatmaps();
});
</script>

---

## Normalized Heatmap to Peak Maximum

The visualization below shows each term's prevalence as a **percentage of its peak maximum**. A term that peaked at 50% of articles will show 100% in its peak year, and other years will be scaled proportionally. This normalization allows fair comparison across terms with different baseline frequencies.

<div class="chart-wrapper">
  <div id="plot-normalized-heatmap" style="width:90%; height:700px; margin: 0 auto;"></div>
</div>

<script>
function createNormalizedHeatmap() {
    if (!window.Plotly) {
        console.warn('Plotly not yet loaded, retrying in 500ms');
        setTimeout(createNormalizedHeatmap, 500);
        return;
    }

    fetch('/assets/EveryFirstMonday/individual_term_metrics.csv')
        .then(response => response.text())
        .then(data => {
            const lines = data.trim().split('\n');
            const headers = lines[0].split(',').map(h => h.trim());
            const termIndex = headers.indexOf('Term');
            const yearIndex = headers.indexOf('Year');
            const percentArticlesIndex = headers.indexOf('PercentArticles');
            const articleCountIndex = headers.indexOf('ArticleCount');

            const heatmapData = {};
            const yearArticleCounts = {};
            const allYears = new Set();
            const unigrams = ['composition', 'rhetoric', 'writing', 'discourse', 'identity'];
            const bigrams = ['civic engagement', 'online communities', 'public sphere', 'digital divide', 'digital media'];
            const allTerms = [...unigrams, ...bigrams];

            allTerms.forEach(term => {
                heatmapData[term] = {};
            });

            for (let i = 1; i < lines.length; i++) {
                if (!lines[i].trim()) continue;
                const values = lines[i].split(',').map(v => v.trim());
                const term = values[termIndex].toLowerCase();
                const year = parseInt(values[yearIndex]);
                const percentArticles = parseFloat(values[percentArticlesIndex]);
                const articleCount = parseInt(values[articleCountIndex]);

                if (heatmapData[term] !== undefined) {
                    heatmapData[term][year] = percentArticles;
                    yearArticleCounts[year] = articleCount;
                    allYears.add(year);
                }
            }

            const sortedYears = Array.from(allYears).sort((a, b) => a - b);

            const z = [];
            const y = [];
            const customHoverText = [];

            allTerms.forEach(term => {
                const termLabel = term.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
                const row = sortedYears.map(year => heatmapData[term][year] || 0);
                const maxValue = Math.max(...row);
                const normalizedRow = maxValue > 0 ? row.map(v => (v / maxValue) * 100) : row;

                let peakYear = sortedYears[0];
                let peakValue = row[0];
                row.forEach((value, idx) => {
                    if (value > peakValue) {
                        peakValue = value;
                        peakYear = sortedYears[idx];
                    }
                });

                const yLabel = `${termLabel}<br><span style="font-size: 12px; color: #aab2c8;">(Peak ${peakValue.toFixed(1)}%, ${peakYear})</span>`;
                y.push(yLabel);
                z.push(normalizedRow);

                const hoverRow = sortedYears.map((year, idx) => {
                    const percentOfArticles = row[idx];
                    const totalArticles = yearArticleCounts[year] || 0;
                    const articlesWithTerm = Math.round((percentOfArticles / 100) * totalArticles);
                    const normalizedValue = normalizedRow[idx];
                    return `<b>${termLabel}</b><br>Year: ${year}<br>% of Peak Max: ${normalizedValue.toFixed(1)}%<br>${articlesWithTerm} out of ${totalArticles} articles (${percentOfArticles.toFixed(2)}%)<extra></extra>`;
                });
                customHoverText.push(hoverRow);
            });

            const trace = {
                z: z,
                x: sortedYears,
                y: y,
                customdata: customHoverText,
                type: 'heatmap',
                colorscale: 'Viridis',
                hovertemplate: '%{customdata}<extra></extra>',
                colorbar: {
                    title: '% of Peak',
                    thickness: 15,
                    len: 0.7,
                    tickcolor: '#aab2c8',
                    tickfont: { color: '#aab2c8' }
                }
            };

            const layout = {
                title: { text: '<b style="font-family: Montserrat, sans-serif; font-weight: 700;">Term Prevalence Normalized to Peak Maximum (1996-2025)</b>', font: { size: 32, color: '#e5e7eb', family: 'Montserrat, sans-serif' }, x: 0.5, xanchor: 'center' },
                xaxis: { title: { text: 'Year', font: { color: '#aab2c8', size: 16 } }, color: '#aab2c8', tickfont: { color: '#aab2c8', size: 15 }, side: 'bottom' },
                yaxis: { title: { text: 'Term', font: { color: '#aab2c8', size: 16 } }, color: '#aab2c8', tickfont: { color: '#aab2c8', size: 15 } },
                plot_bgcolor: '#111827',
                paper_bgcolor: '#0f172a',
                font: { family: 'system-ui, sans-serif', color: '#e5e7eb' },
                responsive: true,
                margin: { l: 150, r: 100, t: 100, b: 80 },
                hovermode: 'closest'
            };

            const plotDiv = document.getElementById('plot-normalized-heatmap');
            if (plotDiv) {
                try {
                    Plotly.newPlot('plot-normalized-heatmap', [trace], layout, { responsive: true });
                } catch (e) {
                    console.error('Error plotting normalized heatmap:', e);
                }
            }
        })
        .catch(err => console.error('Error loading CSV:', err));
}

document.addEventListener('DOMContentLoaded', function() {
    createNormalizedHeatmap();
});
</script>

---

## Interpretation

The heatmaps reveal:

- **Peaks and valleys:** Darker cells show years of high prevalence for each term
- **Comparative trends:** Normalized view allows comparison of terms with very different baselines
- **Temporal clusters:** Some terms cluster together (e.g., RhetComp terms remain consistently present), while others spike in specific decades
- **Disciplinary shifts:** Notice how digital studies terminology becomes prominent in the 2000s while foundational RhetComp terms persist

---

<div class="back-to-hub">
  <p><a href="/texts/fm_presentation/">← Back to Presentation Hub</a></p>
</div>
