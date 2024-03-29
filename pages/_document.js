import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import NoScript from '@components/NoScript';

export default function Document() {
  return (
    <Html lang="en" style={{ opacity: 0 }}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <NoScript />
        <Main />
        <NextScript />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js"
          strategy="afterInteractive"
        />
      </body>
    </Html>
  )
}
