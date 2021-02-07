const portNumber = process.env.PORT || 3000,
  express = require("express"),
  app = express(),
  layouts = require("express-ejs-layouts");

const expressEjsLayouts = require("express-ejs-layouts");
const homeController = require('./controllers/homeController');
app.listen(portNumber, () => {
    console.log(`Express.js server listening on PORT:${portNumber}`);
});
app.set("view engine", "ejs");
app.use(expressEjsLayouts);


app.get("/name/:myName", homeController.renderName)