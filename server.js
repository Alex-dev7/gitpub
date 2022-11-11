require('dotenv').config()
const express = require('express')
const drinks = require('./models/drinks')
const food = require('./models/food')


const app = express()

//middleware?
app.use("/static", express.static("public"))

const PORT = process.env.PORT 

//creating home page route that will link drinks and food routes
app.get('/', (req, res) => {
    res.render('home_index.ejs')
})

//----------DRINKS-------------------
//creating a new route for the drinks
app.get('/drinks', (req, res) => {
    res.render('drinks_index.ejs', {
        drinks
    })
})

//setting up show route
app.get('/drinks/:id', (req, res) => {
    res.render('drinks_show.ejs', {
        drinks: drinks[req.params.id]
    })
})


//----------FOOD-------------------
//creating a new route for the food
app.get('/food', (req, res) => {
    res.render('food_index.ejs', {
        food
    })
})

//setting up show route for indiv food
app.get('/food/:id', (req, res) => {
    res.render('food_show.ejs', {
        food: food[req.params.id]
    })
})


app.listen(PORT, () => {
    console.log('Server listening on port ' + PORT)
})