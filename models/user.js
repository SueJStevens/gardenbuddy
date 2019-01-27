const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: String,
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  zipcode: { type: String, required: true },
  city: String,
  st: String,
  memberSince: Date,
  zone: String,
  aboutme: String,
  friendsID: [String],
  createdOn: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
