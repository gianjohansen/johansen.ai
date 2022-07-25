import React from 'react'
import Link from 'next/link'
import LinkStaticPosition from './NoScrollLink'
import styles from '@styles/Home.module.css'
import { Container, Row, Col } from 'react-grid-system'

function Writing() {
  return (
    <>
      <div className={styles.experience}>
        <Container>
          <Row justify="between" align="center">
            <Col sm={12}>
              <p
                id="recent-writing"
                style={{ color: '#fff', fontWeight: '600' }}
                className={styles.textSecondary}
              >
                Recent writing…
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.genericContainer}>
        <Container>
          <Row>
            <Col>
              <div className={styles.blogList}>
                <div className={styles.blogListing}>
                  <div className={styles.blogHeading}>
                    <LinkStaticPosition href="/blog/some-page">
                      Streaming a single netflix account from one house to
                      another
                    </LinkStaticPosition>
                  </div>
                  <div className={styles.blogCount}>➔</div>
                </div>
                <div className={styles.blogListing}>
                  <div className={styles.blogHeading}>
                    <LinkStaticPosition href="/blog/another-page">
                      Installing tow-boot onto a pinephone pro: an illustrated
                      guide
                    </LinkStaticPosition>
                  </div>
                  <div className={styles.blogCount}>➔</div>
                </div>
                <div className={styles.blogListing}>
                  <div className={styles.blogHeading}>
                    Available options for getting whatsapp onto a pinephone pro
                  </div>
                  <div className={styles.blogCount}>➔</div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Writing
