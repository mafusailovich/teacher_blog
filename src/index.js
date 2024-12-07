'use strict'

import './index.html';
import './teachers.html';
import './main.scss';


// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Zoom } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/zoom';
import openMenu from './js_modules/menu_btn.js';
import openModalPhoto from './js_modules/modal_window.js';

// Слайдер для достижений на главной
const achievements_slider = new Swiper('.achievements-slider', {
  // configure Swiper to use modules
  modules: [Navigation, Zoom],

  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  zoom: {
    minRatio: 1,
    maxRatio: 2,
  },

  breakpoints: {
    0: {
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
  modules: [Navigation, Zoom],

  // Optional parameters
  direction: 'horizontal',
  loop: true,
  zoom: {
    maxRatio: 2,
    minRatio: 1,
  },
  
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
      autoHeight: true,
    },
    400:{
      slidesPerView: 1,
      spaceBetween: 20,
    },
    820: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: true,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



openMenu();
openModalPhoto();
openModalPhoto('.event-slider', '.event__popup');
