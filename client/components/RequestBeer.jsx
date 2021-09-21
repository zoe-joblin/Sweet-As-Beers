import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createNewBeer } from '../actions/index'

function RequestBeer ({ dispatch }) {

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createNewBeer({
      name: newBeerName, 
      brewery: newBeerBrewery, 
      country: newBeerCountry,
      style: newBeerStyle,
      abv: newBeerAbv,
    }))
  }
  
  const [newBeerName, setName] = useState('')
  const [newBeerBrewery, setBrewery] = useState('')
  const [newBeerCountry, setCountry] = useState('')
  const [newBeerStyle, setStyle] = useState('')
  const [newBeerAbv, setAbv] = useState('')

  const handleNameChange = (e) => {
    setName( e.target.value )
  }
  const handleBreweryChange = (e) => {
    setBrewery( e.target.value )
  }
  const handleCountryChange = (e) => {
    setCountry( e.target.value )
  }
  const handleStyleChange = (e) => {
    setStyle( e.target.value )
  }
  const handleAbvChange = (e) => {
    setAbv( e.target.value )
  }

  return (
    <div className='beer'>
     <h2><u>Add a Beer</u></h2>
     <p>Enter the details of the beer you would like to order and we will endeavour to add it to our list</p>
    <form onSubmit={handleSubmit}>
      <label>Name </label>
      <input
        type="text"
        id="newBeer"
        name="name"
        value={newBeerName}
        onChange={handleNameChange}
      />
      <label>Brewery </label>
      <input
        type="text"
        id="newBrewery"
        name="brewery"
        value={newBeerBrewery}
        onChange={handleBreweryChange}
      />
      <label>Country </label>
      <input
        type="text"
        id="newCountry"
        name="country"
        value={newBeerCountry}
        onChange={handleCountryChange}
      />
      <label>Style </label>
      <input
        type="text"
        id="newStyle"
        name="style"
        value={newBeerStyle}
        onChange={handleStyleChange}
      />
       <label>ABV </label>
      <input
        type="text"
        id="newAbv"
        name="abv"
        value={newBeerAbv}
        onChange={handleAbvChange}
      />
      <button>Request a new beer</button>
      </form>
    </div>
  )
}


export default connect()(RequestBeer)
