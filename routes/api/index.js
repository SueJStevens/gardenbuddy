const router = require("express").Router();
const plantRoutes = require("./plants");
const profileRoutes = require("./profile");
const userRoutes = require("./users");

// Book routes
router.use("/plants", plantRoutes);
router.use("/profile", profileRoutes);
router.use("/users", userRoutes);

module.exports = router;
