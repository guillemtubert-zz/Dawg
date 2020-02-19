var express = require("express");
var siteRouter = express.Router();
const Dog = require("./../models/Dog");

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

// GET /profile

siteRouter.get('/profile',  (req, res) => {
  const {_id} = req.session.currentUser;

  Dog.findOne({_id})
  .then( (dogProfile) => {

    
    const {dogName, age, phoneNumber, breed, image, activity, searchPreferences, _id} = dogProfile;
    res.render('profile', {dogName, age, phoneNumber, breed, image, activity, searchPreferences, _id});
   
  })
  .catch( (err) => console.log(err));
});

// POST /profile/delete

siteRouter.post("/delete/:id", (req, res) => {
  
  Dog.findByIdAndRemove(req.params.id)
    .then(() => res.redirect("/"))
    .catch(err => console.log(err));
});


// POST /profile/edit

siteRouter.post('/edit', (req, res) => {
  const { _id } = req.session.currentUser;
  const { dogName, age, breed, activity } = req.body;
  // const { ageMin, ageMax } = req.body.searchPreferences;
  const searchPreferences = {
    breed: req.body.searchPreferencesBreed,
    ageMin: req.body.searchPreferencesAgeMin,
    ageMax: req.body.searchPreferencesAgeMax,
  }
  

  Dog.updateOne({_id}, { dogName, age, breed, activity, searchPreferences } )
  .then( () => res.redirect("/profile/profile"))
  .catch( (err) => console.log(err));
});

// GET /profile/edit

siteRouter.get('/edit',  (req, res) => {

  const { _id } = req.session.currentUser;

  

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