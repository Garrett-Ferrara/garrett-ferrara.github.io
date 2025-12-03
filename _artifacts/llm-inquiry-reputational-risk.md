---
title: "Brand Reputation in the Post–Search Web: Part I"
summary: "A proof-of-concept analysis exploring how LLMs shape reputational risk in household brands through sentiment analysis and hallucination detection."
role: "Student / Independent Researcher"
course: "ENC 6952 - Rhetoric and Composition Graduate Capstone"
tags: ["LLM Evaluation", "Academic Writing", "Data Visualization"]
date: 2025-12-01
weight: 5
preview_image: "/assets/previews/LLM_Inquiry_1.jpg"
links:
  - label: "Explore the Project →"
    url: "/texts/LLM_Inquiry_1/"
---

## Overview

This digital text compares LLM responses from ChatGPT, Claude, and DeepSeek concerning two home improvement retail competitors - Home Depot and Lowe's. It is the first proof of concept in an investigation into whether training biases in LLMs present differing levels of reputational risk to competing household brands in a world where ChatGPT and similar tools have replaced traditional search engines for users conducting research about a company. After building a tool to query different LLM providers with prompts designed to probe for harmful hallucinations, I needed to find a way to parse through the responses.

This first stage tested whether sentiment analysis or rudimentary, semantic-based hallucination detectors would be useful in yielding actionable insights Though neither analysis method I tested succeeded to the degree I had hoped for, I did come away with the following key findings:

* Sentiment scores were broadly similar for both competitors in prompts sent to the same model. ChatGPT and Claude averaged slightly negative in their responses, while DeepSeek scored significantly more negative.

* DeepSeek's increased negativity likely stems from less effective guardrails that cause ChatGPT and Claude to stop answering problematic prompts.

* All three models produced hallucinations with damaging claims for both competitors. Responses speculating on scandals and lawsuits generated the most egregious hallucinations.

## Scope and Framework

The data used in this project comes from test queries comparing ChatGPT (gpt-4o), Claude (claude-sonnet-4), and DeepSeek (deepseek-chat) responses across four information requirements:

PIR 1.01 - Past and Present Scandal Hallucinations: Do any AI models hallucinate past or present scandals?
PIR 1.02 - Negative Sentiment Exaggeration: Do models exaggerate or invent negative public sentiment?
PIR 1.03 - ESG Hallucinations: Does the model hallucinate ESG-related accusations (greenwashing, labor issues, etc.)?
PIR 1.04 - Legal Exposure Speculation: Do LLMs speculate inaccurately about legal exposure?

After collecting all responses, the I analyzed the responses across three dimensions:

1. Sentiment Analysis: Whether responses used negative, positive, or neutral language.
2. Factual Verification: Cross-referencing claims against publicly available sources.
3. Comparative Analysis: Identifying patterns and variance across models and subjects.

## Reflections

This project emerged at the exigence of three coinciding factors in my life during the summer of 2025:

* My position as the managing editor of a company providing open-source intelligence consulting on online risks was eliminated. Expecting a lengthy job search given market conditions, I wanted to use the time to build new skills and identify untapped market opportunities.
* Claude Code released on Windows, presenting an opportunity to use my existing Claude subscription to refresh scripting skills that languished in the editorial-heavy environment I was coming from.
* I needed a fresh research project for the final semester of my Master's, as I was coming off a multiple-semester break and suddenly had the opportunity to attend classes full-time.

Thanks to my new coworker Claude Code, building the tool to prompt different LLMs was simple, but I soon found myself with thousands upon thousands of responses for a variety of household brands and no clear direction on how to parse the results into useful findings. While exploring ways to analyze the data, the social listening tool Meltwater announced a similar product called [GenAI Lens](https://www.meltwater.com/en/blog/announcing-genai-lens-llm-monitoring). No longer having the opportunity to be first to market, I let the idea fall aside to focus on other projects.

The exigence that sparked revisiting this project came from a multimodal assignment with broad parameters. I already had the data needed, and I had just finished working through Derek Mueller's Network Sense in a different class, arming me with new direction on how to handle the large dataset.

More than anything else, revisiting this project helped build back some momentum. It forced me to re-engage the technical side of my skillset, to experiment without worrying about being "first to market," and to let the work evolve into something that matched the scope of a capstone rather than a startup.

In the next stage of this project, I plan on testing new methods of parsing the data, including four more models in the analysis, and investigating how I can measure whether the prompts I measured are effective and producing responses as they might appear "out in the wild" when users are querying these systems.
