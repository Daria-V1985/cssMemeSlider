const slider = document.querySelector('.slider');
const sliderTrack = document.querySelector('.slider__track');
const sliderTrackItem = slider.querySelectorAll('.slider__track-item');
const dotsFuture = document.querySelector('.slider__dots');
const sliderImages = document.querySelectorAll('.slider__track-img');

let slideIndex = 0;
let sliderWidth = slider.clientWidth;
const dots = [];

// Добавление элементов dots в слайдер

for(let i = 0; i < sliderTrackItem.length; i++) {

  const dot = document.createElement('button');
  dot.dataset.slideTo = i;
  dot.classList.add('slider__dot');
  
  if(i == 0) dot.classList.add('active');

  dot.addEventListener('click', showSlideDots);
  
  dotsFuture.append(dot); 
  dots.push(dot);
}

// Переключение слайдов

function showSlideDots(e) {
  const slideTo = e.target.dataset.slideTo;
  
  sliderTrackItem.forEach(element => element.style.display = 'none');
  sliderTrackItem[slideTo].style.display = 'block';

  dots.forEach(dot => dot.classList.remove('active'));
  e.target.classList.add('active');

}

// Адаптивность слайдера

const adaptiveSlide = () => {
  sliderWidth = sliderTrack.offsetWidth;
  sliderTrackItem.style.width = sliderWidth * sliderImages.length + 'px';
  sliderImages.forEach(e => e.style.width = sliderWidth + 'px');
}

window.addEventListener('resize', adaptiveSlide);

