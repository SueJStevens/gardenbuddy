const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let passportLocalMongoose = require("passport-local-mongoose");

var userSchema = new Schema({
  username: { type: String, required: true },
  phone: String,
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  profilepic: {type: String},
  zipcode: { type: String, required: true },
  city: String,
  st: String,
  memberSince: Date,
  zone: String,
  aboutme: String,
  friendsID: [String],
  createdOn: { type: Date, default: Date.now }
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

module.exports = User;
