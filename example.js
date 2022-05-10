const http = require("http")
const createServer = http.createServer
const server = createServer(handleRequest)
const port = 3250

server.listen(port)

// require("http").createServer(handleRequest).listen(port)

function handleRequest(request, response) {
    response.end("hello from server")
}   