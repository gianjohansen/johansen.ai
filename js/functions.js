/* "Scroll to" links */
$("#nav-arrow-skills").click(function() {
    $('html, body').stop(true, true).animate({
        scrollTop: $("#skills").offset().top
    }, 2000);
    return false;
});
$("#nav-arrow-contact, #navbar-contact").click(function() {
    $('html, body').stop(true, true).animate({
        scrollTop: $("#contact-header").offset().top
    }, 2000);
    return false;
});