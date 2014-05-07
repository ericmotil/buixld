// (function() {
//   // Float Label Pattern
//   $('.float-label input').on('blur', function(){
//     if( $(this).val() !== '' ){
//       $(this).next().addClass('stay');
//     } else {
//       $(this).next().removeClass('stay');
//     }
//   });

// })();
/*
 * JVFloat.js
 * modified by Colin Ambrose on: 02/03/2014 - MDY (US)
 */

(function($) {
  'use strict';

  // Init Plugin Functions
  $.fn.jvFloat = function() {
    // Check input type - filter submit buttons.
        return this.filter('input:not([type=submit]), textarea').each(function() {
      // Wrap the input in div.jvFloat
      function createIdOnElement($el) {
        var id = generateUIDNotMoreThan1million();

        $el.prop('id', id);

        return id;
      }
      var $el = $(this)
        .wrap('<div class=jvFloat>');

      var forId = $el.attr('id');
      if (!forId)
        forId = createIdOnElement($el);

      // Store the placeholder text in span.placeHolder
      // added `required` input detection and state
      var required = $el.attr('required') || '';
      var placeholder = $('<label class="placeHolder ' + required + '" for="' + forId + '">' + $el.attr('placeholder') + '</label>')
        .insertBefore($el);
      // checks to see if inputs are pre-populated and adds active to span.placeholder
      function setState() {
      // change span.placeHolder to span.placeHolder.active
        placeholder.toggleClass('active', $el.val() !== '');
      }
      setState();
      $el.bind('keyup blur', setState);
      function generateUIDNotMoreThan1million() {
        var id = ('0000' + (Math.random()*Math.pow(36,4) << 0).toString(36)).substr(-4);
        if (!!$('#' + id).length){
           return id;
        }
      }
    });
  };
// Make Zeptojs & jQuery Compatible
})(window.jQuery || window.Zepto || window.$);
// end JVFloat plugin

(function() {
    $('.float-label input').jvFloat();
})();
