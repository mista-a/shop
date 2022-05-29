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
            <div className={styles.category}>
              <Link
                classLink={`${styles.link} ${styles.navigationItem}`}
                href={`/${textToLink(name)}`}
                key={id}
              >
                {name} <ArrowIcon />
              </Link>
              <div className={styles.subCategories}>
                {subCategories.map((subCategory) => {
                  return (
                    <Link
                      classLink={`${styles.link} ${styles.subCategory}`}
                      href={`/${textToLink(name)}/${textToLink(
                        subCategory.name,
                      )}`}
                      key={id}
                    >
                      {subCategory.name}
                    </Link>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    )
  )
}

export default Navigation
