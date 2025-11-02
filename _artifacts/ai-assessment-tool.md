---
title: "AI Assessment Tool"
summary: "Defensive AI security platform that performs red team testing of LLM models using Priority Intelligence Requirements framework to assess organizational reputation and security risks."
role: "Designer & Developer"
tags: ["Agentic Coding", "AI Security", "Risk Analysis", "Python"]
date: 2025-11-02
weight: 5
github: "https://github.com/Garrett-Ferrara/ai-assessment-tool"
---

## Overview

A defensive AI security platform that performs red team testing of AI models to help organizations understand their AI-related reputation and security risks. The platform systematically queries multiple LLM providers using structured **Priority Intelligence Requirements (PIRs)** to assess what potentially damaging information they might reveal.

## Key Features

### PIR Framework
- **PIR-0**: Baseline Information Gathering
- **PIR-1**: Legal and Regulatory Intelligence
- **PIR-2**: Adversarial Influence and Messaging
- **PIR-3**: Financial and Market Intelligence
- **PIR-4**: Operational Security Assessment
- **PIR-5**: Competitive Intelligence
- **PIR-6**: Technical Security Assessment

### Capabilities

- **Multi-Provider Support**: Query 7 AI providers simultaneously (OpenAI, Anthropic, Google, xAI, DeepSeek, Perplexity, Mistral)
- **7-Layer Analysis**: Advanced AI-powered evaluation framework including:
  - Sentiment & emotion detection (RoBERTa)
  - Financial risk analysis (FinBERT)
  - Toxicity detection (Toxic-BERT)
  - Information leakage identification (spaCy NER)
  - Hallucination detection (Sentence Transformers)
  - Variance analysis (semantic clustering)
  - Named entity recognition (spaCy)
- **Cost Management**: Transparent estimation with user confirmation
- **Professional Reports**: JSON, CSV, and HTML export formats
- **Rate Limiting**: Provider-specific concurrency management
- **Real-Time Progress**: Live query completion tracking

## Repository

**[View on GitHub](https://github.com/Garrett-Ferrara/ai-assessment-tool)** — Full source code, documentation, and installation instructions.
