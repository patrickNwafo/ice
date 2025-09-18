/* ===== ICE GLOBAL RESOURCES - PERFORMANCE OPTIMIZER ===== */
/* Lazy Loading, Image Optimization, and Performance Enhancements */

// Lazy Loading for Images
function initLazyLoading() {
    // Create intersection observer for lazy loading
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                
                // Load the actual image
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                
                // Load srcset if available
                if (img.dataset.srcset) {
                    img.srcset = img.dataset.srcset;
                    img.removeAttribute('data-srcset');
                }
                
                // Remove loading class and add loaded class
                img.classList.remove('lazy-loading');
                img.classList.add('lazy-loaded');
                
                // Stop observing this image
                observer.unobserve(img);
            }
        });
    }, {
        // Load images when they're 50px away from viewport
        rootMargin: '50px 0px',
        threshold: 0.01
    });

    // Observe all lazy images
    document.querySelectorAll('img[data-src]').forEach(img => {
        img.classList.add('lazy-loading');
        imageObserver.observe(img);
    });
}

// Lazy Loading for Videos
function initVideoLazyLoading() {
    const videoObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const video = entry.target;
                
                if (video.dataset.src) {
                    video.src = video.dataset.src;
                    video.removeAttribute('data-src');
                    video.load(); // Start loading the video
                }
                
                video.classList.remove('lazy-loading');
                video.classList.add('lazy-loaded');
                observer.unobserve(video);
            }
        });
    }, {
        rootMargin: '100px 0px',
        threshold: 0.01
    });

    document.querySelectorAll('video[data-src]').forEach(video => {
        video.classList.add('lazy-loading');
        videoObserver.observe(video);
    });
}

// Preload critical resources
function preloadCriticalResources() {
    // Preload critical CSS
    const criticalCSS = document.createElement('link');
    criticalCSS.rel = 'preload';
    criticalCSS.as = 'style';
    criticalCSS.href = 'enhanced-style.css';
    document.head.appendChild(criticalCSS);
    
    // Preload hero image
    const heroImage = document.createElement('link');
    heroImage.rel = 'preload';
    heroImage.as = 'image';
    heroImage.href = 'image/lolo1.png';
    document.head.appendChild(heroImage);
}

// Optimize font loading
function optimizeFontLoading() {
    // Add font-display: swap to existing Google Fonts
    const fontLinks = document.querySelectorAll('link[href*="fonts.googleapis.com"]');
    fontLinks.forEach(link => {
        if (!link.href.includes('display=swap')) {
            link.href += '&display=swap';
        }
    });
}

// Image compression and format detection
function optimizeImageLoading() {
    // Check if browser supports WebP
    const supportsWebP = (function() {
        const canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = 1;
        return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    })();
    
    // Replace image sources with optimized versions if available
    if (supportsWebP) {
        document.querySelectorAll('img[data-webp]').forEach(img => {
            img.dataset.src = img.dataset.webp;
        });
    }
}

// Performance monitoring
function initPerformanceMonitoring() {
    // Monitor Core Web Vitals
    if ('web-vital' in window) {
        // This would integrate with web-vitals library if added
        console.log('Performance monitoring initialized');
    }
    
    // Log page load time
    window.addEventListener('load', () => {
        const loadTime = performance.now();
        console.log(`Page loaded in ${Math.round(loadTime)}ms`);
        
        // Track if load time is over 3 seconds (poor performance)
        if (loadTime > 3000) {
            console.warn('Page load time is slow. Consider further optimization.');
        }
    });
}

// Initialize all optimizations when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initLazyLoading();
    initVideoLazyLoading();
    preloadCriticalResources();
    optimizeFontLoading();
    optimizeImageLoading();
    initPerformanceMonitoring();
});

// Fallback for older browsers
if (!window.IntersectionObserver) {
    // Load all images immediately for older browsers
    document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('img[data-src]').forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
        
        document.querySelectorAll('video[data-src]').forEach(video => {
            video.src = video.dataset.src;
            video.removeAttribute('data-src');
        });
    });
}
