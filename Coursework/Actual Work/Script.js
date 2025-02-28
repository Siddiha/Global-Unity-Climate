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


// IMAGE
  // Images array for the slides
        const images = [
            "Images/sneaker1.jpeg",
            "Images/sneaker2.jpeg", 
            "Images/sneaker3.jpeg"
        ];
        
        // Current active slide index (0-based)
        let currentIndex = 1; // Start with the middle index
        
        // Update the slider to show current slides
        function updateSlider() {
            // Calculate indices with circular handling
            let leftIndex = (currentIndex - 1 + images.length) % images.length;
            let centerIndex = currentIndex;
            let rightIndex = (currentIndex + 1) % images.length;
            
            // Update images
            document.querySelector('.left-slide img').src = images[leftIndex];
            document.querySelector('.main-slide-container img').src = images[centerIndex];
            document.querySelector('.right-slide img').src = images[rightIndex];
            
            // Update pagination dots
            const dots = document.querySelectorAll('.dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }
        
        // Previous slide function
        function prevSlide() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateSlider();
        }
        
        // Next slide function
        function nextSlide() {
            currentIndex = (currentIndex + 1) % images.length;
            updateSlider();
        }
        
        // Go to specific slide
        function goToSlide(index) {
            currentIndex = index;
            updateSlider();
        }
        
        // Open product page
        function openFile() {
            window.open("empty.html", "_blank");
        }











        
 // three vidoes
 
 document.querySelectorAll('.service-video').forEach(video => {
    video.addEventListener('click', () => {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});
