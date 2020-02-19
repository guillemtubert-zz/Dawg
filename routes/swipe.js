var express = require("express");
var swipeRouter = express.Router();
const Dog = require("../models/dog");


swipeRouter.get('/',  (req, res) => {
  const {_id} = req.session.currentUser;
  // Dog.find()
  //   .then((dogs) => {
  //       let randomNumber =Math.floor((Math.random() * dogs.length) + 1);
  //       if (dogs[randomNumber]._id !== {_id}){
  //       const data = {
  //           dogsObj: dogs[randomNumber] };
  //           // console.log(data);
  //           res.render("swipe", data)}
  //         else if (dogs[randomNumber]._id === {_id}){
  //           randomNumber ++;
  //           const data = {
  //             dogsObj: dogs[randomNumber] };
  //             // console.log(data);
              
  //             res.render("swipe", data)}


    

        function getRandomDog(){
          Dog.find( {_id:{$ne: _id}} )
          .then((dogs) => {
            let randomNumber =Math.floor((Math.random() * dogs.length));
            let randomDog = dogs[randomNumber]
            console.log('randomDog', randomDog);
            
            if (randomDog._id == _id){
              getRandomDog()
              return;

            } else{
              Dog.findById(req.session.currentUser._id).populate('interactions')
              .then( (currentDog) => {
                // console.log('CurrentDog', currentDog._id, "randomDog", randomDog._id)
                // if (currentDog._id == randomDog._id){
                //   return getRandomDog()
                // } 
                const previousMatch = currentDog.interactions.filter((interaction)=> {
                  const conditionOne = interaction.success != "awaiting";
                  const conditionTwo = String(interaction.dogOneId) == String(randomDog._id);
                  const conditionThree = String(interaction.dogTwoId) == String(randomDog._id);
                  // console.log(interaction);
                  console.log(randomDog._id, interaction.dogTwoId, interaction.dogOneId);
                  
                  console.log(conditionOne, conditionTwo, conditionThree);
                  
                  return conditionOne && (conditionTwo || conditionThree)
                });

                console.log('previousMatch',previousMatch);
                
                if (previousMatch.length){
                  return getRandomDog()
                } else {
                  const data = {
                  dogsObj:randomDog };

                  res.render("swipe", data)
                }
              })
            }
          })
          .catch((err)=>console.log(err));
        }

        getRandomDog()
    })
    // .catch((err) => console.log(err));


module.exports = swipeRouter;