import { NAVIGATE } from '../actions'

const activePageReducer = (state = 'listing', action) => {
  switch (action.type) {
    case NAVIGATE:
      return action.page
    default:
      return state
  }
}

export default activePageReducer
