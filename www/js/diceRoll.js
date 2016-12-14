//This array contains the rolls that where made this turn with dice-1 on index 0, dice-2 on index 1 etc...
var theDiceRolls = [];

//How manny rolls the player has left (3-0)
var rollNumber = 3;

$(startDiceRoll())

function startDiceRoll() {

	$('.dice-area').find('.lock-wrapper').hide();

	$('.dice-area .roll-number').text(rollNumber);

	$('.dice-area').on('click', 'button.roll', function() {
		if(rollNumber > 1) {
			rollAllDices();
			rollNumber--;
			$('.dice-area').find('.lock-wrapper').show();
		} else if (rollNumber === 1) {
			rollAllDices();
			rollNumber--;

			setTimeout(function(){
				$('.dice-area').find('.fa-lock').toggleClass('fa-unlock-alt fa-lock');
				$('.dice-area').find('.locked').toggleClass('unlocked locked');
				$('.dice-area').find('.lock-wrapper').hide();
			}, 1400);
		}
		sanityCheck(theDiceRolls);
		$('.dice-area .roll-number').text(rollNumber);
	});

	//Locks the dice when you click the lock
		$('.dice-area').on('click', '.canvas-lock-area', function() {
		if(rollNumber > 0 && rollNumber < 3) {
			$(this).find('i').toggleClass('fa-unlock-alt fa-lock');
			$(this).find('.lock-wrapper').toggleClass('unlocked locked');
		}
	});

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
}