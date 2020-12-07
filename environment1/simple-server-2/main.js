"use strict";

const coreVars = {
    portNumber: 3000,
    http: require("http"),
    httpStatus: require("http-status-codes"),
}

const app = coreVars.http.createServer()

app.on("request", (req, res) => {
    res.writeHead(httpStatus.OK, { 
        'Content-Type': 'text/html'
    });
    let responseMessage = '<h1>This is the response message</h1>';
    res.end(responseMessage);
});

app.listen(coreVars.portNumber);
console.log(
  `The server has started, currently listening on Port:${coreVars.portNumber}`
);
