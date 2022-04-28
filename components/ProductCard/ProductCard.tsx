import { Card, CardMedia, Typography } from '@mui/material'
import Link from '../UI/Link/Link'
import React, { FC, useState } from 'react'
import cardImg from '../../assets/images/card-img.png'
import styles from './Product.module.sass'
import { ReactComponent as LikeIcon } from '../../assets/images/like-icon.svg'

interface IProduct {
  id: number
  img: string
  name: string
  colors: string[]
  price: number
}

interface ProductCardProps {
  product: IProduct
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const [inFavorite, setInFavorite] = useState(false)

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
        <button
          className={styles.likeButton}
          onClick={() => setInFavorite(!inFavorite)}
        >
          <LikeIcon />
        </button>
      </div>
      <Typography>{product.name}</Typography>{' '}
      <div className={styles.colors}>
        {product.colors.map((color, index) => {
          return (
            <Link href={'/color'} key={index}>
              <div
                className={styles.color}
                style={{
                  backgroundColor: color,
                }}
              ></div>
            </Link>
          )
        })}
      </div>
      <Typography>$ {product.price}</Typography>
    </div>
  )
}

export default ProductCard
