import express from 'express'
import products from './assets/data/productData.js'

const app = express()

// Get Products
app.get('/', (req, res) => {
    res.send(products)
})

app.listen(3000, () => {
    console.log("Server is running ..");
})