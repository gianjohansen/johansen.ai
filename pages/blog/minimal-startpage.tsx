import type { NextPage } from 'next'
import styles from '@styles/Home.module.css'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { obsidian } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { Container, Row, Col } from 'react-grid-system'
import Layout from '@components/Layout'
import StaticOutro from '@components/StaticOutro'

const MinimalStartpage: NextPage = () => {
  return (
    <Layout title="A beautiful Firefox startpage and some common relevant gotchas">
      <div className={styles.blogContainer}>
        <Container>
          <Row justify="center">
            <Col xl={8}>
              <div className={styles.blogCategories}>
                <div className={styles.blogCategory}>Web</div>
                <div className={styles.blogCategory}>Firefox</div>
              </div>
              <h1 className={styles.genericHeading}>
                A beautiful Firefox startpage and some common relevant gotchas
              </h1>
              <p>
                Let's face it, most startpages are noisy and cluttered.
              </p>
            </Col>
          </Row>
          <Row justify="center">
            <Col xl={8}>
              <img
                className={styles.blogHero}
                src="/images/blog-4-c.jpg"
              />
            </Col>
          </Row>
          <Row justify="center">
            <Col xl={8}>
              <p>
                I've switched my browser startpage repo to public. I've been using it for a while now, it's nothing special but it's clean and it's fast and it works for me.
              </p>
              <p>
                You can grab the source from the <a href="https://github.com/gianjohansen/firefox-startpage" target="_blank" rel="noreferrer">repository</a>.
              </p>
              <img
                className={styles.blogHero}
                src="/images/blog-minimal-startpage/minimal-startpage.png"
              />
              <div className={styles.inlinePageSeperators}>
                <div className={styles.pageSeperator}></div>
                <div className={styles.pageSeperator}></div>
                <div className={styles.pageSeperator}></div>
              </div>
              <p>
                I think in most cases a user's new tab page can best be described as 'the page that briefly appears as they type their google search'. New tabs that are full of features don't have much of a place when high speed internet means that a quality web app is less than a second away at any time. It's not that having a calendar on my new tab isn't useful, it's that I already have a calendar workflow that works for me and unless the new tab page replicates it in its entirety there's no point in committing a second tool to muscle memory.
              </p>
              <p>Opinions may vary, of course.</p>
              <h2 className={styles.genericHeading}>What makes a good startpage?</h2>
              <ul>
                <li>
                  <strong>It should load instantly.</strong> If you're mid-thought and hit Ctrl + T and start typing a query, only to look up and realize that the start of what you typed didn't register because the page was still loading... immediate uninstall.
                </li>
                <li>
                  <strong>It should not steal focus from the url bar.</strong> There's a trend for a 'search' bar or similar on new tab pages. I don't need one of those, my browser provides one. Any javascript implementation is a step down from that.
                </li>
                <li>
                  <strong>Timeless links only.</strong> Another trend is for a news or latest posts section. I don't want an ephemeral new tab, I want to be able to navigate that thing with my eyes closed at the speed of thought. Static, extremely frequent links only.
                </li>
                <li>
                  <strong>Should blend in with your browser chrome.</strong> This one is probably the most subjective but you don't want your new tab page to stick out, it should look native to your web browser like the browser's official startpage does.
                </li>
              </ul>
              <h2 className={styles.genericHeading}>A common gotcha</h2>
              <p>
                For browser security reasons if you use an extension that changes your new tab then the focus on opening a new tab is locked to within the tab, not to the url bar. This violates my second dot point above, and I searched long and hard for a workaround: <a href="https://github.com/methodgrab/firefox-custom-new-tab-page" target="_blank" rel="noreferrer">Firefox Custom New Tab Page</a>. This developer gets it.
              </p>
              <blockquote>
                A Firefox extension that allows you to specify a custom URL to be shown when opening a new tab, without changing the address bar content.
              </blockquote>
              <p>
                That avoids another issue I have with startpages: when I open a new tab I expect a blank url bar, ready for a google search. If you're filling that with your custom url or an extension url, I'm out.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <StaticOutro>
        <Container>
          <Row>
            <Col>
              <div className={styles.pageSeperators}>
                <div className={styles.pageSeperator}></div>
                <div className={styles.pageSeperator}></div>
                <div className={styles.pageSeperator}></div>
              </div>
            </Col>
          </Row>
        </Container>
      </StaticOutro>
    </Layout>
  )
}

export default MinimalStartpage
