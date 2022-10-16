const express = require('express')
const router = express.Router()

//routes go here:

//fav animals
router.get('/animals', (req,res)=>{
    const favAnimals = ['cat the meow', 'dog', 'rabbit', 'horse' ]
    res.render('animals.ejs', {animals: favAnimals })
})

//fav foods
router.get('/foods', (req,res)=>{
    const favFoods = ['ramen', 'sushi', 'chocolate cake', 'coffe']
    res.render('foods.ejs', {foods: favFoods })
})

module.exports = router