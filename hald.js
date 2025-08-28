// Custom cursor
const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.addEventListener('mousedown', () => {
    cursor.classList.add('active');
});

document.addEventListener('mouseup', () => {
    cursor.classList.remove('active');
});

// Make links and buttons affect the cursor
const links = document.querySelectorAll('a, button, .service-item');

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.classList.add('active');
    });
    
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('active');
    });
});

// Navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    mainNav.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        mainNav.classList.remove('active');
    });
});

// Scroll header effect
const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, observerOptions);

// Apply initial animation styles
const animatedElements = document.querySelectorAll('.about-content, .about-image, .services-header, .service-item, .brands-header, .brands-grid, .contact-info, .contact-form');

animatedElements.forEach(element => {
    // Only set transition, do not hide by default
    element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(element);
});

// Add the class when element is in view
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.in-view').forEach(element => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    });
});