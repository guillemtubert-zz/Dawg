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
  const {_id} = req.session.currentUser;

  //doc.find by id to 
  Dog.findOne({_id})
  .then( (dogProfile) => {
    console.log(dogProfile);
    
    const {dogName, age, phoneNumber, breed, image, activity} = dogProfile;
    res.render('profile', {dogName, age, phoneNumber, breed, image, activity});
  })
  .catch( (err) => console.log(err));
});

// GET     
siteRouter.get("/delete/:dogId", (req, res) => {
  Dog.findByIdAndRemove(req.params.dogId)
    .then(() => res.redirect("/auth/signup-form"))
    .catch(err => console.log(err));
});

// Render the edit form 

siteRouter.get('/edit',  (req, res) => {
  const { _id } = req.query;

  Dog.findOne({ _id: _id })
    .then(oneDog => {
      const data = {
        dog: oneDog
      };

      res.render("profile-settings", data);
    })
    .catch(err => console.log(err));
});

module.exports = siteRouter;