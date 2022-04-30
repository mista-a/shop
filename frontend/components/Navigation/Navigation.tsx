import { useTheme } from '@emotion/react'
import { useMediaQuery } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link'
import React from 'react'
import { ReactComponent as ArrowIcon } from '../../assets/images/arrow-icon.svg'
import { textToLink } from '../../utils/textToLink'
import styles from './Navigation.module.sass'

const Navigation: React.FC = () => {
  const categoris: object = {
    Sales: ['Shoes', 'Accessories', 'Swimwear'],
    Men: ['Pants', 'Shirts', 'Hoodies & Sweatshirts'],
    Women: ['Dresses', 'Tops', 'Jeans'],
    Baby: ['Clouthing', 'Outerwear', 'Accessories'],
    Kids: ['Shoes', 'Costumes', 'Activewear'],
  }

  const theme = useTheme()
  const navigationBreakepoint = useMediaQuery(theme.breakpoints.up('tablet'))

  return (
    navigationBreakepoint && (
      <Box className={styles.navigation}>
        {Object.keys(categoris).map((category, index) => {
          return (
            <Link href={`/${textToLink(category)}`} key={index}>
              <span className={styles.navigationItem}>
                {category} <ArrowIcon />
                <div className={styles.categoryLinks}>
                  {categoris[category].map((categoryLink, index) => {
                    return (
                      <Link
                        href={`${textToLink(category)}/${textToLink(
                          categoryLink,
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
        })}
      </Box>
    )
  )
}

export default Navigation
