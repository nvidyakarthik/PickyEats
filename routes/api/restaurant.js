const router = require("express").Router();
const db = require("../../models");
const restaurantController = require("../../controllers/restController");

 router.route("/listbycategory/:id")
.get(restaurantController.findRestByCategory);
router.route("/updaterest/:id")
.put(restaurantController.updateRestMenu);
router.route("/updaterestmenus/:id")
.put(restaurantController.updateRestMenuIds);
router.route("/rating")
.get(restaurantController.findRestByRating); 
router.route("/venuesearch")
.get(restaurantController.searchRest);
 router.route("/saverest")
.post(restaurantController.createRestaurant);
router.route("/categories")
.get(restaurantController.findAllCategories);
router.route("/:id")
.get(restaurantController.findRestaurantById);
router.route("/listbyname/city")
.post(restaurantController.findRestByNameCity);
router.route("/listbyowner/:id")
.get(restaurantController.findRestByOwner);


 
 
 
//search from puclic api foursquare

/* router.route("/restaurants")
.get(restaurantController.getRestaurants);

router.route("/restaurants/:category")
.get(restaurantController.findRestaurantByCategory);

router.route("/comments/:restaurantId")
.get(restaurantController.getAllComments);
 */

module.exports = router;