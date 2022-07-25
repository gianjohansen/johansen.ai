import type { NextPage } from 'next'
import styles from '@styles/Home.module.css'
import { Container, Row, Col } from 'react-grid-system'

const SomeBlog: NextPage = () => {
  return (
    <>
      <div className={styles.blogContainer}>
        <Container>
          <Row justify="center">
            <Col md={8}>
              <h1 className={styles.genericHeading}>
                Installing tow-boot onto a pinephone pro
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                gravida iaculis tortor, sit amet maximus nulla vehicula eu. Nam
                porttitor lacus non massa tempus ullamcorper. Sed blandit dictum
                erat, at commodo diam egestas dignissim
              </p>
            </Col>
          </Row>
          <Row justify="center">
            <Col md={8}>
              <img
                className={styles.blogHero}
                src="/images/blog-post-example.jpg"
              />
            </Col>
          </Row>
          <Row justify="center">
            <Col md={8}>
              <h2 className={styles.genericHeading}>Subheading</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                gravida iaculis tortor, sit amet maximus nulla vehicula eu. Nam
                porttitor lacus non massa tempus ullamcorper. Sed blandit dictum
                erat, at commodo diam egestas dignissim. Donec auctor tellus vel
                tempus pellentesque. Vestibulum placerat venenatis nisi, vitae
                rutrum neque lacinia pulvinar. Pellentesque eleifend, nisl eu
                porttitor fringilla, risus enim pharetra orci, at dapibus mauris
                ligula sit amet dolor
                <br />
                <br />
                Integer in massa sem. Nulla et luctus nisl, quis porta felis.
                Morbi tincidunt est in est elementum, id mollis eros
                condimentum. Integer tempus lobortis purus, sit amet egestas
                ante vestibulum vel.
                <br />
                <br />
                Donec fringilla, nulla eget vestibulum ornare, nibh lectus
                placerat turpis, vitae fermentum risus velit at ligula.
                Vestibulum ultricies laoreet libero, nec ultrices eros
                consectetur eget. Ut eget mauris vitae mauris varius venenatis
                ac quis orci. Cras sed nibh scelerisque, vulputate ligula at,
                rhoncus nunc. Quisque ut risus ac orci mattis sodales. Aliquam
                quis nulla convallis ligula laoreet ornare at id ex.
                Pellentesque dui tortor, tempus et congue at, ultrices placerat
                orci.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className={styles.pageSeperators}>
                <div className={styles.pageSeperator}></div>
                <div className={styles.pageSeperator}></div>
                <div className={styles.pageSeperator}></div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default SomeBlog
