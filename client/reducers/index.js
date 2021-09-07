import { combineReducers } from 'redux'

import cartReducer from './cartReducer'
import activePageReducer from './activePageReducer'

export default combineReducers({
  cartReducer,
  activePageReducer
})
