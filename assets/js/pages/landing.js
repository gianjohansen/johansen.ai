
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

// $('#fullpage').fullpage({
//     responsiveWidth: 768,
//     scrollingSpeed: 400,
//     responsiveSlides: true,
    
//     onLeave: function(index, nextIndex, direction) {
//         console.log(nextIndex);

//         if (nextIndex == 1) {
//             $(".two").removeClass("loaded");
//             $('.two .shot-one, .two .shot-two, .two .shot-three, .two .type, .two .heading, .two .description, .two .link, .two .contact-me').css('visibility', 'hidden');
//             $('.two .shot-one, .two .shot-two, .two .shot-three, .two .type, .two .heading, .two .description, .two .link, .two .contact-me').removeClass('fadeInUp');

//             setTimeout(function() {
//                 $(".one main").fadeIn(300);
//             }, 400);
//             setTimeout(function() {
//                 $(".one .scroll-btn, .one .intro").fadeIn(300);
//             }, 800);
//         }

//         if (nextIndex == 2) {
//             $(".one .scroll-btn, .one .intro, .one main").fadeOut(300);

//             setTimeout(function() {
//                 $(".two").addClass("loaded");

//                 setTimeout(function() {
//                     $('.two .shot-one').css('visibility', 'visible');
//                     $(".two .shot-one").addClass("fadeInUp");
//                 }, 300);
//                 setTimeout(function() {
//                     $('.two .shot-two').css('visibility', 'visible');
//                     $(".two .shot-two").addClass("fadeInUp");
//                 }, 350);
//                 setTimeout(function() {
//                     $('.two .shot-three').css('visibility', 'visible');
//                     $(".two .shot-three").addClass("fadeInUp");
//                 }, 400);
//                 setTimeout(function() {
//                     $('.two .type').css('visibility', 'visible');
//                     $(".two .type").addClass("fadeInUp");
//                 }, 800);
//                 setTimeout(function() {
//                     $('.two .heading').css('visibility', 'visible');
//                     $(".two .heading").addClass("fadeInUp");
//                 }, 800);
//                 setTimeout(function() {
//                     $('.two .description').css('visibility', 'visible');
//                     $(".two .description").addClass("fadeInUp");
//                 }, 800);
//                 setTimeout(function() {
//                     $('.two .link').css('visibility', 'visible');
//                     $(".two .link").addClass("fadeInUp");
//                 }, 1000);
//                 setTimeout(function() {
//                     $('.two .contact-me').css('visibility', 'visible');
//                     $(".two .contact-me").addClass("fadeInUp");
//                 }, 1200);
//             }, 600);
//         }
//     },
// });

// control loaders

setTimeout(function() {
    $('.gianjohansen-loader .status').css('visibility', 'visible');
    $('.gianjohansen-loader .status').addClass('fadeInUp');
}, 300);  
setTimeout(function() {
    $('.gianjohansen-loader .progress').css('visibility', 'visible');
    $('.gianjohansen-loader .progress').addClass('fadeIn');
}, 800);  

// control progress bar

setTimeout(function() {
    bar.animate(1.0, {
        duration: 1900
    }, function() {
        setTimeout(function() {
            $(".gianjohansen-loader").fadeOut(400, function() {
                setTimeout(function() {
                    $("body").addClass("bordered");
                    $("#border-top, #border-right, #border-bottom, #border-left").addClass("active");

                    setTimeout(function() {
                        $(".gianjohansen").fadeIn(function() {
                            
                        });
                    }, 400);
                }, 400);
            });
        }, 200);
    });
}, 1800);

setTimeout(function() {
    var headID = document.getElementsByTagName("head")[0];         
    var newScript = document.createElement('script');
    newScript.type = 'text/javascript';
    newScript.src = '/assets/js/particles/index.bundle.js';
    headID.appendChild(newScript);
}, 5000);

setTimeout(function() {
    $('.intro').fadeIn();
}, 6000);

$(document).on("click", ".scroll-btn", function() {
    $.fn.fullpage.moveSectionDown();
    return false;
});
