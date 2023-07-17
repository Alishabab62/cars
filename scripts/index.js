const carouselSlide = document.querySelector(".carousel-slide");
const indicators = document.querySelectorAll(".indicator");

let counter = 0;
const slides = carouselSlide.querySelectorAll("img");
const slideWidth = carouselSlide.clientWidth;
const imageCount = slides.length;
carouselSlide.style.setProperty("--image-count", imageCount);

let autoSlideInterval;

function updateSlide() {
  carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;

  indicators.forEach((indicator, index) => {
    if (index === counter) {
      indicator.classList.add("active");
    } else {
      indicator.classList.remove("active");
    }
  });
}

function autoSlide() {
  counter++;
  if (counter >= imageCount) {
    counter = 0;
  }
  updateSlide();
}

function startAutoSlide() {
  stopAutoSlide(); // Clear any existing interval to avoid conflicts
  autoSlideInterval = setInterval(autoSlide, 3000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    counter = index;
    updateSlide();
    stopAutoSlide();
  });
});

startAutoSlide();
