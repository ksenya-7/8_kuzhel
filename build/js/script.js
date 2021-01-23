'use strict';
var nav = document.querySelector('.site-navigation');
var navToggle = document.querySelector('.main-header__toggle');


if (nav) {
  nav.classList.remove('site-navigation--nojs');

  navToggle.addEventListener('click', function (e) {
    e.preventDefault();
    nav.classList.toggle('site-navigation--open');
    navToggle.classList.toggle('main-header__toggle--active');
  });
}

// document.querySelector('body').classList.add('site-navigation--open');
