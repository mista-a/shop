import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Api } from '../../API'
import Counter from '../Counter/Counter'
import ProductCard from '../ProductCard/ProductCard'
import styles from './CartCard.module.sass'
import ClearIcon from '@mui/icons-material/Clear'

const CartCard = ({ product, products }) => {
  const [counter, setCounter] = useState(product.count)
  //FIX!!!!!
  const [deleted, setDeleted] = useState(false)

  const deleteFromCart = async () => {
    await Api().user.deleteFromCart(product.item.id)
    setDeleted(true)
  }

  useEffect(() => {
    if (counter !== product.count) {
      Api().user.addToCart(product.type, counter, product.item.id)
    }
  }, [counter])

  return (
    <div
      className={`${styles.cartItem} ${deleted ? styles.cartItemDeleted : ''}`}
    >
      <img className={styles.img} src={product.type} alt={product.name} />
      {/* <ProductCard product={product.item} /> */}
      <div className={styles.about}>
        <Button onClick={deleteFromCart}>
          <ClearIcon fontSize='small' />
        </Button>
        <span>{product.name}</span>
        <Counter counter={counter} setCounter={setCounter} />
        <span>$ {product.price * counter}</span>
      </div>
    </div>
  )
}

export default CartCard
