import BaseSlider from "./baseSlider";

export default class Carousel extends BaseSlider {
  constructor(el) {
    super(el);
    this.carouselOptions = {
      initialSlide: 0,
      speed: 900,
      slidesPerView: 1.3,
      centeredSlides: true,
      spaceBetween: 0,
      preventInteractionOnTransition: true,
      slideToClickedSlide: true,
      grabCursor: false,
      effect: 'slide',
    };
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    // spread syntax, appending values of carouselOptions to the accepted sliderOptions obj
    this.sliderOptions = {...this.sliderOptions, ...this.carouselOptions}
  }
}
