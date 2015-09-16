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

        // fade in all content
        $("#intro h1, #intro #contact-me, #intro #scrolldown-wrapper, #about h2, #work h2").addClass("fadeInUp");
        $("#work #openagent-browser").addClass("fadeInUp");
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

}, 2000);
