/**
 * first_monday.js
 * Enhances the digital text with smooth scrolling, TOC highlight on scroll, and image carousel.
 *
 * Features:
 * - Smooth scroll behavior for TOC links
 * - Active section highlighting as user scrolls
 * - Image carousel navigation with Previous/Next buttons
 * - Mobile-friendly interactions
 */

/**
 * Image carousel navigation function
 * @param {string} carouselId - The ID of the carousel container
 * @param {number} direction - Direction to move: -1 for previous, 1 for next
 */
function changeImage(carouselId, direction) {
    const carousel = document.getElementById(carouselId);
    const images = carousel.querySelectorAll('.carousel-image');
    let currentIndex = 0;

    // Find currently visible image
    images.forEach((img, idx) => {
        if (img.style.display !== 'none') {
            currentIndex = idx;
        }
    });

    // Hide current image
    images[currentIndex].style.display = 'none';

    // Calculate new index with wrapping
    const newIndex = (currentIndex + direction + images.length) % images.length;

    // Show new image
    images[newIndex].style.display = 'block';

    // Update counter
    const counter = carousel.querySelector('.carousel-current');
    counter.textContent = newIndex + 1;

    // Update label if it exists
    const labelSpan = carousel.querySelector('.carousel-term');
    if (labelSpan) {
        const label = images[newIndex].getAttribute('data-label');
        labelSpan.textContent = label || '';
    }
}

/**
 * Visualization carousel navigation function
 * @param {string} vizCarouselId - The ID of the viz carousel container
 * @param {number} direction - Direction to move: -1 for previous, 1 for next
 */
function changeViz(vizCarouselId, direction) {
    const carousel = document.getElementById(vizCarouselId);
    const views = carousel.querySelectorAll('.viz-view');
    let currentIndex = 0;

    // Chart labels in order
    const chartLabels = ['Identity', 'Discourse', 'Writing', 'Rhetoric', 'Composition', 'Digital Media', 'Digital Divide', 'Public Sphere', 'Online Communities', 'Civic Engagement'];

    // Find currently visible view
    views.forEach((view, idx) => {
        if (view.style.display !== 'none') {
            currentIndex = idx;
        }
    });

    // Hide current view
    views[currentIndex].style.display = 'none';

    // Calculate new index with wrapping
    const newIndex = (currentIndex + direction + views.length) % views.length;

    // Show new view
    views[newIndex].style.display = 'block';

    // Update counter
    const counter = carousel.querySelector('.viz-current');
    counter.textContent = newIndex + 1;

    // Update label
    const labelSpan = carousel.querySelector('.viz-term');
    labelSpan.textContent = chartLabels[newIndex];

    // Resize Plotly chart to fit new width after display change
    setTimeout(() => {
        const plotDiv = views[newIndex].querySelector('[id^="plot-"]');
        if (plotDiv && window.Plotly) {
            Plotly.Plots.resize(plotDiv);
        }
    }, 0);
}

/**
 * Filled area chart carousel navigation function
 * @param {string} carouselId - The ID of the carousel container
 * @param {number} direction - Direction to move: -1 for previous, 1 for next
 */
function changeAreaChart(carouselId, direction) {
    const carousel = document.getElementById(carouselId);
    const views = carousel.querySelectorAll('.viz-view');
    let currentIndex = 0;

    // Chart labels in order
    const chartLabels = ['Identity', 'Discourse', 'Writing', 'Rhetoric', 'Composition', 'Digital Media', 'Digital Divide', 'Public Sphere', 'Online Communities', 'Civic Engagement'];

    // Find currently visible view
    views.forEach((view, idx) => {
        if (view.style.display !== 'none') {
            currentIndex = idx;
        }
    });

    // Hide current view
    views[currentIndex].style.display = 'none';

    // Calculate new index with wrapping
    const newIndex = (currentIndex + direction + views.length) % views.length;

    // Show new view
    views[newIndex].style.display = 'block';

    // Update counter
    const counter = carousel.querySelector('.area-current');
    counter.textContent = newIndex + 1;

    // Update label
    const labelSpan = carousel.querySelector('.area-term');
    labelSpan.textContent = chartLabels[newIndex];

    // Resize Plotly chart to fit new width after display change
    setTimeout(() => {
        const plotDiv = views[newIndex].querySelector('[id^="plot-area-"]');
        if (plotDiv && window.Plotly) {
            Plotly.Plots.resize(plotDiv);
        }
    }, 0);
}

