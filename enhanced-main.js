/* ===== ICE GLOBAL RESOURCES - ENHANCED JAVASCRIPT ===== */
/* Interactive Features, Animations, and Mobile Responsiveness */

// ===== LOADING ANIMATION =====
document.addEventListener('DOMContentLoaded', function() {
    // Create loading overlay
    const loadingOverlay = document.createElement('div');
    loadingOverlay.className = 'loading-overlay';
    loadingOverlay.innerHTML = '<div class="loader"></div>';
    document.body.appendChild(loadingOverlay);
    
    // Hide loading after page loads
    window.addEventListener('load', function() {
        setTimeout(() => {
            loadingOverlay.classList.add('hidden');
            setTimeout(() => {
                loadingOverlay.remove();
            }, 500);
        }, 1000);
    });
});

// ===== MOBILE NAVIGATION =====
class MobileNavigation {
    constructor() {
        this.init();
    }
    
    init() {
        this.createMobileToggle();
        this.bindEvents();
    }
    
    createMobileToggle() {
        const nav = document.querySelector('nav');
        const navLinks = document.querySelector('.nav-links');
        
        if (!nav || !navLinks) return;
        
        // Create mobile toggle button
        const mobileToggle = document.createElement('div');
        mobileToggle.className = 'mobile-menu-toggle';
        mobileToggle.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;
        
        // Replace old menu icons
        const oldMenuIcon = document.querySelector('.fa-bars');
        const oldCloseIcon = document.querySelector('.fa-times');
        
        if (oldMenuIcon) {
            oldMenuIcon.replaceWith(mobileToggle);
        } else {
            nav.appendChild(mobileToggle);
        }
        
        if (oldCloseIcon) {
            oldCloseIcon.remove();
        }
    }
    
    bindEvents() {
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        
        if (!mobileToggle || !navLinks) return;
        
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close menu when clicking on links
        const navLinkItems = document.querySelectorAll('.nav-links a');
        navLinkItems.forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target)) {
                mobileToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }
}

// ===== SCROLL EFFECTS =====
class ScrollEffects {
    constructor() {
        this.init();
    }
    
    init() {
        this.handleNavbarScroll();
        this.handleScrollAnimations();
        this.handleActiveNavLinks();
    }
    
    handleNavbarScroll() {
        const nav = document.querySelector('nav');
        if (!nav) return;
        
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            // Add/remove scrolled class
            if (currentScrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
            
            // Hide/show navbar on scroll
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                nav.style.transform = 'translateY(-100%)';
            } else {
                nav.style.transform = 'translateY(0)';
            }
            
            lastScrollY = currentScrollY;
        });
    }
    
    handleScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);
        
        // Add animation classes to elements
        const animateElements = document.querySelectorAll('.Business-col, .vision p, section h1, section h2');
        animateElements.forEach((el, index) => {
            el.classList.add('fade-in');
            el.style.transitionDelay = `${index * 0.1}s`;
            observer.observe(el);
        });
    }
    
    handleActiveNavLinks() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
        
        if (sections.length === 0 || navLinks.length === 0) return;
        
        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (window.scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }
}

// ===== LIGHTBOX GALLERY =====
class LightboxGallery {
    constructor() {
        this.init();
    }
    
    init() {
        this.createLightbox();
        this.bindEvents();
    }
    
