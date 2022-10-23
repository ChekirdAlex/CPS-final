import Swiper, { Pagination } from 'swiper';

const techs = document.querySelector('.repair-techs');
const slider = techs.querySelector('.swiper');
let init = false;
let sliderTechs;

function createSliderTechs () {
    if (window.innerWidth < 768) {
        if (!init) {
            init = true;
            sliderTechs = new Swiper(slider, {
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
        sliderTechs.destroy();
        init = false;
    }
}

createSliderTechs();
window.addEventListener('resize', createSliderTechs);
