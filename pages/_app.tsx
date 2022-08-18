import 'reset-css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'

import Cursor, { showLoader, hideLoader } from '@components/Cursor'

function MyApp({ Component, pageProps, router }: AppProps) {
  const url = `${router.route}`

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      showLoader();
    });
    router.events.on("routeChangeComplete", () => {
      hideLoader();
    });
  }, [router.events]);

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
