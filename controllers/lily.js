//REQUIREMENTS
var express = require('express');
var mongoose = require('mongoose');
var db = process.env.MONGODB_URI || 'mongodb://localhost/lily_dev';
var router = express.Router();
var User = require('../models/users.js');

//SEED
var user1 = new User({
	username: 'lilywhom',
	password: 'attentionseekingtwerp',
	email: 'lily.hu@ymail.com',
});

//TEST
router.get('/testing', function(req, res) {
	console.log('TEST');
});

//SEED
router.get('/', function(req, res) {

	user1.save(function(err) {
		if(err) {
			console.log (err);
		} else {
			console.log('Saved: ' + user1.username);
		};
	});


	user1.save();
	
	res.redirect('/users');
});

module.exports = router;