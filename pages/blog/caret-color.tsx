import type { NextPage } from 'next'
import styles from '@styles/Home.module.css'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { obsidian } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { Container, Row, Col } from 'react-grid-system'
import Layout from '@components/Layout'
import StaticOutro from '@components/StaticOutro'

const CaretColor: NextPage = () => {
  return (
    <Layout title="Style your input carets with this obscure css property">
      <style>
        {`
        #example-input, #example-input-2 {
          border-radius: 6px;
          border: none;
        }
        #example-input {
          caret-color: #ff0000;
        }
        #example-input-2 {
          color: red;
          text-shadow: 0px 0px 0px #000;
          -webkit-text-fill-color: transparent;
        }
      `}
      </style>
      <div className={styles.blogContainer}>
        <Container>
          <Row justify="center">
            <Col xl={8}>
              <div className={styles.blogCategories}>
                <div className={styles.blogCategory}>CSS</div>
                <div className={styles.blogCategory}>Web</div>
              </div>
              <h1 className={styles.genericHeading}>
                Style your input carets with this obscure css property
              </h1>
              <p>Add some on-brand color to those blinkers.</p>
            </Col>
          </Row>
          <Row justify="center">
            <Col xl={8}>
              <img
                className={styles.blogHero}
                src="/images/blinking-cursor.webp"
              />
            </Col>
          </Row>
          <Row justify="center">
            <Col xl={8}>
              <p>
                Quick tip of the day: input field carets can be colored with
                css. They&apos;re the blinking cursors that show where the user
                is currently typing. This is the sort of style that once upon a
                time needed to be faked with some trickery, but it&apos;s gone
                completely native these days.
              </p>
              <p>
                As an example, this input should have a{' '}
                <span className={styles.mono}>#f00</span> caret:
              </p>
              <p>
                <input type="text" id="example-input" />
              </p>
              <p>
                This is done with the{' '}
                <span className={styles.mono}>caret-color</span> property, which
                as you can expect takes hex, hsl, rgba or any other color value.
              </p>
              <SyntaxHighlighter language="css" style={obsidian}>
                {`.some-element {
    caret-color: #f00;
}`}
              </SyntaxHighlighter>
              <p>
                While <span className={styles.mono}>caret-color</span> has full
                browser support (minus internet explorer), there are a few other
                caret-related properties making their way through the working
                group which don&apos;t. Until those are ready{' '}
                <a
                  href="https://codepen.io/team/css-tricks/pen/YzGoBGq"
                  target="_blank"
                  rel="noreferrer"
                >
                  back to trickery
                </a>{' '}
                it is.
              </p>
              <h2 className={styles.genericHeading}>In the bad old days</h2>
              <p>In case you were wondering how it could have been faked:</p>
              <p>
                <input type="text" id="example-input-2" />
              </p>
              <p>
                We get the same effect by setting the text color to our desired
                caret color (thereby setting the caret color), hiding the body
                text and using a text shadow with our body color as stand-in
                body text:
              </p>
              <SyntaxHighlighter language="css" style={obsidian}>
                {`.some-element {
    color: red;
    text-shadow: 0px 0px 0px #000;
    -webkit-text-fill-color: transparent;
}`}
              </SyntaxHighlighter>
              <p>
                I&apos;d joke about how older css required hacks like this but
                let&apos;s be honest, our stylesheets are still full of these.
                We&apos;ve just rebranded them &quot;workarounds&quot; and
                trained our bundlers to add them for us.
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

export default CaretColor
