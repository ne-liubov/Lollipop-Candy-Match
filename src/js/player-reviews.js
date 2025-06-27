import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';


const reviewsSwiper = new Swiper('[data-swiper="reviews"]', {
  slidesPerView: 'auto',
  direction: 'horizontal',
  spaceBetween: 8,
  grabCursor: true,
  modules: [Navigation, Pagination],
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
