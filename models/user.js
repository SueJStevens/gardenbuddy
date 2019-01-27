const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var bcrypt = require("bcrypt-nodejs");

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

userSchema.pre("save", function(next) {
  var user = this;
  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(10, function(err, salt) {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, null, function(err, hash) {
        if (err) {
          return next(err);
        }
        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
