import { NextPage } from 'next'
import React from 'react'
import { Api } from '../../API'
import ProductList from '../../components/ProductList/ProductList'

const Cart = ({ products }) => {
  console.log(products)

  return <div></div>
  return <ProductList products={products} />
}

export const getServerSideProps = async (ctx) => {
  try {
    // const userId = await Api(ctx).user.getMe()
    let products = await Api().user.getCart(1)
    products = products.response.cart.cartItems

    return { props: { products } }
  } catch (err) {
    console.log(err)
    // return {
    //   props: {},
    //   redirect: {
    //     destination: '/',
    //     permanent: false,
    //   },
    // }
  }
  return { props: { products: null } }
}

export default Cart
