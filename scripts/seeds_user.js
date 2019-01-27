const mongoose = require("mongoose");
const db = require("../models");

// This file empties the User collection and inserts the users below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/plantbuddy", { useNewUrlParser: true }
);

const userSeed = [
  {
    "email": "StevensStock@gmail.com",
    "password": "1234",
    "phone": "7604020898",
    "firstName": "Sue",
    "lastName": "Stevens",
    "zipcode": "92011",
    "city": "Carlsbad",
    "st": "CA",
    "memberSince": "2018-07-31",
    "zone": "10a",
    "aboutme": "I am a nice person.",
    "friendsID": [

    ]
  },
  // ----------------------------------------------
  {
    "email": "angeljiang0927@gmail.com",
    "password": "1234",
    "phone": "",
    "firstName": "Angel",
    "lastName": "Jiang",
    "zipcode": "92101",
    "city": "San Diego",
    "st": "CA",
    "memberSince": "2018-08-25",
    "zone": "10a",
    "aboutme": "I am an Amazing Coder.",
    "friendsID": [

    ]
  },
  // ----------------------------------------------
  {
    "email": "bryson_nelson@yahoo.com",
    "password": "1234",
    "phone": "",
    "firstName": "Bryson",
    "lastName": "Nelson",
    "zipcode": "92111",
    "city": "San Diego",
    "st": "CA",
    "memberSince": "2018-09-15",
    "zone": "10a",
    "aboutme": "I am Coder Extraordinaire.",
    "friendsID": [

    ]
  },
  // ----------------------------------------------
  {
    "email": "narasimhan.ramesh5@gmail.com",
    "password": "1234",
    "phone": "",
    "firstName": "Ramesh",
    "lastName": "Narashimhan",
    "zipcode": "92088",
    "city": "San Diego",
    "st": "CA",
    "memberSince": "2019-01-15",
    "zone": "10a",
    "aboutme": "I speak 4 languages.",
    "friendsID": [

    ]
  }
  // ----------------------------------------------
];

// db.User
//   .deleteMany({})
//   .then(() => db.User.collection.insertMany(userSeed))
//   .then((data) => {
//     console.log(data.result.n + " records inserted!")})
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

db.User
  .deleteMany({}, function (err, data) {
    db.User.insertMany(userSeed, function (err, data) {
      console.log(data.length + " records inserted!");
      data.forEach((item, index) => {
        //console.log('item ', item);
        //index === 0 ? item.friendsID.push(data[0]._id) :  item.friendsID.push(data[1].id);
        if (index === 0) {
          db.User.findByIdAndUpdate(item._id, { $push: { friendsID: [data[1]._id, data[2]._id] } }, { new: true }, function (err, data) {
            //console.log('updated ', data);
          })
        }
        db.User.findByIdAndUpdate(item._id, { $push: { friendsID: data[0]._id } }, { new: true }, function (err, data) {
          //console.log('updated ', data);
        })
      })
    })
  });

  // setTimeout(function(){ 
  //   db.User.find({}, function(err, data)
  //   {
  //    // console.log('data ', data);
  //   });

  // }, 5000);
