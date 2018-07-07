const slides = document.querySelectorAll(".mySlides");
let currentSlide = 0;

const displaySlide = function() {
  for(let i=0; i<slides.length; i++) {
    if(currentSlide === i) {
      slides[i].classList.add("show");
    } else {
      slides[i].classList.remove("show");
    }
  }
}; 
displaySlide();


const prev = document.querySelector(".prev");
prev.addEventListener("click", function() {
  currentSlide--;
  if(currentSlide < 0) {
    currentSlide = slides.length-1;
  }
  displaySlide();
});

const next = document.querySelector(".next");
next.addEventListener("click", function() {
  currentSlide++;
  if(currentSlide > slides.length-1) {
    currentSlide = 0;
  }
  displaySlide();
});