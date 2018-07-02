const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
    dishName: { type: String, required: true },
    description: { type: String},
    price: {type:Number,required:true},
      
  });

const restaurantSchema = new Schema({
  restaurantName: { type: String, required: true },
  address: { type: String, required: true },
  category: {type:String,required:true},
  menus:[menuSchema],
  comments:[{ type: Schema.Types.ObjectId, ref: 'Comment' }]
    
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
