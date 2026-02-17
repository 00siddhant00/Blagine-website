document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // Typewriter intro animation
    // ==========================================
    const text = document.querySelector('.typewriter');
    const questionMark = document.querySelector('.question-mark');
    const mainContent = document.getElementById('main-content');

    setTimeout(() => {
        text.style.transition = 'opacity 0.6s ease';
        text.style.opacity = '1';
        setTimeout(() => {
            questionMark.style.opacity = '1';
            questionMark.style.animation = 'pop 0.5s ease-out forwards';

            setTimeout(() => {
                document.getElementById('intro').style.display = 'none';
                mainContent.classList.add('fade-in');

                // Start observing projects after reveal
                setTimeout(() => {
                    initProjectObserver();
                    initNavObserver();
                }, 100);
            }, 1000);
        }, 1500);
    }, 400);

    // ==========================================
    // Smooth scrolling for nav links
    // ==========================================
    document.querySelectorAll('.section-nav a, nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const offset = 130; // Account for fixed nav bars
                const top = targetSection.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    // ==========================================
    // Project scroll animations
    // ==========================================
    function initProjectObserver() {
        const projectObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const element = entry.target;
                    const isFromRight = element.classList.contains('from-right');

                    if (entry.isIntersecting) {
                        element.classList.add('visible');
                        element.classList.remove(isFromRight ? 'exit-right' : 'exit-left');
                    } else {
                        if (element.classList.contains('visible')) {
                            element.classList.remove('visible');
                            element.classList.add(isFromRight ? 'exit-right' : 'exit-left');
                        }
                    }
                });
            },
            {
                threshold: 0.15,
                rootMargin: '-15% 0px -15% 0px',
            }
        );

        document.querySelectorAll('.project-row').forEach((project) => {
            projectObserver.observe(project);
        });
    }

    // ==========================================
    // Active nav link tracking
    // ==========================================
    function initNavObserver() {
        const sections = document.querySelectorAll('.section');
        const navLinks = document.querySelectorAll('.section-nav a');

        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute('id');
                        navLinks.forEach((link) => {
                            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                        });
                    }
                });
            },
            {
                threshold: 0.3,
            }
        );

        sections.forEach((section) => sectionObserver.observe(section));
    }
});