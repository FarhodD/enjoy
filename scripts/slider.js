const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.prev__btn',
    prevEl: '.next__btn',
  },

});

const swiper2 = new Swiper('.week__slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.week__next',
    prevEl: '.week__prev',
  },

});