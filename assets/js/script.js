// Select all sections to observe for the fade-in animation
const sections = document.querySelectorAll('.section');

// Intersection Observer setup
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            entry.target.classList.remove('hidden');
        } else {
            entry.target.classList.remove('appear');
            entry.target.classList.add('hidden');
        }
    });
}, {
    threshold: 0.2 // Trigger when 20% of the section is visible
});

// Attach observer to each section
sections.forEach(section => {
    observer.observe(section);
});



// Select the "Home" link
const homeLink = document.getElementById('homeLink');

// Add click event listener
homeLink.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    window.scrollTo({
        top: 0, // Scroll to the top of the page
        behavior: 'smooth' // Smooth scrolling effect
    });
});


function toggleDetails(button) {
    const lawDetails = button.closest('.law-item').querySelector('.law-details');
    if (lawDetails.style.display === 'block') {
        lawDetails.style.display = 'none';
    } else {
        lawDetails.style.display = 'block';
    }
}

function toggleCaseDetails(button) {
    const caseDetails = button.closest('.case-item').querySelector('.case-details');
    if (caseDetails.style.display === 'block') {
        caseDetails.style.display = 'none';
    } else {
        caseDetails.style.display = 'block';
    }
}

