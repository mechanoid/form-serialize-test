const express = require('express')
const bodyParser = require('body-parser')
const multipart = require('connect-multiparty')
const config = require('./package.json').config || {}

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(multipart())

app.use('/', express.static('client'))

app.get('/search', (req, res) => {
  console.log('query:', req.query)
  res.set({'Content-Type': 'application/json'}).status(200).send(JSON.stringify(req.query))
})

app.post('/items', (req, res) => {
  console.log('body:', req.body)
  res.set({'Content-Type': 'application/json'}).status(201).send(JSON.stringify(req.body))
})

const port = process.env.PORT || config.port || 3000
console.log(`start listening on port ${port}`)
app.listen(port)
