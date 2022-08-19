import React from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { Container, Row, Col } from 'react-grid-system'
import styles from '@styles/Home.module.css'
import BlogCard from './BlogCard'
import Contact from '@components/Contact'
import Footer from '@components/Footer'

gsap.registerPlugin(ScrollTrigger)

interface StaticOutroProps {
  staticBlogLinks?: boolean
  children: React.ReactNode
}

const StaticOutro: React.FC<StaticOutroProps> = ({ staticBlogLinks = true, children }) => {
  React.useEffect(() => {
    if (staticBlogLinks) {
      return;
    }

    const refreshPins = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000);

    const isDesktop = window.innerWidth >= 992

    const containerLeft =
      document?.querySelector('#nav-logo')?.getBoundingClientRect().left || 0

    if (isDesktop) {
      // align intro with container
      const intro = document?.querySelector<HTMLElement>('#intro')

      if (intro) {
        intro.style.paddingLeft = containerLeft - 15 + 'px'
      }

      const scrubValue = 1

      let container = document.querySelector('.horizontal-container')!

      // pin blog posts for horizontal scrolling
      ScrollTrigger.create({
        trigger: '.horizontal-container',
        start: '300px center',
        end: () => '+=' + (container.scrollWidth - window.innerWidth),
        pin: '.pin-target',
        anticipatePin: 0,
        scrub: scrubValue,
        invalidateOnRefresh: true,
        onEnter: () => {
          clearTimeout(refreshPins);
        }
      })

      // transform blog images along -x axis
      let thumbNails = gsap.utils.toArray('.thumbnail')
      thumbNails.forEach((thumb: any, i) => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: '.horizontal-wrapper',
              start: '300px center',
              scrub: scrubValue,
              invalidateOnRefresh: true,
              end: () => '+=' + (container.scrollWidth - window.innerWidth),
            },
          })
          // begin with a delay
          .to(
            thumbNails,
            {
              x: () => {
                return -(
                  container.scrollWidth -
                  window.innerWidth +
                  containerLeft -
                  17.5
                )
              },
              duration: 15,
              ease: 'none',
            },
            3,
          )
          // empty tween for a delay at the end
          .to({}, { duration: 3 })

        // // without begin/end delay:
        // gsap.to(thumb, {
        //   x: () => { return -(container.scrollWidth - window.innerWidth + containerLeft) },
        //   ease: "none",
        //   scrollTrigger: {
        //     trigger: ".wrapper",
        //     start: '300px center',
        //     scrub: scrubValue,
        //     invalidateOnRefresh: true,
        //     end: () => "+=" + (container.scrollWidth - window.innerWidth + containerLeft)
        //   }
        // });
      })
    }
  }, [])

  const isStatic = staticBlogLinks;

  return (
    <div className="pin-target">
      {children}
      <div className={styles.recentWriting}>
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
      <div className={isStatic ? 'static-blog-links' : 'scrollable-blog-links ' + styles.innerGrid}>
        <Container fluid={!staticBlogLinks} md={undefined} lg={undefined} xl={undefined} xxl={undefined}>
          <Row>
            <Col>
              <div className="horizontal-container">
                <div className="horizontal-wrapper">
                  <div className={styles.horizontalIntro} id="intro">
                    <div className={styles.horizontalHeader}>
                      Intermittent thoughts on clean code and elegant user
                      experience
                    </div>
                    <div className={styles.rssLink}>
                      <a href="/rss/feed.xml" type="application/rss+xml">
                        Grab the RSS
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
                    </div>
                  </div>
                  <div className="thumbnail">
                    <BlogCard
                      title="What to do when your Pinephone Pro won't charge or turn on"
                      img="/images/blog-2-c.jpg"
                      href="/blog/pinephone-pro-wont-charge"
                      tags={['Mobile', 'Guide']}
                    />
                  </div>
                  <div className="thumbnail">
                    <BlogCard
                      title="Give your input carets some color with these obscure css selectors"
                      img="/images/blog-5.jpg"
                      href="/blog/caret-color"
                      tags={['Web', 'CSS']}
                    />
                  </div>
                  <div className="thumbnail">
                    <BlogCard
                      title="A beautiful Firefox startpage and some common relevant gotchas"
                      img="/images/blog-4-c.jpg"
                      href="/blog/minimal-startpage"
                      tags={['Web', 'Firefox']}
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default StaticOutro
