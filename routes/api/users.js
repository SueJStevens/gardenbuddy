const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/").get(usersController.findAll);

// Matches with "/api/users/state"
router.route("/state/:state").get(usersController.findByState);

module.exports = router;
