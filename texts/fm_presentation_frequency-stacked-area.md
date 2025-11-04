---
layout: text
title: "All Terms Raw Frequency"
subtitle: "Stacked Area Visualization of Ten N-grams (1996–2025)"
date: 2025-11-03
description: "Combined visualization of all key terms showing aggregate frequency trends across First Monday's history."
---

<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>

<div class="chart-wrapper">
  <div id="plot-combined-area" style="width:90%; height:700px; margin: 0 auto;"></div>
</div>

<script>
/**
 * Create combined area chart with all terms
 */
function createCombinedAreaChart() {
    // Check if Plotly is loaded
    if (!window.Plotly) {
        console.warn('Plotly not yet loaded, retrying in 500ms');
        setTimeout(createCombinedAreaChart, 500);
        return;
    }

    // Color scheme for each term
    const colorScheme = {
        'identity': { line: '#b19cd9', fill: 'rgba(177, 156, 217, 0.3)' },           // lilac/purple
        'discourse': { line: '#2ecc71', fill: 'rgba(46, 204, 113, 0.3)' },           // green
        'writing': { line: '#e74c3c', fill: 'rgba(231, 76, 60, 0.3)' },              // red
        'rhetoric': { line: '#3498db', fill: 'rgba(52, 152, 219, 0.3)' },            // blue
        'composition': { line: '#f39c12', fill: 'rgba(243, 156, 18, 0.3)' },         // orange
        'digital media': { line: '#8b4513', fill: 'rgba(139, 69, 19, 0.3)' },        // brown
        'public sphere': { line: '#ff69b4', fill: 'rgba(255, 105, 180, 0.3)' },      // pink
        'civic engagement': { line: '#95a5a6', fill: 'rgba(149, 165, 166, 0.3)' },   // grey
        'digital divide': { line: '#f1c40f', fill: 'rgba(241, 196, 15, 0.3)' },      // yellow
        'online communities': { line: '#1abc9c', fill: 'rgba(26, 188, 156, 0.3)' }   // teal
    };

    // Fetch CSV data
    fetch('/assets/EveryFirstMonday/individual_term_metrics.csv')
        .then(response => response.text())
        .then(data => {
            // Parse CSV
            const lines = data.trim().split('\n');
            const headers = lines[0].split(',').map(h => h.trim());

            const termIndex = headers.indexOf('Term');
            const yearIndex = headers.indexOf('Year');
            const totalOccurrencesIndex = headers.indexOf('TotalOccurrences');

            // Group data by term
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

            // Create traces for all terms
            const terms = ['identity', 'discourse', 'writing', 'rhetoric', 'composition',
                          'digital media', 'digital divide', 'public sphere', 'online communities', 'civic engagement'];

            const traces = terms.map((term) => {
                const colors = colorScheme[term];
                const termLabel = term.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
                const years = termData[term].years;
                const values = termData[term].values;

                return {
                    x: years,
                    y: values,
                    name: termLabel,
                    mode: 'lines',
                    line: {
                        color: colors.line,
                        width: 0.5
                    },
                    fillcolor: colors.fill,
                    fill: 'tonexty',
                    stackgroup: 'one'
                };
            });

            const plotDiv = document.getElementById('plot-combined-area');
            if (plotDiv) {
                const layout = {
                    title: {
                        text: '<b style="font-family: Montserrat, sans-serif; font-weight: 700;">All Terms Raw Frequency Trends (1996-2025)</b>',
                        font: { size: 32, color: '#e5e7eb', family: 'Montserrat, sans-serif' },
                        x: 0.5,
                        xanchor: 'center'
                    },
                    xaxis: {
                        title: {
                            text: 'Year',
                            font: { color: '#aab2c8', size: 16 },
                            standoff: 20
                        },
                        color: '#aab2c8',
                        gridcolor: '#1f2937',
                        showgrid: true,
                        tickfont: { color: '#aab2c8', size: 15 },
                        range: [1995, 2026],
                        tickmode: 'linear',
                        tick0: 1995,
                        dtick: 5,
                        tickpad: 15,
                        tickstandoff: 10
                    },
                    yaxis: {
                        title: {
                            text: 'Total Occurrences',
                            font: { color: '#aab2c8', size: 16 }
                        },
                        color: '#aab2c8',
                        gridcolor: '#1f2937',
                        showgrid: true,
                        tickfont: { color: '#aab2c8', size: 15 },
                        zeroline: true,
                        zerolinewidth: 1,
                        zerolinecolor: '#1f2937',
                        rangemode: 'nonnegative'
                    },
                    plot_bgcolor: '#111827',
                    paper_bgcolor: '#0f172a',
                    font: { family: 'system-ui, sans-serif', color: '#e5e7eb' },
                    responsive: true,
                    margin: { l: 70, r: 80, t: 100, b: 80 },
                    hovermode: 'closest',
                    hoveron: 'fills',
                    showlegend: true,
                    legend: {
                        x: 0.02,
                        y: 0.98,
                        bgcolor: 'rgba(17, 24, 39, 0.8)',
                        bordercolor: '#1f2937',
                        borderwidth: 1
                    }
                };

                try {
                    Plotly.newPlot('plot-combined-area', traces, layout, { responsive: true });
                } catch (e) {
                    console.error('Error plotting combined area chart:', e);
                }
            }
        })
        .catch(err => console.error('Error loading CSV:', err));
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    createCombinedAreaChart();
});
</script>

---

Each colored band shows one term's raw frequency (total occurrences) across the journal's history. The collective height reveals how scholarly attention to all ten concepts together has evolved. Core RhetComp terms (Rhetoric, Writing, Composition) maintain persistent presence, while Identity and Discourse surge in the 2000s–2010s. Digital studies terminology (Digital Media, Online Communities) shows more recent emergence, tracking the field's adaptation to technological change. This macro view shows the discipline's shifting priorities while foundational concepts endure.

<div class="back-to-hub">
  <p>
    <a href="/texts/fm_presentation_agentic-coding/">← Previous: Agentic Coding</a>
    <a href="/texts/fm_presentation/">Back to Hub</a>
    <a href="/texts/fm_presentation_term-trajectories/">Next: Term Trajectories →</a>
  </p>
</div>
