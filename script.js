(function () {
  var sliderContainer = document.querySelector(".slider-container");
  var slides = document.querySelectorAll(".slide");
  var slideWidth = slides[0].offsetWidth;
  var slideIndex = 0;

  function nextSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    moveSlider();
  }

  function moveSlider() {
    sliderContainer.style.transform =
      "translateX(-" + slideIndex * slideWidth + "px)";
  }

  setInterval(nextSlide, 3000);
})();

const testimonials = document.getElementsByClassName("testimonial");
let currentTestimonial = 0;

function showTestimonial(index) {
  for (let i = 0; i < testimonials.length; i++) {
    testimonials[i].classList.remove("active");
  }
  testimonials[index].classList.add("active");
}

function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
}

function previousTestimonial() {
  currentTestimonial =
    (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentTestimonial);
}

// Initial display
showTestimonial(currentTestimonial);

// Auto slide every 5 seconds
setInterval(nextTestimonial, 5000);
