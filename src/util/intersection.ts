export default function () {
    document.addEventListener('DOMContentLoaded', (event) => {
        const revealElements = document.querySelectorAll('.reveal');

        // Customize the threshold here. For example, 0.5 means 50% overlap.
        const options = {
            threshold: 0.4 // Adjust this value as needed
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('pre-reveal');
                } else {
                    // entry.target.classList.add('pre-reveal'); // Optional: remove the class if the element is no longer in view
                }
            });
        }, options);

        revealElements.forEach(el => el.classList.add('pre-reveal'))
        revealElements.forEach(el => observer.observe(el));
    });
}