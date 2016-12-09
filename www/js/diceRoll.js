//This array contains the rolls that where made this turn with dice 1 on index 0 etc...
var theRolls = [];

$('.dice-area').on('click', 'button.roll', function() {

	rollAllDices();

});

function rollAllDices() {

	for(var i = 0; i < 5; i++) {

		var activeDiceRoll = oneDiceRoll();

		theRolls[i] = activeDiceRoll;

		paintDiceRoll(activeDiceRoll, "dice-" + (i + 1));
	}
}

function oneDiceRoll() {

	var randomNumber = Math.floor((Math.random() * 6) + 1);

	return randomNumber;
}
