var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var models = require('../models');

var Hotel = models.Hotel;
var Restaurant = models.Restaurant;
var Activity = models.Activity;

/* GET home page. */
router.get('/', function(req, res, next) {
	var data = {};

	Hotel.find({}).exec()
	.then(function(hotels) {
		return data['hotels'] = hotels;
	})
	.then(function() {
		return Restaurant.find({}).exec();
	})
	.then(function(restaurants) {
		return data['restaurants'] = restaurants;
	})
	.then(function() {
		return Activity.find({}).exec();
	})
	.then(function(activities) {
		data['activities'] = activities;
		return data
	})
	.then(function(data) {
		res.locals = data;
		res.render('index');
	})
	.catch(function(err) {
		console.log(err);
	});
});

module.exports = router;
