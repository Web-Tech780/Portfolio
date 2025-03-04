// JavaScript for Carousel
const items = document.querySelectorAll(".carousel-item");
let currentIndex = 0;

function showNextSlide() {
  items[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % items.length;
  items[currentIndex].classList.add("active");
}

setInterval(showNextSlide, 3000); // Change slide every 3 seconds
