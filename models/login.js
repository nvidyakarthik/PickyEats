const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const loginSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: {type:String,required:true},
  password: { type: String, required: true },
  restaurantOwner:{type:Boolean,default:false}

});

const Login = mongoose.model("Login", loginSchema);

module.exports = Login;
 