import React, { FC } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import cardImg from '../../assets/images/card-img.png'
import { Grid } from '@mui/material'
import styles from './ProductList.module.sass'

const ProductList: FC = () => {
  const products = [
    {
      id: 1,
      img: cardImg.src,
      name: 'Columbia Marquam Peak Fusion parka jacket in black',
      colors: ['red', 'green', 'pink'],
      price: 17,
    },
    {
      id: 2,
      img: cardImg.src,
      name: 'Columbia Marquam Peak Fusion parka jacket in black',
      colors: ['red', 'green', 'pink'],
      price: 17,
    },
    {
      id: 3,
      img: cardImg.src,
      name: 'Columbia Marquam Peak Fusion parka jacket in black',
      colors: ['red', 'green', 'pink'],
      price: 17,
    },
    {
      id: 4,
      img: cardImg.src,
      name: 'Columbia Marquam Peak Fusion parka jacket in black',
      colors: ['red', 'green', 'pink'],
      price: 17,
    },
    {
      id: 5,
      img: cardImg.src,
      name: 'Columbia Marquam Peak Fusion parka jacket in black',
      colors: ['red', 'green', 'pink'],
      price: 17,
    },
    {
      id: 6,
      img: cardImg.src,
      name: 'Columbia Marquam Peak Fusion parka jacket in black',
      colors: ['red', 'green', 'pink'],
      price: 17,
    },
    {
      id: 7,
      img: cardImg.src,
      name: 'Columbia Marquam Peak Fusion parka jacket in black',
      colors: ['red', 'green', 'pink'],
      price: 17,
    },
    {
      id: 8,
      img: cardImg.src,
      name: 'Columbia Marquam Peak Fusion parka jacket in black',
      colors: ['red', 'green', 'pink'],
      price: 17,
    },
    {
      id: 9,
      img: cardImg.src,
      name: 'Columbia Marquam Peak Fusion parka jacket in black',
      colors: ['red', 'green', 'pink'],
      price: 17,
    },
    {
      id: 10,
      img: cardImg.src,
      name: 'Columbia Marquam Peak Fusion parka jacket in black',
      colors: ['red', 'green', 'pink'],
      price: 17,
    },
    {
      id: 11,
      img: cardImg.src,
      name: 'Columbia Marquam Peak Fusion parka jacket in black',
      colors: ['red', 'green', 'pink'],
      price: 17,
    },
    {
      id: 12,
      img: cardImg.src,
      name: 'Columbia Marquam Peak Fusion parka jacket in black',
      colors: ['red', 'green', 'pink'],
      price: 17,
    },
  ]

  return (
    <Grid
      className={styles.productList}
      container
      spacing={3}
      justifyContent='center'
    >
      {products.map((product) => {
        return (
          <Grid item key={product.id} xs={3}>
            <ProductCard product={product} />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default ProductList
