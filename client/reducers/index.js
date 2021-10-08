import { combineReducers } from 'redux'

import cart from './cart'
import page from './page'
import beers from './beers'

export default combineReducers({
  cart,
  page,
  beers
})
