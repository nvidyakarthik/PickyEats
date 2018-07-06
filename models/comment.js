const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  description: { type: String},
  //rating: { type: Number, required: true}
  user:[{ type: Schema.Types.ObjectId, ref: 'Login' }]
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
