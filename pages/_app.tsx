import 'reset-css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'

import Cursor from '@components/Cursor'

function MyApp({ Component, pageProps, router }: AppProps) {
  const url = `${router.route}`

  return (
    <>
      <Cursor />
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} key={url} />
      </AnimatePresence>
    </>
  )
}

export default MyApp
