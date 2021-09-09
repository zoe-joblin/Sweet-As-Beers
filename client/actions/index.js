export const ADD_TO_CART = 'ADD_TO_CART'
export const NAVIGATE = 'NAVIGATE'

export const addToCart = (id, name) => {
  return {
    type: 'ADD_TO_CART',
    cart: {
      id: id,
      name: name,
      quanity: 1
    }
  }
}

export const navigate = (page) => {
  return {
    type: 'NAVIGATE',
    page
  }
}
