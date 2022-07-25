import 'reset-css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Footer from '@components/Footer/Footer'
import Nav from '@components/Nav/Nav'
import Cursor from '@components/Cursor/Cursor'
import Head from '@components/Head/Head'
import Writing from '@components/Writing/Writing'
import Contact from '@components/Contact/Contact'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <Nav />
      <Cursor />
      <Component {...pageProps} />
      <Writing />
      <Contact />
      <Footer />
    </>)
}

export default MyApp
