import React from 'react'
import { connect } from 'react-redux'
import { addToCart, navigate } from '../actions/index'

function BeerListItem ({ beer, dispatch }) {
  const { name, brewery, country, abv, id } = beer

// console.log(beers)

  const addClickHandler = () => {
    dispatch(addToCart(id, name))
    dispatch(navigate('cart'))
  }

  return (
    <div className='beer'>
      <p className='name'>{name}</p>
      <p className='description'>{brewery}</p>
      <p>
        <span className='country'>{country}</span>
        <span className='abv'>{abv} abv</span>
        <a onClick={addClickHandler} className='cart-link'>Add to cart</a>
      </p>
    </div>
  )
}

// function mapStateToProps (globalState) {
//   return {
//     beers: globalState.beers
//   }
// }

export default connect()(BeerListItem)
