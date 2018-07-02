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
  }
    //restaurants from api change it
  /* FindAllRestaurants: function(req, res) {
    db.Restaurant
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllCategories: function(req, res) {
    db.Category
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findRestaurantById: function(req, res) {
    db.Restaurant
      .findById({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findRestaurantByCategory: function(req, res) {
    db.Restaurant
      .findById({ _id: req.params.category })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
  */
};
