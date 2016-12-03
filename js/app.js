'use strict';

var mainMenuBtn = document.querySelector('.main-nav__btn');
var mainMenu = document.querySelector('.main-nav__list');

mainMenuBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    mainMenu.classList.toggle('main-nav__list-opened');
});
