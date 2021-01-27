'use strict';

var nav = document.querySelector('.site-navigation');
var navToggle = document.querySelector('.main-header__toggle');

if (navToggle) {
  navToggle.classList.remove('main-header__toggle--nojs');
}

if (nav) {
  nav.classList.remove('site-navigation--nojs');

  navToggle.addEventListener('click', function (e) {
    e.preventDefault();
    nav.classList.toggle('site-navigation--open');
    navToggle.classList.toggle('main-header__toggle--active');
  });
}

var moveTo = new window.MoveTo({
  duration: 1000,
  easing: 'easeOutQuart',
});

var trigger = document.getElementsByClassName('js--about-us')[0];

moveTo.registerTrigger(trigger);
