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
    "profilepic" : "https://media.licdn.com/dms/image/C4E03AQH93N1zldYoBg/profile-displayphoto-shrink_200_200/0?e=1554336000&v=beta&t=ch56dyGxOOpInjNEVF6Q1c79DcCbr2h7Vi15zoKTSbA",
    "coverphoto": "https://images.pexels.com/photos/126271/pexels-photo-126271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
    "profilepic":"https://higurashinatsu.github.io/Portfolio/assets/images/profile/head1.jpg",
    "coverphoto": "https://images.pexels.com/photos/145685/pexels-photo-145685.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
    "profilepic":"https://i.postimg.cc/nrCG9nT0/Image-4.jpg",
    "coverphoto": "https://images.pexels.com/photos/334978/pexels-photo-334978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
    "lastName": "Narasimhan",
    "profilepic":"https://i.postimg.cc/qMJjN4xM/Ramesh-N.jpg",
    "coverphoto": "https://images.pexels.com/photos/805452/pexels-photo-805452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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

//This script pushes friend #2-4 into Friend #1.  Friend #1 is pushed into Friend #2-4.
db.User.collection
  .deleteMany({}, function (err, data) {
    db.User.collection.insertMany(userSeed, function (err, data) {
      console.log(data.ops);
      console.log(data.ops.length + " records inserted!");
      data.ops.forEach((item, index) => {
        //console.log('item ', item);
        //index === 0 ? item.friendsID.push(data[0]._id) :  item.friendsID.push(data[1].id);
        if (index === 0) {
          db.User.findByIdAndUpdate(item._id, { $push: { friendsID: [data.ops[1]._id, data.ops[2]._id] } }, { new: true }, function (err, data) {
            //console.log('updated ', data);
            process.exit(0);
          })
        }
        db.User.findByIdAndUpdate(item._id, { $push: { friendsID: data.ops[0]._id } }, { new: true }, function (err, data) {
          //console.log('updated ', data);
          process.exit(0);
        })
      })
    })
  });

