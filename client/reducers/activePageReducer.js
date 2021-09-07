import { NAVIGATE } from '../actions'

const activePageReducer = (state = 'listing', action) => {
  switch (action.type) {
    case NAVIGATE:
      return [...state, { activePage: action.activePage }]
    default:
      return state
  }
}

export default activePageReducer
