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

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    res.send('Yello!!!!')
})

// Query String
app.get('/api/v1/query', (req, res) => {
    const { search, limit } = req.query
    let sortedProducts = [ ...products ]

    if (search) {
        sortedProducts = sortedProducts.filter(product => {
            return product.name.includes(search)
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }

    if ( sortedProducts.length < 1 ) {
        res.status(200).send('<h2 style="color:red">No products match your search criteria</h2>')
    }
    res.status(200).json( sortedProducts )
})

// app.get('/api/products', (req, res) => {
//     res.json( products )
// })

app.listen(6005, () => {
    console.log('new express server is listening at port 6005...');
})