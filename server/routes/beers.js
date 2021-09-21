const express = require('express')
const router = express.Router()
const db = require('../db/db')

router.get('/', (req, res) => {
  db.getAllBeers()
    .then(beers => {
      res.json(beers)
    })
    .catch( err => {
      res.send(err.message)
    })
})
router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getBeerById(id)
    .then(beer => {
      res.json(beer)
    })
    .catch( err => {
      res.send(err.message)
    })
})
router.post('/', (req, res) => {
  db.addNewBeer(req.body)
    .then(beer => {
      return res.json(beer)
    })
    .catch( err => {
      res.send(err.message)
    })
})

module.exports = router