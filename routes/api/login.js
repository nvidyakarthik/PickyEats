const router = require("express").Router();
const loginController = require("../../controllers/loginController");


//Matches with "/api/articles"
router.route("/")
//.get(loginController.findUser)
.post(loginController.createUser);

module.exports = router;