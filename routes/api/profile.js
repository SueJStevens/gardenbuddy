const router = require("express").Router();
const profileController = require("../../controllers/profileController");
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage }).single("image");

// Matches with "/api/profile/virtualgardeb/:userID"
router
  .route("/virtualgarden/:userName")
  .get(profileController.getVirtualGarden)
  .post(upload, profileController.addVirtualPlant);

router
  .route("/virtualgarden/user/:userName/:plant")
  .put(profileController.update)
  .delete(profileController.remove);

router.route("/virtualgarden/virtualplant/:id").put(profileController.update);

module.exports = router;
