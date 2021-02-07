const portNumber = process.env.PORT || 3000,
  express = require("express"),
  app = express();

const homeController = require('./controllers/homeController')

app.set("view engine", "ejs");
app.listen(portNumber, () => {
    console.log(`Express.js server listening on PORT:${portNumber}`);
});

app.get("/name", homeController.renderName)