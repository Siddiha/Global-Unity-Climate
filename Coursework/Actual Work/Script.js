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
        // alert('FOR HER clicked!'); // Replace with your desired action
        // Example: window.location.href = '/for-her'; // Navigate to a new page
    });

    forHim.addEventListener('click', () => {
        // alert('FOR HIM clicked!'); // Replace with your desired action
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
        // alert('FOR HER clicked!'); // Replace with your desired action
        // Example: window.location.href = ''; // Navigate to a new page
    });

    forHim.addEventListener('click', () => {
        // alert('FOR HIM clicked!'); // Replace with your desired action
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
            "Images/shirt3.jpeg",
            "Images/t-shirts1.png", 
            "Images/TSHIRTS1.jpg"
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
            window.open("t-shirt.html", "_blank");
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
// JavaScript for bglobal unity  footer interactions
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




// fixed navbar for all the pages 

  document.addEventListener('DOMContentLoaded', function () {
            // Menu toggle functionality
            const menuButton = document.querySelector('.menu-button-fixed');
            const closeMenuButton = document.querySelector('.close-menu');
            const menuOverlay = document.querySelector('.menu-overlay');

            if (menuButton && closeMenuButton && menuOverlay) {
                menuButton.addEventListener('click', function () {
                    menuOverlay.classList.add('active');
                    document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
                });

                closeMenuButton.addEventListener('click', function () {
                    menuOverlay.classList.remove('active');
                    document.body.style.overflow = ''; // Restore scrolling
                });
            }
        });



// user profile section part 
 // Initialize Pikaday Calendar
const picker = new Pikaday({
  field: document.getElementById('calendar'), // Render the calendar inside this element
  bound: false, // Do not bind to an input field
  container: document.getElementById('calendar'), // Render the calendar inside this container
  onSelect: function(date) {
    const formattedDate = moment(date).format('YYYY-MM-DD');
    selectedDates.push({ date: formattedDate, time: '' });
    updateSelectedDatesList();
  }
});

// Array to store selected dates and times
let selectedDates = [];

// Function to add time to the selected date
function addTime() {
  const timeInput = document.getElementById('timeInput').value.trim();
  if (timeInput && selectedDates.length > 0) {
    selectedDates[selectedDates.length - 1].time = timeInput;
    updateSelectedDatesList();
    document.getElementById('timeInput').value = ''; // Clear the input
  } else {
    alert('Please select a date and enter a valid time.');
  }
}

// Function to update the selected dates and times list
function updateSelectedDatesList() {
  const list = document.getElementById('selectedDatesList');
  list.innerHTML = selectedDates.map((item, index) => `
    <li>
      <strong>Date:</strong> ${item.date} | <strong>Time:</strong> ${item.time || 'Not specified'}
      <button onclick="deleteAvailability(${index})">Delete</button>
    </li>
  `).join('');
}

// Function to delete an availability entry
function deleteAvailability(index) {
  selectedDates.splice(index, 1); // Remove the entry at the specified index
  updateSelectedDatesList(); // Update the list
}

// Functions for image preview
function previewRectangleImage(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('rectanglePreview').src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

function previewCircularImage(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('circularPreview').src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

// Function to toggle between view and edit modes
function toggleEdit() {
  const profileName = document.getElementById("profileName");
  const aboutMe = document.getElementById("aboutMe");
  const editSection = document.getElementById("editSection");

  if (editSection.style.display === "none" || !editSection.style.display) {
    // Switch to edit mode
    editSection.style.display = "block"; // Show the edit section
    document.getElementById("nameInput").value = profileName.innerText; // Populate input with current name
    document.getElementById("bioInput").value = aboutMe.innerText; // Populate textarea with current bio
    populateSkillInputs(); // Populate skill inputs with current values
    populateGoalsAndExperience(); // Populate Goals and Experience inputs
  } else {
    // Switch back to view mode
    editSection.style.display = "none"; // Hide the edit section
  }
}

// Function to save the edited name, bio, and images
function saveChanges() {
  const newName = document.getElementById("nameInput").value.trim();
  const newBio = document.getElementById("bioInput").value.trim();

  if (newName && newBio) {
    document.getElementById("profileName").innerText = newName; // Update the profile name
    document.getElementById("aboutMe").innerText = newBio; // Update the bio
    
    // Update images
    const rectanglePreview = document.getElementById('rectanglePreview').src;
    const circularPreview = document.getElementById('circularPreview').src;
    
    document.getElementById('rectangleImg').src = rectanglePreview;
    document.getElementById('circularImg').src = circularPreview;
    
    toggleEdit(); // Switch back to view mode
  } else {
    alert("Please enter valid name and bio.");
  }
}

// Function to populate skill inputs with current values
function populateSkillInputs() {
  const htmlSkill = document.querySelector(".html");
  const cssSkill = document.querySelector(".css");
  const jsSkill = document.querySelector(".js");
  const phpSkill = document.querySelector(".php");

  document.getElementById("htmlInput").value = parseInt(htmlSkill.textContent);
  document.getElementById("cssInput").value = parseInt(cssSkill.textContent);
  document.getElementById("jsInput").value = parseInt(jsSkill.textContent);
  document.getElementById("phpInput").value = parseInt(phpSkill.textContent);
}

// Function to save skill changes
function saveSkillChanges() {
  const htmlInput = document.getElementById("htmlInput").value;
  const cssInput = document.getElementById("cssInput").value;
  const jsInput = document.getElementById("jsInput").value;
  const phpInput = document.getElementById("phpInput").value;

  if (htmlInput >= 0 && htmlInput <= 100 &&
      cssInput >= 0 && cssInput <= 100 &&
      jsInput >= 0 && jsInput <= 100 &&
      phpInput >= 0 && phpInput <= 100) {
    // Update skill bars
    document.querySelector(".html").style.width = `${htmlInput}%`;
    document.querySelector(".html").textContent = `${htmlInput}%`;
    document.querySelector(".css").style.width = `${cssInput}%`;
    document.querySelector(".css").textContent = `${cssInput}%`;
    document.querySelector(".js").style.width = `${jsInput}%`;
    document.querySelector(".js").textContent = `${jsInput}%`;
    document.querySelector(".php").style.width = `${phpInput}%`;
    document.querySelector(".php").textContent = `${phpInput}%`;
  } else {
    alert("Please enter valid percentages between 0 and 100.");
  }
}

// Function to populate Goals and Experience inputs
function populateGoalsAndExperience() {
  const goalsList = document.getElementById("goalsList");
  const experienceText = document.getElementById("experienceText");
  const experienceList = document.getElementById("experienceList");

  // Populate Goals textarea
  const goalsText = Array.from(goalsList.children).map(li => li.innerText).join('\n');
  document.getElementById("editGoals").value = goalsText;

  // Populate Experience textarea
  document.getElementById("editExperienceText").value = experienceText.innerText;

  // Populate Experience List textarea
  const experienceListText = Array.from(experienceList.children).map(li => li.innerText).join('\n');
  document.getElementById("editExperienceList").value = experienceListText;
}

// Function to save Goals and Experience changes
function saveGoalsAndExperience() {
  const goalsText = document.getElementById("editGoals").value;
  const experienceText = document.getElementById("editExperienceText").value;
  const experienceListText = document.getElementById("editExperienceList").value;

  // Update Goals
  const goalsList = document.getElementById("goalsList");
  goalsList.innerHTML = goalsText.split('\n').filter(item => item.trim()).map(item => `<li>${item}</li>`).join('');

  // Update Experience Text
  document.getElementById("experienceText").innerText = experienceText;

  // Update Experience List
  const experienceList = document.getElementById("experienceList");
  experienceList.innerHTML = experienceListText.split('\n').filter(item => item.trim()).map(item => `<li>${item}</li>`).join('');
}

// Goals Selection Functionality
const imagePaths = [
  
//  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABdwAAAXcCAIAAAC3V9szAAAACXBIWXMAABcRAAAXEQHKJvM/AAAgAElEQVR4nOzdT2yUZ57oe6fK/2KqHG7S6baPWdoSzgpngRcjol7AAqTuhTPNLDLSEHpzWgrO7uZ0yDJMLmcXiKbPZoCWOotLEi/SkjkSLKL4bIx0AqsYCZaU7DOZ9A22Mcam3FfENKF5/afqeavqeavq89FI0/0a229V2S3V18/
  
];

let selectedGoals = []; // Array to store selected goals

// Function to create the image grid
function createImageGrid() {
  const goalsContainer = document.getElementById('goalsContainer');
  goalsContainer.innerHTML = ''; // Clear previous content
  imagePaths.forEach((path, index) => {
    const img = document.createElement('img');
    img.src = path; // Use placeholder image
    img.alt = `Goal ${index + 1}`;
    img.classList.add('goal-image');
    img.addEventListener('click', () => toggleSelection(img));
    goalsContainer.appendChild(img);
  });
}

// Function to toggle image selection
function toggleSelection(img) {
  img.classList.toggle('selected');
  const goal = { src: img.src, alt: img.alt };
  if (img.classList.contains('selected')) {
    selectedGoals.push(goal); // Add to selected goals
  } else {
    selectedGoals = selectedGoals.filter(g => g.src !== img.src); // Remove from selected goals
  }
}

// Function to save goals and hide the grid
function saveGoals() {
  const goalsContainer = document.getElementById('goalsContainer');
  const saveButton = document.getElementById('saveButton');
  const selectedGoalsSection = document.getElementById('selectedGoals');
  const editMode = document.getElementById('editMode');

  // Hide the grid and save button
  goalsContainer.style.display = 'none';
  saveButton.style.display = 'none';

  // Show the selected goals and edit mode
  selectedGoalsSection.style.display = 'block';
  editMode.style.display = 'block';

  // Display selected goals
  updateSelectedGoals();
}

// Function to update the selected goals section
function updateSelectedGoals() {
  const selectedImagesContainer = document.getElementById('selectedImages');
  selectedImagesContainer.innerHTML = ''; // Clear previous selections
  selectedGoals.forEach(goal => {
    const img = document.createElement('img');
    img.src = goal.src;
    img.alt = goal.alt;
    img.addEventListener('click', () => removeGoal(goal));
    selectedImagesContainer.appendChild(img);
  });
}

// Function to remove a goal
function removeGoal(goal) {
  selectedGoals = selectedGoals.filter(g => g.src !== goal.src); // Remove from selected goals
  updateSelectedGoals(); // Update the display
}

// Function to add more goals
function addMoreGoals() {
  const goalsContainer = document.getElementById('goalsContainer');
  const saveButton = document.getElementById('saveButton');
  const selectedGoalsSection = document.getElementById('selectedGoals');
  const editMode = document.getElementById('editMode');

  // Show the grid and save button
  goalsContainer.style.display = 'grid';
  saveButton.style.display = 'block';

  // Hide the selected goals and edit mode
  selectedGoalsSection.style.display = 'none';
  editMode.style.display = 'none';

  // Reset selected goals
  selectedGoals = [];
  updateSelectedGoals();
}

// Initialize the image grid
createImageGrid();

// Function to send form data via WhatsApp
function sendViaWhatsApp() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Format the message
  const formattedMessage = `New Contact Form Submission:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;

  // Encode the message for URL
  const encodedMessage = encodeURIComponent(formattedMessage);

  // Create the WhatsApp link
  const whatsappLink = `https://wa.me/1234567890?text=${encodedMessage}`; // Replace with your WhatsApp number

  // Open WhatsApp in a new tab
  window.open(whatsappLink, "_blank");
}
 
 
 