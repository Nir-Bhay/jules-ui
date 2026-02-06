document.addEventListener('DOMContentLoaded', () => {

    // Mobile Menu
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && closeMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('translate-x-full');
        });

        closeMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('translate-x-full');
        });

        // Close menu when clicking a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('translate-x-full');
            });
        });
    }

    // Header Scroll Effect
    const header = document.getElementById('main-header');

    const updateHeader = () => {
        if (window.scrollY > 50) {
            header.classList.remove('bg-transparent');
            header.classList.add('bg-white', 'shadow-scroll');
            // If on home page, handle text color changes if needed, but we used text-text-primary mostly
            // If the initial header was transparent on a dark bg, we might need to handle text colors.
            // But here the header is over a light gradient, so dark text works fine always.
        } else {
            header.classList.add('bg-transparent');
            header.classList.remove('bg-white', 'shadow-scroll');
        }
    };

    window.addEventListener('scroll', updateHeader);
    updateHeader(); // Initial check

    // Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-up').forEach(el => {
        observer.observe(el);
    });

    // Form Handling (Visual Only)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.innerText;

            btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Sending...';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerHTML = '<i class="fa-solid fa-check"></i> Sent Successfully';
                btn.classList.remove('btn-primary');
                btn.classList.add('bg-success', 'text-white');
                form.reset();

                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.classList.add('btn-primary');
                    btn.classList.remove('bg-success', 'text-white');
                    btn.disabled = false;
                }, 3000);
            }, 1500);
        });
    });
});
