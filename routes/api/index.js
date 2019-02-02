const router = require("express").Router();
const plantRoutes = require("./plants");
const profileRoutes = require("./profile");

// Book routes
router.use("/plants", plantRoutes);
router.use("/profile", profileRoutes);

module.exports = router;
