const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  description: { type: String},
  rating: { type: Number, required: true},
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
