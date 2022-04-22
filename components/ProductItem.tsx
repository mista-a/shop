import React, { FC } from 'react'
import { IProduct } from '../types/product'
import styles from '../styles/ProductItem.module.sass'
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import { useRouter } from 'next/router'

interface ProductItemProps {
  product: IProduct
}

const ProductItem: FC<ProductItemProps> = ({ product }) => {
  const router = useRouter()

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={() => router.push('/products/' + product.id)}>
        <CardMedia
          component='img'
          height='100%'
          image={product.picture}
          alt={product.name}
        />
      </CardActionArea>
      <CardContent>
        <Typography variant='body1' component='p'>
          {product.name}
        </Typography>
        <Typography variant='body1' component='p'>
          {`$ ${product.price}`}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default ProductItem
