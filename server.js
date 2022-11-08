require('dotenv').config()
const express = require('express')
const drinks = require('./models/drinks')

const app = express()

const PORT = process.env.PORT 


app.get('/', (req, res) => {
    res.send('Welcome to the Gitpub App!')
})

app.get('/drinks', (req, res) => {
    res.send(drinks)
})

app.listen(PORT, () => {
    console.log('Server listening on port ' + PORT)
})