var menuToggle = document.querySelector('.menu-toggle');
var navLinks = document.querySelector('.nav-links');
var body = document.querySelector('body');
var navLinkItems = document.querySelectorAll('.nav-links a'); // Select all nav links
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

console.log("JS Loaded");
