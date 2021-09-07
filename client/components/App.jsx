import React from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import BeerList from './BeerList'
import Cart from './Cart'

import beerData from '../../data/beers'

function App (props) {
  const { activePage } = props
  return (
    <div className='app'>
      <Header />
      { activePage === 'listing' ? < BeerList beers={beerData.beers} /> : < Cart /> }
    </div>
  )
}

const mapStateToProps = (globalState) => {
  return {
    activePage: globalState.activePage
  }
}
export default connect(mapStateToProps)(App)
