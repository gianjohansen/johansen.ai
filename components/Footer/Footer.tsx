import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@styles/Home.module.css'
import { Container, Row, Col } from 'react-grid-system'
import { setConfiguration } from 'react-grid-system'
import Script from 'next/script'
import Link from 'next/link'

function Footer() {
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
    <div className={styles.footer}>
      <Container>
        <Row align="center">
          <Col md={3}>
            <a
              className={styles.scrollToTop}
              href="javascript:window.scrollTo({top: 0, behavior: 'smooth'})"
            >
              Scroll to top
            </a>
          </Col>
          <Col
            md={9}
            style={{ color: 'rgb(160, 159, 166)' }}
            className={styles.desktopRight}
          >
            <p className={styles.emissions}>
              This page emits only <strong>0.49g</strong> of CO2 per
              pageload.&nbsp;
              <br />
              That's better than <strong>99%</strong> of pages tested.
              <a href="#" style={{ color: '#fff', marginLeft: '8px' }}>
                ➔
              </a>
              &nbsp;
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
