import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '@styles/Home.module.css'
import { Container, Row, Col } from 'react-grid-system'
import Qantas from '@public/images/logo-qantas-black.png'
import Optus from '@public/images/logo-optus-black.png'
import OpenAgent from '@public/images/logo-openagent-black.png'
import Script from 'next/script'
import StaticOutro from '@components/StaticOutro'

import Layout from '@components/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <Container>
          <Row>
            <Col sm={20}>
              <div className={styles.headlineContainer}>
                <p className={styles.headline}>
                  Gian Johansen is a front-end engineer <br />
                  with an eye for good user experience <br />
                  and conversion optimization in Sydney.
                </p>
                <p className={styles.subHeadline}>
                  I make neat things on the web for companies and brands just
                  like&nbsp;
                  <br />
                  yours across australia and beyond. I&apos;m mostly react and
                  typescript.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.experience}>
        <Container>
          <Row justify="between" align="center">
            <Col xs={12} sm={6}>
              <p
                style={{ color: '#fff', fontWeight: '600' }}
                className={styles.textSecondary}
              >
                I&apos;ve worked with…
              </p>
            </Col>
            <Col xs={12} sm={6} className={styles.desktopRight}>
              <a
                className={styles.downloadResume}
                href="/downloads/gian-resume-2021.pdf"
                target="_blank"
              >
                <span>Download resume</span>
                <span className={styles.arrowSvg}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                  >
                    <g fill="#fff">
                      <path
                        d="M50 100A50.013 50.013 0 0130.538 3.929a50.013 50.013 0 0138.924 92.142A49.686 49.686 0 0150 100zm0-96a46 46 0 1046 46A46.053 46.053 0 0050 4z"
                        opacity="0.2"
                      ></path>
                      <path
                        d="M21.65 27.621a2.216 2.216 0 010-3.123l8.327-8.327H2.29A2.186 2.186 0 010 14.09a2.361 2.361 0 012.29-2.29h27.687L21.65 3.681A2.208 2.208 0 0124.772.559l11.866 11.865c.066.052.147.147.208.208a2.012 2.012 0 010 2.914c-.061.061-.142.156-.208.208L24.772 27.621a1.962 1.962 0 01-1.457.625 2.441 2.441 0 01-1.665-.625z"
                        transform="translate(31.226 36.083)"
                      ></path>
                    </g>
                  </svg>
                </span>
              </a>
            </Col>
          </Row>
        </Container>
      </div>

      <StaticOutro staticBlogLinks={false}>
        <div className={styles.jobList}>
          <Container>
            <Row>
              <Col xs={12} md={4} className={styles.jobCol}>
                <div className={styles.job}>
                  <div className={styles.jobIconQantas}>
                    <img src="/images/logo-qantas-black.png" />
                  </div>
                  <div className={styles.jobDescription}>
                    <p
                      className={`${styles.jobName} jobYearsVisibleShow`}
                      id="firstJob"
                    >
                      Qantas
                    </p>
                    <p className={`${styles.jobIndustry} jobYearsVisibleShow`}>
                      The spirit of Australia
                    </p>
                  </div>
                  <div className={`${styles.jobYears} jobYearsVisibleShow`}>
                    2021 — 2022
                  </div>
                </div>
              </Col>
              <Col xs={12} md={4} className={styles.jobCol}>
                <div className={styles.job}>
                  <div className={styles.jobIconOptus}>
                    <img src="/images/logo-optus-black.png" height={40} width={40} />
                  </div>
                  <div className={styles.jobDescription}>
                    <p className={`${styles.jobName} jobYearsVisibleShow`}>
                      Optus
                    </p>
                    <p className={`${styles.jobIndustry} jobYearsVisibleShow`}>
                      We get people talking
                    </p>
                  </div>
                  <div className={`${styles.jobYears} jobYearsVisibleShow`}>
                    2018 — 2021
                  </div>
                </div>
              </Col>
              <Col xs={12} md={4} className={styles.jobCol}>
                <div className={styles.job}>
                  <div className={styles.jobIconOpenAgent}>
                    <img src="/images/logo-openagent-black.png" height={40} width={40} />
                  </div>
                  <div className={styles.jobDescription}>
                    <p className={`${styles.jobName} jobYearsVisibleShow`}>
                      OpenAgent
                    </p>
                    <p className={`${styles.jobIndustry} jobYearsVisibleShow`}>
                      Real estate, redefined
                    </p>
                  </div>
                  <div className={`${styles.jobYears} jobYearsVisibleShow`}>
                    2014 — 2018
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          <Script src="/js/homepage.js" />
        </div>
      </StaticOutro>
    </Layout>
  )
}

export default Home
