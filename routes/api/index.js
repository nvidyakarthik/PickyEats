const router = require("express").Router();
const loginRoute = require("./login");
const restaurantRoute=require("./restaurant");
const menuRoute=require("./menu");

// user login routes
router.use("/user", loginRoute);
// user restaurant routes
router.use("/restaurant", restaurantRoute);
router.use("/menu",menuRoute);

module.exports = router;