"use strict";

const http = require("http");
const httpStatus = require("http-status-codes");
const fs = require("fs");

const portNumber = 3000;

const sendErrorResponse = (res) => {
  res.writeHead(httpStatus.NOT_FOUND, {
    "Content-Type": "text/html",
  });
  res.write("<h1>404 - Page Not Found!</h1>");
  res.end();
};

const customReadFile = (file_path, res) => {
    if (fs.existsSync(file_path)) {
      fs.readFile(file_path, (error, data) => {
        if (error) {
          console.log(error);
          sendErrorResponse(res);
          return;
        }
        res.write(data);
        res.end();
  });
  } else {
      sendErrorResponse(res);
    }
  };

const app = http.createServer();

app.on("request", (req, res) => {
  let urlReq = req.url;
  if (urlReq.indexOf(".html") !== -1) {
    res.writeHead(httpStatus.OK, {
      "Content-Type": "text/html",
    });
    customReadFile(`./views${urlReq}`, res);
  } else if (urlReq.indexOf(".js") !== -1) {
    res.writeHead(httpStatus.OK, {
      "Content-Type": "text/javascript",
    });
    customReadFile(`./public/js${urlReq}`, res);
  } else if (urlReq.indexOf(".css") !== -1) {
    res.writeHead(httpStatus.OK, {
      "Content-Type": "text/css",
    });
    customReadFile(`./public/css${urlReq}`, res);
  } else if (urlReq.indexOf(".png") !== -1) {
    res.writeHead(httpStatus.OK, {
      "Content-Type": "image/png",
    });
    customReadFile(`./public/images${urlReq}`, res);
  } else {
    sendErrorResponse(res);
  }
});

app.listen(portNumber);
console.log(`The server has started and is listening on PORT:${portNumber}`);
