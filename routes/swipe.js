var express = require("express");
var swipeRouter = express.Router();
const Dog = require("../models/dog");


swipeRouter.get('/',  (req, res) => {
  const {_id} = req.session.currentUser;
  Dog.find()
    .then((dogs) => {
        let randomNumber =Math.floor((Math.random() * dogs.length) + 1);
        if (dogs[randomNumber]._id !== {_id}){
        const data = {
            dogsObj: dogs[randomNumber] };
            // console.log(data);
            res.render("swipe", data)}
          else if (dogs[randomNumber]._id === {_id}){
            randomNumber ++;
            const data = {
              dogsObj: dogs[randomNumber] };
              // console.log(data);
              
              res.render("swipe", data)}
          }
        )
        .catch(err => console.log(err));
  });

module.exports = swipeRouter;