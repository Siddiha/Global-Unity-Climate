document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.nav-wrapper');
    const menuButton = document.querySelector('.menu-button');
    const menuOverlay = document.querySelector('.menu-overlay');
    const closeMenu = document.querySelector('.close-menu');
    
    // Scroll Handler
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Menu Handlers
    menuButton.addEventListener('click', () => {
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeMenu.addEventListener('click', () => {
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menuOverlay.classList.contains('active')) {
            menuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});


// Scroll effects for brand name and navigation
window.addEventListener('scroll', function() {
    const heroHeight = document.querySelector('.hero').offsetHeight;
    const stickyBrand = document.querySelector('.sticky-brand');
    const navWrapper = document.querySelector('.nav-wrapper');
    
    if (window.scrollY > 50) {
        // Show the sticky brand once we start scrolling
        stickyBrand.style.opacity = Math.min(window.scrollY / 200, 1);
        
        // Add scrolled class to nav when past hero
        if (window.scrollY > heroHeight - 100) {
            navWrapper.classList.add('scrolled');
            stickyBrand.style.color = 'black';
        } else {
            navWrapper.classList.remove('scrolled');
            stickyBrand.style.color = 'white';
        }
    } else {
        // Hide sticky brand at top
        stickyBrand.style.opacity = 0;
        navWrapper.classList.remove('scrolled');
    }
});

// Run once on page load to set initial states
document.addEventListener('DOMContentLoaded', function() {
    const navWrapper = document.querySelector('.nav-wrapper');
    navWrapper.classList.remove('scrolled');
});


document.addEventListener('DOMContentLoaded', () => {
    const forHer = document.getElementById('for-her');
    const forHim = document.getElementById('for-him');

    // Click Handlers for FOR HER and FOR HIM
    forHer.addEventListener('click', () => {
        alert('FOR HER clicked!'); // Replace with your desired action
        // Example: window.location.href = '/for-her'; // Navigate to a new page
    });

    forHim.addEventListener('click', () => {
        alert('FOR HIM clicked!'); // Replace with your desired action
        // Example: window.location.href = '/for-him'; // Navigate to a new page
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const videoText = document.querySelector('.video-text');
    const forHer = document.getElementById('for-her');
    const forHim = document.getElementById('for-him');

    // Scroll Handler for Text Animation
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        // Add/remove scroll effect class based on scroll position
        if (scrollY > 50) {
            videoText.classList.add('scroll-effect');
        } else {
            videoText.classList.remove('scroll-effect');
        }
    });

    // Click Handlers for FOR HER and FOR HIM
    forHer.addEventListener('click', () => {
        alert('FOR HER clicked!'); // Replace with your desired action
        // Example: window.location.href = '/for-her'; // Navigate to a new page
    });

    forHim.addEventListener('click', () => {
        alert('FOR HIM clicked!'); // Replace with your desired action
        // Example: window.location.href = '/for-him'; // Navigate to a new page
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.nav-wrapper');
    const menuButton = document.querySelector('.menu-button');
    const menuOverlay = document.querySelector('.menu-overlay');
    const closeMenu = document.querySelector('.close-menu');
    
    // Scroll Handler
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Menu Handlers
    menuButton.addEventListener('click', () => {
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeMenu.addEventListener('click', () => {
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menuOverlay.classList.contains('active')) {
            menuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

// Scroll effects for brand name and navigation
window.addEventListener('scroll', function() {
    const heroHeight = document.querySelector('.hero').offsetHeight;
    const stickyBrand = document.querySelector('.sticky-brand');
    const navWrapper = document.querySelector('.nav-wrapper');
    
    if (window.scrollY > 50) {
        // Show the sticky brand once we start scrolling
        stickyBrand.style.opacity = Math.min(window.scrollY / 200, 1);
        
        // Add scrolled class to nav when past hero
        if (window.scrollY > heroHeight - 100) {
            navWrapper.classList.add('scrolled');
            stickyBrand.style.color = 'black';
        } else {
            navWrapper.classList.remove('scrolled');
            stickyBrand.style.color = 'white';
        }
    } else {
        // Hide sticky brand at top
        stickyBrand.style.opacity = 0;
        navWrapper.classList.remove('scrolled');
    }
});

// Run once on page load to set initial states
document.addEventListener('DOMContentLoaded', function() {
    const navWrapper = document.querySelector('.nav-wrapper');
    navWrapper.classList.remove('scrolled');
});

document.addEventListener('DOMContentLoaded', () => {
    const forHer = document.getElementById('for-her');
    const forHim = document.getElementById('for-him');

    // Click Handlers for FOR HER and FOR HIM
    forHer.addEventListener('click', () => {
        alert('FOR HER clicked!'); // Replace with your desired action
        // Example: window.location.href = '/for-her'; // Navigate to a new page
    });

    forHim.addEventListener('click', () => {
        alert('FOR HIM clicked!'); // Replace with your desired action
        // Example: window.location.href = '/for-him'; // Navigate to a new page
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const videoText = document.querySelector('.video-text');
    const forHer = document.getElementById('for-her');
    const forHim = document.getElementById('for-him');

    // Scroll Handler for Text Animation
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        // Add/remove scroll effect class based on scroll position
        if (scrollY > 50) {
            videoText.classList.add('scroll-effect');
        } else {
            videoText.classList.remove('scroll-effect');
        }
    });

    // Click Handlers for FOR HER and FOR HIM
    forHer.addEventListener('click', () => {
        alert('FOR HER clicked!'); // Replace with your desired action
        // Example: window.location.href = '/for-her'; // Navigate to a new page
    });

    forHim.addEventListener('click', () => {
        alert('FOR HIM clicked!'); // Replace with your desired action
        // Example: window.location.href = '/for-him'; // Navigate to a new page
    });
});

// for the content details of all four students 

function navigateToProduct(category) {
    // Add your navigation logic here
    console.log(`Navigating to ${category}`);
    // Example navigation:
    window.location.href = "ST2.html";
}

// Optional: Add smooth fade-in animation on page load
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.product-item');
    items.forEach((item, index) => {
        item.style.opacity = '0';
        setTimeout(() => {
            item.style.transition = 'opacity 0.5s ease';
            item.style.opacity = '1';
        }, index * 100);
    });
});



// image slider
let index = 0;

function showSlide() {
    const slides = document.querySelector('.slides');
    slides.style.transform = `translateX(${-index * 320}px)`;
}

function prevSlide() {
    index = index > 0 ? index - 1 : 2;
    showSlide();
}

function nextSlide() {
    index = index < 2 ? index + 1 : 0;
    showSlide();
}

function openFile() {
    window.open("empty.html", "_blank");
}
