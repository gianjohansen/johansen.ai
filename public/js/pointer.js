const $bigBall = document.querySelector('.cursor__ball--big')
const $smallBall = document.querySelector('.cursor__ball--small')
const $hoverables = document.querySelectorAll('.hoverable')

// Listeners
document.body.addEventListener('mousemove', onMouseMove)
for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener('mouseenter', onMouseHover)
  $hoverables[i].addEventListener('mouseleave', onMouseHoverOut)
}

// Move the cursor
function onMouseMove(e) {
  TweenMax.to($bigBall, 0.4, {
    x: e.x - 15,
    y: e.y - 15,
  })
  TweenMax.to($smallBall, 0.1, {
    x: e.x - 5,
    y: e.y - 15,
  })
}

// Hover an element
function onMouseHover() {
  TweenMax.to($bigBall, 0.3, {
    scale: 4,
  })
}
function onMouseHoverOut() {
  TweenMax.to($bigBall, 0.3, {
    scale: 1,
  })
}

function isScrolledIntoView(el) {
  var rect = el.getBoundingClientRect()
  var elemTop = rect.top
  var elemBottom = rect.bottom

  // Only completely visible elements return true:
  // var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
  // Partially visible elements return true:
  isVisible =
    (elemTop < window.innerHeight && elemBottom >= 0) ||
    window.scrollY > elemBottom
  return isVisible
}

var firstJob = document.getElementById('firstJob')
window.addEventListener(
  'scroll',
  () => {
    checkScrollClasses()
  },
  { passive: false },
)
function checkScrollClasses() {
  if (isScrolledIntoView(firstJob)) {
    if (!document.body.classList.contains('jobYearsVisible')) {
      document.body.classList.add('jobYearsVisible')
    }
  } else {
    if (document.body.classList.contains('jobYearsVisible')) {
      document.body.classList.remove('jobYearsVisible')
    }
  }
}
checkScrollClasses()
