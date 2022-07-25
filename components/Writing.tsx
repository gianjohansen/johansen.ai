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
                  <LinkStaticPosition href="/blog/caret-color">
                    <div className={styles.blogHeading}>
                      <span className={styles.blogHeadingText}>
                        Style your input carets with this obscure css property
                      </span>
                      <div className={styles.blogMeta}>
                        <div className={styles.blogCategories}>
                          <div className={styles.blogCategory}>CSS</div>
                          <div className={styles.blogCategory}>Web</div>
                        </div>
                        <div className={styles.blogStats}>
                          <div className={styles.blogStat}>May 6</div>
                          <div className={styles.blogStat}>2 minute read</div>
                        </div>
                      </div>
                    </div>
                  </LinkStaticPosition>
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
