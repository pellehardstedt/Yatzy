//otålige ove bot personality
var runBotOO;

(function(){
	function runBotOOfunc(){
		makeCalculations();
	}

	function makeCalculations(){
		var td = findMaxOfAvailable(results);

		// If Otålige Ove has only 0s after his first roll, he will roll one more time. 
		while(td === 0){
			if(rollNumber > 0){
				rollDices();
				td = findMaxOfAvailable(results);
			}
			else{
				td = $('.score-table td.player-' + activePlayer.playerNo).not('.filled-in-perm, .no-preview').first();
			}
		}

		//call the submitFunction in bot-run.js , passing the chosed td to score.
		submitFunction(td);
	}

	runBotOO = runBotOOfunc;
})();