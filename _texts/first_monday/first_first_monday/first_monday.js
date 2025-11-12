/**
 * first_monday.js
 * Enhances the digital text with smooth scrolling and TOC highlight on scroll.
 *
 * Features:
 * - Smooth scroll behavior for TOC links
 * - Active section highlighting as user scrolls
 * - Mobile-friendly interactions
 */

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
