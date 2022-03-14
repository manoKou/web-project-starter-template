import {toggleReadmoreText} from './helpers';
import throttle from './helpers';

const menuOpened = new Event('menu-opened');

// Event listeners go into one file; "Event Delegation"
// It increases performance and reduces memory consumption by only needing to register a single event listener to handle potentially thousands of elements.

// Document click listener
document.addEventListener('click', (event) => {
    // Toggle Menu
    if (event.target.matches('.js-menu-toggle')) {
        document.body.classList.toggle('menu-open');
        if (document.body.classList.contains('menu-open')) {
            document.dispatchEvent(menuOpened);
        }
        document.body.classList.remove('js-animate');
    }
    // example, search
    else if (event.target.matches('.js-product-search-toggle')) {
        document.body.classList.toggle('product-search-active');
    }
    // example, cart
    else if (event.target.matches('.js-cart-toggle')) {
        document.body.classList.toggle('mini-cart-active');
    }
    // working example, readmore paragraph
    else if (event.target.matches('.js-readmore-btn')) {
        event.target.querySelector('.js-readmore').classList.toggle('hidden');
        event.target.querySelector('.js-readless').classList.toggle('hidden');
        toggleReadmoreText( event.target.parentElement );
    }
});

// Document load listener
document.addEventListener('DOMContentLoaded', () => {
  // ex.
  // handleLoadingAnimation();
  throttle(() => {
    // ex. callback
    // handleScrollAnimation();
  }, 250);
});
