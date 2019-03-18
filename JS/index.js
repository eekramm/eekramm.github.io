// JS for modal boxs triggerd by clicking the icons in the bio section
//--------------------------------------------------

let homeModal = document.querySelector(".home-modal");
let homeIcon = document.querySelector(".home-icon");

function toggleHomeModal() {
  homeModal.classList.toggle("show-modal");
}

homeIcon.addEventListener("click", toggleHomeModal);
homeModal.addEventListener("click", toggleHomeModal);


let familyModal = document.querySelector(".family-modal");
let familyIcon = document.querySelector(".family-icon")

function toggleFamilyModal() {
  familyModal.classList.toggle("show-modal");
}

familyIcon.addEventListener("click", toggleFamilyModal);
familyModal.addEventListener("click", toggleFamilyModal);


let workModal = document.querySelector(".work-modal");
let workIcon = document.querySelector(".work-icon")

function toggleWorkModal() {
  workModal.classList.toggle("show-modal");
}

workIcon.addEventListener("click", toggleWorkModal);
workModal.addEventListener("click", toggleWorkModal);


let programmingModal = document.querySelector(".programming-modal");
let programmingIcon = document.querySelector(".programming-icon")

function toggleProgrammingModal() {
  programmingModal.classList.toggle("show-modal");
}

programmingIcon.addEventListener("click", toggleProgrammingModal);
programmingModal.addEventListener("click", toggleProgrammingModal);


let barbellModal = document.querySelector(".barbell-modal");
let barbellIcon = document.querySelector(".barbell-icon")

function toggleBarbellModal() {
  barbellModal.classList.toggle("show-modal");
}

barbellIcon.addEventListener("click", toggleBarbellModal);
barbellModal.addEventListener("click", toggleBarbellModal);


let dinnerModal = document.querySelector(".dinner-modal");
let dinnerIcon = document.querySelector(".dinner-icon")

function toggleDinnerModal() {
  dinnerModal.classList.toggle("show-modal");
}

dinnerIcon.addEventListener("click", toggleDinnerModal);
dinnerModal.addEventListener("click", toggleDinnerModal);


// JS for photo slides
//--------------------------------------------------
// let dot1 = document.querySelector(".dot1");
// let dot2 = document.querySelector(".dot2");
// let dot3 = document.querySelector(".dot3");
// let dot4 = document.querySelector(".dot4");
// let dot5 = document.querySelector(".dot5");

// let prevArrow = document.querySelector(".prev");
// let nextArrow = document.querySelector(".next");

let slideShow = 1;
showSlides(slideShow);

// Next/previous controls
function plusSlides(singleSlide) {
  showSlides(slideShow += singleSlide);
}

// Thumbnail image controls
function currentSlide(singleSlide) {
  showSlides(slideShow = singleSlide);
}

function showSlides(singleSlide) {
  let slide;
  let mySlides = document.querySelectorAll(".mySlides");
  let dots = document.querySelectorAll(".dot");
  if (singleSlide > mySlides.length) {slideShow = 1} 
  if (singleSlide < 1) {slideShow = slides.length}
  for (slide = 0; slide < mySlides.length; slide++) {
      mySlides[slide].style.display = "none"; 
  }
  for (slide = 0; slide < dots.length; slide++) {
      dots[slide].className = dots[slide].className.replace(" active", "");
  }
  mySlides[slideShow-1].style.display = "block"; 
  dots[slideShow-1].className += " active";
}

// prevArrow.addEventListener("click", plusSlides);
// nextArrow.addEventListener("click", plusSlides);

// dot1.addEventListener("click", currentSlide(1));
// dot2.addEventListener("click", currentSlide(2));
// dot3.addEventListener("click", currentSlide(3));
// dot4.addEventListener("click", currentSlide(4));
// dot5.addEventListener("click", currentSlide(5));







