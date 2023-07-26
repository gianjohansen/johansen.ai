import Link, { LinkProps } from 'next/link'
import React, { ReactNode } from 'react'

interface LinkStaticPositionProps extends LinkProps {
  children: ReactNode
}

const LinkStaticPosition: React.FC<LinkStaticPositionProps> = ({
  children,
  href,
  passHref,
}) => (
  <a href={href as string}>
    <Link href={href} passHref={passHref} scroll={false}>
      {children}
    </Link>
  </a>
)

export default LinkStaticPosition
