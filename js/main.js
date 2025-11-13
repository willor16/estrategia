document.addEventListener("DOMContentLoaded", () => {

    const itemsToAnimate = document.querySelectorAll('.animate-item');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);

    itemsToAnimate.forEach(item => {
        observer.observe(item);
    });

});