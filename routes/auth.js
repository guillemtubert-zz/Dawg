var express = require("express");
var authRouter = express.Router();
const Dog = require("../models/Dog");

// 1 - Require `bcrypt` for passwords hashing
// 2 - Create variable for the number of salt rounds
const bcrypt = require("bcrypt");
const zxcvbn = require("zxcvbn");
const saltRounds = 10;

// POST '/'
authRouter.post("/signup", (req, res) => {
// 3 - Deconstruct the `username` and `password` from req.body
    const { email, password, dogName, age, phoneNumber, breed, image, activity } = req.body;

console.log(req.body);

// 4 - Check if `username` or `password` are empty and display error message
if (password === "" || email === "" || dogName === "" || phoneNumber === "" || age === "") {
    res.render("auth/signup-form", {
      errorMessage: "Username and Password are required"
    });
    return;
}

Dog.findOne( { email } )
    .then( user => {
//if `username` already exists in the DB and display error message
      if (user) {
          console.log("THIS IS THE USER:", user);
          res.render("auth/signup-form", {
              errorMessage: "That e-mail is already registered"
            });
            return;
      }  

// > If `username` doesn't exist generate salts and hash the password
      const salt = bcrypt.genSaltSync(saltRounds);
      const hashedPassword = bcrypt.hashSync(password, salt);

      console.log(hashedPassword)

      Dog.create({ email, password: hashedPassword, dogName, age, phoneNumber, breed, image, activity })
        .then(createUser => {
        req.session.currentUser= createUser;
          res.render("index") //Donde queremos que vaya despues del register
      })
        .catch(err => {
          res.render("auth/signup-form", {
            errorMessage: "Error while creating the new user."
          });
        });
    })
    .catch(err => console.log(err));

// > After hashing the password, create new user in DB

  // >  When the new user is created, redirect to '/home' page

  // catch errors from User.findOne
});

// GET    /signup
authRouter.get("/signup", (req, res) => {
  res.render("auth/signup-form");
});

authRouter.get("/login", (req, res) => {
    res.render("auth/login-form");
  });

authRouter.post("/login", (req, res) => {
    const { email, password } = req.body;
  });

authRouter.get('/logout', (req, res) => {
    req.session.destroy( (err) => {
      res.redirect('/login')
    })
  })

module.exports = authRouter;
