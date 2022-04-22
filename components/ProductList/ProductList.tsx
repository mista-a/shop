import React, { FC } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import cardImg from '../../assets/images/card-img.png'
import { Grid } from '@mui/material'
import styles from './ProductList.module.sass'

const ProductList: FC = () => {
  const products = [
    {
      img: cardImg.src,
      name: 'Columbia Marquam Peak Fusion parka jacket in black',
      colors: ['red', 'green', 'pink'],
      price: 17,
    },
    {
      img: cardImg.src,
      name: 'Columbia Marquam Peak Fusion parka jacket in black',
      colors: ['red', 'green', 'pink'],
      price: 17,
    },
    {
      img: cardImg.src,
      name: 'Columbia Marquam Peak Fusion parka jacket in black',
      colors: ['red', 'green', 'pink'],
      price: 17,
    },
    {
      img: cardImg.src,
      name: 'Columbia Marquam Peak Fusion parka jacket in black',
      colors: ['red', 'green', 'pink'],
      price: 17,
    },
    {
      img: cardImg.src,
      name: 'Columbia Marquam Peak Fusion parka jacket in black',
      colors: ['red', 'green', 'pink'],
      price: 17,
    },
    {
      img: cardImg.src,
      name: 'Columbia Marquam Peak Fusion parka jacket in black',
      colors: ['red', 'green', 'pink'],
      price: 17,
    },
    {
      img: cardImg.src,
      name: 'Columbia Marquam Peak Fusion parka jacket in black',
      colors: ['red', 'green', 'pink'],
      price: 17,
    },
    {
      img: cardImg.src,
      name: 'Columbia Marquam Peak Fusion parka jacket in black',
      colors: ['red', 'green', 'pink'],
      price: 17,
    },
    {
      img: cardImg.src,
      name: 'Columbia Marquam Peak Fusion parka jacket in black',
      colors: ['red', 'green', 'pink'],
      price: 17,
    },
    {
      img: cardImg.src,
      name: 'Columbia Marquam Peak Fusion parka jacket in black',
      colors: ['red', 'green', 'pink'],
      price: 17,
    },
    {
      img: cardImg.src,
      name: 'Columbia Marquam Peak Fusion parka jacket in black',
      colors: ['red', 'green', 'pink'],
      price: 17,
    },
    {
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
          <Grid item xs={3}>
            <ProductCard product={product} />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default ProductList
