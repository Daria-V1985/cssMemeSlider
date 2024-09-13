const slider = document.querySelector('.slider__track');
const sliderTrackItem = slider.querySelectorAll('.slider__track-item');
const dotsFuture = document.querySelector('.slider__dots');


// Добавление элементов dots в слайдер

let slideIndex = 0;
const dots = [];

for(let i = 0; i < sliderTrackItem.length; i++) {

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
  
  sliderTrackItem.forEach(element => element.style.display = 'none');
  sliderTrackItem[slideTo].style.display = 'block';

  dots.forEach(dot => dot.classList.remove('active'));
  e.target.classList.add('active');
}