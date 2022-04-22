import React, { FC } from 'react'

interface ProductCardProps {
  products: Array<any>[]
}

const ProductCard: FC<ProductCardProps> = ({ products }) => {
  return (
    <div>
      {products.map((product) => {
        // return <img src={product.img} alt='' />
      })}
    </div>
  )
}

export default ProductCard
