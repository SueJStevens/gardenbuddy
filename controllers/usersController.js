const db = require("../models");

// Defining methods for the plantsController
module.exports = {
  findAll: function(req, res) {
    db.User.find({})
      //   .sort({ commonName: 1, variety: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findByState: function(req, res) {
    console.log(req.params);
    let userState = req.params.state;
    db.User.find({ st: userState }).then(dbresults => res.json(dbresults));
  }
  //   findById: function(req, res) {
  //     db.User.findById(req.params.id)
  //       .then(dbModel => res.json(dbModel))
  //       .catch(err => res.status(422).json(err));
  //   },
  //   findByCategory: function(req, res) {
  //     db.User.find({ plantCategories: req.params.category })
  //       .sort({ commonName: 1, variety: 1 })
  //       .then(dbModel => res.json(dbModel))
  //       .catch(err => res.status(422).json(err));
  //   }
};
