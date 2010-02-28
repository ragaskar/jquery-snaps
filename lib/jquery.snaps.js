(function($) {
  $.fn.snaps = function(selector) {
    var targetImg = this;
      $(selector).mouseover(function() {
        targetImg.attr("src", $(this).attr("rel"));
      });
  }
})(jQuery);