const router = require("express").Router();
const restaurantController = require("../../controllers/restController");

router.route("/")
.post(restaurantController.createRestaurant);
router.route("/comment/:id")
.post(restaurantController.createComment)
.get(restaurantController.findAllComments);
router.route("/categories")
.get(restaurantController.findAllCategories);

/* router.route("/restaurants")
.get(restaurantController.getRestaurants);
router.route("/restaurants/:id")
.get(restaurantController.findRestaurantById);
router.route("/restaurants/:category")
.get(restaurantController.findRestaurantByCategory);
router.route("/restaurants/rating")
.get(restaurantController.getRestaurantByRating);
router.route("/comments/:restaurantId")
.get(restaurantController.getAllComments);
 */

module.exports = router;