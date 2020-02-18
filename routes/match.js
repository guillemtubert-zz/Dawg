var express = require("express");
var matchRouter = express.Router();


matchRouter.post('/', (req, res, next) =>{
  console.log("matchrouter")
})

matchRouter.get('/',  (req, res) => {
    res.render('match')
});

matchRouter.post('/',  (req, res) => {
    
    // Match.create


  });

  module.exports = matchRouter;