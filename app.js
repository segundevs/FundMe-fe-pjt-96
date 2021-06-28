//Slide show
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll('.dot');

let currentSlide = 0;

const slider = (n) => {
  slides.forEach((slide) => {
    slide.style.display = "none"
    dots.forEach((dot) => {
      dot.classList.remove("active")
    })
  })
  slides[n].style.display = "block"
  dots[n].classList.add("active")
}
document.addEventListener("DOMContentLoaded", slider(currentSlide));

const next = () => {
  currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++
  slider(currentSlide);
}

const prev = () => {
  currentSlide <= 0 ? currentSlide = slides.length - 1 : currentSlide--
  slider(currentSlide);
}

document.querySelector(".next").addEventListener('click', next);
document.querySelector(".prev").addEventListener('click', prev);



dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    slider(index)
    currentSlide = i
  })
});

//Payment gateway