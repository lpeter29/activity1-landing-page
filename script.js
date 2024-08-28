function showSection(sectionId) {
    // Hide all sections with fade-out effect
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('visible');
        setTimeout(() => {
            section.style.display = 'none';
        }, 500);
    });

    const sectionToShow = document.getElementById(sectionId);
    setTimeout(() => {
        sectionToShow.style.display = 'flex';
        sectionToShow.classList.add('visible');
    }, 500); 
}


document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none'; 
        section.classList.remove('visible');
    });
    const homeSection = document.getElementById('home');
    homeSection.style.display = 'flex'; 
    homeSection.classList.add('visible'); 
});


function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');
    navLinks.classList.toggle('active');
    burger.classList.toggle('active');
}

