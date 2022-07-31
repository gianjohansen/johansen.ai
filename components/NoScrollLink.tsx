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
  <Link href={href} passHref={passHref} scroll={false}>
    {children}
  </Link>
)

export default LinkStaticPosition
