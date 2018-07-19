const db = require("../models");
const axios = require("axios");
const mongoose = require("mongoose");
const ObjectId=mongoose.Types.ObjectId;

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
   //returns average of menu rating
   updateAvgRating: function(req, res) {
    console.log("inside updateAvgRating"+req.params.id);
    db.Menu.aggregate(
      [
        {
          $match:{
              "_id" : ObjectId(req.params.id)
          }
      },
       // Unwind the source
       { $unwind: "$comments" },
       // Do the lookup matching
       { $lookup: {
          "from": "comments",//other table name
          "localField": "comments",
          "foreignField": "_id",
          "as": "commentObjects"
       }},
       // Unwind the result arrays ( likely one or none )
        { $unwind: "$commentObjects" }, 
       // Group back to arrays
       { $group: {
           _id: "$_id",           
           avgRating:{"$avg":{"$sum": '$commentObjects.rating' }}
          
       }}
   ])
      .then(dbRating =>{ 
      // console.log(dbRating);
        return db.Menu
        .findOneAndUpdate({ _id:req.params.id},{rating:dbRating[0].avgRating},{new:true})       
      }).then(dbMenu=>{
        res.json(dbMenu)})
      .catch(err => res.status(422).json(err));
  },
  findAllComments: function(req, res) {
    db.Menu
      .findById({ _id:req.params.id})
      .populate("comments")
      .then(dbMenu => {
          //console.log("firstName"+dbMenu.user.firstName);
        res.json(dbMenu);
      })
      .catch(err => res.status(422).json(err));
  },
  findAllMenus: function(req, res) {
    console.log("Inside find all menus");
    db.Menu
      .find({restaurantId:req.params.id})
      .then(dbMenu => {
          //console.log("firstName"+dbMenu.user.firstName);
        res.json(dbMenu);
      })
      .catch(err => res.status(422).json(err));
  },

  updateMenu: function(req, res) {
    console.log("Inside updateMenu");
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