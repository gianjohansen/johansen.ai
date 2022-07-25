import React from 'react'
import Head from 'next/head'
import Script from 'next/script'
import { setConfiguration } from 'react-grid-system'

function PageHead() {
  const maxWidth = 1900
  setConfiguration({
    // breakpoints: [576, 768, 992, 1200, 1600, 1920],
    containerWidths: [
      maxWidth,
      maxWidth,
      maxWidth,
      maxWidth,
      maxWidth,
      maxWidth,
    ],
    gutterWidth: 20,
  })

  return (
    <Head>
      <title>Gian Johansen &bull; Web Developer</title>
    </Head>
  )
}

export default PageHead
