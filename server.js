require('dotenv').config()
const express = require('express')
const drinks = require('./models/drinks')

const app = express()

const PORT = process.env.PORT 

//creating home page route
app.get('/', (req, res) => {
    res.send('Welcome to the Gitpub App!')
})

//creating a new route for the drinks
app.get('/drinks', (req, res) => {
    res.render('drinks_index.ejs', {
        drinks
    })
})

app.listen(PORT, () => {
    console.log('Server listening on port ' + PORT)
})