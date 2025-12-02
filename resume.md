---
layout: resume
title: "Resume"
description: "Education, professional experience, and training."
---

## Education

{% for degree in site.data.resume.degrees %}
<div class="cv-entry degree-entry">
  <h3>{{ degree.title }}</h3>
  <p class="subtitle">{{ degree.institution }} | {{ degree.location }} | {{ degree.date }}</p>
</div>
{% endfor %}

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

{% for job in site.data.resume.experience %}
<div class="cv-entry job-entry" data-job-index="{{ forloop.index0 }}">
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

## Training

{% for training in site.data.resume.training %}
<div class="cv-entry training-entry">
  <h3>{{ training.title }}</h3>
  <p class="subtitle">{{ training.date }} | {{ training.location }}</p>
</div>
{% endfor %}

## Skills & Certifications

<div class="skills-section">
  <div class="skill-group">
    <h3 class="skill-subheading">Technical Proficiencies</h3>
    <p>{{ site.data.resume.skills.technical | join: ", " }}</p>
  </div>

  <div class="skill-group">
    <h3 class="skill-subheading">Regional & Subject Matter Expertise</h3>
    <p>{{ site.data.resume.skills.expertise | join: ", " }}</p>
  </div>

  <div class="skill-group">
    <h3 class="skill-subheading">Security Clearance</h3>
    <p>{{ site.data.resume.skills.clearance }}</p>
  </div>
</div>

<script src="/assets/resume-filter.js"></script>

