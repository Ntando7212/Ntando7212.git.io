// Get references to the menu icon and nav links
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

// Toggle the menu visibility when the menu icon is clicked
menuIcon.addEventListener('click', function() {
    navLinks.classList.toggle('nav-active');
});

// Close the menu when a menu item is clicked
const menuItems = document.querySelectorAll('#nav-links li a');
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        navLinks.classList.remove('nav-active');
    });
});
