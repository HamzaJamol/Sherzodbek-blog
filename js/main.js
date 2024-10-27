const modifiers = {
  elsiteHeaderOpen: 'site-header--open'
}

const elsiteHeader = document.querySelector('.site-header');
const elsiteHeaderToggler = elsiteHeader.querySelector('.site-header__toggler');

if (elsiteHeaderToggler) {
  elsiteHeaderToggler.addEventListener('click', function () {
    elsiteHeader.classList.toggle(modifiers.elsiteHeaderOpen);
  });
}
