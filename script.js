// Function to show the selected section and hide the others
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Display the selected section
    document.getElementById(sectionId).style.display = 'flex';

    // Close the menu after clicking a link in mobile view
    toggleMenu();
}

// Automatically display the home section on page load and hide others
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none'; // Hide all sections
    });
    document.getElementById('home').style.display = 'flex'; // Show the home section
});

// Function to toggle the burger menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

