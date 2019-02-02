const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Plants collection and inserts the plants below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/plantbuddy", { useNewUrlParser: true }
);

//Delete Records
db.VirtualPlant.collection.deleteMany({});

//get the user 'Sue'
let UserSue = "";
let virtualPlantSeed_Sue = "";
db.User.find({ "email": "StevensStock@gmail.com" }, { "_id": 1 })
  .then(data => {
    data.forEach((item, index) => {
      UserSue = item._id.toString();
      virtualPlantSeed_Sue = [
        {
          name: "Rock Garden Basil",
          commonName: "BASIL",
          image: ["http://www.gettystewart.com/wp-content/uploads/2017/06/cut-basil-finished-l.jpg", "https://www.southernexposure.com/images/large/basil-mammoth_LRG.jpg", "https://cdn.shopify.com/s/files/1/1247/4289/products/italian_large_leaf_basil_2_1024x1024@2x.jpg?v=1488366470"],
          lastWatered: "2019-01-19",
          wateringFrequency: 7,
          user_id: UserSue
        }
        // ----------------------------------------------
      ];
    })
  })
  .then(() => db.VirtualPlant.collection.insertMany(virtualPlantSeed_Sue))
  .then(data => {
    console.log(data.result.n + " records inserted!");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

//get the user 'Ramish'
let UserRamish = "";
let virtualPlantSeed_Ramish = "";
db.User.find({ "email": "narasimhan.ramesh5@gmail.com" }, { "_id": 1 })
  .then(data => {
    data.forEach((item, index) => {
      UserRamish = item._id.toString();
      console.log("Ramesh's ID is " + UserRamish);
      virtualPlantSeed_Ramish = [
        {
          name: "Carrot Plant 1",
          commonName: "CARROTS",
          image: ["https://vignette.wikia.nocookie.net/carrot/images/1/1d/Product_2296.jpg/revision/latest?cb=20130612134640"],
          wateringFrequency: 2,
          lastWatered: "2019-01-25",
          user_id: UserRamish
        },
        // ----------------------------------------------
        {
          name: "Tomato Pot 1",
          commonName: "TOMATOES",
          image: ["https://vignette.wikia.nocookie.net/gardener/images/f/f5/Tomatoes.jpg/revision/latest?cb=20100504195848"],
          wateringFrequency: 4,
          lastWatered: "2019-01-25",
          user_id: UserRamish
        },
        // ----------------------------------------------
        {
          name: "Bell Pepper Pot 1",
          commonName: "PEPPERS",
          image: ["https://vignette.wikia.nocookie.net/gardener/images/1/17/Sweet_pepper_Hershey.jpg/revision/latest?cb=20101002172254"],
          wateringFrequency: 6,
          lastWatered: "2019-01-25",
          user_id: UserRamish
        },
        // ----------------------------------------------
        {
          name: "Spinach",
          commonName: "SPINACH",
          image: ["https://vignette.wikia.nocookie.net/gardener/images/c/cd/Spinach.jpg/revision/latest?cb=20100504175752"],
          wateringFrequency: 3,
          lastWatered: "2019-01-25",
          user_id: UserRamish
        },
        // ----------------------------------------------
        {
          name: "White Lily",
          commonName: "LILIES",
          image: ["https://vignette.wikia.nocookie.net/horticultureandsoilscience/images/5/50/Wiki-background/revision/latest?cb=20120228093302", "https://upload.wikimedia.org/wikipedia/commons/3/30/Lilium_candidum_1.jpg"],
          wateringFrequency: 5,
          lastWatered: "2019-01-25",
          user_id: UserRamish
        },
        // ----------------------------------------------
        {
          name: "Snapdragon",
          commonName: "SNAPDRAGONS",
          image: ["https://vignette.wikia.nocookie.net/seedsearch/images/a/a5/08-5-21_%2846%29.jpg/revision/latest?cb=20110530024538", "https://vignette.wikia.nocookie.net/seedsearch/images/a/a5/08-5-21_%2846%29.jpg/revision/latest/scale-to-width-down/280?cb=20110530024538"],
          wateringFrequency: 7,
          lastWatered: "2019-01-25",
          user_id: UserRamish
        },
        // ----------------------------------------------
        {
          name: "Marigold",
          commonName: "MARIGOLDS",
          image: ["https://vignette.wikia.nocookie.net/seedsearch/images/b/b8/DSCF5953.jpg/revision/latest?cb=20120106035339"],
          wateringFrequency: 1,
          lastWatered: "2019-01-25",
          user_id: UserRamish
        },
        // ----------------------------------------------
        {
          name: "Begonia",
          commonName: "BEGONIA",
          image: ["https://vignette.wikia.nocookie.net/seedsearch/images/d/d1/2011.07.09_%28127%29_Cane_Begonia_%27Mandarin_Orange%27.jpg/revision/latest?cb=20120106031408"],
          wateringFrequency: 10,
          lastWatered: "2019-01-25",
          user_id: UserRamish
        },
        // ----------------------------------------------
        {
          name: "Snapdragon 2",
          commonName: "SNAPDRAGONS",
          image: ["https://vignette.wikia.nocookie.net/seedsearch/images/a/a5/08-5-21_%2846%29.jpg/revision/latest?cb=20110530024538"],
          wateringFrequency: 8,
          lastWatered: "2019-01-25",
          user_id: UserRamish
        }
        // ----------------------------------------------
      ];
    })
  })
  .then(() => db.VirtualPlant.collection.insertMany(virtualPlantSeed_Ramish))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


