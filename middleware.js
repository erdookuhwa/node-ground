const express = require('express')
const app = express()
const logger = require('../../logger')
const authorize = require('../../authorize')
const morgan = require('morgan')

// get middleware working on all apis
// app.use( [logger, authorize] )

// can also use middleware on static items
// app.use(express.static('../../public'))

app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.status(200).send('About page!')
})

app.get('/api/products', (req, res) => {
    res.status(200).send('Products Page!')
})

app.get('/api/items', (req, res) => {
    res.status(200).send('Items Page!')
})

app.listen(6005, () => {
    console.log('new express server is listening at port 6005... and still listening');
})