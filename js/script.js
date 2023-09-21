// Manual slider

// Slider

const navbuttons = document.querySelectorAll(".nav-button");
const slides = document.querySelectorAll(".img-slider");
const homeContents = document.querySelectorAll(".home-content");

var currentSlide = 0; // Initialize the current slide index

function sliderNav(manual) 
{
    navbuttons.forEach((navbutton)=>{
        navbutton.classList.remove('active');
    });
    navbuttons[manual].classList.add('active');

    slides.forEach((slide)=>{
        slide.classList.remove('active');
    });
    slides[manual].classList.add('active');

    homeContents.forEach((homeContent)=>{
        homeContent.classList.remove('active');
    });
    homeContents[manual].classList.add('active');
} 

navbuttons.forEach((navbutton, i) => {
  navbutton.addEventListener('click', () => {
    sliderNav(i);
  });
});

// Function to advance the slider automatically
function autoSlider() {
  if (currentSlide === slides.length - 1) {
    currentSlide = 0; // Reset to the first slide if we're at the end
  } else {
    currentSlide++; // Move to the next slide
  }
  sliderNav(currentSlide);
}

// Set an interval to call autoSlider every 3 seconds (adjust as needed)
const interval = setInterval(autoSlider, 5000);

// Pause the automatic slider when the user clicks a navigation button
navbuttons.forEach((navbutton) => {
  navbutton.addEventListener('click', () => {
    clearInterval(interval);
  });
});