    createLightbox() {
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <span class="lightbox-close">&times;</span>
            <img src="" alt="Lightbox Image">
        `;
        document.body.appendChild(lightbox);
    }
    
    bindEvents() {
        const lightbox = document.querySelector('.lightbox');
        const lightboxImg = lightbox.querySelector('img');
        const lightboxClose = lightbox.querySelector('.lightbox-close');
        
        // Make images clickable for lightbox
        const images = document.querySelectorAll('img[src*="image/"], img[src*="carpics/"], img[src*="housepic/"]');
        images.forEach(img => {
            img.style.cursor = 'pointer';
            img.addEventListener('click', () => {
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt || 'Image';
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });
        
        // Close lightbox
        const closeLightbox = () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        };
        
        lightboxClose.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
        
        // Close with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                closeLightbox();
            }
        });
    }
}

// ===== ENHANCED SEARCH AND FILTER =====
class SearchFilter {
    constructor() {
        this.init();
    }
    
    init() {
        this.createSearchInterface();
        this.bindSearchEvents();
    }
    
    createSearchInterface() {
        // Enhanced search box for cars page
        const carsContainer = document.getElementById('cars');
        if (carsContainer) {
            const searchContainer = document.createElement('div');
            searchContainer.className = 'search-filter-container';
            searchContainer.innerHTML = `
                <div class="search-box-enhanced">
                    <input type="text" id="search-input" placeholder="Search cars, brands, models...">
                    <button id="search-btn"><i class="fa fa-search"></i></button>
                </div>
                <div class="filter-buttons">
                    <button class="filter-btn active" data-filter="all">All</button>
                    <button class="filter-btn" data-filter="bmw">BMW</button>
                    <button class="filter-btn" data-filter="mercedes">Mercedes</button>
                    <button class="filter-btn" data-filter="audi">Audi</button>
                    <button class="filter-btn" data-filter="toyota">Toyota</button>
                    <button class="filter-btn" data-filter="lexus">Lexus</button>
                </div>
            `;
            
            carsContainer.parentNode.insertBefore(searchContainer, carsContainer);
        }
    }
    
    bindSearchEvents() {
        const searchInput = document.getElementById('search-input');
        const filterBtns = document.querySelectorAll('.filter-btn');
        
        if (searchInput) {
            searchInput.addEventListener('input', this.handleSearch.bind(this));
        }
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', this.handleFilter.bind(this));
        });
    }
    
    handleSearch(e) {
        const searchTerm = e.target.value.toLowerCase();
        const carCards = document.querySelectorAll('.car-card, .Business-col');
        
        carCards.forEach(card => {
            const text = card.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                card.style.display = 'block';
                card.classList.add('fade-in');
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    handleFilter(e) {
        const filter = e.target.dataset.filter;
        const filterBtns = document.querySelectorAll('.filter-btn');
        const carCards = document.querySelectorAll('.car-card, .Business-col');
        
        // Update active button
        filterBtns.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        
        // Filter cards
        carCards.forEach(card => {
            const cardText = card.textContent.toLowerCase();
            
            if (filter === 'all' || cardText.includes(filter)) {
                card.style.display = 'block';
                card.classList.add('fade-in');
            } else {
                card.style.display = 'none';
            }
        });
    }
}

// ===== SMOOTH SCROLLING =====
class SmoothScrolling {
    constructor() {
        this.init();
    }
    
    init() {
        // Smooth scroll for anchor links
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        
        anchorLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80; // Account for fixed nav
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// ===== ENHANCED CONTACT FORMS =====
class EnhancedForms {
    constructor() {
        this.init();
    }
    
    init() {
        this.enhanceContactForms();
    }
    
    enhanceContactForms() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            // Add enhanced styling classes
            form.classList.add('enhanced-form');
            
            const inputs = form.querySelectorAll('input, textarea, select');
            inputs.forEach(input => {
                input.classList.add('enhanced-input');
                
                // Add floating labels effect
                this.addFloatingLabel(input);
                
                // Add validation
                this.addValidation(input);
            });
            
            // Enhanced submit handling
            form.addEventListener('submit', this.handleFormSubmit.bind(this));
        });
    }
    
    addFloatingLabel(input) {
        const wrapper = document.createElement('div');
        wrapper.className = 'input-wrapper';
        
        input.parentNode.insertBefore(wrapper, input);
        wrapper.appendChild(input);
        
        if (input.placeholder) {
            const label = document.createElement('label');
            label.textContent = input.placeholder;
            label.className = 'floating-label';
            wrapper.appendChild(label);
            input.placeholder = '';
        }
        
        // Handle focus/blur events
        input.addEventListener('focus', () => {
            wrapper.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            if (!input.value) {
                wrapper.classList.remove('focused');
            }
        });
        
        // Check if input has value on load
        if (input.value) {
            wrapper.classList.add('focused');
        }
    }
    
    addValidation(input) {
        input.addEventListener('blur', () => {
            this.validateInput(input);
        });
        
        input.addEventListener('input', () => {
            if (input.classList.contains('error')) {
                this.validateInput(input);
            }
        });
    }
    
    validateInput(input) {
        const wrapper = input.closest('.input-wrapper');
        let isValid = true;
        
        // Remove previous error
        wrapper.classList.remove('error');
        const existingError = wrapper.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        // Validate based on input type
        if (input.required && !input.value.trim()) {
            isValid = false;
            this.showError(wrapper, 'This field is required');
        } else if (input.type === 'email' && input.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                isValid = false;
                this.showError(wrapper, 'Please enter a valid email address');
            }
        } else if (input.type === 'tel' && input.value) {
            const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
            if (!phoneRegex.test(input.value.replace(/\s/g, ''))) {
                isValid = false;
                this.showError(wrapper, 'Please enter a valid phone number');
            }
        }
        
        return isValid;
    }
    
    showError(wrapper, message) {
        wrapper.classList.add('error');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        wrapper.appendChild(errorDiv);
    }
    
    handleFormSubmit(e) {
        e.preventDefault();
        
        const form = e.target;
        const inputs = form.querySelectorAll('input, textarea, select');
        let isFormValid = true;
        
        inputs.forEach(input => {
            if (!this.validateInput(input)) {
                isFormValid = false;
            }
        });
        
        if (isFormValid) {
            // Show success message
            this.showSuccessMessage(form);
            
            // Here you would typically send the form data
            // For now, we'll just reset the form after a delay
            setTimeout(() => {
                form.reset();
                form.querySelectorAll('.input-wrapper').forEach(wrapper => {
                    wrapper.classList.remove('focused');
                });
            }, 2000);
        }
    }
    
    showSuccessMessage(form) {
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.textContent = 'Thank you! Your message has been sent successfully.';
        
        form.appendChild(successDiv);
        
        setTimeout(() => {
            successDiv.remove();
        }, 3000);
    }
}

// ===== PERFORMANCE OPTIMIZATION =====
class PerformanceOptimizer {
    constructor() {
        this.init();
    }
    
    init() {
        this.lazyLoadImages();
        this.optimizeAnimations();
    }
    
    lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        
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
        
        images.forEach(img => imageObserver.observe(img));
    }
    
    optimizeAnimations() {
        // Reduce animations for users who prefer reduced motion
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.documentElement.style.setProperty('--transition-fast', '0s');
            document.documentElement.style.setProperty('--transition-smooth', '0s');
            document.documentElement.style.setProperty('--transition-slow', '0s');
        }
    }
}

// ===== INITIALIZE ALL FEATURES =====
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all enhanced features
    new MobileNavigation();
    new ScrollEffects();
    new LightboxGallery();
    new SearchFilter();
    new SmoothScrolling();
    new EnhancedForms();
    new PerformanceOptimizer();
    
    // Legacy support for existing functions
    window.showMenu = function() {
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        if (mobileToggle && navLinks) {
            mobileToggle.classList.add('active');
            navLinks.classList.add('active');
        }
    };
    
    window.hideMenu = function() {
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        if (mobileToggle && navLinks) {
            mobileToggle.classList.remove('active');
            navLinks.classList.remove('active');
        }
    };
});

// ===== ADDITIONAL UTILITY FUNCTIONS =====

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Add CSS for enhanced form styles
const enhancedFormStyles = `
<style>
.search-filter-container {
    background: white;
    padding: var(--spacing-lg);
    border-radius: var(--radius-lg);
    margin-bottom: var(--spacing-xl);
    box-shadow: var(--shadow-md);
}

.search-box-enhanced {
    display: flex;
    margin-bottom: var(--spacing-md);
    border: 2px solid var(--light-gray);
    border-radius: var(--radius-md);
    overflow: hidden;
    transition: var(--transition-smooth);
}

.search-box-enhanced:focus-within {
    border-color: var(--primary-gold);
    box-shadow: var(--shadow-gold);
}

.search-box-enhanced input {
    flex: 1;
    padding: var(--spacing-sm) var(--spacing-md);
    border: none;
    outline: none;
    font-size: 1rem;
}

.search-box-enhanced button {
    background: var(--gold-gradient);
    border: none;
    padding: var(--spacing-sm) var(--spacing-md);
    color: white;
    cursor: pointer;
    transition: var(--transition-smooth);
}

.filter-buttons {
    display: flex;
    gap: var(--spacing-xs);
    flex-wrap: wrap;
}

.filter-btn {
    padding: var(--spacing-xs) var(--spacing-md);
    border: 2px solid var(--light-gray);
    background: white;
    border-radius: var(--radius-sm);
    cursor: pointer;
    transition: var(--transition-smooth);
    font-size: 0.9rem;
}

.filter-btn:hover,
.filter-btn.active {
    background: var(--gold-gradient);
    color: white;
    border-color: var(--primary-gold);
}

.enhanced-form {
    max-width: 600px;
    margin: 0 auto;
}

.input-wrapper {
    position: relative;
    margin-bottom: var(--spacing-md);
}

.enhanced-input {
    width: 100%;
    padding: var(--spacing-md) var(--spacing-sm);
    border: 2px solid var(--light-gray);
    border-radius: var(--radius-md);
    font-size: 1rem;
    transition: var(--transition-smooth);
    background: white;
}

.enhanced-input:focus {
    outline: none;
    border-color: var(--primary-gold);
    box-shadow: var(--shadow-gold);
}

.floating-label {
    position: absolute;
    left: var(--spacing-sm);
    top: 50%;
    transform: translateY(-50%);
    background: white;
    padding: 0 var(--spacing-xs);
    color: var(--soft-gray);
    transition: var(--transition-smooth);
    pointer-events: none;
}

.input-wrapper.focused .floating-label {
    top: 0;
    font-size: 0.8rem;
    color: var(--primary-gold);
}

.input-wrapper.error .enhanced-input {
    border-color: #dc3545;
}

.error-message {
    color: #dc3545;
    font-size: 0.8rem;
    margin-top: var(--spacing-xs);
}

.success-message {
    background: #d4edda;
    color: #155724;
    padding: var(--spacing-sm);
    border-radius: var(--radius-md);
    margin-top: var(--spacing-md);
    text-align: center;
}

@media (max-width: 768px) {
    .filter-buttons {
        justify-content: center;
    }
    
    .filter-btn {
        flex: 1;
        min-width: 80px;
    }
}
</style>
`;

// Inject the enhanced form styles
document.head.insertAdjacentHTML('beforeend', enhancedFormStyles);
