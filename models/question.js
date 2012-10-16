// The Question Model

module.exports = function(mongoose) {
	var Schema = mongoose.Schema;
	var ObjectId = Schema.ObjectId;

	var schema = new Schema({
		title: String,
		answers: {
			correct: String,
			incorrect: [String] },
		entered: {type: Date, default: Date.now}
	});

	this.model = mongoose.model('Question', schema);

	return this;
};
