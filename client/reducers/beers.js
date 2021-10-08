import { SAVE_BEERS, ADD_BEER } from '../actions'

const initialState = []

const beerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_BEERS:
      return action.beers
    case ADD_BEER:
      return [...state, action.beer] 
    default:
      return state
  }
}

export default beerReducer
