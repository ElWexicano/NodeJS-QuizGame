function Question(title, answers) {
	var self = this;
	self.title = title;
	self.answers = answers
}

Question.prototype = {
    title: undefined,
    answers: undefined
};

Question.prototype.generateMathQuestion = function() {
    function getRandomNumber() {
        return Math.floor((Math.random() * 100) + 1);
    }

    var x = getRandomNumber();
    var y = getRandomNumber();
    var q, ans;

    switch (Math.floor((Math.random() * 4) + 1)) {
    case 1:
        q = x + "+" + y;
        ans = x + y;
        break;
    case 2:
        q = x + "-" + y;
        ans = x - y;
        break;
    case 3:
        q = x + "*" + y;
        ans = x * y;
        break;
    default:
        q = x + "/" + y;
        ans = x / y;
        break;
    }

    self.title = q;
    self.answers = {
        correct: ans,
        wrong: [getRandomNumber(), getRandomNumber(), getRandomNumber()]
    };
};

Question.prototype.getAnswers = function() {
    return [self.answers.correct, self.answer.wrong].sort(function() {
        return 0.5 - Math.random();
    });
};

function ViewModel() {
    var self = this;
	
	self.timer = 30;
	self.score = ko.observable();
	self.username = ko.observable();
	
    self.questions = ko.observableArray([
        new Question("How many legs does a four legged horse have?", {
        correct: "Four",
        wrong: ["Two", "Three", "One"]
    }), new Question("What is the capital of France?", {
        correct: "Paris",
        wrong: ["Calais", "Bordeaux", "Lyon"]
    })]);

    self.currentQuestion = ko.observable();
    
    self.answerQuestion = function(answer) {
		if(self.currentQuestion.answer.correct === answer) {
			self.timer += 3;
			self.score += 1;
		} else {
			self.timer -= 3;
		}
		
		self.currentQuestion = self.getNextQuestion();
	};
	
	self.play = function() {
		
	};
	
	self.getNextQuestion = function() {
		var nextQuestion = new Question();
		var numQuestions = self.questions.length;
		
		if(numQuestions > 0) {
			var pos = Math.floor(Math.random() * numQuestions);
			nextQuestion = self.questions[pos];
			self.questions.splice(pos, 1);
		} else {
			nextQuestion.generateMathQuestion();
		}
		return nextQuestion;
	};
}
