// Music page — minimal script
// No rainbow text effect needed with the new minimal theme
document.addEventListener('DOMContentLoaded', function () {
    // Staggered card reveal via IntersectionObserver for cards below the fold
    const cards = document.querySelectorAll('.music-card');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );

    cards.forEach((card) => {
        card.style.animationPlayState = 'paused';
        observer.observe(card);
    });
});
