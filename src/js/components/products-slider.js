const productsSlider = new Swiper('.main-products__slider', {
  loop: true,
  slidesPerView: 1,
  watchSlidesVisibility: true,
  autoplay: {
    delay: 3000,
  },
  lazy: true,
  pagination: {
    el: '.products-btn',
    type: 'bullets',
    clickable: true
  },
});

const discountsSlider = new Swiper('.discounts-products__slider', {
  loop: true,
  slidesPerView: 1,
  watchSlidesVisibility: true,
  autoplay: {
    delay: 3000,
  },
  lazy: true,
  pagination: {
    el: '.products-btn',
    type: 'bullets',
    clickable: true
  },
});
