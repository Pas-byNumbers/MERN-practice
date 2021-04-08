const port = 3000,
  express = require('express'),
  app = express();

app.get('/', (req, res) => {
    res.send("Hello World! Launched with express!");
    console.log(
      '\n',
      `req_params: ${req.params}\n`, 
      `req_body: ${req.body}\n`, 
      `req_url: ${req.url}\n`, 
      `req_query: ${req.query}`
      )
}).listen(port, () => {
    console.log(`Express.js server has started listening on PORT:⌲ ${port}`)
});