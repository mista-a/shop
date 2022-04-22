import { Container, Grid } from '@mui/material'
import React, { FC, useEffect } from 'react'
import MainLayout from '../layouts/MainLayout'
import { IProduct } from '../types/product'
import ProductItem from './ProductItem'

interface ProductListProps {
  products: IProduct[]
}

const ProductList: FC<ProductListProps> = ({ products }) => {
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch('http://localhost:3001/products?id=1', {
        method: 'GET',
      })
      const data = await response.json()
      console.log(data)
    }
    getProducts()
    // const a = async () => {
    //   const response = await fetch('http://localhost:3001/product?id=1', {
    //     method: 'POST',
    //   })
    //   const data = await response.json()
    //   console.log(data)
    // }
    // a()
  }, [])

  return (
    <MainLayout>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={3}>
            <ProductItem key={product.id} product={product} />
          </Grid>
        ))}
      </Grid>
    </MainLayout>
  )
}

export default ProductList
