document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Sticky Navbar Styling on Scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
            header.style.padding = '5px 0';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            header.style.padding = '10px 0';
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            }
        });
    });

    // Inject WhatsApp Sticky Widget
    const whatsappBtn = document.createElement('a');
    whatsappBtn.href = "https://wa.me/31612345678";
    whatsappBtn.target = "_blank";
    whatsappBtn.className = "whatsapp-widget";
    whatsappBtn.innerHTML = '<i class="fa-brands fa-whatsapp"></i>';
    whatsappBtn.setAttribute('data-aos', 'zoom-in');
    whatsappBtn.setAttribute('data-aos-delay', '1000');
    document.body.appendChild(whatsappBtn);

    // Number Counter Animation
    const stats = document.querySelectorAll('.stat-box h3');
    if (stats.length > 0) {
        const speed = 200; // The lower the slower

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const statsObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const updateCount = () => {
                        const target = +counter.getAttribute('data-target') || parseInt(counter.innerText);
                        if (!counter.hasAttribute('data-target')) {
                            counter.setAttribute('data-target', target);
                            counter.innerText = '0';
                        }
                        const count = +parseInt(counter.innerText);
                        const inc = target / speed;

                        if (count < target) {
                            counter.innerText = Math.ceil(count + inc) + (counter.getAttribute('data-suffix') || '');
                            setTimeout(updateCount, 1);
                        } else {
                            counter.innerText = target + (counter.getAttribute('data-suffix') || '');
                        }
                    };
                    updateCount();
                    observer.unobserve(counter);
                }
            });
        }, observerOptions);

        stats.forEach(stat => {
            if (stat.innerText.includes('+') || stat.innerText.includes('%')) {
                const targetText = stat.innerText;
                const num = parseInt(targetText);
                const suffix = targetText.replace(/[0-9]/g, '');
                stat.setAttribute('data-target', num);
                stat.setAttribute('data-suffix', suffix);
                stat.innerText = '0' + suffix;
            }
            statsObserver.observe(stat);
        });
    }

});
