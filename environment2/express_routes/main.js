const port = 3000,
  express = require("express"),
  app = express();

const productController = require("./controllers/productController")

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

app.get("/items/:product", productController.sendReqParam);

app.post("/", (req, res) => {
  console.log(req.body);
  console.log(req.query);
  res.send("POST Successful!");
});
