const router = require("express").Router();
const multer = require('multer');
const uuidv4 = require('uuid/v4');
const path = require('path');

// configure storage
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
	  /*
		Files will be saved in the 'uploads' directory. Make
		sure this directory already exists!
	  */
	  cb(null, './uploads');
	},
	filename: (req, file, cb) => {
	  /*
		uuidv4() will generate a random ID that we'll use for the
		new filename. We use path.extname() to get
		the extension from the original file name and add that to the new
		generated ID. These combined will create the file name used
		to save the file on the server and will be available as
		req.file.pathname in the router handler.
	  */
	  const newFilename = `${uuidv4()}${path.extname(file.originalname)}`;
	  cb(null, newFilename);
	},
  });
  // create the multer instance that will be used to upload/save the file
  const upload = multer({ storage });

const restaurantController = require("../../controllers/restController");
router.route("/listbycategory/:id")
.get(restaurantController.findRestByCategory);
router.route("/updaterest/:id")
.put(restaurantController.updateRestMenu);
router.route("/rating")
.get(restaurantController.findRestByRating); 
router.route("/venuesearch")
.get(restaurantController.searchRest);
router.route("/saverest",upload.single('selectedFile'))
.post(restaurantController.createRestaurant);
router.route("/categories")
.get(restaurantController.findAllCategories);
router.route("/:id")
.get(restaurantController.findRestaurantById);
router.route("/listbyname/city")
.post(restaurantController.findRestByNameCity);

 
 
 
//search from puclic api foursquare

/* router.route("/restaurants")
.get(restaurantController.getRestaurants);

router.route("/restaurants/:category")
.get(restaurantController.findRestaurantByCategory);

router.route("/comments/:restaurantId")
.get(restaurantController.getAllComments);
 */

module.exports = router;