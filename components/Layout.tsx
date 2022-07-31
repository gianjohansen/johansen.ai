import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'
import Head from './Head'

import Nav from '@components/Nav'
import StaticOutro from '@components/StaticOutro'

interface LayoutProps {
  title?: string
  children: React.ReactNode
}

const variants = {
  hidden: { opacity: 0, x: 0, y: 40 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -40 },
}

const Layout = ({ title = 'Hello!', children }: LayoutProps): JSX.Element => (
  <>
    <Head title={[title, 'Gian Johansen • Front-End Engineer'].join(' • ')} />
    <motion.main
      key={title}
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: 'linear' }}
      className="
                    main-motion-wrapper
                    flex flex-col items-start w-full pt-10
                    px-8 sm:px-16 md:px-36 lg:px-52 xl:px-80 2xl:px-96
                    pt-24 h-full
                "
    >
      <Nav />
      {children}
      <StaticOutro />
    </motion.main>
  </>
)

export default Layout
