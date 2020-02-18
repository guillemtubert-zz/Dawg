// import mongoose
// import dog model and import arrayOfDogs
// do mongoose connect -> once then inside mongoose connect -> Dog.create(arrayOfDogs)

const mongoose = require("mongoose");
const Dog = require("../models/Dog");
require('dotenv').config();

const dbName = "Dog-Network";
const dogs = [
    {
      "dogName": "Fuller",
      "email": "fuller@fullermail.com",
      "password": "51bb7958-2192-4e2b-8368-3f3760b27b4b",
      "age": 9,
      "phoneNumber": "(905) 567-3872",
      "breed": "springer",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "otterhound",
        "ageMin": 6,
        "ageMax": 12
      }
    },
    {
      "dogName": "Clay",
      "email": "clay@claymail.com",
      "password": "f80fb75b-6fba-4bd0-9114-659145e85c16",
      "age": 18,
      "phoneNumber": "(870) 411-3479",
      "breed": "ridgeback",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "keeshond",
        "ageMin": 6,
        "ageMax": 6
      }
    },
    {
      "dogName": "Martin",
      "email": "martin@martinmail.com",
      "password": "b83a3304-783c-4996-823e-95dadbef0800",
      "age": 17,
      "phoneNumber": "(892) 566-2340",
      "breed": "basenji",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "chihuahua",
        "ageMin": 19,
        "ageMax": 16
      }
    },
    {
      "dogName": "Park",
      "email": "park@parkmail.com",
      "password": "521a354f-6beb-42b8-9f50-570ee49e12ee",
      "age": 12,
      "phoneNumber": "(849) 484-3212",
      "breed": "cattledog",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "schnauzer",
        "ageMin": 12,
        "ageMax": 2
      }
    },
    {
      "dogName": "Camacho",
      "email": "camacho@camachomail.com",
      "password": "2540b9ac-b45f-4744-94f5-ecb22c7d71f0",
      "age": 5,
      "phoneNumber": "(854) 484-2888",
      "breed": "otterhound",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "greyhound",
        "ageMin": 10,
        "ageMax": 10
      }
    },
    {
      "dogName": "Bridgette",
      "email": "bridgette@bridgettemail.com",
      "password": "e53033e1-8435-46fa-a96e-9229572c6573",
      "age": 18,
      "phoneNumber": "(911) 554-3753",
      "breed": "vizsla",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "basenji",
        "ageMin": 3,
        "ageMax": 7
      }
    },
    {
      "dogName": "Vinson",
      "email": "vinson@vinsonmail.com",
      "password": "7d864c7f-e175-422b-8e71-cbbe1c311c35",
      "age": 10,
      "phoneNumber": "(992) 433-3368",
      "breed": "dalmatian",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "bichon-frise",
        "ageMin": 14,
        "ageMax": 20
      }
    },
    {
      "dogName": "Earnestine",
      "email": "earnestine@earnestinemail.com",
      "password": "f2ee7076-764e-4a49-8de9-14714a7b95bb",
      "age": 20,
      "phoneNumber": "(817) 444-2014",
      "breed": "spaniel",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "bluetick",
        "ageMin": 3,
        "ageMax": 12
      }
    },
    {
      "dogName": "Jessie",
      "email": "jessie@jessiemail.com",
      "password": "8c4d4fbe-b59e-49d4-b292-eb7109800471",
      "age": 20,
      "phoneNumber": "(834) 423-3855",
      "breed": "whippet",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "hound",
        "ageMin": 10,
        "ageMax": 1
      }
    },
    {
      "dogName": "Lavonne",
      "email": "lavonne@lavonnemail.com",
      "password": "dee750ba-15ce-4cbc-85c3-4e06f91d8da0",
      "age": 9,
      "phoneNumber": "(873) 445-2619",
      "breed": "pomeranian",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "pomeranian",
        "ageMin": 17,
        "ageMax": 2
      }
    },
    {
      "dogName": "Francesca",
      "email": "francesca@francescamail.com",
      "password": "9a55693b-16b4-4dae-8e09-a0e5588cbe60",
      "age": 4,
      "phoneNumber": "(888) 482-3642",
      "breed": "havanese",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "malinois",
        "ageMin": 13,
        "ageMax": 2
      }
    },
    {
      "dogName": "Inez",
      "email": "inez@inezmail.com",
      "password": "f5d8edd6-87d7-40d6-948a-b122ee12c652",
      "age": 17,
      "phoneNumber": "(937) 416-2521",
      "breed": "shiba",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "briard",
        "ageMin": 18,
        "ageMax": 7
      }
    },
    {
      "dogName": "Celia",
      "email": "celia@celiamail.com",
      "password": "0c2a27d2-6a73-4a1d-b858-6b2ba5792788",
      "age": 17,
      "phoneNumber": "(996) 546-3186",
      "breed": "wolfhound",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "everything",
        "ageMin": 3,
        "ageMax": 16
      }
    },
    {
      "dogName": "Horton",
      "email": "horton@hortonmail.com",
      "password": "1d720217-0d97-420a-b082-5bd463e49b6a",
      "age": 12,
      "phoneNumber": "(905) 407-3158",
      "breed": "labrador",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "dingo",
        "ageMin": 7,
        "ageMax": 10
      }
    },
    {
      "dogName": "Patel",
      "email": "patel@patelmail.com",
      "password": "bbd26a4b-d49d-41b5-8189-0abb11fd768d",
      "age": 18,
      "phoneNumber": "(825) 489-2584",
      "breed": "doberman",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "great-dane",
        "ageMin": 3,
        "ageMax": 4
      }
    },
    {
      "dogName": "Mcdaniel",
      "email": "mcdaniel@mcdanielmail.com",
      "password": "6c6bbc6f-7f36-4b54-a049-a067ef48852d",
      "age": 7,
      "phoneNumber": "(833) 453-3941",
      "breed": "norwegian-buhund",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "entlebucher",
        "ageMin": 13,
        "ageMax": 13
      }
    },
    {
      "dogName": "Shelby",
      "email": "shelby@shelbymail.com",
      "password": "173fd3e6-6ddd-42be-9e43-643c0be80a5f",
      "age": 3,
      "phoneNumber": "(912) 453-2923",
      "breed": "stbernard",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "rottweiler",
        "ageMin": 12,
        "ageMax": 3
      }
    },
    {
      "dogName": "Bessie",
      "email": "bessie@bessiemail.com",
      "password": "d2137352-7157-409b-9b5e-1974c010676a",
      "age": 4,
      "phoneNumber": "(904) 514-3615",
      "breed": "weimaraner",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "schipperke",
        "ageMin": 14,
        "ageMax": 1
      }
    },
    {
      "dogName": "Lucinda",
      "email": "lucinda@lucindamail.com",
      "password": "a1903a32-6256-4f57-953e-eecf0a601c47",
      "age": 17,
      "phoneNumber": "(973) 421-3145",
      "breed": "spaniel",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "shihtzu",
        "ageMin": 14,
        "ageMax": 20
      }
    },
    {
      "dogName": "Ava",
      "email": "ava@avamail.com",
      "password": "89c4524f-2407-4fe6-aac8-0d6b442fffbc",
      "age": 11,
      "phoneNumber": "(902) 417-3718",
      "breed": "dachshund",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "bulldog",
        "ageMin": 0,
        "ageMax": 17
      }
    },
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

