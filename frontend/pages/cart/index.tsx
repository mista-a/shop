import { Button } from '@mui/material'
import { NextPage } from 'next'
import React, { useState } from 'react'
import { Api } from '../../API'
import CartList from '../../components/CartList/CartList'
import ProductList from '../../components/ProductList/ProductList'

const Cart = ({ products }) => {
  console.log(products)

  // return <div></div>
  // return <ProductList products={products} />
  const [clearCart, setClearCart] = useState(false)
  return !clearCart ? (
    <div>
      <CartList products={products} />
      <Button
        onClick={() => {
          setClearCart(true)
        }}
      >
        Купить
      </Button>
    </div>
  ) : (
    <div></div>
  )
}

export const getServerSideProps = async (ctx) => {
  // try {
  let products = await Api(ctx).user.getCart()
  return { props: { products } }
  // } catch (err) {
  // console.log(err)
  return {
    props: {},
    redirect: {
      destination: '/',
      permanent: false,
    },
  }
}

export default Cart
