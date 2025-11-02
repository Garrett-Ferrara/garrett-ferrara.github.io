---
title: "First Monday Journal Scraper"
summary: "Comprehensive web scraper for extracting 30 years of academic articles from First Monday journal (1996–2025) with 2,710+ articles in clean, structured format."
role: "Researcher & Technical Lead"
tags: ["Agentic Coding", "Web Scraping", "Corpus Building", "Academic Methods"]
date: 2025-11-02
weight: 6
github: "https://github.com/Garrett-Ferrara/FirstMondayScraperV2"
---

## Overview

A comprehensive web scraper for extracting 30 years of academic content from First Monday journal (firstmonday.org). The scraper respects crawling ethics while handling complex platform migrations from legacy static HTML to modern Open Journal Systems (OJS) architecture.

## Key Features

### Dual Parser System
- **Legacy format** (1996–early 2000s): Handles original HTML structure
- **Modern format** (OJS): Manages current journal platform
- Seamless switching based on publication date

### Quality & Ethics
- **Respectful crawling**: Built-in rate limiting with configurable delays
- **Checkpoint system**: Resume interrupted scraping sessions without data loss
- **Proper headers**: User-agent identification and ToS compliance
- **Comprehensive logging**: Track progress, errors, and data quality

### Structured Output
- **Metadata JSON**: Organized article metadata with standardized fields
- **Full-text extraction**: Complete article text for analysis
- **Validation reports**: Automated data quality checks and statistics

## Article Metadata

Each scraped article includes:
- **Basic**: Title, authors, publication date
- **Content**: Abstract, keywords, full text
- **Identifiers**: DOI, volume, issue, article ID
- **Technical**: Word count, scrape timestamp, source URL

## Repository

**[View on GitHub](https://github.com/Garrett-Ferrara/FirstMondayScraperV2)** — Full source code, usage examples, and corpus documentation.

## Academic Impact

The resulting corpus supports:
- Distant reading of internet research trends (1996–2025)
- Author network and collaboration analysis
- Citation pattern analysis across foundational digital studies literature
- Temporal discourse analysis of emerging technologies and online communities
