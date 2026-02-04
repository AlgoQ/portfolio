// ═══════════════════════════════════════════════════════════
// Mouse Spotlight — Refined radial glow following cursor
// ═══════════════════════════════════════════════════════════

(function () {
    const spotlight = document.getElementById('spotlight');
    const gridOverlay = document.getElementById('gridOverlay');

    if (!spotlight) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    const ease = 0.08;

    // Smooth spotlight follow with easing
    function animate() {
        currentX += (mouseX - currentX) * ease;
        currentY += (mouseY - currentY) * ease;

        spotlight.style.left = currentX + 'px';
        spotlight.style.top = currentY + 'px';

        requestAnimationFrame(animate);
    }

    document.addEventListener('mousemove', function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;

        if (!spotlight.classList.contains('active')) {
            spotlight.classList.add('active');
        }
    });

    document.addEventListener('mouseleave', function () {
        spotlight.classList.remove('active');
    });

    // Fade in grid overlay after a short delay
    if (gridOverlay) {
        setTimeout(function () {
            gridOverlay.classList.add('visible');
        }, 800);
    }

    animate();
})();
