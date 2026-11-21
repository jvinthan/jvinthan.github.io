'use strict';
const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-nav');
if (menu && navigation) {
  menu.hidden = false;
  const mobile = window.matchMedia('(max-width: 900px)');
  const closeMenu = () => {
    menu.setAttribute('aria-expanded', 'false');
    navigation.classList.toggle('nav-collapsed', mobile.matches);
  };
  closeMenu();
  mobile.addEventListener('change', closeMenu);
  menu.addEventListener('click', () => {
    const expanded = menu.getAttribute('aria-expanded') === 'true';
    menu.setAttribute('aria-expanded', String(!expanded));
    navigation.classList.toggle('nav-collapsed', expanded);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menu.focus();
    }
  });
}
