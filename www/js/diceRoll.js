//This array contains the rolls that where made this turn with dice-1 on index 0, dice-2 on index 1 etc...
var theDiceRolls = [];

//How manny rolls the player has left (3-0)
var rollNumber = 3;

$(startDiceRoll())

function startDiceRoll() {

	$('.dice-area .roll-number').text(rollNumber);

	$('.dice-area').on('click', 'button.roll', function() {
		if(rollNumber > 1) {
			rollAllDices();
			rollNumber--;
		} else if (rollNumber === 1) {
			rollAllDices();
			rollNumber--;

			setTimeout(function(){
				$('.dice-area').find('.dices').removeClass('locked');
			}, 1400);
		}
		$('.dice-area .roll-number').text(rollNumber);
	});

	//Locks the dice you click (adds class 'locked')
	$('.dice-area').on('click', '.dices', function() {
		if(rollNumber > 0 && rollNumber < 3) {
			$(this).toggleClass('locked');
		}
	});

	function rollAllDices() {

		for(var i = 0; i < 5; i++) {

			if($('.dice-area').find('#dice-' + (i + 1)).hasClass('locked')) {
				continue;
			}

			rollDiceIllusion("dice-" + (i + 1),i);
			var activeDiceRoll = oneDiceRoll();
			theDiceRolls[i] = activeDiceRoll;
			//paintDiceRoll(activeDiceRoll, "dice-" + (i + 1));
		}

		function oneDiceRoll() {
			var randomNumber = Math.floor((Math.random() * 6) + 1);
			return randomNumber;
		}

		//Roll dice illusion with timer (the last rolls are slower then the first ones)
		function rollDiceIllusion(dice,index) {
			var activeTimesToRoll = timesToRoll(), first = true;

			while(activeTimesToRoll > 100) {
				(function(){
					var random = !first;
					setTimeout(function(){
						console.log(random);
						paintDiceRoll(random ? oneDiceRoll() : theDiceRolls[index], dice);
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
}