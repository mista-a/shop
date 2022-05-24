import React, { FC, useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import cardImg from '../../assets/images/card-img.png'
import styles from './ProductList.module.sass'
import { styled } from '@mui/material/styles'
import { Api } from '../../API'
import { theme } from '../../theme'

interface ProductListProps {
  products: any
}

// : FC<ProductListProps>
const ProductList = ({ products, onAddToFavorite }) => {
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

  // const [products, setProducts] = useState([])

  // useEffect(() => {
  // Api().product.getPopular
  // },[])

  // const onAddToFavorite = async (productId: number) => {
  //   try {
  //     Api().user.addToFavorite(productId)
  //     products.forEach((product) => {
  //       if (product.id === productId) {
  //         console.log(!product.favorite)
  //         product.favorite = !product.favorite
  //       }
  //     })
  //   } catch {}
  // }

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
