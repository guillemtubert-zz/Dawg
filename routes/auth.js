var express = require("express");
var authRouter = express.Router();
const Dog = require("../models/Dog");

// 1 - Require `bcrypt` for passwords hashing
// 2 - Create variable for the number of salt rounds
const bcrypt = require("bcrypt");
const zxcvbn = require("zxcvbn");
const saltRounds = 10;

// POST '/'
authRouter.post("/", (req, res) => {
// 3 - Deconstruct the `username` and `password` from req.body
    const { email, password } = req.body;

// 4 - Check if `username` or `password` are empty and display error message
if (password === "" || email === "") {
    res.render("auth/signup-form", {
      errorMessage: "Username and Password are required"
    });
    return;
}

Dog.findOne( { email } )
    .then( (user => {
//if `username` already exists in the DB and display error message
      if (user) {
          console.log("THIS IS THE USER:", user);
          res.render("auth/signup-form", {
              errorMessage: "That e-mail is already registered"
            });
            return;
      }  
    

      
})
    
    
    //.catch( (err) => console.log(err));