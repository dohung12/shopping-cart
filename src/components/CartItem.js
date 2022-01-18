import React, { useState, useEffect } from 'react'
import { useGlobalContext } from '../routes/Products'
import { FaPlus, FaMinus } from 'react-icons/fa'
import styled from 'styled-components'
const url = 'https://fakestoreapi.com/products/'

const StyledArticle = styled.article`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  grid-column-gap: 1.5rem;
  margin: 1.5rem 0;

  img {
    width: 5rem;
    height: 5rem;
    object-fit: contain;
  }
  h4 {
    margin-bottom: 0.5rem;
    font-weight: 500;
    letter-spacing: 2px;
    font-size: 1rem;
  }
  .item-price {
    color: var(--grey-500);
  }

  button {
    background-color: transparent;
    border: transparent;
    color: var(--primary-700);
  }

  button:hover {
    transform: scale(1.1);
    color: var(--primary-400);
  }

  .remove-btn {
    color: var(--primary-500);
    letter-spacing: 1px;
  }
  .amount-btn-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
`

const CartItem = ({ id, quantity }) => {
  const { remove, increase, decrease } = useGlobalContext()
  const [product, setProduct] = useState({})

  const fetchData = async () => {
    const response = await fetch(url + id)
    const data = await response.json()

    setProduct(data)
  }

  useEffect(() => {
    fetchData()
    return () => {}
  }, [])

  const { image, price, title } = product
  return (
    <StyledArticle>
      <img src={image} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        {/* remove button */}
        <button className='remove-btn' onClick={() => remove(id)}>
          remove
        </button>
      </div>
      <div className='amount-btn-container'>
        {/* increase amount */}
        <button onClick={() => increase(id)}>
          <FaPlus />
        </button>
        {/* amount */}
        <h5>{quantity}</h5>
        {/* decrease amount */}
        <button onClick={() => decrease(id)}>
          <FaMinus />
        </button>
      </div>
    </StyledArticle>
  )
}

export default CartItem
