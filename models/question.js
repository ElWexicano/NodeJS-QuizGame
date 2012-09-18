module.exports = function(mongoose) {
	var collection = 'questions';
	var Schema = mongoose.Schema;
	var ObjectId = Schema.ObjectId;

	var schema = new Schema({
		title: String,
		answers: {
			correct: String,
			incorrect: [String] },
		category: String,
		entered: {type: Date, default: Date.now}
	});

	this.model = mongoose.model(collection, schema);

	return this;
};
