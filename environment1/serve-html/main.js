"use strict";

const http = require("http");
const httpStatus = require("http-status-codes");
const fs = require("fs");
const router = require("./router");
const portNumber = 3000;
const plainTextContentType = {
    "Content-Type": "text/plain",
  },
  htmlContentType = {
    "Content-Type": "text/html",
  };

const customReadFile = (file, res) => {
  fs.readFile(`./${file}`, (errors, data) => {
    if (errors) {
      console.log("Error reading the file...");
    }
    res.end(data);
  });
};

const app = http.createServer();

// you can write routes here or in router.js
router.get("/", (req, res) => {
  res.writeHead(httpStatus.OK, plainTextContentType);
  res.end("INDEX");
});
router.get("/home", (req, res) => {
  res.writeHead(httpStatus.OK, htmlContentType);
  customReadFile("views/home.html", res);
});
router.post("/", (req, res) => {
  res.writeHead(httpStatus.OK, plainTextContentType);
  res.end("POSTED");
});

app.on("request", router.handle).listen(portNumber);
console.log(`The server has started and is listening on PORT:${portNumber}`);
