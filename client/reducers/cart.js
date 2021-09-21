import { ADD_TO_CART } from '../actions'
import BeerListItem from '../components/BeerListItem'

const initialState = []

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if(state.some(beer => beer.id === action.cart.id)) {
        return state.map(beer => ({
         id: beer.id,
         name: beer.name,
         quanity: beer.id === action.cart.id ? beer.quantity + 1: 1
        }))
      }
    return [
      ...state, 
      {
        id: action.cart.id,
        name: action.cart.name,
        quantity: 1
      }
      
    ]
    default:
      return state
  }
}

export default cartReducer

// function manageCart (state, newItem) {
//   let duplicate = false

//   let cartArray = state.map(beer => {
//     if (beer.id === newItem.id) {
//      beer.quanity += 1 
//       duplicate = true
//     } return beer
//   })

//   if (duplicate) {
//     return cartArray
//   } else {
//     return cartArray 
//   }
// }

