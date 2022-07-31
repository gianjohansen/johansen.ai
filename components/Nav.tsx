import React from 'react'
import styles from '@styles/Home.module.css'
import { Container, Row, Col } from 'react-grid-system'
import LinkStaticPosition from './NoScrollLink'

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

export default Nav
