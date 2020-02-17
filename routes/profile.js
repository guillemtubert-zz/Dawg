var express = require("express");
var siteRouter = express.Router();
const Dog = require("../models/Dog");

const swipeRouter = require ('./swipe')
const matchRouter = require ('./match')

siteRouter.use("/swipe", swipeRouter);
siteRouter.use("/match", matchRouter);

// AUTHENTICATION CHECKER
siteRouter.use((req, res, next) => {
  if (req.session.currentUser) { // <== if there's user in the session (user is logged in)
    next(); // ==> go to the next route -->
  } 																
  else {                          	
  	res.redirect("/index");
  }                     
});

siteRouter.get('/profile',  (req, res) => {
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


siteRouter.get('/profile-settings',  (req, res) => {
  res.render('profile-settings')
});

module.exports = siteRouter;