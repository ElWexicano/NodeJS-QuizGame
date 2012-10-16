// Application Routes

module.exports = function(app, models) {
	
	// Default Route
	app.get('/', function(req, res) {
		res.render('index.jade', {
			title: 'The Rapid Quiz Game'
		});
	});
	
	// Game Routes - Play
	app.get('/play', function(req, res) {
		models.Question.find(function(err, questions) {
			var question = questions[0];
			res.render('play.jade', {
				title: 'The Rapid Quiz Game',
				question: question.title + ' ?',
				answer1: question.answers['correct'],
				answer2: question.answers['incorrect'][0],
				answer3: question.answers['incorrect'][1],
				answer4: question.answers['incorrect'][2],
			});
		});
	});
	
	// Game Routes - Answer
	app.post('/answerQuestion', function(req, res) {
		
	});

	// Game Routes - Play Again
	app.post('/playAgain', function (req, res) {
		
	});

	// Admin Routes
	app.get('/gameManager', function(req, res) {
		res.render("", {
			
		});
	});

	// Admin Routes - Create Question
	app.get('/gameManager/createQuestion', function(req, res) {
		res.render("createQuestion.jade", {
			title: 'The Rapid Quiz Game'
		});
	});
	
	// Admin Routes - Submit Question
	app.post('/gameManager/submitQuestion', function(req, res) {
		var title = req.body.question;
		var correctAnswer = req.body.correctAnswer;
		var wrongAnswers = [req.body.wrongAnswer1, 
			req.body.wrongAnswer2, req.body.wrongAnswer3];

		new models.Question({
			title: title,
			answers: { correct: correctAnswer, incorrect: wrongAnswers}
		}).save();
	});
	
	// Admin Routes - View Questions
	app.get('/gameManager/viewQuestions', function(req, res) {
		models.Question.find(function(err, questions) {
			res.render("viewQuestions.jade", {
				questions: questions 
			});
		});
	});
	
};  
