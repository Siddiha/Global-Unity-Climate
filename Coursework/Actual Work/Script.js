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
document.addEventListener('DOMContentLoaded', function() {
    const videoContainers = document.querySelectorAll('.video-container');
    
    videoContainers.forEach(container => {
        const video = container.querySelector('.service-video');
        const controlButton = container.querySelector('.video-control');
        const pauseIcon = controlButton.querySelector('.pause-icon');
        const playIcon = controlButton.querySelector('.play-icon');
        
        // Update button to reflect video state
        function updateButton() {
            if (video.paused) {
                pauseIcon.style.display = 'none';
                playIcon.style.display = 'block';
                controlButton.setAttribute('aria-label', 'Play video');
            } else {
                pauseIcon.style.display = 'block';
                playIcon.style.display = 'none';
                controlButton.setAttribute('aria-label', 'Pause video');
            }
        }
        
        // Toggle play/pause when clicking the video
        video.addEventListener('click', () => {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
            updateButton();
        });
        
        // Toggle play/pause when clicking the control button
        controlButton.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent triggering the video click event
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
            updateButton();
        });
        
        // Show controls on hover
        container.addEventListener('mouseenter', () => {
            controlButton.style.opacity = '1';
        });
        
        // Hide controls when not hovering (only if video is playing)
        container.addEventListener('mouseleave', () => {
            if (!video.paused) {
                controlButton.style.opacity = '0.7';
            }
        });
        
        // Update button state if video ends
        video.addEventListener('ended', updateButton);
    });
});



// footer section part
// JavaScript for Gucci-style footer interactions
document.addEventListener('DOMContentLoaded', function() {
    // Newsletter subscription toggle
    const subscribeBtn = document.querySelector('.subscribe-btn');
    const newsletterSection = document.querySelector('.footer-newsletter');
    let isExpanded = false;
    
    if(subscribeBtn) {
        subscribeBtn.addEventListener('click', function() {
            if (!isExpanded) {
                // Create and show subscription form
                const form = document.createElement('div');
                form.className = 'newsletter-form';
                form.innerHTML = `
                    <div class="input-wrapper newsletter-input">
                        <input type="email" placeholder="Enter your email address" class="footer-input">
                        <button class="submit-btn">SUBSCRIBE</button>
                    </div>
                    <p class="privacy-notice">By subscribing, you consent to receiving updates from Global Unity. Read our <a href="privacy-policy.html" class="text-link">Privacy Policy</a>.</p>
                `;
                
                newsletterSection.appendChild(form);
                
                // Animate form in
                setTimeout(() => {
                    form.style.opacity = '1';
                    subscribeBtn.innerHTML = '<span class="plus-icon">-</span> Close';
                }, 10);
                
                isExpanded = true;
            } else {
                // Remove subscription form
                const form = document.querySelector('.newsletter-form');
                form.style.opacity = '0';
                
                setTimeout(() => {
                    form.remove();
                    subscribeBtn.innerHTML = '<span class="plus-icon">+</span> Subscribe';
                }, 300);
                
                isExpanded = false;
            }
        });
    }
    
    // Store locator input behavior
    const inputFields = document.querySelectorAll('.footer-input');
    const arrowIcons = document.querySelectorAll('.arrow-icon');
    
    inputFields.forEach((input, index) => {
        if (arrowIcons[index]) {
            arrowIcons[index].addEventListener('click', function() {
                if (input.value.trim() !== '') {
                    // Simulate form submission
                    const form = input.closest('form') || input.parentElement;
                    const targetUrl = form.getAttribute('action') || (input.placeholder.includes('Email') ? 'newsletter.html' : 'stores.html');
                    
                    // You can either submit the form or redirect
                    // form.submit();
                    // Or redirect:
                    // window.location.href = targetUrl;
                    
                    // For demonstration, just log the action
                    console.log(`Submitted: ${input.value} to ${targetUrl}`);
                    
                    // Optional: visual feedback
                    const originalColor = arrowIcons[index].style.color;
                    arrowIcons[index].style.color = '#4CAF50';
                    setTimeout(() => {
                        arrowIcons[index].style.color = originalColor;
                    }, 1000);
                } else {
                    // Highlight the input field if empty
                    input.style.borderColor = 'rgba(255, 0, 0, 0.5)';
                    setTimeout(() => {
                        input.style.borderColor = '';
                    }, 1000);
                }
            });
        }
        
        // Clear error styling on input
        input.addEventListener('input', function() {
            input.style.borderColor = '';
        });
    });
    
    // Optional: Smooth scroll to top when big logo is clicked
    const bigLogo = document.querySelector('.big-logo');
    if (bigLogo) {
        bigLogo.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Add animation class to big logo when visible in viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    function handleLogoAnimation() {
        if (bigLogo && isElementInViewport(bigLogo)) {
            bigLogo.classList.add('logo-animated');
            window.removeEventListener('scroll', handleLogoAnimation);
        }
    }
    
    window.addEventListener('scroll', handleLogoAnimation);
    handleLogoAnimation(); // Check on initial load
});
