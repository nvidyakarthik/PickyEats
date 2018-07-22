const mongoose = require("mongoose");
const Schema = mongoose.Schema;


/* const menuSchema = new Schema({
  dishName: { type: String, required: true },
  description: { type: String},
  price: {type:Number,required:true},
  rating:{type:Number,default:0},
  comments:[{ type: Schema.Types.ObjectId, ref: 'Comment' }]      
}); */

const restaurantSchema = new Schema({
  restaurantName: { type: String, required: true ,trim:true },
  personId:{ type: Schema.Types.ObjectId, ref: 'Login' },
  street: { type: String, required: true ,trim: true},
  city:{type: String, required: true, trim: true},
  state:{type: String, required: true, trim: true},
  zip:{type:Number,required:true,trim: true},
  phone:{type:Number,required:true,trim:true},
  imgpath: {type: String,trim: true},
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  menus:[{ type: Schema.Types.ObjectId, ref: 'Menu' }], 
    
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
