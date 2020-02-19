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

      for (let i = 0; i < dog.interactions.length; i++) {
        const interaction = dog.interactions[i];
        // if (interaction.dogOneId == matchedDog || interaction.dogTwoId == matchedDog ) {
        
        if (String(interaction.dogOneId) == matchedDog || String(interaction.dogTwoId) == matchedDog ) {
          alreadyMatched = interaction; 
          break;
        } 
      }

      // dog.interactions.forEach((interaction) => {

        
        
      //   if (String(interaction.dogOneId) == matchedDog || String(interaction.dogTwoId) == matchedDog ) {
      //     alreadyMatched = interaction; 
      //   }
      // })
    }
    console.log('alreadyMatched', alreadyMatched);
    
    // if(!alreadyMatched) {
    //   console.log("Not matched");
      
    //     const dogOneId = req.session.currentUser._id;
    //     const dogTwoId = matchedDog;
    //     const dogOneAnswer = req.body.answer;

    //     Match.create({dogOneId, dogTwoId, dogOneAnswer})
    //     .then( (createMatch) => {
    //       Dog.findByIdAndUpdate(
    //         req.session.currentUser._id,
    //         {
    //           $push:{"interactions": createMatch, "selected": matchedDog}
          
    //         }
    //         )
    //       .then((dog)=>{
    //         res.redirect("/profile/swipe")
    //       })
    //     })
    //     .catch((err) => console.log(err));
    // } 

    if(!alreadyMatched) {
      const dogOneId = req.session.currentUser._id;
      const dogTwoId = matchedDog;
      const dogOneAnswer = req.body.answer;

      Match.create({dogOneId, dogTwoId, dogOneAnswer})
        .then( (createMatch) => {
          const { dogTwoId } = createMatch;

          const pr1 = Dog.findByIdAndUpdate(req.session.currentUser._id, {$push:{ interactions: createMatch }});
          const pr2 = Dog.findByIdAndUpdate(req.session.currentUser._id, {$push:{ selected: dogTwoId }});

          const pr3 = Dog.findByIdAndUpdate(matchedDog ,{$push:{"interactions": createMatch }})
          const whenBothUpdatedPr = Promise.all([pr1, pr2, pr3]);
          return whenBothUpdatedPr;
      })
      .then((updatedDogs)=>{
        console.log('UPDATED DOGS OPERATIONS: \n', updatedDogs);
        
        res.redirect("/profile/swipe")
      })
      .catch((err) => console.log(err));
    } 
     else {
      console.log("Matched");
      
      const dogTwoAnswer = req.body.answer;
      // console.log('data we have:', alreadyMatched, dogTwoAnswer);

      let state;

      if (alreadyMatched.dogOneAnswer === "like" && dogTwoAnswer === "like"){
        state = "success";
      } else {
        state = "rejected";
      }
      console.log({alreadyMatched, dogTwoAnswer, state});
      
      
      Match.findByIdAndUpdate(alreadyMatched._id, {dogTwoAnswer, success: state}, {new:true})
      .then((updatedMatch)=>{
        const { dogOneId } = updatedMatch
        const pr = Dog.findByIdAndUpdate(req.session.currentUser._id, {$push:{ selected: dogOneId }});
        return pr;
      })
      .then(() => {
        res.redirect("/profile/swipe")
      })
    }
      
    
  })
})

matchRouter.get('/',  (req, res) => {
  const {_id} = req.session.currentUser;
  Match.find({success:"success", $or:[ {dogOneId: _id}, {dogTwoId: _id}]})
    .then( (matches) => {
      res.render('match', {matches})
    })
    .catch(err => console.log(err)
    )
});

  module.exports = matchRouter;