const router = require("express").Router();
const db = require("../../models");
const menuController = require("../../controllers/menuController");

//for the route api/menu/comment/:id
router.route("/comment/:id")
.post(menuController.createComment)
.get(menuController.findAllComments); 

//for the route api/menu/save
 router.route("/save/:id")
.post(menuController.createMenu);
 
//for the route api/menu/edit
 router.route("/edit/:id")
.put(menuController.updateMenu); 

//for the route api/menu/delete
router.route("/delete/:id")
.delete(menuController.deleteMenu);

//for the route api/menu/read
router.route("/read/:id")
.get(menuController.findAllMenus);

//for the route api/menu/avgrating
router.route("/avgrating/:id")
.get(menuController.updateAvgRating);
module.exports=router;