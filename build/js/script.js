'use strict';
var nav = document.querySelector('.main-header');
var navToggle = document.querySelector('.main-header__toggle');

nav.classList.remove('main-header--nojs');

navToggle.addEventListener('click', function () {
  if (nav) {
    nav.classList.toggle('main-nav--open');
  }
});
