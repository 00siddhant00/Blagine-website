document.addEventListener('DOMContentLoaded', () => {

    // 1. Initialize Vanilla Tilt for 3D Card Effect
    // This gives the "alive" feeling when hovering over cards
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll(".card"), {
            max: 10,           // Max tilt rotation (degrees)
            speed: 400,        // Speed of the enter/exit transition
            glare: true,       // Add a light glare effect
            "max-glare": 0.2,  // Max opacity of glare
            gyroscope: true,   // Device orientation support
            scale: 1.02        // Slight zoom on hover
        });
    }

    // 2. Custom "Magnetic" Button Effect for Nav
    // Makes buttons feel like they have gravity
    const navBtn = document.querySelector('.nav-btn');
    if (navBtn) {
        navBtn.addEventListener('mousemove', (e) => {
            const rect = navBtn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            navBtn.style.setProperty('--x', `${x}px`);
            navBtn.style.setProperty('--y', `${y}px`);
        });
    }

    // 3. Smooth Page Transitions (Fade Out before navigating)
    // Prevents the "hard cut" feeling between pages
    const links = document.querySelectorAll('a[href]:not([target="_blank"]):not([href^="#"]):not([href^="mailto"])');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('href');

            // Add exit animation class
            document.body.classList.add('page-exit');

            setTimeout(() => {
                window.location.href = target;
            }, 500); // Wait for animation
        });
    });

    // 4. Dynamic Title Updating (Browser Tab)
    let docTitle = document.title;
    window.addEventListener("blur", () => {
        document.title = "Come back to the universe 🌌";
    });
    window.addEventListener("focus", () => {
        document.title = docTitle;
    });

    // 5. Blob Follower (Subtle movement toward mouse)
    // Makes the background feel responsive
    const blobs = document.querySelectorAll('.blob');
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        blobs.forEach((blob, index) => {
            const speed = (index + 1) * 20;
            const xOffset = (window.innerWidth / 2 - e.clientX) / speed;
            const yOffset = (window.innerHeight / 2 - e.clientY) / speed;

            blob.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    });
});