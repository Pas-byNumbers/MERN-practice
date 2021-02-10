const express = require("express"),
  app = express(),
  layouts = require("express-ejs-layouts")

const homeController = require("./controllers/homeController"),
    errorController = require("./controllers/errorController")

app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());
app.set("view engine", "ejs");
app.use(layouts);
app.use(express.static ("public"))

app.listen((port = process.env.PORT || 3000), () => {
  console.log(`Express JS server is running on PORT:${port}`);
});

app.get("/", homeController.renderHomePage);
app.get("/courses", homeController.showCourses);
app.get("/contact", homeController.showSignUp);
app.post("/contact", homeController.postedSignUpForm);

app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);