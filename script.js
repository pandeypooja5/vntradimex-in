// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close menu when a nav link is clicked
if (navMenu) {
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (hamburger && navMenu) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// Enquiry Form Handler
const enquiryForm = document.getElementById('enquiry-form');
if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(enquiryForm);
        const data = Object.fromEntries(formData);

        // Validate form
        if (!data.name || !data.email || !data.phone || !data.product || !data.message) {
            showFormMessage('Please fill in all required fields', 'error');
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showFormMessage('Please enter a valid email address', 'error');
            return;
        }

        // Submit form data
        submitEnquiry(data);
    });
}

function submitEnquiry(data) {
    // Initialize EmailJS with your public key
    emailjs.init('Kxne2xHI2Eav_THU2');

    // Simple template parameters
    const templateParams = {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        company: data.company || 'Not specified',
        country: data.country,
        product: data.product,
        quantity: data.quantity || 'Not specified',
        message: data.message,
        to_email: 'tradewithtrust8741@gmail.com'
    };

    // Show loading message
    showFormMessage('⏳ Sending your enquiry...', 'success');

    emailjs.send('service_md1tbn8', 'template_bfokbyo', templateParams)
        .then((response) => {
            showFormMessage('✅ Your enquiry has been sent successfully! We will contact you soon.', 'success');
            enquiryForm.reset();
            console.log('Email sent successfully:', response);
        })
        .catch((error) => {
            showFormMessage('❌ Failed to send enquiry. Please try again or contact us directly at +91 9160660055.', 'error');
            console.error('Email send failed - Error details:', error);
            console.error('Status:', error.status);
        });
}

function showFormMessage(message, type) {
    const messageDiv = document.getElementById('form-message');
    if (messageDiv) {
        messageDiv.textContent = message;
        messageDiv.className = `form-message ${type}`;

        // Auto-hide error messages after 5 seconds
        if (type === 'error') {
            setTimeout(() => {
                messageDiv.className = 'form-message';
            }, 5000);
        }
    }
}

// Pre-fill product field if passed as URL parameter
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const product = urlParams.get('product');

    if (product) {
        const productSelect = document.getElementById('product');
        if (productSelect) {
            productSelect.value = decodeURIComponent(product);
        }
    }

    // Smooth scroll for internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Set active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage ||
            (currentPage === '' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// Home banner slider (tabs + auto-advance)
const bannerSlides = document.querySelectorAll('.banner-slide');
const bannerTabs = document.querySelectorAll('.banner-tabs .pagi-btn');

if (bannerSlides.length > 0) {
    let currentSlide = 0;
    let sliderTimer;

    function showSlide(index) {
        currentSlide = index;
        bannerSlides.forEach((slide, i) => slide.classList.toggle('active', i === index));
        bannerTabs.forEach((tab, i) => tab.classList.toggle('active', i === index));
    }

    function nextSlide() {
        showSlide((currentSlide + 1) % bannerSlides.length);
    }

    function startSliderTimer() {
        clearInterval(sliderTimer);
        sliderTimer = setInterval(nextSlide, 5000);
    }

    bannerTabs.forEach((tab, i) => {
        tab.addEventListener('click', () => {
            showSlide(i);
            startSliderTimer();
        });
    });

    // deep links from other pages: index.html#import etc.
    const slideHashes = { '#home': 0, '#import': 1, '#export': 2, '#sourcing': 3, '#quality': 4 };
    const requestedSlide = slideHashes[window.location.hash.toLowerCase()];
    if (requestedSlide !== undefined) {
        showSlide(requestedSlide);
    }

    startSliderTimer();
}

// Product scroll animation trigger
if ('IntersectionObserver' in window) {
    document.documentElement.classList.add('js');
    const productElements = document.querySelectorAll('.product-detail');
    const productObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                productObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    productElements.forEach(product => productObserver.observe(product));
}

// Lazy loading for images (optional, for performance)
if ('IntersectionObserver' in window) {
    const imageElements = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    imageElements.forEach(img => imageObserver.observe(img));
}

// Analytics tracking (optional - can be replaced with Google Analytics)
function trackPageView(pageName) {
    console.log(`Page viewed: ${pageName}`);
    // Add your analytics code here
}

// Search functionality
const products = [
    { name: 'Neem Oil', url: 'products.html' },
    { name: 'Coconut Shell Bowl', url: 'products.html' },
    { name: 'Calcium Fluoride', url: 'products.html' },
    { name: 'Organic Fabric', url: 'products.html' },
    { name: 'NPK Fertilizer', url: 'products.html' }
];

const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();

        if (query.length === 0) {
            searchResults.classList.remove('active');
            return;
        }

        const results = products.filter(product =>
            product.name.toLowerCase().includes(query)
        );

        if (results.length === 0) {
            searchResults.innerHTML = '<div class="search-result-item">No products found</div>';
        } else {
            searchResults.innerHTML = results
                .map(product =>
                    `<a href="${product.url}" class="search-result-item">${product.name}</a>`
                )
                .join('');
        }

        searchResults.classList.add('active');
    });

    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.classList.remove('active');
        }
    });
}

// Track page view on load
window.addEventListener('load', () => {
    const pageName = document.title;
    trackPageView(pageName);
});
