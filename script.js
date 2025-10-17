// Language Toggle Functionality
let currentLang = localStorage.getItem('language') || 'ar';

function setLanguage(lang) {
    const html = document.documentElement;
    const langToggle = document.getElementById('langToggle');
    const langText = document.querySelector('.lang-text');

    if (lang === 'en') {
        // Switch to English
        html.setAttribute('lang', 'en');
        html.setAttribute('dir', 'ltr');
        langText.textContent = 'AR';

        // Update all text elements
        document.querySelectorAll('[data-en]').forEach(el => {
            if (!el.hasAttribute('data-ar')) {
                el.setAttribute('data-ar', el.textContent);
            }
            el.innerHTML = el.getAttribute('data-en');
        });

        // Update form placeholders
        document.querySelectorAll('[data-placeholder-en]').forEach(el => {
            if (!el.hasAttribute('data-placeholder-ar')) {
                el.setAttribute('data-placeholder-ar', el.placeholder);
            }
            el.placeholder = el.getAttribute('data-placeholder-en');
        });
    } else {
        // Switch to Arabic
        html.setAttribute('lang', 'ar');
        html.setAttribute('dir', 'rtl');
        langText.textContent = 'EN';

        // Restore Arabic text
        document.querySelectorAll('[data-ar]').forEach(el => {
            el.innerHTML = el.getAttribute('data-ar');
        });

        // Restore Arabic placeholders
        document.querySelectorAll('[data-placeholder-ar]').forEach(el => {
            el.placeholder = el.getAttribute('data-placeholder-ar');
        });
    }

    currentLang = lang;
    localStorage.setItem('language', lang);
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
});

// Language toggle button event
document.getElementById('langToggle').addEventListener('click', () => {
    setLanguage(currentLang === 'ar' ? 'en' : 'ar');
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact Form Handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Show success message based on current language
    const successMessage = currentLang === 'ar'
        ? 'شكراً لتواصلك معنا! سنرد عليك في أقرب وقت ممكن.'
        : 'Thank you for contacting us! We will respond to you as soon as possible.';
    alert(successMessage);

    // Reset form
    this.reset();

    // In production, you would send this data to your server
    // Example:
    // fetch('/api/contact', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData)
    // });
});

// Add active class to navigation on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add scroll animation for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards and other elements
document.querySelectorAll('.service-card, .info-item, .stat-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});
