const router = require("express").Router();
const restaurantController = require("../../controllers/restController");

router.route("/restaurants")
.get(restaurantController.getRestaurants);
router.route("/categories")
.get(restaurantController.getCategories);
router.route("/restaurants/:id")
.get(restaurantController.getRestaurantById);
router.route("/restaurants/:category")
.get(restaurantController.getRestaurantByCategory);
router.route("/restaurants/rating")
.get(restaurantController.getRestaurantByRating);
router.route("/comments/:restaurantId")
.get(restaurantController.getAllComments);
router.route("/comments")
.post(restaurantController.createComment);

module.exports = router;