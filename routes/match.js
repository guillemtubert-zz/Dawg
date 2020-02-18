var express = require("express");
var matchRouter = express.Router();

const Match = require("../models/Match");

matchRouter.get('/',  (req, res) => {
    res.render('match')
  });

matchRouter.post('/',  (req, res) => {
    
    // Match.create


  });

  module.exports = matchRouter;