const router = require("express").Router();
const profileController = require("../../controllers/profileController");
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage }).single("image");

// Matches with "/api/profile/virtualgarden/:userID/water/:plantID"
router
  .route("/virtualgarden/:userName/water/:plantID")
  .put(profileController.waterPlant);

// Matches with "/api/profile/virtualgarden/:userID"
router
  .route("/virtualgarden/:userName")
  .get(profileController.getVirtualGarden)
  .post(upload, profileController.addVirtualPlant);
//.put(plantsController.update)
//.delete(plantsController.remove);

module.exports = router;
