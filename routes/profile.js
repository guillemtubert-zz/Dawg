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

// GET /profile

siteRouter.get('/profile',  (req, res) => {
  const {_id} = req.session.currentUser;

  Dog.findOne({_id})
  .then( (dogProfile) => {
    console.log("dogProfile", dogProfile);
    
    const {dogName, age, phoneNumber, breed, image, activity, _id} = dogProfile;
    res.render('profile', {dogName, age, phoneNumber, breed, image, activity, _id});
    console.log("age", dogName);
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
  const { dogName, age, breed } = req.body;

  Dog.updateOne({_id}, { dogName, age, breed } )
  .then( () => res.redirect("/profile/profile"))
  .catch( (err) => console.log(err));
});

// GET /profile/edit

siteRouter.get('/edit',  (req, res) => {

  const { _id } = req.session.currentUser;
  console.log('id', _id);
  

  Dog.findOne({ _id: _id })
    .then(oneDog => {
      const data = {
        dog: oneDog
      };
      console.log(data);
      
      res.render("profile-settings", data);
    })
    .catch(err => console.log(err));

});

module.exports = siteRouter;