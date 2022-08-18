import React from 'react'
import styles from '@styles/Home.module.css'
import LinkStaticPosition from './NoScrollLink'

interface BlogCardProps {
  title: string
  img: string
  href: string,
  tags?: string[]
}

const BlogCard: React.FC<BlogCardProps> = ({ title, img, href, tags }) => (
  <div className={styles.blogList}>
    <div className={styles.blogListing}>
      <div className={styles.blogCardContainer}>
        <div className={styles.blogCardContent}>
          <LinkStaticPosition href={href}>
            <div>
              <div className={styles.contentOverlay} />
              <img className={styles.contentImage} src={img} />
              <div className={`${styles.contentDetails} fadeIn-bottom`}>
                <h3 className="content-title">{title}</h3>

                <div className={styles.contentTags}>
                  {tags?.map((tag) => {
                    return (<div className={styles.contentTag}>
                      {tag}
                    </div>)
                  })}
                </div>
              </div>
            </div>
          </LinkStaticPosition>
        </div>
      </div>
    </div>
  </div>
)

export default BlogCard
