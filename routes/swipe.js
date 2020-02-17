var express = require("express");
var swipeRouter = express.Router();

swipeRouter.get('/',  (req, res) => {
    res.render('swipe')
  });

   
  swipeRouter.get('/',  (req, res) => {
    const {_id} = req.query;
  
    //doc.find by id to 
    Dog.findOne({_id})
    .then( (dogProfile) => {
  
      const {dogName, age, phoneNumber, breed, image, activity} = dogProfile;
      res.render('profile', {dogName, age, phoneNumber, breed, image, activity});
    })
    .catch( (err) => console.log(err));
  
    // 
  });
  
module.exports = swipeRouter;