import React from 'react'
import styles from '@styles/Home.module.css'
import { Container, Row, Col } from 'react-grid-system'
import Script from 'next/script'
import Link from 'next/link'

function Nav() {
  return (
    <div className={styles.header}>
      <Container>
        <Row justify="between" align="center">
          <Col>
            <Link href="/">
              <img src="/images/logo-white.png" className={styles.headerLogo} />
            </Link>
          </Col>
          <Col xs="content" style={{ textAlign: 'right' }}>
            <a
              className={styles.menuLink}
              href="javascript:window.scrollTo({top: document.getElementById('recent-writing').getBoundingClientRect().top - 40, behavior: 'smooth'})"
            >
              Recent writing
            </a>
            <a
              className={styles.menuLink}
              href="javascript:window.scrollTo({top: document.getElementById('get-in-touch').getBoundingClientRect().top - 40, behavior: 'smooth'})"
            >
              Get in touch
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Nav
