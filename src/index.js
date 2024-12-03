import './index.html';
import './teachers.html';
import './main.scss';
import './basePath.js';
import 'ckeditor4';


// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation} from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';

// Слайдер для достижений на главной
const achievements_slider = new Swiper('.achievements-slider', {
  // configure Swiper to use modules
  modules: [Navigation],

  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// // Слайдер для галереи событий на странице события
const event_slider = new Swiper('.event-slider', {
  // configure Swiper to use modules
  modules: [Navigation],

  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

;(function (){
  const links = document.querySelectorAll('.achievements-slider__link')
  for (const link of links) {
    link.addEventListener('click', event => {
      event.preventDefault();
    })
  }
})()

// The code below is an example of using CKEditor 4.
CKEDITOR.replace( 'app', {
  extraPlugins: 'iframe'
} );
