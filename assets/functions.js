// utility for cross-browser fade
function fadeIn( elem, ms )
{
  if( ! elem )
    return;

  // make sure element is hidden
  elem.style.opacity = 0;
  elem.style.filter = "alpha(opacity=0)";
  elem.style.display = "block";
  elem.style.visibility = "visible";

  // timed fade
  if( ms )
  {
    var opacity = 0;

    // slowly fade in
    var timer = setInterval( function() {
      opacity += 50 / ms;

      // stop fading when finished
      if( opacity >= 1 )
      {
        clearInterval(timer);
        opacity = 1;
      }
      elem.style.opacity = opacity;
      elem.style.filter = "alpha(opacity=" + opacity * 100 + ")";
    }, 50 );
  }

  // show instantly when no time specified
  else
  {
    elem.style.opacity = 1;
    elem.style.filter = "alpha(opacity=1)";
  }
}

// utility for cross-browser viewport width
function getViewportSize(w) {

    w = w || window;

    // all modern browsers
    if (w.innerWidth != null) return { w: w.innerWidth, h: w.innerHeight };

    // ie 8+ (standards mode)
    var d = w.document;
    if (document.compatMode == "CSS1Compat")
        return { w: d.documentElement.clientWidth,
           h: d.documentElement.clientHeight };

    // ie 8+ (quirks mode)
    return { w: d.body.clientWidth, h: d.body.clientHeight };

}

// give video a couple seconds of buffer time
setTimeout(function() {

  // fade in content
  document.getElementById("preload").style.display = "none";
  document.body.style.background = "#eee";
  fadeIn(document.getElementById("content-wrapper"), 300);

  // arrow onclick
  $("#scrolldown-wrapper").click(function() {
    $('html, body').stop().animate({
      scrollTop: $("#about").offset().top
    }, 500);
  });

  // pin browser on tablet and above
  var viewport = getViewportSize();
  if (viewport.w >= 600 && viewport.h >= 650) {
    initPin();
  }

  // fix layout for mobile screens
  else {
    // fix heights in the work section
    $(".project-container .browser").css("height", "auto");
    $(".project-container .browser .screenshot-oa").css("height", ($(".screenshot-oa").width() * 1.48));
    $("#work").css("height", "auto");
  }

  // fix layout on resize
  $(document).ready(function(){
    $(window).resize(function(){

      // flatten the layout
      $(".project-container .browser").css("height", "auto");
      $(".project-container .browser .screenshot-oa").css("height", ($(".screenshot-oa").width() * 1.48));
      $("#work").css("height", "auto");
      $(".project-container .browser .screenshot-oa").css("background-position-y", "0");

      // destroy pin
      scene.removePin(true);
      scene.remove();
      controller.enabled(false);
      controller.destroy();

    });
  });

}, 2000);

// pin controller and object
var controller;
var scene;

// pin the browser as it scrolls
function initPin() {

	controller = new ScrollMagic.Controller();

  // calculate relative height of browser
  var browserWidth = $(".screenshot-oa").width();
  var browserHeight = browserWidth * 1.48;

  // pin
  scene = new ScrollMagic.Scene({triggerElement: "#openagent-browser", offset: 300, duration: (browserHeight - $(".screenshot-oa").height() + 30)})
          .setPin("#openagent-browser")
          .addTo(controller);

  var sceneStarted = false;
  var start;

  // set height of work section
  var totalWorkHeight = $(".project-container").outerHeight();
  $("#work").css("height", totalWorkHeight + 96);

  scene.on("progress", function (event) {

    if (event.scrollDirection != "PAUSED") {
      // set start position
      start = scene.scrollOffset();

      // begin scrolling
      sceneStarted = true;
    }
    else {
      // stop scrolling
      sceneStarted = false;
    }

  });

  scene.on("update", function (event) {

    // update mini browser as the real browser scrolls
    if (sceneStarted) {
      var scroll = event.scrollPos;
      var scrollOffset = scroll-start;

      // set to 0 if we've scrolled above the browser
      if (scroll < start) {
        $(".screenshot-oa").css("background-position-y", "0px");
      }

      // otherwise set the offset position
      else {
        if (sceneEnded == false) {
          $(".screenshot-oa").css("background-position-y", "-"+scrollOffset+"px");
        }
      }
    }

  });

  var sceneEnded = false;
  scene.on("end", function (event) {

    // if we've scrolled past the pin, end it
    if (event.scrollDirection == "FORWARD") {
      sceneEnded = true;
      $(".screenshot-oa").css("background-position-y", "-"+(browserHeight-$("#openagent-browser").height() + $(".chrome").height())+"px");
    }

    // otherwise scrolling is enabled
    else {
      sceneEnded = false;
    }

  });
}
