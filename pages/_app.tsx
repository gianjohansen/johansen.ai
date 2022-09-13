import React, { useState, useEffect } from 'react'
import 'reset-css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'

import Cursor, { showLoader, hideLoader } from '@components/Cursor'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function MyApp({ Component, pageProps, router }: AppProps) {
  const [lastRoute, setLastRoute] = useState(router.route)

  const url = `${router.route}`

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      showLoader()
    })
    router.events.on('routeChangeComplete', () => {
      hideLoader()
    })
  }, [router.events])

  return (
    <>
      <Cursor />
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => {
          window.scrollTo(0, 0)

          // if this is not the landing page then reinit the horizontal scroll
          if (lastRoute !== router.route) {
            ScrollTrigger.refresh()
            setLastRoute(router.route)
          }

          hideLoader()
        }}
      >
        <Component {...pageProps} key={url} />
      </AnimatePresence>
    </>
  )
}

export default MyApp
