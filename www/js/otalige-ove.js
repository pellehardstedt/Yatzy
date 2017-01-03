//otålige ove bot personality
var runBotOO;

(function(){
	function runBotOOfunc(){
		var tdToScore;

		console.log(results);

		tdToScore = findMaxOfAvailable(results);

		clickTd(tdToScore);
		console.log('done');
		setTimeout(submitScore, 3000);
	}

	runBotOO = runBotOOfunc;
})();