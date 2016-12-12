"use strict";

$.fn.inView = function () {
  //Window Object
  var win = $(window);
  //Object to Check
  var obj = $(this);
  //the top Scroll Position in the page
  var scrollPosition = win.scrollTop();
  //the end of the visible area in the page, starting from the scroll position
  var visibleArea = win.scrollTop() + win.height();
  //the end of the object to check
  var objEndPos = obj.offset().top + obj.outerHeight();
  return visibleArea >= objEndPos && scrollPosition <= objEndPos ? true : false;
};

var fill = function fill(el, perc) {
  el.attr('data-progress', perc * 100);
};

$(document).scroll(function () {
  if ($(".radial-progress").inView()) {
    setTimeout(function () {
      fill($(".radial-progress"), 0.39);
    }, 600);
  }

  if ($(".radial-progress-1").inView()) {
    setTimeout(function () {
      fill($(".radial-progress-1"), 0.54);
    }, 1000);
  }
  if ($(".radial-progress-2").inView()) {
    setTimeout(function () {
      fill($(".radial-progress-2"), 0.79);
    }, 1540);
  }
  if ($(".re-inner").inView()) {
    setTimeout(function () {
      $('.re-heading').slideDown('normal');
      $('#reduce-rect').addClass('rect-anim');
      $('.arrows').addClass('arrows-anim');
      $('.re-paragraph').slideDown('slow');
    }, 500);
  }
});

// $('head style[type="text/css"]').attr('type', 'text/less');
// less.refreshStyles();


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