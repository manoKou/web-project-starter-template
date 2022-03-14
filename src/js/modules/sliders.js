/*
*
* Sliders are not implemented in this demo, but testing is easy!
*
* Just add { "swiper": "^5.4.5" }, in dependencies of package.json
* Then $npm install
*
* Then add function calls in script.js, inside the document load handler.
*
*/

import BaseSlider from "./sliders/baseSlider";
import Carousel from "./sliders/carousel";

export default function initSliders() {
  // Simple Sliders
  const gallerySliders = document.querySelectorAll('.js-gallery-slider');
  if (gallerySliders.length) {
    for (let i = 0; i < gallerySliders.length; i++) {
      const slider = new BaseSlider(gallerySliders[i]);
      slider.init();
    }
  }
  // Carousels
  const carousels = document.querySelectorAll('.js-carousel');
  if (carousels.length) {
    for (let i = 0; i < carousels.length; i++) {
      const slider = new Carousel(carousels[i]);
      slider.init();
    }
  }
}
