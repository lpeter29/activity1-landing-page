function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        if (section.classList.contains('visible')) {
            section.classList.remove('visible');
            setTimeout(() => {
                section.style.display = 'none';
            }, 500); 
        }
    });

    setTimeout(() => {
        const sectionToShow = document.getElementById(sectionId);
        sectionToShow.style.display = 'flex';
        setTimeout(() => {
            sectionToShow.classList.add('visible');
        }, 10); 
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

