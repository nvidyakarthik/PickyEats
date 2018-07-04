const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    restaurant: {type: Schema.ObjectId, ref: "restaurant" },
    user: {type: Schema.ObjectId, ref: "users"},
    menu: {type: Schema.ObjectId, ref: "menu"},
    description: {type: String, required: true},
    rating: {type: Number, required: true},
    date: {type: Date, default: Date.now}
});

const Comment = Mongoose.model("Comment", commentSchema);

module.exports = Comment;