import React from 'react'
import { useGlobalContext } from './Products'
import styled from 'styled-components'
import CartItem from '../components/CartItem'
const StyledEmptyCart = styled.section`
  h2 {
    text-transform: uppercase;
    text-align: center;
  }

  h5 {
    text-transform: capitalize;
    text-align: center;
    margin-top: 2rem;
  }
`

const StyledCart = styled.section`
  min-height: calc(100vh - 120px);
  width: 90vw;
  margin: 0 auto;
  margin-top: 40px;
  padding: 2.5rem 0;
  max-width: 50rem;

  h2 {
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 3rem;
  }

  footer {
    margin-top: 4rem;
    text-align: center;
  }
  .cart-total h4 {
    text-transform: capitalize;
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }

  .clear-btn {
    background: transparent;
    padding: 0.5rem 1rem;
    color: hsl(360, 67%, 44%);
    border: 1px solid hsl(360, 67%, 44%);
    margin-top: 2.25rem;
    border-radius: 0.25rem;
  }
`

const Cart = () => {
  const { cart, total, clearCart } = useGlobalContext()
  if (cart.length === 0) {
    return (
      <StyledEmptyCart className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h5 className='empty-cart'>is currently empty</h5>
        </header>
      </StyledEmptyCart>
    )
  }

  return (
    <StyledCart className='cart'>
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className='btn clear-btn' onClick={clearCart}>
          clear cart
        </button>
      </footer>
    </StyledCart>
  )
}

export default Cart
