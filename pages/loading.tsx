import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '@styles/Home.module.css'
import { Container, Row, Col } from 'react-grid-system'
import Qantas from '@public/images/logo-qantas-black.png'
import Optus from '@public/images/logo-optus-black.png'
import OpenAgent from '@public/images/logo-openagent-black.png'
import Script from 'next/script'

import Layout from '@components/Layout'

const Loading: NextPage = () => {
  return (
    <Layout>
      <div className={styles.jobList}>
        <Container>
          <Row>
            <Col>Loading</Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

export default Loading
