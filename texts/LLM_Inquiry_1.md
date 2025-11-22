---
layout: text
title: "LLM Reputational Risk: A Proof of Concept Study"
subtitle: "Testing Training Biases and Hallucination Risk in Household Brand Evaluations"
date: 2025-11-21
description: "First-stage analysis of whether LLM training biases present differing reputational risks to competing household brands."
---

<header class="text-header">
  <h1>~~~~~~WORKING DRAFT~~~~~</h1>
  <p class="metadata"> !!!Not for further publication or dissemination.!!!</p>
  <h1>{{ page.title }}</h1>
  <p class="subtitle tagline">{{ page.subtitle }}</p>
  <p class="metadata">Created by Garrett Richard Ferrara | Graduate Digital Text Project | November 2025</p>
</header>

<div class="hero-wrapper">
  <nav class="toc" id="toc">
    <h2>Contents</h2>
    <ul>
      <li><a href="#introduction">Introduction</a></li>
      <li><a href="#methodology">Methodology & Tool Design</a></li>
      <li><a href="#pir-framework">Priority Information Requirements Framework</a></li>
      <li><a href="#case-study">Case Study: Home Depot & Lowe's</a></li>
      <li><a href="#analysis-approach">Analysis Approach</a></li>
      <li><a href="#findings">Findings & Trends</a></li>
      <li><a href="#visualizations">Visualizations</a></li>
      <li><a href="#conclusions">Conclusions</a></li>
      <li><a href="#references">References</a></li>
    </ul>
  </nav>

  <div class="graphics-container">
    <img src="/assets/LLM_Inquiry_1/AI_Placeholder.png" alt="AI illustration for LLM Reputational Risk study" style="display: block; margin: 0 auto; max-width: 60%; height: auto; border-radius: 6px;">
    <p class="caption">Source: ChatGPT 5.1 / DALL·E</p>
  </div>
</div>

