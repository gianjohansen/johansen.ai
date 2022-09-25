import React from 'react'
import styles from '@styles/Home.module.css'
import { Container, Row, Col } from 'react-grid-system'
import LinkStaticPosition from './NoScrollLink'
import { showLoader } from './Cursor'

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
            <svg
              id="nav-logo"
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 499 500"
              onClick={showLoader}
            >
              <g id="iconGroup" fill="#fff">
                <path d="M325.04 269.03l-1.46-83.469-51.985 11.344 1.277 73.031c.664 38.168-26.512 69.508-67.5 70.215-40.23.71-67.46-29.035-68.133-67.848l-3.054-175.27 187.2-37.027-.895-51.461L79.45 53.729l4.54 219.51c1.19 68.07 46.64 120.62 116.11 119.39 69.757-1.21 126.1-56.672 124.93-123.6z"></path>
                <path d="M415.65 79.586l-239.23 45.926 2.547 146.06c-.313 19.262 11.027 33.938 25.8 33.738 13.919-.188 26.048-15.07 26.36-34.637l-1.793-102.59 135.23-25.945 2.203 126.16c1.633 93.668-70.121 168.31-164.01 169.95-21.953.387-43.129-3.477-62.809-10.598l.965 55.172c19.965 5.191 40.973 7.977 62.746 7.59 125.2-2.176 217.42-100.11 215.27-223.02z"></path>
              </g>
            </svg>
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
