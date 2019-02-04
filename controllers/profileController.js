const db = require("../models");

module.exports = {

  /*
   * Get user's virtual garden
   */
  getVirtualGarden: function(req, res) {
    let userName = req.params.userName;
    console.log("Got a request to retrieve virtual garden of " + userName);
    db.User.find({ username: userName }, { _id: 1 })
      .then(userData => {
        console.log("Found " + userData.length + " users");

        if (userData.length !== 1) {
          console.log("Unexpected error, found " + userData.length + " users!");
        }

        let userID = userData[0]._id;
        console.log(`${userName}'s user ID is ${userID}`);

        db.VirtualPlant.find({ user_id: userID }).then(virtualPlants => {
          console.log("Here are the virtual plants");
          console.log(virtualPlants);
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
    console.log("Got a request to add virtual plant to garden of " + userName);
    console.log(req.body);

    let newPlant = req.body;

    db.User.find({ username : userName }, {_id : 1})
      .then(userData => {
        console.log("Found " + userData.length + " users");

        if (userData.length !== 1) {
          console.log("Unexpected error, found " + userData.length + " users!");
        }

        let userID = userData[0]._id;
        console.log(`${userName}'s user ID is ${userID}`);

        newPlant.user_id = userID;

        console.log(newPlant);

        db.VirtualPlant.create(newPlant).then(newlyAddedPlant => {
          console.log("added a new plant - ");
          console.log(newlyAddedPlant);
          res.json(newlyAddedPlant);
        });
      })
      .catch(err => res.status(422).json(err));
  }
};
