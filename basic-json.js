const express = require('express')
const app = express()
const { people, products } = require('./data')

// app.get('/', (req, res) => {
//     res.json(people)
// })

app.get('/', (req, res) => {
    res.send('<h1>You are at my home page</h1><a href="/api/products">Products Page</a>')
})

// single product
app.get('/api/products/3', (req, res) => {
    const singleProduct = products.find( product => product.id === 3 )
    res.json( singleProduct )
})

// app.get('/api/products', (req, res) => {
//     const newProducts = products.map(product => {
//         const { id, name, image } = product;
//         return { id, name, image }
//     })
//     res.json( newProducts )
// })

app.listen(6005, () => {
    console.log('express server is listening on port 6005...');
})