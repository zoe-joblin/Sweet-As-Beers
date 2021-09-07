export const ADD_TO_CART = 'ADD_TO_CART'
export const NAVIGATE = 'NAVIGATE'

export const addToCart = (id, name) => {
  return {
    type: 'ADD_TO_CART',
    id: id,
    name: name
  }
}

export const navigate = (page) => {
  return {
    type: 'NAVIGATE',
    activePage: page
  }
}
