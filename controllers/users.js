//DEPENDENCIES
var express = require('express');
var router = express.Router();
var passport = require('../config/passport.js');
var User = require('../models/users.js');
var request = require('request');

// !!======== NO AUTH ========!!\\

// CREATE A NEW USER
router.post('/', function(req,res) {
	User.create(req.body, function(err, user) {
		if(err) {
			console.log(err); 
			res.status(500).end();
		}
		res.send(true);
	});
});

// !!======== AUTH ========!!\\

router.use(passport.authenticate('jwt', { session: false }));

// TESTING
router.get('/', function(req, res) {
	console.log('hi');
	res.send('bye');
});

//AUTHENTICATED ROUTE TEST
router.get('/logintest', function(req, res) {
	res.send('You are logged in.');
});

module.exports = router;