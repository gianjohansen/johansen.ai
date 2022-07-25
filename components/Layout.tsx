import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

import Nav from '@components/Nav'
import Writing from '@components/Writing'
import Contact from '@components/Contact'
import Footer from '@components/Footer'

type Props = {
  children: ReactNode
  title: string
}

const variants = {
  hidden: { opacity: 0, x: 0, y: 40 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -40 },
}

const Layout = ({ children, title }: Props): JSX.Element => (
  <>
    <motion.main
      key={title}
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: 'linear' }}
      className="
                    flex flex-col items-start w-full pt-10
                    px-8 sm:px-16 md:px-36 lg:px-52 xl:px-80 2xl:px-96
                    pt-24 h-full
                "
    >
      <Nav />
      {children}
      <Writing />
      <Contact />
      <Footer />
    </motion.main>
  </>
)

export default Layout
