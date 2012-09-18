// Application Routes

module.exports = function(app, models) {

	// Default Route
	app.get('/', function(req, res) {

		res.render('index.jade', {
			locals: {title: 'Quiz Game'}
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
		res.send("playing the game");
	});

	app.get('/admin', function(req, res) {
		res.send("admin section");
	});

	// New Questions Route
	app.get('/admin/newQuestion', function(req, res) {
		res.send("new question");
		
		//res.render("newQuestion.jade", {locals: {title: 'New Question'}});
		
	});
	
	// Adding a new Question
	app.get('/addQuestion', function(req, res) {
		res.send("adding a question");
	});
	
};  
