import { Card, CardMedia, Typography } from '@mui/material'
import Link from 'next/link'
import React, { FC, useState } from 'react'
import cardImg from '../../assets/images/card-img.png'
import styles from './Product.module.sass'
import { ReactComponent as LikeIcon } from '../../assets/images/like-icon.svg'

interface IProduct {
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
    <Card>
      <CardMedia
        component='img'
        height='580'
        image={product.img}
        alt='green iguana'
      />
    </Card>
    /* <img className={styles.cardImg} src={product.img} alt={product.name} /> */

    /* <div className={styles.card}> */
    // <div className={styles.imgWrapper}>

    //   <button
    //     className={styles.likeButton}
    //     onClick={() => setInFavorite(!inFavorite)}
    //   >
    //     <LikeIcon />
    //   </button>
    // </div>
    /* <Typography>{product.name}</Typography> */
    /* <div className={styles.colors}>
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
      <Typography>$ {product.price}</Typography> */
    // </div>
  )
}

export default ProductCard
