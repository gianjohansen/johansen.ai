import React from 'react'
import Head from 'next/head'
import { setConfiguration } from 'react-grid-system'

function PageHead({ title }: { title: string }) {
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
      <title>{title}</title>
      <link rel="shortcut icon" href="/favicon.png" />
    </Head>
  )
}

export default PageHead
