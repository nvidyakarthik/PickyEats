const db = require("../models");
const axios=require("axios");

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
  findAllCategories: function(req, res) {
    db.Category
      .find(req.query)
      .then(dbCategories => res.json(dbCategories))
      .catch(err => res.status(422).json(err));
  },
  //search by restaurant name   
  findRestaurantById: function(req, res) {
    db.Restaurant
      .findById({ _id: req.params.id })
      .populate("menus")
      .populate("category")
      .then(dbRestaurant => res.json(dbRestaurant))
      .catch(err => res.status(422).json(err));
  },
  //find restaurant by
  findRestByCategory: function(req, res) {
    db.Restaurant
      .find({ category:{ _id : req.params.id}})
      
      .populate("category menus")
      .then(dbRestaurant => res.json(dbRestaurant))
      .catch(err => res.status(422).json(err));
  },
  //returns average of menu rating
  findRestByRating: function(req, res) {
    console.log("inside here");
    db.Restaurant      
            .aggregate(
              /* [
                // Unwind the source
                { $unwind: "$menus" },
                // Do the lookup matching
                { $lookup: {
                   "from": "menus",
                   "localField": "menus",
                   "foreignField": "_id",
                   "as": "menuObjects"
                }},
                // Unwind the result arrays ( likely one or none )
                 { $unwind: "$menuObjects" }, 
                // Group back to arrays
                { $group: {
                    _id: "$_id",
                     total:{$avg: {$sum: '$menus.rating' }}, 
                    menus: { "$push": "$menus" },
                    menusObjects: { "$push": "$menusObjects" }
                }}
            ] */ [
              {$unwind: '$menus' },{
          $group: {
            _id: '$_id',
            total:{$sum: '$menus.rating' }
                        
       }}] )
      .then(dbRestaurant => res.json(dbRestaurant))
      .catch(err => res.status(422).json(err));
  },
  //search all restaurant by zip
  searchRest: function(req,res){
     axios
    .get("https://api.foursquare.com/v2/venues/search",{ params: req.query})
    .then(({ data: { response } }) => {
      res.json(response)
    })
    .catch(err => {
      console.log(err);
      res.status(422).json(err)});

  }

};


//session stored 
var estLat = sessionStorage.getItem("startLat");
var estlng = sessionStorage.getItem("startLng");

function foursquareSearch (category, loc, rad){
  let apiString='https://api.foursquare.com/v2/venues/search?';
  const clientID = '&client_id=WPAVV4TBTN0WB1AMQAZG5XTQFJ5AQ2EBWJPLU4Z1PSGAZLVC'
  const clientSecret = '&client_secret=2JYX2TBCNACXMXOUXCVOM5DALR4F4ZZ5H3L35PZ1I54OVP1U'
  const version = '&v=20170801'

  let location = string('&near'=+loc);
  let radius = string('&radius='+rad);
  let categoryID = '&categoryId='+ category;
  const limit = '&limit=10';

  console.log(apiString);
    $.ajax({
      url: apitstring+clientID+clientSecret+version+location+radius+categoryID+limit,
      method:'GET'
    }).then(result => {
      let venues = results.response.venues;
      console.log(venues);
      console.log(venues.id);
    
    })
  
}

