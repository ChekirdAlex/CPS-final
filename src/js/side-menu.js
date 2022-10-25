if (window.innerWidth < 1440) {

const navBarMenuBtn = document.querySelector('.nav-bar__button-menu');
const closeBtn = document.querySelector('.side-header__button-close');
const sideMenu = document.querySelector('.side-menu');
const blurScreen = document.querySelector('.blur-screen');

navBarMenuBtn.addEventListener("click", function (evt) {
    evt.stopPropagation();
    sideMenu.classList.remove('side-menu--hidden');
    sideMenu.classList.add('side-menu--visible');
    blurScreen.classList.add('blur-screen--visible');
});

closeBtn.addEventListener("click", function (evt) {
    evt.stopPropagation();
    sideMenu.classList.remove('side-menu--visible');
    sideMenu.classList.add('side-menu--hidden');
    blurScreen.classList.remove('blur-screen--visible');
});

document.addEventListener("click", function (evt) {
    const target = evt.target;
    const its_sideMenu = target === sideMenu || sideMenu.contains(target);
    const menu_is_active = sideMenu.classList.contains("side-menu--visible");

    if (!its_sideMenu && menu_is_active) {
        sideMenu.classList.remove('side-menu--visible');
        sideMenu.classList.add('side-menu--hidden');
        blurScreen.classList.remove('blur-screen--visible');
    }
});
}
