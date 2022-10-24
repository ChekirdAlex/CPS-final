const callBtn = document.querySelector('.nav-bar__button-call');
const messageBtn = document.querySelector('.nav-bar__button-message');
const callRequest = document.querySelector('.feedback-request--call');
const messageRequest = document.querySelector('.feedback-request--message');
const messageCloseBtn = messageRequest.querySelector('.feedback-request__button-close');
const callCloseBtn = callRequest.querySelector('.feedback-request__button-close');
const mainRequest = document.querySelector('.main');
const sideMenuRequest = document.querySelector('.side-menu');

const messageSubmit = messageRequest.querySelector('.button-submit');
const callSubmit = callRequest.querySelector('.button-submit');

const sideMessageBtn = document.querySelector('.side-footer__button-message');
const sideCallBtn = document.querySelector('.side-footer__button-call');

sideCallBtn.addEventListener("click", function (a) {
    a.stopPropagation();
    callRequest.classList.remove('feedback-request--call--hidden');
    callRequest.classList.add('feedback-request--call--visible');
    mainRequest.classList.add('main--blurred');
    sideMenuRequest.classList.add('side-menu--blurred');
});

sideMessageBtn.addEventListener("click", function (a) {
    a.stopPropagation();
    messageRequest.classList.remove('feedback-request--message--hidden');
    messageRequest.classList.add('feedback-request--message--visible');
    mainRequest.classList.add('main--blurred');
    sideMenuRequest.classList.add('side-menu--blurred');
});

callBtn.addEventListener("click", function (a) {
    a.stopPropagation();
    callRequest.classList.remove('feedback-request--call--hidden');
    callRequest.classList.add('feedback-request--call--visible');
    mainRequest.classList.add('main--blurred');
    sideMenuRequest.classList.add('side-menu--blurred');
});

messageBtn.addEventListener("click", function (a) {
    a.stopPropagation();
    messageRequest.classList.remove('feedback-request--message--hidden');
    messageRequest.classList.add('feedback-request--message--visible');
    mainRequest.classList.add('main--blurred');
    sideMenuRequest.classList.add('side-menu--blurred');
});

messageCloseBtn.addEventListener("click", function (a) {
    a.stopPropagation();
    messageRequest.classList.remove('feedback-request--message--visible');
    messageRequest.classList.add('feedback-request--message--hidden');
    mainRequest.classList.remove('main--blurred');
    sideMenuRequest.classList.remove('side-menu--blurred');
});

callCloseBtn.addEventListener("click", function (a) {
    a.stopPropagation();
    callRequest.classList.remove('feedback-request--call--visible');
    callRequest.classList.add('feedback-request--call--hidden');
    mainRequest.classList.remove('main--blurred');
    sideMenuRequest.classList.remove('side-menu--blurred');
});

document.addEventListener("click", function (a) {
    const target = a.target;
    const its_call= target == callRequest || callRequest.contains(target);
    const its_message= target == messageRequest || messageRequest.contains(target);
    const call_is_active = callRequest.classList.contains("feedback-request--call--visible");
    const message_is_active = messageRequest.classList.contains("feedback-request--message--visible");

    if (!its_call && call_is_active) {
        a.stopPropagation();
        callRequest.classList.remove('feedback-request--call--visible');
        callRequest.classList.add('feedback-request--call--hidden');
        mainRequest.classList.remove('main--blurred');
        sideMenuRequest.classList.remove('side-menu--blurred');
    }

    if (!its_message && message_is_active) {
        a.stopPropagation();
        messageRequest.classList.remove('feedback-request--message--visible');
        messageRequest.classList.add('feedback-request--message--hidden');
        mainRequest.classList.remove('main--blurred');
        sideMenuRequest.classList.remove('side-menu--blurred');
    }
});


messageSubmit.addEventListener('click', function(evt) {
    evt.preventDefault();
})


callSubmit.addEventListener('click', function(evt) {
    evt.preventDefault();
})
