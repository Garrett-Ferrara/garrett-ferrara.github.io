---
layout: resume
title: "Resume"
description: "Education, professional experience, and training."
---

<div class="bio-hero">
  <img src="/assets/grfheadshot.png" alt="Garrett Richard Ferrara" class="bio-headshot">
  <div class="bio-intro">
    <h1>Garrett Richard Ferrara</h1>
    <p class="bio-tagline">Analyst & Editor</p>
    <p class="bio-summary">I am an analyst and editor with over fifteen years of experience applying intelligence tradecraft, editorial expertise, and knowledge management frameworks to ensure the right information reaches the right eyes at the right time. Drawing on experience spanning military intelligence operations, Fortune 500 threat analysis, and technical writing for internal and external knowledge bases, I specialize in translating complex findings into clear, actionable insights.</p>
  </div>
</div>

## Education

<div class="education-banner">
  {% for degree in site.data.resume.degrees %}
  <div class="education-item">
    <h3>{{ degree.title }}</h3>
    <p class="subtitle">{{ degree.institution }} | {{ degree.location }} | {{ degree.date }}</p>
  </div>
  {% endfor %}
</div>

## Professional Experience

<div class="filter-container" id="filter-container">
  <div class="filter-label">Filter:</div>
  <div class="filter-pills">
    <button class="filter-pill" data-filter="all">All</button>
    <button class="filter-pill active" data-filter="highlights">Highlights</button>
    <button class="filter-pill" data-filter="leadership">Leadership</button>
    <button class="filter-pill" data-filter="intel_analysis">Intelligence Analysis</button>
    <button class="filter-pill" data-filter="writing_editing">Writing & Editing</button>
    <button class="filter-pill" data-filter="km_it">KM / IT</button>
  </div>
</div>

<div class="experience-timeline">
  {% for job in site.data.resume.experience %}
  <div class="cv-entry job-entry" data-job-index="{{ forloop.index0 }}">
    <span class="job-date"><span class="date-month">{{ job.dates | split: "–" | last | strip | date: "%B" }}</span><span class="date-year">{{ job.dates | split: "–" | last | strip | date: "%Y" }}</span></span>
    <h3>{{ job.title }}</h3>
    <p class="subtitle">{{ job.company }} | {{ job.location }} | {{ job.dates }}</p>

    <ul class="job-bullets">
      {% for bullet in job.bullets %}
      <li class="job-bullet" data-tags="{% for tag in bullet.tags %}{{ tag }}{% unless forloop.last %},{% endunless %}{% endfor %}">
        {{ bullet.text }}
      </li>
      {% endfor %}
    </ul>
  </div>
  {% endfor %}

  <!-- Timeline origin date -->
  <div class="timeline-origin">
    <span class="job-date origin-date"><span class="date-month">January</span><span class="date-year">2011</span></span>
  </div>
</div>

## Training

<div class="training-banner">
  {% for training in site.data.resume.training %}
  <div class="training-item">
    <h3>{{ training.title }}</h3>
    <p class="subtitle">{{ training.date }} | {{ training.location }}</p>
  </div>
  {% endfor %}
</div>

## Skills & Certifications

<div class="skills-section">
  <div class="skill-group">
    <h3 class="skill-subheading">Technical Proficiencies</h3>
    <div class="skill-pills">
      {% for skill in site.data.resume.skills.technical %}
      <span class="skill-pill">{{ skill }}</span>
      {% endfor %}
    </div>
  </div>

  <div class="skill-group">
    <h3 class="skill-subheading">Regional & Subject Matter Expertise</h3>
    <div class="skill-pills">
      {% for skill in site.data.resume.skills.expertise %}
      <span class="skill-pill">{{ skill }}</span>
      {% endfor %}
    </div>
  </div>
</div>

<script src="/assets/resume-filter.js"></script>

