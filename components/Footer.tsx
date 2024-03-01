import React from 'react'
import styles from '@styles/Home.module.css'
import { Container, Row, Col } from 'react-grid-system'

const Footer: React.FC<{}> = () => {
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
              <a
                href="https://www.websitecarbon.com/website/johansen-ai/"
                target="_blank"
                rel="noreferrer"
              >
                This website emits only <strong>0.06g</strong> of CO2 per
                load.&nbsp;
                <br />
                That&apos;s cleaner than <strong>96%</strong> of pages tested.{' '}
                <span style={{ color: '#fff' }}>➔</span>
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
