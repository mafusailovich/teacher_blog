'use strict'

import './index.html';
import './teachers.html';
import './main.scss';
import './js_modules/menu_btn.js';


// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import openMenu from './js_modules/menu_btn.js';

// Слайдер для достижений на главной
const achievements_slider = new Swiper('.achievements-slider', {
  // configure Swiper to use modules
  modules: [Navigation],

  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,

  breakpoints: {
    360: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    820: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 30,
    }
  },

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

; (function () {
  const links = document.querySelectorAll('.achievements-slider__link')
  for (const link of links) {
    link.addEventListener('click', event => {
      event.preventDefault();
    })
  }
})()

openMenu();
