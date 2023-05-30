/**
 * Template Name: ShoppingFood
 * Updated: May 30, 2023, with Bootstrap v5.3.0
 * Template URL: https://example.com/shoppingfood/
 * Author: ShoppingFood
 * License: https://example.com/license/
 */

/**
 * General implementation
 */
(function () {
  'use strict';

  /*--------------------------------------------------------------
  # General
  --------------------------------------------------------------*/

  /**
   * Selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();

    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);

    if (selectEl) {
      if (all) {
        selectEl.forEach(el => el.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener);
  };

  /*--------------------------------------------------------------
  # Back to top button
  --------------------------------------------------------------*/
  let backToTop = select('.back-to-top');

  if (backToTop) {
    const toggleBackToTop = () => {
      if (window.scrollY > 100) {
        backToTop.classList.add('active');
      } else {
        backToTop.classList.remove('active');
      }
    };

    window.addEventListener('load', toggleBackToTop);
    onscroll(document, toggleBackToTop);
  }
})();

/**
 * jQuery implementation
 */
(function () {
  const ShoppingFood = {
    version: '1.0.0',
    PI: 3.14
  };

  ShoppingFood.init = function () {
    this.bindEvents();
  };

  ShoppingFood.bindEvents = function () {
    console.log('bindEvents');
  };

  ShoppingFood.doSomethings = function () {
    console.log('Do somethings');
  };

  $(document).ready(function () {
    ShoppingFood.init();

    // call a jquery plugin, example code
    const $secs = $('section').hello({
      name: 'javascript'
    });

    // call public method of plugin, example code
    $secs.test();

  });
})();