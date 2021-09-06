import { ADD_TO_CART } from '../actions'

const initialState = []
// [
//   {
//     id: 1,
//     name: 'HBIB Ginger Fusion',
//     quantity: 3
//   }, {
//     id: 2,
//     name: 'Mangose & Melons',
//     quantity: 1
//   }
// ]

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, { id: action.id, name: action.name, quantity: 1 }]
    default:
      return state
  }
}

export default cartReducer
