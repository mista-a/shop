import { styled, Theme, useTheme } from '@mui/material'
import React, { FC } from 'react'
import Counter from '../Counter/Counter'
import ProductCard from '../ProductCard/ProductCard'
import styles from './CartList.module.sass'

interface CartListProps {
  products: Array<any>
}

const CartList: FC<CartListProps> = ({ products }) => {
  const theme: Theme = useTheme()
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

  return (
    <div>
      <ProductListGrid>
        {/* <div className={styles.cartList}> */}
        {products.map((product) => {
          return (
            <div>
              <ProductCard product={product.item} />
              <Counter defaultCounter={product.counter} />
            </div>
          )
        })}
      </ProductListGrid>
    </div>
  )
}

export default CartList
