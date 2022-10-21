const navBarMenuBtn = document.querySelector('.nav-bar__round-menu');
const sideMenu = document.querySelector('.side-menu');

navBarMenuBtn.addEventListener('click', function() {
  sideMenu.classList.toggle('side-menu--hidden');
  sideMenu.classList.toggle('side-menu--visible');
})
