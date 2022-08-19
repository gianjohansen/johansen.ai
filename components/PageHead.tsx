import React from 'react'
import Head from 'next/head'
import { setConfiguration } from 'react-grid-system'

interface PageHeadProps {
  title: string
}

const PageHead: React.FC<PageHeadProps> = ({ title }) => {
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
      <link rel="alternate" type="application/rss+xml" href="/rss/feed.xml" />
    </Head>
  )
}

export default PageHead
