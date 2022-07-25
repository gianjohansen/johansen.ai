import 'reset-css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Footer from '@components/Footer'
import Nav from '@components/Nav'
import Cursor from '@components/Cursor'
import Head from '@components/Head'
import Writing from '@components/Writing'
import Contact from '@components/Contact'

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
