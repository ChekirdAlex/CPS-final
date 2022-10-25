const showMoreBrands = document.querySelector('.repair-brands .show-more-btn');
const showMoreTechs = document.querySelector('.repair-techs .show-more-btn');

const brandsList = document.querySelector('.repair-brands__container'); //Visibility of brands list
const techsList = document.querySelector('.repair-techs__body'); //Visibility of techs list


showMoreBrands.addEventListener('click', function () {
    brandsList.classList.toggle('repair-brands--overflow--hidden');
    brandsList.classList.toggle('repair-brands--overflow--visible');

    showMoreBrands.classList.toggle('show-more--clicked');
    if (showMoreBrands.classList.contains('show-more--clicked')) {
        showMoreBrands.textContent = 'Скрыть';
    } else {
        showMoreBrands.textContent = 'Показать все';
    }
})

showMoreTechs.addEventListener('click', function () {
    techsList.classList.toggle('repair-techs--overflow--hidden');
    techsList.classList.toggle('repair-techs--overflow--visible');

    showMoreTechs.classList.toggle('show-more--clicked');
    if (showMoreTechs.classList.contains('show-more--clicked')) {
        showMoreTechs.textContent = 'Скрыть';
    } else {
        showMoreTechs.textContent = 'Показать все';
    }
})
