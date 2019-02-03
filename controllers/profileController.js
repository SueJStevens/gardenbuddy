const db = require("../models");

module.exports = {
  getVirtualGarden : function(req, res) {
    let userName = req.params.userName;
    console.log("Got a request to retrieve virtual garden of " + userName);
    db.User.find({ email : userName }, {_id : 1})
      .then(userData => {
        console.log("Found " + userData.length + " users");

        if(userData.length !== 1){
          console.log("Unexpected error, found " + userData.length + " users!");
        }

        let userID = userData[0]._id;
        console.log(`${userName}'s user ID is ${userID}`);

        db.VirtualPlant.find({user_id : userID})
          .then( (virtualPlants) => {
            console.log("Here are the virtual plants");
            console.log(virtualPlants);
            res.json(virtualPlants);
          })
      })
      .catch(err => res.status(422).json(err));
  }
};
