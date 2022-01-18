import React, { useReducer, createContext, useContext, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import reducer from '../components/reducer'

export const CartContext = createContext()

export const useGlobalContext = () => {
  return useContext(CartContext)
}

const Products = () => {
  const [state, dispatch] = useReducer(reducer, {
    cart: [],
    total: 0,
    quantity: 0,
  })

  const addToCart = (id, quantity, price) => {
    dispatch({ type: 'ADD_TO_CART', payload: { id, quantity, price } })
  }
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }
  const remove = (id) => {
    dispatch({ type: 'REMOVE', payload: id })
  }
  const increase = (id) => {
    dispatch({ type: 'INCREASE', payload: id })
  }
  const decrease = (id) => {
    dispatch({ type: 'DECREASE', payload: id })
  }

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' })
    return () => {}
  }, [state.cart])
  return (
    <CartContext.Provider
      value={{ ...state, addToCart, clearCart, remove, increase, decrease }}
    >
      <section className='section'>
        <Outlet />
      </section>
    </CartContext.Provider>
  )
}

export default Products
