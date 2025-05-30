// JavaScript Enhancements for Future Skills Website

// Typing Effect for Hero Section Header
const typingEffect = () => {
    const textElement = document.querySelector('.hero h1');
    const text = "Empowering Your Future with AI Skills Today";
    let index = 0;

    const type = () => {
        if (index < text.length) {
            textElement.textContent += text.charAt(index); // Use `textContent` to prevent duplication
            index++;
            setTimeout(type, 100);
        }
    };

    // Clear existing text before typing
    textElement.textContent = '';
    type();
};

document.addEventListener('DOMContentLoaded', typingEffect);

// Scroll Animation for Sections
const scrollAnimations = () => {
    const sections = document.querySelectorAll('section');

    const revealSection = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const viewportHeight = window.innerHeight;
            if (sectionTop < viewportHeight - 100) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    };

    window.addEventListener('scroll', revealSection);
    revealSection(); // Run on load
};

document.addEventListener('DOMContentLoaded', scrollAnimations);

// Dynamic Success Counter in About Section
/*const dynamicCounter = () => {
    const counterElement = document.createElement('div');
    counterElement.className = 'counter';
    counterElement.style.textAlign = 'center';
    counterElement.style.fontSize = '2rem';
    counterElement.style.color = '#004aad';

    let count = 0;
    const maxCount = 500;
    const increment = 5;

    const updateCounter = () => {
        if (count < maxCount) {
            count += increment;
            counterElement.innerHTML = `${count}+ Students Trained`;
            setTimeout(updateCounter, 50);
        }
    };

    const aboutSection = document.querySelector('.about');
    aboutSection.appendChild(counterElement);
    updateCounter();
};*/

//document.addEventListener('DOMContentLoaded', dynamicCounter);

// Back to Top Button
const backToTopButton = () => {
    const button = document.createElement('button');
    button.innerHTML = '⬆';
    button.style.position = 'fixed';
    button.style.bottom = '20px';
    button.style.right = '20px';
    button.style.padding = '10px 15px';
    button.style.fontSize = '1.5rem';
    button.style.backgroundColor = '#2ecc71';
    button.style.color = '#fff';
    button.style.border = 'none';
    button.style.borderRadius = '50%';
    button.style.cursor = 'pointer';
    button.style.display = 'none';
    button.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)';

    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.body.appendChild(button);

    const toggleButtonVisibility = () => {
        if (window.scrollY > 300) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    };

    window.addEventListener('scroll', toggleButtonVisibility);
};

document.addEventListener('DOMContentLoaded', backToTopButton);

//Smooth Scrolling Effect
jQuery(document).ready(function() {
  // Apply smooth scrolling only to same-page links
  jQuery("a").on('click', function(event) {
    // Check if the link has a hash value
    if (this.hash !== "") {
      // Verify that the link is on the same page
      if (
        location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') &&
        location.hostname === this.hostname
      ) {
        // Prevent default behavior for same-page links
        event.preventDefault();
        var hash = this.hash;
        jQuery('html, body').animate({
          scrollTop: jQuery(hash).offset().top
        }, 800, function() {
          window.location.hash = hash;
        });
      }
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  // Get the relevant elements
  const reasonRadios = document.querySelectorAll("input[name='MMERGE7']");
  const formatFieldGroup = document.querySelectorAll(".mc-field-group.input-group")[1]; // Select the second input-group for Preferred Course Format

  // Initially hide the "Preferred Course Format" field
  if (formatFieldGroup) {
    formatFieldGroup.style.display = "none";
  }

  // Add event listeners to reason radios
  reasonRadios.forEach((radio) => {
    radio.addEventListener("change", function () {
      // Check if "AI & Your Career Course" is selected
      if (this.value.includes("AI & Your Career")) {
        formatFieldGroup.style.display = "block"; // Show the field
      } else if (formatFieldGroup) {
        formatFieldGroup.style.display = "none"; // Hide the field
      }
    });
  });
});

let lastScrollTop = 0;
const header = document.querySelector('header');

if (!header) {
    console.error("Header element not found!");
}

window.addEventListener('scroll', () => {
    if (window.innerWidth > 768) { // Only applies to larger screens
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            console.log("Scrolling down - hiding header");
            header.style.transform = 'translateY(-100%)';
        } else {
            console.log("Scrolling up - showing header");
            header.style.transform = 'translateY(0)';
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll
    } else {
        header.style.transform = 'translateY(0)';
    }
});
// Set the date we're counting down to (Feb 18, 2025, 6:30 PM CST)
var countDownDate = new Date("Feb 18, 2025 18:30:00 CST").getTime();

// Update the count down every 1 second
var countdownInterval = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();
  
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Display the result in the element with id="countdown-timer"
  document.getElementById("countdown-timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown-timer").innerHTML = "The Success Lab has begun!";
  }
}, 1000);
