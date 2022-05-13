import { Card, CardMedia, Typography } from '@mui/material'
import Link from '../UI/Link/Link'
import React, { FC, useEffect, useState } from 'react'
import cardImg from '../../assets/images/card-img.png'
import styles from './Product.module.sass'
import { ReactComponent as LikeIcon } from '../../assets/images/like-icon.svg'
import { IProduct } from '../../types/product'

interface ProductCardProps {
  product: IProduct
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const [inFavorite, setInFavorite] = useState(false)

  useEffect(() => {}, [])

  const changeInFavorite = () => {}

  return (
    <div className={styles.card}>
      <div className={styles.imgWrapper}>
        <Link href={`/product/${product.id}`}>
          <img
            className={styles.cardImg}
            src={product.img}
            alt={product.name}
          />
        </Link>
        <button className={styles.likeButton} onClick={changeInFavorite}>
          <LikeIcon />
        </button>
      </div>
      <Typography>{product.name}</Typography>{' '}
      <div className={styles.colors}>
        {product.colors.map((color, index) => {
          return (
            <div
              key={index}
              className={styles.color}
              style={{
                backgroundColor: color,
              }}
            />
          )
        })}
      </div>
      <Typography>$ {product.price}</Typography>
    </div>
  )
}

export default ProductCard
