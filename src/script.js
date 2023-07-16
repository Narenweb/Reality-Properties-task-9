const hamburger = document.querySelector('.hamburger');
const navCenter = document.querySelector('.nav-center')
const navbar= document.querySelector('.navbar')
hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('hamburger-active');
    navCenter.classList.toggle('nav-active');
})
document.addEventListener('scroll',()=>{
    const position=window.scrollY;
    if(position){
        navbar.classList.add("navbar-fixed");
    }
    else{
        navbar.classList.remove("navbar-fixed");
    }
})

//Dropdown
const dropdown = document.querySelector('.dropdown');
const input = document.querySelector('input');
const listOfOptions = document.querySelectorAll('.option');
const body = document.body;

const selectOption = (event) => {
  input.value = event.currentTarget.textContent;
};

const closeDropdown = () => {
  if (dropdown.classList.contains('opened')) {
    dropdown.classList.remove('opened');
  }
};

body.addEventListener('click', closeDropdown);

listOfOptions.forEach((option) => {
  option.addEventListener('click', selectOption);
});
dropdown.addEventListener('click',(event)=>{
  dropdown.classList.toggle('opened');
  event.stopPropagation();

});




//slider

const slides = document.querySelectorAll('.client-card');
const prevButton = document.querySelector('.left');
const nextButton = document.querySelector('.right');
const slideWidth = slides[0].offsetWidth;
let currentIndex = 0;

prevButton.addEventListener('click', () => {
  goToSlide(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
  goToSlide(currentIndex + 1);
});

function goToSlide(index) {
  if (index < 0) {
    index = slides.length - 1;
  } else if (index >= slides.length) {
    index = 0;
  }

  const translateXValue = -index * slideWidth;
  slides.forEach((slide, slideIndex) => {
    slide.style.transform = `translateX(${translateXValue}px)`;

    if (slideIndex === index) {
      slide.classList.add('active');
         slide.style.transform += `translateY(-30px)`
    } else {
      slide.classList.remove('active');
    }
  });

  currentIndex = index;
}









