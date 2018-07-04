const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    restName: {type: String, required: true },
    restOwner: {type: Schema.ObjectId, ref: "users"},
    street: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    zip: {type: number, required: true},
    category: {type: String, required: true},
    date: {type: Date, default: Date.now}
});

const Restaurant = Mongoose.model("Restaurant", userSchema);

module.exports = Restaurnat;