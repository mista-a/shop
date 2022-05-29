import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Api } from '../../API'
import ProductList from '../../components/ProductList/ProductList'

const SubCategoryPage = ({ products }) => {
  const [localeProducts, setLocaleProducts] = useState(products)

  return (
    <ProductList setProducts={setLocaleProducts} products={localeProducts} />
  )
}

export const getServerSideProps = async (ctx) => {
  try {
    const { products } = await Api(ctx).product.getBySubCategories(
      ctx.query.subcategory,
    )
    return { props: { products: JSON.parse(JSON.stringify(products)) } }
  } catch (err) {
    console.log(err)
    return {
      props: { products: null },
    }
  }
}

export default SubCategoryPage
