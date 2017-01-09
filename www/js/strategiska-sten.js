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
			straight: []
		}

		var chances = Array.apply(null, Array(15)).map(function () {});

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
					chances[index] = 'done';
				}
			});

		var existingPair = 0;
		var wasOrIsThreeOrMore = false;

		dicesSorted.forEach(function(diceRoll, index) {

			if(diceRoll !== 1 && diceRoll !== 6 && $.inArray(diceRoll, botDecideObject.straight) < 0) {
				botDecideObject.straight.push(diceRoll);
			}

			if(index === 4) {

				var straightLength = botDecideObject.straight.length;

				console.log(straightLength);

				if(chances[10] !== 'done') {
					if($.inArray(1, dicesSorted) >= 0) {
						chances[10] = Math.pow(1/6, 4 - straightLength);
					} else {
						chances[10] = Math.pow(1/6, 5 - straightLength);
					}
				}

				if(chances[11] !== 'done') {
					if($.inArray(6, dicesSorted) >= 0) {
						chances[11] = Math.pow(1/6, 4 - straightLength);
					} else {
						chances[11] = Math.pow(1/6, 5 - straightLength);
					}
				}
			}

			for(var i = 4; i > index; i--) {

				if(diceRoll === dicesSorted[i]) {

					var numberOfSame = (i - index + 1);

					chances[6] = 1;

					if(diceRoll !== existingPair && existingPair !== 0) {
						chances[7] = 1;
						if(wasOrIsThreeOrMore === true) {
							chances[12] = 1;
						}
					} else if(existingPair === 0) {
						existingPair = diceRoll;
						if(numberOfSame >= 3) {
							wasOrIsThreeOrMore = true;
							chances[6] = 1;
						}
					}

					if(numberOfSame === 5 && chances[14] !== 'done') {
						chances[14] = 1;
					}

					if(chances[diceRoll-1] !== 'done') {
						chances[diceRoll-1] = Math.pow(1/6, 5 - numberOfSame); //Not sure if this should be changed if you have x score in the bucket
					}

					if(chances[6] !== 'done') {
						chances[6] = 1;
					}
				} else {
					if(chances[6] == false) {
						chances[6] = 4/6;
					}
					if(chances[7] == false) {
						chances[7] = 4/6*3/6*2/6; //Chance for two pairs
					}
					if(chances[8] == false) {
						chances[8] = 4/6*3/6; //Chance for threeOfAKind
					}
					if(chances[9] == false) {
						chances[9] = 4/6*3/6*2/6*1/6; //Chance for fourOfAKind
					}
				}
			}
		});
		console.log(chances);
	}

	function rollAgain(){
		rollDices();
		makeCalculations();
	}

	runBotSS = runBotSSfunc;
	whatToDoNextCalcFunc = whatToDoNextCalc;
})();