/* eslint-disable camelcase */
const db = require("../models");
const path = require("path");
const Datauri = require("datauri");
const datauri = new Datauri();
const cloudinary = require("cloudinary");
const uploader = cloudinary.uploader;
require("dotenv").config();

/*
 * Set up the cloudinary configuration
 */
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

module.exports = {
  /*
   * Get user's virtual garden
   */
  getVirtualGarden: function(req, res) {
    let userName = req.params.userName;
    // console.log("Got a request to retrieve virtual garden of " + userName);
    db.User.find({ username: userName }, { _id: 1 })
      .then(userData => {
        // console.log("Found " + userData.length + " users");

        if (userData.length !== 1) {
          console.log("Unexpected error, found " + userData.length + " users!");
        }

        let userID = userData[0]._id;
        // console.log(`${userName}'s user ID is ${userID}`);

        db.VirtualPlant.find({ userId: userID }).then(virtualPlants => {
          // console.log("Here are the virtual plants");
          // console.log(virtualPlants);
          res.json(virtualPlants);
        });
      })
      .catch(err => res.status(422).json(err));
  },

  /*
   * Add a plant to the user's virtual garden.
   */
  addVirtualPlant: function(req, res) {
    let userName = req.params.userName;

    //console.log("Got a request to add virtual plant to garden of " + userName);
    console.log("\n req body", req.body, "\n req.body");
    console.log("\n req file", req.params);

    // Convert to img URI
    let imgURI = datauri.format(
      path.extname(req.file.originalname).toString(),
      req.file.buffer
    );

    const imgFile = imgURI.content;

    // Upload the image to Cloudinary
    uploader
      .upload(imgFile)
      .then(result => {
        const cloudURL = result.url;
        //console.log("The image has been uploaded to " + cloudURL);

        let newPlant = req.body;
        newPlant.image = [cloudURL];

        db.User.find({ username: userName }, { _id: 1 }).then(userData => {
          //console.log("Found " + userData.length + " users");
          if (userData.length !== 1) {
            console.log(
              "Unexpected error, found " + userData.length + " users!"
            );
          }

          let userID = userData[0]._id;
          //console.log(`${userName}'s user ID is ${userID}`);

          newPlant.user_id = userID;

          //console.log(newPlant);

          db.VirtualPlant.create(newPlant).then(newlyAddedPlant => {
            //console.log("added a new plant - ");
            //console.log(newlyAddedPlant);
            res.json(newlyAddedPlant);
          });
        });
      })
      .catch(error => {
        console.log("Error uploading image to cloudinary");
        console.log(error);
        res.status(422).json(error);
      });

    //let newPlant = req.body;

    //console.log(newPlant.image);

    /*
    
      .catch(err => res.status(422).json(err));
  }*/
  },

  update: function(req, res) {
    // console.log("\n--------\n hello \n----------\n");
    console.log("\n-------------\n", req.params, "\n-----------\n");
    console.log("\n-------------\n", req.body, "\n-----------\n");

    db.VirtualPlant.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  remove: function(req, res) {
    console.log(req);

    db.User.findByIdAndRemove({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  waterPlant: function(req, res) {
    let plantID = req.params.plantID;
    let userID = req.params.userName;
    let wateringDate = req.body.lastWatered;

    console.log("\n------\n", req.body, "\n------\n");

    console.log(
      `Got a watering request for user ${userID}, plant ID = ${plantID} date = ${wateringDate}`
    );

    db.VirtualPlant.findOneAndUpdate(
      { _id: plantID },
      { lastWatered: wateringDate }
    )
      .then(result => {
        res.json(result);
      })
      .catch(error => {
        console.log(`WaterPlant failed for ${req.params.plantID}`);
        res.status(422).json(error);
      });
  }
};
