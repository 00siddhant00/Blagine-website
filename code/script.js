document.addEventListener('DOMContentLoaded', () => {
    // Typewriter and intro animation
    const text = document.querySelector('.typewriter');
    const questionMark = document.querySelector('.question-mark');
    const mainContent = document.getElementById('main-content');
    
    setTimeout(() => {
        text.style.opacity = '1';
        setTimeout(() => {
            questionMark.style.opacity = '1';
            questionMark.style.animation = 'pop 0.5s ease-out forwards';
            
            setTimeout(() => {
                document.getElementById('intro').style.display = 'none';
                mainContent.classList.add('fade-in');
                
                // Scroll to first section after intro
                setTimeout(() => {
                    document.getElementById('automation').scrollIntoView({ behavior: 'smooth' });
                }, 500);
            }, 1000);
        }, 2000);
    }, 500);

    // Section visibility observer
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, {
        threshold: 0.2
    });

    document.querySelectorAll('.section').forEach(section => {
        sectionObserver.observe(section);
    });

    // Add smooth scrolling for nav links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Add active class to nav links based on scroll position
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('nav a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Modified intersection observer for project animations with exit animations
    const projectObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const element = entry.target;
            const isFromRight = element.classList.contains('from-right');
            
            if (entry.isIntersecting) {
                element.classList.add('visible');
                element.classList.remove(isFromRight ? 'exit-right' : 'exit-left');
            } else {
                // Only add exit animation if element was previously visible
                if (element.classList.contains('visible')) {
                    element.classList.remove('visible');
                    element.classList.add(isFromRight ? 'exit-right' : 'exit-left');
                }
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '-25% 0px -25% 0px'
    });

    document.querySelectorAll('.project-row').forEach(project => {
        projectObserver.observe(project);
    });
});