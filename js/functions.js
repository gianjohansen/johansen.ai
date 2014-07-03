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