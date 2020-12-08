"use strict";

const http = require("http");
const httpStatus = require("http-status-codes");

const portNumber = 3000

const routeResponseMap = {
  "/info": "<h1>Info Page</h1>",
  "/about": "<h1>About Page</h1>",
  "/hello": "<h1>Hello Page</h1>"
}

const app = http.createServer();


app.on("request", (req, res) => {

  res.writeHead(httpStatus.OK, {
    "Content-Type": "text/html"
  });

  if (routeResponseMap[req.url]) {
    res.end(routeResponseMap[req.url]);
  } else {
    res.end("<h1>Welcome</h1>");
  }
  
});

app.listen(portNumber);
console.log(
  `The server has started and is listening on PORT:${portNumber}`
);
