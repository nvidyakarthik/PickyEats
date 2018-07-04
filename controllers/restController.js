const db = require("../models");

 //Defining methods for the booksController
module.exports = {

  createRestaurant: function(req, res) {
    console.log(req.body);
    db.Restaurant
      .create(req.body)
      .then(dbModel => {
         res.json(dbModel);
        
      })
      .catch(err => res.status(422).json(err));
  },
  createComment: function(req, res) {
    console.log(req.body);
    db.Comment
      .create(req.body)
      .then(dbComment => {
        console.log("params"+req.params.id);
        console.log("dbcomment"+dbComment._id);
        return db.Restaurant.findOneAndUpdate({ _id:req.params.id }, 
        { $push: { comments: dbComment._id} }, 
        { new: true });
                 
      })
      .then(dbRestaurant=> {
        
         res.json(dbRestaurant);
        
      })
      .catch(err => {
        console.log(err);
        res.status(422).json(err);

      });
  },
  findAllComments: function(req, res) {
    db.Restaurant
      .findOne({ _id:req.params.id})
      .populate("comments")
      .then(dbRestaurant => {
        res.json(dbRestaurant);
      })
      .catch(err => res.status(422).json(err));
  },
  findAllCategories: function(req, res) {
    db.Category
      .find(req.query)
      .then(dbCategories => res.json(dbCategories))
      .catch(err => res.status(422).json(err));
  },   
  findRestaurantById: function(req, res) {
    db.Restaurant
      .findById({ _id: req.params.id })
      .populate("menus")
      .populate("category")
      .then(dbRestaurant => res.json(dbRestaurant))
      .catch(err => res.status(422).json(err));
  },
  findRestByCategory: function(req, res) {
    db.Restaurant
      .find({ category:{ _id : req.params.id}})
      .populate("category")
      .then(dbRestaurant => res.json(dbRestaurant))
      .catch(err => res.status(422).json(err));
  },
  findRestByRating: function(req, res) {
    db.Restaurant
      .find({})
      .populate("menus")
      .aggregate([{
       
          $group: {
            _id: '$_id',
            x: {$sum: '$menus.rating' }
            
       }}])
      .then(dbRestaurant => res.json(dbRestaurant))
      .catch(err => res.status(422).json(err));
  }
    //restaurants from api change it
  /* FindAllRestaurants: function(req, res) {
    db.Restaurant
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
  */
};
