const carouselSlide = document.querySelector(".carousel-slide");
const indicators = document.querySelectorAll(".indicator");

let counter = 0;
const slides = carouselSlide.querySelectorAll("img");
let autoSlideInterval;

function updateSlide() {
  carouselSlide.style.transform = `translateX(${-100 * counter}%)`;

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
  if (counter >= slides.length) {
    counter = 0;
  }
  updateSlide();
}

function startAutoSlide() {
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
