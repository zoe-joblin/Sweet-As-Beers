import { NAVIGATE } from '../actions'

const initialState = []

const activePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case NAVIGATE:
      return [...state, { activePage: action.activePage }]
    default:
      return state
  }
}

export default activePageReducer
