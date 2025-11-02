---
layout: page
title: "Portfolio"
description: "Selected public work and academic projects."
---

Use the filter below to explore by topic.

<div class="filter-controls">
  <span class="filter-label">Filter by:</span>
  <button class="filter-tag active" data-filter="all">All</button>
  <button class="filter-tag" data-filter="OSINT">OSINT</button>
  <button class="filter-tag" data-filter="Academic Writing">Academic Writing</button>
  <button class="filter-tag" data-filter="Agentic Coding">Agentic Coding</button>
  <button class="filter-tag" data-filter="LLM Evaluation">LLM Evaluation</button>
  <button class="filter-tag" data-filter="Editorial Leadership">Editorial Leadership</button>
</div>

<div class="portfolio-grid">
  {% assign sorted_artifacts = site.artifacts | sort: "weight" | sort: "date" | reverse %}
  {% for artifact in sorted_artifacts %}
    <a href="{{ artifact.url }}" class="artifact-card" data-tags="{% for tag in artifact.tags %}{{ tag }}{% unless forloop.last %},{% endunless %}{% endfor %}">
      <h3>{{ artifact.title }}</h3>
      <p class="artifact-summary">{{ artifact.summary }}</p>

      {% if artifact.pdf %}
        <div class="artifact-preview">
          <div class="pdf-preview">
            <div class="pdf-preview-icon"><i class="fas fa-file-pdf"></i></div>
            <div class="pdf-preview-filename">View PDF</div>
          </div>
        </div>
      {% else %}
        <div class="artifact-preview">
          <div class="file-tree">
            <div class="file-tree-item"><span class="file-tree-folder">📁 Repository</span></div>
            <div class="file-tree-item"><span class="file-tree-indent"></span><span class="file-tree-file">📄 README.md</span></div>
            <div class="file-tree-item"><span class="file-tree-indent"></span><span class="file-tree-file">📄 index.py</span></div>
            <div class="file-tree-item"><span class="file-tree-indent"></span><span class="file-tree-file">📁 src/</span></div>
            <div class="file-tree-item"><span class="file-tree-indent"></span><span class="file-tree-indent"></span><span class="file-tree-file">📄 main.py</span></div>
          </div>
        </div>
      {% endif %}

      <div class="artifact-tags">
        {% for tag in artifact.tags limit: 3 %}
          <span class="tag">{{ tag }}</span>
        {% endfor %}
      </div>
    </a>
  {% endfor %}
</div>

<script>
  document.querySelectorAll('.filter-tag').forEach(button => {
    button.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');

      // Update active state
      document.querySelectorAll('.filter-tag').forEach(btn => {
        btn.classList.remove('active');
      });
      this.classList.add('active');

      // Filter cards
      document.querySelectorAll('.artifact-card').forEach(card => {
        const tags = card.getAttribute('data-tags').split(',');
        if (filter === 'all' || tags.includes(filter)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
</script>

