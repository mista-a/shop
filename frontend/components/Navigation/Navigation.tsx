import { Theme, useMediaQuery, useTheme } from '@mui/material'
import { Box } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { Api } from '../../API'
import { ReactComponent as ArrowIcon } from '../../assets/images/arrow-icon.svg'
import { textToLink } from '../../utils/textToLink'
import styles from './Navigation.module.sass'

const Navigation = ({ categories }) => {
  const theme: Theme = useTheme()
  const navigationBreakepoint = useMediaQuery(theme.breakpoints.up('tablet'))

  return (
    navigationBreakepoint && (
      <Box className={styles.navigation}>
        {categories.map(({ name, id }) => {
          return (
            <Link href={`/${textToLink(name)}`} key={id}>
              <span className={styles.navigationItem}>
                {name} <ArrowIcon />
                <div className={styles.categoryLinks}>
                  {/* {categoris[category].map((categoryLink, index) => {
                    return (
                      <Link
                        href={`${textToLink(category)}/${textToLink(
                          categoryLink
                        )}`}
                        key={index}
                      >
                        <span className={styles.categoryLink}>
                          {categoryLink}
                        </span>
                      </Link>
                    )
                  })} */}
                </div>
              </span>
            </Link>
          )
        })}
        {/* {Object.keys(categoris).map((category, index) => {
          return (
            <Link href={`/${textToLink(category)}`} key={index}>
              <span className={styles.navigationItem}>
                {category} <ArrowIcon />
                <div className={styles.categoryLinks}>
                  {categoris[category].map((categoryLink, index) => {
                    return (
                      <Link
                        href={`${textToLink(category)}/${textToLink(
                          categoryLink
                        )}`}
                        key={index}
                      >
                        <span className={styles.categoryLink}>
                          {categoryLink}
                        </span>
                      </Link>
                    )
                  })}
                </div>
              </span>
            </Link>
          )
        })} */}
      </Box>
    )
  )
}

export default Navigation
