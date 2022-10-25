const callBtn = document.querySelector('.nav-bar__button-call');
const messageBtn = document.querySelector('.nav-bar__button-message');
const callRequest = document.querySelector('.feedback-request--call');
const messageRequest = document.querySelector('.feedback-request--message');
const messageCloseBtn = messageRequest.querySelector('.feedback-request__button-close');
const callCloseBtn = callRequest.querySelector('.feedback-request__button-close');
const blurScreen = document.querySelector('.blur-screen');


const sideMessageBtn = document.querySelector('.side-footer__button-message');
const sideCallBtn = document.querySelector('.side-footer__button-call');

sideCallBtn.addEventListener("click", function (evt) {
    evt.stopPropagation();
    callRequest.classList.remove('feedback-request--call--hidden');
    callRequest.classList.add('feedback-request--call--visible');
    blurScreen.classList.add('blur-screen--visible');
});

sideMessageBtn.addEventListener("click", function (evt) {
    evt.stopPropagation();
    messageRequest.classList.remove('feedback-request--message--hidden');
    messageRequest.classList.add('feedback-request--message--visible');
    blurScreen.classList.add('blur-screen--visible');
});

callBtn.addEventListener("click", function (evt) {
    evt.stopPropagation();
    callRequest.classList.remove('feedback-request--call--hidden');
    callRequest.classList.add('feedback-request--call--visible');
    blurScreen.classList.add('blur-screen--visible');
});

messageBtn.addEventListener("click", function (evt) {
    evt.stopPropagation();
    messageRequest.classList.remove('feedback-request--message--hidden');
    messageRequest.classList.add('feedback-request--message--visible');
    blurScreen.classList.add('blur-screen--visible');
});

messageCloseBtn.addEventListener("click", function (evt) {
    evt.stopPropagation();
    messageRequest.classList.remove('feedback-request--message--visible');
    messageRequest.classList.add('feedback-request--message--hidden');
    blurScreen.classList.remove('blur-screen--visible');
});

callCloseBtn.addEventListener("click", function (evt) {
    evt.stopPropagation();
    callRequest.classList.remove('feedback-request--call--visible');
    callRequest.classList.add('feedback-request--call--hidden');
    blurScreen.classList.remove('blur-screen--visible');
});

blurScreen.addEventListener('click', function() {
    callRequest.classList.remove('feedback-request--call--visible');
    callRequest.classList.add('feedback-request--call--hidden');

    messageRequest.classList.remove('feedback-request--message--visible');
    messageRequest.classList.add('feedback-request--message--hidden');

    blurScreen.classList.remove('blur-screen--visible');
})
