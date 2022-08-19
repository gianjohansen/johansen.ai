import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'
import PageHead from '@components/PageHead'

import Nav from '@components/Nav'
import StaticOutro from '@components/StaticOutro'

interface LayoutProps {
  title?: string
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ title = 'Hello!', children }) => (
  <>
    <PageHead
      title={[title, 'Gian Johansen • Front-End Engineer'].join(' • ')}
    />
    <motion.main
      key={title}
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={{
        hidden: { opacity: 0, transition: { duration: 0.2 } },
        enter: { opacity: 1, transition: { duration: 0.2 } },
        exit: { opacity: 0, transition: { duration: 0.2 } },
      }}
      transition={{ type: 'linear' }}
    >
      <Nav />
      <div className="main-motion-wrapper">{children}</div>
    </motion.main>
  </>
)

export default Layout