/**
 * Toggle between unigrams and bigrams heatmaps
 * @param {string} type - Either 'unigrams' or 'bigrams'
 */
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

    // Resize the visible Plotly chart
    setTimeout(() => {
        if (type === 'unigrams' && window.Plotly) {
            Plotly.Plots.resize('plot-unigrams-heatmap');
        } else if (window.Plotly) {
            Plotly.Plots.resize('plot-bigrams-heatmap');
        }
    }, 0);
}

/**
 * Create filled area charts from CSV data
 */
function createFilledAreaCharts() {
    // Check if Plotly is loaded
    if (!window.Plotly) {
        console.warn('Plotly not yet loaded, retrying in 500ms');
        setTimeout(createFilledAreaCharts, 500);
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
                if (!lines[i].trim()) continue; // skip empty lines
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

            // Create charts for each term
            const terms = ['identity', 'discourse', 'writing', 'rhetoric', 'composition',
                          'digital media', 'digital divide', 'public sphere', 'online communities', 'civic engagement'];
            const plotIds = ['plot-area-ug1-identity', 'plot-area-ug2-discourse', 'plot-area-ug3-writing',
                            'plot-area-ug4-rhetoric', 'plot-area-ug5-composition',
                            'plot-area-bg1-digital-media', 'plot-area-bg2-digital-divide',
                            'plot-area-bg3-public-sphere', 'plot-area-bg4-online-communities',
                            'plot-area-bg5-civic-engagement'];

            // Temporarily show all viz-view divs so Plotly can render them properly
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

                    // Calculate linear regression for trendline
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
                        line: {
                            color: colors.line,
                            width: 3
                        },
                        hovertemplate: '<b>' + termLabel + '</b><br>Year: %{x}<br>Total Occurrences: %{y}<extra></extra>'
                    };

                    const trendlineTrace = {
                        x: years,
                        y: trendlineY,
                        mode: 'lines',
                        line: {
                            color: colors.line,
                            width: 2,
                            dash: 'dash'
                        },
                        hovertemplate: '<b>Trendline</b><br>Year: %{x}<br>Predicted: %{y:.1f}<extra></extra>',
                        showlegend: false
                    };

                    const layout = {
                        title: {
                            text: '<b style="font-family: Montserrat, sans-serif; font-weight: 700;">"' + termLabel + '" Raw Frequency Trend (1996-2025)</b>',
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
                        showlegend: false
                    };

                    try {
                        Plotly.newPlot(plotId, [trace, trendlineTrace], layout, { responsive: true });
                    } catch (e) {
                        console.error('Error plotting ' + term + ':', e);
                    }
                } else {
                    console.warn('Missing data for term:', term, 'plotDiv:', !!plotDiv, 'data:', !!termData[term], 'colors:', !!colors);
                }
            });

            // Restore original display states after all charts are created
            allVizViews.forEach((el, idx) => {
                el.style.display = originalDisplayStates[idx];
            });

            // Initialize carousel labels
            const filledAreaCarousel = document.getElementById('filled-area-carousel');
            if (filledAreaCarousel) {
                const areaTermSpan = filledAreaCarousel.querySelector('.area-term');
                const areaTotalSpan = filledAreaCarousel.querySelector('.area-total');
                if (areaTermSpan) {
                    areaTermSpan.textContent = 'Identity';
                }
                if (areaTotalSpan) {
                    areaTotalSpan.textContent = '10';
                }
            }
        })
        .catch(err => console.error('Error loading CSV:', err));
}

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

/**
 * Create temporal heatmaps showing % of articles by term and year
 */
