// Scripts JavaScript pour ajouter des fonctionnalités interactives et des animations

// Exemples d'animations simples
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
