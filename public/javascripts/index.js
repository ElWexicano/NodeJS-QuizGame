$(function() {
    var seconds = 30;

    var myTimer = setInterval(function() {
        var width = seconds<30 ? (10 * seconds / 30) * 10 : 100;

        seconds -= 0.10;

        if (seconds <= 0) {
            clearInterval(myTimer);
            width = 0;
            seconds = 0;
        } else if (seconds <= 10) {

        }

        $('.bar').css('width', width + '%');
    }, 100);

    /**
     * This method is used to answer a question.
     **/
    function answerQuestion(answer) {

        if (answer == 3) {
            seconds += 3;
        } else {
            seconds -= 3;
        }
    }
    
    $(".resetFormButton").click(function() {
		
		console.log("form");
		
		$("form").get(0).reset();
	});
	
	ko.applyBindings(new ViewModel());
});



