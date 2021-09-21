import { getBeers, postNewBeer } from '../api/beers'

export const ADD_TO_CART = 'ADD_TO_CART'
export const NAVIGATE = 'NAVIGATE'
export const SAVE_BEERS = 'SAVE_BEERS'
export const ADD_BEER = 'ADD_BEER'

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
export const addBeer = (newBeer) => {
  return {
    type: 'ADD_BEER',
    beer: newBeer
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
export function createNewBeer (newBeer) {
  return dispatch => {
    postNewBeer(newBeer)
      .then((beer) => {
        dispatch(addBeer(beer))
      })
  }
}