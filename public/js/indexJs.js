// ═══════════════════════════════════════════════════════════
// Portfolio Interactions — Scroll reveal, nav tracking
// ═══════════════════════════════════════════════════════════

(function () {
    // ── Scroll Reveal via IntersectionObserver ────────────
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(function (el) {
        revealObserver.observe(el);
    });

    // ── Active Nav Tracking ──────────────────────────────
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    const mainPanel = document.querySelector('.main-panel');

    if (mainPanel && navLinks.length > 0) {
        const navObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach(function (link) {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === '#' + id) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, {
            root: mainPanel,
            threshold: 0.3,
            rootMargin: '-10% 0px -60% 0px'
        });

        sections.forEach(function (section) {
            navObserver.observe(section);
        });

        // Smooth scroll for nav links
        navLinks.forEach(function (link) {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                var targetId = this.getAttribute('href').substring(1);
                var targetSection = document.getElementById(targetId);
                if (targetSection && mainPanel) {
                    var offsetTop = targetSection.offsetTop - mainPanel.offsetTop;
                    mainPanel.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // ── Contact Modal ────────────────────────────────────────
    var contactModal = document.getElementById('contact-modal');
    var contactOpen = document.getElementById('contact-open');
    var contactClose = document.getElementById('contact-close');
    var contactForm = document.getElementById('contact-form');
    var contactSuccess = document.getElementById('contact-success');
    var contactError = document.getElementById('contact-error');
    var contactBackdrop = contactModal ? contactModal.querySelector('.contact-backdrop') : null;

    function openModal() {
        contactModal.classList.remove('hidden');
        contactModal.classList.remove('closing');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        contactModal.classList.add('closing');
        setTimeout(function () {
            contactModal.classList.add('hidden');
            contactModal.classList.remove('closing');
            document.body.style.overflow = '';
        }, 200);
    }

    if (contactOpen) {
        contactOpen.addEventListener('click', openModal);
    }

    if (contactClose) {
        contactClose.addEventListener('click', closeModal);
    }

    if (contactBackdrop) {
        contactBackdrop.addEventListener('click', closeModal);
    }

    // Close on Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && contactModal && !contactModal.classList.contains('hidden')) {
            closeModal();
        }
    });

    // Netlify Forms submission handler
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            contactError.classList.add('hidden');

            var formData = new FormData(contactForm);

            fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString()
            })
            .then(function (res) {
                if (res.ok) {
                    contactForm.classList.add('hidden');
                    contactSuccess.classList.remove('hidden');
                } else {
                    contactError.textContent = 'Something went wrong. Please try again.';
                    contactError.classList.remove('hidden');
                }
            })
            .catch(function () {
                contactError.textContent = 'Something went wrong. Please try again.';
                contactError.classList.remove('hidden');
            });
        });
    }

    // ── Side panel scroll passthrough ────────────────────
    const sidePanel = document.querySelector('.side-panel');

    if (sidePanel && mainPanel) {
        sidePanel.addEventListener('wheel', function (event) {
            mainPanel.scrollTop += event.deltaY;
            event.preventDefault();
        }, { passive: false });
    }
})();
