import Link from 'next/link'
import React from 'react'
import { ReactComponent as ArrowIcon } from '../../assets/images/arrow-icon.svg'
import styles from './Navigation.module.sass'

const Navigation: React.FC = () => {
  const categoris: object = {
    Sales: ['Shoes', 'Accessories', 'Swimwear'],
    Men: ['Pants', 'Shirts', 'Hoodies & Sweatshirts'],
    Women: ['Dresses', 'Tops', 'Jeans'],
    Baby: ['Clouthing', 'Outerwear', 'Accessories'],
    Kids: ['Shoes', 'Costumes', 'Activewear'],
  }

  return (
    <div className={styles.navigation}>
      {Object.keys(categoris).map((category, index) => {
        return (
          <Link href={`/${category.toLowerCase()}`}>
            <span className={styles.navigationItem} key={index}>
              {category} <ArrowIcon />
              <div className={styles.categoryLinks}>
                {categoris[category].map((categoryLink) => {
                  return (
                    <Link
                      href={`${category.toLowerCase()}/${categoryLink.toLowerCase()}`}
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
    </div>
  )
}

export default Navigation
