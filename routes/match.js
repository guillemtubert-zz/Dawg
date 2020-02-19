var express = require("express");
var matchRouter = express.Router();
const Dog = require("../models/dog.js");
const Match = require("../models/match.js");



matchRouter.post('/:id', (req, res, next) =>{
  const matchedDog = req.params.id;

  Dog.findById(req.session.currentUser._id).populate('interactions')
  .then( (dog) => {
    let alreadyMatched =false
    if (dog.interactions.length) {

      dog.interactions.forEach((interaction) => {
        
        if (interaction.dogOneId == matchedDog || interaction.dogTwoId == matchedDog ) {
          alreadyMatched = interaction; 
        }
      })
    }
    console.log('alreadyMatched', alreadyMatched);
    
    if(!alreadyMatched) {
        const dogOneId = req.session.currentUser._id;
        const dogTwoId = matchedDog;
        const dogOneAnswer = req.body.answer;

        Match.create({dogOneId, dogTwoId, dogOneAnswer})
        .then( (createMatch) => {
          Dog.findByIdAndUpdate(req.session.currentUser._id,{$push:{"interactions":createMatch}})
          .then((dog)=>{
            res.redirect("/profile/swipe")
          })
        })
        .catch((err) => console.log(err));
    } else {
      const dogTwoAnswer = req.body.answer;
      console.log('data we have:', alreadyMatched, dogTwoAnswer);

      let success;

      if (alreadyMatched.dogOneAnswer === "like" && dogTwoAnswer === "like"){
        success = "success";
      } else {
        success = "rejected";
      }
      
      Match.findByIdAndUpdate(alreadyMatched._id, {dogTwoAnswer, success}, {new:true})
      .then((match)=>{
        console.log("match", match)
        res.redirect("/profile/swipe")
      })    
    }
      
    
  })
})

matchRouter.get('/',  (req, res) => {
    res.render('match')
});

  module.exports = matchRouter;