document.addEventListener('DOMContentLoaded', function() {
  const filterContainer = document.getElementById('filter-container');
  const filterPills = document.querySelectorAll('.filter-pill');
  const jobEntries = document.querySelectorAll('.job-entry');

  // Only set up filters if we're not printing
  if (filterContainer && filterPills.length > 0) {
    filterPills.forEach(pill => {
      pill.addEventListener('click', function() {
        const selectedFilter = this.dataset.filter;

        // Update active state
        filterPills.forEach(p => p.classList.remove('active'));
        this.classList.add('active');

        // Apply filter to all job entries
        applyFilter(selectedFilter);
      });
    });
  }

  function applyFilter(filter) {
    jobEntries.forEach(jobEntry => {
      const bullets = jobEntry.querySelectorAll('.job-bullet');
      let visibleBulletCount = 0;

      bullets.forEach(bullet => {
        const tags = bullet.dataset.tags.split(',').map(tag => tag.trim());

        if (filter === 'all' || tags.includes(filter)) {
          bullet.style.display = 'list-item';
          visibleBulletCount++;
        } else {
          bullet.style.display = 'none';
        }
      });

      // Show or hide job entry based on visible bullets
      if (visibleBulletCount > 0) {
        jobEntry.style.display = 'block';
      } else {
        jobEntry.style.display = 'none';
      }
    });
  }

  // Print button functionality
  const printBtn = document.getElementById('print-btn');
  if (printBtn) {
    printBtn.addEventListener('click', function() {
      // Show all content before printing
      showAllForPrint();
      setTimeout(() => {
        window.print();
      }, 100);
    });
  }

  function showAllForPrint() {
    // Show all job entries
    jobEntries.forEach(jobEntry => {
      jobEntry.style.display = 'block';
    });

    // Show all bullets
    const allBullets = document.querySelectorAll('.job-bullet');
    allBullets.forEach(bullet => {
      bullet.style.display = 'list-item';
    });
  }

  // Handle print event to restore filter after printing
  window.addEventListener('afterprint', function() {
    // Reapply current filter
    const activeFilter = document.querySelector('.filter-pill.active');
    if (activeFilter) {
      applyFilter(activeFilter.dataset.filter);
    }
  });
});
