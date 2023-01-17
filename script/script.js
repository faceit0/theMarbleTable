/* Slide */
const SHOWING_CLASS = "showing";
const FirstSlide = document.querySelector('.slide-item:first-child');
const nextButton = document.querySelector('.next-btn');
const prevButton = document.querySelector('.prev-btn');



function slide(){
  slideClearInterval();
  const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
    if(currentSlide){
      currentSlide.classList.remove(SHOWING_CLASS);
      const nextSlide = currentSlide.nextElementSibling;
      if(nextSlide){
        nextSlide.classList.add(SHOWING_CLASS);
      }
      else {
        FirstSlide.classList.add(SHOWING_CLASS);
      }
    }
    else {
     FirstSlide.classList.add(SHOWING_CLASS);
    }
}

var slideSetInterval =  setInterval(slide, 3000);


function slideClearInterval() {
  clearInterval(slideSetInterval);
  slideSetInterval =  setInterval(slide, 3000);
}

function prevSlide(){
  slideClearInterval();
  const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
  const prevSlide = currentSlide.previousElementSibling;
  const lastSibling = document.querySelector('.slide-item:last-child');
  currentSlide.classList.remove(SHOWING_CLASS);
  if(prevSlide){
    prevSlide.classList.add(SHOWING_CLASS);
  } else {
    lastSibling.classList.add(SHOWING_CLASS);
  }
}

nextButton.addEventListener('click', slide);
prevButton.addEventListener('click', prevSlide);
