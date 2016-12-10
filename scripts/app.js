'use strict';

$(document).ready(function () {
  // $('head style[type="text/css"]').attr('type', 'text/less');
  // less.refreshStyles();
  window.randomize = function (perc) {
    $('.radial-progress').attr('data-progress', perc * 100);
  };
  setTimeout(window.randomize(0.54), 200);
  $('.radial-progress').click(window.randomize);
});

// Menubar
var nav = {
  nav: document.getElementById('nav'),
  button: document.getElementById('nav-btn'),
  closed: document.getElementById('closed'),
  menu: document.getElementById('nav-list'),
  logo: document.getElementById('logo'),
  navLink: document.getElementsByClassName('nav-link'),
  openCloseBool: true,
  openClose: function openClose() {
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
  toggleMenuOn: function toggleMenuOn() {
    var _this = this;

    this.menu.classList.add('toggle-menu-width-on');

    setTimeout(function () {
      _this.menu.classList.add('toggle-menu-height-on');
      _this.menu.classList.remove('toggle-menu-width-off');
      _this.menu.classList.remove('toggle-menu-height-off');
    }, 100);
  },
  toggleMenuOff: function toggleMenuOff() {
    var _this2 = this;

    this.menu.classList.add('toggle-menu-height-off');
    setTimeout(function () {
      _this2.menu.classList.add('toggle-menu-width-off');
      _this2.menu.classList.remove('toggle-menu-height-off');
      _this2.menu.classList.remove('toggle-menu-width-on');
      _this2.menu.classList.remove('toggle-menu-height-on');
      setTimeout(function () {
        _this2.menu.classList.remove('toggle-menu-width-off');
      }, 401);
    }, 400);
  }
};

nav.button.addEventListener('click', function () {
  nav.openCloseBool = !nav.openCloseBool;
  nav.openClose();
});

Array.from(nav.navLink).forEach(function (element) {
  element.addEventListener('click', function () {
    nav.openCloseBool = !nav.openCloseBool;
    nav.openClose();
  });
});