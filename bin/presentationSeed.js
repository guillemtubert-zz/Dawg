// import mongoose
// import dog model and import arrayOfDogs
// do mongoose connect -> once then inside mongoose connect -> Dog.create(arrayOfDogs)

const mongoose = require("mongoose");
const Dog = require("../models/Dog");
const bcrypt = require("bcrypt");
require('dotenv').config();

const saltRounds = 10;

const dbName = "Dog-Network";
const dogs = [
    {
      "dogName": "Fuller",
      "email": "fuller@fullermail.com",
      "password": "aaa",
      "age": 9,
      "phoneNumber": "(905) 567-3872",
      "breed": "springer",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "selected": [],
      "searchPreferences": {
        "breed": "otterhound",
        "ageMin": 6,
        "ageMax": 12
      }
    },
    {
      "dogName": "Clay",
      "email": "clay@claymail.com",
      "password": "aaa",
      "age": 18,
      "phoneNumber": "(870) 411-3479",
      "breed": "ridgeback",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "selected": [],
      "searchPreferences": {
        "breed": "keeshond",
        "ageMin": 6,
        "ageMax": 6
      }
    },
    {
      "dogName": "Martin",
      "email": "martin@martinmail.com",
      "password": "aaa",
      "age": 17,
      "phoneNumber": "(892) 566-2340",
      "breed": "basenji",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "selected": [],
      "searchPreferences": {
        "breed": "chihuahua",
        "ageMin": 19,
        "ageMax": 16
      }
    },
    {
      "dogName": "Park",
      "email": "park@parkmail.com",
      "password": "aaa",
      "age": 12,
      "phoneNumber": "(849) 484-3212",
      "breed": "cattledog",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "selected": [],
      "searchPreferences": {
        "breed": "schnauzer",
        "ageMin": 12,
        "ageMax": 2
      }
    },
    {
      "dogName": "Camacho",
      "email": "camacho@camachomail.com",
      "password": "aaa",
      "age": 5,
      "phoneNumber": "(854) 484-2888",
      "breed": "otterhound",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "selected": [],
      "searchPreferences": {
        "breed": "greyhound",
        "ageMin": 10,
        "ageMax": 10
      }
    },
    {
      "dogName": "Bridgette",
      "email": "bridgette@bridgettemail.com",
      "password": "aaa",
      "age": 18,
      "phoneNumber": "(911) 554-3753",
      "breed": "vizsla",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "selected": [],
      "searchPreferences": {
        "breed": "basenji",
        "ageMin": 3,
        "ageMax": 7
      }
    },
    {
      "dogName": "Vinson",
      "email": "vinson@vinsonmail.com",
      "password": "aaa",
      "age": 10,
      "phoneNumber": "(992) 433-3368",
      "breed": "dalmatian",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "selected": [],
      "searchPreferences": {
        "breed": "bichon-frise",
        "ageMin": 14,
        "ageMax": 20
      }
    },
    {
      "dogName": "Earnestine",
      "email": "earnestine@earnestinemail.com",
      "password": "aaa",
      "age": 20,
      "phoneNumber": "(817) 444-2014",
      "breed": "spaniel",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "selected": [],
      "searchPreferences": {
        "breed": "bluetick",
        "ageMin": 3,
        "ageMax": 12
      }
    },
    {
      "dogName": "Jessie",
      "email": "jessie@jessiemail.com",
      "password": "aaa",
      "age": 20,
      "phoneNumber": "(834) 423-3855",
      "breed": "whippet",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "selected": [],
      "searchPreferences": {
        "breed": "hound",
        "ageMin": 10,
        "ageMax": 1
      }
    },
    {
      "dogName": "Lavonne",
      "email": "lavonne@lavonnemail.com",
      "password": "aaa",
      "age": 9,
      "phoneNumber": "(873) 445-2619",
      "breed": "pomeranian",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "selected": [],
      "searchPreferences": {
        "breed": "pomeranian",
        "ageMin": 17,
        "ageMax": 2
      }
    },
    {
      "dogName": "Francesca",
      "email": "francesca@francescamail.com",
      "password": "aaa",
      "age": 4,
      "phoneNumber": "(888) 482-3642",
      "breed": "havanese",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "selected": [],
      "searchPreferences": {
        "breed": "malinois",
        "ageMin": 13,
        "ageMax": 2
      }
    },
    {
      "dogName": "Inez",
      "email": "inez@inezmail.com",
      "password": "aaa",
      "age": 17,
      "phoneNumber": "(937) 416-2521",
      "breed": "shiba",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "selected": [],
      "searchPreferences": {
        "breed": "briard",
        "ageMin": 18,
        "ageMax": 7
      }
    },
    {
      "dogName": "Celia",
      "email": "celia@celiamail.com",
      "password": "aaa",
      "age": 17,
      "phoneNumber": "(996) 546-3186",
      "breed": "wolfhound",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "selected": [],
      "searchPreferences": {
        "breed": "everything",
        "ageMin": 3,
        "ageMax": 16
      }
    },
    {
      "dogName": "Horton",
      "email": "horton@hortonmail.com",
      "password": "aaa",
      "age": 12,
      "phoneNumber": "(905) 407-3158",
      "breed": "labrador",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "selected": [],
      "searchPreferences": {
        "breed": "dingo",
        "ageMin": 7,
        "ageMax": 10
      }
    },
    {
      "dogName": "Patel",
      "email": "patel@patelmail.com",
      "password": "aaa",
      "age": 18,
      "phoneNumber": "(825) 489-2584",
      "breed": "doberman",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "selected": [],
      "searchPreferences": {
        "breed": "great-dane",
        "ageMin": 3,
        "ageMax": 4
      }
    },
    {
      "dogName": "Mcdaniel",
      "email": "mcdaniel@mcdanielmail.com",
      "password": "aaa",
      "age": 7,
      "phoneNumber": "(833) 453-3941",
      "breed": "norwegian-buhund",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "selected": [],
      "searchPreferences": {
        "breed": "entlebucher",
        "ageMin": 13,
        "ageMax": 13
      }
    },
    {
      "dogName": "Shelby",
      "email": "shelby@shelbymail.com",
      "password": "aaa",
      "age": 3,
      "phoneNumber": "(912) 453-2923",
      "breed": "stbernard",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "selected": [],
      "searchPreferences": {
        "breed": "rottweiler",
        "ageMin": 12,
        "ageMax": 3
      }
    },
    {
      "dogName": "Bessie",
      "email": "bessie@bessiemail.com",
      "password": "aaa",
      "age": 4,
      "phoneNumber": "(904) 514-3615",
      "breed": "weimaraner",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "selected": [],
      "searchPreferences": {
        "breed": "schipperke",
        "ageMin": 14,
        "ageMax": 1
      }
    },
    {
      "dogName": "Lucinda",
      "email": "lucinda@lucindamail.com",
      "password": "aaa",
      "age": 17,
      "phoneNumber": "(973) 421-3145",
      "breed": "spaniel",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "selected": [],
      "searchPreferences": {
        "breed": "shihtzu",
        "ageMin": 14,
        "ageMax": 20
      }
    },
    {
      "dogName": "Ava",
      "email": "ava@avamail.com",
      "password": "aaa",
      "age": 11,
      "phoneNumber": "(902) 417-3718",
      "breed": "dachshund",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "selected": [],
      "searchPreferences": {
        "breed": "bulldog",
        "ageMin": 0,
        "ageMax": 17
      }
    },
      ]

const updatedDogs = dogs.map((dog) => {
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedPassword = bcrypt.hashSync(dog.password, salt);

  dog.password = hashedPassword;
  return dog;
})
  // 0. ESTABLISH CONNECTION TO MONGO
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((connection) => {
    console.log('CONNECTED TO DATABASE');
    
    // 1. DROP THE EXISTING DATABASE
    const dropDbPr = connection.connection.dropDatabase();
    return dropDbPr; 
  })
  .then(() => {
    console.log('DATABASE DROPPED');
    
    // 2. CREATE DOCUMENTS FROM THE ARRAY OF BOOKS
    const pr = Dog.create(updatedDogs);
    return pr; //forward the pending promise to the next @then()@
  })
  .then(createdDogs => {
      console.log(`Created ${createdDogs.length} dogs`);
      
      //3, CLOSE THE DB CONNECTION
      const pr = mongoose.connection.close();
      return pr;
  })
   .then(() => console.log("CONNECTION!"))
   .catch(err => console.error("Error connecting to mongo", err));

