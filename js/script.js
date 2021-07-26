const sliderButtons = document.querySelectorAll(".slider__button");
const slides = document.querySelectorAll(".slider__banner");
const arrowLeft = document.querySelector(".slider__arrow_left");
const arrowRight = document.querySelector(".slider__arrow_right");
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
let currentSlide = 0;

function render(index, slides, sliderButtons) {
    slides.forEach(function(slide, slidesIndex) {
        slide.classList.remove("visible");
    });
    slides[index].classList.add("visible");
    sliderButtons.forEach(function(sliderButton, sliderButtonIndex) {
        sliderButton.classList.remove("slider__button_active");
    });
    sliderButtons[index].classList.add("slider__button_active");
}

sliderButtons.forEach(function(sliderButton, sliderButtonIndex) {
    sliderButton.addEventListener('click', function() {
        currentSlide = sliderButtonIndex;
        render(currentSlide, slides, sliderButtons)
    });
});

arrowLeft.addEventListener('click', function() {
    if (currentSlide === 0) {
        currentSlide += (slides.length - 1);
    }
    else {
        currentSlide--;
    }
    render(currentSlide, slides, sliderButtons);
})

arrowRight.addEventListener('click', function() {
    if (currentSlide === (slides.length - 1)) {
        currentSlide -= (slides.length - 1);
    }
    else {
        currentSlide++;
    }
    render(currentSlide, slides, sliderButtons);
})

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle("hamburger_close");
    menu.classList.toggle("menu_phone");
})
