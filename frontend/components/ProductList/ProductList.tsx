import React, { FC, useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import cardImg from '../../assets/images/card-img.png'
import styles from './ProductList.module.sass'
import { styled } from '@mui/material/styles'
import { Api } from '../../API'
import { theme } from '../../theme'
import { Product } from '../../types/product'

interface ProductListProps {
  setProducts: (products) => void
  products: any
}

const ProductList: FC<ProductListProps> = ({ setProducts, products }) => {
  const ProductListGrid: FC = styled('div')(() => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '30px',
    [theme.breakpoints.down('tablet')]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    [theme.breakpoints.down('mobile')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  }))

  console.log(products)

  const onAddToFavorite = async (productId: number) => {
    try {
      await Api().user.addToFavorite(productId)
      //: Product
      products.map((product) => {
        if (product.id === productId) {
          product.inFavorite = !product.inFavorite
        }
      })
      setProducts([...products])
    } catch (err) {
      console.warn(err)
    }
  }

  return (
    <ProductListGrid>
      {products.map((product) => {
        return (
          <ProductCard
            product={product}
            key={product.id}
            onAddToFavorite={onAddToFavorite}
          />
        )
      })}
    </ProductListGrid>
  )
}

export default ProductList
