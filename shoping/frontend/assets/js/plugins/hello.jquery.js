(function ($) {
  $.fn.hello = function (options) {
    // Default options
    const defaults = {};

    const settings = $.extend({}, defaults, options);

    function doSomething() {
    }

    this.test = function () {
      console.log('test');
    }

    return this.each(function () {
      const $el = $(this);
      const { tagName } = $el.get(0);

      $el.html(`Tag name is ${tagName.toLowerCase()}, welcome to ${settings.name}`);
    });
  };
})(jQuery);