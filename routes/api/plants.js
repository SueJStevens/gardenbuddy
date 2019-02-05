const router = require("express").Router();
const plantsController = require("../../controllers/plantsController");

// Matches with "/api/plants"
router
  .route("/")
  .get(plantsController.findAll)
  .post(plantsController.create);

// Matches with "/api/plants/:category"
router.route("/category/:category").get(plantsController.findByCategory);

// Matches with "/api/plants/search"
router.route("/search").get(plantsController.search);

// Matches with "/api/plants/:id"
router
  .route("/:id")
  .get(plantsController.findById)
  .put(plantsController.update)
  .delete(plantsController.remove);


// Matches with "/api/plants/getgrowingcalendar/:commonName/:zone" 
router
  .route("/getgrowingcalendar/:commonName/:zone")
  .get(plantsController.getgrowcalendar);
  
  
module.exports = router;
