import React from 'react'
import Head from 'next/head'
import { setConfiguration } from 'react-grid-system'

const PageHead: React.FC<{}> = () => {
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
      <link rel="shortcut icon" href="/favicon.svg" />
      <link rel="alternate" type="application/rss+xml" href="/rss/feed.xml" />
    </Head>
  )
}

export default PageHead
