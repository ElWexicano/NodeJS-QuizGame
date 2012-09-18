module.exports = function(mongoose) {
	var collection = 'scores';
	var Schema = mongoose.Schema;
	var ObjectId = Schema.ObjectId;

	var schema = new Schema({
		username: String,
		score: Number,
		date: {type: Date, default: Date.now},
		country: String
	});

	this.model = mongoose.model(collection, schema);

	return this;
};  
