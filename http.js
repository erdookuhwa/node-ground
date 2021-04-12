const http = require('http')

const server = http.createServer( (request, response) => {
    if (request.url === '/') {
        response.end('Welcome to Erdoo"s home page!')
    }
    if (request.url === '/about') {
        response.end('Welcome to my about page!')
    }
    response.end(`
        <h1>Uh oh</h1>
        <p>The page you are looking for does not exist</p>
        <a href='/'>go home</a>
    `)
})

server.listen(5000)