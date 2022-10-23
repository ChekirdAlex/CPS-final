const navBarMenuBtn = document.querySelector('.nav-bar__button-menu');
const closeBtn = document.querySelector('.side-header__button-close');
const sideMenu = document.querySelector('.side-menu');

navBarMenuBtn.addEventListener('click', function() {
    sideMenu.classList.remove('side-menu--hidden');
    sideMenu.classList.add('side-menu--visible');
})

closeBtn.addEventListener('click', function() {
    sideMenu.classList.remove('side-menu--visible');
    sideMenu.classList.add('side-menu--hidden');
})

// if (window.innerWidth < 1440) {
//
//     const navBarMenuBtn = document.querySelector('.nav-bar__button-menu');
//     const closeBtn = document.querySelector('.side-header__button-close');
//     const sideMenu = document.querySelector('.side-menu');
//     const main = document.querySelector('.main');
//
//     navBarMenuBtn.addEventListener("click", function (e) {
//         e.stopPropagation();
//         sideMenu.classList.remove('side-menu--hidden');
//         sideMenu.classList.add('side-menu--visible');
//         main.classList.add('main--blurred');
//     });
//
//     closeBtn.addEventListener("click", function (e) {
//         e.stopPropagation();
//         sideMenu.classList.remove('side-menu--visible');
//         sideMenu.classList.add('side-menu--hidden');
//         main.classList.remove('main--blurred');
//     });
//
//     document.addEventListener("click", function (e) {
//         const target = e.target;
//         const its_sideMenu = target == sideMenu || sideMenu.contains(target);
//         const menu_is_active = sideMenu.classList.contains("side-menu--visible");
//
//         if (!its_sideMenu && menu_is_active) {
//             sideMenu.classList.remove('side-menu--visible');
//             sideMenu.classList.add('side-menu--hidden');
//             main.classList.remove('main--blurred');
//         }
//     });
// }
