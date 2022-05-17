import React, { useState } from 'react'
import Counter from '../Counter/Counter'
import ProductCard from '../ProductCard/ProductCard'

const CartCard = ({ product }) => {
  const [counter, setCounter] = useState(product.count)
  return (
    <div>
      <ProductCard product={product.item} />
      <Counter counter={counter} setCounter={setCounter} />
    </div>
  )
}

export default CartCard
