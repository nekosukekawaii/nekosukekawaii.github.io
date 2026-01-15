const menuBtn = document.getElementById('hamburger_menu--btn');
const drawer = document.getElementById('drawer');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('opened');
  drawer.classList.toggle('drawer-active');
});
