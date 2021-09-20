import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import BeerList from './BeerList'
import Cart from './Cart'

import { fetchBeersThunk } from '../actions/index'

function App ({ activePage }) {

  useEffect(() => {
    dispatch(fetchBeersThunk())
  }, [])


  return (
    <div className='app'>
      <Header />

      { activePage === 'listing' ? < BeerList beers={beerData.beers} /> : < Cart /> }
    </div>
  )
}

const mapStateToProps = (globalState) => {
  return {
    activePage: globalState.page
  }
}
export default connect(mapStateToProps)(App)
