const router = require("express").Router();
const multer = require('multer');
const uuidv4 = require('uuid/v4');
const path = require('path');
const db = require("../../models");
const menuController = require("../../controllers/menuController");
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
  const upload = multer({ storage:storage });
  router.post("/save/:id",upload.single('imgpath'),(req,res,next)=>{
    if(req.file)
       req.body.imgpath=req.file.filename;    
     console.log("Inside create restaurant"+JSON.stringify(req.body));
     db.Menu
     .create(req.body)
     .then(dbMenu => {
         console.log("params" + req.params.id);
         console.log("dbMenu" + dbMenu._id);
         res.json(dbMenu);
      })     
     .catch(err => {
         console.log(err);
         res.status(422).json(err);
     });
 
 }); 
//for the route api/menu/comment/:id
router.route("/comment/:id")
.post(menuController.createComment)
.get(menuController.findAllComments); 

//for the route api/menu/save
/* router.route("/save/:id")
.post(menuController.createMenu);
 */
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