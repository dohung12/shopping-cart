import React, { useReducer, createContext } from 'react'
import { Outlet } from 'react-router-dom'
import reducer from '../components/reducer'

export const CartContext = createContext()

const Products = () => {
  const [state, dispatch] = useReducer(reducer, { cart: [] })

  const addToCart = (id, quantity) => {
    dispatch({ type: 'ADD_TO_CART', payload: { id, quantity } })
  }

  return (
    <CartContext.Provider value={{ ...state, addToCart }}>
      <section className='section'>
        <Outlet />
      </section>
    </CartContext.Provider>
  )
}

export default Products
