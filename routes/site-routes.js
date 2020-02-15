var express = require("express");
var siteRouter = express.Router();

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
  res.render('profile')
});

siteRouter.get('/swipe',  (req, res) => {
  res.render('swipe')
});

module.exports = siteRouter;
