document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.testimonials-track');
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
     // Humberber 
    const hamburger = document.querySelector('.hamburger');
        const closeMenu = document.querySelector('.close-menu');
        const mobileMenu = document.querySelector('.mobile-menu');
        const openMenu = document.querySelector('#mainlogo');
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            openMenu.classList.add('open');
            document.body.style.overflow = 'hidden';
        });

        closeMenu.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            openMenu.classList.remove('open');
            document.body.style.overflow = 'auto';
        });

    let currentIndex = 0;
    const slideCount = slides.length;

    function updateSlider() {
        const slideWidth = 100 / slideCount;
        track.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });

        // Update button states
        prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
        nextBtn.style.opacity = currentIndex === slideCount - 1 ? '0.5' : '1';
    }

    function nextSlide() {
        if (currentIndex < slideCount - 1) {
            currentIndex++;
            updateSlider();
        }
    }

    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    }

    // Event Listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
    });

    // Auto-advance slides every 5 seconds
    let autoplayInterval = setInterval(() => {
        if (currentIndex < slideCount - 1) {
            nextSlide();
        } else {
            currentIndex = 0;
            updateSlider();
        }
    }, 50000);


    // Initialize slider
    updateSlider();
});

        