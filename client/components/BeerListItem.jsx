import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions/index'

function BeerListItem (props) {
  const { name, brewery, country, abv, id } = props.beer
  const { dispatch } = props

  const addClickHandler = () => {
    dispatch(addToCart(id, name))
  }

  return (
    <div className='beer'>
      <p className='name'>{name}</p>
      <p className='description'>{brewery}</p>
      <p>
        <span className='country'>{country}</span>
        <span className='abv'>{abv} abv</span>
        <a href='#' onClick={addClickHandler} className='cart-link'>Add to cart</a>
      </p>
    </div>
  )
}

export default connect()(BeerListItem)
