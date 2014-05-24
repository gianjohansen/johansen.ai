/* Rotating Dialog */

// create roles that will be cycled through
var roles = new Array();
roles[0] = "";
roles[1] = "Web Developer";
roles[5] = "Tinkerer";
roles[2] = "Software Engineer";
roles[3] = "Student";
roles[4] = "Node.js Enthusiast";

var currentRole = 0;

var delay = 50;

// function for delay between strng changes
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
  if (currentRole != 0) str.push(".");
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

  $("#who-am-i").children("span:last").addClass("blink");
  
  // cycle through the roles every 3 seconds
  var sleepTime = 2000;
  if (currentRole != 0)
    sleepTime = 4000;

  currentRole++;

  if (currentRole == 6)
    currentRole = 1;
  
  if (currentRole == 0) {
    sleep(sleepTime, changeRole);
  }
  else {
    sleep(sleepTime, changeRole);
  }
}

changeRole();



/* Change navbar opacity */
$(window).on('scroll',function(){
  // we round here to reduce a little workload
  stop = Math.round($(window).scrollTop());
  if (stop > 0) {
      $('.navbar').addClass('past-main');
  } else {
      $('.navbar').removeClass('past-main');
  }
});

/* Scroll to top of page */
$('#who-am-i').click(function () {
  $('body,html').animate({
    scrollTop: 0
  }, 500);
  return false;
});

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

/* Show contact modal */
$(document).ready(function() {
  $("#contact-launch").on("click", function() {
    $('#fade').popup('show');
  });
});

// set up contact modals when page loads
$( document ).ready(function() {
  $('#contact-form').submit(function(form) {
  $.ajax({
    dataType: 'jsonp',
    url: "http://getsimpleform.com/messages/ajax?form_api_token=eca2adb05b1ade6f67db49e9bdab0822",
    data: $('#contact-form').serialize() 
    }).done(function() {
      $('#fade').popup('hide');
      $('#contact-success-modal').popup('show');
    });
    return false; //to stop the form from submitting
  });
});

/* Show contact modal */
$(document).ready(function() {
  $("#contact-success-modal .fade_close, #contact-success-modal_background, #contact-success-modal_wrapper").on("click", function() {
    $('#contact-success-modal').popup('hide');
  });
});