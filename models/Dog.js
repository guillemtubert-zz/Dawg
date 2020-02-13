const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dogSchema = new Schema(
  {
  email: { type: String, required: true },
  password: { type: String, required: true },
  dogName: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  breed: { type: String, enum: ['bulldog', 'shi tzu','everything'], required: true},
  age: { type: Number, min: 0, max: 20,required: true },
  image: { type: String, default: "https://i.pinimg.com/originals/fa/6b/7b/fa6b7b4aa80577ecc8cb475922e9227d.jpg" },
  activity: { type: String, enum: ["Shy","Friendly","Very Sociable"], required: true},
  interactions: [matchId],
  searchPreferences :{
    breed: { type: String, enum: ['bulldog', 'shi tzu', 'everything'], required: true},
    ageMin : { type: Number, min: 0, max: 19,required: true },
    ageMax : { type: Number, min: 1, max: 20,required: true },
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