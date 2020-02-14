const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dogSchema = new Schema(
  {
  email: { type: String, required: true },
  password: { type: String, required: true },
  dogName: { type: String, required: true },
  age: { type: Number, min: 0, max: 20,required: true },
  phoneNumber: { type: Number, required: true },
  breed: { type: String, enum: ['bulldog', 'shi tzu','everything']},
  image: { type: String, default: "https://i.pinimg.com/originals/fa/6b/7b/fa6b7b4aa80577ecc8cb475922e9227d.jpg" },
  activity: { type: String, enum: ["Shy","Friendly","Very Sociable"]},
  interactions: ["matchId"],
  searchPreferences :{
    breed: { type: String, enum: ['bulldog', 'shi tzu', 'everything']},
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