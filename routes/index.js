// Application Routes

module.exports = function(app, models) {

	// Default Route
	app.get('/', function(req, res) {

		res.render('index.jade', {
			locals: {title: 'The Rapid Quiz Game'}
		});

		// Get the data from the db
		// models.examples.find({}, function(err, docs){
		// 	res.render('index.jade', {
		// 		locals: {
		// 			title: 'Example',
		// 			search_placeholder: 'Search',
		// 			examples: docs
		// 		}
		// 	});
		// });
		
	});
	
	// Play the Game Route
	app.get('/play', function(req, res) {
		res.render('play.jade', {
			locals: {title: 'The Rapid Quiz Game'}
		});
	});

	app.get('/newQuestion', function(req, res) {
		res.render("newQuestion.jade", {
			locals: {title: 'New Question'}
		});
	});
	
	// Adding a new Question
	app.get('/addQuestion', function(req, res) {
		res.send("adding a question");
	});
	
};  
