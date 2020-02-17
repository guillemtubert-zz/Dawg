const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dogSchema = new Schema(
  {
  dogName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  age: { type: Number, min: 0, max: 20,required: true },
  phoneNumber: { type: String, required: true },
  breed: { type: String},
  image: { type: String, default:"https://images.dog.ceo/breeds/sheepdog-english/n02105641_13779.jpg" },
  activity: { type: String},
  interactions: [{type: Schema.Types.ObjectId, ref: "Match"}], // TODO update to be ObjectId type
  searchPreferences :{
    breed: { type: String},
    ageMin : { type: Number, min: 0, max: 19 },
    ageMax : { type: Number, min: 1, max: 20 },
  }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Dog = mongoose.model("Dog", dogSchema);

module.exports = Dog;