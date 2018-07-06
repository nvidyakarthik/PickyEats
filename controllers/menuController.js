const db = require("../models");
const axios=require("axios");

module.exports = {

    createMenu: function(req, res) {
      
            
             db.Menu
              .create(req.body)
              .then(dbMenu => {
                console.log("params"+req.params.id);
                console.log("dbMenu"+dbMenu._id);
                return db.Restaurant.findOneAndUpdate({ _id:req.params.id }, 
                { $push: { menus: dbMenu._id} }, 
                { new: true });
                         
              })
              .then(dbRestaurant=> {
                
                 res.json(dbRestaurant);
                
              })
              .catch(err => {
                console.log(err);
                res.status(422).json(err);
        
              });
          } 

}