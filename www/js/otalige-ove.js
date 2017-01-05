//otålige ove bot personality
var runBotOO;

(function(){
	//the td the bot will eventually score.
	var td;

	//the global "run"-function that is reachable by global variable runBotOO.
	function runBotOOfunc(){
		makeCalculations();
	}

	function makeCalculations(){
		td = findMaxOfAvailable(results);

		// If Otålige Ove has only 0s after a roll, he will roll one more time if he has available rolls. 
		if(td === 0){
			if(rollNumber > 0){
				setTimeout(rollAgain, 2000);
			}
			else{
				td = $('.score-table td.player-' + activePlayer.playerNo).not('.filled-in-perm, .no-preview').first();
				submitFunction(td);
			}
		}
		else{
			//call the submitFunction in bot-run.js , passing the chosed td to score.
			submitFunction(td);
		}
	}

	function rollAgain(){
		rollDices();
		makeCalculations();
	}

	runBotOO = runBotOOfunc;
})();