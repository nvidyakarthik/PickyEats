const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  dishName: { type: String, required: true ,trim:true},
  description: { type: String,trim:true},
  price: {type:Number,required:true},
  menutype:{type:String,required:true,trim:true},
  rating:{type:Number,default:0},
  comments:[{ type: Schema.Types.ObjectId, ref: 'Comment' }]      
});

const Menu = mongoose.model("Menu", menuSchema);
module.exports = Menu;