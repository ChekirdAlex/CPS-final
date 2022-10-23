import Swiper, { Pagination } from 'swiper';

const price = document.querySelector('.price');
const slider = price.querySelector('.swiper');
let init = false;
let sliderPrice;

function createSliderPrice () {
    if (window.innerWidth < 768) {
        if (!init) {
            init = true;
            sliderPrice = new Swiper(slider, {
                modules: [ Pagination ],
                slidesPerView: 'auto',
                spaceBetween: 16,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true,
                },
            });
        }
    } else if (init) {
        sliderPrice.destroy();
        init = false;
    }
}

createSliderPrice();
window.addEventListener('resize', createSliderPrice);
