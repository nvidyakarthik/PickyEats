const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  dishName: { type: String, required: true },
  description: { type: String},
  price: {type:Number,required:true},
  rating:{type:Number,default:0},
  comments:[{ type: Schema.Types.ObjectId, ref: 'Comment' }]      
});

const Menu = mongoose.model("Menu", menuSchema);
module.exports = Menu;