const httpStatus = require("http-status-codes");

const htmlContentType = {
  "Content-Type": "text/html",
};

//   you can write routes here or in main.js
const routes = {
  GET: {
    "/info": (req, res) => {
      res.writeHead(httpStatus.OK, {
        "Content-Type": "text/plain",
      });
      res.end("Welcome to the Info Page!");
    },
  },
  POST: {},
};

exports.handle = (req, res) => {
  try {
    if (routes[req.method][req.url]) {
      routes[req.method][req.url](req, res);
    } else {
      res.writeHead(httpStatus.NOT_FOUND, htmlContentType);
      res.end("<h1>404 - Page not found</h1>");
    }
  } catch (ex) {
    console.log("error: " + ex);
  }
};

// export routes list (obj) to be available for main.js to add its own paths
exports.get = (url, action) => {
  routes["GET"][url] = action;
};
exports.post = (url, action) => {
  routes["POST"][url] = action;
};
