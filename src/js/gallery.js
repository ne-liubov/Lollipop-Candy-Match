import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const swiper = new Swiper('[data-swiper="gallery"]', {
  slidesPerView: 'auto',
  direction: 'horizontal',
  spaceBetween: 10,
  grabCursor: true,
  modules: [Navigation],
  navigation: {
    nextEl: '[data-swiper-btn-gallery="next"]',
    prevEl: '[data-swiper-btn-gallery="prev"]',
  },
  breakpoints: {
    1200: {
      slidesPerView: 'auto',
      spaceBetween: 20,
    },
  },
});
