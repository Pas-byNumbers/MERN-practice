"use strict";

const Subscriber = require("../models/subscriber");

exports.getAllSubscribers = (req, res, next) => {
  Subscriber.find({}, (error, subscribers) => {
    if (error) next(error);
    req.data = subscribers;
    next();
  });
};

/* 
-- exporting getallSubscribers as a promise --

exports.getAllSubscribers = (req, res) => {
  Subscriber.find({})
  .exec()
  .then((subscribers) => {
      res.render("subscribers", {
        subscribers: subscribers
      });
    })
    .catch((error) => {
      console.log(error.message);
  return []; })
    .then(() => {
      console.log("promise complete");
  }); 
};
*/

exports.getSubscriptionPage = (req, res) => {
  res.render("contact");
};

exports.saveSubscriber = (req, res) => {
  let newSubscriber = new Subscriber({
    name: req.body.name,
    email: req.body.email,
    zipCode: req.body.zipCode,
  });
  newSubscriber.save((error, result) => {
    if (error) res.send(error);
    res.render("thanks");
  });
};

/* 
 -- promise version for new subscriber --

 newSubscriber.save()
  .then(result => {
    res.render("thanks");
  })
  .catch(error => {
    if (error) res.send(error);
});
*/
