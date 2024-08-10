document.addEventListener('DOMContentLoaded', function () {
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, 
                    behavior: 'smooth'
                });
            }
        });
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active'); 
                observer.unobserve(entry.target); 
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.timeline, .container, .skill-card');
    elementsToAnimate.forEach(el => observer.observe(el));

    const toggleSkillsButton = document.getElementById('toggleSkills');
    const skillsContainer = document.getElementById('skillsContainer');

    toggleSkillsButton.addEventListener('click', () => {
        skillsContainer.classList.toggle('skills-hidden');
        skillsContainer.style.maxHeight = skillsContainer.classList.contains('skills-hidden') ? '0' : '1000px';
    });
});






 











