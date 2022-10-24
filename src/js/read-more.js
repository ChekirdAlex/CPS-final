const text = document.querySelector('.text');
const readMore = document.querySelector('.read-more-btn');
const textCont = document.querySelector('.text__container'); 

readMore.addEventListener('click', function () {
    textCont.classList.toggle('text--overflow--hidden');
    textCont.classList.toggle('text--overflow--visible');

    readMore.classList.toggle('read-more--clicked');
    if (readMore.classList.contains('read-more--clicked')) {
        readMore.textContent = 'Скрыть';
    } else {
        readMore.textContent = 'Читать далее';
    }
})