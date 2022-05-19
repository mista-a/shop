import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Api } from '../../API'
import ProductList from '../../components/ProductList/ProductList'

const SearchPage = () => {
  const [products, setProducts] = useState([])

  const router = useRouter()

  const query = router.query
  console.log(query)

  useEffect(() => {
    ;(async () => {
      const products = await Api().product.getAll(`/search?name=${query.name}`)

      setProducts(products)
    })()
  }, [query])

  return <ProductList products={products} />
}

export default SearchPage
