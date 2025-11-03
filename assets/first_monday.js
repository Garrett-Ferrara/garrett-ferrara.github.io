/**
 * first_monday.js
 * Enhances the digital text with smooth scrolling, TOC highlight on scroll, and image carousel.
 *
 * Features:
 * - Smooth scroll behavior for TOC links
 * - Active section highlighting as user scrolls
 * - Image carousel navigation with Previous/Next buttons
 * - Mobile-friendly interactions
 */

/**
 * Image carousel navigation function
 * @param {string} carouselId - The ID of the carousel container
 * @param {number} direction - Direction to move: -1 for previous, 1 for next
 */
function changeImage(carouselId, direction) {
    const carousel = document.getElementById(carouselId);
    const images = carousel.querySelectorAll('.carousel-image');
    let currentIndex = 0;

    // Find currently visible image
    images.forEach((img, idx) => {
        if (img.style.display !== 'none') {
            currentIndex = idx;
        }
    });

    // Hide current image
    images[currentIndex].style.display = 'none';

    // Calculate new index with wrapping
    const newIndex = (currentIndex + direction + images.length) % images.length;

    // Show new image
    images[newIndex].style.display = 'block';

    // Update counter
    const counter = carousel.querySelector('.carousel-current');
    counter.textContent = newIndex + 1;

    // Update label if it exists
    const labelSpan = carousel.querySelector('.carousel-term');
    if (labelSpan) {
        const label = images[newIndex].getAttribute('data-label');
        labelSpan.textContent = label || '';
    }
}

/**
 * Visualization carousel navigation function
 * @param {string} vizCarouselId - The ID of the viz carousel container
 * @param {number} direction - Direction to move: -1 for previous, 1 for next
 */
function changeViz(vizCarouselId, direction) {
    const carousel = document.getElementById(vizCarouselId);
    const views = carousel.querySelectorAll('.viz-view');
    let currentIndex = 0;

    // Chart labels in order
    const chartLabels = ['Identity', 'Discourse', 'Writing', 'Rhetoric', 'Composition', 'Digital Media', 'Digital Divide', 'Public Sphere', 'Online Communities', 'Civic Engagement'];

    // Find currently visible view
    views.forEach((view, idx) => {
        if (view.style.display !== 'none') {
            currentIndex = idx;
        }
    });

    // Hide current view
    views[currentIndex].style.display = 'none';

    // Calculate new index with wrapping
    const newIndex = (currentIndex + direction + views.length) % views.length;

    // Show new view
    views[newIndex].style.display = 'block';

    // Update counter
    const counter = carousel.querySelector('.viz-current');
    counter.textContent = newIndex + 1;

    // Update label
    const labelSpan = carousel.querySelector('.viz-term');
    labelSpan.textContent = chartLabels[newIndex];

    // Resize Plotly chart to fit new width after display change
    setTimeout(() => {
        const plotDiv = views[newIndex].querySelector('[id^="plot-"]');
        if (plotDiv && window.Plotly) {
            Plotly.Plots.resize(plotDiv);
        }
    }, 0);
}

document.addEventListener('DOMContentLoaded', function() {
    const toc = document.getElementById('toc');
    const tocLinks = toc ? toc.querySelectorAll('a[href^="#"]') : [];
    const sections = document.querySelectorAll('section[id], header[id]');

    /**
     * Highlight active TOC link based on scroll position
     */
    function updateActiveTocLink() {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            // If section is in viewport, mark it as current
            if (window.scrollY >= sectionTop - 200) {
                currentSection = section.getAttribute('id');
            }
        });

        // Update active state on all TOC links
        tocLinks.forEach(link => {
            const href = link.getAttribute('href');
            const targetId = href.substring(1);

            if (targetId === currentSection) {
                link.style.color = 'var(--link-hover)';
                link.style.fontWeight = '700';
            } else {
                link.style.color = 'var(--link)';
                link.style.fontWeight = '400';
            }
        });
    }

    /**
     * Smooth scroll with proper offset for fixed headers
     */
    tocLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Scroll with offset for header height (~80px)
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                // Update TOC highlight immediately
                updateActiveTocLink();
            }
        });
    });

    /**
     * Update highlight on scroll
     */
    window.addEventListener('scroll', updateActiveTocLink);

    /**
     * Initialize carousels with their first label
     */
    const carousels = document.querySelectorAll('.image-carousel');
    carousels.forEach(carousel => {
        const firstImage = carousel.querySelector('.carousel-image');
        const labelSpan = carousel.querySelector('.carousel-term');
        if (firstImage && labelSpan) {
            const label = firstImage.getAttribute('data-label');
            labelSpan.textContent = label || '';
        }
    });

    /**
     * Initialize visualization carousel with first term label
     */
    const vizCarousel = document.getElementById('viz-carousel');
    if (vizCarousel) {
        const vizTermSpan = vizCarousel.querySelector('.viz-term');
        const chartLabels = ['Identity', 'Discourse', 'Writing', 'Rhetoric', 'Composition', 'Digital Media', 'Digital Divide', 'Public Sphere', 'Online Communities', 'Civic Engagement'];
        if (vizTermSpan) {
            vizTermSpan.textContent = chartLabels[0];
        }
    }

    /**
     * Initialize on page load
     */
    updateActiveTocLink();
});

/**
 * Optional: Lazy loading for images
 * Uncomment if you want to optimize image loading
 */
/*
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img.lazy').forEach(img => imageObserver.observe(img));
}
*/

/**
 * Copy-to-clipboard functionality for code blocks (optional enhancement)
 */
document.querySelectorAll('.code-block').forEach(block => {
    // Create copy button
    const copyBtn = document.createElement('button');
    copyBtn.textContent = 'Copy';
    copyBtn.style.cssText = `
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        padding: 0.25rem 0.75rem;
        background: var(--accent);
        color: var(--accent-contrast);
        border: none;
        border-radius: 0.25rem;
        cursor: pointer;
        font-size: 0.875rem;
        opacity: 0;
        transition: opacity 0.2s;
    `;

    const blockWrapper = document.createElement('div');
    blockWrapper.style.position = 'relative';
    block.parentNode.insertBefore(blockWrapper, block);
    blockWrapper.appendChild(block);
    blockWrapper.appendChild(copyBtn);

    // Show button on hover
    blockWrapper.addEventListener('mouseenter', () => {
        copyBtn.style.opacity = '1';
    });

    blockWrapper.addEventListener('mouseleave', () => {
        copyBtn.style.opacity = '0';
    });

    // Copy functionality
    copyBtn.addEventListener('click', () => {
        const text = block.textContent;
        navigator.clipboard.writeText(text).then(() => {
            const originalText = copyBtn.textContent;
            copyBtn.textContent = 'Copied!';
            setTimeout(() => {
                copyBtn.textContent = originalText;
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy:', err);
        });
    });
});
