// initialise DB connection
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/gpwnjs_recipe313", {
  useNewUrlParser: true,
});

// pass connection to its own variable and confirm connection in terminal
const db = mongoose.connection;
db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose!");
});

// map out the schema rules for your data collection
const subscriberSchema = mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

// attach the schema to a model in your data collection, the model is capitalised
const Subscriber = mongoose.model("Subscriber", subscriberSchema);

//   Instantiate a new subscriber and save in separeate steps
let subscriber1 = new Subscriber({
  name: "Jon Wexler",
  email: "jon@jonwexler.com",
});
subscriber1.save((error, savedDocument) => {
  if (error) console.log(error);
  console.log(savedDocument);
});

//   same as above yet all in one step

Subscriber.create(
  {
    name: "Jon Wexler",
    email: "jon@jonwexler.com",
  },
  function (error, savedDocument) {
    if (error) console.log(error);
    console.log(savedDocument);
  }
);
