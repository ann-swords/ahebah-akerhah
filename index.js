//Importing express and ejsLayouts
const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')

const PORT = 3000

//Middleware
app.set('view engine', 'ejs')
app.use(ejsLayouts)
//constrollers middleware
app.use('/akerha', require('./controllers/akerha.js'))
app.use('/ahebah', require('./controllers/ahebah.js'))

//Routes
app.get('/', (req, res) =>{
    res.render('home.ejs')
})


//Listener
app.listen(PORT,() => {
    console.log("You're running the Ahebah, Akerhah App")
})