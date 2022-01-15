import React, { useContext } from 'react'

import { CartContext } from '../routes/Products'

const AddToCart = ({ id, quantity }) => {
  const { setCart } = useContext(CartContext)
  const CartUpdate = () => {
    setCart({ productId: id, quantity })
  }

  return (
    <button className='btn' onClick={CartUpdate}>
      Add to Cart
    </button>
  )
}

export default AddToCart
