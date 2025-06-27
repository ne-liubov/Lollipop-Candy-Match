import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const reviewsSwiper = new Swiper('[data-swiper="reviews"]', {
  slidesPerView: 'auto',
  direction: 'horizontal',
  spaceBetween: 8,
  grabCursor: true,
  modules: [Navigation],
  navigation: {
    nextEl: '[data-swiper-btn="next"]',
    prevEl: '[data-swiper-btn="prev"]',
  },
  breakpoints: {
    1200: {
      slidesPerView: 'auto',
      spaceBetween: 20,
    },
  },
});
