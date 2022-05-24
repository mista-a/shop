import { useMediaQuery } from '@mui/material'
import React from 'react'
import { Api } from '../../API'
import { ReactComponent as ArrowIcon } from '../../assets/images/arrow-icon.svg'
import { useAppSelector } from '../../redux/hooks'
import { textToLink } from '../../utils/textToLink'
import Link from '../UI/Link/Link'
import styles from './Navigation.module.sass'
import { theme } from '../../theme'

const Navigation = () => {
  const navigationBreakepoint = useMediaQuery(theme.breakpoints.up('tablet'))

  const { categories } = useAppSelector((state) => state.categories).data

  return (
    navigationBreakepoint && (
      <div className={styles.navigation}>
        {categories.map(({ name, id, subCategories }) => {
          return (
            <Link
              classLink={`${styles.link} ${styles.navigationItem}`}
              href={name}
              key={id}
            >
              <span className={styles.navigationItem}>
                {name} <ArrowIcon />
                <div className={styles.categoryLinks}>
                  {subCategories.map((subCategory) => {
                    return (
                      <Link
                        href={`${textToLink(name)}/${textToLink(
                          subCategory.name,
                        )}`}
                        key={id}
                      >
                        <span className={styles.categoryLinks}>
                          {subCategory.name}
                        </span>
                      </Link>
                    )
                  })}
                </div>
              </span>
            </Link>
          )
        })}
      </div>
    )
  )
}

export default Navigation
