//otålige ove bot personality
var whatToDoNextCalcFunc; //<---Remove later
var runBotSS;

(function(){
	//the td the bot will eventually score.
	var td;

	//the global "run"-function that is reachable by global variable runBotOO.
	function runBotSSfunc(){
		makeCalculations();
	}

	function makeCalculations(){

		td = whatToDoNextCalc();

		// If Otålige Ove has only 0s after a roll, he will roll one more time if he has available rolls. 
		if(!td){
			if(rollNumber > 0){
				setTimeout(rollAgain, 2000);
			}
			else{
				td = $('.score-table td.player-' + activePlayer.playerNo).not('.filled-in-perm, .no-preview').first();
				submitFunction(td);
			}
		}
		else{
			//call the submitFunction in bot-run.js , passing the chosen td to score.
			submitFunction(td);
		}
	}

	function	whatToDoNextCalc(){

		var botDecideObject = {
			doneTdList: []
		},
		dicesSorted = theDiceRolls.slice();

    dicesSorted.sort(function (b, a) {
      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
      return 0;
    });

		//Saves all the tds that are filled-in-perm for this bot under a object property
		$('.score-table td.player-'+activePlayer.playerNo)
			.not('.no-preview')
			.each(function(index) {
				if($(this).hasClass('filled-in-perm')) {
					botDecideObject.doneTdList.push(index);
				}
			});

		dicesSorted.forEach(function(diceRoll, index) {

			for(var i = index; i < 5; i++) {

				//$.inArray(14, botDecideObject.doneTdList)

				if(diceRoll === dicesSorted[i+1]) {
					if(i+1 === 4 && $.inArray(14, botDecideObject.doneTdList) < 0) {
						//return td position 14 (yatzy)
					}	else if(i+1 === 3) {
						//fyrtal av diceRoll
						if(rollNumber === 0 && diceRoll <= 3 && $.inArray(diceRoll+1, botDecideObject.doneTdList) < 0) {
							//retunera diceRoll+1 som td index (fyrtal av övre bonus delen)
						} else if($.inArray(14, botDecideObject.doneTdList) < 0) {
							//aim for yatzy
						}
					} else if(i+1 === 2) {
						//only have 1 pair what we know
					}
				}
			}
		});
	}

	function rollAgain(){
		rollDices();
		makeCalculations();
	}

	runBotSS = runBotSSfunc;
	whatToDoNextCalcFunc = whatToDoNextCalc;
})();