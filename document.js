document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.querySelector('.navbar');

    menuToggle.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('[data-animate]');

    const isElementInView = (element) => {
        const rect = element.getBoundingClientRect();
        return (rect.top >= 0 && rect.top <= window.innerHeight);
    };

    const handleScroll = () => {
        elements.forEach(el => {
            if (isElementInView(el)) {
                el.classList.add('in-view');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
});
