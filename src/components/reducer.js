function reducer(state, action) {
  if (action.type === 'ADD_TO_CART') {
    const { id, quantity } = action.payload

    const flag = state.cart.some((cartItem) => cartItem.id === id)
    if (flag) {
      let tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id) {
          return { ...cartItem, quantity: cartItem.quantity + quantity }
        }
        return cartItem
      })
      return {
        ...state,
        cart: tempCart,
      }
    } else {
      const newCart = [...state.cart, { id, quantity }]
      return { ...state, cart: newCart }
    }
  }
}

export default reducer
