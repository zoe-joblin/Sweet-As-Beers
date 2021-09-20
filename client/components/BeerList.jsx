import React from 'react'
import { connect } from 'react-redux'

import BeerListItem from './BeerListItem'
import RequestBeer from './RequestBeer'

function BeerList (props) {
 const { beers } = props

  return (
    <div className='beerlist'>
      <p className='welcome'>Welcome! Please select from our delicious selection and don&apos;t hesitate to let us know if we can answer any of your questions.</p>
      {beers.map(beer => {
        return (
          <BeerListItem key={beer.id} beer={beer} />
        )
      })}
      < RequestBeer />
    </div>
  )
}

function mapStateToProps (globalState) {
  return {
    beers: globalState.beers
  }
}

export default connect(mapStateToProps)(BeerList)
