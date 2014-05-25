/* Rotate between roles in the navbar */

// dictionary of roles that will be cycled through
var roles = new Array();
roles[0] = ""; // blank role if string needs to be cleared
roles[1] = "Web Developer";
roles[2] = "Tinkerer";
roles[3] = "Software Engineer";
roles[4] = "University Student";
roles[5] = "Python Enthusiast";

var currentRole = 0;

// delay between "keystrokes"
var delay = 50;

// allow sleeping between role changes
function sleep(millis, callback) {
    setTimeout(function()
            { callback(); }
    , millis);
}

// function for changing roles
function changeRole() {

  // clear current role
  $("#who-am-i").html("I'm a ");

  // get role string
  var str = roles[currentRole];
  str = str.split("");
  if (currentRole != 0) {
    str.push(".");
    str.push(" ");
  }
  str.push("_");

  // add a span for each letter
  $.each(str, function (i, val) {
      if (val == "^") {
          // Do nothing. This will add to the delay.
      }
      else {
          $("#who-am-i").append('<span>' + val + '</span>');
          $("#who-am-i").children("span").hide().fadeIn(100).delay(delay * i);
      }
  });

  // make the underscore character blink
  $("#who-am-i").children("span:last").addClass("blink");
  
  // cycle through the roles every 4 seconds
  var sleepTime = 2000;
  if (currentRole != 0)
    sleepTime = 4000;

  currentRole++;

  // reset if we've reached our last role
  if (currentRole == roles.length)
    currentRole = 1;

  // loop over roles dictionary
  if (currentRole == 0) {
    sleep(sleepTime, changeRole);
  }
  else {
    sleep(sleepTime, changeRole);
  }
}

// begin changing roles
changeRole();

/* Change navbar opacity on scroll */
$(window).on('scroll',function(){
  // rounding here to reduce a little workload
  stop = Math.round($(window).scrollTop());
  if (stop > 0) {
      $('.navbar').addClass('past-main');
  } else {
      $('.navbar').removeClass('past-main');
  }
});

/* Scroll to top of page on navbar click */
$('#who-am-i').click(function () {
  $('body,html').animate({
    scrollTop: 0
  }, 500);
  return false;
});

/* Initialize contact modals */
$(document).ready(function () {
    $('#fade').popup({
      transition: 'all 0.3s',
      opacity: 0.7
    });
    $('#contact-success-modal').popup({
      transition: 'all 0.3s',
      opacity: 0.7
    });
});

/* Show contact modal on click*/
$(document).ready(function() {
  $("#contact-launch").on("click", function() {
    $('#fade').popup('show');
  });
});

/* Contact form submission */
$( document ).ready(function() {
  $('#contact-form').submit(function(form) {
    // validate form
    if ($("#contact-form").valid()) {
      $.ajax({
        dataType: 'jsonp',
        url: "http://getsimpleform.com/messages/ajax?form_api_token=eca2adb05b1ade6f67db49e9bdab0822",
        data: $('#contact-form').serialize() 
      }).done(function() {
        $('#fade').popup('hide');
        $('#contact-success-modal').popup('show');
      });
      return false;
    }
  });
});

/* Show contact modal */
$(document).ready(function() {
  $("#contact-success-modal .fade_close, #contact-success-modal_background, #contact-success-modal_wrapper").on("click", function() {
    $('#contact-success-modal').popup('hide');
  });
});

/* Show lightbox when a project is clicked */

$("#portfolio-cp").on("click", function(e) {
  $.colorbox({title:'Camperdown Program Online', href:'../img/screenshot-cp-2.png', scalePhotos:'true', height:"90%", maxHeight:"760px", fixed:true});
});
$("#portfolio-cp a").on("click", function(e) {
    e.stopPropagation();
});

$("#portfolio-sd").on("click", function(e) {
  $.colorbox({title:'Usyd Note Sharing', href:'../img/screenshot-sd-1.png', scalePhotos:'true', height:"90%", maxHeight:"760px", fixed:true});
});
$("#portfolio-sd a").on("click", function(e) {
    e.stopPropagation();
});

$("#portfolio-kc").on("click", function(e) {
  $.colorbox({title:'KnowledgeCareer', href:'../img/screenshot-kc-1.png', scalePhotos:'true', height:"90%", maxHeight:"760px", fixed:true});
});
$("#portfolio-kc a").on("click", function(e) {
    e.stopPropagation();
});

$("#portfolio-se").on("click", function(e) {
  $.colorbox({title:'Sydney Emeralds Synchronised Swimming', href:'../img/screenshot-se-1.png', scalePhotos:'true', height:"90%", maxHeight:"760px", fixed:true});
});
$("#portfolio-se a").on("click", function(e) {
    e.stopPropagation();
});