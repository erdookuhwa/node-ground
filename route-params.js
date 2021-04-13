const express = require('express')
const app = express()
const { products, people } = require('./data')


// Route Params
app.get('/api/products/:productID', (req, res) => {
    const { productID } = req.params;
    const singleProduct = products.find( product => product.id === Number(productID) )
    if (singleProduct) {
        res.json( singleProduct )
    } else {
        res.status(404).send('<h1>Product does not exist!!!</h1>')
    }
    
})

// app.get('/api/products', (req, res) => {
//     res.json( products )
// })

app.listen(6005, () => {
    console.log('new express server is listening at port 6005...');
})