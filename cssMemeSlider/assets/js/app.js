const slider = document.querySelector('.slider');
const sliderTrack = slider.querySelector('.slider__track');
const sliderTrackItem = document.querySelectorAll('.slider__track-item');
const sliderDots = document.querySelector('.slider__dots');
const sliderImages = document.querySelectorAll('.slider__track-img');

let slideIndex = 0;
let sliderWidth;
const dots = [];

// Добавление элементов dots в слайдер

for(let i = 0; i < sliderTrackItem.length; i++) {

  const dot = document.createElement('button');
  dot.dataset.slideTo = i;
  dot.classList.add('slider__dot');
  
  if(i == 0) dot.classList.add('active');

  dot.addEventListener('click', showSlideDots);
  
  sliderDots.append(dot); 
  dots.push(dot);
}

// Переключение слайдов через пагинацию

function showSlideDots(e) {
  const slideTo = e.target.dataset.slideTo;
  
  sliderTrackItem.forEach(element => element.style.display = 'none');
  sliderTrackItem[slideTo].style.display = 'block';

  dots.forEach(dot => dot.classList.remove('active'));
  e.target.classList.add('active');

}

// Адаптивность слайдера

const adaptiveSlide = () => {
  sliderWidth = slider.offsetWidth;
  slider.style.width = sliderWidth * sliderTrack.length + 'px';
  sliderTrackItem.forEach(item => item.style.width = sliderWidth + 'px');
}

window.addEventListener('resize', adaptiveSlide);