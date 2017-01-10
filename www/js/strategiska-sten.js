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

	function whatToDoNextCalc(){

		var botDecideObject = {
			straight: []
		};

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

			for(var i = 4; i > index; i--) {
				if(diceRoll === dicesSorted[i]) {
					
					var numberOfSame = (i - index + 1);

					chances[6] = 1;

					if(diceRoll !== existingPair && existingPair !== 0) {
						chances[7] = 1;
						if(wasOrIsThreeOrMore === true) {
							chances[12] = 1;
						} else {
							chances[12] = 2/6;
						}
					} else if(existingPair === 0) {
						existingPair = diceRoll;
						if(numberOfSame >= 3) {
							wasOrIsThreeOrMore = true;
							chances[8] = 1;
						}
					}

					if(chances[14] !== 'done') {
						chances[14] = Math.pow(1/6, 5 - numberOfSame);
					}
					if(chances[diceRoll-1] === undefined && chances[diceRoll-1] !== 'done') {
						chances[diceRoll-1] = Math.pow(1/6, 5 - numberOfSame);
					}
					if(chances[6] !== 'done') {
						chances[6] = 1;
					}
				}
			}

			if(chances[diceRoll-1] === undefined && chances[diceRoll-1] !== 'done') {
				chances[diceRoll-1] = Math.pow(1/6, 4);
			}

			if(index === 4) {

				var straightLength = botDecideObject.straight.length;

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

				if(dicesSorted[4] === 1 &&
					chances[0] === undefined &&
					chances[0] !== 'done') {
					chances[0] = Math.pow(1/6, 4);
				}

				for(var i = 0; i < 6; i++) {
					if(chances[i] !== 'done' && chances[i] === undefined) {
						chances[i] = Math.pow(1/6, 5);
					}
				}

				if(chances[6] === undefined) {
					chances[6] = 7056/7776;
				}
				if(chances[7] === undefined) {
					chances[7] = 4/6*3/6*2/6; //Chance for two pairs
				}
				if(chances[8] === undefined) {
					chances[8] = 1656/7776; //Chance for threeOfAKind
				}
				if(chances[9] === undefined) {
					chances[9] = 4/6*3/6*2/6*1/6; //Chance for fourOfAKind
				}
				if(chances[14] === undefined) {
					chances[14] = 4/6*3/6*2/6*1/6; //Chance for yatzy
				}
				if(chances[12] === undefined) {
					chances[12] = 4/6*3/6*2/6*1/6; //Chance for yatzy
				}
			}
		});
		console.log(chances);

		var biggestChanceIndexBonus1 = 0;
		var biggestChanceIndexBonus2 = 0;
		var biggestChanceIndexNoBonus = 0;

		for(var i = 1; i <= chances.length; i++) {

			if(chances[i] > chances[biggestChanceIndexBonus1] && i < 6) {

				biggestChanceIndexBonus1 = i;

			} else if(chances[i] = chances[biggestChanceIndexBonus1] && i < 6) {

				biggestChanceIndexBonus2 = i;

			}
			
			if(chances[i] > chances[biggestChanceIndexNoBonus] && i > 5) {

				biggestChanceIndexNoBonus = i;
			}
		}
		
		if(chances[biggestChanceIndexBonus1] >= chances[biggestChanceIndexNoBonus]) {
			if(chances[biggestChanceIndexBonus1] > 0.0008 && 
				chances[biggestChanceIndexBonus2] < 0.0008) {
				// pair of biggestChanceIndexBonus1 exists
				if(activePlayer.bonus === false) {
					lockAllOfSame(biggestChanceIndexBonus1+1);
				}
			} else if(chances[biggestChanceIndexBonus1] > 0.0008 && chances[biggestChanceIndexBonus2] > 0.0008) {
				// two pairs exists
				lockAllOfSame(biggestChanceIndexBonus1+1);
				lockAllOfSame(biggestChanceIndexBonus2+1);
			}
			if(rollNumber > 0) {
				rollAgain();
			} else if(biggestChanceIndexBonus1 > biggestChanceIndexBonus2) {
				return biggestChanceIndexBonus1;
			} else {
				return biggestChanceIndexBonus2;
			}
		} else {
			if(biggestChanceIndexNoBonus === 10 || biggestChanceIndexNoBonus === 11) {
				lockAllStraight(biggestChanceIndexNoBonus);
			}
			if(rollNumber > 0) {
				rollAgain();
			} else {
				return biggestChanceIndexNoBonus; 
			}
		}
	}

	function lockAllOfSame(dicesToLock){
		for(var i2 = 0; i2 < 5; i2++) {
			if(theDiceRolls[i2] === dicesToLock) {
				lockDices($('.dice-area .canvas-lock-area').eq(i2));
			}
		}
	}

	function lockAllStraight(largeOrSmall){
		for(var i2 = 0; i2 < botDecideObject.straight.length; i2++) {
			var indexOfStraight = $.inArray(botDecideObject.straight[i2], theDiceRolls);
			lockDices($('.dice-area .canvas-lock-area').eq(indexOfStraight));
		}
		if(largeOrSmall === 11) {
			lockDices($('.dice-area .canvas-lock-area').eq($.inArray(6, theDiceRolls)));
		} else {
			lockDices($('.dice-area .canvas-lock-area').eq($.inArray(1, theDiceRolls)));
		}
	}

	function rollAgain(){
		rollDices();
		clearDices();
		makeCalculations();
	}

	runBotSS = runBotSSfunc;
	whatToDoNextCalcFunc = whatToDoNextCalc;
})();