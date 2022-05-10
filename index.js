const fs = require("fs")
const http = require("http")
const readFileSync = fs.readFileSync
const createServer = http.createServer
const server = createServer(handleRequest)
const port = 125


server.listen(port) 


function handleRequest(request, response) {
    if (request.url == '/favicon.ico') {
        const ico = readFileSync('favicon.ico')  
        response.end(ico)
    } else {  
        const html = readFileSync('index.html')  
        response.end(html)
    }
}



