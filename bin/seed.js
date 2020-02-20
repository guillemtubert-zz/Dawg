// import mongoose
// import dog model and import arrayOfDogs
// do mongoose connect -> once then inside mongoose connect -> Dog.create(arrayOfDogs)

const mongoose = require("mongoose");
const Dog = require("../models/dog");
require('dotenv').config();

const dogs = [
        {
      "dogName": "Christie",
      "email": "christie@christiemail.com",
      "password": "dd1f3cfb-8fd8-4ce4-9900-84c2b0c2f498",
      "age": 18,
      "phoneNumber": "(830) 480-2415",
      "breed": "brabancon",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "basenji",
        "ageMin": 13,
        "ageMax": 7
      }
    },
    {
      "dogName": "Ann",
      "email": "ann@annmail.com",
      "password": "7e930a16-c898-4c98-8027-863baf425b5c",
      "age": 7,
      "phoneNumber": "(991) 489-2953",
      "breed": "cairn",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "bouvier",
        "ageMin": 1,
        "ageMax": 17
      }
    },
    {
      "dogName": "Lara",
      "email": "lara@laramail.com",
      "password": "a092574b-3e26-4752-af53-097bb22e44eb",
      "age": 6,
      "phoneNumber": "(824) 546-2028",
      "breed": "terrier",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "pekinese",
        "ageMin": 19,
        "ageMax": 5
      }
    },
    {
      "dogName": "Young",
      "email": "young@youngmail.com",
      "password": "2a3f980f-7119-4e94-b7cc-492b0cb56f51",
      "age": 5,
      "phoneNumber": "(868) 439-2667",
      "breed": "swiss-mountain",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "whippet",
        "ageMin": 4,
        "ageMax": 13
      }
    },
    {
      "dogName": "Annie",
      "email": "annie@anniemail.com",
      "password": "0c8f7b7b-221c-4c97-bc34-94e4e25580ca",
      "age": 2,
      "phoneNumber": "(813) 418-2187",
      "breed": "malinois",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "pinscher",
        "ageMin": 4,
        "ageMax": 18
      }
    },
    {
      "dogName": "Hubbard",
      "email": "hubbard@hubbardmail.com",
      "password": "05015be8-97eb-4b30-8628-627cb4456965",
      "age": 18,
      "phoneNumber": "(890) 574-3903",
      "breed": "setter",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "samoyed",
        "ageMin": 12,
        "ageMax": 3
      }
    },
    {
      "dogName": "Rasmussen",
      "email": "rasmussen@rasmussenmail.com",
      "password": "531b6352-5533-49e7-af29-f6afa4463ce8",
      "age": 6,
      "phoneNumber": "(868) 579-3893",
      "breed": "weimaraner",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "dachshund",
        "ageMin": 15,
        "ageMax": 13
      }
    }
]

  // 1. ESTABLISH CONNECTION TO MONGO
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // 2. CREATE DOCUMENTS FROM THE ARRAY OF BOOKS
    const pr = Dog.create(dogs);
    return pr; //forward the pending promise to the next @then()@
  })
  .then(createdDogs => {
      console.log(`Created ${createdDogs.length} dogs`);
      
      //3, CLOSE THE DB CONNECTION
      const pr = mongoose.connection.close();
      return pr;
  })
   .then(() => console.log("Connection closed!"))
   .catch(err => console.error("Error connecting to mongo", err));

