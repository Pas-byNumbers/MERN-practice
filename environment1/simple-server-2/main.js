"use strict";

const portNumber = 3000;

const httpCore = require("http");
const httpStatus = require("http-status-codes");

const app = httpCore.createServer();

app.on("request", (req, res) => {
    res.writeHead(httpStatus.OK, { 
        'Content-Type': 'text/html'
    });
    let responseMessage = '<h1>This is the response message</h1>';
    res.end(responseMessage);
});

app.listen(portNumber);
console.log(
  `The server has started, currently listening on Port:${portNumber}`
);
