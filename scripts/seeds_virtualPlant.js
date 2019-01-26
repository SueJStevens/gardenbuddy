const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Plants collection and inserts the plants below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/plantbuddy", { useNewUrlParser: true }
);

const virtualPlantSeed = [
  {
    name: "My Basil Plant 1",
    commonName: "Basil",
    image: "http://www.gettystewart.com/wp-content/uploads/2017/06/cut-basil-finished-l.jpg",
    lastWatered: "2019-01-19",
    wateringFrequency: 7,
    user_id: "idk"  
}
// ----------------------------------------------
];

db.VirtualPlant
  .deleteMany({})
  .then(() => db.VirtualPlant.collection.insertMany(virtualPlantSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });