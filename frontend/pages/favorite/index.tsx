import React, { useState } from 'react'
import { Api } from '../../API'
import ProductList from '../../components/ProductList/ProductList'

const Favorite = ({ favorites }) => {
  const [localProducts, setLocacaleProducts] = useState(favorites)

  return (
    <ProductList setProducts={setLocacaleProducts} products={localProducts} />
  )
}

export const getServerSideProps = async (ctx) => {
  try {
    const favorites = await Api(ctx).user.getFavorites()
    return { props: { favorites } }
  } catch (err) {
    console.warn(err)
    return {
      props: {},
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
}

export default Favorite
