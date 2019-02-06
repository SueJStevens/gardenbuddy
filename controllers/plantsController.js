const db = require("../models");

// Defining methods for the plantsController
module.exports = {
  findAll: function(req, res) {
    db.Plant.find(req.query)
      .sort({ commonName: 1, variety: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Plant.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByCategory: function(req, res) {
    db.Plant.find({ plantCategories: req.params.category })
      .sort({ commonName: 1, variety: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Plant.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Plant.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Plant.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  search: function(req, res) {
    //console.log(req.query);
    //console.log("Got a request to search for " + req.query.category
    //  + " in zip code " + req.query.zipcode);
    // Step 1 : Map zip code to hardiness zone
    db.Phm_all_zipcode.find({ zipcode: req.query.zipcode }).then(results => {
      //console.log("Hardiness zone is " + results[0].zone);

      let requiredZone = results[0].zone;

      // Step 2 : Find all plants in this hardiness zone,
      // and of the user specified category (fruits/vegetables etc.)
      db.Plant.find({
        plantCategories: req.query.category,
        zones: { $elemMatch: { $eq: requiredZone } }
      })
        .limit(5)
        .then(matchingPlants => {
          //console.log("Here are the matching plants");
          //matchingPlants.forEach(match => console.log(match.commonName));
          let result = {};
          result.matchingPlants = matchingPlants;
          result.searchedZone = requiredZone;
          console.log("Sending back search results ");
          console.log(result);
          res.json(result);
        });
    });
  }
};
