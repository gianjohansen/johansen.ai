$("#nav-arrow-skills").click(function() {
    $('html, body').stop(true, true).animate({
        scrollTop: $("#skills").offset().top - 12
    }, 2000);
    return false;
});
$("#nav-arrow-portfolio").click(function() {
    $('html, body').stop(true, true).animate({
        scrollTop: $("#portfolio").offset().top - 12
    }, 2000);
    return false;
});
$("#nav-arrow-contact, #navbar-contact").click(function() {
    $('html, body').stop(true, true).animate({
        scrollTop: $("#contact").offset().top - 12
    }, 2000);
    return false;
});
$("#navbar-brand-wrapper").click(function() {
    $('html, body').stop(true, true).animate({
        scrollTop: 0
    }, 2000);
    return false;
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
        $('#contact-form button').css("background-color", "#27ae60");
        $('#contact-form button').html("<i class='fa fa-check'></i>");
      });
      return false;
    }
  });
});