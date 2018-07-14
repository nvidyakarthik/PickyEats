const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  description: { type: String,trim:true},
  //rating: { type: Number, required: true}
  user:{type:String,default:"Anonymous",trim:true},
  rating:{type:Number,default:0}
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
