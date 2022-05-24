import { styled } from '@mui/material'
import React, { FC } from 'react'
import Counter from '../Counter/Counter'
import ProductCard from '../ProductCard/ProductCard'
import CartCard from '../CartCard/CartCard'
import styles from './CartList.module.sass'
import { theme } from '../../theme'

interface CartListProps {
  products: Array<any>
}

const CartList: FC<CartListProps> = ({ products }) => {
  const ProductListGrid: FC = styled('div')(() => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '30px',
    [theme.breakpoints.down('tablet')]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    [theme.breakpoints.down('mobile')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  }))

  // cart.forEach((product, index) => {
  //   if (product.item.id === productId) {
  //     cart.splice(index, 1)
  //   }
  // })
  console.log(products)

  return products.length ? (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
      {/* <ProductListGrid> */}
      {/* <div className={styles.cartList}> */}
      {products.map((product) => {
        return <CartCard product={product} products={products} />
      })}
      {/* </ProductListGrid> */}
    </div>
  ) : (
    <span className={styles.emptyError}>Корзина пуста</span>
  )
}

export default CartList
