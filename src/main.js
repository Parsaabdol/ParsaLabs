var menuToggle = document.querySelector('.menu-toggle');
var navLinks = document.querySelector('.nav-links');
var body = document.querySelector('body');
var navLinkItems = document.querySelectorAll('.nav-links a'); // Select all nav links


const topShadow = document.querySelector(".top-shadow");
const bottomShadow = document.querySelector(".bottom-shadow");
const hero1 = document.querySelector(".hero1");
const hero2 = document.querySelector(".hero2");
const footer = document.querySelector("footer");

// Function to toggle menu visibility
menuToggle.addEventListener('click', function () {
    navLinks.classList.toggle('active');
    body.classList.toggle('menu-expanded'); // Adds class to shift content down
    // Change burger icon to 'X' when active
    if (navLinks.classList.contains('active')) {
        menuToggle.innerHTML = "✖";
    }
    else {
        menuToggle.innerHTML = "☰";
        body.classList.remove('menu-expanded'); // Reset body class if menu is closed
    }
});
// Ensure the menu collapses when resizing to desktop
window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
        navLinks.classList.remove("active");
        body.classList.remove("menu-expanded"); // Reset margin when resizing
        menuToggle.innerHTML = "☰"; // Reset icon
    }
});
// Close menu when clicking on any nav link
navLinkItems.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        body.classList.remove("menu-expanded"); // Move content back up
        menuToggle.innerHTML = "☰"; // Reset to burger icon
    });
});


// Ensure elements exist before proceeding
if (!topShadow || !bottomShadow || !hero1 || !hero2 || !footer) {
    console.error("One or more required elements are missing from the HTML.");
} else {
    window.addEventListener("scroll", () => {
        let scrollY = window.scrollY;
        let windowHeight = window.innerHeight;

        let hero2Top = hero2.offsetTop;
        let footerTop = footer.offsetTop;


        // Fade in the Top Shadow when scrolling past 40% of hero1
        if (scrollY > hero2Top - windowHeight * 0.6) {
            topShadow.style.opacity = "1";
        } else {
            topShadow.style.opacity = "0";
        }

        // Fade out Bottom Shadow as we reach the footer
        if (scrollY > footerTop - windowHeight * 0.8) {
            bottomShadow.style.opacity = "0";
        } else {
            bottomShadow.style.opacity = "1";
        }

        // Ensure the Top Shadow is visible at the footer
        if (scrollY > footerTop - windowHeight / 2) {
            topShadow.style.opacity = "1";
        }
    });
}
/*
if (!hero1 || !hero2) {
    console.error("Hero sections are missing from the HTML.");
} else {
    window.addEventListener("scroll", () => {
        let scrollY = window.scrollY;
        let windowHeight = window.innerHeight;

        let hero1Height = hero1.offsetHeight;
        let hero2Top = hero2.offsetTop;
        let hero2Height = hero2.offsetHeight;

        //  Hero1 Blur Logic: Starts blurring at 50% visibility, fully blurred at 20%
        let hero1Remaining = hero1Height - scrollY;
        let hero1StartBlur = hero1Height * 0.5; // 50%
        let hero1FullBlur = hero1Height * 0.4; // 20%

        if (hero1Remaining < hero1StartBlur) {
            let blurAmount = ((hero1StartBlur - hero1Remaining) / (hero1StartBlur - hero1FullBlur)) * 2;
            blurAmount = Math.min(Math.max(blurAmount, 0), 2); // Clamp between 0 and 2px
            hero1.style.filter = `blur(${blurAmount.toFixed(4)}px)`;
        } else {
            hero1.style.filter = "blur(0px)";
        }

        //  Hero2 Blur Logic: Starts at 1px, clears gradually from 20% visibility to 50%
        let hero2Visibility = scrollY + windowHeight - hero2Top;
        let hero2StartClear = hero2Height * 0.4; // 20%
        let hero2FullClear = hero2Height * 0.5; // 50%

        if (hero2Visibility > hero2StartClear) {
            let blurAmount = 1 - ((hero2Visibility - hero2StartClear) / (hero2FullClear - hero2StartClear));
            blurAmount = Math.max(blurAmount, 0); // Clamp between 0 and 1px
            hero2.style.filter = `blur(${blurAmount.toFixed(4)}px)`;
        } else {
            hero2.style.filter = "blur(0px)";
        }
    });
} */