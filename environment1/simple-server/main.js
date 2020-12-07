'use strict';
const portNumber = 3000

const httpCore = require('http');
const httpStatus = require('http-status-codes');

const app = httpCore.createServer((request, response) => {
    console.log("Received an incoming request");
    response.writeHead(httpStatus.OK, {
        "Content-Type": "text/html"
    });
    let responseMessage = "<h1>Hello World from the Server!</h1>"

    response.write(responseMessage)
    response.end
    console.log(`Sent a response back: ${responseMessage}`)
})

app.listen(portNumber)
console.log(`The server has started, currently listening on Port:${portNumber}`)

