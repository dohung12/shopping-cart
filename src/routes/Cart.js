import React, { useContext } from 'react'

import { CartContext } from './Products'

const Cart = () => {
  const { cart } = useContext(CartContext)
  console.log(cart)
  return (
    <div>
      <h1>Hello from cart</h1>
    </div>
  )
}

export default Cart
