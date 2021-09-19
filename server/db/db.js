const connection = require('./connection')

function getAllBeers (db = connection) {
  return db('beers')
    .select()
}

module.exports = {
  getAllBeers
}