function createTemporalHeatmaps() {
    // Check if Plotly is loaded
    if (!window.Plotly) {
        console.warn('Plotly not yet loaded, retrying in 500ms');
        setTimeout(createTemporalHeatmaps, 500);
        return;
    }

    // Fetch CSV data
    fetch('/assets/EveryFirstMonday/individual_term_metrics.csv')
        .then(response => response.text())
        .then(data => {
            // Parse CSV
            const lines = data.trim().split('\n');
            const headers = lines[0].split(',').map(h => h.trim());

            const termIndex = headers.indexOf('Term');
            const yearIndex = headers.indexOf('Year');
            const percentArticlesIndex = headers.indexOf('PercentArticles');
            const articleCountIndex = headers.indexOf('ArticleCount');

            // Create data structures: term -> year -> percent, and year -> total articles
            const heatmapData = {};
            const yearArticleCounts = {}; // year -> total article count
            const allYears = new Set();
            const unigrams = ['composition', 'rhetoric', 'writing', 'discourse', 'identity'];
            const bigrams = ['civic engagement', 'online communities', 'public sphere', 'digital divide', 'digital media'];
            const allTerms = [...unigrams, ...bigrams];

            // Initialize
            allTerms.forEach(term => {
                heatmapData[term] = {};
            });

            // Parse data
            for (let i = 1; i < lines.length; i++) {
                if (!lines[i].trim()) continue;
                const values = lines[i].split(',').map(v => v.trim());
                const term = values[termIndex].toLowerCase();
                const year = parseInt(values[yearIndex]);
                const percentArticles = parseFloat(values[percentArticlesIndex]);
                const articleCount = parseInt(values[articleCountIndex]);

                if (heatmapData[term] !== undefined) {
                    heatmapData[term][year] = percentArticles;
                    // Store the total articles for this year (will be the same for all terms in that year)
                    yearArticleCounts[year] = articleCount;
                    allYears.add(year);
                }
            }

            // Convert to arrays for Plotly
            const sortedYears = Array.from(allYears).sort((a, b) => a - b);

            // Helper function to create heatmaps with different data transformations
            const createHeatmap = (terms, plotId, title, normalizeToMax = false) => {
                const z = [];
                const y = [];
                const customHoverText = []; // For storing custom hover text

                terms.forEach(term => {
                    const termLabel = term.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
                    const row = sortedYears.map(year => heatmapData[term][year] || 0);

                    // Find max value and peak year for this term
                    let maxValue = 1;
                    let peakYear = sortedYears[0];
                    let peakValue = row[0];

                    if (normalizeToMax) {
                        maxValue = Math.max(...row);
                        if (maxValue === 0) maxValue = 1;
                    }

                    // Find peak value and year
                    row.forEach((value, idx) => {
                        if (value > peakValue) {
                            peakValue = value;
                            peakYear = sortedYears[idx];
                        }
                    });

                    // Create y-axis label with peak info
                    const yLabel = `${termLabel}<br><span style="font-size: 12px; color: #aab2c8;">(Peak ${peakValue.toFixed(1)}%, ${peakYear})</span>`;
                    y.push(yLabel);

                    // Create normalized or raw row
                    const normalizedRow = normalizeToMax ? row.map(v => (v / maxValue) * 100) : row;
                    z.push(normalizedRow);

                    // Create custom hover text for this row
                    const hoverRow = sortedYears.map((year, idx) => {
                        const percentOfArticles = row[idx];
                        const totalArticles = yearArticleCounts[year] || 0;
                        const articlesWithTerm = Math.round((percentOfArticles / 100) * totalArticles);

                        if (normalizeToMax) {
                            const normalizedValue = normalizedRow[idx];
                            return `<b>${termLabel}</b><br>Year: ${year}<br>% of Peak Max: ${normalizedValue.toFixed(1)}%<br>${articlesWithTerm} out of ${totalArticles} articles (${percentOfArticles.toFixed(2)}%)<extra></extra>`;
                        } else {
                            return `<b>${termLabel}</b><br>Year: ${year}<br>% of Articles: ${percentOfArticles.toFixed(2)}%<br>${articlesWithTerm} out of ${totalArticles} articles<extra></extra>`;
                        }
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
                        title: normalizeToMax ? '% of Peak' : '% of Articles',
                        thickness: 15,
                        len: 0.7,
                        tickcolor: '#aab2c8',
                        tickfont: { color: '#aab2c8' }
                    }
                };

                const layout = {
                    title: {
                        text: '<b style="font-family: Montserrat, sans-serif; font-weight: 700;">' + title + ' (1996-2025)</b>',
                        font: { size: 32, color: '#e5e7eb', family: 'Montserrat, sans-serif' },
                        x: 0.5,
                        xanchor: 'center'
                    },
                    xaxis: {
                        title: {
                            text: 'Year',
                            font: { color: '#aab2c8', size: 16 }
                        },
                        color: '#aab2c8',
                        tickfont: { color: '#aab2c8', size: 15 },
                        side: 'bottom'
                    },
                    yaxis: {
                        title: {
                            text: 'Term',
                            font: { color: '#aab2c8', size: 16 }
                        },
                        color: '#aab2c8',
                        tickfont: { color: '#aab2c8', size: 15 }
                    },
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

            // Helper function to calculate linear regression for trendlines
            const calculateTrendlinePoints = (data, years) => {
                if (data.length < 2) return data;

                const validPoints = data.map((y, i) => ({ x: years[i], y })).filter(p => p.y !== null && p.y !== undefined);
                if (validPoints.length < 2) return data;

                const m = validPoints.length;
                const sumX = validPoints.reduce((sum, p) => sum + p.x, 0);
                const sumY = validPoints.reduce((sum, p) => sum + p.y, 0);
                const sumXY = validPoints.reduce((sum, p) => sum + p.x * p.y, 0);
                const sumX2 = validPoints.reduce((sum, p) => sum + p.x * p.x, 0);

                const slope = (m * sumXY - sumX * sumY) / (m * sumX2 - sumX * sumX);
                const intercept = (sumY - slope * sumX) / m;

                return years.map(year => slope * year + intercept);
            };

            // Create sparkline-style visualization with 10 separate mini-graphs
            const createTrendlineVisualization = (terms) => {
                const termColors = [
                    '#440154', '#31688e', '#35b779', '#fde724', '#ff6e3a',
                    '#d62728', '#1f77b4', '#ff7f0e', '#2ca02c', '#9467bd'
                ];

                const plotDiv = document.getElementById('plot-trendlines');
                if (!plotDiv) return;

                // Create a container for the grid of mini-graphs
                plotDiv.innerHTML = '';
                const gridContainer = document.createElement('div');
                gridContainer.style.display = 'grid';
                gridContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';
                gridContainer.style.gap = '2rem';
                gridContainer.style.padding = '2rem';
                gridContainer.style.backgroundColor = '#0f172a';

                const gridTitle = document.createElement('h3');
                gridTitle.textContent = 'Term Trendlines (% of Articles Per Year)';
                gridTitle.style.gridColumn = '1 / -1';
                gridTitle.style.color = '#e5e7eb';
                gridTitle.style.textAlign = 'center';
                gridTitle.style.fontFamily = 'system-ui, sans-serif';
                gridTitle.style.fontSize = '1.5rem';
                gridTitle.style.marginBottom = '1rem';
                gridContainer.appendChild(gridTitle);

                terms.forEach((term, idx) => {
                    const termLabel = term.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
                    const row = sortedYears.map(year => heatmapData[term][year] || 0);
                    const percentageValues = row;

                    // Calculate trendline
                    const trendlineData = calculateTrendlinePoints(percentageValues, sortedYears);

                    // Create mini-plot container
                    const miniPlotDiv = document.createElement('div');
                    miniPlotDiv.id = `plot-sparkline-${idx}`;
                    miniPlotDiv.style.width = '100%';
                    miniPlotDiv.style.height = '300px';
                    gridContainer.appendChild(miniPlotDiv);

                    // Create traces for this mini-graph
                    const traces = [
                        {
                            x: sortedYears,
                            y: trendlineData,
                            line: {
                                color: termColors[idx],
                                width: 3
                            },
                            mode: 'lines',
                            hovertemplate: `<b>${termLabel}</b><br>Year: %{x}<br>% of Articles: %{customdata:.2f}%<extra></extra>`,
                            customdata: percentageValues,
                            showlegend: false,
                            name: ''
                        }
                    ];

                    // Create layout for this mini-graph
                    const layout = {
                        title: {
                            text: termLabel,
                            font: { size: 14, color: '#e5e7eb', family: 'system-ui, sans-serif' }
                        },
                        xaxis: {
                            title: {
                                text: 'Year',
                                font: { color: '#aab2c8', size: 12 }
                            },
                            color: '#aab2c8',
                            tickfont: { color: '#aab2c8', size: 10 }
                        },
                        yaxis: {
                            title: {
                                text: '% of Articles',
                                font: { color: '#aab2c8', size: 12 }
                            },
                            color: '#aab2c8',
                            tickfont: { color: '#aab2c8', size: 10 },
                            range: [0, 100]
                        },
                        plot_bgcolor: '#111827',
                        paper_bgcolor: '#0f172a',
                        font: { family: 'system-ui, sans-serif', color: '#e5e7eb' },
                        responsive: true,
                        margin: { l: 50, r: 20, t: 40, b: 40 },
                        hovermode: 'x unified'
                    };

                    try {
                        Plotly.newPlot(`plot-sparkline-${idx}`, traces, layout, { responsive: true });
                    } catch (e) {
                        console.error(`Error plotting sparkline ${idx}:`, e);
                    }
                });

                plotDiv.appendChild(gridContainer);
            };

            // Create three heatmaps
            createHeatmap(unigrams, 'plot-unigrams-heatmap', 'Unigram Term Prevalence Across Years', false);
            createHeatmap(bigrams, 'plot-bigrams-heatmap', 'Bigram Term Prevalence Across Years', false);

            // For normalized heatmap, use unigrams first then bigrams (both in reverse order as defined above)
            const orderedTerms = [...unigrams, ...bigrams];
            createHeatmap(orderedTerms, 'plot-normalized-heatmap', 'Term Prevalence Normalized to Peak Maximum', true);
        })
        .catch(err => console.error('Error loading CSV:', err));
}

document.addEventListener('DOMContentLoaded', function() {
    const toc = document.getElementById('toc');
    const tocLinks = toc ? toc.querySelectorAll('a[href^="#"]') : [];
    const sections = document.querySelectorAll('section[id], header[id]');

    /**
     * Highlight active TOC link based on scroll position
     */
    function updateActiveTocLink() {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            // If section is in viewport, mark it as current
            if (window.scrollY >= sectionTop - 200) {
                currentSection = section.getAttribute('id');
            }
        });

        // Update active state on all TOC links
        tocLinks.forEach(link => {
            const href = link.getAttribute('href');
            const targetId = href.substring(1);

            if (targetId === currentSection) {
                link.style.color = 'var(--link-hover)';
                link.style.fontWeight = '700';
            } else {
                link.style.color = 'var(--link)';
                link.style.fontWeight = '400';
            }
        });
    }

    /**
     * Smooth scroll with proper offset for fixed headers
     */
    tocLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Scroll with offset for header height (~80px)
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                // Update TOC highlight immediately
                updateActiveTocLink();
            }
        });
    });

    /**
     * Update highlight on scroll
     */
    window.addEventListener('scroll', updateActiveTocLink);

    /**
     * Initialize carousels with their first label
     */
    const carousels = document.querySelectorAll('.image-carousel');
    carousels.forEach(carousel => {
        const firstImage = carousel.querySelector('.carousel-image');
        const labelSpan = carousel.querySelector('.carousel-term');
        if (firstImage && labelSpan) {
            const label = firstImage.getAttribute('data-label');
            labelSpan.textContent = label || '';
        }
    });

    /**
     * Initialize visualization carousel with first term label
     */
    const vizCarousel = document.getElementById('viz-carousel');
    if (vizCarousel) {
        const vizTermSpan = vizCarousel.querySelector('.viz-term');
        const chartLabels = ['Identity', 'Discourse', 'Writing', 'Rhetoric', 'Composition', 'Digital Media', 'Digital Divide', 'Public Sphere', 'Online Communities', 'Civic Engagement'];
        if (vizTermSpan) {
            vizTermSpan.textContent = chartLabels[0];
        }
    }

    /**
     * Create filled area charts from CSV data
     */
    createFilledAreaCharts();

    /**
     * Create combined area chart with all terms
     */
    createCombinedAreaChart();

    /**
     * Create temporal heatmaps (unigrams and bigrams)
     */
    createTemporalHeatmaps();

    /**
     * Initialize on page load
     */
    updateActiveTocLink();
});