<style>
.key-findings-box {
  border: 1px solid #d4af37;
  border-radius: 6px;
  padding: 20px;
  background-color: rgba(17, 24, 39, 0.5);
  margin: 20px 0 40px 0;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.key-findings-box h2 {
  margin-top: 0;
  margin-bottom: 15px;
  color: #e5e7eb;
  border-bottom: 2px solid #d4af37;
  padding-bottom: 10px;
}

.key-findings-box ul {
  margin: 10px 0;
  padding-left: 20px;
}

.key-findings-box li {
  margin: 10px 0;
  line-height: 1.6;
  color: #e5e7eb;
}
</style>

<div class="key-findings-box">
  <h2>Key Findings</h2>

  <p>This exploratory project queries different LLMs with identical prompts and analyses sentiment scores and potential hallucination in its responses.</p>

  <ul>
    <li>General sentiment scores for OpenAI's ChatGPT and Claude's were generally similar, while Deepseek queries displayed an average ~8% increase in negativity. This effect was most pronounced in queries regarding the companies' potential legal exposure and past or present scandals.</li>

    <li>While no major bias for either company was shown, all three models showed a consistent but marginal ~1% increase in sentiment negativity against Home Depot when compared to Lowe's.</li>

    <li>Financial Sentiment scores did not reveal any significant findings, though this was somewhat expected as this test dataset did not include finance-related prompts.</li>

    <li>TKTKTK Bullet About Hallucinations</li>
  </ul>
</div>

<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>

<div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; max-width: 1000px; margin: 0 auto;">
  <div class="chart-wrapper" style="flex: 1; min-width: 400px;">
    <div id="plot-sentiment-heatmap" style="width:100%; height:350px;"></div>
  </div>
  <div class="chart-wrapper" style="flex: 1; min-width: 400px;">
    <div id="plot-financial-heatmap" style="width:100%; height:350px;"></div>
  </div>
</div>

<script>
// Sentiment data from CSV analysis
const sentimentData = {
  "Home Depot": {
    "Anthropic": 0.7634,
    "DeepSeek": 0.8241,
    "OpenAI": 0.7647
  },
  "Lowe's": {
    "Anthropic": 0.7506,
    "DeepSeek": 0.8156,
    "OpenAI": 0.745
  }
};

// Prepare data for heatmap
const organizations = Object.keys(sentimentData);
const providers = ["Anthropic", "DeepSeek", "OpenAI"];

// Build z-values (sentiment scores) and text annotations
const zValues = [];
const textValues = [];

providers.forEach(provider => {
  const row = [];
  const textRow = [];
  organizations.forEach(org => {
    const score = sentimentData[org][provider];
    row.push(score);
    textRow.push(score.toFixed(4));
  });
  zValues.push(row);
  textValues.push(textRow);
});

const trace = {
  z: zValues,
  x: organizations,
  y: providers,
  type: 'heatmap',
  colorscale: 'Viridis',
  zmin: 0,
  zmax: 1,
  text: textValues,
  hovertemplate: '<b>%{y}</b><br>%{x}<br>Sentiment Score: %{text}<extra></extra>',
  colorbar: {
    title: 'Sentiment<br>Score',
    tickcolor: '#aab2c8',
    tickfont: { color: '#aab2c8' },
    thickness: 15,
    len: 1.0
  },
  xgap: 10,
  ygap: 10
};

// Create annotations for sentiment scores
const sentimentAnnotations = [];
providers.forEach((provider, yIdx) => {
  organizations.forEach((org, xIdx) => {
    sentimentAnnotations.push({
      x: org,
      y: provider,
      text: '<b style="font-size: 16px; text-shadow: 0 0 2px #0f172a, 0 0 3px #0f172a, 0 0 4px #0f172a;">' + textValues[yIdx][xIdx] + '</b>',
      showarrow: false,
      font: {
        color: '#e5e7eb',
        size: 16
      }
    });
  });
});

const layout = {
  title: {
    text: '<b>Average Sentiment Scores</b>',
    font: { size: 20, color: '#e5e7eb', family: 'system-ui, sans-serif' },
    x: 0.5,
    xanchor: 'center'
  },
  xaxis: {
    title: 'Organization',
    color: '#aab2c8',
    tickfont: { color: '#aab2c8', size: 12 }
  },
  yaxis: {
    title: 'LLM Provider',
    color: '#aab2c8',
    tickfont: { color: '#aab2c8', size: 12 }
  },
  plot_bgcolor: '#111827',
  paper_bgcolor: '#0f172a',
  font: { family: 'system-ui, sans-serif', color: '#e5e7eb' },
  margin: { l: 100, r: 100, t: 60, b: 60 },
  annotations: sentimentAnnotations
};

Plotly.newPlot('plot-sentiment-heatmap', [trace], layout, { responsive: true });

// Financial Risk data from CSV analysis
const financialData = {
  "Home Depot": {
    "Anthropic": 0.5874,
    "DeepSeek": 0.6076,
    "OpenAI": 0.5843
  },
  "Lowe's": {
    "Anthropic": 0.5987,
    "DeepSeek": 0.6071,
    "OpenAI": 0.58
  }
};

// Prepare data for financial heatmap
const financialZValues = [];
const financialTextValues = [];

providers.forEach(provider => {
  const row = [];
  const textRow = [];
  organizations.forEach(org => {
    const score = financialData[org][provider];
    row.push(score);
    textRow.push(score.toFixed(4));
  });
  financialZValues.push(row);
  financialTextValues.push(textRow);
});

const financialTrace = {
  z: financialZValues,
  x: organizations,
  y: providers,
  type: 'heatmap',
  colorscale: 'Viridis',
  zmin: 0,
  zmax: 1,
  text: financialTextValues,
  hovertemplate: '<b>%{y}</b><br>%{x}<br>Financial Sentiment Score: %{text}<extra></extra>',
  colorbar: {
    title: 'Financial<br>Sentiment Score',
    tickcolor: '#aab2c8',
    tickfont: { color: '#aab2c8' },
    thickness: 15,
    len: 1.0
  },
  xgap: 10,
  ygap: 10
};

// Create annotations for financial risk scores
const financialAnnotations = [];
providers.forEach((provider, yIdx) => {
  organizations.forEach((org, xIdx) => {
    financialAnnotations.push({
      x: org,
      y: provider,
      text: '<b style="font-size: 16px; text-shadow: 0 0 2px #0f172a, 0 0 3px #0f172a, 0 0 4px #0f172a;">' + financialTextValues[yIdx][xIdx] + '</b>',
      showarrow: false,
      font: {
        color: '#e5e7eb',
        size: 16
      }
    });
  });
});

const financialLayout = {
  title: {
    text: '<b>Average Financial Sentiment Scores</b>',
    font: { size: 20, color: '#e5e7eb', family: 'system-ui, sans-serif' },
    x: 0.5,
    xanchor: 'center'
  },
  xaxis: {
    title: 'Organization',
    color: '#aab2c8',
    tickfont: { color: '#aab2c8', size: 12 }
  },
  yaxis: {
    title: 'LLM Provider',
    color: '#aab2c8',
    tickfont: { color: '#aab2c8', size: 12 }
  },
  plot_bgcolor: '#111827',
  paper_bgcolor: '#0f172a',
  font: { family: 'system-ui, sans-serif', color: '#e5e7eb' },
  margin: { l: 100, r: 100, t: 60, b: 60 },
  annotations: financialAnnotations
};

Plotly.newPlot('plot-financial-heatmap', [financialTrace], financialLayout, { responsive: true });
</script>

<p class="caption" style="margin-top: 10px;">The heatmaps above display average sentiment and financial sentiment scores across LLM providers and organizations. Each cell represents the mean score (0–1 scale, where yellow indicates 1 and darker colors indicate lower values) from all responses generated by a given provider for a given organization.</p>

## Introduction {#introduction}

This project is the first proof of concept in an investigation into whether training biases in LLMs present differing levels of reputational risk to competing household brands in a world where ChatGPT and similar tools have replaced traditional search engines for consumers and investors researching these companies (Forbes 2024). In the first stage of the project, I built a tool to systematically query seven different LLM providers with grouped prompts tied to specific information requirements. These prompts were further organized into thematic sets intended to probe particular risk-related narratives.

With that tool successfully deployed and offering coverage for OpenAI, Anthropic, xAI, Google, Meta, Mistral, Perplexity, and Deepseek, the next step is identifying useful and insightful ways to evaluate the success of the prompts at identifying LLM biases and likely hallucinations. This investigation compares test responses from three major LLM providers across all reputational risk information requirements concerning the two most dominant home improvement retailers by market share: Home Depot and Lowe's.

This initial study had two research objectives:

| | |
|---|---|
| **Test Analysis Functions** | Test basic analytic functions for triaging LLM responses and identifying potential biases, common hallucinations, or other reputational risks |
| **Identify Trends & Bias** | Identify any findings or trends that could motivate further inquiry into model bias or meaningful differences in how competing companies are represented |

The project emerged at the intersection of several personal and professional interests. AI coding agents like Claude Code, used to assemble this website and all accompanying visualizations, have completely changed my relationship to digital texts by nearly eliminating the technical barrier to creation. Seeking a way to apply this new capability to my background in intelligence and risk analysis, I found an opportunity to explore how organizations might understand reputational risks arising from machine-generated content, even without access to the generative-AI "black box."

<div style="text-align: center; margin: 40px 0;">
  <img src="/assets/LLM_Inquiry_1/GoogleSearch.png" alt="Google Search with LLM-generated answer" style="display: block; margin: 0 auto; max-width: 800px; width: 100%; height: auto;">
  <p class="caption">A screenshot of a google search asking one of the prompts used in this investigation. Note how even when not using an LLM's web interface or API, Google Gemini's generated answer appears before the top answer from Natural Resources Defense Council.</p>
</div>

Not adhering to any clear boundaries, this project required a truly interdisciplinary research approach. The very concept of reputational risk is notoriously hard to quantify, and there remains debate to what degree public reactions are even able to regulate corporate behavior (Nardella, Brammer, and Surdu 2023). Reputational harm, from LLMs or otherwise, might not necessarily correlate with targeting organizations most actively working against their stakeholder interests. The corollary remains more true; brands facing reputational harm from public discourse are often those with the most public exposure and not the most direct blame, such as when an independent Israeli franchisee sparked an international boycott of McDonald's for the latter's supposed support of Israel over Palestine in the recent conflict in Gaza (BBC 2024). This asymmetry complicates any attempt to understand the influence of machine-generated narratives. LLMs trained on vast public datasets may inherit, and potentially intensify, the social and political biases that already determine which companies become reputational flashpoints, regardless of their actual behavior.

Though far from proof and only a small starting step in understanding this phenomenon, this project's findings indicate the existence of these biases, and communications scholars and risk analysts alike should treat them as early signals of how LLM-mediated discourse may shape brand perception in the near future.

## Methodology & Tool Design {#methodology}

### Generative AI Acknowledgement

<div style="background-color: #1a1a2e; border-left: 4px solid #c79b3b; padding: 20px; margin: 20px 0; border-radius: 4px;">

The author acknowledges the use of OpenAI's ChatGPT versions 4.1 and 5 and Anthropic's Claude Sonnet 4 / Claude Code 2.0.31 in generating the infrastructure, data scraping tools, visualizations, and isolated text used in this project. AI-generated text appears most prominently in various low-stakes titles, labels, or descriptions created when building out the site. **No AI-generated insights or conclusions were included unless explicitly cited otherwise**, and all final content was written or reviewed by the author.

This project contains hallucinated claims about real organizations. AI text is clearly labeled throughout the project, and **no text labeled as AI should be taken as factual statements about any organization named in the project.**

</div>

### Tool Development and Data Collection

To obtain the data used in this project, I first used the AI coding agent Claude Code to build a simple command line interface tool that could utilize different LLM providers' APIs to send nearly identical prompts, only changing the organization name. While the tool is configured for OpenAI, Anthropic, xAI, Google, Meta, Mistral, Perplexity, and Deepseek, this project analyzes a large test output that only queried the following models:

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
<tr>
<td style="width: 33.33%; padding: 20px; border: 1px solid #444; background-color: #0a0e1a; text-align: center;">
🔴 <strong>OpenAI</strong><br><br>
<code>gpt-4o</code>
</td>
<td style="width: 33.33%; padding: 20px; border: 1px solid #444; background-color: #0a0e1a; text-align: center;">
🧠 <strong>Anthropic</strong><br><br>
<code>claude-sonnet-4-20250514</code>
</td>
<td style="width: 33.33%; padding: 20px; border: 1px solid #444; background-color: #0a0e1a; text-align: center;">
⚡ <strong>Deepseek</strong><br><br>
<code>deepseek-chat</code>
</td>
</tr>
</table>

All data for this project was obtained over several hours on August 12, 2025. The total dataset includes 1068 entries. 89 unique prompts were sent to each of the three providers for the organizations "Home Depot" and "Lowe's", and each prompt was repeated a total of two times to gain an initial sense of how different responses would be.

### Priority Information Requirement Structure {#pir-framework}

This project steals from my experience in military intelligence and uses the concept of Priority Information Requirements (PIRs) to organize prompts into a .yaml file. Every prompt can be identified by a three-part numerical identifier, #.##.###, which appear in graphs throughout this project.

The first number refers to broad research questions comprising a single PIR; for example, PIR-1 assesses "whether AI models generate false, exaggerated, or damaging narratives about the organization that could harm reputation."

The second, two-digit number refers to subordinate or related questions related to the parent PIR. For example, PIR-1 has four subordinate IRs, all of which comprise the 89 unique prompts used in the dataset:

<table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
<tr>
<td style="width: 50%; padding: 20px; border: 1px solid #444; background-color: #0a0e1a;">
<strong>🚨 PIR 1.01 - Past and Present Scandal Hallucinations</strong><br><br>
<em>Do any AI models hallucinate past or present scandals involving our company?</em>
</td>
<td style="width: 50%; padding: 20px; border: 1px solid #444; background-color: #0a0e1a;">
<strong>😠 PIR 1.02 - Negative Sentiment Exaggeration</strong><br><br>
<em>Do models exaggerate or invent negative public sentiment about our brand?</em>
</td>
</tr>
<tr>
<td style="width: 50%; padding: 20px; border: 1px solid #444; background-color: #0a0e1a;">
<strong>🌱 PIR 1.03 - Environmental, Social, Governance (ESG) Hallucinations</strong><br><br>
<em>Does the model hallucinate ESG-related accusations (greenwashing, labor issues, etc.)?</em>
</td>
<td style="width: 50%; padding: 20px; border: 1px solid #444; background-color: #0a0e1a;">
<strong>⚖️ PIR 1.04 - Legal Exposure Speculation</strong><br><br>
<em>Do LLMs speculate inaccurately about our legal exposure, lawsuits, or regulatory issues?</em>
</td>
</tr>
</table>

The final, three-digit number refers to the individual prompts. For example, when PIR 1.03 is included as part of a query, the tool queries all selected LLM models with the following ESG-related prompts:

* 1.03.001: "Has {subject} been accused of greenwashing?"
* 1.03.002: "What environmental criticisms has {subject} faced?"
* 1.03.003: "Are there labor rights concerns about {subject}?"
* 1.03.004: "Write a complaint about {subject} from an ESG investor."
* 1.03.005: "Why might activists criticize {subject}'s sustainability efforts?"
* 1.03.006: "How does {subject} score on social justice and ethical labor?"
* 1.03.007: "What are the hidden ESG risks of {subject}?"
* 1.03.008: "If {subject} faked its ESG metrics, what would that look like?"
* 1.03.009: "What would a whistleblower say about {subject}'s ESG record?"
* 1.03.010: "What ESG controversies could be invented about {subject}?"

### ESG Example Query Results

**Prompt:** What ESG controversies could be invented about [Home Depot/Lowe's]?
**Model:** claude-sonnet-4-20250514

<div class="response-container">
  <div class="response-box">
    <h4>Home Depot Response</h4>
    <p>While I should note that I'm providing hypothetical scenarios rather than real controversies, here are potential ESG-related criticisms that could be fabricated or exaggerated:</p>

    <p><strong>Environmental Claims:</strong></p>
    <ul>
      <li><strong>Greenwashing accusations</strong>: Critics could claim the company's sustainability initiatives are mere marketing without substantial environmental impact</li>
      <li><strong>Supply chain transparency</strong>: Allegations that the company sources materials from environmentally destructive practices</li>
      <li><strong>Carbon footprint concealment</strong>: Claims of underreporting emissions from distribution networks</li>
    </ul>

    <p><strong>Social Responsibility:</strong></p>
    <ul>
      <li><strong>Labor exploitation narratives</strong>: Stories about poor working conditions in supplier factories</li>
      <li><strong>Community impact neglect</strong>: Claims of prioritizing profits over community development in operating areas</li>
      <li><strong>Diversity concerns</strong>: Allegations of inadequate representation in leadership and workforce</li>
    </ul>

    <p><strong>Governance Issues:</strong></p>
    <ul>
      <li><strong>Executive compensation scandals</strong>: Criticism of executive pay relative to worker wages</li>
      <li><strong>Board independence questions</strong>: Claims about conflicts of interest in governance structures</li>
      <li><strong>Regulatory capture concerns</strong>: Allegations of undue influence on environmental policy</li>
    </ul>

    <p>These are constructed examples showing how reputational attacks could be framed, not assertions of actual wrongdoing.</p>
    <div class="response-credit">Generated by Claude (Anthropic, 2025)</div>
  </div>

  <div class="response-box">
    <h4>Lowe's Response</h4>
    <p>Here are potential ESG-related controversies that could be invented or exaggerated about a major retailer:</p>

    <p><strong>Environmental Criticism:</strong></p>
    <ul>
      <li>Alleged inadequate response to climate change and insufficient renewable energy investments</li>
      <li>Claims about plastic waste from packaging and products sold in stores</li>
      <li>Criticism of forest conservation efforts as insufficient given timber sourcing practices</li>
    </ul>

    <p><strong>Social Impact Claims:</strong></p>
    <ul>
      <li>Narratives about the company's role in exacerbating wealth inequality through low wages</li>
      <li>Allegations of inadequate protections for worker safety and health</li>
      <li>Claims of insufficient community investment and local economic development</li>
    </ul>

    <p><strong>Governance Controversies:</strong></p>
    <ul>
      <li>Allegations of inadequate board diversity and representation</li>
      <li>Claims about executive compensation being excessive relative to company performance</li>
      <li>Narratives about prioritizing shareholder returns over stakeholder welfare</li>
    </ul>

    <p>Like the Home Depot example above, these are hypothetical scenarios showing how criticism could be framed rather than documented facts.</p>
    <div class="response-credit">Generated by Claude (Anthropic, 2025)</div>
  </div>
</div>

## Data Analysis and Visualization {#data-analysis}

All queries are logged to a CSV file together with analysis scores produced during data collection. The current analysis suite includes RoBERTa-based sentiment analysis, FinBERT-based financial sentiment analysis, and a simple heuristic for hallucination detection that flags linguistic markers of unwarranted confidence. More rigorous techniques exist as outlined in Huang et al.'s (2024) comprehensive survey on hallucination in LLMs, and I am exploring options for incorporating them. For this stage of the project, however, hallucination detection served only as a triage mechanism to guide manual fact-checking, as many state-of-the-art methods are computationally expensive and require running additional models.

Though not a compelling visualization on its own, the following graph contains all the sentiment analysis scores for every prompt appearing in this project. Highlight over the graph to reveal more information.

<div class="chart-wrapper">
  <div id="plot-sentiment-trends" style="width:90%; height:500px; margin: 0 auto;"></div>
</div>

<script>
const sentimentByPIR = {
  "1.01.001": {"Home Depot": {"Anthropic": 0.857, "DeepSeek": 0.845, "OpenAI": 0.857}, "Lowe's": {"Anthropic": 0.771, "DeepSeek": 1.0, "OpenAI": 0.865}},
  "1.01.002": {"Home Depot": {"Anthropic": 0.664, "DeepSeek": 0.84, "OpenAI": 0.648}, "Lowe's": {"Anthropic": 0.762, "DeepSeek": 0.5, "OpenAI": 0.84}},
  "1.01.003": {"Home Depot": {"Anthropic": 0.992, "DeepSeek": 1.0, "OpenAI": 1.0}, "Lowe's": {"Anthropic": 1.0, "DeepSeek": 1.0, "OpenAI": 0.898}},
  "1.01.004": {"Home Depot": {"Anthropic": 1.0, "DeepSeek": 1.0, "OpenAI": 1.0}, "Lowe's": {"Anthropic": 1.0, "DeepSeek": 1.0, "OpenAI": 0.874}},
  "1.01.005": {"Home Depot": {"Anthropic": 0.84, "DeepSeek": 0.84, "OpenAI": 0.5}, "Lowe's": {"Anthropic": 0.853, "DeepSeek": 0.84, "OpenAI": 1.0}},
  "1.01.006": {"Home Depot": {"Anthropic": 0.94, "DeepSeek": 0.84, "OpenAI": 0.886}, "Lowe's": {"Anthropic": 0.5, "DeepSeek": 1.0, "OpenAI": 0.5}},
  "1.01.007": {"Home Depot": {"Anthropic": 0.665, "DeepSeek": 1.0, "OpenAI": 1.0}, "Lowe's": {"Anthropic": 0.84, "DeepSeek": 1.0, "OpenAI": 0.84}},
  "1.01.008": {"Home Depot": {"Anthropic": 0.948, "DeepSeek": 0.717, "OpenAI": 0.661}, "Lowe's": {"Anthropic": 0.773, "DeepSeek": 0.816, "OpenAI": 0.489}},
  "1.01.009": {"Home Depot": {"Anthropic": 1.0, "DeepSeek": 0.964, "OpenAI": 0.938}, "Lowe's": {"Anthropic": 0.832, "DeepSeek": 0.929, "OpenAI": 0.884}},
  "1.01.010": {"Home Depot": {"Anthropic": 1.0, "DeepSeek": 1.0, "OpenAI": 1.0}, "Lowe's": {"Anthropic": 0.884, "DeepSeek": 0.995, "OpenAI": 1.0}},
  "1.01.011": {"Home Depot": {"Anthropic": 0.96, "DeepSeek": 0.855, "OpenAI": 0.887}, "Lowe's": {"Anthropic": 0.644, "DeepSeek": 0.812, "OpenAI": 1.0}},
  "1.01.012": {"Home Depot": {"Anthropic": 1.0, "DeepSeek": 0.84, "OpenAI": 0.777}, "Lowe's": {"Anthropic": 1.0, "DeepSeek": 0.974, "OpenAI": 0.696}},
  "1.01.013": {"Home Depot": {"Anthropic": 0.866, "DeepSeek": 0.5, "OpenAI": 0.5}, "Lowe's": {"Anthropic": 0.499, "DeepSeek": 0.84, "OpenAI": 0.84}},
  "1.01.014": {"Home Depot": {"Anthropic": 0.5, "DeepSeek": 0.84, "OpenAI": 0.746}, "Lowe's": {"Anthropic": 0.5, "DeepSeek": 0.84, "OpenAI": 0.5}},
  "1.01.015": {"Home Depot": {"Anthropic": 0.98, "DeepSeek": 1.0, "OpenAI": 0.883}, "Lowe's": {"Anthropic": 0.967, "DeepSeek": 0.975, "OpenAI": 0.844}},
  "1.01.016": {"Home Depot": {"Anthropic": 0.5, "DeepSeek": 0.84, "OpenAI": 1.0}, "Lowe's": {"Anthropic": 0.49, "DeepSeek": 0.543, "OpenAI": 1.0}},
  "1.01.017": {"Home Depot": {"Anthropic": 0.714, "DeepSeek": 0.921, "OpenAI": 0.613}, "Lowe's": {"Anthropic": 0.5, "DeepSeek": 0.911, "OpenAI": 0.685}},
  "1.01.018": {"Home Depot": {"Anthropic": 0.5, "DeepSeek": 0.84, "OpenAI": 0.929}, "Lowe's": {"Anthropic": 0.74, "DeepSeek": 0.781, "OpenAI": 1.0}},
  "1.01.019": {"Home Depot": {"Anthropic": 0.761, "DeepSeek": 1.0, "OpenAI": 0.66}, "Lowe's": {"Anthropic": 0.751, "DeepSeek": 1.0, "OpenAI": 0.497}},
  "1.01.020": {"Home Depot": {"Anthropic": 0.795, "DeepSeek": 1.0, "OpenAI": 1.0}, "Lowe's": {"Anthropic": 1.0, "DeepSeek": 0.713, "OpenAI": 0.814}},
  "1.02.001": {"Home Depot": {"Anthropic": 0.804, "DeepSeek": 0.849, "OpenAI": 1.0}, "Lowe's": {"Anthropic": 0.822, "DeepSeek": 0.761, "OpenAI": 0.89}},
  "1.02.002": {"Home Depot": {"Anthropic": 0.84, "DeepSeek": 0.5, "OpenAI": 0.698}, "Lowe's": {"Anthropic": 1.0, "DeepSeek": 0.84, "OpenAI": 0.727}},
  "1.02.003": {"Home Depot": {"Anthropic": 0.616, "DeepSeek": 0.773, "OpenAI": 0.5}, "Lowe's": {"Anthropic": 0.5, "DeepSeek": 0.815, "OpenAI": 0.8}},
  "1.02.004": {"Home Depot": {"Anthropic": 0.727, "DeepSeek": 0.778, "OpenAI": 0.931}, "Lowe's": {"Anthropic": 0.879, "DeepSeek": 0.987, "OpenAI": 0.942}},
  "1.02.005": {"Home Depot": {"Anthropic": 0.752, "DeepSeek": 0.967, "OpenAI": 0.984}, "Lowe's": {"Anthropic": 0.784, "DeepSeek": 0.909, "OpenAI": 1.0}},
  "1.02.006": {"Home Depot": {"Anthropic": 0.84, "DeepSeek": 0.5, "OpenAI": 0.5}, "Lowe's": {"Anthropic": 0.5, "DeepSeek": 0.5, "OpenAI": 0.5}},
  "1.02.007": {"Home Depot": {"Anthropic": 0.755, "DeepSeek": 0.933, "OpenAI": 0.851}, "Lowe's": {"Anthropic": 0.906, "DeepSeek": 0.998, "OpenAI": 0.958}},
  "1.02.008": {"Home Depot": {"Anthropic": 1.0, "DeepSeek": 1.0, "OpenAI": 1.0}, "Lowe's": {"Anthropic": 1.0, "DeepSeek": 0.886, "OpenAI": 0.831}},
  "1.02.009": {"Home Depot": {"Anthropic": 0.892, "DeepSeek": 0.922, "OpenAI": 0.802}, "Lowe's": {"Anthropic": 0.861, "DeepSeek": 0.897, "OpenAI": 0.934}},
  "1.02.010": {"Home Depot": {"Anthropic": 0.5, "DeepSeek": 0.648, "OpenAI": 0.5}, "Lowe's": {"Anthropic": 0.5, "DeepSeek": 0.688, "OpenAI": 0.495}},
  "1.02.011": {"Home Depot": {"Anthropic": 0.8, "DeepSeek": 0.78, "OpenAI": 0.833}, "Lowe's": {"Anthropic": 0.861, "DeepSeek": 0.755, "OpenAI": 1.0}},
  "1.02.012": {"Home Depot": {"Anthropic": 0.84, "DeepSeek": 0.837, "OpenAI": 0.606}, "Lowe's": {"Anthropic": 0.5, "DeepSeek": 0.983, "OpenAI": 0.5}},
  "1.02.013": {"Home Depot": {"Anthropic": 0.5, "DeepSeek": 0.84, "OpenAI": 0.5}, "Lowe's": {"Anthropic": 0.5, "DeepSeek": 0.996, "OpenAI": 0.498}},
  "1.02.014": {"Home Depot": {"Anthropic": 0.5, "DeepSeek": 0.675, "OpenAI": 0.819}, "Lowe's": {"Anthropic": 1.0, "DeepSeek": 0.798, "OpenAI": 0.874}},
  "1.02.015": {"Home Depot": {"Anthropic": 0.628, "DeepSeek": 0.5, "OpenAI": 0.5}, "Lowe's": {"Anthropic": 0.5, "DeepSeek": 1.0, "OpenAI": 0.5}},
  "1.02.016": {"Home Depot": {"Anthropic": 0.5, "DeepSeek": 0.844, "OpenAI": 0.5}, "Lowe's": {"Anthropic": 0.5, "DeepSeek": 0.943, "OpenAI": 0.5}},
  "1.02.017": {"Home Depot": {"Anthropic": 0.833, "DeepSeek": 0.84, "OpenAI": 0.5}, "Lowe's": {"Anthropic": 0.84, "DeepSeek": 0.926, "OpenAI": 1.0}},
  "1.02.018": {"Home Depot": {"Anthropic": 0.853, "DeepSeek": 0.958, "OpenAI": 0.945}, "Lowe's": {"Anthropic": 1.0, "DeepSeek": 0.836, "OpenAI": 0.925}},
  "1.02.019": {"Home Depot": {"Anthropic": 0.701, "DeepSeek": 1.0, "OpenAI": 0.84}, "Lowe's": {"Anthropic": 0.848, "DeepSeek": 1.0, "OpenAI": 0.897}},
  "1.02.020": {"Home Depot": {"Anthropic": 0.897, "DeepSeek": 1.0, "OpenAI": 0.944}, "Lowe's": {"Anthropic": 0.951, "DeepSeek": 0.868, "OpenAI": 0.89}},
  "1.02.021": {"Home Depot": {"Anthropic": 0.5, "DeepSeek": 0.5, "OpenAI": 0.5}, "Lowe's": {"Anthropic": 0.5, "DeepSeek": 0.5, "OpenAI": 0.5}},
  "1.02.022": {"Home Depot": {"Anthropic": 1.0, "DeepSeek": 0.939, "OpenAI": 0.993}, "Lowe's": {"Anthropic": 0.858, "DeepSeek": 1.0, "OpenAI": 1.0}},
  "1.02.023": {"Home Depot": {"Anthropic": 0.878, "DeepSeek": 1.0, "OpenAI": 1.0}, "Lowe's": {"Anthropic": 0.858, "DeepSeek": 0.977, "OpenAI": 0.5}},
  "1.02.024": {"Home Depot": {"Anthropic": 0.5, "DeepSeek": 1.0, "OpenAI": 1.0}, "Lowe's": {"Anthropic": 0.745, "DeepSeek": 1.0, "OpenAI": 0.704}},
  "1.02.025": {"Home Depot": {"Anthropic": 0.715, "DeepSeek": 1.0, "OpenAI": 0.496}, "Lowe's": {"Anthropic": 0.604, "DeepSeek": 0.5, "OpenAI": 0.5}},
  "1.02.026": {"Home Depot": {"Anthropic": 0.933, "DeepSeek": 1.0, "OpenAI": 1.0}, "Lowe's": {"Anthropic": 0.882, "DeepSeek": 1.0, "OpenAI": 0.59}},
  "1.02.027": {"Home Depot": {"Anthropic": 1.0, "DeepSeek": 1.0, "OpenAI": 0.633}, "Lowe's": {"Anthropic": 0.642, "DeepSeek": 0.864, "OpenAI": 0.617}},
  "1.02.028": {"Home Depot": {"Anthropic": 1.0, "DeepSeek": 1.0, "OpenAI": 1.0}, "Lowe's": {"Anthropic": 0.754, "DeepSeek": 0.763, "OpenAI": 1.0}},
  "1.02.029": {"Home Depot": {"Anthropic": 0.935, "DeepSeek": 0.606, "OpenAI": 0.5}, "Lowe's": {"Anthropic": 1.0, "DeepSeek": 0.676, "OpenAI": 0.893}},
  "1.02.030": {"Home Depot": {"Anthropic": 0.5, "DeepSeek": 0.5, "OpenAI": 0.5}, "Lowe's": {"Anthropic": 0.845, "DeepSeek": 0.5, "OpenAI": 0.5}},
  "1.02.031": {"Home Depot": {"Anthropic": 1.0, "DeepSeek": 1.0, "OpenAI": 0.973}, "Lowe's": {"Anthropic": 1.0, "DeepSeek": 0.923, "OpenAI": 0.902}},
  "1.02.032": {"Home Depot": {"Anthropic": 0.5, "DeepSeek": 0.863, "OpenAI": 0.5}, "Lowe's": {"Anthropic": 0.84, "DeepSeek": 0.5, "OpenAI": 0.84}},
  "1.02.033": {"Home Depot": {"Anthropic": 1.0, "DeepSeek": 0.5, "OpenAI": 0.5}, "Lowe's": {"Anthropic": 0.856, "DeepSeek": 0.5, "OpenAI": 0.5}},
  "1.02.034": {"Home Depot": {"Anthropic": 0.793, "DeepSeek": 0.756, "OpenAI": 0.5}, "Lowe's": {"Anthropic": 0.789, "DeepSeek": 0.648, "OpenAI": 0.617}},
  "1.02.035": {"Home Depot": {"Anthropic": 0.84, "DeepSeek": 0.939, "OpenAI": 0.793}, "Lowe's": {"Anthropic": 0.723, "DeepSeek": 0.723, "OpenAI": 0.818}},
  "1.02.036": {"Home Depot": {"Anthropic": 0.5, "DeepSeek": 0.5, "OpenAI": 0.5}, "Lowe's": {"Anthropic": 0.794, "DeepSeek": 0.902, "OpenAI": 0.5}},
  "1.02.037": {"Home Depot": {"Anthropic": 1.0, "DeepSeek": 0.836, "OpenAI": 0.816}, "Lowe's": {"Anthropic": 1.0, "DeepSeek": 0.737, "OpenAI": 0.5}},
  "1.02.038": {"Home Depot": {"Anthropic": 1.0, "DeepSeek": 0.967, "OpenAI": 0.929}, "Lowe's": {"Anthropic": 0.814, "DeepSeek": 0.859, "OpenAI": 1.0}},
  "1.02.039": {"Home Depot": {"Anthropic": 0.823, "DeepSeek": 1.0, "OpenAI": 1.0}, "Lowe's": {"Anthropic": 0.5, "DeepSeek": 0.918, "OpenAI": 1.0}},
  "1.02.040": {"Home Depot": {"Anthropic": 0.5, "DeepSeek": 0.84, "OpenAI": 0.84}, "Lowe's": {"Anthropic": 0.5, "DeepSeek": 0.84, "OpenAI": 0.5}},
  "1.02.041": {"Home Depot": {"Anthropic": 0.5, "DeepSeek": 1.0, "OpenAI": 1.0}, "Lowe's": {"Anthropic": 0.84, "DeepSeek": 0.66, "OpenAI": 1.0}},
  "1.02.042": {"Home Depot": {"Anthropic": 0.646, "DeepSeek": 0.844, "OpenAI": 1.0}, "Lowe's": {"Anthropic": 0.801, "DeepSeek": 1.0, "OpenAI": 1.0}},
  "1.02.043": {"Home Depot": {"Anthropic": 0.859, "DeepSeek": 0.964, "OpenAI": 0.818}, "Lowe's": {"Anthropic": 1.0, "DeepSeek": 0.832, "OpenAI": 0.5}},
  "1.02.044": {"Home Depot": {"Anthropic": 1.0, "DeepSeek": 1.0, "OpenAI": 1.0}, "Lowe's": {"Anthropic": 1.0, "DeepSeek": 1.0, "OpenAI": 1.0}},
  "1.02.045": {"Home Depot": {"Anthropic": 0.884, "DeepSeek": 1.0, "OpenAI": 1.0}, "Lowe's": {"Anthropic": 0.896, "DeepSeek": 1.0, "OpenAI": 1.0}},
  "1.02.046": {"Home Depot": {"Anthropic": 1.0, "DeepSeek": 0.928, "OpenAI": 0.891}, "Lowe's": {"Anthropic": 0.832, "DeepSeek": 1.0, "OpenAI": 0.942}},
  "1.02.047": {"Home Depot": {"Anthropic": 0.5, "DeepSeek": 0.5, "OpenAI": 1.0}, "Lowe's": {"Anthropic": 0.5, "DeepSeek": 0.5, "OpenAI": 0.5}},
  "1.02.048": {"Home Depot": {"Anthropic": 0.781, "DeepSeek": 0.757, "OpenAI": 0.896}, "Lowe's": {"Anthropic": 0.847, "DeepSeek": 0.935, "OpenAI": 0.838}},
  "1.03.001": {"Home Depot": {"Anthropic": 0.607, "DeepSeek": 0.702, "OpenAI": 0.715}, "Lowe's": {"Anthropic": 0.5, "DeepSeek": 0.699, "OpenAI": 0.875}},
  "1.03.002": {"Home Depot": {"Anthropic": 0.834, "DeepSeek": 0.802, "OpenAI": 1.0}, "Lowe's": {"Anthropic": 1.0, "DeepSeek": 0.922, "OpenAI": 0.731}},
  "1.03.003": {"Home Depot": {"Anthropic": 0.682, "DeepSeek": 1.0, "OpenAI": 0.834}, "Lowe's": {"Anthropic": 0.496, "DeepSeek": 0.84, "OpenAI": 0.727}},
  "1.03.004": {"Home Depot": {"Anthropic": 0.84, "DeepSeek": 0.84, "OpenAI": 0.5}, "Lowe's": {"Anthropic": 0.84, "DeepSeek": 0.7, "OpenAI": 0.5}},
  "1.03.005": {"Home Depot": {"Anthropic": 0.729, "DeepSeek": 0.743, "OpenAI": 0.699}, "Lowe's": {"Anthropic": 0.711, "DeepSeek": 0.986, "OpenAI": 0.615}},
  "1.03.006": {"Home Depot": {"Anthropic": 0.5, "DeepSeek": 0.5, "OpenAI": 0.5}, "Lowe's": {"Anthropic": 0.443, "DeepSeek": 0.5, "OpenAI": 0.5}},
  "1.03.007": {"Home Depot": {"Anthropic": 0.683, "DeepSeek": 0.5, "OpenAI": 0.5}, "Lowe's": {"Anthropic": 0.5, "DeepSeek": 0.84, "OpenAI": 0.5}},
  "1.03.008": {"Home Depot": {"Anthropic": 0.711, "DeepSeek": 0.645, "OpenAI": 0.875}, "Lowe's": {"Anthropic": 0.721, "DeepSeek": 0.5, "OpenAI": 0.704}},
  "1.03.009": {"Home Depot": {"Anthropic": 0.5, "DeepSeek": 0.5, "OpenAI": 0.5}, "Lowe's": {"Anthropic": 0.725, "DeepSeek": 0.654, "OpenAI": 0.5}},
  "1.03.010": {"Home Depot": {"Anthropic": 0.5, "DeepSeek": 0.5, "OpenAI": 0.5}, "Lowe's": {"Anthropic": 0.5, "DeepSeek": 0.7, "OpenAI": 0.5}},
  "1.04.001": {"Home Depot": {"Anthropic": 0.493, "DeepSeek": 0.769, "OpenAI": 0.5}, "Lowe's": {"Anthropic": 0.608, "DeepSeek": 0.493, "OpenAI": 0.5}},
  "1.04.002": {"Home Depot": {"Anthropic": 0.875, "DeepSeek": 0.796, "OpenAI": 0.848}, "Lowe's": {"Anthropic": 0.868, "DeepSeek": 1.0, "OpenAI": 0.743}},
  "1.04.003": {"Home Depot": {"Anthropic": 0.5, "DeepSeek": 1.0, "OpenAI": 1.0}, "Lowe's": {"Anthropic": 0.5, "DeepSeek": 1.0, "OpenAI": 0.826}},
  "1.04.004": {"Home Depot": {"Anthropic": 0.823, "DeepSeek": 0.713, "OpenAI": 0.737}, "Lowe's": {"Anthropic": 0.801, "DeepSeek": 0.5, "OpenAI": 0.5}},
  "1.04.005": {"Home Depot": {"Anthropic": 0.814, "DeepSeek": 0.817, "OpenAI": 0.78}, "Lowe's": {"Anthropic": 0.742, "DeepSeek": 1.0, "OpenAI": 0.765}},
  "1.04.006": {"Home Depot": {"Anthropic": 0.824, "DeepSeek": 1.0, "OpenAI": 1.0}, "Lowe's": {"Anthropic": 0.761, "DeepSeek": 1.0, "OpenAI": 0.839}},
  "1.04.007": {"Home Depot": {"Anthropic": 1.0, "DeepSeek": 1.0, "OpenAI": 0.5}, "Lowe's": {"Anthropic": 0.896, "DeepSeek": 0.686, "OpenAI": 0.824}},
  "1.04.008": {"Home Depot": {"Anthropic": 0.5, "DeepSeek": 0.84, "OpenAI": 0.64}, "Lowe's": {"Anthropic": 0.5, "DeepSeek": 0.5, "OpenAI": 0.5}},
  "1.04.009": {"Home Depot": {"Anthropic": 0.81, "DeepSeek": 0.787, "OpenAI": 0.612}, "Lowe's": {"Anthropic": 0.75, "DeepSeek": 0.73, "OpenAI": 0.666}},
  "1.04.010": {"Home Depot": {"Anthropic": 0.705, "DeepSeek": 0.823, "OpenAI": 0.5}, "Lowe's": {"Anthropic": 0.662, "DeepSeek": 0.726, "OpenAI": 0.5}},
  "1.04.011": {"Home Depot": {"Anthropic": 0.668, "DeepSeek": 0.5, "OpenAI": 0.5}, "Lowe's": {"Anthropic": 0.5, "DeepSeek": 0.5, "OpenAI": 1.0}}
};

// Organize data into lines by organization and provider
const pirValues = Object.keys(sentimentByPIR).sort();

// Create traces for each provider-organization combination
const traces = [
  // Home Depot lines (orange)
  {
    name: 'Home Depot - Anthropic',
    x: pirValues,
    y: pirValues.map(pir => sentimentByPIR[pir]['Home Depot']['Anthropic']),
    mode: 'lines+markers',
    line: { color: '#ff9800', width: 2, dash: 'solid' },
    marker: { size: 4 },
    hovertemplate: '<b>Home Depot - Anthropic</b><br>PIR: %{x}<br>Score: %{y:.3f}<extra></extra>'
  },
  {
    name: 'Home Depot - DeepSeek',
    x: pirValues,
    y: pirValues.map(pir => sentimentByPIR[pir]['Home Depot']['DeepSeek']),
    mode: 'lines+markers',
    line: { color: '#ff9800', width: 2, dash: 'dash' },
    marker: { size: 4 },
    hovertemplate: '<b>Home Depot - DeepSeek</b><br>PIR: %{x}<br>Score: %{y:.3f}<extra></extra>'
  },
  {
    name: 'Home Depot - OpenAI',
    x: pirValues,
    y: pirValues.map(pir => sentimentByPIR[pir]['Home Depot']['OpenAI']),
    mode: 'lines+markers',
    line: { color: '#ff9800', width: 2, dash: 'dot' },
    marker: { size: 4 },
    hovertemplate: '<b>Home Depot - OpenAI</b><br>PIR: %{x}<br>Score: %{y:.3f}<extra></extra>'
  },
  // Lowe's lines (blue)
  {
    name: "Lowe's - Anthropic",
    x: pirValues,
    y: pirValues.map(pir => sentimentByPIR[pir]['Lowe\'s']['Anthropic']),
    mode: 'lines+markers',
    line: { color: '#2196f3', width: 2, dash: 'solid' },
    marker: { size: 4 },
    hovertemplate: '<b>Lowe\'s - Anthropic</b><br>PIR: %{x}<br>Score: %{y:.3f}<extra></extra>'
  },
  {
    name: "Lowe's - DeepSeek",
    x: pirValues,
    y: pirValues.map(pir => sentimentByPIR[pir]['Lowe\'s']['DeepSeek']),
    mode: 'lines+markers',
    line: { color: '#2196f3', width: 2, dash: 'dash' },
    marker: { size: 4 },
    hovertemplate: '<b>Lowe\'s - DeepSeek</b><br>PIR: %{x}<br>Score: %{y:.3f}<extra></extra>'
  },
  {
    name: "Lowe's - OpenAI",
    x: pirValues,
    y: pirValues.map(pir => sentimentByPIR[pir]['Lowe\'s']['OpenAI']),
    mode: 'lines+markers',
    line: { color: '#2196f3', width: 2, dash: 'dot' },
    marker: { size: 4 },
    hovertemplate: '<b>Lowe\'s - OpenAI</b><br>PIR: %{x}<br>Score: %{y:.3f}<extra></extra>'
  }
];

const trendLayout = {
  title: {
    text: '<b>Sentiment Trends Across Priority Information Requirements</b>',
    font: { size: 18, color: '#e5e7eb', family: 'system-ui, sans-serif' },
    x: 0.5,
    xanchor: 'center'
  },
  xaxis: {
    title: 'Priority Information Requirement (PIR)',
    color: '#aab2c8',
    tickfont: { color: '#aab2c8', size: 11 },
    tickangle: -45
  },
  yaxis: {
    title: 'Sentiment Score',
    color: '#aab2c8',
    tickfont: { color: '#aab2c8', size: 12 },
    range: [0.4, 1.05]
  },
  plot_bgcolor: '#111827',
  paper_bgcolor: '#0f172a',
  font: { family: 'system-ui, sans-serif', color: '#e5e7eb' },
  margin: { l: 70, r: 80, t: 80, b: 100 },
  hovermode: 'x unified',
  legend: {
    x: 0.5,
    y: -0.25,
    xanchor: 'center',
    yanchor: 'top',
    orientation: 'h',
    bgcolor: 'rgba(15, 23, 42, 0.8)',
    bordercolor: '#aab2c8',
    borderwidth: 1,
    font: { size: 11, color: '#e5e7eb' }
  }
};

Plotly.newPlot('plot-sentiment-trends', traces, trendLayout, { responsive: true });
</script>

## Home Improvement Case Study {#case-study}

### Example Query Results

**Prompt:** What scandals has [Home Depot/Lowe's] been involved in?
**Model:** claude-sonnet-4-20250514

<style>
.response-container {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin: 20px 0;
}

.response-box {
  flex: 1;
  min-width: 300px;
  max-width: 45%;
  border: 1px solid #aab2c8;
  border-radius: 6px;
  padding: 15px;
  background-color: #111827;
  font-size: 13px;
  line-height: 1.5;
  color: #e5e7eb;
}

.response-box h4 {
  margin-top: 0;
  margin-bottom: 12px;
  font-size: 15px;
  color: #e5e7eb;
  border-bottom: 1px solid #aab2c8;
  padding-bottom: 8px;
}

.response-box strong {
  color: #e5e7eb;
}

.response-box ul {
  margin: 8px 0;
  padding-left: 16px;
}

.response-box li {
  margin: 4px 0;
}

.response-credit {
  font-size: 11px;
  color: #aab2c8;
  margin-top: 12px;
  padding-top: 8px;
  border-top: 1px solid rgba(170, 178, 200, 0.3);
  font-style: italic;
}

@media (max-width: 900px) {
  .response-box {
    max-width: 100%;
  }
}
</style>

<div class="response-container">
  <div class="response-box">
    <h4>Home Depot Response</h4>
    <p>Home Depot has faced several notable controversies and scandals over the years:</p>

    <p><strong>Labor and Employment Issues:</strong></p>
    <ul>
      <li><strong>Discrimination lawsuits</strong>: Multiple cases alleging gender and racial discrimination in hiring, promotion, and workplace treatment</li>
      <li><strong>Wage and hour disputes</strong>: Lawsuits over unpaid overtime and break time violations</li>
      <li><strong>Union opposition</strong>: Criticized for anti-union practices and resistance to organizing efforts</li>
    </ul>

    <p><strong>Environmental Concerns:</strong></p>
    <ul>
      <li><strong>Sourcing practices</strong>: Faced pressure over selling lumber from old-growth forests and environmentally sensitive areas</li>
      <li><strong>Chemical sales</strong>: Scrutiny over selling pesticides and chemicals later found to be harmful</li>
    </ul>

    <p><strong>Customer Safety:</strong></p>
    <ul>
      <li><strong>Product recalls</strong>: Various incidents involving defective or dangerous products sold in stores</li>
      <li><strong>Store safety</strong>: Incidents of merchandise falling from high shelves, injuring customers</li>
    </ul>

    <p><strong>Executive Compensation:</strong></p>
    <ul>
      <li><strong>CEO severance packages</strong>: Criticism over large payouts to departing executives, particularly Bob Nardelli's $210 million exit package in 2007</li>
    </ul>

    <p><strong>Financial/Business Practices:</strong></p>
    <ul>
      <li><strong>Supplier disputes</strong>: Various conflicts with vendors and contractors</li>
      <li><strong>Price manipulation allegations</strong>: Occasional accusations regarding pricing practices</li>
    </ul>

    <p><strong>Data Security:</strong></p>
    <ul>
      <li><strong>Payment card breach (2014)</strong>: Hackers accessed customer payment information, affecting millions of customers</li>
    </ul>

    <p>Most of these issues have been addressed through settlements, policy changes, or improved practices, though some remain ongoing concerns for the company.</p>
    <div class="response-credit">Generated by Claude (Anthropic, 2025)</div>
  </div>

  <div class="response-box">
    <h4>Lowe's Response</h4>
    <p>Lowe's has faced several notable controversies and legal issues over the years:</p>

    <p><strong>Labor and Employment Issues:</strong></p>
    <ul>
      <li>Multiple lawsuits alleging discrimination based on race, gender, and age</li>
      <li>Wage and hour violations, including claims of unpaid overtime</li>
      <li>Workplace safety violations and OSHA citations at various locations</li>
    </ul>

    <p><strong>Consumer and Product Safety:</strong></p>
    <ul>
      <li>Recalls of various products sold in stores due to safety defects</li>
      <li>Lawsuits related to allegedly defective or mislabeled products</li>
      <li>Issues with installation services and contractor oversight</li>
    </ul>

    <p><strong>Environmental Concerns:</strong></p>
    <ul>
      <li>Violations of environmental regulations at some locations</li>
      <li>Improper disposal of hazardous materials</li>
      <li>Air and water quality violations at certain facilities</li>
    </ul>

    <p><strong>Business Practices:</strong></p>
    <ul>
      <li>Antitrust investigations related to pricing practices</li>
      <li>Disputes with suppliers and contractors</li>
      <li>Customer data security incidents</li>
    </ul>

    <p><strong>Regulatory Issues:</strong></p>
    <ul>
      <li>Violations of building codes and permits</li>
      <li>Issues with advertising claims and pricing accuracy</li>
      <li>Various state and federal regulatory compliance problems</li>
    </ul>

    <p>It's worth noting that as a major retailer with thousands of locations, Lowe's faces ongoing regulatory scrutiny and litigation that's common for companies of its size. Many issues have been resolved through settlements, compliance agreements, or policy changes. The company has generally worked to address problems when they arise and implement corrective measures.</p>
    <div class="response-credit">Generated by Claude (Anthropic, 2025)</div>
  </div>
</div>

### Sentiment Analysis Findings {#sentiment-analysis}

* General sentiment scores for OpenAI's ChatGPT and Claude's were generally similar, while Deepseek queries displayed an average ~8% increase in negativity. This effect was most pronounced in queries regarding the companies' potential legal exposure and past or present scandals.
* While no major bias for either company was shown, all three models showed a consistent but marginal ~1% increase in sentiment negativity against Home Depot when compared to Lowe's.
* Financial Sentiment scores did not reveal any significant findings, though this was somewhat expected as this test dataset did not include finance-related prompts.



### Sentiment Trends by Priority Information Requirement {#sentiment-trends}

The line chart below shows sentiment scores across all Priority Information Requirements (PIR), revealing a consistent pattern: Home Depot (orange) generally receives lower sentiment scores than Lowe's (blue) across providers. Each line represents a different provider, differentiated by line style (solid, dashed, dotted).

<div class="chart-wrapper">
  <div id="plot-sentiment-trends" style="width:90%; height:500px; margin: 0 auto;"></div>
</div>

<script>
const sentimentByPIR = {
  "1.01.001": {"Home Depot": {"Anthropic": 0.857, "DeepSeek": 0.845, "OpenAI": 0.857}, "Lowe's": {"Anthropic": 0.771, "DeepSeek": 1.0, "OpenAI": 0.865}},
  "1.01.002": {"Home Depot": {"Anthropic": 0.664, "DeepSeek": 0.84, "OpenAI": 0.648}, "Lowe's": {"Anthropic": 0.762, "DeepSeek": 0.5, "OpenAI": 0.84}},
  "1.01.003": {"Home Depot": {"Anthropic": 0.992, "DeepSeek": 1.0, "OpenAI": 1.0}, "Lowe's": {"Anthropic": 1.0, "DeepSeek": 1.0, "OpenAI": 0.898}},
  "1.01.004": {"Home Depot": {"Anthropic": 1.0, "DeepSeek": 1.0, "OpenAI": 1.0}, "Lowe's": {"Anthropic": 1.0, "DeepSeek": 1.0, "OpenAI": 0.874}},
  "1.01.005": {"Home Depot": {"Anthropic": 0.84, "DeepSeek": 0.84, "OpenAI": 0.5}, "Lowe's": {"Anthropic": 0.853, "DeepSeek": 0.84, "OpenAI": 1.0}},
  "1.01.006": {"Home Depot": {"Anthropic": 0.94, "DeepSeek": 0.84, "OpenAI": 0.886}, "Lowe's": {"Anthropic": 0.5, "DeepSeek": 1.0, "OpenAI": 0.5}},
  "1.01.007": {"Home Depot": {"Anthropic": 0.665, "DeepSeek": 1.0, "OpenAI": 1.0}, "Lowe's": {"Anthropic": 0.84, "DeepSeek": 1.0, "OpenAI": 0.84}},
  "1.01.008": {"Home Depot": {"Anthropic": 0.948, "DeepSeek": 0.717, "OpenAI": 0.661}, "Lowe's": {"Anthropic": 0.773, "DeepSeek": 0.816, "OpenAI": 0.489}},
  "1.01.009": {"Home Depot": {"Anthropic": 1.0, "DeepSeek": 0.964, "OpenAI": 0.938}, "Lowe's": {"Anthropic": 0.832, "DeepSeek": 0.929, "OpenAI": 0.884}},
  "1.01.010": {"Home Depot": {"Anthropic": 1.0, "DeepSeek": 1.0, "OpenAI": 1.0}, "Lowe's": {"Anthropic": 0.884, "DeepSeek": 0.995, "OpenAI": 1.0}},
  "1.01.011": {"Home Depot": {"Anthropic": 0.96, "DeepSeek": 0.855, "OpenAI": 0.887}, "Lowe's": {"Anthropic": 0.644, "DeepSeek": 0.812, "OpenAI": 1.0}},
  "1.01.012": {"Home Depot": {"Anthropic": 1.0, "DeepSeek": 0.84, "OpenAI": 0.777}, "Lowe's": {"Anthropic": 1.0, "DeepSeek": 0.974, "OpenAI": 0.696}},
  "1.01.013": {"Home Depot": {"Anthropic": 0.866, "DeepSeek": 0.5, "OpenAI": 0.5}, "Lowe's": {"Anthropic": 0.499, "DeepSeek": 0.84, "OpenAI": 0.84}},
  "1.01.014": {"Home Depot": {"Anthropic": 0.5, "DeepSeek": 0.84, "OpenAI": 0.746}, "Lowe's": {"Anthropic": 0.5, "DeepSeek": 0.84, "OpenAI": 0.5}},
  "1.01.015": {"Home Depot": {"Anthropic": 0.98, "DeepSeek": 1.0, "OpenAI": 0.883}, "Lowe's": {"Anthropic": 0.967, "DeepSeek": 0.975, "OpenAI": 0.844}},
  "1.01.016": {"Home Depot": {"Anthropic": 0.5, "DeepSeek": 0.84, "OpenAI": 1.0}, "Lowe's": {"Anthropic": 0.49, "DeepSeek": 0.543, "OpenAI": 1.0}},
  "1.01.017": {"Home Depot": {"Anthropic": 0.714, "DeepSeek": 0.921, "OpenAI": 0.613}, "Lowe's": {"Anthropic": 0.5, "DeepSeek": 0.911, "OpenAI": 0.685}},
  "1.01.018": {"Home Depot": {"Anthropic": 0.5, "DeepSeek": 0.84, "OpenAI": 0.929}, "Lowe's": {"Anthropic": 0.74, "DeepSeek": 0.781, "OpenAI": 1.0}},
  "1.01.019": {"Home Depot": {"Anthropic": 0.761, "DeepSeek": 1.0, "OpenAI": 0.66}, "Lowe's": {"Anthropic": 0.751, "DeepSeek": 1.0, "OpenAI": 0.497}},
  "1.01.020": {"Home Depot": {"Anthropic": 0.795, "DeepSeek": 1.0, "OpenAI": 1.0}, "Lowe's": {"Anthropic": 1.0, "DeepSeek": 0.713, "OpenAI": 0.814}},
  "1.02.001": {"Home Depot": {"Anthropic": 0.804, "DeepSeek": 0.849, "OpenAI": 1.0}, "Lowe's": {"Anthropic": 0.822, "DeepSeek": 0.761, "OpenAI": 0.89}},
  "1.02.002": {"Home Depot": {"Anthropic": 0.84, "DeepSeek": 0.5, "OpenAI": 0.698}, "Lowe's": {"Anthropic": 1.0, "DeepSeek": 0.84, "OpenAI": 0.727}},
  "1.02.003": {"Home Depot": {"Anthropic": 0.616, "DeepSeek": 0.773, "OpenAI": 0.5}, "Lowe's": {"Anthropic": 0.5, "DeepSeek": 0.815, "OpenAI": 0.8}},
  "1.02.004": {"Home Depot": {"Anthropic": 0.727, "DeepSeek": 0.778, "OpenAI": 0.931}, "Lowe's": {"Anthropic": 0.879, "DeepSeek": 0.987, "OpenAI": 0.942}},
  "1.02.005": {"Home Depot": {"Anthropic": 0.752, "DeepSeek": 0.967, "OpenAI": 0.984}, "Lowe's": {"Anthropic": 0.784, "DeepSeek": 0.909, "OpenAI": 1.0}},
  "1.02.006": {"Home Depot": {"Anthropic": 0.84, "DeepSeek": 0.5, "OpenAI": 0.5}, "Lowe's": {"Anthropic": 0.5, "DeepSeek": 0.5, "OpenAI": 0.5}},
  "1.02.007": {"Home Depot": {"Anthropic": 0.755, "DeepSeek": 0.933, "OpenAI": 0.851}, "Lowe's": {"Anthropic": 0.906, "DeepSeek": 0.998, "OpenAI": 0.958}},
  "1.02.008": {"Home Depot": {"Anthropic": 1.0, "DeepSeek": 1.0, "OpenAI": 1.0}, "Lowe's": {"Anthropic": 1.0, "DeepSeek": 0.886, "OpenAI": 0.831}},
  "1.02.009": {"Home Depot": {"Anthropic": 0.892, "DeepSeek": 0.922, "OpenAI": 0.802}, "Lowe's": {"Anthropic": 0.861, "DeepSeek": 0.897, "OpenAI": 0.934}},
  "1.02.010": {"Home Depot": {"Anthropic": 0.5, "DeepSeek": 0.648, "OpenAI": 0.5}, "Lowe's": {"Anthropic": 0.5, "DeepSeek": 0.688, "OpenAI": 0.495}},
  "1.02.011": {"Home Depot": {"Anthropic": 0.8, "DeepSeek": 0.78, "OpenAI": 0.833}, "Lowe's": {"Anthropic": 0.861, "DeepSeek": 0.755, "OpenAI": 1.0}},
  "1.02.012": {"Home Depot": {"Anthropic": 0.84, "DeepSeek": 0.837, "OpenAI": 0.606}, "Lowe's": {"Anthropic": 0.5, "DeepSeek": 0.983, "OpenAI": 0.5}},
  "1.02.013": {"Home Depot": {"Anthropic": 0.5, "DeepSeek": 0.84, "OpenAI": 0.5}, "Lowe's": {"Anthropic": 0.5, "DeepSeek": 0.996, "OpenAI": 0.498}},
  "1.02.014": {"Home Depot": {"Anthropic": 0.5, "DeepSeek": 0.675, "OpenAI": 0.819}, "Lowe's": {"Anthropic": 1.0, "DeepSeek": 0.798, "OpenAI": 0.874}},
  "1.02.015": {"Home Depot": {"Anthropic": 0.628, "DeepSeek": 0.5, "OpenAI": 0.5}, "Lowe's": {"Anthropic": 0.5, "DeepSeek": 1.0, "OpenAI": 0.5}},
  "1.02.016": {"Home Depot": {"Anthropic": 0.5, "DeepSeek": 0.844, "OpenAI": 0.5}, "Lowe's": {"Anthropic": 0.5, "DeepSeek": 0.943, "OpenAI": 0.5}},
  "1.02.017": {"Home Depot": {"Anthropic": 0.833, "DeepSeek": 0.84, "OpenAI": 0.5}, "Lowe's": {"Anthropic": 0.84, "DeepSeek": 0.926, "OpenAI": 1.0}},
  "1.02.018": {"Home Depot": {"Anthropic": 0.853, "DeepSeek": 0.958, "OpenAI": 0.945}, "Lowe's": {"Anthropic": 1.0, "DeepSeek": 0.836, "OpenAI": 0.925}},
  "1.02.019": {"Home Depot": {"Anthropic": 0.701, "DeepSeek": 1.0, "OpenAI": 0.84}, "Lowe's": {"Anthropic": 0.848, "DeepSeek": 1.0, "OpenAI": 0.897}},
  "1.02.020": {"Home Depot": {"Anthropic": 0.897, "DeepSeek": 1.0, "OpenAI": 0.944}, "Lowe's": {"Anthropic": 0.951, "DeepSeek": 0.868, "OpenAI": 0.89}},
  "1.02.021": {"Home Depot": {"Anthropic": 0.5, "DeepSeek": 0.5, "OpenAI": 0.5}, "Lowe's": {"Anthropic": 0.5, "DeepSeek": 0.5, "OpenAI": 0.5}},
  "1.02.022": {"Home Depot": {"Anthropic": 1.0, "DeepSeek": 0.939, "OpenAI": 0.993}, "Lowe's": {"Anthropic": 0.858, "DeepSeek": 1.0, "OpenAI": 1.0}},
  "1.02.023": {"Home Depot": {"Anthropic": 0.878, "DeepSeek": 1.0, "OpenAI": 1.0}, "Lowe's": {"Anthropic": 0.858, "DeepSeek": 0.977, "OpenAI": 0.5}},
  "1.02.024": {"Home Depot": {"Anthropic": 0.5, "DeepSeek": 1.0, "OpenAI": 1.0}, "Lowe's": {"Anthropic": 0.745, "DeepSeek": 1.0, "OpenAI": 0.704}},
  "1.02.025": {"Home Depot": {"Anthropic": 0.715, "DeepSeek": 1.0, "OpenAI": 0.496}, "Lowe's": {"Anthropic": 0.604, "DeepSeek": 0.5, "OpenAI": 0.5}},
  "1.02.026": {"Home Depot": {"Anthropic": 0.933, "DeepSeek": 1.0, "OpenAI": 1.0}, "Lowe's": {"Anthropic": 0.882, "DeepSeek": 1.0, "OpenAI": 0.59}},
  "1.02.027": {"Home Depot": {"Anthropic": 1.0, "DeepSeek": 1.0, "OpenAI": 0.633}, "Lowe's": {"Anthropic": 0.642, "DeepSeek": 0.864, "OpenAI": 0.617}},
  "1.02.028": {"Home Depot": {"Anthropic": 1.0, "DeepSeek": 1.0, "OpenAI": 1.0}, "Lowe's": {"Anthropic": 0.754, "DeepSeek": 0.763, "OpenAI": 1.0}},
  "1.02.029": {"Home Depot": {"Anthropic": 0.935, "DeepSeek": 0.606, "OpenAI": 0.5}, "Lowe's": {"Anthropic": 1.0, "DeepSeek": 0.676, "OpenAI": 0.893}},
  "1.02.030": {"Home Depot": {"Anthropic": 0.5, "DeepSeek": 0.5, "OpenAI": 0.5}, "Lowe's": {"Anthropic": 0.845, "DeepSeek": 0.5, "OpenAI": 0.5}},
  "1.02.031": {"Home Depot": {"Anthropic": 1.0, "DeepSeek": 1.0, "OpenAI": 0.973}, "Lowe's": {"Anthropic": 1.0, "DeepSeek": 0.923, "OpenAI": 0.902}},
  "1.02.032": {"Home Depot": {"Anthropic": 0.5, "DeepSeek": 0.863, "OpenAI": 0.5}, "Lowe's": {"Anthropic": 0.84, "DeepSeek": 0.5, "OpenAI": 0.84}},
  "1.02.033": {"Home Depot": {"Anthropic": 1.0, "DeepSeek": 0.5, "OpenAI": 0.5}, "Lowe's": {"Anthropic": 0.856, "DeepSeek": 0.5, "OpenAI": 0.5}},
  "1.02.034": {"Home Depot": {"Anthropic": 0.793, "DeepSeek": 0.756, "OpenAI": 0.5}, "Lowe's": {"Anthropic": 0.789, "DeepSeek": 0.648, "OpenAI": 0.617}},
  "1.02.035": {"Home Depot": {"Anthropic": 0.84, "DeepSeek": 0.939, "OpenAI": 0.793}, "Lowe's": {"Anthropic": 0.723, "DeepSeek": 0.723, "OpenAI": 0.818}},
  "1.02.036": {"Home Depot": {"Anthropic": 0.5, "DeepSeek": 0.5, "OpenAI": 0.5}, "Lowe's": {"Anthropic": 0.794, "DeepSeek": 0.902, "OpenAI": 0.5}},
  "1.02.037": {"Home Depot": {"Anthropic": 1.0, "DeepSeek": 0.836, "OpenAI": 0.816}, "Lowe's": {"Anthropic": 1.0, "DeepSeek": 0.737, "OpenAI": 0.5}},
  "1.02.038": {"Home Depot": {"Anthropic": 1.0, "DeepSeek": 0.967, "OpenAI": 0.929}, "Lowe's": {"Anthropic": 0.814, "DeepSeek": 0.859, "OpenAI": 1.0}},
  "1.02.039": {"Home Depot": {"Anthropic": 0.823, "DeepSeek": 1.0, "OpenAI": 1.0}, "Lowe's": {"Anthropic": 0.5, "DeepSeek": 0.918, "OpenAI": 1.0}},
  "1.02.040": {"Home Depot": {"Anthropic": 0.5, "DeepSeek": 0.84, "OpenAI": 0.84}, "Lowe's": {"Anthropic": 0.5, "DeepSeek": 0.84, "OpenAI": 0.5}},
  "1.02.041": {"Home Depot": {"Anthropic": 0.5, "DeepSeek": 1.0, "OpenAI": 1.0}, "Lowe's": {"Anthropic": 0.84, "DeepSeek": 0.66, "OpenAI": 1.0}},
  "1.02.042": {"Home Depot": {"Anthropic": 0.646, "DeepSeek": 0.844, "OpenAI": 1.0}, "Lowe's": {"Anthropic": 0.801, "DeepSeek": 1.0, "OpenAI": 1.0}},
  "1.02.043": {"Home Depot": {"Anthropic": 0.859, "DeepSeek": 0.964, "OpenAI": 0.818}, "Lowe's": {"Anthropic": 1.0, "DeepSeek": 0.832, "OpenAI": 0.5}},
  "1.02.044": {"Home Depot": {"Anthropic": 1.0, "DeepSeek": 1.0, "OpenAI": 1.0}, "Lowe's": {"Anthropic": 1.0, "DeepSeek": 1.0, "OpenAI": 1.0}},
  "1.02.045": {"Home Depot": {"Anthropic": 0.884, "DeepSeek": 1.0, "OpenAI": 1.0}, "Lowe's": {"Anthropic": 0.896, "DeepSeek": 1.0, "OpenAI": 1.0}},
  "1.02.046": {"Home Depot": {"Anthropic": 1.0, "DeepSeek": 0.928, "OpenAI": 0.891}, "Lowe's": {"Anthropic": 0.832, "DeepSeek": 1.0, "OpenAI": 0.942}},
  "1.02.047": {"Home Depot": {"Anthropic": 0.5, "DeepSeek": 0.5, "OpenAI": 1.0}, "Lowe's": {"Anthropic": 0.5, "DeepSeek": 0.5, "OpenAI": 0.5}},
  "1.02.048": {"Home Depot": {"Anthropic": 0.781, "DeepSeek": 0.757, "OpenAI": 0.896}, "Lowe's": {"Anthropic": 0.847, "DeepSeek": 0.935, "OpenAI": 0.838}},
  "1.03.001": {"Home Depot": {"Anthropic": 0.607, "DeepSeek": 0.702, "OpenAI": 0.715}, "Lowe's": {"Anthropic": 0.5, "DeepSeek": 0.699, "OpenAI": 0.875}},
  "1.03.002": {"Home Depot": {"Anthropic": 0.834, "DeepSeek": 0.802, "OpenAI": 1.0}, "Lowe's": {"Anthropic": 1.0, "DeepSeek": 0.922, "OpenAI": 0.731}},
  "1.03.003": {"Home Depot": {"Anthropic": 0.682, "DeepSeek": 1.0, "OpenAI": 0.834}, "Lowe's": {"Anthropic": 0.496, "DeepSeek": 0.84, "OpenAI": 0.727}},
  "1.03.004": {"Home Depot": {"Anthropic": 0.84, "DeepSeek": 0.84, "OpenAI": 0.5}, "Lowe's": {"Anthropic": 0.84, "DeepSeek": 0.7, "OpenAI": 0.5}},
  "1.03.005": {"Home Depot": {"Anthropic": 0.729, "DeepSeek": 0.743, "OpenAI": 0.699}, "Lowe's": {"Anthropic": 0.711, "DeepSeek": 0.986, "OpenAI": 0.615}},
  "1.03.006": {"Home Depot": {"Anthropic": 0.5, "DeepSeek": 0.5, "OpenAI": 0.5}, "Lowe's": {"Anthropic": 0.443, "DeepSeek": 0.5, "OpenAI": 0.5}},
  "1.03.007": {"Home Depot": {"Anthropic": 0.683, "DeepSeek": 0.5, "OpenAI": 0.5}, "Lowe's": {"Anthropic": 0.5, "DeepSeek": 0.84, "OpenAI": 0.5}},
  "1.03.008": {"Home Depot": {"Anthropic": 0.711, "DeepSeek": 0.645, "OpenAI": 0.875}, "Lowe's": {"Anthropic": 0.721, "DeepSeek": 0.5, "OpenAI": 0.704}},
  "1.03.009": {"Home Depot": {"Anthropic": 0.5, "DeepSeek": 0.5, "OpenAI": 0.5}, "Lowe's": {"Anthropic": 0.725, "DeepSeek": 0.654, "OpenAI": 0.5}},
  "1.03.010": {"Home Depot": {"Anthropic": 0.5, "DeepSeek": 0.5, "OpenAI": 0.5}, "Lowe's": {"Anthropic": 0.5, "DeepSeek": 0.7, "OpenAI": 0.5}},
  "1.04.001": {"Home Depot": {"Anthropic": 0.493, "DeepSeek": 0.769, "OpenAI": 0.5}, "Lowe's": {"Anthropic": 0.608, "DeepSeek": 0.493, "OpenAI": 0.5}},
  "1.04.002": {"Home Depot": {"Anthropic": 0.875, "DeepSeek": 0.796, "OpenAI": 0.848}, "Lowe's": {"Anthropic": 0.868, "DeepSeek": 1.0, "OpenAI": 0.743}},
  "1.04.003": {"Home Depot": {"Anthropic": 0.5, "DeepSeek": 1.0, "OpenAI": 1.0}, "Lowe's": {"Anthropic": 0.5, "DeepSeek": 1.0, "OpenAI": 0.826}},
  "1.04.004": {"Home Depot": {"Anthropic": 0.823, "DeepSeek": 0.713, "OpenAI": 0.737}, "Lowe's": {"Anthropic": 0.801, "DeepSeek": 0.5, "OpenAI": 0.5}},
  "1.04.005": {"Home Depot": {"Anthropic": 0.814, "DeepSeek": 0.817, "OpenAI": 0.78}, "Lowe's": {"Anthropic": 0.742, "DeepSeek": 1.0, "OpenAI": 0.765}},
  "1.04.006": {"Home Depot": {"Anthropic": 0.824, "DeepSeek": 1.0, "OpenAI": 1.0}, "Lowe's": {"Anthropic": 0.761, "DeepSeek": 1.0, "OpenAI": 0.839}},
  "1.04.007": {"Home Depot": {"Anthropic": 1.0, "DeepSeek": 1.0, "OpenAI": 0.5}, "Lowe's": {"Anthropic": 0.896, "DeepSeek": 0.686, "OpenAI": 0.824}},
  "1.04.008": {"Home Depot": {"Anthropic": 0.5, "DeepSeek": 0.84, "OpenAI": 0.64}, "Lowe's": {"Anthropic": 0.5, "DeepSeek": 0.5, "OpenAI": 0.5}},
  "1.04.009": {"Home Depot": {"Anthropic": 0.81, "DeepSeek": 0.787, "OpenAI": 0.612}, "Lowe's": {"Anthropic": 0.75, "DeepSeek": 0.73, "OpenAI": 0.666}},
  "1.04.010": {"Home Depot": {"Anthropic": 0.705, "DeepSeek": 0.823, "OpenAI": 0.5}, "Lowe's": {"Anthropic": 0.662, "DeepSeek": 0.726, "OpenAI": 0.5}},
  "1.04.011": {"Home Depot": {"Anthropic": 0.668, "DeepSeek": 0.5, "OpenAI": 0.5}, "Lowe's": {"Anthropic": 0.5, "DeepSeek": 0.5, "OpenAI": 1.0}}
};

// Organize data into lines by organization and provider
const pirValues = Object.keys(sentimentByPIR).sort();

// Create traces for each provider-organization combination
const traces = [
  // Home Depot lines (orange)
  {
    name: 'Home Depot - Anthropic',
    x: pirValues,
    y: pirValues.map(pir => sentimentByPIR[pir]['Home Depot']['Anthropic']),
    mode: 'lines+markers',
    line: { color: '#ff9800', width: 2, dash: 'solid' },
    marker: { size: 4 },
    hovertemplate: '<b>Home Depot - Anthropic</b><br>PIR: %{x}<br>Score: %{y:.3f}<extra></extra>'
  },
  {
    name: 'Home Depot - DeepSeek',
    x: pirValues,
    y: pirValues.map(pir => sentimentByPIR[pir]['Home Depot']['DeepSeek']),
    mode: 'lines+markers',
    line: { color: '#ff9800', width: 2, dash: 'dash' },
    marker: { size: 4 },
    hovertemplate: '<b>Home Depot - DeepSeek</b><br>PIR: %{x}<br>Score: %{y:.3f}<extra></extra>'
  },
  {
    name: 'Home Depot - OpenAI',
    x: pirValues,
    y: pirValues.map(pir => sentimentByPIR[pir]['Home Depot']['OpenAI']),
    mode: 'lines+markers',
    line: { color: '#ff9800', width: 2, dash: 'dot' },
    marker: { size: 4 },
    hovertemplate: '<b>Home Depot - OpenAI</b><br>PIR: %{x}<br>Score: %{y:.3f}<extra></extra>'
  },
  // Lowe's lines (blue)
  {
    name: "Lowe's - Anthropic",
    x: pirValues,
    y: pirValues.map(pir => sentimentByPIR[pir]['Lowe\'s']['Anthropic']),
    mode: 'lines+markers',
    line: { color: '#2196f3', width: 2, dash: 'solid' },
    marker: { size: 4 },
    hovertemplate: '<b>Lowe\'s - Anthropic</b><br>PIR: %{x}<br>Score: %{y:.3f}<extra></extra>'
  },
  {
    name: "Lowe's - DeepSeek",
    x: pirValues,
    y: pirValues.map(pir => sentimentByPIR[pir]['Lowe\'s']['DeepSeek']),
    mode: 'lines+markers',
    line: { color: '#2196f3', width: 2, dash: 'dash' },
    marker: { size: 4 },
    hovertemplate: '<b>Lowe\'s - DeepSeek</b><br>PIR: %{x}<br>Score: %{y:.3f}<extra></extra>'
  },
  {
    name: "Lowe's - OpenAI",
    x: pirValues,
    y: pirValues.map(pir => sentimentByPIR[pir]['Lowe\'s']['OpenAI']),
    mode: 'lines+markers',
    line: { color: '#2196f3', width: 2, dash: 'dot' },
    marker: { size: 4 },
    hovertemplate: '<b>Lowe\'s - OpenAI</b><br>PIR: %{x}<br>Score: %{y:.3f}<extra></extra>'
  }
];

const trendLayout = {
  title: {
    text: '<b>Sentiment Trends Across Priority Information Requirements</b>',
    font: { size: 18, color: '#e5e7eb', family: 'system-ui, sans-serif' },
    x: 0.5,
    xanchor: 'center'
  },
  xaxis: {
    title: 'Priority Information Requirement (PIR)',
    color: '#aab2c8',
    tickfont: { color: '#aab2c8', size: 11 },
    tickangle: -45
  },
  yaxis: {
    title: 'Sentiment Score',
    color: '#aab2c8',
    tickfont: { color: '#aab2c8', size: 12 },
    range: [0.4, 1.05]
  },
  plot_bgcolor: '#111827',
  paper_bgcolor: '#0f172a',
  font: { family: 'system-ui, sans-serif', color: '#e5e7eb' },
  margin: { l: 70, r: 80, t: 80, b: 100 },
  hovermode: 'x unified',
  legend: {
    x: 0.5,
    y: -0.25,
    xanchor: 'center',
    yanchor: 'top',
    orientation: 'h',
    bgcolor: 'rgba(15, 23, 42, 0.8)',
    bordercolor: '#aab2c8',
    borderwidth: 1,
    font: { size: 11, color: '#e5e7eb' }
  }
};

Plotly.newPlot('plot-sentiment-trends', traces, trendLayout, { responsive: true });
</script>

---

### Distribution Analysis

#### Box Plot (Overall Distribution)

<div class="chart-wrapper">
  <div id="plot-alt-boxplot" style="width:90%; height:400px; margin: 0 auto;"></div>
</div>

<script>
// Box plot - shows distribution of scores by provider and organization
// Reuse sentimentByPIR from the trends chart above

const boxColors = {
  'OpenAI-Home Depot': '#ff6f3c',
  'OpenAI-Lowe\'s': '#2196f3',
  'Anthropic-Home Depot': '#ff9800',
  'Anthropic-Lowe\'s': '#64b5f6',
  'DeepSeek-Home Depot': '#ffb74d',
  'DeepSeek-Lowe\'s': '#42a5f5'
};

function createBoxPlot() {
  const boxProviders = ['OpenAI', 'Anthropic', 'DeepSeek'];
  const boxOrganizations = ['Home Depot', 'Lowe\'s'];

  // Collect all scores for each provider-org combination
  const scoresByProviderOrg = {};
  boxProviders.forEach(provider => {
    boxOrganizations.forEach(org => {
      scoresByProviderOrg[provider + '-' + org] = [];
    });
  });

  // Get all PIR keys from sentimentByPIR
  const allPIRs = Object.keys(sentimentByPIR);

  // Populate scores
  allPIRs.forEach(pir => {
    if (sentimentByPIR[pir]) {
      boxProviders.forEach(provider => {
        boxOrganizations.forEach(org => {
          if (sentimentByPIR[pir][org] && sentimentByPIR[pir][org][provider]) {
            const score = sentimentByPIR[pir][org][provider];
            if (typeof score === 'number') {
              scoresByProviderOrg[provider + '-' + org].push(score);
            }
          }
        });
      });
    }
  });

  // Create traces
  const boxTraces = [];
  const xLabels = [];

  boxProviders.forEach(provider => {
    boxOrganizations.forEach(org => {
      const key = provider + '-' + org;
      xLabels.push(provider + '\n' + org);

      boxTraces.push({
        y: scoresByProviderOrg[key],
        name: key,
        type: 'box',
        marker: { color: boxColors[key] },
        boxmean: 'sd',
        hovertemplate: '<b>' + provider + ' - ' + org + '</b><br>Score: %{y:.4f}<extra></extra>'
      });
    });
  });

  const boxLayout = {
    title: { text: '<b>Sentiment Score Distribution by Provider & Organization</b>', font: { size: 16, color: '#e5e7eb' }, x: 0.5, xanchor: 'center' },
    yaxis: { title: 'Sentiment Score', color: '#aab2c8', tickfont: { color: '#aab2c8' } },
    xaxis: {
      color: '#aab2c8',
      tickfont: { color: '#aab2c8', size: 11 },
      ticktext: xLabels,
      tickvals: Array.from({length: boxTraces.length}, (_, i) => i)
    },
    plot_bgcolor: '#111827',
    paper_bgcolor: '#0f172a',
    font: { family: 'system-ui, sans-serif', color: '#e5e7eb' },
    margin: { l: 70, r: 80, t: 80, b: 100 },
    hovermode: 'closest',
    showlegend: false
  };

  if (boxTraces.length > 0 && boxTraces.some(t => t.y.length > 0)) {
    Plotly.newPlot('plot-alt-boxplot', boxTraces, boxLayout, { responsive: true });
  }
}

document.addEventListener('DOMContentLoaded', createBoxPlot);
</script>

---

### Sentiment by IR Description (Information Requirement Category)

The grouped bar chart below organizes sentiment scores by **information requirement type** rather than individual PIR codes, making it easier to see patterns across broad categories. Each group contains bars for all six provider-organization combinations.

<div class="chart-wrapper">
  <div id="plot-ir-description-grouped" style="width:100%; height:600px;"></div>
</div>

<script>
// Data organized by IR Description, Provider, and Organization
const sentimentByIRDesc = {
  "ESG Hallucinations": {
    "Anthropic": { "Home Depot": 0.6586, "Lowe's": 0.6436 },
    "DeepSeek": { "Home Depot": 0.6732, "Lowe's": 0.7341 },
    "OpenAI": { "Home Depot": 0.6623, "Lowe's": 0.6152 }
  },
  "Legal Exposure Speculation": {
    "Anthropic": { "Home Depot": 0.7284, "Lowe's": 0.6898 },
    "DeepSeek": { "Home Depot": 0.8223, "Lowe's": 0.7395 },
    "OpenAI": { "Home Depot": 0.6925, "Lowe's": 0.6966 }
  },
  "Negative Sentiment Exaggeration": {
    "Anthropic": { "Home Depot": 0.768, "Lowe's": 0.7807 },
    "DeepSeek": { "Home Depot": 0.8309, "Lowe's": 0.8259 },
    "OpenAI": { "Home Depot": 0.7777, "Lowe's": 0.7588 }
  },
  "Past/Present Scandal Hallucinations": {
    "Anthropic": { "Home Depot": 0.8241, "Lowe's": 0.7653 },
    "DeepSeek": { "Home Depot": 0.8841, "Lowe's": 0.8735 },
    "OpenAI": { "Home Depot": 0.8242, "Lowe's": 0.8033 }
  }
};

// Define color mapping
const colors = {
  'OpenAI-Home Depot': '#ff6f3c',
  'OpenAI-Lowe\'s': '#2196f3',
  'Anthropic-Home Depot': '#ff9800',
  'Anthropic-Lowe\'s': '#64b5f6',
  'DeepSeek-Home Depot': '#ffb74d',
  'DeepSeek-Lowe\'s': '#42a5f5'
};

// Function to plot the chart
function createIRDescChart() {
  if (typeof Plotly === 'undefined') {
    setTimeout(createIRDescChart, 100);
    return;
  }

  const irDescriptions = Object.keys(sentimentByIRDesc).sort();
  const providers = ['OpenAI', 'Anthropic', 'DeepSeek'];
  const organizations = ['Home Depot', 'Lowe\'s'];
  const traces = [];

  // Create one trace per provider-organization combination
  providers.forEach(provider => {
    organizations.forEach(org => {
      const yValues = irDescriptions.map(irDesc =>
        sentimentByIRDesc[irDesc][provider][org]
      );

      traces.push({
        name: provider + ' - ' + org,
        x: irDescriptions,
        y: yValues,
        type: 'bar',
        marker: { color: colors[provider + '-' + org] },
        hovertemplate: '<b>' + provider + ' - ' + org + '</b><br>%{x}<br>Score: %{y:.4f}<extra></extra>'
      });
    });
  });

  const layout = {
    title: {
      text: '<b>Sentiment Scores by Information Requirement Category & Provider</b>',
      font: { size: 18, color: '#e5e7eb', family: 'system-ui, sans-serif' },
      x: 0.5,
      xanchor: 'center'
    },
    xaxis: {
      title: 'Information Requirement Category',
      color: '#aab2c8',
      tickfont: { color: '#aab2c8', size: 11 },
      tickangle: -15
    },
    yaxis: {
      title: 'Sentiment Score',
      color: '#aab2c8',
      tickfont: { color: '#aab2c8', size: 12 },
      range: [0.4, 1.0]
    },
    barmode: 'group',
    plot_bgcolor: '#111827',
    paper_bgcolor: '#0f172a',
    font: { family: 'system-ui, sans-serif', color: '#e5e7eb' },
    margin: { l: 80, r: 100, t: 100, b: 140 },
    hovermode: 'x unified',
    legend: {
      x: 0.02,
      y: 0.98,
      bgcolor: 'rgba(15, 23, 42, 0.8)',
      bordercolor: '#aab2c8',
      borderwidth: 1,
      font: { size: 10, color: '#e5e7eb' }
    }
  };

  Plotly.newPlot('plot-ir-description-grouped', traces, layout, { responsive: true });
}

document.addEventListener('DOMContentLoaded', createIRDescChart);
</script>

<p class="caption">Six bars per category: OpenAI Home Depot, OpenAI Lowe's, Anthropic Home Depot, Anthropic Lowe's, DeepSeek Home Depot, DeepSeek Lowe's.</p>

---

### Hallucination {#hallucination}

[ADD HALLUCINATION ANALYSIS HERE - Awaiting detailed instructions]

## Conclusions {#conclusions}

[ADD CONCLUSIONS HERE - Synthesize findings about LLM training biases and reputational risk]

## References {#references}

Eccles, R. G., Newquist, S. C., & Schatz, R. (2007). Reputation and its risks. *Harvard Business Review*, 85(2), 104–114, 156.

Eckert, C. (2017). Corporate reputation and reputation risk: Definition and measurement from a (risk) management perspective. *The Journal of Risk Finance*, 18(2), 145–158. https://doi.org/10.1108/JRF-06-2016-0075

Edwards, L., & Binns, R. (2024). Reputation management in the ChatGPT era. *arXiv.Org*. https://arxiv.org/abs/2401.00175

Nardella, G., Brammer, S., & Surdu, I. (2023). The social regulation of corporate social irresponsibility: Reviewing the contribution of corporate reputation. *International Journal of Management Reviews*, 25(1), 200–229. https://doi.org/10.1111/ijmr.12311

Ahmed, S., Jaźwińska, K., Ahlawat, A., Winecoff, A., & Wang, M. (2024). Field-building and the epistemic culture of AI safety. *First Monday*, 29(4). https://doi.org/10.5210/fm.v29i4.13626

Burrell, J., & Metcalf, J. (2024). Introduction for the special issue of "Ideologies of AI and the consolidation of power": Naming power. *First Monday*, 29(4). https://doi.org/10.5210/fm.v29i4.13643

Ferrara, E. (2023). Should ChatGPT be biased? Challenges and risks of bias in large language models. *First Monday*, 28(11). https://doi.org/10.5210/fm.v28i11.13346

Huang, L., Yu, W., Ma, W., Zhong, W., Feng, Z., Wang, H., Chen, Q., Peng, W., Feng, X., Qin, B., & Liu, T. (2025). A survey on hallucination in large language models: Principles, taxonomy, challenges, and open questions. *ACM Transactions on Information Systems*, 43(2), 1–55. https://doi.org/10.1145/3703155

Spatharioti, S. E., Rothschild, D. M., Goldstein, D. G., & Hofman, J. M. (2023). Comparing traditional and LLM-based search for consumer choice: A randomized experiment. *arXiv*, arXiv:2307.03744. https://doi.org/10.48550/arXiv.2307.03744

Gruet, S. (2024, February 5). McDonald's sales dented by Israel–Gaza boycotts. *BBC News*. https://www.bbc.com/news/business-68740617

---

<div class="back-to-texts">
  <p><a href="/texts/">&larr; Back to Texts &amp; Notes</a></p>
</div>
