import React from 'react'
import { Api } from '../../API'
import ProductList from '../../components/ProductList/ProductList'

const Favorite = ({ favorites }) => {
  console.log(favorites)

  return <ProductList onAddToFavorite={() => {}} products={favorites} />
}

export const getServerSideProps = async (ctx) => {
  try {
    const favorites = await Api(ctx).user.getFavorites()
    return { props: { favorites } }
  } catch (err) {
    console.warn(err)
  }
  return { props: { favorites: null } }
}

export default Favorite
