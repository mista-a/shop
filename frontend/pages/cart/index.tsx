import { NextPage } from 'next'
import React from 'react'
import { Api } from '../../API'
import CartList from '../../components/CartList/CartList'
import ProductList from '../../components/ProductList/ProductList'

const Cart = ({ products }) => {
  // return <div></div>
  // return <ProductList products={products} />
  return <CartList products={products} />
}

export const getServerSideProps = async (ctx) => {
  try {
    let products = await Api(ctx).user.getCart()
    products = products.response.cart.cartItems
    return { props: { products } }
  } catch (err) {
    console.log(err)
    return {
      props: {},
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
}

export default Cart
