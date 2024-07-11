document.addEventListener('DOMContentLoaded', () => {
    const timeline = document.querySelector('.timeline');
    const containers = document.querySelectorAll('.container');
    const projectsSection = document.getElementById('projects');

    function handleScroll() {
        const sectionTop = projectsSection.offsetTop;
        const sectionHeight = projectsSection.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight;

        // Check if the scroll position has reached the Projects section
        if (scrollPosition > sectionTop && scrollPosition < sectionTop + sectionHeight) {
            timeline.style.height = '100%';
            containers.forEach(container => container.classList.add('visible'));
        } else {
            timeline.style.height = '0';
            containers.forEach(container => container.classList.remove('visible'));
        }
    }

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Trigger scroll event on page load to check if the user starts at the Projects section
    handleScroll();
});


document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('nav-left');
    const text = textElement.textContent;
    textElement.textContent = '';

    let index = 0;
    const typingSpeed = 50; // Adjust typing speed here

    function type() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, typingSpeed);
        } else {
            textElement.parentElement.querySelector('.typing-container::after').style.display = 'none'; // Hide the cursor
            textElement.parentElement.classList.add('typing-done'); // Add class to remove cursor
        }
    }

    type();
});



