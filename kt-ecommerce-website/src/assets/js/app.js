// This file contains the main JavaScript functionality for the website, including handling navigation, page transitions, and any interactive elements.

document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetPage = this.getAttribute('href');
            showPage(targetPage);
        });
    });

    // Function to show the selected page
    function showPage(page) {
        const pages = document.querySelectorAll('.page');
        pages.forEach(p => {
            p.classList.add('hidden');
        });
        document.querySelector(page).classList.remove('hidden');
    }

    // Initial page load
    showPage('#home-page');
});