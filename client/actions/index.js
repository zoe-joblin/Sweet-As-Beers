import {getBeers} from '../api/beers'

export const ADD_TO_CART = 'ADD_TO_CART'
export const NAVIGATE = 'NAVIGATE'
export const SAVE_BEERS = 'SAVE_BEERS'

export const saveAllBeers = (beers) => {
  return {
    type: 'SAVE_BEERS',
    beers
  }
}

export const addToCart = (id, name) => {
  return {
    type: 'ADD_TO_CART',
    cart: {
      id: id,
      name: name,
      quanity: 1
    }
  }
}

export const navigate = (page) => {
  return {
    type: 'NAVIGATE',
    page
  }
}

//THUNKS//
export function fetchBeersThunk () {
  return (dispatch) => {
    getBeers()
      .then((beers) => {
        dispatch(saveAllBeers(beers))
      })
  }
}