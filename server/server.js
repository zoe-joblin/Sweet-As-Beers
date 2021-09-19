const path = require('path')
const express = require('express')

const beerRoutes = require('./routes/beers')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/beers', beerRoutes)

module.exports = server
