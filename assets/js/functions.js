
// modal handling

var ModalEffects = (function() {

  function init() {

    var overlay = document.querySelector( '.md-overlay' );

    [].slice.call( document.querySelectorAll( '.md-trigger' ) ).forEach( function( el, i ) {
      var modal = document.querySelector( '#' + el.getAttribute( 'data-modal' ) ),
        close = modal.querySelector( '.md-close' );

      // hide modal
      function removeModal( hasPerspective ) {
        $(modal).removeClass( 'md-show' );
        if( hasPerspective ) {
          $(document.documentElement).removeClass( 'md-perspective' );
        }
      }

      // hide modal
      function removeModalHandler() {
        removeModal( $(el).hasClass( 'md-setperspective' ) );
      }

      // show modal on trigger
      el.addEventListener( 'click', function( ev ) {
        $(modal).addClass( 'md-show' );
        overlay.removeEventListener( 'click', removeModalHandler );
        overlay.addEventListener( 'click', removeModalHandler );

        if( $(el).hasClass( 'md-setperspective' ) ) {
          setTimeout( function() {
            $(document.documentElement).addClass( 'md-perspective' );
          }, 25 );
        }
      });

      // close modal on background click
      close.addEventListener( 'click', function( ev ) {
        ev.stopPropagation();
        removeModalHandler();
      });

    } );

  }

  init();

})();

$(document).ready(function() {

  // show the next section
  $("#start-coding").click(function() {

    // queue the fadein
    $("#portfolio .vertical").removeClass("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend");
    $("#portfolio .vertical").addClass("rollOut");
    $('#portfolio .vertical').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      $("#portfolio").hide();
      $("#playground").fadeIn();
    });

    return false;
  });
});
