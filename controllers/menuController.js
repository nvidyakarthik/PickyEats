const db = require("../models");
const axios = require("axios");

module.exports = {
   
    createMenu: function (req, res) {

      db.Menu
          .create(req.body)
          .then(dbMenu => {
              console.log("params" + req.params.id);
              console.log("dbMenu" + dbMenu._id);
              /* return db.Restaurant.findOneAndUpdate({ _id: req.params.id },
                  { $push: { menus: dbMenu._id } },
                  { new: true }).populate("menus"); */
                  res.json(dbMenu);

          })
          
          .catch(err => {
              console.log(err);
              res.status(422).json(err);

          });
  },
    createComment: function(req, res) {
    console.log(req.body);
    db.Comment
      .create(req.body)
      .then(dbComment => {
        console.log("params"+req.params.id);
        console.log("dbcomment"+dbComment._id);
        return db.Menu.findOneAndUpdate({ _id:req.params.id }, 
        { $push: { comments: dbComment._id} }, 
        { new: true });
                 
      })
      .then(dbMenu=> {
        
         res.json(dbMenu);
        
      })
      .catch(err => {
        console.log(err);
        res.status(422).json(err);

      });
  },
  findAllComments: function(req, res) {
    db.Menu
      .findById({ _id:req.params.id})
      .populate("comments")
      .populate("comments.users")
      .then(dbMenu => {
          //console.log("firstName"+dbMenu.user.firstName);
        res.json(dbMenu);
      })
      .catch(err => res.status(422).json(err));
  },
  updateMenu: function(req, res) {
    db.Menu
      .findOneAndUpdate({ _id:req.params.id},req.body,{new:true})
      
      .then(dbMenu => { 
          //console.log("firstName"+dbMenu.user.firstName);
        res.json(dbMenu);
      })
      .catch(err => res.status(422).json(err));
  },
  deleteMenu: function(req, res) {
    db.Menu
      .deleteOne({ _id:req.params.id})
      
      .then(dbMenu => {
          //console.log("firstName"+dbMenu.user.firstName);
        res.json(dbMenu);
      })
      .catch(err => res.status(422).json(err));
  }


}