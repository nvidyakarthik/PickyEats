const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
    restaurant: {type: Schema.ObjectId, ref: "restaurant"},
    name: {type: String, required: true },
    description: {type: String, required: true},
    price: {type: Number, required: true},
    
});

const Menu = Mongoose.model("Menu", userSchema);

module.exports = Menu;