
$(document).on("click", ".link-info", function() {
    $(".modal-info .hidden").hide();
    $(".modal-info .link-expand").show();
    $(".modal-info").modal({
        fadeDuration: 250
    });
    return false;
});

$(document).on("click", ".link-expand", function() {
    $(".modal-info .hidden").fadeIn();
    $(this).hide();
    return false;
});

$(".link-asteroids").click(function() {
    if ($(window).width() < 768) {
        $(".modal-warning").modal({
            fadeDuration: 250
        });
        return;
    }

    $(".container").fadeOut(function() {
        $(".asteroids").css("opacity", "1");
        startAsteroids();
    });
});

var waves = new SineWaves({
    el: document.getElementById("waves-animation"),
    width: function() {
        return window.innerWidth
    },
    height: function() {
        return 600
    },
    speed: 4,
    rotate: 0,
    ease: "SineIn",
    wavesWidth: "100%",
    waves: [{
        timeModifier: 1,
        lineWidth: 1,
        amplitude: -180,
        wavelength: 120
    }, {
        timeModifier: 1,
        lineWidth: 1,
        amplitude: -240,
        wavelength: 160
    }, {
        timeModifier: 1,
        lineWidth: 2,
        amplitude: -300,
        wavelength: 140
    }, {
		timeModifier: 1,
		lineWidth: 2,
		amplitude: -60,
		wavelength: 100
    }, {
		timeModifier: 0.5,
		lineWidth: 3,
		amplitude: -220,
		wavelength: 200
    }, {
		timeModifier: 0.25,
		lineWidth: 4,
		amplitude: -420,
		wavelength: 400
    }, {
		timeModifier: 0.75,
		lineWidth: 4,
		amplitude: -380,
		wavelength: 300
    }],
    resizeEvent: function() {

        // fade to right of screen
        var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
        gradient.addColorStop(0,"#A7CFF2");
        gradient.addColorStop(0.5,"#A7CFF2");
        gradient.addColorStop(1,"rgba(0, 0, 0, 0)");

        var index = -1;
        var length = this.waves.length;
          while(++index < length){
          this.waves[index].strokeStyle = gradient;
        }
        
    }
});