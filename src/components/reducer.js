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
      const newCart = [...state.cart, action.payload]
      return { ...state, cart: newCart }
    }
  }
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] }
  }
  if (action.type === 'REMOVE') {
    const id = action.payload
    return {
      ...state,
      cart: state.cart.filter((element) => element.id !== id),
    }
  }
  if (action.type === 'INCREASE') {
    const id = action.payload
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 }
      }
      return cartItem
    })
    return {
      ...state,
      cart: tempCart,
    }
  }
  if (action.type === 'DECREASE') {
    const id = action.payload
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === id) {
          return { ...cartItem, quantity: cartItem.quantity - 1 }
        }
        return cartItem
      })
      .filter((cartItem) => cartItem.quantity >= 1)
    return {
      ...state,
      cart: tempCart,
    }
  }
  if (action.type === 'GET_TOTALS') {
    let { total, quantity } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, quantity } = cartItem
        cartTotal.quantity += quantity
        cartTotal.total += quantity * price
        return cartTotal
      },
      { total: 0, quantity: 0 }
    )
    total = parseFloat(total.toFixed(2))
    return { ...state, quantity, total }
  }
}

export default reducer
