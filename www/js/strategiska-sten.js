//otålige ove bot personality
var runBotSS;

(function(){
	//the td the bot will eventually score.
	var td;

	//the global "run"-function that is reachable by global variable runBotOO.
	function runBotSSfunc(){
		makeCalculations();
	}

	function makeCalculations(){
		whatToDoNextCalc();

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

	function	whatToDoNextCalc(){

		var botDecideObject = {};

		theDiceRolls.forEach(function(diceRoll, index) {

			for(var i = 1; i < (5 - index); i++) {
				if(diceRoll === theDiceRolls[i]) {
					//more then one of this number exists
					botDecideObject.
				}
			}
		});
	}

	function rollAgain(){
		rollDices();
		makeCalculations();
	}

	runBotSS = runBotSSfunc;
})();