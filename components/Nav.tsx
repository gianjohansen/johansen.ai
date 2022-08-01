import React from 'react'
import styles from '@styles/Home.module.css'
import { Container, Row, Col } from 'react-grid-system'
import LinkStaticPosition from './NoScrollLink'

import gsap from 'gsap'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)

const scrollTo = (element?: string) => {
  gsap.to(window, {
    scrollTo: {
      y: element || 'max',
      autoKill: false,
    },
    duration: 1,
  })
}

const Nav: React.FC<{}> = () => (
  <div className={styles.header}>
    <Container>
      <Row justify="between" align="center">
        <Col>
          <LinkStaticPosition href="/">
            <img
              src="/images/logo-white.png"
              className={styles.headerLogo}
              id="nav-logo"
            />
          </LinkStaticPosition>
        </Col>
        <Col xs="content" style={{ textAlign: 'right' }}>
          <a
            className={styles.menuLink}
            onClick={(e) => {
              e.preventDefault()
              scrollTo('#recent-writing')
            }}
          >
            Recent writing
          </a>
          <a
            className={styles.menuLink}
            onClick={(e) => {
              e.preventDefault()
              scrollTo()
            }}
          >
            Get in touch
          </a>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Nav
