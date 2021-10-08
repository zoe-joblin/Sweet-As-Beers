const connection = require('./connection')

function getAllBeers (db = connection) {
  return db('beers')
    .select()
}

function getBeerById(id, db = connection) {
return db('beers')
  .where('id', id)
  .first()
}

function addNewBeer (beer, db = connection) {
  return db('beers')
    .insert(beer)
    .then(beerId => {
      return getBeerById(beerId[0])
})
}

module.exports = {
  getAllBeers,
  getBeerById,
  addNewBeer
  
}