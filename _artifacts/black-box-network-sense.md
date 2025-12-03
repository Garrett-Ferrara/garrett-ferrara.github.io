---
layout: artifact
title: "Black Box Network Sense"
summary: "Interactive hub presenting distant reading analysis of Internet Studies through network sense mapping, featuring agentic coding methodology and visualizations of disciplinary trends."
role: "Student / Independent Researcher"
course: "ENC 5920 - Colloquium in Rhetoric and Composition"
tags: ["LLM Evaluation", "Academic Writing", "Data Visualization", "Digital Humanities"]
date: 2025-11-03
weight: 5
preview_image: "/assets/previews/BlackBoxNetworkSense.jpg"
links:
  - label: "Explore the Presentation →"
    url: "/texts/fm_presentation/"
---

## Overview

"Black Box Network Sense" is an interactive research presentation that combines disciplinary analysis with agentic coding methodology. The project explores how core rhetoric and composition concepts have evolved within First Monday (1996–2025), a leading peer-reviewed journal in Internet Studies. The goal of this project was to produce interactive visualizations that explored the best ways to visualize Rhetoric and Composition as a discipline within or adjacent to internet studies.

Analyzing five interactive charts built from the data collected, the project revealed the following key finding

* Visualizations revealed no turns explicitly toward or away from core terms representing explicit Rhetoric and Composition affiliation, such as "Writing", "Rhetoric", and "Composition", though visualizations did reveal evidence of concurrent turns in the journal related to adjacent terms.

* Phenomena most prominently displayed and worth further investigation include strong turns toward "Identity" and "Digital Media", potential turns away from "Writing" and "Digital Divide", and spikes in the terms "Discourse" and "Civic Engagement" during election years.

Beyond these key research findings, the project also showcases academic collaboration with AI, with examples for others to inspire their own AI workflows.

## Scope and Framework

This project emerged in three phases. The first was to build an ethical scraper to create a corpus of the entire First Monday journal's history. The resulting dataset spans 1996 through 2025 and 2,710 articles across 359 issues.

Once the data was collected, the next step was to organize and analyze the data. I used WordStat to obtain the frequencies of ten n-grams related to Rhetoric and compositions. The terms and their definitions are described below:

Unigrams:
Identity - Individual representation in text and online contexts.
Discourse - Communicative practices that exchange and evaluate ideas.
Writing - Composition practice, written expression, authorship, and textual production.
Rhetoric - Theories and studies exploring the contexts and impacts of communication
Composition - Writing instruction, curriculum, and the discipline of composition studies.
Bigrams:
Digital media - Electronic communication and text platforms.
Digital divide - Technological access inequality and access disparities
Public Sphere - Open and social areas for societal discourse
Online communities - virtual collectives connected by digital platforms
Civic Engagement - Political participation, activism, and collective action

In the last stage of the project, I assembled the digital text itself, with four "slideshow" style text pages and five different chart types exploring n-gram frequency analysis:

Stacked Area: Combined frequency trends across all key terms
Term Trajectories: Individual term frequency with trendlines
Bubble Charts: Multidimensional analysis of term prevalence.
Temporal Heatmaps: Comparative heatmaps showing term prevalence.
Peak Normalized Heatmap: A separate version of the heatmap normalized as a percentage of peak maximum.

## Reflections

Before diving into a formal reflection, I want to highlight one aspect of this project: it was *fun*. This project was my first real success in using Claude Code to build a digital text, and working iteratively with Claude Code, I was able to punch far above my weight class in designing the web text and its visualizations. Though some level of comfort working in a terminal is necessary, building your own digital texts without relying on Web 2.0-style templates has never been more accessible, and I strongly encourage you to review the [Reflections on AI Coding](https://garrett-ferrara.github.io/texts/fm_presentation_agentic-coding/) section of the project to see it in action.

As far as the academic goals of the project, two key components drove its design and production:

* Network Sense: Derek Mueller's titular *Network Sense: Methods for Visualizing a Discipline* provided the methodological framework for understanding disciplinary patterns through thin and distant reading - examining macro-level trends in scholarly conversation across hundreds of articles.

* AI Collaboration: Having used Claude Code for minor scripting projects, I wanted to explore how using an AI coding agent would impact my research in a project with different components that needed to work together.

Regarding Network Sense, I expect I will return to this book many times in the future for inspiration on conducting future research into larger bodies of text. One challenge of conducting such research is knowing when you need a data scientist involved and when you can responsibly interpret the data yourself. Network Sense offered an excellent middle ground, offering tools for visualizing and analyzing trends over time at a level before deeper quantitative or qualitative analysis is needed. This project highlighted several trends likely warranting such deeper investigation, and I'm excited to revisit this in the future.

As alluded to above, I think this project was a resounding success in highlighting AI collaboration in academic research. Despite much recent discussion on using AI to generate text and findings in academic research, I think using AI as a tool to generate code and transform data will be the most powerful way digital humanities researchers can implement AI into their workflows. Claude Code felt less like a shortcut and more like a force multiplier: it extended what I was capable of doing (albeit very slowly) on my own, but it still required me to direct the research questions, interpret the results, and shape the final narrative.

This project is almost certainly my favorite from my graduate school research. It was the first time I felt genuinely confident combining academic inquiry with coding, and the collaboration with Claude Code made the work feel accessible instead of intimidating. More importantly, it reminded me that multimodal scholarship can be creative and enjoyable, not just a requirement to fulfill. Building something interactive and research-driven felt like the clearest expression of what I've learned in the program.
