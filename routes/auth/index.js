const express = require('express')
const router = express.Router()
const User = require('../../models/login')
const passport = require('../../passport')

/* router.get('/google', passport.authenticate('google', { scope: ['profile'] }))
router.get(
	'/google/callback',
	passport.authenticate('google', {
		successRedirect: '/',
		failureRedirect: '/login'
	})
); */

// this route is just used to get the user basic info
router.get('/user', (req, res, next) => {
	console.log('===== user!!======')
	console.log(req.user)
	if (req.user) {
		return res.json({ user: req.user })
	} else {
		return res.json({ user: null })
	}
});
router.post('/login', function(req, res, next) {
	passport.authenticate('local', function(err, user, info) {
		if (err) {
			if (err.name === 'IncorrectCredentialsError') {
			  return res.status(400).json({
				//success: false,
				message: err.message
			  });
			}
	  
			return res.status(400).json({
			  //success: false,
			  message: 'Could not process the form.'
			});
		  }
		console.log('POST to /login')
        const user1 = JSON.parse(JSON.stringify(user)) // hack
        console.log("*****************"+info.message);
        const cleanUser = Object.assign({}, user1);        
		if (cleanUser) {
			console.log(`Deleting ${cleanUser.password}`)
			delete cleanUser.password
		}
	  
		  return res.json({
			//success: true,
			message: 'You have successfully logged in!',
			user: cleanUser
		  });	  
	
	})(req, res, next);
});
/* router.post(
	'/login',
	function(req, res, next) {
		console.log(req.body)
		console.log('================')
		next();
	},
	passport.authenticate('local'),
	(req, res) => {
		
	}
) */

router.post('/logout', (req, res) => {
	if (req.user) {
		req.session.destroy()
		res.clearCookie('connect.sid') // clean up!
		return res.json({ msg: 'Logging you out' })
	} else {
		return res.json({ msg: 'No user to log out!' })
	}
})

router.post('/signup', (req, res) => {
	const { firstName,lastName,email, password,restaurantOwner } = req.body
	// ADD VALIDATION
	User.findOne({ 'email': email }).then(function (user) {
		if (user) {
			return res.json({
				error: `Sorry, there is already a user with the email: ${email}`
			})
		}
		else{
			const newUser = new User({
            	'firstName':firstName,
            	'lastName':lastName,
				'email': email,
            	'password': password,
            	'restaurantOwner':restaurantOwner
			})
			newUser.save((err, savedUser) => {
				if (err) return res.json(err)
				return res.json(savedUser)
			})
		}
	})
})

module.exports = router
