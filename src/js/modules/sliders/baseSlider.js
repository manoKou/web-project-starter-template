// check https://swiperjs.com/api/#custom-build for all modules
import {Swiper, Navigation, EffectFade, Pagination, Autoplay} from 'swiper/js/swiper.esm.js';

Swiper.use([Navigation, EffectFade, Pagination, Autoplay]);

export default class BaseSlider {
  constructor(el) {
    this.slider = el;
    this.sliderOptions = {
      speed: 1200,
      simulateTouch: false,
      followFinger: false,
      watchOverflow: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      navigation: {
        nextEl: this.slider.querySelector('.js-slider-next'),
        prevEl: this.slider.querySelector('.js-slider-prev'),
      },
      pagination: {
        el: this.slider.querySelector('.js-pagination'),
        type: 'bullets',
        clickable: true,
        bulletClass: 'pagination-bullet',
        bulletActiveClass: 'active',
        renderBullet: function (index, className) {
          return `<div class="${className}"><svg class="circle" viewBox="0 0 90 90" stroke="currentColor" fill="none"> <circle cx="45" cy="45" r="40" stroke-width="3"></circle></svg></div>`;
        }
      },
    };
  }

  init() {
    if (!this.slider || !this.sliderOptions) {
      return;
    }
    new Swiper(this.slider, this.sliderOptions);
  }
}
