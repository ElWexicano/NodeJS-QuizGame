/*
    Application Routes
    Author  : Shane Doyle
    Date    : 17/10/2012
    This file is used to store the routes
    for the application.
*/
module.exports = function(app, models) {
	
	var title = "The Rapid Quiz Game";
	
	// Default Route
	app.get("/", function(req, res) {
		res.render("index.jade", {
			title: title
		});
	});
	
	// Game Routes - Play
	app.get("/play", function(req, res) {		
		models.Question.find(function(err, questions) {
			var question = questions[0];
			res.render("play.jade", {
				title: title,
				question: question.title + " ?",
				answer1: question.answers["correct"],
				answer2: question.answers["incorrect"][0],
				answer3: question.answers["incorrect"][1],
				answer4: question.answers["incorrect"][2],
			});
		});
	});

	// Admin Routes - Login
	app.get("/quizManager/login", function(req, res) {
		res.render("login.jade", {
			title: title
		});
	});
	
	// Admin Routes - Login
	app.post("/quizManager/login", function(req, res) {
		req.method = "get";
		if(req.body.username === "shane" && req.body.password === "shane"){
			res.redirect(req.session.originalRoute);
			req.session.logged = true;
		} else {
			res.redirect("/quizManager/login");
		}
	});
	
	// Admin Routes - Logout
	app.get("/quizManager/logout", function(req, res) {
		req.session.logged = false;
		res.redirect("/");
	});

	// Admin Routes - Create Question
	app.get("/quizManager/createQuestion", function(req, res) {
		if(!req.session.logged) {
			req.session.originalRoute = req.path;
			res.redirect("/quizManager/login");
			return;
		}
		res.render("createQuestion.jade", {
			title: title
		});
	});
	
	// Admin Routes - Submit Question
	app.post("/quizManager/submitQuestion", function(req, res) {
		var title = req.body.question;
		var correctAnswer = req.body.correctAnswer;
		var wrongAnswers = [req.body.wrongAnswer1, 
			req.body.wrongAnswer2, req.body.wrongAnswer3];

		new models.Question({
			title: title,
			answers: { correct: correctAnswer, incorrect: wrongAnswers}
		}).save();
		
		req.method = "get";
		res.redirect("/quizManager/createQuestion");
	});
	
	// Admin Routes - View Questions
	app.get("/quizManager/viewQuestions", function(req, res) {
		if(!req.session.logged) {
			req.session.originalRoute = req.path;
			res.redirect("/quizManager/login");
			return;
		}
		models.Question.find(function(err, questions) {
			res.render("viewQuestions.jade", {
				title: title,
				questions: questions 
			});
		});
	});
};
