document.addEventListener("DOMContentLoaded", () => {
    // Observer robusto para Fade-In
    const fadeElements = document.querySelectorAll('.fade-in');

    fadeElements.forEach(el => {
        // Estado inicial estricto
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)';
    });

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';

                setTimeout(() => {
                    if (entry.target.classList.contains('will-float-1')) entry.target.classList.add('float-card-1');
                    if (entry.target.classList.contains('will-float-2')) entry.target.classList.add('float-card-2');
                    if (entry.target.classList.contains('will-float-3')) entry.target.classList.add('float-card-3');
                }, 1000);

                fadeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    fadeElements.forEach(el => fadeObserver.observe(el));

    // Animación de Contadores asegurada
    const counters = document.querySelectorAll('.counter-value');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = +el.getAttribute('data-target');
                const suffix = el.getAttribute('data-suffix') || '';
                const duration = 2500;
                const startTime = performance.now();

                const updateCounter = (currentTime) => {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    // Easing function easeOutExpo
                    const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                    const currentVal = Math.floor(easeProgress * target);

                    el.innerText = currentVal.toLocaleString() + suffix;

                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    } else {
                        el.innerText = target.toLocaleString() + suffix;
                    }
                };
                requestAnimationFrame(updateCounter);
                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => counterObserver.observe(c));

    // Observador para las gráficas
    const graphContainers = document.querySelectorAll('.graph-container');
    const graphObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bars = entry.target.querySelectorAll('.graph-bar');
                bars.forEach(bar => {
                    bar.classList.remove('scale-y-0');
                    bar.classList.add('scale-y-100');
                });
                graphObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    graphContainers.forEach(container => graphObserver.observe(container));
});
