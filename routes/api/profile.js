const router = require("express").Router();
const profileController = require("../../controllers/profileController");

// Matches with "/api/profile/virtualgardeb/:userID"
router
  .route("/virtualgarden/:userName")
  .get(profileController.getVirtualGarden)
  .post(profileController.addVirtualPlant);
//.put(plantsController.update)
//.delete(plantsController.remove);

module.exports = router;
