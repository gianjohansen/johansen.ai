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
