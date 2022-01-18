import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledSingleProduct = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: transparent;
  img {
    width: 100%;
    height: 200px;
    object-fit: contain;
  }

  div {
    margin-top: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
  }
`

const ProductItem = ({ title, price, image }) => {
  return (
    <StyledSingleProduct>
      <img src={image} alt={title} />
      <div>
        <h5>{title}</h5>
        <p>${price}</p>
      </div>
    </StyledSingleProduct>
  )
}

ProductItem.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
}

export default ProductItem
