const mongoose = require("mongoose"),
  subscriberSchema = mongoose.Schema({
    name: String,
    email: String,
    zipCode: Number,
  });

module.exports = mongoose.model("Subscriber", subscriberSchema);

/* 
-- Add this line to main.js to access the Model:

const Subscriber = require("./models/ subscriber")

-- In main.js you can use CRUD functions and data queries on the model:

let myQuery = Subscriber.findOne({
    name: "Jon Wexler"
})
  .where("email", /wexler/);
myQuery.exec((error, data) => {
  if (data) console.log(data.name);
});

*/
