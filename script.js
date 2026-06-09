document.addEventListener('DOMContentLoaded', () => {
    
    // HERO GALLERY BACKGROUND SLIDER IMPLEMENTATION
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const nextBtn = document.getElementById('nextSlide');
    const prevBtn = document.getElementById('prevSlide');
    
    let currentSlide = 0;
    const slideIntervalTime = 6000; // Auto scroll window every 6 seconds
    let slideInterval;

    function showSlide(index) {
        // Reset old states
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        
        // Handle boundary validation logic
        currentSlide = (index + slides.length) % slides.length;
        
        // Assign new active slide classes
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function handleNext() {
        showSlide(currentSlide + 1);
    }

    function handlePrev() {
        showSlide(currentSlide - 1);
    }

    // Interactive Trigger Setup
    nextBtn.addEventListener('click', () => {
        handleNext();
        resetTimer();
    });

    prevBtn.addEventListener('click', () => {
        handlePrev();
        resetTimer();
    });

    // Pagination Dot Event Triggers
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            resetTimer();
        });
    });

    // Auto-advance loop functions
    function startTimer() {
        slideInterval = setInterval(handleNext, slideIntervalTime);
    }

    function resetTimer() {
        clearInterval(slideInterval);
        startTimer();
    }

    // Initialize gallery cycle loop
    startTimer();


    // OPTIONAL INTERACTIVE CARD LINK NAVIGATION HOOKS
    const cards = document.querySelectorAll('.industry-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const targetId = card.getAttribute('id');
            console.log(`Navigating or opening contextual overlay for: ${targetId}`);
            // If you build detail pages later, assign dynamic targets here:
            // window.location.href = `/${targetId}.html`;
        });
    });
});