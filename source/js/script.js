'use strict';
// маска для ввода номера телефона
var COUNTRY_CODE = '+7';
var length = COUNTRY_CODE.length;

var onInputPhoneInput = function (e) {
  var matrix = COUNTRY_CODE + '(___) ___ __ __';
  var def = matrix.replace(/\D/g, '');
  var i = 0;
  var val = e.target.value.replace(/\D/g, '');
  if (def.length >= val.length) {
    val = def;
  }
  e.target.value = matrix.replace(/./g, function (a) {
    if (/[_\d]/.test(a) && i < val.length) {
      return val.charAt(i++);
    } else if (i >= val.length) {
      return '';
    } else {
      return a;
    }
  });
};

var onFocusPhoneInput = function (e) {
  if (!e.target.value) {
    e.target.value = COUNTRY_CODE;
    e.target.addEventListener('input', onInputPhoneInput);
    e.target.addEventListener('blur', onBlurPhoneInput);
    e.target.addEventListener('keydown', onKeydownPhoneInput);
  }
};

var onKeydownPhoneInput = function (e) {
  if (e.target.selectionStart <= length && e.keyCode !== 8 && e.keyCode !== 46) {
    e.target.setSelectionRange(length, length);
  }
  if ((e.target.selectionStart === length || e.target.selectionStart === 1) && e.keyCode === 8) {
    e.preventDefault();
  }
  if (e.target.selectionStart === 1 && e.keyCode === 46) {
    e.preventDefault();
  }
};

var onBlurPhoneInput = function (e) {
  if (e.target.value === COUNTRY_CODE) {
    e.target.value = '';
    e.target.removeEventListener('input', onInputPhoneInput);
    e.target.removeEventListener('blur', onBlurPhoneInput);
  }
};

var initPhoneMask = function () {
  var phoneInputs = document.querySelectorAll('[data-type="tel"]');
  if (phoneInputs.length) {
    phoneInputs.forEach(function (input) {
      input.addEventListener('focus', onFocusPhoneInput);
    });
  }
};

initPhoneMask();

// управление меню при навигации и скролл
var body = document.querySelector('body');
var nav = document.querySelector('.site-navigation');
var navToggle = document.querySelector('.main-header__toggle');
var links = document.querySelectorAll('.site-navigation__link');

if (navToggle) {
  navToggle.classList.remove('main-header__toggle--nojs');
}

if (nav) {
  nav.classList.remove('site-navigation--nojs');

  navToggle.addEventListener('click', function (e) {
    e.preventDefault();
    body.classList.toggle('scroll-lock');
    nav.classList.toggle('site-navigation--open');
    navToggle.classList.toggle('main-header__toggle--active');
  });
}

if (links) {
  links.forEach(function (element) {
    element.addEventListener('click', function () {
      body.classList.remove('scroll-lock');
      nav.classList.remove('site-navigation--open');
      navToggle.classList.remove('main-header__toggle--active');
    });
  });
}


// валидация полей формы
var MIN_TEXT_LENGTH = 3;
var TEL_LENGTH = 17;
var textInput = document.querySelector('.main-header__item input[type="text"]');
var telInput = document.querySelector('.main-header__item input[type="tel"]');
var buttonSubmit = document.querySelector('.main-header__button');


if (buttonSubmit) {
  buttonSubmit.addEventListener('click', function (evt) {
    if (textInput) {
      var text = textInput.value;
      var isLengthOfText = text.length < MIN_TEXT_LENGTH;
    }
    if (telInput) {
      var tel = telInput.value;
      var isLengthOfTel = tel.length !== TEL_LENGTH;
    }

    if (isLengthOfText) {
      evt.preventDefault();
      textInput.classList.add('js-invalid');
    } else if (isLengthOfTel) {
      evt.preventDefault();
      telInput.classList.add('js-invalid');
    } else {
      textInput.classList.remove('js-invalid');
      telInput.classList.remove('js-invalid');
    }

    textInput.reportValidity();
    telInput.reportValidity();
  });
}
