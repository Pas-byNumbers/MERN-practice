// declare DB variables
const MongoDB = require("mongodb").MongoClient,
  dbURL = "mongodb://localhost:27017",
  dbName = "gpwnjs_recipe313";

// Local connect with DB variables
MongoDB.connect(dbURL, (error, client) => {
  if (error) throw error;
  let db = client.db(dbName);
  // insert new data in to specified collection
  db.collection("contacts").insertOne(
    {
      name: "Freddie Mercury",
      email: "fred@queen.com",
    },
    (error, db) => {
      if (error) throw error;
      console.log(db);
    }
  );
  // request 'read data' from DB in Array format
  db.collection("contacts")
    .find()
    .toArray((error, data) => {
      if (error) throw error;
      console.log(data);
    });
});
