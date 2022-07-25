import 'reset-css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'

import Nav from '@components/Nav'
import Cursor from '@components/Cursor'
import Head from '@components/Head'

function MyApp({ Component, pageProps, router }: AppProps) {
  const url = `https://wallis.dev${router.route}`

  return (
    <>
      <Head />
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
