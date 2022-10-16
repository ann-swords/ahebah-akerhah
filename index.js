//Importing express and ejsLayouts
const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')

const PORT = 3000

//Middleware
app.set('view engine', 'ejs')
app.use(ejsLayouts)

//Routes

app.get('/', (req, res) =>{
    res.render('home.ejs')
})

//fav animals
app.get('/animals', (req,res)=>{
    const favAnimals = ['cat the meow', 'dog', 'rabbit', 'horse' ]
    res.render('animals.ejs', {animals: favAnimals })
})



//Listener
app.listen(PORT,() => {
    console.log("You're running the Ahebah, Akerhah App")
})