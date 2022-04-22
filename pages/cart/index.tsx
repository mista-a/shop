import React, { useEffect, useState } from 'react'
import ProductItem from '../../components/ProductItem'
import MainLayout from '../../layouts/MainLayout'

const Index = () => {
  const [cart, setCart] = useState([])

  const userId = 1

  useEffect(() => {
    const getCart = async () => {
      const response = await fetch(`http://localhost:3001/users/${userId}`)
      const cart = await response.json()
      setCart(cart.cart)
    }

    getCart()
  }, [])

  console.log(cart)

  return (
    <MainLayout>
      <div>
        {cart.map((product) => {
          return <ProductItem product={product} />
        })}
      </div>
    </MainLayout>
  )
}

export default Index
