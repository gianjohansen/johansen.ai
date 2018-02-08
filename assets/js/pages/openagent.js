// initialise progress bar

var bar = new ProgressBar.Line("#progress", {
    strokeWidth: 2,
    easing: 'easeInOut',
    color: '#FFF',
    trailColor: '#666',
    trailWidth: 1,
    easing: 'linear',
    svgStyle: {width: '100%', height: '100%'}
});

// fade content on load

$(".gianjohansen-loader").fadeOut(400, function() {
    setTimeout(function() {
        $("body").addClass("bordered");
        $("#border-top, #border-right, #border-bottom, #border-left").addClass("active");

        setTimeout(function() {
            $(".context-page").fadeIn(function() {
                
            });
        }, 400);
    }, 400);
});

$(document).on("click", ".scroll-btn", function() {
    $(".context-page").first().animate({ scrollTop: $('.project').first().offset().top }, 600);
    return false;
});