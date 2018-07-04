const router = require("express").Router();
const loginRoutes = require("./login");
const restaurantRoutes=require("./restaurant");

// user login routes
router.use("/user", loginRoutes);
// user restaurant routes
router.use("/restaurant", restaurantRoutes);

module.exports = router;