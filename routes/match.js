var express = require("express");
var matchRouter = express.Router();
const Dog = require("./../models/Dog");
const Match = require("./../models/Match");



matchRouter.post('/:id', (req, res, next) =>{
  const matchedDog = req.params.id;

  Dog.findById(req.session.currentUser._id).populate('interactions')
  .then( (dog) => {
    console.log("dog.interactions.length", dog.interactions.length)
    let alreadyMatched =false
    if (dog.interactions.length) {

      dog.interactions.forEach((interaction) => {
        if (interaction.dogOneId === matchedDog || interaction.dogTwoId === matchedDog ) {
          alreadyMatched = interaction; 
        }
      })
    }
    if(!alreadyMatched) {
        const dogOneId = req.session.currentUser._id;
        const dogTwoId = matchedDog;
        const dogOneAnswer = req.body.answer;

        console.log(dogOneId, dogTwoId, dogOneAnswer);

        Match.create({dogOneId, dogTwoId, dogOneAnswer})
        .then( (createMatch) => {
          Dog.findByIdAndUpdate(req.session.currentUser._id,{$push:{"interactions":createMatch}})
          .then((dog)=>{
            console.log('doggggg',dog)
            console.log("created Match",createMatch)
            res.redirect("/profile/swipe")
          })
        })
        .catch((err) => console.log(err));
    } else {
      const dogTwoAnswer = req.body.answer;
      Match.findByIdAndUpdate(alreadyMatched._id, {dogTwoAnswer}, {new:true})
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