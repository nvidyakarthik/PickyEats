const router = require("express").Router();
const loginRoutes = require("./login");

// user login routes
router.use("/user", loginRoutes);

module.exports = router;