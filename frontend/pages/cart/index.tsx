import { NextPage } from 'next'
import React from 'react'
import { Api } from '../../API'
import CartList from '../../components/CartList/CartList'
import ProductList from '../../components/ProductList/ProductList'

const Cart = ({ products }) => {
  console.log(products)

  // return <div></div>
  // return <ProductList products={products} />
  return <CartList products={products} />
}

export const getServerSideProps = async (ctx) => {
  try {
    // const userId = await Api(ctx).user.getMe()
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
  return { props: { products: null } }
}

export default Cart
