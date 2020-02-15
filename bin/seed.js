// import mongoose
// import dog model and import arrayOfDogs
// do mongoose connect -> once then inside mongoose connect -> Dog.create(arrayOfDogs)

const mongoose = require("mongoose");
const Dog = require("../models/Dog");

const dbName = "Dog-Network";

const dogs = [
    {
      "dogName": "Watkins",
      "email": "watkins@watkinsmail",
      "password": "cb3a53ad-baec-4caa-a77e-aaa8721725ef",
      "phoneNumber": "+1 (993) 456-2078",
      "breed": "bulldog",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "shi tzu",
        "ageMin": 6,
        "ageMax": 17
      }
    },
    {
      "dogName": "Ferrell",
      "email": "ferrell@ferrellmail",
      "password": "0cdc92b0-c51f-4bbf-9264-bb56a9ba56c3",
      "phoneNumber": "+1 (898) 583-3419",
      "breed": "mix",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "everything",
        "ageMin": 12,
        "ageMax": 20
      }
    },
    {
      "dogName": "Patel",
      "email": "patel@patelmail",
      "password": "8dba6846-3f19-4409-a6da-7f8767253f24",
      "phoneNumber": "+1 (985) 531-2147",
      "breed": "mix",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "everything",
        "ageMin": 19,
        "ageMax": 14
      }
    },
    {
      "dogName": "Palmer",
      "email": "palmer@palmermail",
      "password": "3cf18b00-e8eb-4a7d-99d3-155cdf0c315a",
      "phoneNumber": "+1 (900) 590-2808",
      "breed": "bulldog",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "everything",
        "ageMin": 2,
        "ageMax": 18
      }
    },
    {
      "dogName": "Stephenson",
      "email": "stephenson@stephensonmail",
      "password": "c9fa2da7-8c1a-4519-83a4-4deff0eefda3",
      "phoneNumber": "+1 (953) 413-2008",
      "breed": "bulldog",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "everything",
        "ageMin": 0,
        "ageMax": 20
      }
    },
    {
      "dogName": "Walker",
      "email": "walker@walkermail",
      "password": "4d114611-91a6-4fcd-9b08-761b128f8087",
      "phoneNumber": "+1 (874) 492-2119",
      "breed": "shi tzu",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "bulldog",
        "ageMin": 4,
        "ageMax": 9
      }
    },
    {
      "dogName": "Lessie",
      "email": "lessie@lessiemail",
      "password": "e7390425-7a82-4dbd-b5e9-229ee93b121e",
      "phoneNumber": "+1 (807) 418-2306",
      "breed": "bulldog",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "everything",
        "ageMin": 12,
        "ageMax": 9
      }
    },
    {
      "dogName": "Gamble",
      "email": "gamble@gamblemail",
      "password": "daf1f3ef-cb46-44a2-a5ab-66d69a09cb5c",
      "phoneNumber": "+1 (819) 427-2015",
      "breed": "bulldog",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "bulldog",
        "ageMin": 0,
        "ageMax": 8
      }
    },
    {
      "dogName": "Huber",
      "email": "huber@hubermail",
      "password": "b201fffa-bf8f-458d-8d6e-78899d573941",
      "phoneNumber": "+1 (845) 501-2335",
      "breed": "mix",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "shi tzu",
        "ageMin": 15,
        "ageMax": 2
      }
    },
    {
      "dogName": "Eve",
      "email": "eve@evemail",
      "password": "67acff61-f573-469f-baac-266a0a21e5ed",
      "phoneNumber": "+1 (901) 575-3754",
      "breed": "bulldog",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "everything",
        "ageMin": 16,
        "ageMax": 10
      }
    },
    {
      "dogName": "Day",
      "email": "day@daymail",
      "password": "d410aa05-1499-4dca-bc7a-cf1967cabbf4",
      "phoneNumber": "+1 (872) 523-2842",
      "breed": "mix",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "everything",
        "ageMin": 11,
        "ageMax": 7
      }
    },
    {
      "dogName": "Dianne",
      "email": "dianne@diannemail",
      "password": "9139eb9d-5621-46cb-84da-1faa36682a09",
      "phoneNumber": "+1 (898) 507-3717",
      "breed": "mix",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "mix",
        "ageMin": 1,
        "ageMax": 10
      }
    },
    {
      "dogName": "Holland",
      "email": "holland@hollandmail",
      "password": "07f942a3-081f-448b-97ce-8b33e95336e9",
      "phoneNumber": "+1 (974) 400-3757",
      "breed": "shi tzu",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "everything",
        "ageMin": 12,
        "ageMax": 17
      }
    },
    {
      "dogName": "Kellie",
      "email": "kellie@kelliemail",
      "password": "cc11e48f-251a-4300-b9d0-cd22cbc66862",
      "phoneNumber": "+1 (890) 587-3069",
      "breed": "bulldog",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "bulldog",
        "ageMin": 1,
        "ageMax": 17
      }
    },
    {
      "dogName": "Marcella",
      "email": "marcella@marcellamail",
      "password": "6f404d09-676c-430a-a03e-f6a68b7a0dff",
      "phoneNumber": "+1 (934) 448-3855",
      "breed": "bulldog",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "shi tzu",
        "ageMin": 16,
        "ageMax": 14
      }
    },
    {
      "dogName": "Koch",
      "email": "koch@kochmail",
      "password": "03076e33-5c8e-41c5-a8ef-1da9c6c76be4",
      "phoneNumber": "+1 (834) 421-3121",
      "breed": "shi tzu",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "bulldog",
        "ageMin": 18,
        "ageMax": 15
      }
    },
    {
      "dogName": "Chandler",
      "email": "chandler@chandlermail",
      "password": "5d89273b-a161-4745-8ac7-7b8e82d0b8ba",
      "phoneNumber": "+1 (989) 495-2206",
      "breed": "bulldog",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "bulldog",
        "ageMin": 3,
        "ageMax": 10
      }
    },
    {
      "dogName": "Suzanne",
      "email": "suzanne@suzannemail",
      "password": "0ef2b22c-9153-45e5-b274-a368636ae569",
      "phoneNumber": "+1 (801) 585-2287",
      "breed": "bulldog",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "mix",
        "ageMin": 18,
        "ageMax": 2
      }
    },
    {
      "dogName": "Mcclain",
      "email": "mcclain@mcclainmail",
      "password": "39432083-3bfc-44f2-8839-5c8ad673f406",
      "phoneNumber": "+1 (956) 573-3151",
      "breed": "mix",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "shi tzu",
        "ageMin": 0,
        "ageMax": 11
      }
    },
    {
      "dogName": "Luann",
      "email": "luann@luannmail",
      "password": "25c25de5-e467-4a86-92be-a4e468de4e2d",
      "phoneNumber": "+1 (962) 412-2617",
      "breed": "bulldog",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "mix",
        "ageMin": 13,
        "ageMax": 12
      }
    },
    {
      "dogName": "Jo",
      "email": "jo@jomail",
      "password": "168c7ccb-5b94-442c-bda4-004f4edddd1d",
      "phoneNumber": "+1 (872) 580-3392",
      "breed": "mix",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "shi tzu",
        "ageMin": 5,
        "ageMax": 14
      }
    },
    {
      "dogName": "Reilly",
      "email": "reilly@reillymail",
      "password": "a6946b5b-aa51-4773-8a45-080c61c8f276",
      "phoneNumber": "+1 (848) 483-2833",
      "breed": "bulldog",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "bulldog",
        "ageMin": 7,
        "ageMax": 3
      }
    },
    {
      "dogName": "Buckner",
      "email": "buckner@bucknermail",
      "password": "28ced8fb-4e15-4462-97f3-fea3f8bf4713",
      "phoneNumber": "+1 (876) 548-2650",
      "breed": "mix",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "everything",
        "ageMin": 12,
        "ageMax": 2
      }
    },
    {
      "dogName": "Katy",
      "email": "katy@katymail",
      "password": "4ce2bd97-1aec-4dcc-9c79-977b4abda804",
      "phoneNumber": "+1 (893) 424-3152",
      "breed": "bulldog",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "everything",
        "ageMin": 17,
        "ageMax": 17
      }
    },
    {
      "dogName": "Callahan",
      "email": "callahan@callahanmail",
      "password": "1ee22f40-01b9-430f-a657-2fb73a9cb76a",
      "phoneNumber": "+1 (889) 489-2204",
      "breed": "mix",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "mix",
        "ageMin": 19,
        "ageMax": 1
      }
    },
    {
      "dogName": "Dorsey",
      "email": "dorsey@dorseymail",
      "password": "f622a47b-55b0-4bae-af7a-9e7874e67acf",
      "phoneNumber": "+1 (834) 517-3930",
      "breed": "bulldog",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "everything",
        "ageMin": 16,
        "ageMax": 2
      }
    },
    {
      "dogName": "Meyers",
      "email": "meyers@meyersmail",
      "password": "37484fe7-feb8-4305-aaf9-d0eb6c9841e0",
      "phoneNumber": "+1 (981) 451-3105",
      "breed": "bulldog",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "bulldog",
        "ageMin": 13,
        "ageMax": 15
      }
    },
    {
      "dogName": "Bradford",
      "email": "bradford@bradfordmail",
      "password": "6646fb2a-1b5f-4813-9f90-6970a79de933",
      "phoneNumber": "+1 (825) 599-3304",
      "breed": "bulldog",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "mix",
        "ageMin": 15,
        "ageMax": 4
      }
    },
    {
      "dogName": "Naomi",
      "email": "naomi@naomimail",
      "password": "86c1d3f1-a8c9-44b0-a143-faf480e8757b",
      "phoneNumber": "+1 (929) 422-2251",
      "breed": "shi tzu",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "shi tzu",
        "ageMin": 13,
        "ageMax": 9
      }
    },
    {
      "dogName": "Lauri",
      "email": "lauri@laurimail",
      "password": "e32c3446-b211-4938-b1b8-4c3d521bc8d8",
      "phoneNumber": "+1 (985) 428-3253",
      "breed": "bulldog",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "shi tzu",
        "ageMin": 2,
        "ageMax": 14
      }
    },
    {
      "dogName": "Mays",
      "email": "mays@maysmail",
      "password": "18b0889d-2165-4afb-bf71-4e4dca1b4a0d",
      "phoneNumber": "+1 (839) 596-3241",
      "breed": "bulldog",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "bulldog",
        "ageMin": 8,
        "ageMax": 13
      }
    },
    {
      "dogName": "Guzman",
      "email": "guzman@guzmanmail",
      "password": "a8db0152-7d41-4fc5-b9fc-09dae782c89b",
      "phoneNumber": "+1 (935) 418-3907",
      "breed": "mix",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "mix",
        "ageMin": 9,
        "ageMax": 16
      }
    },
    {
      "dogName": "Mcdonald",
      "email": "mcdonald@mcdonaldmail",
      "password": "de933051-6ef5-435c-bfaa-3e4f38c3ac75",
      "phoneNumber": "+1 (801) 462-2003",
      "breed": "bulldog",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "bulldog",
        "ageMin": 14,
        "ageMax": 18
      }
    },
    {
      "dogName": "Williamson",
      "email": "williamson@williamsonmail",
      "password": "a5e6e4ad-d8e9-4e8d-8aa2-dd9e2581f251",
      "phoneNumber": "+1 (813) 486-2172",
      "breed": "mix",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "everything",
        "ageMin": 18,
        "ageMax": 10
      }
    },
    {
      "dogName": "Marion",
      "email": "marion@marionmail",
      "password": "7e5a1f98-a310-4f06-8ec3-818e76cd92fe",
      "phoneNumber": "+1 (945) 453-2998",
      "breed": "bulldog",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "mix",
        "ageMin": 7,
        "ageMax": 3
      }
    },
    {
      "dogName": "Ramsey",
      "email": "ramsey@ramseymail",
      "password": "e130a366-f63c-40c5-96b4-54f01c3ad7f3",
      "phoneNumber": "+1 (969) 524-3533",
      "breed": "shi tzu",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "everything",
        "ageMin": 16,
        "ageMax": 20
      }
    },
    {
      "dogName": "Flossie",
      "email": "flossie@flossiemail",
      "password": "9fdbc04d-df7a-466e-bf7f-2e32649951d3",
      "phoneNumber": "+1 (913) 573-3919",
      "breed": "bulldog",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "mix",
        "ageMin": 2,
        "ageMax": 7
      }
    },
    {
      "dogName": "Marie",
      "email": "marie@mariemail",
      "password": "883b5394-8a04-4e95-b6c4-e4f193d3a3ea",
      "phoneNumber": "+1 (817) 424-3786",
      "breed": "mix",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "everything",
        "ageMin": 6,
        "ageMax": 8
      }
    },
    {
      "dogName": "Doris",
      "email": "doris@dorismail",
      "password": "3c4563d2-1c4a-4a7f-bb9c-30595c9c1f0a",
      "phoneNumber": "+1 (836) 425-2214",
      "breed": "bulldog",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "bulldog",
        "ageMin": 18,
        "ageMax": 5
      }
    },
    {
      "dogName": "Workman",
      "email": "workman@workmanmail",
      "password": "3cd7b74f-5d80-465c-9b7f-d5b40807d17c",
      "phoneNumber": "+1 (930) 555-2634",
      "breed": "mix",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "bulldog",
        "ageMin": 4,
        "ageMax": 17
      }
    },
    {
      "dogName": "Serrano",
      "email": "serrano@serranomail",
      "password": "fdfb45a7-f66a-4416-a5b8-14f38d9a2bbb",
      "phoneNumber": "+1 (837) 413-2002",
      "breed": "shi tzu",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "bulldog",
        "ageMin": 19,
        "ageMax": 7
      }
    },
    {
      "dogName": "Anderson",
      "email": "anderson@andersonmail",
      "password": "fa1279c6-f08c-4426-8d16-c6a69206ce44",
      "phoneNumber": "+1 (990) 482-2861",
      "breed": "mix",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "mix",
        "ageMin": 7,
        "ageMax": 9
      }
    },
    {
      "dogName": "Rutledge",
      "email": "rutledge@rutledgemail",
      "password": "e6817191-ebb6-4349-a4fd-c8a7b30080ef",
      "phoneNumber": "+1 (901) 426-2641",
      "breed": "mix",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "shi tzu",
        "ageMin": 5,
        "ageMax": 10
      }
    },
    {
      "dogName": "Maryellen",
      "email": "maryellen@maryellenmail",
      "password": "d5adebd4-5be3-4091-a21f-3cf941c998f3",
      "phoneNumber": "+1 (878) 592-2551",
      "breed": "mix",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "shi tzu",
        "ageMin": 4,
        "ageMax": 10
      }
    },
    {
      "dogName": "Middleton",
      "email": "middleton@middletonmail",
      "password": "e3dcd214-6f52-4bc0-b2de-fd9b4d3bfd31",
      "phoneNumber": "+1 (945) 492-3560",
      "breed": "bulldog",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "bulldog",
        "ageMin": 5,
        "ageMax": 18
      }
    },
    {
      "dogName": "Viola",
      "email": "viola@violamail",
      "password": "6783035d-535b-46ae-8c41-e2bc16a54ec7",
      "phoneNumber": "+1 (879) 482-3388",
      "breed": "shi tzu",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "shi tzu",
        "ageMin": 15,
        "ageMax": 18
      }
    },
    {
      "dogName": "Kristy",
      "email": "kristy@kristymail",
      "password": "717e1083-32fb-4c87-89f2-96208ec29de5",
      "phoneNumber": "+1 (854) 418-2449",
      "breed": "bulldog",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "bulldog",
        "ageMin": 19,
        "ageMax": 3
      }
    },
    {
      "dogName": "Macdonald",
      "email": "macdonald@macdonaldmail",
      "password": "2dd57830-714d-4445-b4a0-79616270bcc8",
      "phoneNumber": "+1 (916) 447-2841",
      "breed": "mix",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "mix",
        "ageMin": 18,
        "ageMax": 19
      }
    },
    {
      "dogName": "Sandra",
      "email": "sandra@sandramail",
      "password": "23437561-67de-416e-a58a-52587a5444f7",
      "phoneNumber": "+1 (848) 525-2682",
      "breed": "shi tzu",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "everything",
        "ageMin": 4,
        "ageMax": 20
      }
    },
    {
      "dogName": "Vera",
      "email": "vera@veramail",
      "password": "0d63e473-71ba-4bc6-adfb-a82b7e7cb3e7",
      "phoneNumber": "+1 (845) 448-3515",
      "breed": "shi tzu",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "shi tzu",
        "ageMin": 9,
        "ageMax": 4
      }
    },
    {
      "dogName": "Mariana",
      "email": "mariana@marianamail",
      "password": "ab4ef52c-95bb-4ec5-ad0c-285d86c4af4a",
      "phoneNumber": "+1 (929) 570-3231",
      "breed": "mix",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "shi tzu",
        "ageMin": 15,
        "ageMax": 19
      }
    },
    {
      "dogName": "Campos",
      "email": "campos@camposmail",
      "password": "d5705470-1913-4f0b-ac43-5d1a0e2df979",
      "phoneNumber": "+1 (967) 541-3275",
      "breed": "mix",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "mix",
        "ageMin": 14,
        "ageMax": 8
      }
    },
    {
      "dogName": "Celina",
      "email": "celina@celinamail",
      "password": "37b5f1ca-d077-4c80-af45-bda1db38bcf2",
      "phoneNumber": "+1 (829) 525-2482",
      "breed": "bulldog",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "bulldog",
        "ageMin": 8,
        "ageMax": 8
      }
    },
    {
      "dogName": "Wiggins",
      "email": "wiggins@wigginsmail",
      "password": "f1380ad9-d6e1-4b92-9cd3-36b7149df03f",
      "phoneNumber": "+1 (864) 515-2672",
      "breed": "mix",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "everything",
        "ageMin": 12,
        "ageMax": 9
      }
    },
    {
      "dogName": "Michele",
      "email": "michele@michelemail",
      "password": "2d32dcb2-cc0d-427c-bd0f-a654c96de32a",
      "phoneNumber": "+1 (955) 525-2413",
      "breed": "shi tzu",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "everything",
        "ageMin": 3,
        "ageMax": 18
      }
    },
    {
      "dogName": "Goldie",
      "email": "goldie@goldiemail",
      "password": "268339d6-1b67-43b7-ade9-dbb6c5dc3a9a",
      "phoneNumber": "+1 (891) 460-2799",
      "breed": "mix",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "mix",
        "ageMin": 8,
        "ageMax": 13
      }
    },
    {
      "dogName": "Tyler",
      "email": "tyler@tylermail",
      "password": "90bb90fb-2147-4b0d-8c4d-0dc6b0f7d970",
      "phoneNumber": "+1 (990) 528-2955",
      "breed": "mix",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "mix",
        "ageMin": 8,
        "ageMax": 14
      }
    },
    {
      "dogName": "Christine",
      "email": "christine@christinemail",
      "password": "2a97728d-09e3-469b-b0cf-f58d9a71097f",
      "phoneNumber": "+1 (892) 450-3011",
      "breed": "shi tzu",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "shi tzu",
        "ageMin": 3,
        "ageMax": 2
      }
    },
    {
      "dogName": "Michelle",
      "email": "michelle@michellemail",
      "password": "a8cb9aec-9ecb-4c5f-936e-39e08afe9171",
      "phoneNumber": "+1 (892) 568-3362",
      "breed": "shi tzu",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "bulldog",
        "ageMin": 18,
        "ageMax": 3
      }
    },
    {
      "dogName": "Marcy",
      "email": "marcy@marcymail",
      "password": "0923d5e8-5836-4ccb-8ca4-d1655aea7e80",
      "phoneNumber": "+1 (881) 595-3076",
      "breed": "shi tzu",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "shi tzu",
        "ageMin": 12,
        "ageMax": 7
      }
    },
    {
      "dogName": "Mosley",
      "email": "mosley@mosleymail",
      "password": "d4616cd8-9fa4-4f0e-b3d5-5356032a2ff0",
      "phoneNumber": "+1 (916) 558-2852",
      "breed": "shi tzu",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "bulldog",
        "ageMin": 7,
        "ageMax": 2
      }
    },
    {
      "dogName": "Dolly",
      "email": "dolly@dollymail",
      "password": "7c0bd9cf-347d-4b2b-b7de-2ea00e32111e",
      "phoneNumber": "+1 (844) 594-2189",
      "breed": "shi tzu",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "shi tzu",
        "ageMin": 17,
        "ageMax": 16
      }
    },
    {
      "dogName": "Nadia",
      "email": "nadia@nadiamail",
      "password": "e9f065cc-02b1-4695-83d9-8fd2f3475e4a",
      "phoneNumber": "+1 (892) 514-3175",
      "breed": "mix",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "bulldog",
        "ageMin": 16,
        "ageMax": 3
      }
    },
    {
      "dogName": "Carrillo",
      "email": "carrillo@carrillomail",
      "password": "484414a0-16aa-458d-8212-a11ff1354a72",
      "phoneNumber": "+1 (917) 456-3218",
      "breed": "mix",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "shi tzu",
        "ageMin": 3,
        "ageMax": 8
      }
    },
    {
      "dogName": "Flores",
      "email": "flores@floresmail",
      "password": "101dab81-467f-4bc3-8978-3471d040916a",
      "phoneNumber": "+1 (811) 596-3865",
      "breed": "mix",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "mix",
        "ageMin": 13,
        "ageMax": 1
      }
    },
    {
      "dogName": "Leblanc",
      "email": "leblanc@leblancmail",
      "password": "86f09b5c-9a59-4359-8a02-7dd590f2dfa7",
      "phoneNumber": "+1 (975) 429-3371",
      "breed": "shi tzu",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "shi tzu",
        "ageMin": 7,
        "ageMax": 7
      }
    },
    {
      "dogName": "Millicent",
      "email": "millicent@millicentmail",
      "password": "a6b18e14-2829-4622-8def-cb4ecc9b73ba",
      "phoneNumber": "+1 (841) 493-2664",
      "breed": "shi tzu",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "mix",
        "ageMin": 15,
        "ageMax": 5
      }
    },
    {
      "dogName": "Beasley",
      "email": "beasley@beasleymail",
      "password": "a51610eb-4157-48be-b658-1b4c99fcaa70",
      "phoneNumber": "+1 (916) 589-3736",
      "breed": "shi tzu",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "mix",
        "ageMin": 19,
        "ageMax": 6
      }
    },
    {
      "dogName": "Rena",
      "email": "rena@renamail",
      "password": "7b935a60-4006-4eef-adcc-336ee52b91eb",
      "phoneNumber": "+1 (811) 584-2029",
      "breed": "bulldog",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "everything",
        "ageMin": 5,
        "ageMax": 12
      }
    },
    {
      "dogName": "Vicki",
      "email": "vicki@vickimail",
      "password": "0ef6e060-fc37-4171-9956-5bfffbadf0a4",
      "phoneNumber": "+1 (841) 426-3905",
      "breed": "mix",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "shi tzu",
        "ageMin": 18,
        "ageMax": 18
      }
    },
    {
      "dogName": "Georgette",
      "email": "georgette@georgettemail",
      "password": "51c358fb-99ff-4387-8d08-814419039b40",
      "phoneNumber": "+1 (840) 533-3964",
      "breed": "shi tzu",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "shi tzu",
        "ageMin": 8,
        "ageMax": 19
      }
    },
    {
      "dogName": "Clara",
      "email": "clara@claramail",
      "password": "9c42892d-9a9a-4d78-97a4-031b4d4dac77",
      "phoneNumber": "+1 (913) 412-3056",
      "breed": "mix",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "mix",
        "ageMin": 11,
        "ageMax": 10
      }
    },
    {
      "dogName": "Claudine",
      "email": "claudine@claudinemail",
      "password": "192053a9-8f12-4a9f-a3d0-876f5c493766",
      "phoneNumber": "+1 (939) 451-2477",
      "breed": "mix",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "everything",
        "ageMin": 8,
        "ageMax": 10
      }
    },
    {
      "dogName": "Mari",
      "email": "mari@marimail",
      "password": "15194f98-44ae-4910-97ba-e84adf98f015",
      "phoneNumber": "+1 (807) 418-3831",
      "breed": "bulldog",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "shi tzu",
        "ageMin": 10,
        "ageMax": 16
      }
    },
    {
      "dogName": "Gonzalez",
      "email": "gonzalez@gonzalezmail",
      "password": "1fd51875-b58f-48ff-a685-80da089afa7f",
      "phoneNumber": "+1 (948) 422-3152",
      "breed": "bulldog",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "mix",
        "ageMin": 2,
        "ageMax": 10
      }
    },
    {
      "dogName": "Newton",
      "email": "newton@newtonmail",
      "password": "de94360e-2d25-4e8a-b72d-c95bc7d77b30",
      "phoneNumber": "+1 (951) 511-3515",
      "breed": "mix",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "bulldog",
        "ageMin": 15,
        "ageMax": 19
      }
    },
    {
      "dogName": "Alison",
      "email": "alison@alisonmail",
      "password": "3e0eb217-f8b0-4a8d-b2b6-02f66df34b29",
      "phoneNumber": "+1 (997) 545-2334",
      "breed": "mix",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "bulldog",
        "ageMin": 13,
        "ageMax": 11
      }
    },
    {
      "dogName": "Benjamin",
      "email": "benjamin@benjaminmail",
      "password": "1fe0cd50-4137-43e7-9ac5-54a5cf0a5430",
      "phoneNumber": "+1 (992) 549-3342",
      "breed": "mix",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "shi tzu",
        "ageMin": 4,
        "ageMax": 12
      }
    },
    {
      "dogName": "Nannie",
      "email": "nannie@nanniemail",
      "password": "85d83627-1081-438f-a02b-6beedd72cbf3",
      "phoneNumber": "+1 (811) 557-3683",
      "breed": "shi tzu",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "bulldog",
        "ageMin": 11,
        "ageMax": 18
      }
    },
    {
      "dogName": "Megan",
      "email": "megan@meganmail",
      "password": "892f80a9-5755-450f-b642-df72eff74d3b",
      "phoneNumber": "+1 (823) 489-2422",
      "breed": "shi tzu",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "everything",
        "ageMin": 15,
        "ageMax": 18
      }
    },
    {
      "dogName": "Jean",
      "email": "jean@jeanmail",
      "password": "c8e07dbe-d037-4b8d-9a9b-cd924723fe05",
      "phoneNumber": "+1 (885) 582-3971",
      "breed": "mix",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "everything",
        "ageMin": 16,
        "ageMax": 13
      }
    },
    {
      "dogName": "Hodge",
      "email": "hodge@hodgemail",
      "password": "b88e48f5-04c2-4979-b504-e0b845ba842d",
      "phoneNumber": "+1 (803) 592-3225",
      "breed": "mix",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "everything",
        "ageMin": 7,
        "ageMax": 3
      }
    },
    {
      "dogName": "Ofelia",
      "email": "ofelia@ofeliamail",
      "password": "200d5abc-8d52-44e2-9330-86afe52f8f3e",
      "phoneNumber": "+1 (996) 566-3543",
      "breed": "mix",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "shi tzu",
        "ageMin": 18,
        "ageMax": 16
      }
    },
    {
      "dogName": "Cote",
      "email": "cote@cotemail",
      "password": "0b182704-0f8b-43a9-9c06-7d6a83d4a5d9",
      "phoneNumber": "+1 (985) 450-2525",
      "breed": "mix",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "everything",
        "ageMin": 15,
        "ageMax": 8
      }
    },
    {
      "dogName": "May",
      "email": "may@maymail",
      "password": "4982c6e7-f1eb-438e-afdb-3616e0c184f4",
      "phoneNumber": "+1 (865) 411-2834",
      "breed": "bulldog",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "everything",
        "ageMin": 15,
        "ageMax": 17
      }
    },
    {
      "dogName": "Craig",
      "email": "craig@craigmail",
      "password": "7bd93a8f-3879-4316-93c0-d8e32653810d",
      "phoneNumber": "+1 (885) 441-2087",
      "breed": "shi tzu",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "shi tzu",
        "ageMin": 7,
        "ageMax": 2
      }
    },
    {
      "dogName": "Sampson",
      "email": "sampson@sampsonmail",
      "password": "63adf7a0-f975-4e87-8ec1-98800d03436d",
      "phoneNumber": "+1 (803) 482-3650",
      "breed": "bulldog",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "everything",
        "ageMin": 18,
        "ageMax": 12
      }
    },
    {
      "dogName": "Alejandra",
      "email": "alejandra@alejandramail",
      "password": "26f8b77f-fc9f-4a26-ab3f-e26a025389e9",
      "phoneNumber": "+1 (852) 510-3448",
      "breed": "shi tzu",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "shi tzu",
        "ageMin": 16,
        "ageMax": 5
      }
    },
    {
      "dogName": "Knapp",
      "email": "knapp@knappmail",
      "password": "204a5588-b2f5-4049-b4f1-601627a2b57a",
      "phoneNumber": "+1 (870) 482-3040",
      "breed": "bulldog",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "everything",
        "ageMin": 5,
        "ageMax": 15
      }
    },
    {
      "dogName": "Phoebe",
      "email": "phoebe@phoebemail",
      "password": "8b21774d-70b3-42bd-ac5e-66bd5343abe7",
      "phoneNumber": "+1 (969) 494-2475",
      "breed": "bulldog",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "bulldog",
        "ageMin": 15,
        "ageMax": 15
      }
    },
    {
      "dogName": "Savannah",
      "email": "savannah@savannahmail",
      "password": "535c9e4b-4c97-48bd-88de-670e3bde59cc",
      "phoneNumber": "+1 (959) 579-3887",
      "breed": "mix",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "bulldog",
        "ageMin": 7,
        "ageMax": 2
      }
    },
    {
      "dogName": "Deena",
      "email": "deena@deenamail",
      "password": "1973b47a-0a76-4120-a884-43053482bca1",
      "phoneNumber": "+1 (802) 472-3803",
      "breed": "mix",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "mix",
        "ageMin": 19,
        "ageMax": 17
      }
    },
    {
      "dogName": "Morrison",
      "email": "morrison@morrisonmail",
      "password": "2c647f96-270b-484e-ac80-61e5e1ae7d96",
      "phoneNumber": "+1 (853) 545-3478",
      "breed": "mix",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "mix",
        "ageMin": 11,
        "ageMax": 19
      }
    },
    {
      "dogName": "Larsen",
      "email": "larsen@larsenmail",
      "password": "31af7dc6-32e3-4f89-942b-c1d8673ec8bb",
      "phoneNumber": "+1 (837) 417-2074",
      "breed": "shi tzu",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "mix",
        "ageMin": 10,
        "ageMax": 18
      }
    },
    {
      "dogName": "Reva",
      "email": "reva@revamail",
      "password": "735a8551-f6bc-49e3-a01d-24aac06bcc5e",
      "phoneNumber": "+1 (898) 596-2930",
      "breed": "mix",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "bulldog",
        "ageMin": 8,
        "ageMax": 9
      }
    },
    {
      "dogName": "Laverne",
      "email": "laverne@lavernemail",
      "password": "6694e2a2-34d1-4471-8628-1b24b0939580",
      "phoneNumber": "+1 (914) 578-3630",
      "breed": "mix",
      "image": "http://placehold.it/32x32",
      "activity": "Friendly",
      "interactions": [],
      "searchPreferences": {
        "breed": "bulldog",
        "ageMin": 9,
        "ageMax": 4
      }
    },
    {
      "dogName": "Thelma",
      "email": "thelma@thelmamail",
      "password": "aba7b9bc-658b-4d3f-9e2a-a1bae8cc467f",
      "phoneNumber": "+1 (931) 522-3261",
      "breed": "mix",
      "image": "http://placehold.it/32x32",
      "activity": "Shy",
      "interactions": [],
      "searchPreferences": {
        "breed": "mix",
        "ageMin": 15,
        "ageMax": 2
      }
    },
    {
      "dogName": "Tracey",
      "email": "tracey@traceymail",
      "password": "9cf3ef1b-2620-427b-b456-4a4a769c9f1c",
      "phoneNumber": "+1 (870) 494-3500",
      "breed": "bulldog",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "bulldog",
        "ageMin": 1,
        "ageMax": 12
      }
    },
    {
      "dogName": "Ashley",
      "email": "ashley@ashleymail",
      "password": "2c5b5809-6fba-4d3b-8dfe-40d5401457bb",
      "phoneNumber": "+1 (828) 543-3997",
      "breed": "bulldog",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "everything",
        "ageMin": 2,
        "ageMax": 15
      }
    },
    {
      "dogName": "Charles",
      "email": "charles@charlesmail",
      "password": "bf91d4fa-d110-4e76-a19e-d233da43eda8",
      "phoneNumber": "+1 (915) 557-2104",
      "breed": "mix",
      "image": "http://placehold.it/32x32",
      "activity": "Very Sociable",
      "interactions": [],
      "searchPreferences": {
        "breed": "everything",
        "ageMin": 5,
        "ageMax": 4
      }
    }
  ]

  // 1. ESTABLISH CONNECTION TO MONGO
  mongoose.connect(`mongodb://localhost:27017/${dbName}`, {
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

