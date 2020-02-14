var express = require("express");
var siteRouter = express.Router();

// AUTHENTICATION CHECKER
siteRouter.use((req, res, next) => {
  if (req.session.currentUser) { // <== if there's user in the session (user is logged in)
    next(); // ==> go to the next route ---
  } 																//		|
  else {                          	//    |
  	res.redirect("/auth/login");       	//    |
  }                                 //    |
});																	//		|

// siteRouter.get('/secret',  (req, res) => {
//   res.render('secret')
// })

module.exports = siteRouter;
