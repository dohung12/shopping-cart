import React, { useReducer, createContext } from 'react'
import ProductList from '../components/ProductList'

export const CartContext = createContext()

function reducer(state, item) {
  return [...state, item]
}

const Products = () => {
  const [cart, setCart] = useReducer(reducer, [])
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <section className='section'>
        <h1> Products</h1>
        <ProductList />
      </section>
    </CartContext.Provider>
  )
}

export default Products
