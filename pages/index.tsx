import type { NextPage } from 'next'
import styles from '@styles/Home.module.css'
import { Container, Row, Col } from 'react-grid-system'
import Script from 'next/script'
import StaticOutro from '@components/StaticOutro'

import Layout from '@components/Layout'
import { NextSeo } from 'next-seo'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <meta
          property="twitter:image"
          content="https://johansen.software/images/johansen-software-card.jpg"
        />
        <link rel="alternate" type="application/rss+xml" href="/rss/feed.xml" />
      </Head>
      <NextSeo
        title="Hello!"
        description="Gian Johansen is a front-end engineer with an eye for good user experience and conversion optimization in Sydney. I make neat things on the web."
      />
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
                href="/downloads/gian-resume-2023.pdf"
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="266.667"
                      height="266.667"
                      version="1"
                      viewBox="0 0 200 200"
                    >
                      <path
                        d="M44 1885c4-11 23-61 43-112 57-148 141-237 378-399 283-193 383-291 455-447 26-55 40-101 72-238 10-43 9-43 142-70 274-57 560-185 786-353 95-71 107-53 19 27-206 190-418 327-654 422-119 48-153 85-146 155 7 63 91 108 270 145 191 39 227 63 166 109-44 34-169 101-223 120-48 17-52 11-30-50 9-26 9-36-1-48-21-25-56-19-103 19-250 200-381 273-668 370-273 94-367 153-461 293-29 42-49 68-45 57z"
                        transform="matrix(.1 0 0 -.1 0 200)"
                      ></path>
                    </svg>
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
                    2021 — 2023
                  </div>
                </div>
              </Col>
              <Col xs={12} md={4} className={styles.jobCol}>
                <div className={styles.job}>
                  <div className={styles.jobIconOptus}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="266.667"
                      height="266.667"
                      version="1"
                      viewBox="0 0 200 200"
                    >
                      <path
                        d="M589 1669c-6-12-8-36-4-55 9-52-13-190-45-271-74-192-240-370-310-333-48 25-56 96-30 266 11 75 20 161 20 192 0 107-61 182-148 182-33 0-45-5-58-25-23-35-15-56 30-79 26-14 42-31 47-48 4-15 2-95-4-178-17-245 13-374 97-414 49-23 85-20 155 15 80 40 212 171 265 263 27 46 42 63 47 54 12-19 11-270-1-304-8-21-41-49-127-104-76-49-151-108-214-170-86-84-99-101-114-152-28-99 8-182 99-224 108-50 231-20 301 76 60 82 96 171 110 276 16 113 42 171 98 220 38 33 133 84 157 84 5 0 25-25 44-54 58-91 121-117 222-90 78 20 136 55 213 128 76 73 134 156 176 251 16 39 32 72 35 75 17 16 166-148 198-218 61-133-6-247-175-298-71-21-96-43-95-82 1-43 8-52 43-52 79 0 219 69 283 140 62 69 80 115 81 205 0 105-20 145-143 283-87 98-131 165-132 200 0 28 31 78 60 95 16 10 55 22 87 28 79 15 95 25 91 57-6 54-123 65-212 20-93-46-135-107-165-245-11-48-29-114-40-146-61-176-226-337-347-337-35 0-47 5-73 35-48 55-42 75 42 141 101 80 197 181 230 242 53 98 46 194-18 251-71 62-149 50-232-35-87-90-131-194-170-404-8-42-11-46-88-91-131-76-121-87-117 114 5 266-24 457-78 515-27 29-75 29-91 1zm709-201c28-28-2-109-64-178-41-45-154-127-154-111 0 5 9 38 20 74 21 69 87 169 136 205 33 25 45 27 62 10zM620 718c-38-165-112-313-171-343-56-30-117-9-134 45-11 35 32 104 114 183 70 67 175 147 192 147 4 0 3-15-1-32z"
                        transform="matrix(.1 0 0 -.1 0 200)"
                      ></path>
                    </svg>
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="266.667"
                      height="266.667"
                      version="1"
                      viewBox="0 0 200 200"
                    >
                      <path
                        d="M868 1990c-266-48-482-206-603-441-142-274-121-590 55-849 40-59 246-280 261-280s11 356-4 368c-7 6-46 12-87 14-64 3-75 6-78 22-3 14 75 98 284 307 159 159 296 289 304 289s145-130 304-289c209-209 287-293 284-307-3-16-14-19-78-22-56-2-78-7-87-19-15-20-19-363-4-363 5 0 57 51 116 112 157 165 213 253 261 415 23 75 27 108 27 218 2 158-14 228-83 370-103 214-289 370-520 435-84 24-274 35-352 20z"
                        transform="matrix(.1 0 0 -.1 0 200)"
                      ></path>
                      <path
                        d="M846 684c-14-13-16-51-16-261V178l85-88 85-88v236c0 182 3 243 14 264 8 14 44 62 80 106s66 83 66 86-67 6-149 6c-123 0-152-3-165-16z"
                        transform="matrix(.1 0 0 -.1 0 200)"
                      ></path>
                    </svg>
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
