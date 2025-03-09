async function loadComponent(url, targetid) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    document.getElementById(targetid).innerHTML = html;
  } catch (error) {
    console.error(`Error loading ${url}:`, error);
  }
 
  // Slider functionality
  const slider = document.getElementById("slider");
  if (slider) {
    const slides = slider.children;
    const dotsContainer = document.getElementById("dots-container");
    const dots = dotsContainer.children;
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    let currentIndex = 0;
    const slideWidth = 100; // 100%
    let autoSlideInterval;

    // Function to update slider position
    function updateSlider() {
      slider.style.transform = `translateX(-${currentIndex * slideWidth}%)`;

      // Update active dot
      Array.from(dots).forEach((dot, index) => {
        if (index === currentIndex) {
          dot.classList.add("bg-opacity-100");
          dot.classList.add("active");
        } else {
          dot.classList.remove("bg-opacity-100");
          dot.classList.remove("active");
        }
      });
    }

    // Next slide function
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlider();
    }

    // Previous slide function
    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlider();
    }

    // Start auto sliding
    function startAutoSlide() {
      autoSlideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    // Stop auto sliding
    function stopAutoSlide() {
      clearInterval(autoSlideInterval);
    }

    // Event listeners
    prevBtn.addEventListener("click", () => {
      prevSlide();
      stopAutoSlide();
      startAutoSlide(); // Restart timer after manual navigation
    });

    nextBtn.addEventListener("click", () => {
      nextSlide();
      stopAutoSlide();
      startAutoSlide(); // Restart timer after manual navigation
    });

    // Add click events to dots
    Array.from(dots).forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentIndex = index;
        updateSlider();
        stopAutoSlide();
        startAutoSlide(); // Restart timer after manual navigation
      });
    });

    // Pause auto sliding when hovering over the slider
    const sliderContainer = document.getElementById("slider-container");
    sliderContainer.addEventListener("mouseenter", stopAutoSlide);
    sliderContainer.addEventListener("mouseleave", startAutoSlide);

    // Initialize
    updateSlider();
    startAutoSlide();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("components/main/index.html", "main");
});