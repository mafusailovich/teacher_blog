import './index.html';
import './teachers.html';
import './main.scss';

// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation} from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';

// init Swiper:
const swiper = new Swiper('.achievements-slider', {
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

;(function (){
  const links = document.querySelectorAll('.achievements-slider__link')
  for (const link of links) {
    link.addEventListener('click', event => {
      event.preventDefault();
    })
  }
})()

