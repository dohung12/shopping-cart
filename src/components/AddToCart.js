import React, { useContext, useState, useEffect } from 'react'

import { CartContext } from '../routes/Products'
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h4 {
    margin-top: 2rem;
    color: hsl(360, 67%, 44%);
    padding: 1rem;
    border: 2px solid hsl(360, 67%, 44%);
  }
`

const AddToCart = ({ id, quantity, price }) => {
  const { addToCart } = useContext(CartContext)
  const [showModal, setshowModal] = useState(false)

  const handleClick = () => {
    addToCart(id, quantity, price)
    setshowModal(true)
    setTimeout(() => {
      setshowModal(false)
    }, 700)
  }

  return (
    <StyledDiv>
      <button className='btn' onClick={handleClick}>
        Add to Cart
      </button>
      {showModal && <h4>Added to cart</h4>}
    </StyledDiv>
  )
}

export default AddToCart
