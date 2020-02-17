var express = require("express");
var swipeRouter = express.Router();
const Dog = require("../models/Dog");


swipeRouter.get('/',  (req, res) => {
  const {_id} = req.session.currentUser;
  Dog.find({_id: {$ne: {_id}}})
    .then((dogs) => {
        const data = {
            dogsObj: {...dogs} };
            res.render("swipe", data);
        })
        .catch(err => console.log(err));
    });

module.exports = swipeRouter;