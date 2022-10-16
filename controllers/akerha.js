const express = require('express')
const router = express.Router()

//routes go here:

//least fav movies
router.get('/movies', (req,res)=>{
    const unFavMovies = ['Baby Geniuses', 'Death Note netflix adaption', 'Ice Age']
    res.render('movies.ejs', {movies: unFavMovies })
})

//least fav products
router.get('/products', (req,res)=>{
    const unFavProducts = ['head and shoulder shampoo', 'strabucks sugary drinks']
    res.render('products.ejs', {products: unFavProducts })
})




module.exports = router

