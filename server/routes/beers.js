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

module.exports = router