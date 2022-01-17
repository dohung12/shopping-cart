import React, { useContext } from 'react'

import { CartContext } from '../routes/Products'

const AddToCart = ({ id, quantity }) => {
  const { addToCart } = useContext(CartContext)

  return (
    <button
      className='btn'
      onClick={() => {
        addToCart(id, quantity)
      }}
    >
      Add to Cart
    </button>
  )
}

export default AddToCart
