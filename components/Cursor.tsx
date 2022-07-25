import React from 'react'
import Script from 'next/script'

function Cursor() {
  return (
    <div className="cursor">
      <div className="cursor__ball cursor__ball--big ">
        <svg height={90} width={90}>
          <circle cx={15} cy={15} r={15} strokeWidth={0} />
        </svg>
      </div>
      <div className="cursor__ball cursor__ball--small">
        <svg height={10} width={10}>
          <circle cx={5} cy={5} r={4} strokeWidth={0} />
        </svg>
      </div>
      <Script id="show-banner">
        {`
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
          `}
      </Script>
    </div>
  )
}

export default Cursor
