import { cleanup } from '@testing-library/react'
import React from 'react'

import { useGlobalContext } from './Products'

it('should add item to cart', () => {
  const { state, addToCart } = useGlobalContext()
  const { cart } = state
  addToCart({ id: 1, quantity: 1 })

  expect(cart).toBe([{ id: 1, quantity: 1 }])
})
