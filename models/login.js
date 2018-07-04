const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    firstName: {type: String, required: true },
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    restOwner: Boolean,
    admin: Boolean,
    date: {type: Date, default: Date.now}
});

const Users = Mongoose.model("Users", usersSchema);

module.exports = Users;
 