//This array contains the rolls that where made this turn with dice-1 on index 0, dice-2 on index 1 etc...
var theDiceRolls = [];

//How manny rolls the player has left (3-0)
var rollNumber = 3;

//Global vars holding functions
var rollDices,
		clearDices, //Clearing the locks on the dices
		lockDices, //Locks the dice that you send to this function
		totalClearOfAll; //Resets everything (locks, dices, round, rollNumber)

$(startDiceRoll());

function startDiceRoll() {

	$('.dice-area').find('.lock-wrapper').hide();

	$('.dice-area .roll-number').text(rollNumber);

	function rollDicesFunc() {
		if($('.score-table').find('td').hasClass('filled-in')) {
			return;
		}	else if (rollNumber > 1) {
			rollAllDices();
			rollNumber--;
			$('.dice-area').find('.lock-wrapper').show();
		} else if (rollNumber === 1) {
			rollAllDices();
			rollNumber--;

			setTimeout(function(){
				clearDicesFunc();
			}, 1400);
		}
		scoresForEachCategory();
		//update visuals of scores for each category
			setTimeout(function(){
				updateCategoryScorePreview();
			}, 1400);
		$('.dice-area .roll-number').text(rollNumber);
	}

	//Locks the dice when you click the lock
	function lockDicesFunc(diceClicked) {
		if(rollNumber > 0 && rollNumber < 3) {
			diceClicked.find('i').toggleClass('fa-unlock fa-lock');
			diceClicked.find('.lock-wrapper').toggleClass('unlocked locked');
		}
	}

	function clearDicesFunc() {
		$('.dice-area').find('.fa-lock').toggleClass('fa-unlock fa-lock');
		$('.dice-area').find('.locked').toggleClass('unlocked locked');
		$('.dice-area').find('.lock-wrapper').hide();
	}

	function rollAllDices() {

		for(var i = 0; i < 5; i++) {

			if($('.dice-area #dice-' + (i + 1)).siblings().find('i').hasClass('fa-lock')) {
				continue;
			}

			rollDiceIllusion("dice-" + (i + 1),i);
			var activeDiceRoll = oneDiceRoll();
			theDiceRolls[i] = activeDiceRoll;
		}

		function oneDiceRoll() {
			var randomNumber = Math.floor((Math.random() * 6) + 1);
			return randomNumber;
		}

		//Roll dice illusion with timer (the last rolls are slower then the first ones)
		function rollDiceIllusion(diceID,diceIndex) {
			var activeTimesToRoll = timesToRoll();
			var first = true;

			while(activeTimesToRoll > 100) {
				(function() {
					var random = !first;
					setTimeout(function(){
						paintDiceRoll(random ? oneDiceRoll() : theDiceRolls[diceIndex], diceID);
					}, activeTimesToRoll);
					activeTimesToRoll -= 100;
					first = false;
				})();
			}
		}

		function timesToRoll() {

			//This is time in ms (a number between 700-1400 ms)
			var randomNumber = Math.floor((Math.random() * 700) + 700);
			return randomNumber;
		}
	}

	function totalClearOfAllFunc() {
		rollNumber = 3;
		round = 0;
		$('.dice-area').find('.fa-lock').toggleClass('fa-unlock fa-lock');
		$('.dice-area').find('.locked').toggleClass('unlocked locked');
		$('.dice-area').find('.lock-wrapper').hide();
		$('.dice-area .roll-number').text(rollNumber);

		for(var i = 1; i < 6; i++) {
			var canvas = document.getElementById("dice-" + i);
			var ctx = canvas.getContext("2d");

			var cW = canvas.width;
			var cH = canvas.height;

			ctx.clearRect(0, 0, canvas.width, canvas.height);
		}
	}

	rollDices = rollDicesFunc;
	clearDices = clearDicesFunc;
	totalClearOfAll = totalClearOfAllFunc;
	lockDices = lockDicesFunc;
}