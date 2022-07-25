import React from 'react'
import styles from '@styles/Home.module.css'
import { Container, Row, Col } from 'react-grid-system'

function Footer() {
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
              That&apos;s better than <strong>99%</strong> of pages tested.
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
