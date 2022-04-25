import React, { FC } from 'react'
import NextLink from 'next/link'
import styles from './Link.module.sass'

interface LinkProps {
  href: string
  classLink?: string
}

const Link: FC<LinkProps> = ({ href, children, classLink }) => {
  return (
    <NextLink href={href}>
      <a className={`${styles.link} ${classLink}`}>{children}</a>
    </NextLink>
  )
}

export default Link
