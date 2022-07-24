const $bigBall = document.querySelector('.cursor__ball--big')
const $smallBall = document.querySelector('.cursor__ball--small')

// Listeners
document.body.addEventListener('mousemove', onMouseMove)

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
