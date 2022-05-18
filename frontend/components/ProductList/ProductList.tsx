import React, { FC } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import cardImg from '../../assets/images/card-img.png'
import styles from './ProductList.module.sass'
import { styled } from '@mui/material/styles'
import { Theme, useTheme } from '@mui/material'

interface ProductListProps {
  products: any
}

const ProductList: FC<ProductListProps> = ({ products }) => {
  const theme: Theme = useTheme()
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

  return (
    <ProductListGrid>
      {products.map((product) => {
        return <ProductCard product={product} key={product.id} />
      })}
    </ProductListGrid>
  )
}

export default ProductList
