document.addEventListener("DOMContentLoaded", function () {
    // Common: Ensure all navigation links are highlighted properly
    let currentLocation = window.location.pathname;
    let navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentLocation) {
            link.classList.add("active"); // Highlight active page in navigation
        }
    });

    // Handle Video Section (Common for both pages)
    let video = document.querySelector(".video-section video");
    if (video) {
        video.play(); // Ensures video auto-plays if supported
    }

    // About Us Page Specific Scripts
    if (document.body.classList.contains("about-page")) {
        console.log("About Us page loaded");

        // Smooth scrolling for "Our Work" and other sections
        let smoothScrollLinks = document.querySelectorAll("a[href^='#']");
        smoothScrollLinks.forEach(link => {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                let targetId = this.getAttribute("href").substring(1);
                let targetElement = document.getElementById(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 50, // Adjust for header height
                        behavior: "smooth"
                    });
                }
            });
        });

        // Fade-in animation for sections on scroll
        let animatedSections = document.querySelectorAll(".fade-in");

        function revealOnScroll() {
            animatedSections.forEach(section => {
                let sectionTop = section.getBoundingClientRect().top;
                let windowHeight = window.innerHeight;
                if (sectionTop < windowHeight - 100) {
                    section.classList.add("visible");
                }
            });
        }

        window.addEventListener("scroll", revealOnScroll);
        revealOnScroll(); // Run once on load
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // General Inquiry Form Submission
    document.getElementById("inquiry-form").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Thank you! Your inquiry has been submitted.");
        this.reset();
    });

    // Collaboration Form Submission
    document.getElementById("collaboration-form").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Thanks for your interest! We'll contact you soon.");
        this.reset();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // CUSTOMER FEEDBACK SLIDER
    const reviews = document.querySelectorAll(".review");
    let currentIndex = 0;

    function showReview(index) {
        reviews.forEach((review, i) => {
            review.style.display = i === index ? "block" : "none"; // Show only one at a time
        });
    }

    function slideReviews() {
        currentIndex = (currentIndex + 1) % reviews.length;
        showReview(currentIndex);
    }

    // Show first review initially
    showReview(currentIndex);
    setInterval(slideReviews, 4000); // Auto-slide every 4 seconds

    // FAQ TOGGLE FUNCTIONALITY
    document.querySelectorAll(".faq-item").forEach(item => {
        item.addEventListener("click", () => {
            item.classList.toggle("active");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    console.log("Page loaded successfully!");
});