/**
 * Optional: Lazy loading for images
 * Uncomment if you want to optimize image loading
 */
/*
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img.lazy').forEach(img => imageObserver.observe(img));
}
*/

/**
 * Copy-to-clipboard functionality for code blocks (optional enhancement)
 */
document.querySelectorAll('.code-block').forEach(block => {
    // Create copy button
    const copyBtn = document.createElement('button');
    copyBtn.textContent = 'Copy';
    copyBtn.style.cssText = `
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        padding: 0.25rem 0.75rem;
        background: var(--accent);
        color: var(--accent-contrast);
        border: none;
        border-radius: 0.25rem;
        cursor: pointer;
        font-size: 0.875rem;
        opacity: 0;
        transition: opacity 0.2s;
    `;

    const blockWrapper = document.createElement('div');
    blockWrapper.style.position = 'relative';
    block.parentNode.insertBefore(blockWrapper, block);
    blockWrapper.appendChild(block);
    blockWrapper.appendChild(copyBtn);

    // Show button on hover
    blockWrapper.addEventListener('mouseenter', () => {
        copyBtn.style.opacity = '1';
    });

    blockWrapper.addEventListener('mouseleave', () => {
        copyBtn.style.opacity = '0';
    });

    // Copy functionality
    copyBtn.addEventListener('click', () => {
        const text = block.textContent;
        navigator.clipboard.writeText(text).then(() => {
            const originalText = copyBtn.textContent;
            copyBtn.textContent = 'Copied!';
            setTimeout(() => {
                copyBtn.textContent = originalText;
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy:', err);
        });
    });
});
