// give video a couple seconds of buffer time
setTimeout(function() { 
  document.getElementById("preload").style.display = "none";
  document.body.style.background = "#eee";
  fadeIn(document.getElementById("hero"), 300);
}, 200);

// show about modal when triggered
document.getElementById("trigger-about").onclick = showModalAbout;

// utility to show about modal
var aboutModal = document.getElementById("about-modal");
function showModalAbout(e) {
  classie.add(aboutModal, 'md-show');

  // pause background video
  document.getElementById('hero-bg').pause();

  e.stopPropagation();
  return false;
}

// utility to hide about modal
function hideModalAbout() {
  classie.remove(aboutModal, 'md-show');

  // resume background video
  document.getElementById('hero-bg').play();

  return false;
}

// hide about modal on click
document.querySelector("body").onclick = hideModalAbout;

// hide about modal on escape
document.onkeydown = function(e) {
    e = e || window.event;
    if (e.keyCode == 27) {
        hideModalAbout();
    }
};

// utility for cross-browser fade
function fadeIn( elem, ms )
{
  if( ! elem )
    return;

  elem.style.opacity = 0;
  elem.style.filter = "alpha(opacity=0)";
  elem.style.display = "block";
  elem.style.visibility = "visible";

  if( ms )
  {
    var opacity = 0;
    var timer = setInterval( function() {
      opacity += 50 / ms;
      if( opacity >= 1 )
      {
        clearInterval(timer);
        opacity = 1;
      }
      elem.style.opacity = opacity;
      elem.style.filter = "alpha(opacity=" + opacity * 100 + ")";
    }, 50 );
  }
  else
  {
    elem.style.opacity = 1;
    elem.style.filter = "alpha(opacity=1)";
  }
}
