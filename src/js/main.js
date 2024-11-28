/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */
// import { MousePRLX } from './libs/parallaxMouse'
// import AOS from 'aos'
// import Swiper, { Navigation, Pagination } from 'swiper';

import Swiper from 'swiper/bundle';

import { BaseHelpers } from './helpers/base-helpers';
// import { PopupManager } from './modules/popup-manager';
// import { BurgerMenu } from './modules/burger-menu';
// import { Tabs } from './modules/tabs';
// import { Accordion } from './modules/accordion';

BaseHelpers.checkWebpSupport ();

BaseHelpers.calcScrollbarWidth ();

BaseHelpers.addTouchClass ();

// BaseHelpers.headerFixed();

/**
 * Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * На кнопку, которая вызывает окно повешай атрибут data-type="<название окна>"

 * На обертку(.popup) окна добавь атрибут '[data-close-overlay]'
 * На кнопку для закрытия окна добавь класс '.button-close'
 * */
// new PopupManager();

/**
 *  Модуль для работы с меню (Бургер)
 * */
// new BurgerMenu().init();

/**
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 * */
// AOS.init();

/**
 * Параллакс мышей
 * */
// new MousePRLX();

const freeSlider = new Swiper ('.hero-slider', {
	slidesPerView: 1,
	spaceBetween: 30,
	autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
	  navigation: {
		nextEl: '.hero-next',
		prevEl: '.hero-prev',
	  },
	  pagination: {
		el: '.hero-pagination',
		clickable: true,
	  },
  });

  var programsNav = new Swiper ('.programs-nav', {
	spaceBetween: 24,
	slidesPerView: 10,
	freeMode: true,
	watchSlidesProgress: true,
  });
  var programsImg = new Swiper ('.programs-img', {
	spaceBetween: 64,
	allowTouchMove: false,
	thumbs: {
	  swiper: programsNav,
	},
  });

  const proffesionalSlider = new Swiper ('.proffesional-slider', {
	slidesPerView: 1,
	spaceBetween: 24,
	initialSlide: 2,
	centeredSlides: true,
	breakpoints:{
		576:{
			slidesPerView: 1.8,
		},
		1199:{
			slidesPerView: 2.1,
		},
		1399:{
			slidesPerView: 3.1,
		},
	},
	  navigation: {
		nextEl: '.proffesional-next',
		prevEl: '.proffesional-prev',
	  },
	  pagination: {
		el: '.proffesional-pagination',
		clickable: true,
	  },
  });
