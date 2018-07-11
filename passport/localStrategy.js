const User = require('../models/login')
const LocalStrategy = require('passport-local').Strategy

const strategy = new LocalStrategy(
	{
        usernameField: 'email', // not necessary, DEFAULT
		passwordField:'password',
		passReqToCallback: true

	},
	function(req,email, password, done) {
		const userData = {
			email: email.trim(),
			password: password.trim()
		  };

		User.findOne({ 'email': userData.email }, (err, userMatch) => {
			if (err) {
				return done(err);
			}
			
			if (!userMatch) {
				const error = new Error('Incorrect email or password');
				error.name = 'IncorrectCredentialsError';
		  
				return done(error);
			}
			
			if (!userMatch.checkPassword(password)) {
				return done(null, false, { message: 'Incorrect password' })
			}
			return done(null, userMatch)
		})
	}
)

module.exports = strategy
