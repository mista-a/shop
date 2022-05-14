import { NextPage } from 'next'
import React from 'react'
import { Api } from '../../API'

const Cart = ({ favorite }) => {
  console.log(favorite)
  return <div></div>
}

export const getServerSideProps = async (ctx) => {
  try {
    const userId = await Api(ctx).user.getMe()
    const favorite = await Api().user.getFavorite(userId)

    return { props: { favorite } }
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
  return { props: { userId: null } }
}

export default Cart
