var express = require("express");
var siteRouter = express.Router();
const Dog = require("../models/Dog");

// AUTHENTICATION CHECKER
siteRouter.use((req, res, next) => {
  if (req.session.currentUser) { // <== if there's user in the session (user is logged in)
    next(); // ==> go to the next route -->
  } 																
  else {                          	
  	res.redirect("/auth/login");
  }                     
});																
siteRouter.get('/match',  (req, res) => {
  res.render('match')
});
siteRouter.get('/profile',  (req, res) => {
  const {_id} = req.session.currentUser;

  //doc.find by id to 
  Dog.findOne({_id})
  .then( (dogProfile) => {
    
    const {dogName, age, phoneNumber, breed, image, activity} = dogProfile;
    res.render('profile', {dogName, age, phoneNumber, breed, image, activity});
  })
  .catch( (err) => console.log(err));

  // 
});
siteRouter.get('/swipe',  (req, res) => {
  res.render('swipe')
});

module.exports = siteRouter;