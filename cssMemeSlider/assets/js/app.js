const slider = document.querySelector('.slider');
const sliderTrack = slider.querySelectorAll('.slider__track');
const dotsFuture = document.querySelector('.slider__dots');


// Добавление элементов dots в слайдер

let slideIndex = 0;
const dots = [];

for(let i = 0; i < sliderTrack.length; i++) {

  const dot = document.createElement('button');
  dot.dataset.slideTo = i;
  dot.classList.add('slider__dot');
  
  if(i == 0) dot.classList.add('active');

  dot.addEventListener('click', showSlideDots);
  
  dotsFuture.append(dot); 
  dots.push(dot);
}

function showSlideDots(e) {
  const slideTo = e.target.dataset.slideTo;
  
  sliderTrack.forEach(element => element.style.display = 'none');
  sliderTrack[slideTo].style.display = 'block';

  dots.forEach(dot => dot.classList.remove('active'));
  e.target.classList.add('active');
}