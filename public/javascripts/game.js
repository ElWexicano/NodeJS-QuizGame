function Question(title, answers) {
	var self = this;
	self.title = title;
	self.answers = [answers.correctAnswer, answers.wrongAnswers];
	self.correctAnswer = answers.correctAnswer;
}

function GameViewModel() {
	var self = this;
	self.timer = 30;
	self.score = ko.observable();
	self.username = ko.observable();
	self.questions = ko.observableArray();
	self.answerQuestion = 
}
