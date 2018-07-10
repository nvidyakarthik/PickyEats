const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs')
mongoose.promise = Promise

const loginSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: {type:String,required:true},
  password: { type: String, required: true },
  restaurantOwner:{type:Boolean,default:false}

});

// Define schema methods
loginSchema.methods = {
	checkPassword: function(inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

// Define hooks for pre-saving
loginSchema.pre('save', function(next) {
	if (!this.password) {
		console.log('=======NO PASSWORD PROVIDED=======')
		next()
	} else {
		this.password = this.hashPassword(this.password)
		next()
	}
	// this.password = this.hashPassword(this.password)
	// next()
})


const Login = mongoose.model("Login", loginSchema);

module.exports = Login;
 