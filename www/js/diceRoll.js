//This array contains the rolls that where made this turn with dice-1 on index 0, dice-2 on index 1 etc...
var theDiceRolls = [];

//The roll the player is at (1-3)
var rollNumber = 0;

$('.dice-area').on('click', 'button.roll', function() {

	if(rollNumber < 3) {
		rollAllDices();
		rollNumber++;
	}

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

		var activeDiceRoll = oneDiceRoll();

		theDiceRolls[i] = activeDiceRoll;

		paintDiceRoll(activeDiceRoll, "dice-" + (i + 1));
	}

}

function oneDiceRoll() {

	var randomNumber = Math.floor((Math.random() * 6) + 1);

	return randomNumber;
}
