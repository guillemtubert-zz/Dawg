const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
  email: { type: String, required: true },
  password: { type: String, required: true },
  dogName: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  breed: { type: String, enum: ['bulldog', 'shi tzu'], required: true},
  age: { type: Number, required: true },
  image: { type: String, default: "https://i.pinimg.com/originals/fa/6b/7b/fa6b7b4aa80577ecc8cb475922e9227d.jpg" },
  activity: { type: String, enum: ["Shy","Friendly","Very Sociable"], required: true},
  interactions: [matchId],
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;