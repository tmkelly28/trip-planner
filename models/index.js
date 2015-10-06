var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost/trip-planner');

var db = mongoose.connection;

var Schema = mongoose.Schema;


var placeSchema = new Schema({
	address: String,
	city: String,
	state: String,
	phone: String,
	location: [Number]
})

var hotelSchema = new Schema({
	name: String,
	place: {type: [Schema.Types.ObjectId],
			ref: 'Place'},
	num_stars: { type: Number, min: 1, max: 5 },
	amenities: String
})

var activitySchema = new Schema({
	name: String,
	place: {type: [Schema.Types.ObjectId],
			ref: 'Place'},
	age_range: String
})

var restaurantSchema = new Schema({
	name: String,
	place: {type: [Schema.Types.ObjectId],
			ref: 'Place'},
	cuisines: String,
	price: { type: Number, min: 1, max: 5 }
})

var Restaurant = mongoose.model('Restaurant', restaurantSchema);
var Activity = mongoose.model('Activity', activitySchema);
var Hotel = mongoose.model('Hotel', hotelSchema);
var Place = mongoose.model('Place', placeSchema);

module.exports = {
	Restaurant: Restaurant,
	Activity: Activity,
	Hotel: Hotel,
	Place: Place
}

