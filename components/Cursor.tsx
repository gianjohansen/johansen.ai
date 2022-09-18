import React from 'react'
import Script from 'next/script'

export const showLoader = () => {
  document.body.classList.add('show-loader')
}

export const hideLoader = () => {
  document.body.classList.remove('show-loader')
}

const Cursor: React.FC<{}> = () => {
  return (
    <div className="cursor hidden">
      <div className="cursor__ball cursor__ball--big ">
        <svg height={100} width={100}>
          <circle cx={16} cy={16} r={16} strokeWidth={0} />
        </svg>
      </div>
      <div className="cursor__ball cursor__ball--small">
        <svg height={10} width={10}>
          <circle cx={5} cy={5} r={4} strokeWidth={0} />
        </svg>
      </div>
      <span className="loader cursor__ball"></span>
      <Script id="show-banner">
        {`
            const $bigBall = document.querySelector('.cursor__ball--big')
            const $smallBall = document.querySelector('.cursor__ball--small')
            const $loader = document.querySelector('.loader')

            // Listeners
            document.body.addEventListener('mousemove', onMouseMove)

            // Move the cursor
            function onMouseMove(e) {
              TweenMax.to($bigBall, 0.4, {
                x: e.x - 14,
                y: e.y - 15,
              })  
              TweenMax.to($smallBall, 0.1, {
                x: e.x - 3,
                y: e.y - 4,
              })
              TweenMax.to($loader, 0.4, {
                x: e.x + 2,
                y: e.y,
              })
              const cursorClasses = document.querySelector('.cursor')?.classList;
              if (cursorClasses?.contains('hidden')) {
                setTimeout(() => {
                  cursorClasses.remove('hidden');
                }, 300);
              }
            }
          `}
      </Script>
    </div>
  )
}

export default Cursor
