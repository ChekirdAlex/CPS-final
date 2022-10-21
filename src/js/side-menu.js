const navBarMenuBtn = document.querySelector('.nav-bar__round-menu');
const closeBtn = document.querySelector('.side-header__round-close');
const sideMenu = document.querySelector('.side-menu');

navBarMenuBtn.addEventListener('click', function() {
  sideMenu.classList.remove('side-menu--hidden');
  sideMenu.classList.add('side-menu--visible');
})

closeBtn.addEventListener('click', function() {
  sideMenu.classList.remove('side-menu--visible');
  sideMenu.classList.add('side-menu--hidden');
})

