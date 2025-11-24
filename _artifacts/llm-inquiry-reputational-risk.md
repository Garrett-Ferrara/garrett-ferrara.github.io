---
title: "LLM Reputational Risk Inquiry"
summary: "Systematic investigation into whether training biases in LLMs present differing levels of reputational risk to competing household brands, with proof-of-concept query tool and analysis framework."
role: "Researcher & Analysis Tool Developer"
tags: ["LLM Evaluation", "Risk Analysis", "Academic Methods"]
date: 2025-11-15
weight: 5
preview_image: "/assets/LLM_Inquiry_1/GoogleSearch.png"
links:
  - label: "Explore the Project →"
    url: "/texts/LLM_Inquiry_1/"
---

## Research Overview

This project is the first proof of concept in an investigation into whether training biases in LLMs present differing levels of reputational risk to competing household brands in a world where ChatGPT and similar tools have replaced traditional search engines for users conducting research about a company.

In the first stage of the project, I built a tool to systematically query seven different LLM providers with grouped prompts designed to answer specific information requirements. Prompts were organized into smaller groups of similar prompts investigating a specific theme, each mapped to a Priority Information Requirement (PIR).

## Investigation Scope

The data used in this project comes from test queries comparing **ChatGPT** (gpt-4o), **Claude** (claude-sonnet-4-20250514), and **DeepSeek** (deepseek-chat) responses across all reputational risk information requirements concerning the two most dominant home improvement retailers: **Home Depot** and **Lowe's**.

## Research Framework

### Priority Information Requirements (PIRs)

**PIR 1: False, Exaggerated, or Damaging Narratives**
- PIR 1.01 - Past and Present Scandal Hallucinations: Do any AI models hallucinate past or present scandals?
- PIR 1.02 - Negative Sentiment Exaggeration: Do models exaggerate or invent negative public sentiment?
- PIR 1.03 - ESG Hallucinations: Does the model hallucinate ESG-related accusations (greenwashing, labor issues, etc.)?
- PIR 1.04 - Legal Exposure Speculation: Do LLMs speculate inaccurately about legal exposure?

### Analysis Methodology

After collecting all responses, the tool analyzed responses across three dimensions:

1. **Sentiment Analysis:** Whether responses used negative, positive, or neutral language
2. **Factual Verification:** Cross-referencing claims against publicly available sources
3. **Comparative Analysis:** Identifying patterns and variance across models and subjects

### Data Analysis and Visualization

The investigation employs interactive visualizations to surface comparative patterns across models and subjects, including sentiment heatmaps, variance analysis, and hallucination scoring matrices. These visual representations enable quick identification of systematic differences in how competing LLM providers narrate corporate reputational risk.

## Key Findings

The corpus reveals measurable differences in how competing LLM providers generate narratives about corporate entities, with implications for brand reputation, investor relations, and policy literacy in an LLM-dependent information environment.

---

> **Data & Methodology:** Includes systematized prompt sets, rudimentary analysis frameworks, sentiment/factual verification taxonomies, and comparative cross-model evaluation. Supporting visualizations and full query results available in project assets.
