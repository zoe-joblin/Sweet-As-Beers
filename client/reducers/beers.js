import { SAVE_BEERS } from '../actions'

const initialState = []

const beerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_BEERS:
      return action.beers
    default:
      return state
  }
}

export default beerReducer
