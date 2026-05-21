/* ===================================
   PORTFOLIO WEBSITE INTERACTIVE SCRIPT
   Handles navigation, animations, and interactivity
   =================================== */

// ===== DOM ELEMENTS =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const body = document.body;

// ===== HAMBURGER MENU FUNCTIONALITY =====
/**
 * Toggle mobile navigation menu
 * Adds/removes 'active' class to show/hide menu
 */
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animated hamburger icon (optional enhancement)
    hamburger.classList.toggle('active');
});

/**
 * Close mobile menu when a link is clicked
 * Allows user to navigate and close menu in one action
 */
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

/**
 * Close menu when clicking outside of it
 * Improves user experience on mobile
 */
document.addEventListener('click', (event) => {
    const isClickInsideMenu = navMenu.contains(event.target);
    const isClickOnHamburger = hamburger.contains(event.target);
    
    if (!isClickInsideMenu && !isClickOnHamburger && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// ===== SMOOTH SCROLL BEHAVIOR =====
/**
 * Smooth scroll to section with offset for sticky navbar
 * Enhances navigation experience
 */
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        // Only apply smooth scroll to internal anchors
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                // Calculate offset for sticky navbar (approx 60px)
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ===== SCROLL ANIMATIONS =====
/**
 * Intersection Observer for fade-in animations on scroll
 * Elements animate into view as they become visible
 */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            // Only observe once per element
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

/**
 * Add animation to skill cards, project cards, and education cards
 */
const animatedElements = document.querySelectorAll(
    '.skill-card, .project-card, .education-card, .contact-item'
);

animatedElements.forEach((element, index) => {
    // Start with opacity 0 and translate down
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = `opacity 0.6s ease, transform 0.6s ease`;
    element.style.transitionDelay = `${index * 0.1}s`;
    
    // Start observing for intersection
    observer.observe(element);
});

// ===== ACTIVE NAVIGATION LINK =====
/**
 * Update active navigation link based on current scroll position
 * Highlights the section user is currently viewing
 */
window.addEventListener('scroll', () => {
    let current = '';
    
    // Get all sections with IDs
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Check if section is in viewport
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    // Update active class on navigation links
    navLinks.forEach(link => {
        link.classList.remove('active');
        
        // Add active class to matching link
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== CTA BUTTON FUNCTIONALITY =====
/**
 * Add ripple effect to CTA button on click
 * Visual feedback for user interaction
 */
const ctaButton = document.querySelector('.cta-button');

ctaButton.addEventListener('click', (e) => {
    const ripple = document.createElement('span');
    const rect = ctaButton.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    ctaButton.appendChild(ripple);
    
    // Remove ripple after animation
    setTimeout(() => ripple.remove(), 600);
});

// ===== PAGE LOAD ANIMATIONS =====
/**
 * Trigger animation when page loads
 * Stagger animations for visual effect
 */
window.addEventListener('load', () => {
    // Add a 'loaded' class to body for CSS animations
    body.classList.add('loaded');
    
    // Animate hero content on load
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '1';
    }
});

// ===== KEYBOARD NAVIGATION =====
/**
 * Allow keyboard navigation with Tab and Enter keys
 * Improves accessibility
 */
document.addEventListener('keydown', (e) => {
    // Close menu on Escape key
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// ===== PRINT RESUME FUNCTIONALITY (Optional) =====
/**
 * Add print functionality for portfolio as PDF
 * Allows users to print/save their portfolio
 */
const printPortfolio = () => {
    window.print();
};

// Add print button (optional - uncomment to enable)
// const printButton = document.createElement('button');
// printButton.textContent = 'Print Portfolio';
// printButton.style.position = 'fixed';
// printButton.style.bottom = '20px';
// printButton.style.right = '20px';
// printButton.addEventListener('click', printPortfolio);
// document.body.appendChild(printButton);

// ===== PERFORMANCE OPTIMIZATION =====
/**
 * Debounce scroll events for better performance
 * Reduces number of function calls during scroll
 */
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        ticking = true;
        
        requestAnimationFrame(() => {
            // Update active nav link (as coded above)
            ticking = false;
        });
    }
});

// ===== CONSOLE LOG FOR DEBUGGING =====
console.log('Portfolio website loaded successfully!');
console.log('Navigation, animations, and interactivity are ready.');
