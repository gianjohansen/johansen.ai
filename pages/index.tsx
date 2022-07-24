import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Container, Row, Col } from 'react-grid-system'
import Qantas from '../public/images/logo-qantas-black.png'
import Optus from '../public/images/logo-optus-black.png'
import OpenAgent from '../public/images/logo-openagent-black.png'
import { setConfiguration } from 'react-grid-system'
import Script from 'next/script'

const Home: NextPage = () => {
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
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="cursor">
        <div className="cursor__ball cursor__ball--big ">
          <svg height={90} width={90}>
            <circle cx={15} cy={15} r={15} strokeWidth={0} />
          </svg>
        </div>
        <div className="cursor__ball cursor__ball--small">
          <svg height={10} width={10}>
            <circle cx={5} cy={5} r={4} strokeWidth={0} />
          </svg>
        </div>
      </div>
      <div className={styles.header}>
        <Container>
          <Row justify="between" align="center">
            <Col>
              <img src="/images/logo-white.png" className={styles.headerLogo} />
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
                  yours across australia and beyond. I'm mostly react and
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
                I've worked with…
              </p>
            </Col>
            <Col xs={12} sm={6} className={styles.desktopRight}>
              <a className={styles.downloadResume} href="#">
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
      <div className={styles.jobList}>
        <Container>
          <Row>
            <Col xs={12} lg={4}>
              <div className={styles.job}>
                <div className={styles.jobIconQantas}>
                  <Image src={Qantas} height={40} width={40} />
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
            <Col xs={12} lg={4}>
              <div className={styles.job}>
                <div className={styles.jobIconOptus}>
                  <Image src={Optus} height={40} width={40} />
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
            <Col xs={12} lg={4}>
              <div className={styles.job}>
                <div className={styles.jobIconOpenAgent}>
                  <Image src={OpenAgent} height={40} width={40} />
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
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js" />
      </div>
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
                  <div className={styles.blogHeading}>
                    Streaming a single netflix account from one house to another
                  </div>
                  <div className={styles.blogCount}>➔</div>
                </div>
                <div className={styles.blogListing}>
                  <div className={styles.blogHeading}>
                    Installing tow-boot onto a pinephone pro: an illustrated
                    guide
                  </div>
                  <div className={styles.blogCount}>➔</div>
                </div>
                <div className={styles.blogListing}>
                  <div className={styles.blogHeading}>
                    Available options for getting whatsapp onto a pinephone pro
                  </div>
                  <div className={styles.blogCount}>➔</div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.contact}>
        <Container>
          <Row>
            <Col>
              <p id="get-in-touch" className={styles.bigText}>
                Let's get started
              </p>
              <p className={styles.emailDirect}>
                I am not currently open to new opportunities.
              </p>
              <p className={styles.emailButton}>
                <a href="mailto:gian@johansen.software">
                  gian@johansen.software
                </a>
              </p>
              <p className={styles.socials}>
                <a href="#">
                  {' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"></path>
                  </svg>
                </a>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z" />
                  </svg>
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
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
      <Script src="/js/pointer.js" />
    </>
  )
}

export default Home
