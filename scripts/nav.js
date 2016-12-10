
// Menubar
const nav = {
  nav: document.getElementById('nav'),
  button: document.getElementById('nav-btn'),
  closed: document.getElementById('closed'),
  menu: document.getElementById('nav-list'),
  logo: document.getElementById('logo'),
  navLink: document.getElementsByClassName('nav-link'),
  openCloseBool: true,
  openClose() {
    if (this.openCloseBool === false) {
      this.closed.classList.add('opened');
      this.nav.classList.add('nav-opened');
      this.toggleMenuOn();
    } else {
      this.closed.classList.remove('opened');
      this.nav.classList.remove('nav-opened');
      this.toggleMenuOff();
    }
  },
  toggleMenuOn() {

    this.menu.classList.add('toggle-menu-width-on');

    setTimeout(() => {
      this.menu.classList.add('toggle-menu-height-on');
      this.menu.classList.remove('toggle-menu-width-off');
      this.menu.classList.remove('toggle-menu-height-off');
    }, 100);

  },
  toggleMenuOff() {

    this.menu.classList.add('toggle-menu-height-off');
    setTimeout(() => {
      this.menu.classList.add('toggle-menu-width-off');
      this.menu.classList.remove('toggle-menu-height-off');
      this.menu.classList.remove('toggle-menu-width-on');
      this.menu.classList.remove('toggle-menu-height-on');
      setTimeout(() => {
        this.menu.classList.remove('toggle-menu-width-off');
      }, 401);

    }, 400);

  }
};

nav.button.addEventListener('click', () => {
  nav.openCloseBool = !nav.openCloseBool;
  nav.openClose();
});

  Array.from(nav.navLink).forEach(function(element) {
        element.addEventListener('click', () => {
          nav.openCloseBool = !nav.openCloseBool;
          nav.openClose();
        });
      });